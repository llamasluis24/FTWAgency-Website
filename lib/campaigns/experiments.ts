import type { CampaignPageConfig } from "@/content/campaigns/types";

/** Merge experiment variant overrides into page content. */
export function resolveVariantContent(page: CampaignPageConfig): CampaignPageConfig {
  const variant = page.experimentVariant;
  const overrides = page.variants?.[variant];
  if (!overrides) return page;

  return {
    ...page,
    headline: overrides.headline ?? page.headline,
    subheadline: overrides.subheadline ?? page.subheadline,
    primaryCTA: overrides.primaryCTA ?? page.primaryCTA,
    secondaryCTA: overrides.secondaryCTA ?? page.secondaryCTA,
    heroVisual: overrides.heroVisual ?? page.heroVisual,
  };
}
