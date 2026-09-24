"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { localeNames, routing, type Locale } from "@/i18n/routing";
import { ChevronDown, Globe } from "lucide-react";

function buildLocaleUrls(pathname: string): Record<Locale, string> {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix =
    segments.length > 0 && routing.locales.includes(segments[0] as Locale);
  const rest = hasLocalePrefix ? segments.slice(1) : segments;
  const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";

  return routing.locales.reduce(
    (acc, loc) => {
      acc[loc] = `/${loc}${suffix}`;
      return acc;
    },
    {} as Record<Locale, string>,
  );
}

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname() ?? "/";
  const urls = buildLocaleUrls(pathname);

  return (
    <details className="group relative shrink-0">
      <summary className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-slate-300 [&::-webkit-details-marker]:hidden">
        <Globe className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <span>{localeNames[locale]}</span>
        <ChevronDown className="h-4 w-4 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <ul className="absolute end-0 z-50 mt-2 max-h-80 w-40 overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
        {routing.locales.map((loc) => {
          const active = loc === locale;
          return (
            <li key={loc}>
              <a
                href={urls[loc]}
                hrefLang={loc}
                lang={loc}
                aria-current={active ? "true" : undefined}
                className={`block px-3 py-2 text-sm ${
                  active
                    ? "bg-slate-50 font-semibold text-slate-900"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {localeNames[loc]}
              </a>
            </li>
          );
        })}
      </ul>
      <span className="sr-only">{t("language")}</span>
    </details>
  );
}
