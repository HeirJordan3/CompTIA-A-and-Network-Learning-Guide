import Link from "next/link";
import type { DomainId, LessonRef, TrackId } from "@/types/content";

type LessonPagerProps = {
  trackId: TrackId;
  domainId: DomainId;
  previous?: LessonRef;
  next?: LessonRef;
};

export function LessonPager({
  trackId,
  domainId,
  previous,
  next,
}: LessonPagerProps) {
  return (
    <nav
      aria-label="Lesson sequence"
      className="mt-8 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2"
    >
      {previous && previous.status === "available" ? (
        <Link
          href={`/tracks/${trackId}/domains/${domainId}/lessons/${previous.slug}`}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-teal-300 hover:bg-teal-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            Previous
          </span>
          <span className="mt-1 block font-medium text-teal-900">
            ← {previous.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}
      {next ? (
        <Link
          href={`/tracks/${trackId}/domains/${domainId}/lessons/${next.slug}`}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-teal-300 hover:bg-teal-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:text-right"
        >
          <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            Next
          </span>
          <span className="mt-1 block font-medium text-teal-900">
            {next.title} →
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
