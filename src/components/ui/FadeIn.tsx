import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
};

/** Lightweight CSS reveal — no framer-motion. Content stays in HTML for SEO. */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const dirClass =
    direction === "none"
      ? "motion-safe:animate-fade-in"
      : "motion-safe:animate-fade-up";

  return (
    <div
      className={`${dirClass} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={`stagger-children ${className}`}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`motion-safe:animate-fade-up ${className}`}>{children}</div>
  );
}
