import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const professionalServicesWebsiteModules = {
  showcase: {
    eyebrow: "Professional Services Website Example",
    title: "See What a Conversion-Engineered Dental Website Looks Like",
    lede:
      "From a single-practice layout with limited content to a comprehensive site with multiple provider profiles, service showcases, patient testimonials, and a professional team presentation that converts research into booked appointments.",
    portfolioExampleTitle: "Dental",
  },

  funnel: {
    eyebrow: "Website Conversion",
    title: "Turn Firm Research Into Booked Consultations",
    lede:
      "A professional services website should establish authority instantly — credentials, case results, and clear paths to consult — on every device, for every high-intent practice area.",
    stages: [
      { label: "Website Visitors", value: 2800 },
      { label: "Practice Page Views", value: 1960 },
      { label: "Consultation Clicks", value: 392 },
      { label: "Forms Submitted", value: 98 },
      { label: "Consultations Booked", value: 42 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Template Site to Trust-First Firm Presence",
    before: {
      label: "Before",
      headline: "Generic site, no authority signal.",
      items: [
        "Outdated template with stock legal imagery",
        "Practice areas buried in navigation",
        "No attorney profiles or credentials",
        "Consultation form on contact page only",
        "Prospects bounced to competitors",
      ],
    },
    after: {
      label: "After",
      headline: "Every page earns the consultation.",
      items: [
        "Dedicated practice area pages with FAQs",
        "Attorney bios with credentials and results",
        "Trust badges and client proof above the fold",
        "Prominent consultation booking on every page",
        "48% lift in consultation requests",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
