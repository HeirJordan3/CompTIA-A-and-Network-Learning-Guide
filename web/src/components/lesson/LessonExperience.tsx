import { getDiagram } from "@/lib/content/enhancements/diagramCatalog";
import {
  htmlLooksSanitized,
  sectionsPreserveLessonText,
} from "@/lib/content/enhancements/contentIntegrity";
import { parseLessonSections } from "@/lib/content/enhancements/parseSections";
import { LessonOutline } from "@/components/lesson/LessonOutline";
import { LessonSection } from "@/components/lesson/LessonSection";
import type { LessonEnhancement } from "@/types/enhancements";

type LessonExperienceProps = {
  html: string;
  enhancement?: LessonEnhancement;
};

export function LessonExperience({
  html,
  enhancement,
}: LessonExperienceProps) {
  const sections = parseLessonSections(html);
  const enhanced = Boolean(enhancement);

  if (!enhanced) {
    return (
      <article className="lesson-content max-w-none">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }

  // Graceful degradation: if parsing would drop content or HTML looks unsafe,
  // fall back to the plain sanitized article renderer.
  const integrityOk =
    htmlLooksSanitized(html) &&
    sectionsPreserveLessonText(html, sections, {
      omitContinueLearning: false,
    });

  if (!integrityOk) {
    return (
      <article className="lesson-content max-w-none">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }

  // LessonPager is the primary prev/next UI for enhanced lessons.
  // Suppress the duplicate Markdown "Continue Learning" block only —
  // do not alter source Markdown or other meaningful links/sections.
  const visibleSections = sections
    .filter((section) => section.kind !== "continue")
    .map((section, index, list) => {
      if (index !== list.length - 1) return section;
      // Drop the horizontal rule that usually precedes Continue Learning.
      return {
        ...section,
        html: section.html.replace(/(?:<hr\s*\/?>\s*)+$/i, "").trim(),
      };
    });

  return (
    <article className="space-y-5">
      <LessonOutline sections={visibleSections} />
      {visibleSections.map((section, index) => {
        const diagrams =
          enhancement?.diagrams?.filter(
            (placement) =>
              section.heading !== null &&
              placement.afterHeading === section.heading,
          ) ?? [];

        return (
          <div
            key={`${section.kind}-${section.anchorId ?? index}`}
            className="space-y-4"
          >
            <LessonSection
              kind={section.kind}
              heading={section.heading}
              anchorId={section.anchorId}
              html={section.html}
            />
            {diagrams.map((placement) => {
              const diagram = getDiagram(placement.diagramId);
              if (!diagram) return null;
              const Diagram = diagram.Component;
              return <Diagram key={placement.diagramId} />;
            })}
          </div>
        );
      })}
    </article>
  );
}
