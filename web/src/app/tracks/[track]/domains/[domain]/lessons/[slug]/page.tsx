import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/curriculum/StatusBadge";
import { LessonExperience } from "@/components/lesson/LessonExperience";
import { LessonPager } from "@/components/lesson/LessonPager";
import { getDomain, getLesson, getTrack } from "@/lib/content/curriculum";
import { getLessonEnhancement } from "@/lib/content/enhancements/registry";
import { loadIndexedLesson } from "@/lib/content/loadLesson";

type PageProps = {
  params: Promise<{ track: string; domain: string; slug: string }>;
};

export async function generateStaticParams() {
  const track = getTrack("a-plus-core-2");
  if (!track) return [];

  return track.domains.flatMap((domain) =>
    domain.lessons
      .filter((lesson) => lesson.status === "available")
      .map((lesson) => ({
        track: track.id,
        domain: domain.id,
        slug: lesson.slug,
      })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { track: trackId, domain: domainId, slug } = await params;
  const match = getLesson(trackId, domainId, slug);
  if (!match || !match.track.enabled) {
    return { title: "Lesson not found" };
  }
  return {
    title: match.lesson.title,
    description: `${match.lesson.title} — ${match.track.title} (${match.track.exam})`,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { track: trackId, domain: domainId, slug } = await params;
  const match = getLesson(trackId, domainId, slug);

  if (!match || !match.track.enabled) {
    notFound();
  }

  if (match.lesson.status !== "available") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-serif text-3xl font-bold text-slate-900">
          {match.lesson.title}
        </h1>
        <div className="mt-3">
          <StatusBadge status="comingSoon" />
        </div>
        <p className="mt-4 text-slate-700">
          This lesson is marked Coming Soon in the curriculum index and is not
          available to read in the app yet.
        </p>
        <Link
          href={`/tracks/${match.track.id}/domains/${match.domain.id}`}
          className="mt-6 inline-block text-teal-800 underline-offset-2 hover:underline"
        >
          Back to {match.domain.title}
        </Link>
      </div>
    );
  }

  const loaded = await loadIndexedLesson(trackId, domainId, slug);
  if (!loaded) {
    notFound();
  }

  const enhancement = getLessonEnhancement(
    match.track.id,
    match.domain.id,
    match.lesson.slug,
  );

  const domainMatch = getDomain(trackId, domainId);
  const lessonIndex =
    domainMatch?.domain.lessons.findIndex((item) => item.slug === slug) ?? -1;
  const previous =
    lessonIndex > 0 ? domainMatch?.domain.lessons[lessonIndex - 1] : undefined;
  const next =
    lessonIndex >= 0
      ? domainMatch?.domain.lessons
          .slice(lessonIndex + 1)
          .find((item) => item.status === "available")
      : undefined;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline-offset-2 hover:underline">
              Dashboard
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/tracks/${match.track.id}`}
              className="underline-offset-2 hover:underline"
            >
              {match.track.title}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/tracks/${match.track.id}/domains/${match.domain.id}`}
              className="underline-offset-2 hover:underline"
            >
              {match.domain.title}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900">{match.lesson.title}</li>
        </ol>
      </nav>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <StatusBadge status="available" />
        {match.lesson.objective ? (
          <span className="text-sm text-slate-600">
            Objective {match.lesson.objective}
          </span>
        ) : null}
        {enhancement ? (
          <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-900 ring-1 ring-inset ring-teal-600/20">
            Enhanced lesson
          </span>
        ) : null}
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-8">
        <LessonExperience html={loaded.html} enhancement={enhancement} />
      </div>

      <LessonPager
        trackId={match.track.id}
        domainId={match.domain.id}
        previous={previous}
        next={next}
      />
    </div>
  );
}
