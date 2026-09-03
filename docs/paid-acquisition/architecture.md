# FTW Paid Acquisition — Architecture

## Purpose

The Campaign Engine is an isolated paid-acquisition subsystem inside the FTW Agency Next.js repository. It supports Google Ads landing pages, conversion tracking, attribution capture, and config-driven page generation without coupling to organic SEO templates.

**One repository. Two distinct experiences:**

1. **Organic / Authority Website** — `app/(site)/*` with full Header, Footer, SEO, sitemap
2. **Paid Acquisition / Campaign Engine** — `app/campaigns/*` with minimal chrome, noindex, no sitemap

## Route architecture

```
app/
  layout.tsx              # Root: fonts, globals only
  (site)/
    layout.tsx            # Organic: Header, Footer, CommandPalette, org JSON-LD
    page.tsx              # Home, locations, services, etc.
  campaigns/
    layout.tsx            # Campaign: tracking scripts, attribution init
    [service]/[city]/
      page.tsx            # Dynamic landing pages from config
    thank-you/
      page.tsx            # Post-form conversion + optional booking CTA
```

**Live test page (Phase 1):** `/campaigns/website-design/riverside`

Organic Riverside website page (separate): `/locations/riverside-ca/website-design-development`

## Content / config architecture

| Path | Role |
|------|------|
| `content/campaigns/types.ts` | TypeScript interfaces |
| `content/campaigns/campaign-services.ts` | Service slug registry |
| `content/campaigns/campaign-cities.ts` | City slug registry |
| `content/campaigns/campaign-pages.ts` | **Single source of truth** for published pages |
| `content/campaigns/campaign-faq.ts` | FAQ blocks keyed by service |

New pages are added by registering an entry in `campaign-pages.ts`. `generateStaticParams` reads only registered entries.

## Component architecture

Reusable section components live in `components/campaigns/`. The page template (`CampaignPageTemplate`) renders sections in a fixed order defined in `campaign-page-spec.md`.

**Reusable (client-template ready):** `lib/campaigns/*`, generic campaign components

**FTW-specific:** `content/campaigns/*`, portfolio/case-study references, brand assets

## Tracking architecture

- Scripts load **only** on `/campaigns/*` via `app/campaigns/layout.tsx`
- Central event names in `lib/campaigns/tracking.ts` (`CAMPAIGN_EVENTS`)
- Attribution persisted in `sessionStorage` via `lib/campaigns/attribution.ts`
- Conversions fired on thank-you page via `lib/campaigns/conversions.ts`

See [tracking-spec.md](./tracking-spec.md) for event names, env vars, and dataLayer contract.

## SEO rules

| Rule | Implementation |
|------|----------------|
| Default noindex | `buildCampaignMetadata()` → `robots: { index: false, follow: true }` |
| Sitemap exclusion | Campaign paths are **not** in `lib/sitemap-urls.ts` |
| robots.txt | `disallow: /campaigns/` in `app/robots.ts` |
| No organic nav links | Campaign pages use `CampaignHeader` / `CampaignFooter` only |
| Override | Set `noindex: false` in page config when intentional indexing is needed |

## Form flow

1. User lands with UTMs / gclid → attribution captured on mount
2. `campaign_form_start` on first form focus
3. Submit → Web3Forms (same access key as organic contact) with attribution + campaign fields
4. Redirect to `/campaigns/thank-you?campaign=...`
5. Thank-you fires `campaign_form_submit` + Google Ads conversion (when env configured)

## Thank-you flow

Dedicated route: `/campaigns/thank-you`

Does **not** use organic contact form success UI. Preserves campaign attribution for conversion reporting.

Optional booking CTA when `NEXT_PUBLIC_CAMPAIGN_BOOKING_URL` is set.

## A/B testing conventions

- Each page config has `experimentVariant` (`control` | `variant-a` | `variant-b`)
- Optional `variants` object with overrides for headline, CTAs, hero visual
- `resolveVariantContent()` merges overrides before render
- No external experiment platform in Phase 1 — architecture supports adding one later

## Future expansion

See [future-expansion.md](./future-expansion.md).

## Client-template considerations

When adapting for FTW clients:

- Keep `lib/campaigns/*` and generic `components/campaigns/*`
- Replace `content/campaigns/*` with client-specific content
- Swap brand assets, form endpoints, and tracking IDs per deployment
