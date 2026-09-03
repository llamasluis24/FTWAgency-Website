import { farmhouseImages } from "@/content/case-studies/farmhouse-collective";
import type {
  CampaignCitySlug,
  CampaignPageConfig,
  CampaignServiceSlug,
  ResolvedCampaignPage,
} from "./types";
import { getCampaignCity } from "./campaign-cities";
import { getCampaignService } from "./campaign-services";
import { resolveVariantContent } from "@/lib/campaigns/experiments";

const websiteDesignRiverside: CampaignPageConfig = {
  service: "website-design",
  city: "riverside",
  state: "CA",
  campaignName: "website_design_riverside",
  headline: "A Website Built to Turn *Riverside Traffic* Into Customers",
  subheadline:
    "FTW Agency designs fast, modern, conversion-focused websites that help businesses build trust, get found, and generate more qualified opportunities.",
  primaryCTA: "Get Your Website Plan",
  secondaryCTA: "View Our Work",
  heroVisual: {
    type: "project-preview",
    src: "/showcases/websites/farmhouse-collective.jpg",
    alt: "FTW Agency website design preview — Farm House Collective Riverside project",
  },
  problemHeadline: "Your Website Should Do More Than Look Good",
  problemPoints: [
    "Outdated design that does not reflect the quality of your business",
    "Poor mobile experience that loses visitors before they take action",
    "Confusing messaging — visitors cannot tell what you do or why they should choose you",
    "Weak calls-to-action with no clear next step",
    "Slow performance that hurts trust and search visibility",
    "No SEO foundation to help local customers find you organically",
    "No clear conversion path from visit to lead, call, or booking",
  ],
  benefits: [
    {
      title: "Build trust faster",
      description:
        "Premium design and clear messaging help visitors feel confident choosing your business on first visit.",
    },
    {
      title: "Generate more qualified leads",
      description:
        "Conversion paths, forms, and CTAs guide the right visitors toward contact — not just browsing.",
    },
    {
      title: "Improve mobile experience",
      description:
        "Mobile-first layouts ensure most of your traffic gets a fast, readable, action-ready experience.",
    },
    {
      title: "Support Google Ads",
      description:
        "Landing-page relevance, fast load times, and clear offers improve ad performance and Quality Score.",
    },
    {
      title: "Establish an SEO foundation",
      description:
        "Technical SEO, structured data, and scalable architecture help you rank beyond paid traffic.",
    },
    {
      title: "Look credible in your market",
      description:
        "A polished site positions your business as the professional choice in Riverside and beyond.",
    },
    {
      title: "Create scalable architecture",
      description:
        "Add services, locations, and campaigns without rebuilding from scratch every time.",
    },
  ],
  beforeAfter: {
    before: farmhouseImages.beforePolaroid,
    after: farmhouseImages.afterWebsite,
    beforeTitle: "Before — disconnected experience",
    beforeDescription:
      "Outdated presence, weak messaging, no lead funnel, and a mobile experience that fails to convert",
    afterTitle: "After — conversion-ready brand",
    afterDescription:
      "Modern design, clear CTAs, conversion pathways, SEO-ready architecture, and premium mobile UX",
  },
  caseStudySlug: "farmhouse-collective",
  testimonialSlugs: ["farmhouse-collective", "visit-riverside"],
  portfolioProofSlugs: [
    "visit-riverside",
    "farmhouse-collective",
    "cal-star-mobilehomecrm",
    "vertex-services",
  ],
  process: [
    {
      title: "Strategy",
      description: "Define goals, audience, and conversion paths before design begins.",
    },
    {
      title: "Design",
      description: "Craft a premium, on-brand experience built for clarity and trust.",
    },
    {
      title: "Build",
      description: "Develop fast, accessible pages with forms and integrations wired in.",
    },
    {
      title: "Review",
      description: "Walk through the experience together and refine until it is ready.",
    },
    {
      title: "Launch",
      description: "Deploy with analytics, tracking, and SEO foundations in place.",
    },
    {
      title: "Optimize",
      description: "Improve conversion based on real visitor behavior after launch.",
    },
  ],
  faqKey: "website-design",
  formVariant: "standard",
  thankYouDestination: "/campaigns/thank-you",
  trackingCampaignName: "website_design_riverside",
  metaPixelEvent: "Lead",
  linkedinEvent: "campaign_lead",
  noindex: true,
  experimentVariant: "control",
  variants: {
    "variant-a": {
      headline: "Riverside Website Design That Converts Traffic Into Customers",
      primaryCTA: "Get a Website Strategy Call",
    },
  },
};

/** Registered campaign pages — add entries here to publish new landing pages. */
export const campaignPages: CampaignPageConfig[] = [websiteDesignRiverside];

export function getCampaignPage(
  service: CampaignServiceSlug,
  city: CampaignCitySlug,
): ResolvedCampaignPage | null {
  const page = campaignPages.find((p) => p.service === service && p.city === city);
  if (!page) return null;

  const serviceDef = getCampaignService(page.service);
  const cityDef = getCampaignCity(page.city);
  const resolved = resolveVariantContent(page);
  const path = `/campaigns/${service}/${city}`;

  return {
    ...resolved,
    path,
    eyebrow: `${serviceDef.shortName.toUpperCase()} • ${cityDef.name.toUpperCase()}, ${cityDef.stateAbbr}`,
    metaTitle: `${serviceDef.name} in ${cityDef.name}, ${cityDef.stateAbbr} | FTW Agency`,
    metaDescription: resolved.subheadline,
    formSubject: `[Campaign Lead] ${serviceDef.name} — ${cityDef.name}`,
  };
}

export function getAllCampaignParams(): { service: string; city: string }[] {
  return campaignPages.map((p) => ({ service: p.service, city: p.city }));
}

export function getCampaignPageByName(campaignName: string): ResolvedCampaignPage | null {
  const page = campaignPages.find((p) => p.campaignName === campaignName);
  if (!page) return null;
  return getCampaignPage(page.service, page.city);
}
