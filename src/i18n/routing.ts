import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "zh",
  "es",
  "ar",
  "fr",
  "de",
  "pt",
  "ru",
  "ja",
  "ko",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  es: "Español",
  ar: "العربية",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
};

export const rtlLocales: Locale[] = ["ar"];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}
