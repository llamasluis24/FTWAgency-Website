# Campaign Page Specification

Mandatory section order and design conventions for FTW paid landing pages.

There are two page types:

1. **Geo campaign LP** — `/campaigns/[service]/[city]` (full conversion page)
2. **Service showcase LP** — `/campaigns/website-design` (shorter capability showcase)

---

## Geo campaign page structure (fixed order)

1. **Minimal header** — Logo, optional contact, primary CTA (no mega nav)
2. **Hero** — Eyebrow (SERVICE • CITY, ST), headline, subheadline, primary + secondary CTA, hero visual
3. **Trust / social proof** — Approved portfolio client names
4. **Problem** — Headline + pain points grid
5. **Before / after** — Interactive comparison using FTW-native assets
6. **Benefits** — Outcome-focused grid
7. **Case study** — Real FTW project with verified outcomes only
8. **Process** — 6 steps max (Strategy → Optimize)
9. **Testimonials** — Approved quotes from `content/site.ts` only
10. **FAQ** — Paid-traffic objections; service-keyed from `campaign-faq.ts`
11. **Lead form** — Conversion-focused fields + attribution
12. **Final CTA** — Closing headline + primary CTA
13. **Sticky CTA** — Mobile-only, appears when form is off-screen
14. **Minimal footer** — FTW Agency, Privacy, Terms, Accessibility, Contact

---

## Service showcase LP structure (Website Design ads)

Route: `/campaigns/website-design`

Config: `content/campaigns/website-design-showcase.ts`  
Template: `components/campaigns/showcase/WebsiteShowcaseTemplate.tsx`

**Positioning:** Business-value first. The website is growth infrastructure (SEO, service pages, locations, AI Search, conversion, marketing readiness) — not “pretty design” alone. Interactivity is proof, not the main sales story.

### Section order

1. **Minimal header** — Primary CTA: “Get Your Website Plan” → `#campaign-lead-form`
2. **Hero** — Growth-foundation headline; secondary CTA “See How It Works” → `#growth-system`
3. **Basic vs Growth** — Concise visual compare (brochure site vs FTW growth website)
4. **GSAP growth system** (`WebsiteGrowthSystemScroll`, `#growth-system`) — sticky-chapter engine (same pattern as former film scrub) with DOM/SVG `GrowthSystemStage` scrubbed by chapter progress; 6 panels: Website → Services → SEO → Locations → AI Search → Convert & Grow; mobile stacked snapshots; reduced-motion static chapters. No Vote Christen film on this LP.
5. **What FTW builds** — Max 6 pillars with business-outcome lines
6. **AIO advantage** (`WebsiteAioAdvantage`, `#aio`) — Educate on AI Search / AIO + first-mover urgency; three “built into your website” points; CTA → `#campaign-lead-form`. No outbound link to organic `/services/aio`.
7. **Proof demos** — Max 2–3 interactive examples with business-value copy (trust/SEO foundation, local discovery / service-location architecture, visibility → opportunity). Currently: Farm House before/after, Visit Riverside map, Vertex funnel.
8. **Real work gallery** — Screenshot cards only; **no** “Visit Website” / “View Full Portfolio” funnel leaks
9. **Why this matters** — Get found / understood / trust / convert / grow
10. **Process** — Concise campaign-only steps
11. **FAQ** — SEO, service pages, AIO, locations, ads, redesign, copy, ongoing management
12. **Lead form** — `campaign_name=website_design_showcase`
13. **Final CTA + Sticky CTA + Minimal footer**

### Showcase rules for future agents

**What can change per campaign:** service, city, headline, proof set, case visuals, service-specific value copy.

**What stays uniform:** campaign isolation, CTA → form, tracking, conversion flow, max 2–3 proof demos, no organic nav/sitemap, noindex convention, performance + reduced-motion GSAP fallbacks, funnel discipline (minimize outbound links).

### CTA language (showcase)

- Primary: Get Your Website Plan → `#campaign-lead-form`
- Secondary: See How It Works → `#growth-system`

### Visual conventions

- Dark FTW theme (`bg-bg`, `text-heading`, `text-accent`)
- `font-display` for headings
- Accent buttons: `bg-accent text-[#04222b]`
- Card surfaces: shared showcase chrome (`border-white/10`, ~1.25rem radius)
- Hero visual: browser mockup with real FTW project screenshots — no stock photography
- GSAP: sticky-chapter `WebsiteGrowthSystemScroll` + scrubbed DOM/SVG growth stage (desktop); stacked chapter snapshots (mobile); reduced-motion / SSR-visible static chapters; eager client import (no empty `ssr:false` skeleton); no client film scrub on this LP

### Content rules (showcase)

- Never invent testimonials, logos, metrics, or client quotes
- Pull proof from approved repository portfolio assets only
- Do not link prominently off-page from the gallery
- Do not edit shared organic components for showcase-only needs — fork under `components/campaigns/showcase/`

---

## Header rules

- FTW inverted logo (`/brand/logo-inverted.png`)
- No links to blog, resources, locations, or services index
- Primary CTA scrolls to `#campaign-lead-form`

## CTA language

**Geo pages:** Get Your Website Plan / Get a Website Strategy Call

**Showcase pages:** Get Your Website Plan (primary); See How It Works → `#growth-system` (secondary)

## Visual conventions

- Dark FTW theme (`bg-bg`, `text-heading`, `text-accent`)
- `font-display` for headings
- Accent buttons: `bg-accent text-[#04222b]`
- Card surfaces: shared showcase chrome (`border-white/10`, ~1.25rem radius)
- Hero visual: browser mockup frame with real FTW project screenshot — no stock photography

## Form fields (standard variant)

Required: Name, Business Name, Email, What Do You Need Help With?

Recommended: Phone, Current Website

Optional: Estimated Project Budget

Hidden: attribution fields, campaign metadata, Web3Forms access key, honeypot

## Content rules

- Never invent testimonials, logos, metrics, or client quotes
- Pull case studies and quotes from existing approved repository content
- City + service must appear naturally on geo pages — no keyword stuffing
- Do not link prominently to competing organic local SEO URLs

## Accessibility

- Semantic HTML (`header`, `main`, `section`, `footer`)
- Form labels on all inputs
- FAQ accordion with `aria-expanded`
- Visible focus states
- Respect `prefers-reduced-motion` (GSAP growth story falls back to static chapter snapshots)

## Performance

- Server-render page shell; client boundaries for tracking, form, sticky CTA, GSAP (dynamic import), demos
- Optimize hero image with `priority` + appropriate `sizes`
- Kill ScrollTrigger on unmount
- Keep proof demos ≤3; avoid Mapbox/heavy widgets on this LP unless essential
