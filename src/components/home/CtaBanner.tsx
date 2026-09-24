import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export async function CtaBanner() {
  const t = await getTranslations("home.cta");
  const tc = await getTranslations("common");

  return (
    <Section className="!py-0">
      <FadeIn>
        <div className="relative overflow-hidden rounded-sm bg-slate-950 px-8 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,149,106,0.15),_transparent_70%)]" />
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">{t("description")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="accent">
                {tc("getQuote")}
              </Button>
              <Button href="/oem-odm" variant="ghost">
                {tc("learnOem")}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
