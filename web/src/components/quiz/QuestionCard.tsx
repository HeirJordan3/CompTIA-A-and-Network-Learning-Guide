"use client";

import { AnswerFeedback } from "@/components/quiz/AnswerFeedback";
import { AnswerOptions } from "@/components/quiz/AnswerOptions";
import type { Question } from "@/types/quiz";

type QuestionCardProps = {
  question: Question;
  index: number;
  total: number;
  selectedOptionId: string | null;
  submitted: boolean;
  isCorrect: boolean | null;
  onSelect: (optionId: string) => void;
  onSubmit: () => void;
  onNext: () => void;
  isLast: boolean;
};

export function QuestionCard({
  question,
  index,
  total,
  selectedOptionId,
  submitted,
  isCorrect,
  onSelect,
  onSubmit,
  onNext,
  isLast,
}: QuestionCardProps) {
  return (
    <section
      className="rounded-xl border border-slate-200 bg-white px-4 py-5 sm:px-5"
      aria-labelledby={`${question.id}-prompt`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Question {index + 1} of {total} · Objective {question.objectiveId}
      </p>

      <h3
        id={`${question.id}-prompt`}
        className="mt-3 text-base font-semibold leading-relaxed text-slate-900 sm:text-lg"
      >
        {question.prompt}
      </h3>

      <AnswerOptions
        questionId={question.id}
        options={question.options}
        selectedOptionId={selectedOptionId}
        disabled={submitted}
        onSelect={onSelect}
      />

      <div className="mt-4 flex flex-wrap gap-3">
        {!submitted ? (
          <button
            type="button"
            onClick={onSubmit}
            disabled={!selectedOptionId}
            className="rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Submit answer
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            {isLast ? "View score" : "Next question"}
          </button>
        )}
      </div>

      {submitted && selectedOptionId && isCorrect !== null ? (
        <AnswerFeedback
          question={question}
          selectedOptionId={selectedOptionId}
          isCorrect={isCorrect}
        />
      ) : null}
    </section>
  );
}
