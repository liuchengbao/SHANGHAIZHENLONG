import type { Locale } from "@/i18n/routing";
import type { BlogArticle, NewBlogSlug } from "./meta";
import { en } from "./en";
import { zh } from "./zh";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { pt } from "./pt";
import { ru } from "./ru";
import { ar } from "./ar";
import { ja } from "./ja";
import { ko } from "./ko";

const packs: Record<Locale, Record<NewBlogSlug, BlogArticle>> = {
  en,
  zh,
  es,
  fr,
  de,
  pt,
  ru,
  ar,
  ja,
  ko,
};

export function getBlogArticle(locale: string, slug: NewBlogSlug): BlogArticle {
  const pack = packs[locale as Locale] ?? en;
  return pack[slug] ?? en[slug];
}
