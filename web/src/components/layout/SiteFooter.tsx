export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-relaxed text-slate-600 sm:px-6">
        <p>
          This is an independent educational resource. It is{" "}
          <strong className="font-semibold text-slate-800">
            not affiliated with or endorsed by CompTIA
          </strong>
          . CompTIA, A+, and Network+ are trademarks of CompTIA, Inc.
        </p>
        <p className="mt-3">
          Lesson content is original study material for beginners. It is not
          official CompTIA courseware and is not affiliated with any third-party
          video instructor brand.
        </p>
      </div>
    </footer>
  );
}
