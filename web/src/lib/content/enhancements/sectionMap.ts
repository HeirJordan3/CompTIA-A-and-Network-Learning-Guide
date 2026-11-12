import type { LessonSectionKind } from "@/types/enhancements";

const HEADING_TO_KIND: Record<string, LessonSectionKind> = {
  "What You Need to Know": "objectives",
  "What Is It?": "definition",
  "Why Does It Matter?": "why-it-matters",
  "Real-World Analogy": "analogy",
  "How It Works": "how-it-works",
  "Side-by-Side Comparison": "comparison",
  "Key Terms": "key-terms",
  "CompTIA Exam Connections": "exam-connections",
  "Common Mix-Ups": "misconceptions",
  "Quick Review": "quick-review",
  "Continue Learning": "continue",
};

export const SECTION_LABELS: Record<LessonSectionKind, string> = {
  objectives: "Learning objectives",
  definition: "Beginner explanation",
  "why-it-matters": "Why it matters",
  analogy: "Real-world analogy",
  "how-it-works": "How it works",
  comparison: "Side-by-side comparison",
  "key-terms": "Key terms",
  "exam-connections": "CompTIA exam connections",
  misconceptions: "Common misconceptions",
  "quick-review": "Quick review",
  continue: "Continue learning",
  intro: "Introduction",
  other: "Section",
};

export function classifyHeading(heading: string): LessonSectionKind {
  return HEADING_TO_KIND[heading.trim()] ?? "other";
}

export function sectionAnchorId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
