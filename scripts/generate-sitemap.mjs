import fs from "node:fs";
import path from "node:path";

const SITE = process.env.SITE_URL || "https://www.zhenlongaluminum.com";
const locales = ["en", "zh", "es", "ar", "fr", "de", "pt", "ru", "ja", "ko"];
const staticPaths = ["", "/products", "/projects", "/about", "/oem-odm", "/blog", "/contact"];
const categories = [
  "aluminum-gazebos",
  "aluminum-fences",
  "aluminum-carports",
  "aluminum-doors",
  "aluminum-sliding-doors",
  "awnings",
];
const legacyBlogs = [
  "how-to-choose-aluminum-carport",
  "powder-coating-vs-anodizing",
  "aluminum-pergola-oem-guide",
];
const newBlogs = [
  "buyer-path-first-pergola-order",
  "louvered-vs-fixed-pergola",
  "carport-from-driveway-to-drawing",
  "how-to-choose-fence-model",
  "oem-brief-before-production",
  "powder-coating-color-brief",
  "hotel-pergola-project-path",
  "aluminum-gate-swing-or-sliding",
  "sizing-awnings-and-canopies",
  "inquiry-to-container",
];

const catalog = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "src/data/catalog.json"), "utf8"),
);
const products = Array.isArray(catalog) ? catalog : catalog.products;
const blogs = [...legacyBlogs, ...newBlogs];
const lastmod = new Date().toISOString().slice(0, 10);

const urls = [];
for (const locale of locales) {
  for (const p of staticPaths) {
    urls.push([`${SITE}/${locale}${p}`, "weekly", p === "" ? "1.0" : "0.8"]);
  }
  for (const c of categories) {
    urls.push([`${SITE}/${locale}/products/category/${c}`, "weekly", "0.9"]);
  }
  for (const product of products) {
    urls.push([`${SITE}/${locale}/products/${product.id}`, "monthly", "0.7"]);
  }
  for (const slug of blogs) {
    urls.push([`${SITE}/${locale}/blog/${slug}`, "monthly", "0.6"]);
  }
}

const body = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.flatMap(([url, freq, pri]) => [
    "<url>",
    `<loc>${url}</loc>`,
    `<lastmod>${lastmod}</lastmod>`,
    `<changefreq>${freq}</changefreq>`,
    `<priority>${pri}</priority>`,
    "</url>",
  ]),
  "</urlset>",
  "",
].join("\n");

const out = path.join(process.cwd(), "public/sitemap.xml");
fs.writeFileSync(out, body);
console.log(`sitemap: ${urls.length} urls -> ${out}`);
