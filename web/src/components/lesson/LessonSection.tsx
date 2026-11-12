import { SECTION_LABELS } from "@/lib/content/enhancements/sectionMap";
import type { LessonSectionKind } from "@/types/enhancements";

const KIND_STYLES: Partial<
  Record<
    LessonSectionKind,
    {
      wrap: string;
      badge: string;
    }
  >
> = {
  objectives: {
    wrap: "lesson-section--objectives border-teal-200 bg-teal-50/60",
    badge: "bg-teal-100 text-teal-900 ring-teal-600/20",
  },
  definition: {
    wrap: "lesson-section--definition border-slate-200 bg-white",
    badge: "bg-slate-100 text-slate-800 ring-slate-500/20",
  },
  "why-it-matters": {
    wrap: "lesson-section--why border-slate-200 bg-white",
    badge: "bg-slate-100 text-slate-800 ring-slate-500/20",
  },
  analogy: {
    wrap: "lesson-section--analogy border-amber-200/80 bg-amber-50/50",
    badge: "bg-amber-100 text-amber-950 ring-amber-600/20",
  },
  "how-it-works": {
    wrap: "lesson-section--how border-slate-200 bg-white",
    badge: "bg-slate-100 text-slate-800 ring-slate-500/20",
  },
  comparison: {
    wrap: "lesson-section--comparison border-slate-200 bg-white",
    badge: "bg-slate-100 text-slate-800 ring-slate-500/20",
  },
  "key-terms": {
    wrap: "lesson-section--terms border-sky-200/80 bg-sky-50/40",
    badge: "bg-sky-100 text-sky-950 ring-sky-600/20",
  },
  "exam-connections": {
    wrap: "lesson-section--exam border-cyan-200/70 bg-cyan-50/40",
    badge: "bg-cyan-100 text-cyan-950 ring-cyan-600/20",
  },
  misconceptions: {
    wrap: "lesson-section--mixups border-rose-200/70 bg-rose-50/40",
    badge: "bg-rose-100 text-rose-950 ring-rose-600/20",
  },
  "quick-review": {
    wrap: "lesson-section--review border-emerald-200/80 bg-emerald-50/40",
    badge: "bg-emerald-100 text-emerald-950 ring-emerald-600/20",
  },
};

type LessonSectionProps = {
  kind: LessonSectionKind;
  heading: string | null;
  anchorId: string | null;
  html: string;
};

export function LessonSection({
  kind,
  heading,
  anchorId,
  html,
}: LessonSectionProps) {
  if (kind === "intro" || kind === "continue" || kind === "other") {
    return (
      <section
        id={anchorId ?? undefined}
        className="lesson-section lesson-section--plain"
        aria-label={heading ?? undefined}
      >
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    );
  }

  const styles = KIND_STYLES[kind] ?? {
    wrap: "border-slate-200 bg-white",
    badge: "bg-slate-100 text-slate-800 ring-slate-500/20",
  };

  return (
    <section
      id={anchorId ?? undefined}
      className={`lesson-section rounded-xl border px-4 py-5 sm:px-5 sm:py-6 ${styles.wrap}`}
      aria-labelledby={anchorId ? `${anchorId}-label` : undefined}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          id={anchorId ? `${anchorId}-label` : undefined}
          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles.badge}`}
        >
          {SECTION_LABELS[kind]}
        </span>
      </div>
      <div
        className="lesson-content lesson-content--section"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
