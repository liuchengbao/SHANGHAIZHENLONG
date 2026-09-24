"use client";

import { Clock, Factory, Globe2, CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type StatItem = {
  icon: "clock" | "factory" | "globe" | "check";
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const icons = {
  clock: Clock,
  factory: Factory,
  globe: Globe2,
  check: CheckCircle2,
};

export function StatsBarClient({ stats }: { stats: StatItem[] }) {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => {
            const Icon = icons[stat.icon];
            return (
              <StaggerItem
                key={stat.label}
                className="flex flex-col items-center px-4 py-10 text-center sm:py-12"
              >
                <div className="mb-4 rounded-sm border border-slate-200 bg-white p-2.5 text-[var(--accent-dark)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function TrustBarClient({ items }: { items: string[] }) {
  return (
    <section className="border-b border-slate-800 bg-slate-950 py-4">
      <FadeIn>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 sm:px-6 lg:px-8">
          {items.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
