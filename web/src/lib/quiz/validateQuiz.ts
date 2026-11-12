import type { Question, QuizDefinition } from "@/types/quiz";

export function isAnswerCorrect(
  question: Question,
  selectedOptionId: string | null,
): boolean {
  return Boolean(selectedOptionId) && question.correctOptionId === selectedOptionId;
}

export function validateQuiz(quiz: QuizDefinition): string[] {
  const issues: string[] = [];

  if (quiz.questions.length === 0) {
    issues.push(`${quiz.id}: quiz has no questions.`);
  }

  const seen = new Set<string>();
  for (const question of quiz.questions) {
    if (seen.has(question.id)) {
      issues.push(`${quiz.id}: duplicate question id ${question.id}`);
    }
    seen.add(question.id);

    if (question.lessonKey !== quiz.lessonKey) {
      issues.push(`${question.id}: lessonKey mismatch.`);
    }
    if (question.options.length < 2) {
      issues.push(`${question.id}: needs at least two options.`);
    }
    if (!question.options.some((option) => option.id === question.correctOptionId)) {
      issues.push(`${question.id}: correctOptionId not found in options.`);
    }
  }

  return issues;
}

export function assertQuizValid(quiz: QuizDefinition): void {
  const issues = validateQuiz(quiz);
  if (issues.length > 0) {
    throw new Error(`Invalid quiz:\n${issues.join("\n")}`);
  }
}
