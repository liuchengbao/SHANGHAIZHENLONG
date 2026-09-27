import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getBlogPosts } from "@/lib/get-content";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "blogTitle",
    descriptionKey: "blogDescription",
    path: "/blog",
    type: "article",
  });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("blogPage");
  const tc = await getTranslations("common");
  const posts = await getBlogPosts();

  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: tc("home"), href: "/" },
          { label: tc("blog") },
        ]}
      />
      <SectionHeader
        align="left"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"
          >
            <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] bg-slate-100">
              <Image src={post.cover} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" quality={70} loading="lazy" className="object-cover" />
            </Link>
            <div className="p-6">
              <p className="text-xs text-slate-500">
                {post.publishedAt} · {post.readTime}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--accent-dark)]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-[var(--accent-dark)]"
              >
                {tc("readMore")} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
