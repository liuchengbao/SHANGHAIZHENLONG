import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY, SITE_URL } from "./constants";
import { routing, type Locale } from "@/i18n/routing";
import { CATEGORY_SLUGS } from "@/lib/catalog";
import { getCategoryCopy } from "@/lib/category-copy";
import { pageKeywordsForTitle } from "@/lib/seo-landings";

type PageSeoOptions = {
  locale: Locale;
  titleKey: string;
  descriptionKey: string;
  path?: string;
  namespace?: string;
  type?: "website" | "article";
};

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
  ar: "ar_SA",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_BR",
  ru: "ru_RU",
  ja: "ja_JP",
  ko: "ko_KR",
};

export function languageAlternates(path = "") {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${SITE_URL}/${loc}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/en${path}`;
  return languages;
}

export async function createPageMetadata({
  locale,
  titleKey,
  descriptionKey,
  path = "",
  namespace = "meta",
  type = "website",
}: PageSeoOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const title = t(titleKey);
  const description = t(descriptionKey);
  const localizedPath = `/${locale}${path}`;
  const url = `${SITE_URL}${localizedPath}`;
  const languages = languageAlternates(path);

  const fullTitle = `${title} | ${COMPANY.shortName}`;

  const keywords = pageKeywordsForTitle(locale, titleKey);

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.shortName,
      locale: ogLocaleMap[locale],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    alternateName: COMPANY.nameZh,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/images/logo.png`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: "玉秀路39号",
      addressLocality: "松江区",
      addressRegion: "上海市",
      addressCountry: "CN",
    },
    description,
    areaServed: COMPANY.exportMarkets,
    knowsAbout: CATEGORY_SLUGS.map((slug) => getCategoryCopy(locale, slug).name),
  };
}

export function productJsonLd(
  locale: Locale,
  product: { name: string; description: string; slug: string; image: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    brand: { "@type": "Brand", name: COMPANY.shortName },
    manufacturer: { "@type": "Organization", name: COMPANY.name },
    url: `${SITE_URL}/${locale}/products/${product.slug}`,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path}`,
    })),
  };
}
