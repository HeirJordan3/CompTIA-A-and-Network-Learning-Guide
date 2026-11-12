import fs from "node:fs/promises";
import { getLesson } from "@/lib/content/curriculum";
import { resolveIndexedContentFile } from "@/lib/content/paths";
import { renderMarkdownToHtml } from "@/lib/markdown/renderMarkdown";
import type { DomainId, LessonRef, TrackId } from "@/types/content";

export interface LoadedLesson {
  trackId: TrackId;
  domainId: DomainId;
  lesson: LessonRef;
  title: string;
  html: string;
  rawMarkdown: string;
}

export async function loadIndexedLesson(
  trackId: string,
  domainId: string,
  slug: string,
): Promise<LoadedLesson | null> {
  const match = getLesson(trackId, domainId, slug);
  if (!match || !match.track.enabled) {
    return null;
  }

  if (match.lesson.status !== "available") {
    return null;
  }

  const absolutePath = resolveIndexedContentFile(
    match.track.contentRoot,
    match.lesson.file,
  );

  const rawMarkdown = await fs.readFile(absolutePath, "utf8");
  const html = await renderMarkdownToHtml(
    rawMarkdown,
    match.track.id,
    match.domain.id,
  );

  const headingMatch = rawMarkdown.match(/^#\s+(.+)$/m);
  const title = headingMatch?.[1]?.trim() || match.lesson.title;

  return {
    trackId: match.track.id,
    domainId: match.domain.id,
    lesson: match.lesson,
    title,
    html,
    rawMarkdown,
  };
}
