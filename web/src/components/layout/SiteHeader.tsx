import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          CompTIA Study Hub
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link
                href="/"
                className="text-slate-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/tracks/a-plus-core-2"
                className="text-slate-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                A+ Core 2
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
