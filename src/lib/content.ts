import type { Project, BlogPost } from "@/types";
import { PROJECT_CATEGORY, type CategorySlug } from "@/lib/catalog";
import { getBlogArticle } from "@/content/blog";
import {
  LEGACY_BLOG_COVERS,
  NEW_BLOG_COVERS,
  NEW_BLOG_DATES,
  NEW_BLOG_SLUGS,
} from "@/content/blog/meta";

export const PROJECT_SLUGS = [
  "residential-carport-australia",
  "hotel-pergola-dubai",
  "villa-railing-germany",
  "commercial-canopy-usa",
] as const;

export const LEGACY_BLOG_SLUGS = [
  "how-to-choose-aluminum-carport",
  "powder-coating-vs-anodizing",
  "aluminum-pergola-oem-guide",
] as const;

export const BLOG_SLUGS = [...LEGACY_BLOG_SLUGS, ...NEW_BLOG_SLUGS] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];
export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const PROJECT_IMAGES: Record<ProjectSlug, string> = {
  "residential-carport-australia": "/images/projects/project-1.svg",
  "hotel-pergola-dubai": "/images/projects/project-2.svg",
  "villa-railing-germany": "/images/projects/project-3.svg",
  "commercial-canopy-usa": "/images/projects/project-4.svg",
};

type ProjectItemMessages = {
  title: string;
  location: string;
  category: string;
  description: string;
};

type BlogItemMessages = {
  title: string;
  excerpt: string;
  readTime: string;
  content: string;
};

type Messages = {
  projectItems: Record<ProjectSlug, ProjectItemMessages>;
  blogItems: Record<(typeof LEGACY_BLOG_SLUGS)[number], BlogItemMessages>;
};

export function buildProjects(messages: Messages): Project[] {
  return PROJECT_SLUGS.map((slug) => {
    const item = messages.projectItems[slug];
    const categorySlug = PROJECT_CATEGORY[slug] as CategorySlug;
    return {
      slug,
      title: item.title,
      location: item.location,
      category: item.category,
      categorySlug,
      description: item.description,
      image: PROJECT_IMAGES[slug],
    };
  });
}

export function buildBlogPosts(messages: Messages, locale: string): BlogPost[] {
  const legacy = LEGACY_BLOG_SLUGS.map((slug) => {
    const item = messages.blogItems[slug];
    return {
      slug,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      publishedAt: BLOG_DATES[slug],
      readTime: item.readTime,
      cover: LEGACY_BLOG_COVERS[slug],
    };
  });

  const fresh = NEW_BLOG_SLUGS.map((slug) => {
    const article = getBlogArticle(locale, slug);
    return {
      slug,
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      publishedAt: NEW_BLOG_DATES[slug],
      readTime: article.readTime,
      cover: NEW_BLOG_COVERS[slug],
    };
  });

  return [...legacy, ...fresh].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const BLOG_DATES: Record<(typeof LEGACY_BLOG_SLUGS)[number], string> = {
  "how-to-choose-aluminum-carport": "2025-03-15",
  "powder-coating-vs-anodizing": "2025-04-02",
  "aluminum-pergola-oem-guide": "2025-04-20",
};

export function getBlogPostBySlug(
  messages: Messages,
  slug: string,
  locale: string,
): BlogPost | undefined {
  return buildBlogPosts(messages, locale).find((post) => post.slug === slug);
}
