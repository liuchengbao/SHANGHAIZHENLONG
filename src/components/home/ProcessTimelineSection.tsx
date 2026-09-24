import { getTranslations } from "next-intl/server";
import { ProcessTimelineClient } from "@/components/home/ProcessTimeline";

export async function ProcessTimeline() {
  const t = await getTranslations("home.process");
  const steps = Object.values(
    t.raw("steps") as Record<string, { title: string; description: string }>,
  );

  return (
    <ProcessTimelineClient
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      steps={steps}
    />
  );
}
