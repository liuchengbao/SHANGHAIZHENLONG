import { getTranslations } from "next-intl/server";
import { ProductCard } from "@/components/products/ProductCard";
import { Link } from "@/i18n/navigation";
import {
  getRelatedProducts,
  getBlogPosts,
  blogSlugsForCategory,
} from "@/lib/get-content";
import { categoryHref, isCategorySlug } from "@/lib/catalog";

export async function RelatedProducts({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const tc = await getTranslations("common");
  const t = await getTranslations("productDetail");
  const related = await getRelatedProducts(slug, 4);
  const posts = await getBlogPosts();
  const blogSlugs = new Set(blogSlugsForCategory(category));
  const relatedPosts = posts.filter((post) => blogSlugs.has(post.slug)).slice(0, 3);

  return (
    <div className="space-y-14">
      {related.length > 0 && (
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">{t("relatedProducts")}</h2>
            {isCategorySlug(category) && (
              <Link
                href={categoryHref(category)}
                className="text-sm font-semibold text-[var(--accent-dark)]"
              >
                {tc("viewAllProducts")} →
              </Link>
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                viewDetailsLabel={tc("viewDetails")}
              />
            ))}
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">{t("relatedArticles")}</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-sm border border-slate-200 p-4 transition hover:border-[var(--accent)]/40"
                >
                  <p className="text-xs text-slate-500">{post.publishedAt}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{post.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
