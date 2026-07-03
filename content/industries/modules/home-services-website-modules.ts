import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const homeServicesWebsiteModules = {
  showcase: {
    eyebrow: "Home Services Website Example",
    title: "See What a Conversion-Engineered Trade Website Looks Like",
    lede:
      "All Around Mobile Home Service went from a dated builder site with weak lead capture to a trust-focused redesign — clear services, estimate forms, and proof that converts homeowners into booked jobs.",
    portfolioExampleTitle: "Professional Services",
  },

  funnel: {
    eyebrow: "Website Conversion",
    title: "Turn Emergency Searches Into Booked Service Calls",
    lede:
      "A trade website should guide panicked homeowners from landing to call or form in under 60 seconds — with trust signals visible on every screen.",
    stages: [
      { label: "Website Visitors", value: 3200 },
      { label: "Service Page Views", value: 2100 },
      { label: "Click-to-Call / Form", value: 420 },
      { label: "Qualified Leads", value: 280 },
      { label: "Booked Jobs", value: 186 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Outdated Builder Site to Lead-Generating Machine",
    before: {
      label: "Before",
      headline: "Dated layout, weak lead capture.",
      items: [
        "Legacy Wix site with no clear service positioning",
        "Estimate form buried below the fold",
        "No mobile home specialist branding",
        "Zero social proof or testimonials",
        "Homeowners bounced before requesting a quote",
      ],
    },
    after: {
      label: "After",
      headline: "Built to earn trust and book estimates.",
      items: [
        "Clear service categories for every repair type",
        "Prominent estimate request forms",
        "Homeowner testimonials above the fold",
        "Professional mobile home specialist brand",
        "Conversion paths on every page",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
