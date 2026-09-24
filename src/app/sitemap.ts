import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { BLOG_SLUGS } from "@/lib/content";
import { CATALOG, CATEGORY_SLUGS, categoryHref } from "@/lib/catalog";

const staticPaths = [
  "",
  "/products",
  "/projects",
  "/about",
  "/oem-odm",
  "/blog",
  "/contact",
];

function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${SITE_URL}/${locale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/en${path}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages: buildAlternates(path) },
      });
    }

    for (const slug of CATEGORY_SLUGS) {
      const path = categoryHref(slug);
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: { languages: buildAlternates(path) },
      });
    }

    for (const product of CATALOG) {
      const path = `/products/${product.id}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: buildAlternates(path) },
      });
    }

    for (const slug of BLOG_SLUGS) {
      const path = `/blog/${slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: buildAlternates(path) },
      });
    }
  }

  return entries;
}
