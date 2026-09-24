import { type ReactNode } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function Section({
  children,
  className = "",
  id,
  subdued = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  subdued?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${subdued ? "bg-slate-50" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeIn
      className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent-dark)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
      )}
    </FadeIn>
  );
}
