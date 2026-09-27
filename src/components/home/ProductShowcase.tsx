import { getLocale, getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CATEGORY_SLUGS, categoryHref, getCategoryCover } from "@/lib/catalog";
import { getCategoryCopy } from "@/lib/category-copy";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export async function ProductShowcase() {
  const t = await getTranslations("home.products");
  const tc = await getTranslations("common");
  const locale = await getLocale();

  return (
    <Section>
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_SLUGS.map((slug, index) => {
          const copy = getCategoryCopy(locale, slug);
          return (
            <FadeIn key={slug} delay={index * 0.08}>
              <Link
                href={categoryHref(slug)}
                className="group block h-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[var(--accent)]/30 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={getCategoryCover(slug)}
                    alt={copy.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    quality={70}
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{copy.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {copy.summary}
                  </p>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn className="mt-10 text-center" delay={0.3}>
        <Button href="/products" variant="secondary">
          {tc("viewAllProducts")}
        </Button>
      </FadeIn>
    </Section>
  );
}
