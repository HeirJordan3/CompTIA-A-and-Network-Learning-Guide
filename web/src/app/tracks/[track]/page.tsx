import Link from "next/link";
import { notFound } from "next/navigation";
import {
  countLessonStatus,
  getTrack,
} from "@/lib/content/curriculum";

type PageProps = {
  params: Promise<{ track: string }>;
};

export async function generateStaticParams() {
  return [{ track: "a-plus-core-2" }];
}

export async function generateMetadata({ params }: PageProps) {
  const { track: trackId } = await params;
  const track = getTrack(trackId);
  if (!track || !track.enabled) {
    return { title: "Track not found" };
  }
  return {
    title: track.title,
    description: track.summary,
  };
}

export default async function TrackPage({ params }: PageProps) {
  const { track: trackId } = await params;
  const track = getTrack(trackId);

  if (!track || !track.enabled) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline-offset-2 hover:underline">
              Dashboard
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900">{track.title}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
          Exam {track.exam}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-slate-900">
          {track.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          {track.summary}
        </p>
      </header>

      <section aria-labelledby="domains-heading" className="mt-10">
        <h2 id="domains-heading" className="text-xl font-semibold text-slate-900">
          Domains
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {track.domains.map((domain) => {
            const counts = countLessonStatus(domain);
            return (
              <li key={domain.id}>
                <Link
                  href={`/tracks/${track.id}/domains/${domain.id}`}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-600/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Domain {domain.number}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    {domain.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                    {domain.summary}
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    {counts.available} available
                    {counts.comingSoon > 0
                      ? ` · ${counts.comingSoon} coming soon`
                      : ""}
                    {domain.lessons.length === 0 ? " · In development" : ""}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
