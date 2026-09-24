"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type CertificateItem = {
  src: string;
  name: string;
  detail: string;
  alt: string;
};

export function CertificateGallery({
  items,
  viewLabel,
  closeLabel,
}: {
  items: CertificateItem[];
  viewLabel: string;
  closeLabel: string;
}) {
  const [active, setActive] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(item)}
            className="group text-left"
          >
            <span className="block overflow-hidden rounded-sm border border-slate-200 bg-white p-3 shadow-sm transition group-hover:border-[var(--accent)]">
              <span className="relative block aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-contain"
                />
              </span>
            </span>
            <span className="mt-3 block text-sm font-semibold text-slate-900">
              {item.name}
            </span>
            <span className="mt-1 block text-xs text-slate-500">{item.detail}</span>
            <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)]">
              {viewLabel}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label={closeLabel}
              className="absolute -top-3 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-sm bg-white text-slate-900 shadow sm:-right-3"
            >
              <X className="h-4 w-4" />
            </button>
            <Image
              src={active.src}
              alt={active.alt}
              width={816}
              height={1148}
              className="max-h-[88vh] w-auto rounded-sm bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
