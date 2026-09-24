import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getProducts } from "@/lib/get-content";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_SLUGS, categoryHref, isCategorySlug } from "@/lib/catalog";
import { getCategoryCopy } from "@/lib/category-copy";
import { Link } from "@/i18n/navigation";
import { CertificateSection } from "@/components/about/CertificateSection";
import { redirect } from "next/navigation";

const PAGE_SIZE = 24;

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "productsTitle",
    descriptionKey: "productsDescription",
    path: "/products",
  });
}

export default async function ProductsPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const query = await searchParams;
  setRequestLocale(locale);

  const category = query.category && isCategorySlug(query.category) ? query.category : undefined;
  const page = Math.max(1, Number(query.page) || 1);
  if (category) {
    redirect(`/${locale}${categoryHref(category)}${page > 1 ? `?page=${page}` : ""}`);
  }
  const t = await getTranslations("productsPage");
  const tc = await getTranslations("common");
  const products = await getProducts(category);
  const pageCount = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = products.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function href(nextCategory?: string, nextPage = 1) {
    if (nextCategory && isCategorySlug(nextCategory)) {
      return nextPage > 1
        ? `${categoryHref(nextCategory)}?page=${nextPage}`
        : categoryHref(nextCategory);
    }
    return nextPage > 1 ? `/products?page=${nextPage}` : "/products";
  }

  return (
    <>
    <Section>
      <Breadcrumbs
        items={[
          { label: tc("home"), href: "/" },
          { label: tc("products") },
        ]}
      />
      <SectionHeader
        align="left"
        eyebrow={t("eyebrow")}
        title={category ? getCategoryCopy(locale, category).name : t("title")}
        description={category ? getCategoryCopy(locale, category).summary : t("description")}
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <Link
          href="/products"
          className={`rounded-sm border px-3 py-1.5 text-sm ${
            !category
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 text-slate-700 hover:border-slate-400"
          }`}
        >
          {tc("products")}
        </Link>
        {CATEGORY_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={href(slug)}
            className={`rounded-sm border px-3 py-1.5 text-sm ${
              category === slug
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 text-slate-700 hover:border-slate-400"
            }`}
          >
            {getCategoryCopy(locale, slug).name}
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
              href={href(category, item)}
              className={`min-w-9 rounded-sm border px-3 py-1.5 text-center text-sm ${
                item === currentPage
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 text-slate-700 hover:border-slate-400"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </Section>
    <CertificateSection category={category} />
    </>
  );
}
