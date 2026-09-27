import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type HeroClientProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  imageLabel: string;
  alloyLabel: string;
  marketsLabel: string;
};

export function HeroClient({
  eyebrow,
  title,
  subtitle,
  highlights,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt,
  caption,
  imageLabel,
  alloyLabel,
  marketsLabel,
}: HeroClientProps) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          {eyebrow}
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm text-slate-300"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="accent">
            {ctaPrimary}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="/products" variant="ghost">
            {ctaSecondary}
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-slate-900 shadow-2xl shadow-black/40 sm:aspect-[5/4]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[var(--accent)]" />
          <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[var(--accent)]" />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {imageLabel}
            </p>
            <p className="mt-1 text-sm text-slate-300">{caption}</p>
          </div>
        </div>

        <div className="motion-safe:animate-float absolute -right-3 top-8 hidden rounded-sm border border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur sm:block">
          <p className="text-2xl font-bold text-white">6063-T5</p>
          <p className="text-xs text-slate-400">{alloyLabel}</p>
        </div>

        <div className="motion-safe:animate-float-delayed absolute -left-3 bottom-16 hidden rounded-sm border border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur sm:block">
          <p className="text-2xl font-bold text-[var(--accent)]">50+</p>
          <p className="text-xs text-slate-400">{marketsLabel}</p>
        </div>
      </div>
    </div>
  );
}
