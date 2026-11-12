import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/curriculum/StatusBadge";
import { getDomain, getTrack } from "@/lib/content/curriculum";

type PageProps = {
  params: Promise<{ track: string; domain: string }>;
};

export async function generateStaticParams() {
  const track = getTrack("a-plus-core-2");
  if (!track) return [];
  return track.domains.map((domain) => ({
    track: track.id,
    domain: domain.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { track: trackId, domain: domainId } = await params;
  const match = getDomain(trackId, domainId);
  if (!match || !match.track.enabled) {
    return { title: "Domain not found" };
  }
  return {
    title: `${match.domain.title} · ${match.track.title}`,
    description: match.domain.summary,
  };
}

export default async function DomainPage({ params }: PageProps) {
  const { track: trackId, domain: domainId } = await params;
  const match = getDomain(trackId, domainId);

  if (!match || !match.track.enabled) {
    notFound();
  }

  const { track, domain } = match;

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
          <li>
            <Link
              href={`/tracks/${track.id}`}
              className="underline-offset-2 hover:underline"
            >
              {track.title}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900">{domain.title}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
          Domain {domain.number}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-slate-900">
          {domain.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          {domain.summary}
        </p>
      </header>

      <section aria-labelledby="lessons-heading" className="mt-10">
        <h2 id="lessons-heading" className="text-xl font-semibold text-slate-900">
          Lessons
        </h2>

        {domain.lessons.length === 0 ? (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            Lessons for this domain are still being developed in the Markdown
            guide. Check back after content is added under{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-xs">
              core-2/3-software-troubleshooting/
            </code>
            .
          </p>
        ) : (
          <ol className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {domain.lessons.map((lesson, index) => {
              const content = (
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {index + 1}
                      {lesson.objective ? ` · Objective ${lesson.objective}` : ""}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {lesson.title}
                    </h3>
                  </div>
                  <StatusBadge status={lesson.status} />
                </div>
              );

              if (lesson.status === "available") {
                return (
                  <li key={lesson.slug}>
                    <Link
                      href={`/tracks/${track.id}/domains/${domain.id}/lessons/${lesson.slug}`}
                      className="block px-4 py-4 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal-700 sm:px-5"
                    >
                      {content}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={lesson.slug} className="px-4 py-4 opacity-80 sm:px-5">
                  {content}
                  <p className="mt-1 text-sm text-slate-500">
                    This lesson is marked Coming Soon and is not open in the app
                    yet.
                  </p>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </div>
  );
}
