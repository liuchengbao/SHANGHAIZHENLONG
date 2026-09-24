import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { BLOG_SLUGS } from "@/lib/content";
import { getBlogPostBySlug } from "@/lib/get-content";
import { languageAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { COMPANY, SITE_URL } from "@/lib/constants";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return BLOG_SLUGS.flatMap((slug) =>
    routing.locales.map((locale) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zhenlongaluminum.com"}/${locale}/blog/${slug}`;
  const fullTitle = `${post.title} | ${COMPANY.shortName}`;

  return {
    title: fullTitle,
    description: post.excerpt,
    alternates: {
      canonical: url,
      languages: languageAlternates(`/blog/${slug}`),
    },
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      url,
      type: "article",
    },
  };
}

function renderContent(content: string, locale: string) {
  return content.split("\n\n").map((block, index) => {
    const image = block.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (image) {
      const [, alt, src] = image;
      return (
        <figure key={index} className="mt-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100">
            <Image src={src} alt={alt} fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-2 text-sm text-slate-500">{alt}</figcaption>
        </figure>
      );
    }
    const link = block.match(/^\[(.+?)\]\((.+?)\)$/);
    if (link) {
      const [, label, href] = link;
      return (
        <p key={index} className="mt-8">
          <a href={`/${locale}${href}`} className="text-sm font-semibold text-[var(--accent-dark)]">
            {label} →
          </a>
        </p>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-8 text-2xl font-bold text-slate-900">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") && block.includes("**")) {
      const title = block.match(/\*\*(.+?)\*\*/)?.[1];
      const rest = block.replace(/\*\*.+?\*\*/, "").trim();
      return (
        <div key={index} className="mt-4">
          {title && <h3 className="font-semibold text-slate-900">{title}</h3>}
          {rest && (
            <p className="mt-1 leading-relaxed text-slate-600">{rest}</p>
          )}
        </div>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={index} className="mt-4 list-disc space-y-1 ps-5 text-slate-600">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }
    if (/^\d+\./.test(block)) {
      const items = block.split("\n");
      return (
        <ol key={index} className="mt-4 list-decimal space-y-1 ps-5 text-slate-600">
          {items.map((item) => (
            <li key={item}>{item.replace(/^\d+\.\s*/, "")}</li>
          ))}
        </ol>
      );
    }
    return (
      <p key={index} className="mt-4 leading-relaxed text-slate-600">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const tc = await getTranslations("common");

  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: tc("home"), href: "/" },
          { label: tc("blog"), href: "/blog" },
          { label: post.title },
        ]}
      />
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-slate-500">
          {post.publishedAt} · {post.readTime}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm bg-slate-100">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            image: `${SITE_URL}${post.cover}`,
            description: post.excerpt,
            author: { "@type": "Organization", name: COMPANY.name },
            publisher: { "@type": "Organization", name: COMPANY.name },
          }}
        />
        <div className="mt-8 border-t border-slate-200 pt-8">
          {renderContent(post.content, locale)}
        </div>
      </article>
    </Section>
  );
}
