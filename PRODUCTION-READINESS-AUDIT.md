# R.B. Complex Production Readiness Audit

## Release decision

**Do not launch publicly yet.** The build is healthy and the visual foundation is strong, but the site still describes itself as a prototype and presents sample tenants, offers, events, availability, images, articles, and unverified operating information. Publishing that content as official mall information would mislead visitors.

## Technical baseline

| Area | Result | Evidence |
|---|---|---|
| Static build | Pass | `npm run build` prerenders all public routes. |
| Type safety | Pass | `npm run typecheck` passes. |
| Dependency vulnerabilities | Pass | `npm audit --omit=dev` reports 0 vulnerabilities. |
| Static delivery | Ready | Next static export creates an `out/` deployment directory. |
| Basic SEO | Partial | Titles, descriptions, manifest, robots, favicon, and social metadata exist. |
| Accessibility | Partial | Skip link, labelled fields, alt text, visible focus styles, and reduced-motion styles exist; manual and automated accessibility testing remains required. |

## Critical blockers before publication

1. **Replace all sample and unverified content.** The README and visible pages explicitly label tenants, unit numbers, offers, campaigns, events, leasing spaces, floor data, articles, photography, and visitor guidance as prototypes or samples. Replace with management-approved data, dates, terms, and photography; then remove prototype language and the footer’s “Website prototype” label.

2. **Connect forms to a real, privacy-reviewed service.** Newsletter and leasing forms currently prevent submission and display a demo response. A production form needs a destination, spam protection, validation, success/error states, consent text, privacy policy, retention rules, and a tested owner workflow.

3. **Verify local-business information.** Confirm official business name, exact address, map pin, phone numbers, opening hours, holiday hours, parking, accessibility facilities, social handles, and leasing contact. The current site correctly says several items must be verified; those placeholders cannot remain on the public version.

4. **Fix the Blog content model.** Three article URLs are generated, but six cards are shown. Cards four through six currently route to the third article because the link selection falls back to one slug. Create six matching article records or reduce the card count to three.

5. **Use authentic social URLs.** Facebook and Instagram now point to specific URLs, but YouTube and TikTok point to platform homepages. Replace them with approved R.B. Complex profiles or remove the icons.

## High-priority launch work

| Area | Finding | Required action |
|---|---|---|
| Sitemap | `robots.txt` is present, but no sitemap is generated. | Add `sitemap.xml` after choosing the production domain, list all canonical public pages, and submit it through Search Console. Google recommends submitting a sitemap to keep it informed of changes. [Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?authuser=77) |
| Domain metadata | No `metadataBase`, canonical URLs, or production domain are configured. | Set the confirmed HTTPS domain, add canonicals, regenerate Open Graph URLs, and verify no localhost URL appears in metadata. |
| Structured data | No LocalBusiness JSON-LD. | Add management-verified `ShoppingCenter` / `LocalBusiness` schema with name, address, phone, hours, map URL, logo, and social profiles. Google specifically supports LocalBusiness data for location and hours. [Google](https://developers.google.com/search/docs/appearance/structured-data/local-business) |
| Maps | The current generic Google Maps iframe works, but does not use the documented Embed API place URL or its recommended referrer policy. | Use a verified Place ID with Maps Embed API, `allowFullScreen`, `referrerPolicy="strict-origin-when-cross-origin"`, and a domain-restricted key. [Google Maps](https://developers.google.com/maps/documentation/embed/embedding-map) |
| Images | The public asset bundle is 5.8 MB and many images are JPEG/PNG. | Convert editorial images to AVIF/WebP, provide responsive sizes, compress AI PNGs, and review Largest Contentful Paint on mobile. |
| Logo | The provided portrait RBC mark is cropped for header/footer use. | Approve a dedicated transparent square favicon and a horizontal/vertical lockup; avoid relying on a derived raster crop as the only brand master. |

## UX and content observations

The information architecture is solid: Stores, Offers, What’s On, Gallery, Blog, Visit, and Leasing give visitors clear paths. The directory search and filters are useful, and the map gives a practical route to directions.

Before launch, consolidate the number of navigation options on small desktop widths, because the expanded header is dense. Test at 1024–1280 px, keyboard navigation, touch targets, and the mobile menu with real content lengths. Add a no-results recovery path with a call/contact option after the real directory is loaded.

The AI product images are visually coherent but must be marked as illustrative until real tenant-approved imagery is available. Avoid representing them as inventory, current offers, or actual mall interiors. Replace each `concept`, `sample`, and `prototype` asset with usage-approved material.

## Accessibility checklist

- Test every route using keyboard only: skip link, header menu, filters, accordion, map, forms, and social links.
- Test with a screen reader; all meaningful images need accurate alternative text and decorative images should use empty alt text.
- Verify text and control contrast after final photography and branding changes.
- Keep the existing `prefers-reduced-motion` support and avoid motion that blocks content.
- Ensure focused controls are never hidden behind the sticky header. W3C WCAG 2.2 includes focus visibility and focus-not-obscured requirements. [W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

## Security and operations

- Host only on HTTPS and redirect HTTP to HTTPS.
- Add security headers at the hosting layer: Content-Security-Policy, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and `Permissions-Policy`.
- If forms are added, keep API keys server-side, add rate limiting and CAPTCHA or equivalent bot mitigation, and log only the minimum necessary personal data.
- Define owners and an update schedule for tenant directory, offers, events, hours, and leasing availability.
- Add analytics only after deciding consent, retention, cookie policy, and a privacy notice appropriate to the intended audience and hosting jurisdiction.

## Recommended release sequence

1. Obtain a signed management content sheet: official tenants, units, hours, parking, accessibility, phone, email, maps Place ID, social URLs, and leasing workflow.
2. Replace all sample assets and publish real forms, privacy policy, terms, and contact/complaint handling.
3. Add production-domain canonicals, sitemap, LocalBusiness JSON-LD, verified Open Graph image, and Search Console/Business Profile verification.
4. Run Lighthouse on mobile and desktop, automated accessibility checks, manual keyboard/screen-reader testing, link checking, and form end-to-end tests.
5. Deploy preview to the final host, have management approve each page, then launch and monitor Search Console, analytics, form delivery, and error logs.

## Sources

1. Google Search Central. [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business).
2. Google Search Central. [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?authuser=77).
3. Google Maps Platform. [Embed a map](https://developers.google.com/maps/documentation/embed/embedding-map).
4. Google Maps Platform. [API security best practices](https://developers.google.com/maps/api-security-best-practices).
5. W3C Web Accessibility Initiative. [What’s new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).
