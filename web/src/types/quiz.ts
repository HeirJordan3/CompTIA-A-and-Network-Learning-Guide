import type { LessonKey } from "@/types/enhancements";

export interface AnswerOption {
  id: string;
  text: string;
  /** Shown after submit to explain this option. */
  explanation?: string;
}

export interface Question {
  id: string;
  objectiveId: string;
  lessonKey: LessonKey;
  prompt: string;
  options: AnswerOption[];
  correctOptionId: string;
  explanation: string;
}

export interface QuizDefinition {
  id: string;
  title: string;
  description: string;
  lessonKey: LessonKey;
  questions: Question[];
}
