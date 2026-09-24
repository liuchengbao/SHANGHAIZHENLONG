import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hero, StatsBar } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyUs } from "@/components/home/WhyUs";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CertificateSection } from "@/components/about/CertificateSection";
import { ProcessTimeline } from "@/components/home/ProcessTimelineSection";
import { createPageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale: locale as Locale,
    titleKey: "homeTitle",
    descriptionKey: "homeDescription",
    path: "",
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatsBar />
      <ProductShowcase />
      <ProcessTimeline />
      <WhyUs />
      <ProjectPreview />
      <CertificateSection />
      <CtaBanner />
    </>
  );
}
