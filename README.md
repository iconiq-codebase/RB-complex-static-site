# R.B. Complex — Next.js static website

A faithful six-page implementation of `RB-Complex-LONG-Mall-Prototype.html`, using Next.js App Router, React, TypeScript and the reference's responsive CSS. The reference file remains unchanged.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Static production build

```sh
npm run build
```

Deploy the generated `out/` folder to a static web host. For a local production preview, run `python3 -m http.server 3000 --directory out`. `next start` does not support static export.

Pages: `/`, `/about/`, `/stores/`, `/offers/`, `/whats-on/`, `/gallery/`, `/blog/`, `/visit/`, `/leasing/`.

## Validation

`npm run typecheck` checks TypeScript. With the static preview running, `node scripts/check-site.mjs` checks navigation, store search/category filters, empty results, demo form behavior, and mobile widths using Playwright. Install its browser with `npx playwright install chromium` first.

## Content

Page content lives in `app/**/page.tsx`, shared header/footer in `components`, and styles in `app/globals.css`. Interactive behavior is in `components/Interactions.tsx`. Images from the supplied reference are stored locally in `public/images`.

Tenant names, units, campaigns, events, floor plans and availability must be verified by management before public launch. Photography currently illustrates the design and should be replaced with approved R.B. Complex imagery where required. The leasing form opens a prefilled WhatsApp enquiry for the visitor to review and send; confirm the WhatsApp number and ownership workflow before launch. The footer links visitors to Instagram instead of collecting newsletter data. No backend or subscription service is connected.

## Deployment checklist

1. Run `npm run typecheck` and `npm run build`.
2. Deploy the generated `out/` directory to a static host with HTTPS enabled.
3. Configure SPA/static-host fallback behavior so clean URLs such as `/stores/` and `/blog/slug/` serve their generated `index.html` files.
4. Confirm the host serves `404.html`, `robots.txt`, `manifest.webmanifest`, `/icon.png`, and all files under `/images/`.
5. Replace sample tenant, offer, event, leasing and visitor content before publication.
6. Add the final production domain to metadata, canonical URLs, Open Graph configuration and a sitemap before launch.
