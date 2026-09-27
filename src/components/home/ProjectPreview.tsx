import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getProjects } from "@/lib/get-content";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { categoryHref, getCategoryCover, isCategorySlug } from "@/lib/catalog";
import { getCategoryCopy } from "@/lib/category-copy";
import { Link } from "@/i18n/navigation";

export async function ProjectPreview() {
  const t = await getTranslations("home.projects");
  const tc = await getTranslations("common");
  const locale = await getLocale();
  const projects = await getProjects();

  return (
    <Section>
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <article className="group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[var(--accent)]/30 hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={
                    isCategorySlug(project.categorySlug)
                      ? getCategoryCover(project.categorySlug)
                      : project.image
                  }
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                {isCategorySlug(project.categorySlug) ? (
                  <Link
                    href={categoryHref(project.categorySlug)}
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-dark)]"
                  >
                    {getCategoryCopy(locale, project.categorySlug).name}
                  </Link>
                ) : (
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-dark)]">
                    {project.category}
                  </p>
                )}
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{project.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-10 text-center" delay={0.2}>
        <Button href="/projects" variant="secondary">
          {tc("viewAllProjects")}
        </Button>
      </FadeIn>
    </Section>
  );
}
