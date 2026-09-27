# T-NUTRIST

Server-rendered business and product catalogue built with Next.js App Router, TypeScript, and Tailwind CSS. Product content is local and static; there is no database, order checkout, or contact-form backend.

## Run locally

```sh
npm install
npm run dev
```

Production checks:

```sh
npm run lint
npm run build
npm start
```

## Content to confirm before launch

- The four supplied laddu photos are in `public/images/products/` and are used by the product cards and detail galleries. Keep image alt text and product descriptions in `lib/products.ts` accurate when replacing images.
- T-NUTRIST was created by Ayush Verma and serves customers locally and online. Add a confirmed city/service area, product specifications, order process, returns policy, and social links before publishing those details.
- The supplied 10-digit WhatsApp number is linked with the `+91` country code (`918076519197`). Confirm the country code before launch if it differs. Environment variables in `.env.example` can override the defaults.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS production domain in Vercel. Vercel deployment host variables are used as fallbacks.

Delivery, returns, and ordering answers currently state that those terms have not been supplied. Update the FAQ copy in `app/faq/page.tsx` before presenting final policies. Contact actions route to the contact page until a WhatsApp number is configured. A contact form is intentionally not included because there is no submission service.

## Vercel

Import the GitHub repository into Vercel and keep the detected Next.js build settings. Configure the environment values above for Production and Preview, deploy a Preview first, then promote to Production with the canonical domain set. After deployment, check `/robots.txt`, `/sitemap.xml`, a missing route, page titles/canonicals/social previews, and mobile layout. Submit the production sitemap to Google Search Console after the domain is live.
