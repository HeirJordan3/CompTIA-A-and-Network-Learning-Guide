"use client";

import { useMemo, useState } from "react";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { QuizSummary } from "@/components/quiz/QuizSummary";
import { isAnswerCorrect } from "@/lib/quiz/validateQuiz";
import type { QuizDefinition } from "@/types/quiz";

type QuizContainerProps = {
  quiz: QuizDefinition;
};

type AnswerState = {
  selectedOptionId: string | null;
  submitted: boolean;
  isCorrect: boolean | null;
};

function emptyAnswers(count: number): AnswerState[] {
  return Array.from({ length: count }, () => ({
    selectedOptionId: null,
    submitted: false,
    isCorrect: null,
  }));
}

export function QuizContainer({ quiz }: QuizContainerProps) {
  const questions = quiz.questions;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(() =>
    emptyAnswers(questions.length),
  );
  const [finished, setFinished] = useState(false);

  const current = questions[index];
  const currentAnswer = answers[index];

  const correctCount = useMemo(
    () => answers.filter((answer) => answer.isCorrect).length,
    [answers],
  );

  function selectOption(optionId: string) {
    if (currentAnswer.submitted) return;
    setAnswers((prev) =>
      prev.map((answer, i) =>
        i === index ? { ...answer, selectedOptionId: optionId } : answer,
      ),
    );
  }

  function submitAnswer() {
    if (!currentAnswer.selectedOptionId || currentAnswer.submitted) return;
    const correct = isAnswerCorrect(current, currentAnswer.selectedOptionId);
    setAnswers((prev) =>
      prev.map((answer, i) =>
        i === index
          ? { ...answer, submitted: true, isCorrect: correct }
          : answer,
      ),
    );
  }

  function goNext() {
    if (!currentAnswer.submitted) return;
    if (index >= questions.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
  }

  function retryQuiz() {
    setIndex(0);
    setAnswers(emptyAnswers(questions.length));
    setFinished(false);
  }

  return (
    <section
      id="knowledge-check"
      className="rounded-xl border border-teal-200 bg-teal-50/40 px-3 py-4 sm:px-5 sm:py-6"
      aria-labelledby={`${quiz.id}-title`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-900">
        Knowledge check
      </p>
      <h2
        id={`${quiz.id}-title`}
        className="mt-1 font-serif text-xl font-bold text-slate-900 sm:text-2xl"
      >
        {quiz.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        {quiz.description}
      </p>
      <p className="mt-2 text-xs text-slate-600">
        Choose an answer, then submit to see feedback.
      </p>

      <div className="mt-4">
        {finished ? (
          <QuizSummary
            title={quiz.title}
            correctCount={correctCount}
            total={questions.length}
            onRetry={retryQuiz}
          />
        ) : (
          <QuestionCard
            question={current}
            index={index}
            total={questions.length}
            selectedOptionId={currentAnswer.selectedOptionId}
            submitted={currentAnswer.submitted}
            isCorrect={currentAnswer.isCorrect}
            onSelect={selectOption}
            onSubmit={submitAnswer}
            onNext={goNext}
            isLast={index === questions.length - 1}
          />
        )}
      </div>
    </section>
  );
}
