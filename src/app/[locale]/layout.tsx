import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { routing, isRtlLocale, type Locale } from "@/i18n/routing";
import { organizationJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type MessageTree = Record<string, unknown>;

/** Only ship namespaces used by client components (Header / LanguageSwitcher / InquiryForm). */
function clientMessages(messages: MessageTree): MessageTree {
  const keys = ["nav", "common", "company", "form"] as const;
  const picked: MessageTree = {};
  for (const key of keys) {
    if (messages[key] !== undefined) picked[key] = messages[key];
  }
  return picked;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "company" });
  const dir = isRtlLocale(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${geist.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={clientMessages(messages)}>
          <JsonLd
            data={organizationJsonLd(locale as Locale, t("description"))}
          />
          <GoogleAnalytics />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
