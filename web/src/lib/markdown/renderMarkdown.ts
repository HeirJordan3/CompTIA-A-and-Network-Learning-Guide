import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import type { Options as SanitizeOptions } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { getDomain, getLesson, getTrack } from "@/lib/content/curriculum";
import type { DomainId, TrackId } from "@/types/content";

const schema: SanitizeOptions = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a ?? []), "className"],
    code: [...(defaultSchema.attributes?.code ?? []), "className"],
    pre: [...(defaultSchema.attributes?.pre ?? []), "className"],
    table: [...(defaultSchema.attributes?.table ?? []), "className"],
    th: [...(defaultSchema.attributes?.th ?? []), "align"],
    td: [...(defaultSchema.attributes?.td ?? []), "align"],
  },
};

const FOLDER_TO_DOMAIN: Record<string, DomainId> = {
  "1-operating-systems": "operating-systems",
  "2-security": "security",
  "3-software-troubleshooting": "software-troubleshooting",
  "4-operational-procedures": "operational-procedures",
};

function isSafeExternalHref(href: string): boolean {
  return (
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  );
}

function isUnsafeScheme(href: string): boolean {
  return /^(javascript|data|vbscript|file):/i.test(href.trim());
}

function trackRoute(trackId: TrackId): string {
  return `/tracks/${trackId}`;
}

function domainRoute(trackId: TrackId, domainId: DomainId): string {
  return `/tracks/${trackId}/domains/${domainId}`;
}

function lessonRoute(
  trackId: TrackId,
  domainId: DomainId,
  slug: string,
  hash?: string,
): string {
  return `/tracks/${trackId}/domains/${domainId}/lessons/${slug}${
    hash ? `#${hash}` : ""
  }`;
}

/**
 * Map a curriculum lesson link to an app route.
 * Available lessons → lesson page.
 * Coming-soon / unknown → domain overview (sensible fallback, no FS exposure).
 */
function resolveLessonHref(
  trackId: TrackId,
  domainId: DomainId,
  slug: string,
  hash?: string,
): string {
  if (slug.toLowerCase() === "readme") {
    return domainRoute(trackId, domainId);
  }

  const match = getLesson(trackId, domainId, slug);
  if (match?.lesson.status === "available") {
    return lessonRoute(trackId, domainId, slug, hash);
  }

  // Coming soon or not indexed: keep learners in the domain navigation.
  return domainRoute(trackId, domainId);
}

function rewriteRelativeMarkdownLinks(
  source: string,
  trackId: TrackId,
  domainId: DomainId,
): string {
  const track = getTrack(trackId);
  if (!track) {
    return source;
  }

  return source.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (full, label: string, href: string) => {
      const trimmed = href.trim();

      if (!trimmed || isUnsafeScheme(trimmed)) {
        return `**${label}**`;
      }

      if (isSafeExternalHref(trimmed)) {
        return full;
      }

      // Reject absolute, unc, and null-byte paths. Relative links are matched
      // against an allowlist below; anything else becomes plain text.
      if (
        trimmed.startsWith("/") ||
        trimmed.startsWith("\\\\") ||
        trimmed.includes("\0")
      ) {
        return `**${label}**`;
      }

      // Same-folder README → domain overview
      if (/^README\.md(?:#[\w.-]+)?$/i.test(trimmed)) {
        return `[${label}](${domainRoute(trackId, domainId)})`;
      }

      // Parent README / course map
      if (
        trimmed === "../README.md" ||
        /^(\.\.\/)+README\.md(?:#[\w.-]+)?$/i.test(trimmed)
      ) {
        return `[${label}](${trackRoute(trackId)})`;
      }

      if (
        trimmed === "../COURSE-MAP.md" ||
        /COURSE-MAP\.md(?:#[\w.-]+)?$/i.test(trimmed)
      ) {
        return `[${label}](${trackRoute(trackId)})`;
      }

      // Same-domain lesson: physical-security.md
      if (/^[\w.-]+\.md(?:#[\w.-]+)?$/i.test(trimmed)) {
        const [file, hash] = trimmed.split("#");
        const slug = file.replace(/\.md$/i, "");
        const route = resolveLessonHref(trackId, domainId, slug, hash);
        return `[${label}](${route})`;
      }

      // Cross-domain relative path: ../1-operating-systems/foo.md
      const crossDomain = trimmed.match(
        /^\.\.\/(\d-[a-z0-9-]+)\/([\w.-]+)\.md(?:#([\w.-]+))?$/i,
      );
      if (crossDomain) {
        const folder = crossDomain[1];
        const slug = crossDomain[2];
        const hash = crossDomain[3];
        const domainFromFolder = FOLDER_TO_DOMAIN[folder];
        if (domainFromFolder && getDomain(trackId, domainFromFolder)) {
          const route = resolveLessonHref(
            trackId,
            domainFromFolder,
            slug,
            hash,
          );
          return `[${label}](${route})`;
        }
        return `[${label}](${trackRoute(trackId)})`;
      }

      // Same-track nested path without ../ : 1-operating-systems/foo.md (course map style)
      const nested = trimmed.match(
        /^(\d-[a-z0-9-]+)\/([\w.-]+)\.md(?:#([\w.-]+))?$/i,
      );
      if (nested) {
        const domainFromFolder = FOLDER_TO_DOMAIN[nested[1]];
        if (domainFromFolder && getDomain(trackId, domainFromFolder)) {
          const route = resolveLessonHref(
            trackId,
            domainFromFolder,
            nested[2],
            nested[3],
          );
          return `[${label}](${route})`;
        }
        return `[${label}](${trackRoute(trackId)})`;
      }

      // Unrecognized relative / opaque links: plain text (no FS exposure)
      return `**${label}**`;
    },
  );
}

export async function renderMarkdownToHtml(
  markdown: string,
  trackId: TrackId,
  domainId: DomainId,
): Promise<string> {
  const prepared = rewriteRelativeMarkdownLinks(markdown, trackId, domainId);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(prepared);

  return String(file);
}
