import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { CATEGORY_SLUGS, categoryHref } from "@/lib/catalog";
import { getCategoryCopy } from "@/lib/category-copy";

const NAV_KEYS = [
  "home",
  "products",
  "projects",
  "about",
  "oemOdm",
  "blog",
  "contact",
] as const;

const NAV_HREFS = [
  "/",
  "/products",
  "/projects",
  "/about",
  "/oem-odm",
  "/blog",
  "/contact",
] as const;

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("company");
  const locale = await getLocale();

  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block rounded-sm bg-white px-3 py-2">
              <Image
                src="/images/logo.png"
                alt={`${tc("shortName")} ${tc("nameZh")}`}
                width={446}
                height={477}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{tc("description")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white">{t("quickLinks")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_KEYS.map((key, i) => (
                <li key={key}>
                  <Link href={NAV_HREFS[i]} className="hover:text-white">
                    {tn(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">{t("productsTitle")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {CATEGORY_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link href={categoryHref(slug)} className="hover:text-white">
                    {getCategoryCopy(locale, slug).name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">{t("contactTitle")}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {tc("name")}. {t("rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
