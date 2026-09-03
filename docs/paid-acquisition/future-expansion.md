# Future Campaign Expansion

How to add new paid landing pages without duplicating React files.

## Add a new city (same service)

Example: Website Design Corona → `/campaigns/website-design/corona`

### 1. Confirm city exists in registry

`content/campaigns/campaign-cities.ts` already includes Corona.

### 2. Add page config

In `content/campaigns/campaign-pages.ts`, add an entry following the Riverside pattern with city-specific copy and `trackingCampaignName`.

### 3. Rebuild

```bash
npm run build
```

`generateStaticParams` picks up the new entry automatically.

## Add a new service

Example: SEO Riverside → `/campaigns/seo/riverside`

1. Confirm service slug in `campaign-services.ts`
2. Add or extend FAQ in `campaign-faq.ts`
3. Add page config with service-appropriate copy and proof assets
4. Rebuild

## Planned scale (Phase 1 does not build these)

- 5 services × 10 cities = 50 pages
- Industry segments later via extended routing

## Industry campaigns (later)

Extend to `/campaigns/[service]/[segment]` where segment is city OR industry slug. Add registry check: city first, then industry.

## A/B testing

Set `experimentVariant` and optional `variants` overrides in page config. URL-based assignment can be added via middleware later.

## Checklist for each new page

- [ ] Entry in `campaign-pages.ts`
- [ ] Verified testimonial / case study slugs
- [ ] `noindex: true` default
- [ ] Unique `trackingCampaignName`
- [ ] Not in `lib/sitemap-urls.ts`
- [ ] Not linked from organic nav

## Client template reuse

Copy `lib/campaigns/` and `components/campaigns/`; replace `content/campaigns/` and env vars per client.
