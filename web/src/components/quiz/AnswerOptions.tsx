"use client";

import type { AnswerOption } from "@/types/quiz";

type AnswerOptionsProps = {
  questionId: string;
  options: AnswerOption[];
  selectedOptionId: string | null;
  disabled: boolean;
  onSelect: (optionId: string) => void;
};

export function AnswerOptions({
  questionId,
  options,
  selectedOptionId,
  disabled,
  onSelect,
}: AnswerOptionsProps) {
  return (
    <fieldset className="mt-4 space-y-2" disabled={disabled}>
      <legend className="sr-only">Answer choices</legend>
      {options.map((option) => {
        const inputId = `${questionId}-${option.id}`;
        const checked = selectedOptionId === option.id;
        return (
          <label
            key={option.id}
            htmlFor={inputId}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-700 ${
              checked
                ? "border-teal-600 bg-teal-50"
                : "border-slate-200 bg-white hover:border-teal-300"
            } ${disabled ? "cursor-default opacity-95" : ""}`}
          >
            <input
              id={inputId}
              type="radio"
              name={questionId}
              value={option.id}
              checked={checked}
              disabled={disabled}
              onChange={() => onSelect(option.id)}
              className="mt-1 h-4 w-4 accent-teal-700"
            />
            <span className="leading-relaxed text-slate-800">
              <span className="mr-2 font-semibold uppercase text-slate-500">
                {option.id}.
              </span>
              {option.text}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}
