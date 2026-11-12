import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import type { Options as SanitizeOptions } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
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

function rewriteRelativeMarkdownLinks(
  source: string,
  trackId: TrackId,
  domainId: DomainId,
): string {
  return source.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (full, label: string, href: string) => {
      const trimmed = href.trim();

      if (
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("#")
      ) {
        return full;
      }

      // Same-domain lesson: physical-security.md
      if (/^[\w.-]+\.md(?:#[\w.-]+)?$/i.test(trimmed)) {
        const [file, hash] = trimmed.split("#");
        const slug = file.replace(/\.md$/i, "");
        const route = `/tracks/${trackId}/domains/${domainId}/lessons/${slug}${
          hash ? `#${hash}` : ""
        }`;
        return `[${label}](${route})`;
      }

      // Parent README / course map — send to domain or track overview
      if (
        trimmed === "../README.md" ||
        trimmed.endsWith("/README.md") ||
        trimmed === "../COURSE-MAP.md" ||
        trimmed.endsWith("COURSE-MAP.md")
      ) {
        if (trimmed.includes("COURSE-MAP")) {
          return `[${label}](/tracks/${trackId})`;
        }
        if (trimmed === "../README.md") {
          return `[${label}](/tracks/${trackId})`;
        }
        return `[${label}](/tracks/${trackId}/domains/${domainId})`;
      }

      // Cross-domain relative path: ../1-operating-systems/foo.md
      const crossDomain = trimmed.match(
        /^\.\.\/(\d-[a-z0-9-]+)\/([\w.-]+)\.md(?:#([\w.-]+))?$/i,
      );
      if (crossDomain) {
        const folder = crossDomain[1];
        const slug = crossDomain[2];
        const hash = crossDomain[3];
        const domainFromFolder =
          folder === "1-operating-systems"
            ? "operating-systems"
            : folder === "2-security"
              ? "security"
              : folder === "3-software-troubleshooting"
                ? "software-troubleshooting"
                : folder === "4-operational-procedures"
                  ? "operational-procedures"
                  : null;
        if (domainFromFolder) {
          const route = `/tracks/${trackId}/domains/${domainFromFolder}/lessons/${slug}${
            hash ? `#${hash}` : ""
          }`;
          return `[${label}](${route})`;
        }
      }

      // Leave unrecognized relative links as plain text label to avoid broken FS exposure
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
