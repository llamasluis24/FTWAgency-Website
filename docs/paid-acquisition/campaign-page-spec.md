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

## Service showcase LP structure (shorter)

Route: `/campaigns/website-design`

Config: `content/campaigns/website-design-showcase.ts`  
Template: `components/campaigns/showcase/WebsiteShowcaseTemplate.tsx`

1. **Minimal header** — Primary CTA: “Want a website that looks like this?”
2. **Capability hero** — Non-geo headline; secondary CTA scrolls to interactive demos
3. **GSAP scroll story** — Capability-framed scroll cinema (pinned scrubbed film); reduced-motion = stacked cards
4. **Interactivity demos** — Vertical stack of uniform mini-case study cards (maps, sliders, funnels, workflows)
5. **Website gallery** — Mixed live portfolio cards with Visit Website links
6. **Lead form** — Same campaign form chrome; `campaign_name=website_design_showcase`
7. **Final CTA + Sticky CTA + Minimal footer**

No case study, process, FAQ, or before/after on showcase pages.

---

## Header rules

- FTW inverted logo (`/brand/logo-inverted.png`)
- No links to blog, resources, locations, or services index
- Primary CTA scrolls to `#campaign-lead-form`

## CTA language

**Geo pages:** Get Your Website Plan / Get a Website Strategy Call

**Showcase pages:** Want a website that looks like this?

Secondary (showcase): See interactive demos → `#showcase-demos`

## Visual conventions

- Dark FTW theme (`bg-bg`, `text-heading`, `text-accent`)
- `font-display` for headings
- Accent buttons: `bg-accent text-[#04222b]`
- Card surfaces: shared showcase chrome (`border-white/10`, ~1.25rem radius)
- Hero visual: browser mockup frame with real FTW project screenshot — no stock photography
- GSAP showcase uses FTW dark cinematic theme (capability framing; demo narrative may use client film)

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
- Calculator ranges on showcase pages are educational demos only

## Accessibility

- Semantic HTML (`header`, `main`, `section`, `footer`)
- Form labels on all inputs
- FAQ accordion with `aria-expanded` / `aria-controls`
- Visible focus states
- Respect `prefers-reduced-motion` (before/after + GSAP pin story)

## Performance

- Server-render page shell; client boundaries for tracking, form, sticky CTA, GSAP, demos
- Optimize hero image with `priority` + appropriate `sizes`
- Kill ScrollTrigger on unmount
