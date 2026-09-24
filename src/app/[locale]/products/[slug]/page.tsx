import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { CATALOG, isCategorySlug } from "@/lib/catalog";
import { getProductBySlug, getCategoryOptions } from "@/lib/get-content";
import { routing, type Locale } from "@/i18n/routing";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  languageAlternates,
  productJsonLd,
} from "@/lib/seo";
import { getSeoLanding } from "@/lib/seo-landings";
import { COMPANY, SITE_URL } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { CertificateSection } from "@/components/about/CertificateSection";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return CATALOG.flatMap((product) =>
    routing.locales.map((locale) => ({ locale, slug: product.id })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  const url = `${SITE_URL}/${locale}/products/${slug}`;
  const landing = isCategorySlug(product.category) ? getSeoLanding(locale, product.category) : null;
  const fullTitle = landing
    ? `${product.name} | ${landing.suffix}`
    : `${product.name} | ${COMPANY.shortName}`;
  const description = landing
    ? `${landing.suffix}. ${product.shortDescription}`
    : product.shortDescription;

  return {
    title: fullTitle,
    description,
    keywords: landing ? [product.name, ...landing.keywords] : [product.name],
    alternates: {
      canonical: url,
      languages: languageAlternates(`/products/${slug}`),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.shortName,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("productDetail");
  const tc = await getTranslations("common");
  const categoryOptions = await getCategoryOptions();
  const productOptions = [
    { value: product.slug, label: product.name },
    ...categoryOptions.filter((option) => option.value !== product.slug),
  ];

  return (
    <>
      <JsonLd data={productJsonLd(locale as Locale, product)} />
      <JsonLd
        data={breadcrumbJsonLd(locale as Locale, [
          { name: tc("home"), path: "" },
          { name: tc("products"), path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
      {product.faqs.length > 0 && <JsonLd data={faqJsonLd(product.faqs)} />}

      <Section>
        <Breadcrumbs
          items={[
            { label: tc("home"), href: "/" },
            { label: tc("products"), href: "/products" },
            { label: product.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {product.description}
            </p>
            <ul className="mt-6 space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t("specifications")}
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <tbody>
                  {product.specifications.map((spec) => (
                    <tr
                      key={spec.label}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <th className="bg-slate-50 px-4 py-3 text-start font-medium text-slate-700">
                        {spec.label}
                      </th>
                      <td className="px-4 py-3 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-slate-900">
              {t("applications")}
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((app) => (
                <li
                  key={app}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700"
                >
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <InquiryForm
              defaultProduct={product.slug}
              productOptions={productOptions}
            />

            {product.faqs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-slate-900">{t("faq")}</h2>
                <div className="mt-4 space-y-4">
                  {product.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-slate-200 p-5"
                    >
                      <h3 className="font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
      <CertificateSection category={product.category} />
    </>
  );
}
