"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { localeNames, routing, type Locale } from "@/i18n/routing";
import { ChevronDown, Globe } from "lucide-react";

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <details className="group relative shrink-0">
      <summary
        className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-slate-300 [&::-webkit-details-marker]:hidden"
        aria-label={t("language")}
      >
        <Globe className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <span>{localeNames[locale]}</span>
        <ChevronDown
          className="h-4 w-4 text-slate-400 transition group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <ul className="absolute end-0 z-50 mt-2 max-h-80 w-40 overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
        {routing.locales.map((loc) => {
          const active = loc === locale;
          return (
            <li key={loc}>
              <Link
                href={pathname}
                locale={loc}
                hrefLang={loc}
                lang={loc}
                prefetch={false}
                aria-current={active ? "true" : undefined}
                className={`block px-3 py-2 text-sm ${
                  active
                    ? "bg-slate-50 font-semibold text-slate-900"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {localeNames[loc]}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
