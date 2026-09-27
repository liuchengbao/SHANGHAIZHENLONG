import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InquiryFormLazy as InquiryForm } from "@/components/forms/InquiryFormLazy";
import { getCategoryOptions } from "@/lib/get-content";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "oemTitle",
    descriptionKey: "oemDescription",
    path: "/oem-odm",
  });
}

export default async function OemOdmPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("oemPage");
  const tc = await getTranslations("common");
  const steps = t.raw("steps") as Record<
    string,
    { title: string; description: string }
  >;
  const productOptions = await getCategoryOptions();

  return (
    <>
      <Section>
        <Breadcrumbs
          items={[
            { label: tc("home"), href: "/" },
            { label: tc("oemOdm") },
          ]}
        />
        <SectionHeader
          align="left"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(steps).map(([key, item]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl font-bold text-sky-100">{key}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section subdued>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title={t("formTitle")}
            description={t("formDescription")}
          />
          <InquiryForm productOptions={productOptions} />
        </div>
      </Section>
    </>
  );
}
