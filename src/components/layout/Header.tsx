"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/oem-odm", key: "oemOdm" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const tCompany = useTranslations("company");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt={`${tCompany("shortName")} ${tCompany("nameZh")}`}
              width={446}
              height={477}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-[var(--accent-dark)]" : "text-slate-600 hover:text-[var(--accent-dark)]"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Button href="/contact" className="hidden sm:inline-flex">
              {tc("getQuote")}
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="border-t border-slate-200 py-4 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Button href="/contact" className="mt-3 w-full sm:hidden">
                {tc("getQuote")}
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
