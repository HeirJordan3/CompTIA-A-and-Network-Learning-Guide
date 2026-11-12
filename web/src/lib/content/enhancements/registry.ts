import type { DomainId, TrackId } from "@/types/content";
import {
  buildLessonKey,
  type LessonEnhancement,
  type LessonKey,
} from "@/types/enhancements";

/**
 * Explicit lesson-enhancement registry.
 * Add entries here as lessons gain diagrams, quizzes, or HoopStack hooks.
 * Content prose remains in Markdown under the core content folders.
 */
const enhancements: Record<LessonKey, LessonEnhancement> = {
  "a-plus-core-2/operating-systems/operating-systems-overview": {
    lessonKey: "a-plus-core-2/operating-systems/operating-systems-overview",
    diagrams: [
      {
        afterHeading: "What Is It?",
        diagramId: "os-layers",
      },
    ],
    progressEnabled: true,
  },
  "a-plus-core-2/operating-systems/file-systems": {
    lessonKey: "a-plus-core-2/operating-systems/file-systems",
    diagrams: [
      {
        afterHeading: "How It Works",
        diagramId: "file-system-organization",
      },
    ],
    progressEnabled: true,
  },
};

export function getLessonEnhancement(
  trackId: TrackId | string,
  domainId: DomainId | string,
  slug: string,
): LessonEnhancement | undefined {
  const key = buildLessonKey(
    trackId as TrackId,
    domainId as DomainId,
    slug,
  );
  return enhancements[key];
}

export function listEnhancedLessonKeys(): LessonKey[] {
  return Object.keys(enhancements) as LessonKey[];
}
