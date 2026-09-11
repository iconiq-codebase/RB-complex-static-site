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

Pages: `/`, `/stores/`, `/offers/`, `/whats-on/`, `/visit/`, `/leasing/`.

## Validation

`npm run typecheck` checks TypeScript. With the static preview running, `node scripts/check-site.mjs` checks navigation, store search/category filters, empty results, demo form behavior, and mobile widths using Playwright. Install its browser with `npx playwright install chromium` first.

## Content

Page content lives in `app/**/page.tsx`, shared header/footer in `components`, and styles in `app/globals.css`. Interactive behavior is in `components/Interactions.tsx`. Images from the supplied reference are stored locally in `public/images`.

Tenant names, units, campaigns, events, floor plans and availability are samples from the prototype. Photography illustrates the design and is not verified photography of the actual mall. Verify management contacts, hours, facilities and tenant data before public launch. Leasing and newsletter forms are explicitly local demonstrations: they do not transmit or store personal data. No backend or subscription service is connected.
