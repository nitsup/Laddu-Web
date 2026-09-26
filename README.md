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

- Replace the illustrative home/about photo with an approved T-NUTRIST image and update its alt text and credits. The current Commons photo is by Nandhinikandhasamy under CC BY-SA 4.0; attribution is shown in the footer and beside the image.
- Add verified product names, descriptions, images, specifications, and SEO titles/descriptions to `lib/products.ts`. Store approved image files under `public/images` and use local paths such as `/images/product-name.webp`. Each record creates a statically generated, indexable `/products/[slug]` route and sitemap entry at build time.
- Confirm the business story, logo, brand colours, location/market, delivery coverage, order process, returns policy, and social links.
- Add contact values in Vercel project environment variables using `.env.example` as the key list. WhatsApp numbers must include the country code; use digits only.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS production domain in Vercel. Vercel deployment host variables are used as fallbacks.

Delivery, returns, and ordering answers currently state that those terms have not been supplied. Update the FAQ copy in `app/faq/page.tsx` before presenting final policies. Contact actions route to the contact page until a WhatsApp number is configured. A contact form is intentionally not included because there is no submission service.

## Vercel

Import the GitHub repository into Vercel and keep the detected Next.js build settings. Configure the environment values above for Production and Preview, deploy a Preview first, then promote to Production with the canonical domain set. After deployment, check `/robots.txt`, `/sitemap.xml`, a missing route, page titles/canonicals/social previews, and mobile layout. Submit the production sitemap to Google Search Console after the domain is live.
