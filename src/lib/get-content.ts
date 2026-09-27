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
  type CategorySlug,
  isCategorySlug,
} from "./catalog";
import { getCategoryCopy } from "./category-copy";
import type { Product, Project, BlogPost } from "@/types";

type ContentMessages = Parameters<typeof buildProjects>[0];

async function getContentMessages(): Promise<ContentMessages> {
  const messages = await getMessages();
  return messages as ContentMessages;
}

function titleHighlights(title: string): string[] {
  const hints: string[] = [];
  const rules: [RegExp, string][] = [
    [/louver|louvre|bioclimatic/i, "louvered roof"],
    [/motor|electric|automatic/i, "motorized options"],
    [/privacy|slat/i, "privacy panels"],
    [/pool/i, "pool-side use"],
    [/carport|parking/i, "vehicle bay"],
    [/double|2.?car|two.?car/i, "double bay"],
    [/sliding/i, "sliding operation"],
    [/swing/i, "swing leaf"],
    [/awning|canopy|marquise/i, "entrance cover"],
    [/gazebo|pergola|pavilion/i, "outdoor structure"],
    [/fence|railing/i, "boundary system"],
    [/gate|door/i, "entrance gate"],
    [/PVDF|powder/i, "coated finish"],
  ];
  for (const [re, label] of rules) {
    if (re.test(title) && !hints.includes(label)) hints.push(label);
    if (hints.length >= 3) break;
  }
  return hints;
}

export function toProduct(item: CatalogProduct, locale: string): Product {
  const copy = getCategoryCopy(locale, item.category);
  const highlights = titleHighlights(item.title);
  const highlightText = highlights.length
    ? ` Highlights: ${highlights.join(", ")}.`
    : "";
  const shortBits = [copy.name, item.price, `MOQ ${item.moq}`, ...highlights.slice(0, 2)];

  return {
    slug: item.id,
    name: item.title,
    category: item.category,
    shortDescription: shortBits.join(" · "),
    description: `${item.title}. ${copy.description}${highlightText} Factory quote based on opening size, finish, and packing.`,
    features: [
      ...copy.features.slice(0, 3),
      ...highlights.map((h) => h.charAt(0).toUpperCase() + h.slice(1)),
      `Reference price band: ${item.price}`,
      `MOQ: ${item.moq}`,
    ].slice(0, 6),
    specifications: [
      { label: copy.specLabels[0], value: copy.material },
      { label: copy.specLabels[1], value: copy.surface },
      { label: copy.specLabels[2], value: item.price },
      { label: copy.specLabels[3], value: item.moq },
      { label: "Model ID", value: item.id },
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

export async function getRelatedProducts(
  slug: string,
  limit = 4,
): Promise<Product[]> {
  const locale = await getLocale();
  const current = getCatalogProduct(slug);
  if (!current) return [];
  return CATALOG.filter(
    (item) => item.category === current.category && item.id !== slug,
  )
    .slice(0, limit)
    .map((item) => toProduct(item, locale));
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

export function blogSlugsForCategory(category: string): string[] {
  const map: Record<string, string[]> = {
    "aluminum-gazebos": [
      "buyer-path-first-pergola-order",
      "louvered-vs-fixed-pergola",
      "hotel-pergola-project-path",
    ],
    "aluminum-fences": ["how-to-choose-fence-model"],
    "aluminum-carports": ["carport-from-driveway-to-drawing", "how-to-choose-aluminum-carport"],
    "aluminum-doors": ["aluminum-gate-swing-or-sliding"],
    "aluminum-sliding-doors": ["aluminum-gate-swing-or-sliding"],
    awnings: ["sizing-awnings-and-canopies"],
  };
  return map[category] ?? ["inquiry-to-container", "oem-brief-before-production"];
}

export function isKnownCategory(value: string): value is CategorySlug {
  return isCategorySlug(value);
}
