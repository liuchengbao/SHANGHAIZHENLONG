import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { getCategoryOptions } from "@/lib/get-content";
import { COMPANY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "contactTitle",
    descriptionKey: "contactDescription",
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contactPage");
  const tc = await getTranslations("common");
  const productOptions = await getCategoryOptions();

  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: tc("home"), href: "/" },
          { label: tc("contact") },
        ]}
      />
      <SectionHeader
        align="left"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              {t("infoTitle")}
            </h2>
            <ul className="mt-6 space-y-5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                <div>
                  <p className="font-medium text-slate-900">{t("addressLabel")}</p>
                  <p>{COMPANY.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                <div>
                  <p className="font-medium text-slate-900">{t("emailLabel")}</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sky-700 hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                <div>
                  <p className="font-medium text-slate-900">{t("phoneLabel")}</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-sky-700 hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-xl bg-white p-4 text-sm text-slate-600 ring-1 ring-slate-200">
              <p className="font-medium text-slate-900">{t("hoursTitle")}</p>
              <p className="mt-1">{t("hoursValue")}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <InquiryForm productOptions={productOptions} />
        </div>
      </div>
    </Section>
  );
}
