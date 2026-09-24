import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getProjects } from "@/lib/get-content";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { getCategoryCopy } from "@/lib/category-copy";
import { categoryHref, isCategorySlug, getCategoryCover } from "@/lib/catalog";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "projectsTitle",
    descriptionKey: "projectsDescription",
    path: "/projects",
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projectsPage");
  const tc = await getTranslations("common");
  const projects = await getProjects();

  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: tc("home"), href: "/" },
          { label: tc("projects") },
        ]}
      />
      <SectionHeader
        align="left"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src={
                  isCategorySlug(project.categorySlug)
                    ? getCategoryCover(project.categorySlug)
                    : project.image
                }
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              {isCategorySlug(project.categorySlug) ? (
                <Link
                  href={categoryHref(project.categorySlug)}
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-dark)]"
                >
                  {getCategoryCopy(locale, project.categorySlug).name}
                </Link>
              ) : (
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  {project.category}
                </p>
              )}
              <h2 className="mt-2 text-xl font-semibold text-slate-900">
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{project.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
