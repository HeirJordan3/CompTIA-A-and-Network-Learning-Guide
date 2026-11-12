type LessonContentProps = {
  html: string;
};

export function LessonContent({ html }: LessonContentProps) {
  return (
    <article
      className="lesson-content max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
