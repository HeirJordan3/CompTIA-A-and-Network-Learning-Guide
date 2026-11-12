import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-700">
        That track, domain, or lesson is not in the curriculum index, or it is
        not available yet.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block font-medium text-teal-800 underline-offset-2 hover:underline"
      >
        Back to dashboard
      </Link>
    </div>
  );
}
