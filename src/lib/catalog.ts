import catalogData from "@/data/catalog.json";

export const CATEGORY_SLUGS = [
  "aluminum-gazebos",
  "aluminum-fences",
  "aluminum-carports",
  "aluminum-sliding-doors",
  "aluminum-doors",
  "awnings",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export type CatalogProduct = {
  id: string;
  title: string;
  category: CategorySlug;
  price: string;
  moq: string;
  image: string;
};

export const CATALOG: CatalogProduct[] = catalogData as CatalogProduct[];

const categorySet = new Set<string>(CATEGORY_SLUGS);

export function isCategorySlug(value: string): value is CategorySlug {
  return categorySet.has(value);
}

export function getCatalogProducts(category?: string): CatalogProduct[] {
  if (category && isCategorySlug(category)) {
    return CATALOG.filter((item) => item.category === category);
  }
  return CATALOG;
}

export function getCatalogProduct(id: string): CatalogProduct | undefined {
  return CATALOG.find((item) => item.id === id);
}

export function getCategoryCover(category: CategorySlug): string {
  return CATALOG.find((item) => item.category === category)?.image ?? "";
}

export function categoryHref(slug: CategorySlug): string {
  return `/products/category/${slug}`;
}

export const PROJECT_CATEGORY: Record<string, CategorySlug> = {
  "residential-carport-australia": "aluminum-carports",
  "hotel-pergola-dubai": "aluminum-gazebos",
  "villa-railing-germany": "aluminum-fences",
  "commercial-canopy-usa": "awnings",
};
