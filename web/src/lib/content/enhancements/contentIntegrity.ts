import type { ParsedLessonSection } from "@/lib/content/enhancements/parseSections";

function normalizeText(value: string): string {
  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Confirm section splitting preserves lesson prose (minus intentionally
 * suppressed Continue Learning blocks when requested).
 */
export function sectionsPreserveLessonText(
  originalHtml: string,
  sections: ParsedLessonSection[],
  options?: { omitContinueLearning?: boolean },
): boolean {
  let expected = originalHtml;
  if (options?.omitContinueLearning) {
    expected = expected.replace(
      /<h2(\s[^>]*)?>\s*Continue Learning\s*<\/h2>[\s\S]*$/i,
      "",
    );
  }

  const expectedText = normalizeText(expected);
  const actualText = normalizeText(sections.map((section) => section.html).join(" "));

  if (!expectedText) return actualText.length === 0;
  if (!actualText.includes(expectedText) && expectedText !== actualText) {
    // Allow minor whitespace/entity drift but reject large content loss.
    const ratio =
      Math.min(expectedText.length, actualText.length) /
      Math.max(expectedText.length, actualText.length);
    return ratio > 0.98;
  }

  return true;
}

export function htmlLooksSanitized(html: string): boolean {
  return !/(<script\b|javascript:|on\w+\s*=|data:text\/html)/i.test(html);
}
