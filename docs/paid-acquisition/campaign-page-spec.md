# Campaign Page Specification

Mandatory section order and design conventions for all FTW paid landing pages.

## Page structure (fixed order)

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

## Header rules

- FTW inverted logo (`/brand/logo-inverted.png`)
- No links to blog, resources, locations, or services index
- Primary CTA scrolls to `#campaign-lead-form`

## CTA language

Default primary CTA: **Get Your Website Plan**

Alternates for A/B tests: **Get a Website Strategy Call**

Secondary CTA: **View Our Work** → `/portfolio` (new tab)

## Visual conventions

- Dark FTW theme (`bg-bg`, `text-heading`, `text-accent`)
- `font-display` for headings
- Accent buttons: `bg-accent text-[#04222b]`
- Card surfaces: `card-surface`, `border-white/10`
- Hero visual: browser mockup frame with real FTW project screenshot — no stock photography
- Lazy-load heavy components (before/after slider)

## Form fields (standard variant)

Required: Name, Business Name, Email, What Do You Need Help With?

Recommended: Phone, Current Website

Optional: Estimated Project Budget

Hidden: attribution fields, campaign metadata, Web3Forms access key, honeypot

## Content rules

- Never invent testimonials, logos, metrics, or client quotes
- Pull case studies and quotes from existing approved repository content
- City + service must appear naturally in hero, copy, and form context — no keyword stuffing
- Do not link prominently to competing organic local SEO URLs

## Accessibility

- Semantic HTML (`header`, `main`, `section`, `footer`)
- Form labels on all inputs
- FAQ accordion with `aria-expanded` / `aria-controls`
- Visible focus states
- Respect `prefers-reduced-motion` (before/after component)

## Performance

- Server-render page shell; client boundaries only for tracking, form, sticky CTA, before/after
- Optimize hero image with `priority` + appropriate `sizes`
- Avoid unnecessary Framer Motion on campaign pages
