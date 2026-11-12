import { classifyHeading, sectionAnchorId } from "@/lib/content/enhancements/sectionMap";
import type { LessonSectionKind } from "@/types/enhancements";

export interface ParsedLessonSection {
  kind: LessonSectionKind;
  heading: string | null;
  anchorId: string | null;
  /** HTML for this section, including the heading element when present. */
  html: string;
}

/**
 * Split sanitized lesson HTML on H2 boundaries so the app can style
 * pedagogical sections and inject diagrams without rewriting Markdown.
 */
export function parseLessonSections(html: string): ParsedLessonSection[] {
  const pattern = /<h2(\s[^>]*)?>[\s\S]*?<\/h2>/gi;
  const matches = [...html.matchAll(pattern)];

  if (matches.length === 0) {
    return [
      {
        kind: "intro",
        heading: null,
        anchorId: null,
        html,
      },
    ];
  }

  const sections: ParsedLessonSection[] = [];
  let cursor = 0;

  for (let i = 0; i < matches.length; i += 1) {
    const match = matches[i];
    const index = match.index ?? 0;

    if (index > cursor) {
      const preface = html.slice(cursor, index).trim();
      if (preface) {
        sections.push({
          kind: sections.length === 0 ? "intro" : "other",
          heading: null,
          anchorId: null,
          html: preface,
        });
      }
    }

    const headingHtml = match[0];
    const headingText =
      headingHtml.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() || null;
    const end = matches[i + 1]?.index ?? html.length;
    const body = html.slice(index, end).trim();

    sections.push({
      kind: headingText ? classifyHeading(headingText) : "other",
      heading: headingText,
      anchorId: headingText ? sectionAnchorId(headingText) : null,
      html: body,
    });

    cursor = end;
  }

  if (cursor < html.length) {
    const trailing = html.slice(cursor).trim();
    if (trailing) {
      sections.push({
        kind: "other",
        heading: null,
        anchorId: null,
        html: trailing,
      });
    }
  }

  return sections;
}
