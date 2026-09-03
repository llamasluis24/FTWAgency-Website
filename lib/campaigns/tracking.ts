/** Centralized campaign conversion event names — do not scatter strings in components. */
export const CAMPAIGN_EVENTS = {
  PAGE_VIEW: "campaign_page_view",
  FORM_START: "campaign_form_start",
  FORM_SUBMIT: "campaign_form_submit",
  PHONE_CLICK: "campaign_phone_click",
  CALENDAR_OPEN: "campaign_calendar_open",
  CALENDAR_BOOKED: "campaign_calendar_booked",
  PRIMARY_CTA_CLICK: "campaign_primary_cta_click",
  SECONDARY_CTA_CLICK: "campaign_secondary_cta_click",
} as const;

export type CampaignEventName = (typeof CAMPAIGN_EVENTS)[keyof typeof CAMPAIGN_EVENTS];

export interface CampaignEventPayload {
  campaign_name?: string;
  service?: string;
  city?: string;
  variant?: string;
  cta_label?: string;
  page_path?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export const campaignTrackingConfig = {
  gtmId: process.env.NEXT_PUBLIC_CAMPAIGN_GTM_ID,
  ga4Id: process.env.NEXT_PUBLIC_CAMPAIGN_GA4_ID,
  googleAdsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID,
  bookingUrl: process.env.NEXT_PUBLIC_CAMPAIGN_BOOKING_URL,
};

export function trackCampaignEvent(
  event: CampaignEventName,
  payload: CampaignEventPayload = {},
) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, timestamp: Date.now() };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(detail);

  if (window.gtag && campaignTrackingConfig.ga4Id) {
    window.gtag("event", event, payload);
  }

  if (window.fbq && campaignTrackingConfig.metaPixelId && event === CAMPAIGN_EVENTS.FORM_SUBMIT) {
    window.fbq("track", "Lead", payload);
  }

  if (window.lintrk && campaignTrackingConfig.linkedInPartnerId && event === CAMPAIGN_EVENTS.FORM_SUBMIT) {
    window.lintrk("track", { conversion_id: campaignTrackingConfig.linkedInPartnerId });
  }
}
