"use client";

import type { Question } from "@/types/quiz";

type AnswerFeedbackProps = {
  question: Question;
  selectedOptionId: string;
  isCorrect: boolean;
};

export function AnswerFeedback({
  question,
  selectedOptionId,
  isCorrect,
}: AnswerFeedbackProps) {
  const selected = question.options.find(
    (option) => option.id === selectedOptionId,
  );
  const correct = question.options.find(
    (option) => option.id === question.correctOptionId,
  );

  return (
    <div
      className={`mt-4 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
        isCorrect
          ? "border-emerald-300 bg-emerald-50 text-emerald-950"
          : "border-rose-300 bg-rose-50 text-rose-950"
      }`}
      role="status"
      aria-live="polite"
    >
      <p className="font-semibold">{isCorrect ? "Correct" : "Not quite"}</p>
      <p className="mt-2">{question.explanation}</p>
      {!isCorrect && selected ? (
        <p className="mt-3">
          <span className="font-medium">
            Why {selected.id.toUpperCase()} is incorrect:{" "}
          </span>
          {selected.explanation ?? "This is not the BEST answer."}
        </p>
      ) : null}
      {correct ? (
        <p className="mt-3">
          <span className="font-medium">
            BEST answer ({correct.id.toUpperCase()}):{" "}
          </span>
          {correct.explanation ?? correct.text}
        </p>
      ) : null}
    </div>
  );
}
