export type CampaignServiceSlug =
  | "website-design"
  | "seo"
  | "aio"
  | "paid-ads"
  | "business-automation";

export type CampaignCitySlug =
  | "riverside"
  | "corona"
  | "irvine"
  | "anaheim"
  | "ontario"
  | "rancho-cucamonga"
  | "santa-ana"
  | "carlsbad"
  | "san-diego"
  | "los-angeles";

export type CampaignFormVariant = "standard" | "short" | "extended";

export type CampaignExperimentVariant = "control" | "variant-a" | "variant-b";

export interface CampaignBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface CampaignProcessStep {
  title: string;
  description: string;
}

export interface CampaignHeroVisual {
  type: "browser-mockup" | "transformation" | "project-preview";
  src: string;
  alt: string;
}

export interface CampaignBeforeAfter {
  before: string;
  after: string;
  beforeTitle: string;
  beforeDescription: string;
  afterTitle: string;
  afterDescription: string;
}

export interface CampaignVariantOverrides {
  headline?: string;
  subheadline?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  heroVisual?: CampaignHeroVisual;
}

export interface CampaignPageConfig {
  service: CampaignServiceSlug;
  city: CampaignCitySlug;
  state: string;
  campaignName: string;
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  offer?: string;
  heroVisual: CampaignHeroVisual;
  problemHeadline: string;
  problemPoints: string[];
  benefits: CampaignBenefit[];
  beforeAfter: CampaignBeforeAfter;
  caseStudySlug: string;
  testimonialSlugs: string[];
  portfolioProofSlugs: string[];
  process: CampaignProcessStep[];
  faqKey: CampaignServiceSlug;
  formVariant: CampaignFormVariant;
  thankYouDestination: string;
  trackingCampaignName: string;
  metaPixelEvent: string;
  linkedinEvent?: string;
  noindex: boolean;
  canonical?: string;
  experimentVariant: CampaignExperimentVariant;
  variants?: Partial<Record<CampaignExperimentVariant, CampaignVariantOverrides>>;
}

export interface ResolvedCampaignPage extends CampaignPageConfig {
  path: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  formSubject: string;
}
