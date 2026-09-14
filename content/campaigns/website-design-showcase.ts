import type { CampaignExperimentVariant, CampaignServiceSlug } from "./types";

export type WebsiteGrowthStageId =
  | "website"
  | "services"
  | "seo"
  | "locations"
  | "aio"
  | "convert";

export interface WebsiteShowcaseGsapPanel {
  number: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  bottomLine: string;
  /** Maps panel to GrowthSystemStage visual phase. */
  stageId: WebsiteGrowthStageId;
}

export interface WebsiteShowcasePillar {
  title: string;
  explain: string;
  businessValue: string;
}

export interface WebsiteShowcaseFaqItem {
  question: string;
  answer: string;
}

export interface WebsiteShowcaseProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface WebsiteShowcaseAioSection {
  eyebrow: string;
  title: string;
  lede: string;
  education: {
    heading: string;
    body: string;
    bullets: string[];
  };
  urgency: {
    heading: string;
    body: string;
    punchLine: string;
  };
  buildPoints: { title: string; body: string }[];
  ctaLabel: string;
}

export interface WebsiteShowcaseConfig {
  service: CampaignServiceSlug;
  path: string;
  campaignName: string;
  trackingCampaignName: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  secondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  formSubject: string;
  thankYouDestination: string;
  experimentVariant: CampaignExperimentVariant;
  noindex: boolean;
  gallerySlugs: string[];
  gsapPanels: WebsiteShowcaseGsapPanel[];
  pillars: WebsiteShowcasePillar[];
  aioSection: WebsiteShowcaseAioSection;
  processSteps: WebsiteShowcaseProcessStep[];
  faq: WebsiteShowcaseFaqItem[];
}

export const websiteDesignShowcase: WebsiteShowcaseConfig = {
  service: "website-design",
  path: "/campaigns/website-design",
  campaignName: "website_design_showcase",
  trackingCampaignName: "website_design_showcase",
  eyebrow: "WEBSITE DESIGN",
  headline: "Your Website Should Be the *Foundation* of Your Growth",
  subheadline:
    "FTW builds websites with SEO structure, dedicated service pages, AI Search readiness, conversion pathways, analytics, and room to scale marketing and automation later.",
  primaryCTA: "Get Your Website Plan",
  secondaryCTA: "See How It Works",
  secondaryHref: "#growth-system",
  metaTitle: "Website Design for Growth | FTW Agency",
  metaDescription:
    "FTW builds websites as growth infrastructure — SEO, service pages, location architecture, AI Search readiness, and conversion systems that turn traffic into opportunities.",
  formSubject: "[Campaign Lead] Website Design Showcase",
  thankYouDestination: "/campaigns/thank-you",
  experimentVariant: "control",
  noindex: true,
  gallerySlugs: [
    "vote-christen",
    "farmhouse-collective",
    "visit-riverside",
    "cal-star-mobile",
    "vertex-services",
    "mendozer-x-earthworks",
    "fdc-fire",
    "all-around-mobile-home-service",
  ],
  /** Sticky-chapter growth story — visual stage + business-value copy. */
  gsapPanels: [
    {
      number: "01",
      navLabel: "Website",
      eyebrow: "The foundation",
      headline: "Your Website Is Where Growth Starts",
      paragraphs: [
        "Customers, search engines, and AI systems all land on your site first. If that foundation looks generic or unclear, every marketing dollar you spend has a weaker place to land.",
        "We build the digital home for your brand — structure, messaging, and presentation that make you look like the company people want to hire.",
      ],
      bottomLine: "A weak website undermines every channel that points to it.",
      stageId: "website",
    },
    {
      number: "02",
      navLabel: "Services",
      eyebrow: "Service pages",
      headline: "Give Every Service Its Own Opportunity to Rank",
      paragraphs: [
        "One generic “Services” page rarely matches how customers search. Dedicated pages let each offer explain itself, prove credibility, and convert on its own.",
        "That architecture creates more relevant entry points for Google — and clearer paths for people who already know what they need.",
      ],
      bottomLine: "Service pages turn vague traffic into qualified interest.",
      stageId: "services",
    },
    {
      number: "03",
      navLabel: "SEO",
      eyebrow: "Search visibility",
      headline: "Build Search Visibility Into the Architecture",
      paragraphs: [
        "SEO is not a plugin bolted on later. Crawlable structure, clean URLs, metadata, internal links, and performance give search engines a site they can understand and trust.",
        "When the foundation is right, organic search and paid traffic both have a stronger destination to convert.",
      ],
      bottomLine: "Structure is the SEO investment that compounds.",
      stageId: "seo",
    },
    {
      number: "04",
      navLabel: "Locations",
      eyebrow: "Local markets",
      headline: "Target the Markets You Want to Grow In",
      paragraphs: [
        "Location and service-area pages create relevant entry points for local searches — not one “areas we serve” block that ranks for nothing.",
        "You expand into the cities and markets that matter to the business, with pages built to be found and understood.",
      ],
      bottomLine: "Local growth needs local entry points on the site.",
      stageId: "locations",
    },
    {
      number: "05",
      navLabel: "AI Search",
      eyebrow: "AI Search / AIO",
      headline: "Help AI Search Understand Your Business",
      paragraphs: [
        "ChatGPT, Google AI Overviews, Perplexity, and similar systems need clear, structured information about who you are, what you do, where you operate, and why you are credible.",
        "We organize content so modern answer engines can interpret your business — without promising placements you cannot control.",
      ],
      bottomLine: "If AI cannot understand you, it cannot recommend you.",
      stageId: "aio",
    },
    {
      number: "06",
      navLabel: "Grow",
      eyebrow: "Convert & scale",
      headline: "Turn Visibility Into Opportunities — Then Scale",
      paragraphs: [
        "Calls, forms, bookings, and quote requests should be obvious on every important page. Traffic that cannot convert is wasted attention.",
        "SEO, AI Search, service pages, locations, ads, and analytics connect through one website you can keep building on — growth infrastructure, not a brochure.",
      ],
      bottomLine: "One website. Multiple growth channels. Clear next steps.",
      stageId: "convert",
    },
  ],
  pillars: [
    {
      title: "SEO Foundation",
      explain:
        "Crawlable structure, technical readiness, clean URLs, metadata, internal linking, and mobile performance.",
      businessValue: "Give Google a clearer site to crawl and understand.",
    },
    {
      title: "Dedicated Service Pages",
      explain:
        "Not one generic Services page — a page for each offer customers actually search for.",
      businessValue:
        "Create more relevant pages for the searches your customers are actually making.",
    },
    {
      title: "Location / Service-Area Architecture",
      explain: "Service → city → market entry points for local growth.",
      businessValue:
        "Expand visibility into the markets your business wants to grow in.",
    },
    {
      title: "AI Search / AIO",
      explain:
        "Structured content so AI systems can better interpret your company, services, expertise, locations, and proof.",
      businessValue:
        "Make your business easier for modern search systems to interpret.",
    },
    {
      title: "Conversion System",
      explain:
        "CTAs, forms, phone, booking, proof, trust, and mobile UX designed to move visitors forward.",
      businessValue: "Turn visitors into real opportunities.",
    },
    {
      title: "Marketing-Ready Infrastructure",
      explain:
        "A base for Google Ads, SEO, remarketing, analytics, automation, CRM, and future campaigns.",
      businessValue: "Build once, then grow on top of it.",
    },
  ],
  aioSection: {
    eyebrow: "AI Search / AIO",
    title: "When Customers Ask AI, Make Sure It Can *Find You*",
    lede:
      "A growing share of buying decisions now starts in ChatGPT, Google AI Overviews, Perplexity, and similar answer engines — not a classic list of blue links.",
    education: {
      heading: "What AIO actually means",
      body: "AI Optimization (AIO) is how you make your business legible to AI systems — so when someone asks who to hire, what to buy, or where to go, your company can be understood and cited.",
      bullets: [
        "Buyers type questions into AI the way they used to type keywords into Google.",
        "Those systems need clear who / what / where / why-trust-you signals.",
        "Your website structure is the primary source those systems learn from.",
      ],
    },
    urgency: {
      heading: "First-mover advantage is still open",
      body: "Most competitors are still optimizing only for yesterday’s search results page. The businesses that structure for AI Search now build the footprint answer engines learn from first — and that early clarity compounds.",
      punchLine: "If AI cannot understand you, it cannot recommend you.",
    },
    buildPoints: [
      {
        title: "Entity clarity",
        body: "Consistent company, service, and location identity AI systems can parse with confidence.",
      },
      {
        title: "Structured service & market pages",
        body: "Dedicated pages that answer the exact questions buyers ask assistants — not one vague brochure block.",
      },
      {
        title: "Citation-ready proof",
        body: "Trust signals and facts organized so modern search can verify what you claim.",
      },
    ],
    ctaLabel: "Get Your Website Plan",
  },
  processSteps: [
    {
      step: "01",
      title: "Strategy call",
      body: "We map services, markets, and conversion goals before design starts.",
    },
    {
      step: "02",
      title: "Architecture",
      body: "Service pages, locations, SEO structure, and conversion paths get planned as one system.",
    },
    {
      step: "03",
      title: "Design & build",
      body: "Premium craft with performance, clarity, and lead capture baked in.",
    },
    {
      step: "04",
      title: "Launch & measure",
      body: "Analytics, tracking, and a clear plan for SEO, ads, and next growth layers.",
    },
  ],
  faq: [
    {
      question: "Is SEO built into the website?",
      answer:
        "Yes. Structure, metadata, internal links, performance, and indexable pages are part of the build — not an afterthought.",
    },
    {
      question: "Why do I need separate service pages?",
      answer:
        "Customers search for specific services. Dedicated pages give each offer a clearer path to rank, explain value, and convert.",
    },
    {
      question: "What is AI Search / AIO?",
      answer:
        "AI-powered search and answer systems need clear, structured information about your business. We organize content so those systems can better understand what you do and where you operate — without guaranteeing placements.",
    },
    {
      question: "Can you create location pages for the cities I serve?",
      answer:
        "Yes. Service-area architecture can expand into the markets you want to grow in, with relevant pages instead of one generic “areas we serve” block.",
    },
    {
      question: "Can I run Google Ads to the site?",
      answer:
        "Yes. We build conversion-ready pages and tracking so paid traffic has clear paths to call, form, or book.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We can rebuild on your current domain with stronger structure, messaging, and conversion systems.",
    },
    {
      question: "Do you handle website copy?",
      answer:
        "We collaborate on messaging and page structure so pages speak to search intent and business outcomes — not just design.",
    },
    {
      question: "Can you manage and update the site after launch?",
      answer:
        "Yes. Ongoing updates, improvements, and growth layers can continue after launch so the site stays useful as you scale.",
    },
  ],
};

/** Shape shared by geo campaign pages and the website showcase LP for chrome/form/tracking. */
export interface CampaignChromePage {
  path: string;
  service: string;
  city?: string;
  primaryCTA: string;
  trackingCampaignName: string;
  thankYouDestination: string;
  formSubject: string;
  experimentVariant: CampaignExperimentVariant;
  finalHeadline?: string;
  finalSubheadline?: string;
}

export function toCampaignChrome(config: WebsiteShowcaseConfig): CampaignChromePage {
  return {
    path: config.path,
    service: config.service,
    primaryCTA: config.primaryCTA,
    trackingCampaignName: config.trackingCampaignName,
    thankYouDestination: config.thankYouDestination,
    formSubject: config.formSubject,
    experimentVariant: config.experimentVariant,
    finalHeadline: "Ready for a Website That Works Like Growth Infrastructure?",
    finalSubheadline:
      "Tell us about your services, markets, and goals. We’ll map a clear website plan — no pressure, no generic pitch deck.",
  };
}
