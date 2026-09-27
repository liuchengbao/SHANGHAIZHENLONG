import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { BLOG_SLUGS } from "@/lib/content";
import { CATALOG, CATEGORY_SLUGS, categoryHref } from "@/lib/catalog";

/** Cache sitemap for 1 hour so Googlebot does not hit cold generation timeouts. */
export const revalidate = 3600;

const staticPaths = [
  "",
  "/products",
  "/projects",
  "/about",
  "/oem-odm",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Keep sitemap lean: hreflang already lives in page <link rel="alternate"> metadata.
  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    }

    for (const slug of CATEGORY_SLUGS) {
      entries.push({
        url: `${SITE_URL}/${locale}${categoryHref(slug)}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }

    for (const product of CATALOG) {
      entries.push({
        url: `${SITE_URL}/${locale}/products/${product.id}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of BLOG_SLUGS) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
