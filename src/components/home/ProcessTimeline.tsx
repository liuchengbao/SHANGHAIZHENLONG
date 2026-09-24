"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type Step = { title: string; description: string };

export function ProcessTimelineClient({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string;
  title: string;
  description: string;
  steps: Step[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent-dark)]">
            {eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
        </FadeIn>

        <StaggerContainer className="relative grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block" />
          {steps.map((step, index) => (
            <StaggerItem key={step.title} className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-sm border border-slate-200 bg-white shadow-sm">
                <span className="text-lg font-bold text-[var(--accent-dark)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
