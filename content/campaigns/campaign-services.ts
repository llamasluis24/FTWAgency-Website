import type { CampaignServiceSlug } from "./types";

export interface CampaignServiceDefinition {
  slug: CampaignServiceSlug;
  name: string;
  shortName: string;
  organicServiceSlug: string;
}

/** Campaign service registry — maps paid slugs to organic service content. */
export const campaignServices: Record<CampaignServiceSlug, CampaignServiceDefinition> = {
  "website-design": {
    slug: "website-design",
    name: "Website Design",
    shortName: "Website Design",
    organicServiceSlug: "website-design-development",
  },
  seo: {
    slug: "seo",
    name: "SEO",
    shortName: "SEO",
    organicServiceSlug: "seo",
  },
  aio: {
    slug: "aio",
    name: "AIO",
    shortName: "AIO",
    organicServiceSlug: "aio",
  },
  "paid-ads": {
    slug: "paid-ads",
    name: "Paid Ads",
    shortName: "Paid Ads",
    organicServiceSlug: "paid-ads-management",
  },
  "business-automation": {
    slug: "business-automation",
    name: "Business Automation",
    shortName: "Automation",
    organicServiceSlug: "business-automation",
  },
};

export function getCampaignService(slug: CampaignServiceSlug) {
  return campaignServices[slug];
}
