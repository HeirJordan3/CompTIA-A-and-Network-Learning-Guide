import { SECTION_LABELS } from "@/lib/content/enhancements/sectionMap";
import type { ParsedLessonSection } from "@/lib/content/enhancements/parseSections";

type LessonOutlineProps = {
  sections: ParsedLessonSection[];
  includeKnowledgeCheck?: boolean;
};

const OUTLINE_KINDS = new Set([
  "objectives",
  "definition",
  "why-it-matters",
  "analogy",
  "how-it-works",
  "comparison",
  "key-terms",
  "exam-connections",
  "misconceptions",
  "quick-review",
]);

export function LessonOutline({
  sections,
  includeKnowledgeCheck = false,
}: LessonOutlineProps) {
  const items = sections.filter(
    (section) =>
      section.anchorId &&
      section.heading &&
      OUTLINE_KINDS.has(section.kind),
  );

  if (items.length < 3 && !includeKnowledgeCheck) {
    return null;
  }

  return (
    <nav
      aria-label="On this lesson"
      className="mb-6 rounded-xl border border-slate-200 bg-white px-4 py-4 sm:px-5"
    >
      <p className="text-sm font-semibold text-slate-900">On this lesson</p>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((section) => (
          <li key={section.anchorId}>
            <a
              href={`#${section.anchorId}`}
              className="text-sm text-teal-800 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <span className="font-medium">{SECTION_LABELS[section.kind]}</span>
              <span className="sr-only">: {section.heading}</span>
            </a>
          </li>
        ))}
        {includeKnowledgeCheck ? (
          <li>
            <a
              href="#knowledge-check"
              className="text-sm text-teal-800 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <span className="font-medium">Knowledge check</span>
            </a>
          </li>
        ) : null}
      </ol>
    </nav>
  );
}
