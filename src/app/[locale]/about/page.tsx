import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CertificateSection } from "@/components/about/CertificateSection";
import { COMPANY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

const photos = [
  { key: "workshop", src: "/images/about/workshop.jpg", wide: true },
  { key: "assembly", src: "/images/about/assembly.jpg", wide: false },
  { key: "warehouse", src: "/images/about/warehouse.jpg", wide: false },
  { key: "profiles", src: "/images/about/profiles.jpg", wide: false },
  { key: "entrance", src: "/images/about/entrance.jpg", wide: false },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "aboutTitle",
    descriptionKey: "aboutDescription",
    path: "/about",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("aboutPage");
  const tc = await getTranslations("company");
  const tcommon = await getTranslations("common");
  const tcontact = await getTranslations("contactPage");
  const capabilityItems = t.raw("capabilityItems") as string[];
  const markets = t.raw("markets") as string[];
  const paragraphs = t.raw("paragraphs") as Record<string, string>;

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { label: tcommon("home"), href: "/" },
            { label: tcommon("about") },
          ]}
        />
        <SectionHeader
          align="left"
          eyebrow={t("eyebrow")}
          title={tc("name")}
          description={tc("description")}
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6 leading-relaxed text-slate-600">
            <p>{paragraphs["0"].replace("{year}", String(COMPANY.foundedYear))}</p>
            <p>{paragraphs["1"]}</p>
            <p>{paragraphs["2"]}</p>
          </div>

          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-slate-200 bg-slate-100">
              <Image
                src="/images/about/campus.jpg"
                alt={t("introImageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-slate-500">
              {t("introImageCaption")}
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section subdued>
        <SectionHeader
          eyebrow={t("galleryEyebrow")}
          title={t("galleryTitle")}
          description={t("galleryDescription")}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <figure
              key={photo.key}
              className={`group relative overflow-hidden rounded-sm bg-slate-200 ${
                photo.wide ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${photo.wide ? "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[28rem]" : "aspect-[4/3]"}`}>
                <Image
                  src={photo.src}
                  alt={t(`photos.${photo.key}.alt`)}
                  fill
                  sizes={photo.wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  quality={70}
                  loading="lazy"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-white">
                  {t(`photos.${photo.key}.caption`)}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-sm border border-slate-200 bg-white p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900">
              {t("capabilities")}
            </h2>
            <ul className="mt-6 space-y-3">
              {capabilityItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-slate-200 bg-slate-50 p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900">
              {t("exportMarkets")}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {markets.map((market) => (
                <span
                  key={market}
                  className="rounded-sm bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {market}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {tcontact("addressLabel")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{COMPANY.address}</p>
          </div>
        </div>
      </Section>

      <CertificateSection />

      <CtaBanner />
    </>
  );
}
