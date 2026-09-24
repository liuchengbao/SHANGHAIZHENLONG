import { getTranslations } from "next-intl/server";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CertificateGallery } from "@/components/about/CertificateGallery";
import { certificatesForCategory } from "@/lib/certificates";

export async function CertificateSection({
  category,
  subdued = true,
}: {
  category?: string;
  subdued?: boolean;
}) {
  const items = certificatesForCategory(category);
  if (items.length === 0) return null;

  const t = await getTranslations("aboutPage");
  const matched = Boolean(category);

  return (
    <Section subdued={subdued}>
      <SectionHeader
        eyebrow={t("certEyebrow")}
        title={matched ? t("certMatchedTitle") : t("certTitle")}
        description={matched ? t("certMatchedDescription") : t("certDescription")}
      />
      <CertificateGallery
        viewLabel={t("certView")}
        closeLabel={t("certClose")}
        items={items.map((item) => ({
          src: item.src,
          name: t(`certs.${item.key}.name`),
          detail: t("certStandard"),
          alt: t(`certs.${item.key}.alt`),
        }))}
      />
    </Section>
  );
}
