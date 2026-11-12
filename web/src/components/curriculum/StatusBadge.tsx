import type { LessonStatus } from "@/types/content";

export function StatusBadge({ status }: { status: LessonStatus }) {
  if (status === "available") {
    return (
      <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800 ring-1 ring-inset ring-teal-600/20">
        Available
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-900 ring-1 ring-inset ring-amber-600/20">
      Coming Soon
    </span>
  );
}
