import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Factory, Globe2, PenTool, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const icons = [Factory, PenTool, ShieldCheck, Globe2];

export async function WhyUs() {
  const t = await getTranslations("home.whyUs");
  const items = t.raw("items") as Record<
    string,
    { title: string; description: string }
  >;

  return (
    <Section subdued>
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(items).map(([key, item], index) => {
          const Icon = icons[index] ?? Factory;
          return (
            <StaggerItem key={key}>
              <div className="group h-full rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[var(--accent)]/40 hover:shadow-md">
                <div className="mb-4 inline-flex rounded-sm border border-slate-100 bg-slate-50 p-3 text-[var(--accent-dark)] transition group-hover:border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
