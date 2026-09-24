import { getLocale, getMessages } from "next-intl/server";
import {
  buildProjects,
  buildBlogPosts,
  getBlogPostBySlug as findBlogPost,
} from "./content";
import {
  CATALOG,
  CATEGORY_SLUGS,
  getCatalogProduct,
  type CatalogProduct,
} from "./catalog";
import { getCategoryCopy } from "./category-copy";
import type { Product, Project, BlogPost } from "@/types";

type ContentMessages = Parameters<typeof buildProjects>[0];

async function getContentMessages(): Promise<ContentMessages> {
  const messages = await getMessages();
  return messages as ContentMessages;
}

export function toProduct(item: CatalogProduct, locale: string): Product {
  const copy = getCategoryCopy(locale, item.category);
  return {
    slug: item.id,
    name: item.title,
    category: item.category,
    shortDescription: `${copy.name} · ${item.price} · MOQ ${item.moq}`,
    description: copy.description,
    features: copy.features,
    specifications: [
      { label: copy.specLabels[0], value: copy.material },
      { label: copy.specLabels[1], value: copy.surface },
      { label: copy.specLabels[2], value: item.price },
      { label: copy.specLabels[3], value: item.moq },
    ],
    applications: copy.applications,
    faqs: copy.faqs,
    image: item.image,
    price: item.price,
    moq: item.moq,
  };
}

export async function getProducts(category?: string): Promise<Product[]> {
  const locale = await getLocale();
  const items = category
    ? CATALOG.filter((item) => item.category === category)
    : CATALOG;
  return items.map((item) => toProduct(item, locale));
}

export async function getProjects(): Promise<Project[]> {
  return buildProjects(await getContentMessages());
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return buildBlogPosts(await getContentMessages(), await getLocale());
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const item = getCatalogProduct(slug);
  if (!item) return undefined;
  return toProduct(item, await getLocale());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return findBlogPost(await getContentMessages(), slug, await getLocale());
}

export async function getCategoryOptions(): Promise<{ value: string; label: string }[]> {
  const locale = await getLocale();
  return CATEGORY_SLUGS.map((slug) => ({
    value: slug,
    label: getCategoryCopy(locale, slug).name,
  }));
}
