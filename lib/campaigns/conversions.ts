import { CAMPAIGN_EVENTS, campaignTrackingConfig, trackCampaignEvent } from "./tracking";
import type { CampaignAttribution } from "./attribution";

export function fireCampaignFormConversion(args: {
  campaignName: string;
  service: string;
  city: string;
  variant?: string;
  attribution?: CampaignAttribution;
}) {
  trackCampaignEvent(CAMPAIGN_EVENTS.FORM_SUBMIT, {
    campaign_name: args.campaignName,
    service: args.service,
    city: args.city,
    variant: args.variant,
    ...args.attribution,
  });

  if (
    typeof window !== "undefined" &&
    window.gtag &&
    campaignTrackingConfig.googleAdsConversionId &&
    campaignTrackingConfig.googleAdsConversionLabel
  ) {
    window.gtag("event", "conversion", {
      send_to: `${campaignTrackingConfig.googleAdsConversionId}/${campaignTrackingConfig.googleAdsConversionLabel}`,
    });
  }
}

export function fireCampaignPageView(args: {
  campaignName: string;
  service: string;
  city: string;
  variant?: string;
  pagePath: string;
}) {
  trackCampaignEvent(CAMPAIGN_EVENTS.PAGE_VIEW, {
    campaign_name: args.campaignName,
    service: args.service,
    city: args.city,
    variant: args.variant,
    page_path: args.pagePath,
  });
}

export function fireCampaignFormStart(args: {
  campaignName: string;
  service: string;
  city: string;
}) {
  trackCampaignEvent(CAMPAIGN_EVENTS.FORM_START, {
    campaign_name: args.campaignName,
    service: args.service,
    city: args.city,
  });
}

export function fireCampaignPrimaryCtaClick(args: {
  campaignName: string;
  ctaLabel: string;
  pagePath: string;
}) {
  trackCampaignEvent(CAMPAIGN_EVENTS.PRIMARY_CTA_CLICK, {
    campaign_name: args.campaignName,
    cta_label: args.ctaLabel,
    page_path: args.pagePath,
  });
}

export function fireCampaignSecondaryCtaClick(args: {
  campaignName: string;
  ctaLabel: string;
  pagePath: string;
}) {
  trackCampaignEvent(CAMPAIGN_EVENTS.SECONDARY_CTA_CLICK, {
    campaign_name: args.campaignName,
    cta_label: args.ctaLabel,
    page_path: args.pagePath,
  });
}

export function fireCampaignCalendarOpen(args: { campaignName: string }) {
  trackCampaignEvent(CAMPAIGN_EVENTS.CALENDAR_OPEN, {
    campaign_name: args.campaignName,
  });
}
