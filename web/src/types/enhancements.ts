import type { ComponentType } from "react";
import type { DomainId, TrackId } from "@/types/content";

/**
 * Stable lesson identity used by the enhancement registry.
 * Format: `{trackId}/{domainId}/{slug}`
 */
export type LessonKey = `${TrackId}/${DomainId}/${string}`;

export type LessonSectionKind =
  | "objectives"
  | "definition"
  | "why-it-matters"
  | "analogy"
  | "how-it-works"
  | "comparison"
  | "key-terms"
  | "exam-connections"
  | "misconceptions"
  | "quick-review"
  | "continue"
  | "intro"
  | "other";

export interface DiagramDefinition {
  id: string;
  title: string;
  description: string;
  Component: ComponentType;
}

export interface DiagramPlacement {
  /** Exact Markdown H2 text (without #). */
  afterHeading: string;
  diagramId: string;
}

/**
 * Optional app-layer enrichment for a curriculum lesson.
 * Lesson prose stays in Markdown; this registry only attaches UI/diagrams/future modules.
 */
export interface LessonEnhancement {
  lessonKey: LessonKey;
  diagrams?: DiagramPlacement[];
  /** Reserved for Milestone 2+ interactive checks. */
  quizIds?: string[];
  /** Reserved for performance-based question shells. */
  pbqIds?: string[];
  /** Reserved for local progress / completion hooks. */
  progressEnabled?: boolean;
  /** Reserved for HoopStack module linkage. */
  hoopstackModuleId?: string;
}

export function buildLessonKey(
  trackId: TrackId,
  domainId: DomainId,
  slug: string,
): LessonKey {
  return `${trackId}/${domainId}/${slug}`;
}
