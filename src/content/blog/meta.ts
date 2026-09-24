export const NEW_BLOG_SLUGS = [
  "buyer-path-first-pergola-order",
  "louvered-vs-fixed-pergola",
  "carport-from-driveway-to-drawing",
  "how-to-choose-fence-model",
  "oem-brief-before-production",
  "powder-coating-color-brief",
  "hotel-pergola-project-path",
  "aluminum-gate-swing-or-sliding",
  "sizing-awnings-and-canopies",
  "inquiry-to-container",
] as const;

export type NewBlogSlug = (typeof NEW_BLOG_SLUGS)[number];

export type BlogArticle = {
  title: string;
  excerpt: string;
  readTime: string;
  content: string;
};

export const NEW_BLOG_DATES: Record<NewBlogSlug, string> = {
  "buyer-path-first-pergola-order": "2026-01-20",
  "louvered-vs-fixed-pergola": "2026-02-18",
  "carport-from-driveway-to-drawing": "2026-03-12",
  "how-to-choose-fence-model": "2026-04-16",
  "oem-brief-before-production": "2026-05-21",
  "powder-coating-color-brief": "2026-06-11",
  "hotel-pergola-project-path": "2026-07-09",
  "aluminum-gate-swing-or-sliding": "2026-08-06",
  "sizing-awnings-and-canopies": "2026-08-27",
  "inquiry-to-container": "2026-09-10",
};

export const NEW_BLOG_COVERS: Record<NewBlogSlug, string> = {
  "buyer-path-first-pergola-order": "/images/catalog/1601809097391.jpg",
  "louvered-vs-fixed-pergola": "/images/catalog/1601809130216.jpg",
  "carport-from-driveway-to-drawing": "/images/catalog/1601808359950.jpg",
  "how-to-choose-fence-model": "/images/catalog/1601809106318.jpg",
  "oem-brief-before-production": "/images/about/workshop.jpg",
  "powder-coating-color-brief": "/images/about/assembly.jpg",
  "hotel-pergola-project-path": "/images/catalog/1601809130216.jpg",
  "aluminum-gate-swing-or-sliding": "/images/catalog/1601808496082.jpg",
  "sizing-awnings-and-canopies": "/images/catalog/1601808441409.jpg",
  "inquiry-to-container": "/images/about/warehouse.jpg",
};

export const LEGACY_BLOG_COVERS = {
  "how-to-choose-aluminum-carport": "/images/catalog/1601808359950.jpg",
  "powder-coating-vs-anodizing": "/images/about/profiles.jpg",
  "aluminum-pergola-oem-guide": "/images/catalog/1601809097391.jpg",
} as const;
