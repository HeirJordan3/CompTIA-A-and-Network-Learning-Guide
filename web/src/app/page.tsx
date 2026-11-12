import Link from "next/link";
import {
  countLessonStatus,
  getEnabledTracks,
  tracks,
} from "@/lib/content/curriculum";

export default function HomePage() {
  const enabled = getEnabledTracks();
  const upcoming = tracks.filter((track) => !track.enabled);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
        Study dashboard
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        CompTIA A+ and Network+ Learning Guide
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
        Plain-language lessons for beginners preparing for CompTIA exams. Start
        with A+ Core 2. Core 1 and Network+ tracks will open in this app later.
      </p>

      <section aria-labelledby="active-tracks-heading" className="mt-12">
        <h2
          id="active-tracks-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Active certification track
        </h2>
        <ul className="mt-5 grid gap-4">
          {enabled.map((track) => {
            const totals = track.domains.reduce(
              (acc, domain) => {
                const counts = countLessonStatus(domain);
                acc.available += counts.available;
                acc.comingSoon += counts.comingSoon;
                return acc;
              },
              { available: 0, comingSoon: 0 },
            );

            return (
              <li key={track.id}>
                <Link
                  href={`/tracks/${track.id}`}
                  className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-600/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {track.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-teal-800">
                        Exam {track.exam}
                      </p>
                    </div>
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-900 ring-1 ring-inset ring-teal-600/20">
                      Open
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-slate-700">{track.summary}</p>
                  <p className="mt-4 text-sm text-slate-600">
                    {track.domains.length} domains · {totals.available}{" "}
                    available lessons
                    {totals.comingSoon > 0
                      ? ` · ${totals.comingSoon} coming soon`
                      : ""}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="upcoming-tracks-heading" className="mt-12">
        <h2
          id="upcoming-tracks-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Coming later
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {upcoming.map((track) => (
            <li
              key={track.id}
              className="rounded-xl border border-dashed border-slate-300 bg-white/70 p-5"
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {track.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                Exam {track.exam}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {track.summary}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-800">
                Coming Soon
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
