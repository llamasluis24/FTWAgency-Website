import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const startupsWebsiteModules = {
  showcase: {
    eyebrow: "Startup Website Example",
    title: "See What a Launch-Ready Startup Site Looks Like",
    lede:
      "Blue Social went from a placeholder landing page to a credibility-building site — clear product positioning, waitlist capture, and investor-ready proof that makes a two-person team look like a company worth backing.",
    portfolioExampleTitle: "Growing Brands",
  },

  funnel: {
    eyebrow: "Launch Conversion",
    title: "Turn Site Traffic Into Waitlist Signups and Demo Calls",
    lede:
      "Early-stage startups need every visitor to understand the product, trust the team, and take action — whether that's joining a waitlist, booking a discovery call, or requesting early access.",
    stages: [
      { label: "Site Visitors", value: 4200 },
      { label: "Product Page Views", value: 2940 },
      { label: "Waitlist Clicks", value: 882 },
      { label: "Signups Submitted", value: 482 },
      { label: "Discovery Calls Booked", value: 68 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Placeholder Page to Launch-Ready Growth Engine",
    before: {
      label: "Before",
      headline: "Looked early-stage. Felt early-stage.",
      items: [
        "Coming-soon page with no product clarity",
        "No waitlist or demo capture flow",
        "Founder LinkedIn was the only credibility signal",
        "Investors bounced before the pitch deck",
        "3.2% visitor-to-signup rate",
      ],
    },
    after: {
      label: "After",
      headline: "Every page earns trust and action.",
      items: [
        "Product-led homepage with clear value prop",
        "Waitlist + discovery call paths on every page",
        "Team, traction, and social proof above the fold",
        "Investor-ready narrative built into the site",
        "6.8% visitor-to-signup rate",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
