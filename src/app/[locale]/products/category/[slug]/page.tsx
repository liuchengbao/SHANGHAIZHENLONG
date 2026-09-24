import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/products/ProductCard";
import { CertificateSection } from "@/components/about/CertificateSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProducts } from "@/lib/get-content";
import { getCategoryCopy } from "@/lib/category-copy";
import {
  CATEGORY_SLUGS,
  categoryHref,
  isCategorySlug,
} from "@/lib/catalog";
import { getSeoLanding } from "@/lib/seo-landings";
import { breadcrumbJsonLd, faqJsonLd, languageAlternates } from "@/lib/seo";
import { COMPANY, SITE_URL } from "@/lib/constants";
import { routing, type Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

const PAGE_SIZE = 24;

type Props = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export function generateStaticParams() {
  return CATEGORY_SLUGS.flatMap((slug) =>
    routing.locales.map((locale) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const query = await searchParams;
  if (!isCategorySlug(slug)) return {};

  const landing = getSeoLanding(locale, slug);
  const page = Math.max(1, Number(query.page) || 1);
  const path = categoryHref(slug);
  const url = `${SITE_URL}/${locale}${path}${page > 1 ? `?page=${page}` : ""}`;

  return {
    title: `${landing.title} | ${COMPANY.shortName}`,
    description: landing.description,
    keywords: landing.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: `${landing.title} | ${COMPANY.shortName}`,
      description: landing.description,
      url,
      siteName: COMPANY.shortName,
      type: "website",
    },
    robots: page > 1 ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function CategoryLandingPage({ params, searchParams }: Props) {
  const { locale, slug } = await params;
  const query = await searchParams;
  if (!isCategorySlug(slug)) notFound();

  setRequestLocale(locale);
  const landing = getSeoLanding(locale, slug);
  const copy = getCategoryCopy(locale, slug);
  const page = Math.max(1, Number(query.page) || 1);
  const products = await getProducts(slug);
  const pageCount = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  if (page > pageCount) {
    redirect(`/${locale}${categoryHref(slug)}`);
  }

  const visible = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const tc = await getTranslations("common");
  const path = categoryHref(slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: tc("home"), path: "" },
          { name: tc("products"), path: "/products" },
          { name: landing.h1, path },
        ])}
      />
      <JsonLd data={faqJsonLd(landing.faqs)} />
      <Section>
        <Breadcrumbs
          items={[
            { label: tc("home"), href: "/" },
            { label: tc("products"), href: "/products" },
            { label: copy.name },
          ]}
        />
        <h1 className="max-w-4xl font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {landing.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{landing.lead}</p>

        <div className="mb-8 mt-8 flex flex-wrap gap-2">
          <Link
            href="/products"
            className="rounded-sm border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:border-slate-400"
          >
            {tc("products")}
          </Link>
          {CATEGORY_SLUGS.map((item) => (
            <Link
              key={item}
              href={categoryHref(item)}
              className={`rounded-sm border px-3 py-1.5 text-sm ${
                item === slug
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 text-slate-700 hover:border-slate-400"
              }`}
            >
              {getCategoryCopy(locale, item).name}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              viewDetailsLabel={tc("viewDetails")}
            />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => (
              <Link
                key={item}
                href={item === 1 ? path : `${path}?page=${item}`}
                className={`min-w-9 rounded-sm border px-3 py-1.5 text-center text-sm ${
                  item === page
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 text-slate-700 hover:border-slate-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">{landing.suffix}</h2>
          <div className="mt-4 space-y-4">
            {landing.faqs.map((faq) => (
              <div key={faq.question} className="rounded-sm border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CertificateSection category={slug} />
    </>
  );
}
