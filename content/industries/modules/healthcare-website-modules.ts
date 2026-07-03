import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const healthcareWebsiteModules = {
  showcase: {
    eyebrow: "Healthcare Website Example",
    title: "See What a Patient-Conversion Website Looks Like for a Dental Practice",
    lede:
      "Lakeside Dental Studio went from a generic template site to a trustworthy, treatment-focused experience — online booking, provider profiles, and proof that converts research into scheduled appointments.",
    portfolioExampleTitle: "Dental",
  },

  funnel: {
    eyebrow: "Website Conversion",
    title: "Turn Treatment Research Into Booked Appointments",
    lede:
      "A healthcare website should establish trust instantly — credentials, reviews, and clear paths to book — on every device, for every high-value treatment.",
    stages: [
      { label: "Website Visitors", value: 3200 },
      { label: "Treatment Page Views", value: 2240 },
      { label: "Booking Clicks", value: 448 },
      { label: "Forms Submitted", value: 224 },
      { label: "New Patients Booked", value: 112 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Template Site to New Patient Magnet",
    before: {
      label: "Before",
      headline: "Generic site, phone-only booking.",
      items: [
        "Stock photos, no provider profiles",
        "Treatment info buried in navigation",
        "No online scheduling",
        "3.2% visitor-to-booking rate",
        "Patients bounced to competitors",
      ],
    },
    after: {
      label: "After",
      headline: "Built to earn trust and book visits.",
      items: [
        "Provider bios with credentials & photos",
        "Dedicated page per high-value treatment",
        "Online booking on every page",
        "5.8% conversion — 156% more bookings",
        "Reviews and proof above the fold",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
