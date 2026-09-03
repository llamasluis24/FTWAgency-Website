# Campaign Tracking Specification

## Environment variables

Add to `.env.local` (see `.env.example`):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CAMPAIGN_GTM_ID` | Google Tag Manager container (campaign routes only) |
| `NEXT_PUBLIC_CAMPAIGN_GA4_ID` | GA4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | Google Ads conversion ID (AW-...) |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Conversion action label |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag partner ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |
| `NEXT_PUBLIC_CAMPAIGN_BOOKING_URL` | Optional Calendly/booking link on thank-you page |

Scripts load only in `app/campaigns/layout.tsx`. Organic site is unchanged until global tags are added separately.

## Centralized event names

Defined in `lib/campaigns/tracking.ts` as `CAMPAIGN_EVENTS`:

| Event | When fired |
|-------|------------|
| `campaign_page_view` | Landing page mount |
| `campaign_form_start` | First form field focus |
| `campaign_form_submit` | Thank-you page (post successful submit) |
| `campaign_phone_click` | Reserved for future phone CTA |
| `campaign_calendar_open` | Booking link click on thank-you |
| `campaign_calendar_booked` | Reserved for booking confirmation webhook |
| `campaign_primary_cta_click` | Primary CTA clicks |
| `campaign_secondary_cta_click` | Secondary CTA clicks |

**Do not scatter event strings in components.** Use `trackCampaignEvent()` or helpers in `lib/campaigns/conversions.ts`.

## dataLayer contract

Every event pushes to `window.dataLayer`:

```js
{
  event: "campaign_form_submit",
  campaign_name: "website_design_riverside",
  service: "website-design",
  city: "riverside",
  variant: "control",
  utm_source: "...",
  gclid: "...",
  landing_page: "/campaigns/website-design/riverside",
  timestamp: 1234567890
}
```

Configure GTM triggers/tags against these event names.

## Attribution storage

Captured on landing in `sessionStorage` key `ftw_campaign_attribution`:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `gclid`, `gbraid`, `wbraid`
- `landing_page`, `referrer`, `captured_at`

Form submissions append fields prefixed with `attribution_` plus `campaign_name`, `campaign_service`, `campaign_city`, `campaign_variant`.

## Google Ads conversion

On thank-you page, when IDs are configured:

```js
gtag('event', 'conversion', {
  send_to: 'AW-XXXXX/LABEL'
});
```

## Verification checklist

1. Open `/campaigns/website-design/riverside?utm_source=test&gclid=test123`
2. Check `sessionStorage.ftw_campaign_attribution`
3. Submit form → lands on thank-you with `?campaign=website_design_riverside`
4. GTM Preview: confirm `campaign_page_view` and `campaign_form_submit`
5. Confirm organic pages do not load campaign GTM/GA4 scripts
