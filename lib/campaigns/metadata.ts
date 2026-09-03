import type { CampaignPageConfig } from "@/content/campaigns/types";
import { buildMetadata } from "@/lib/metadata";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function buildCampaignMetadata(page: ResolvedCampaignPage) {
  const robots = page.noindex
    ? { index: false as const, follow: true as const }
    : undefined;

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    robots,
  });
}

export function buildThankYouMetadata() {
  return buildMetadata({
    title: "Thank You | FTW Agency Campaign",
    description: "Your request has been received. We will be in touch shortly.",
    path: "/campaigns/thank-you",
    robots: { index: false, follow: true },
  });
}

export function getCampaignPath(service: string, city: string) {
  return `/campaigns/${service}/${city}`;
}

export function getCampaignFormAnchorId() {
  return "campaign-lead-form";
}

export function getCampaignPrimaryCtaHref(_page: ResolvedCampaignPage) {
  return `#${getCampaignFormAnchorId()}`;
}
