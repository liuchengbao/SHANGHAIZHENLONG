import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { HeroClient } from "@/components/home/HeroClient";
import { TrustBarClient } from "@/components/home/HomeAnimations";
import { CATEGORY_SLUGS, getCategoryCover } from "@/lib/catalog";
import { getCategoryCopy } from "@/lib/category-copy";

export async function Hero() {
  const t = await getTranslations("home.hero");
  const ts = await getTranslations("home.stats");
  const tc = await getTranslations("common");
  const tt = await getTranslations("home.trust");
  const highlights = Object.values(
    t.raw("highlights") as Record<string, string>,
  );
  const trustItems = tt.raw("items") as string[];

  const locale = await getLocale();
  const caption = ["aluminum-gazebos", "aluminum-fences", "aluminum-carports", "aluminum-doors"]
    .map((slug) => getCategoryCopy(locale, slug as (typeof CATEGORY_SLUGS)[number]).name)
    .join(" · ");

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(184,149,106,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <Container className="relative py-16 sm:py-24 lg:py-28">
          <HeroClient
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            highlights={highlights}
            ctaPrimary={tc("getFreeQuote")}
            ctaSecondary={tc("exploreProducts")}
            imageSrc={getCategoryCover("aluminum-gazebos")}
            imageAlt={getCategoryCopy(locale, "aluminum-gazebos").name}
            caption={caption}
            imageLabel={t("imageLabel")}
            alloyLabel={t("alloy")}
            marketsLabel={ts("markets")}
          />
        </Container>
      </section>
      <TrustBarClient items={trustItems} />
    </>
  );
}

export async function StatsBar() {
  const t = await getTranslations("home.stats");
  const { StatsBarClient } = await import("@/components/home/HomeAnimations");

  const stats = [
    {
      icon: "clock" as const,
      value: 30,
      suffix: "+",
      label: t("founded"),
    },
    {
      icon: "factory" as const,
      value: 5,
      suffix: "",
      label: t("products"),
    },
    {
      icon: "globe" as const,
      value: 50,
      suffix: "+",
      label: t("markets"),
    },
    {
      icon: "check" as const,
      value: 0.5,
      decimals: 1,
      suffix: "h",
      label: t("support"),
    },
  ];

  return <StatsBarClient stats={stats} />;
}
