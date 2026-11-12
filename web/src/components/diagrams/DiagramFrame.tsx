import type { ReactNode } from "react";

type DiagramFrameProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function DiagramFrame({
  title,
  description,
  children,
}: DiagramFrameProps) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      <figcaption className="border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </figcaption>
      <div className="px-3 py-5 sm:px-5 sm:py-6">{children}</div>
    </figure>
  );
}
