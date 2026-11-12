"use client";

type QuizSummaryProps = {
  title: string;
  correctCount: number;
  total: number;
  onRetry: () => void;
};

export function QuizSummary({
  title,
  correctCount,
  total,
  onRetry,
}: QuizSummaryProps) {
  const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  return (
    <section
      className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-center sm:px-6"
      aria-labelledby="quiz-summary-title"
    >
      <h3
        id="quiz-summary-title"
        className="font-serif text-2xl font-bold text-slate-900"
      >
        Quiz complete
      </h3>
      <p className="mt-2 text-sm text-slate-600">{title}</p>
      <p
        className="mt-5 text-3xl font-semibold text-teal-900"
        aria-live="polite"
      >
        {correctCount}/{total}
      </p>
      <p className="mt-1 text-sm text-slate-600">{percent}% correct</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        Retry quiz
      </button>
    </section>
  );
}
