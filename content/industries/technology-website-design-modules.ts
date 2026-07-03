/** Editable copy + defaults for /industries/technology/website-design-development/ modules only. */

export const technologyWebsiteDesignModules = {
  showcase: {
    eyebrow: "Tech Website Example",
    title: "See What a High-Converting Technology Website Can Look Like",
    lede:
      "Technology companies need more than a polished homepage. They need a site that explains the product, builds trust, captures demand, and turns visitors into demos, trials, or sales conversations.",
    mockup: {
      brand: "ClearPath",
      nav: ["Product", "Solutions", "Pricing", "Resources"],
      heroHeadline: "Ship faster with the ops platform your team actually uses",
      heroSub:
        "Unify workflows, reporting, and customer data — without another six-month implementation.",
      heroCta: "Book a Demo",
      heroSecondary: "View Product Tour",
      features: [
        { title: "Workflow Automation", desc: "Replace manual handoffs with rules-based routing." },
        { title: "Live Dashboards", desc: "Give every team real-time visibility into performance." },
        { title: "Integrations Hub", desc: "Connect CRM, billing, and support in days, not quarters." },
      ],
      pricingLabel: "Plans from",
      pricingAmount: "$149",
      pricingPeriod: "/ seat / mo",
      socialProof: ["4.9 G2 rating", "SOC 2 Type II", "500+ teams"],
      dashboardTitle: "Pipeline Overview",
      dashboardMetrics: [
        { label: "Active trials", value: "128" },
        { label: "Demo conversion", value: "18.4%" },
        { label: "Expansion MRR", value: "+$42K" },
      ],
    },
  },

  funnel: {
    eyebrow: "Customer Journey",
    title: "Turn Website Traffic Into Qualified Opportunities",
    lede:
      "A strong technology website should guide visitors from awareness to action with clear messaging, proof, CTAs, and conversion paths.",
    stages: [
      { label: "Visitors", value: 10000 },
      { label: "Product Interest", value: 1200 },
      { label: "Demo Requests", value: 320 },
      { label: "Sales Calls", value: 90 },
      { label: "Customers", value: 24 },
    ],
  },

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Static Website to Growth Engine",
    before: {
      label: "Before",
      headline: "Looks fine. Converts nothing.",
      items: [
        "Generic messaging",
        "Weak calls-to-action",
        "No demo funnel",
        "No product clarity",
        "No analytics insight",
      ],
    },
    after: {
      label: "After",
      headline: "Built to capture and convert demand.",
      items: [
        "Clear product positioning",
        "Strong demo CTA",
        "Trust-building sections",
        "Product-led content",
        "Conversion tracking",
      ],
    },
    portfolioExample: {
      eyebrow: "Real Client Example",
      title: "Growing Brands · *Blue Social*",
      lede:
        "The same conversion principles applied to a real client — from a basic app landing page to a modern platform built to drive downloads, token interest, and community growth.",
      exampleTitle: "Growing Brands",
    },
  },
} as const;

export type TechnologyWebsiteDesignModules =
  typeof technologyWebsiteDesignModules;
