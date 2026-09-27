# Zhenlong Aluminum — B2B Export Website

Official website for **上海振龙铝业有限公司** (Shanghai Zhenlong Aluminum Industry Co., Ltd.)

## Features

- 10 languages: EN, ZH, ES, AR, FR, DE, PT, RU, JA, KO
- RTL support for Arabic
- B2B inquiry forms with Resend email
- SEO: hreflang, sitemap, JSON-LD
- Google Analytics ready

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit [http://localhost:3000/en](http://localhost:3000/en)

## Environment Variables

```env
SITE_URL=https://www.zhenlongaluminum.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # optional
RESEND_API_KEY=re_xxxxxxxx            # inquiry emails
RESEND_FROM=Zhenlong <inquiry@yourdomain.com>
INQUIRY_EMAIL=chengbao777@gmail.com
```

## URL Structure

| Language | Example |
|----------|---------|
| English | `/en/products/aluminum-carports` |
| 中文 | `/zh/products/aluminum-carports` |
| Español | `/es/products/aluminum-carports` |
| العربية | `/ar/products/aluminum-carports` |

## Editing Content

- **UI & product text**: `messages/{locale}.json`
- **Contact info**: `src/lib/constants.ts`
- **Product images**: `public/images/products/`

## Deployment

Deploy to [Vercel](https://vercel.com). Set environment variables in project settings.

```bash
npm run build
```

## Resend Setup

1. Register at [resend.com](https://resend.com)
2. Verify your domain
3. Add `RESEND_API_KEY` and `RESEND_FROM` to `.env.local`
4. Inquiry form submissions will email `INQUIRY_EMAIL`
