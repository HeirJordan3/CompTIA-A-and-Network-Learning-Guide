import { fileSystemsQuiz } from "@/lib/quiz/questions/file-systems";
import { operatingSystemsOverviewQuiz } from "@/lib/quiz/questions/operating-systems-overview";
import { assertQuizValid } from "@/lib/quiz/validateQuiz";
import type { QuizDefinition } from "@/types/quiz";

const quizzes: Record<string, QuizDefinition> = {
  [operatingSystemsOverviewQuiz.id]: operatingSystemsOverviewQuiz,
  [fileSystemsQuiz.id]: fileSystemsQuiz,
};

for (const quiz of Object.values(quizzes)) {
  assertQuizValid(quiz);
}

export function getQuiz(quizId: string): QuizDefinition | undefined {
  return quizzes[quizId];
}

export function getQuizzesForIds(
  quizIds: string[] | undefined,
): QuizDefinition[] {
  if (!quizIds?.length) return [];
  return quizIds
    .map((id) => getQuiz(id))
    .filter((quiz): quiz is QuizDefinition => Boolean(quiz));
}
