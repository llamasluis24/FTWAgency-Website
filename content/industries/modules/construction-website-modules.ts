import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const constructionWebsiteModules = {
  showcase: {
    eyebrow: "Construction Website Example",
    title: "See What a Portfolio-First Builder Website Looks Like",
    lede:
      "Northgate Design-Build went from a referral-only presence with projects stuck in camera rolls to a portfolio-driven site that wins premium remodels and design-build clients.",
    siteName: "Northgate Design-Build",
    siteUrl: "northgatedesignbuild.com",
    tagline: "Design-Build Remodeling · Portland Metro",
    hero: {
      badge: "Licensed Oregon Contractor · Est. 2008",
      headline: "Premium Remodeling & Design-Build Built for Portland Homeowners",
      headlineAccent: "Design-Build",
      subheadline:
        "Trusted residential remodelers and design-build experts. Transparent pricing, master craftsmanship, and a portfolio that earns premium projects.",
      primaryCta: "Request a Walkthrough",
      secondaryCta: "(503) 555-0142",
      heroImage: "/showcases/construction/hero-remodel.jpg",
      trustBadges: [
        "Licensed & Insured",
        "Design-Build Specialists",
        "Premium Craftsmanship",
        "Free Consultations",
      ],
    },
    gallery: {
      eyebrow: "Featured Projects",
      title: "Craftsmanship you can see.",
      cta: "Start your project",
    },
    projects: [
      {
        name: "Modern Kitchen Remodel",
        type: "Kitchen Remodel",
        value: "$142k",
        image: "/showcases/construction/kitchen-remodel.jpg",
        layout: "large" as const,
      },
      {
        name: "Whole-Home Renovation",
        type: "Design-Build",
        value: "$380k",
        image: "/showcases/construction/whole-home.jpg",
        layout: "medium" as const,
      },
      {
        name: "ADU & Garage Conversion",
        type: "Addition",
        value: "$118k",
        image: "/showcases/construction/adu-conversion.jpg",
        layout: "medium" as const,
      },
      {
        name: "Primary Suite Expansion",
        type: "Master Suite",
        value: "$95k",
        image: "/showcases/construction/master-suite.jpg",
        layout: "tall" as const,
      },
    ],
    stats: [
      { label: "Avg. project value", value: "+64%" },
      { label: "Qualified inquiries", value: "3×" },
      { label: "Proposal requests", value: "+48%" },
    ],
  },

  funnel: {
    eyebrow: "Website Conversion",
    title: "Turn Portfolio Browsers Into Project Inquiries",
    lede:
      "A builder website should showcase completed work, establish premium positioning, and make requesting a walkthrough effortless — on every device.",
    stages: [
      { label: "Website Visitors", value: 2800 },
      { label: "Portfolio Page Views", value: 1960 },
      { label: "Estimate Requests", value: 84 },
      { label: "Qualified Walkthroughs", value: 52 },
      { label: "Signed Contracts", value: 23 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Camera-Roll Portfolio to Premium Project Magnet",
    before: {
      label: "Before",
      headline: "Referrals only, no online proof.",
      items: [
        "Outdated template site with stock photos",
        "Completed projects invisible online",
        "No clear design-build positioning",
        "Estimate form buried or missing",
        "Homeowners couldn't see craftsmanship",
      ],
    },
    after: {
      label: "After",
      headline: "Portfolio that wins premium projects.",
      items: [
        "Gallery of real completed remodels",
        "Case studies with scope and budget ranges",
        "Clear design-build process pages",
        "Prominent walkthrough request forms",
        "64% lift in average project value",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
