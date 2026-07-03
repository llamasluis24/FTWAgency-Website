import type { CaseStudy } from "@/lib/schemas";

export const ironlineEstimatingTransformation: CaseStudy = {
  slug: "ironline-estimating-transformation",
  title: "How Ironline Builders Cut Bid Time 80% and Raised Project Value 64%",
  client: "Ironline Builders",
  industry: "construction",
  services: ["custom-software", "website-design-development", "seo"],
  summary:
    "A design-build remodeler drowning in spreadsheet estimates transformed into the most responsive premium bidder in their market — with software built around how they actually price work.",
  challenge: [
    "Ironline Builders produced exceptional work but lost winnable projects every month. Estimates lived in a spreadsheet only two people understood, took four to five days to assemble, and varied depending on who built them.",
    "Meanwhile, their web presence — a single-page site with a phone number — attracted price-shoppers instead of the premium design-build clients their portfolio deserved.",
  ],
  strategy: [
    "Build a custom estimating platform around Ironline's assemblies, pricing logic, and margin targets so any estimator could produce a consistent, accurate bid in hours.",
    "Pair it with a branded proposal system that presented bids as premium documents with scope visuals, options, and e-signatures.",
    "Reposition the web presence around their portfolio to attract — and pre-qualify — higher-value projects.",
  ],
  execution: [
    "We spent two weeks shadowing their estimators, mapping every assembly and pricing rule, then shipped the first working version of the estimating platform in eight weeks.",
    "The proposal system generated branded, interactive proposals directly from estimates — clients could review options and sign without printing a page.",
    "The new portfolio-first website launched with project galleries, detailed case studies, and SEO targeting design-build and premium remodel searches.",
  ],
  results: [
    { value: 80, suffix: "%", label: "faster bid turnaround", before: "5 days", after: "1 day" },
    { value: 64, suffix: "%", label: "higher average project value", before: "$52k", after: "$85k" },
    { value: 3, suffix: "x", label: "qualified project inquiries", before: "4/mo", after: "12/mo" },
    { value: 31, suffix: "%", label: "improvement in close rate", before: "19%", after: "25%" },
  ],
  screenshots: [
    { title: "Estimating platform", kind: "dashboard" },
    { title: "Proposal builder", kind: "dashboard" },
    { title: "Inquiry growth", kind: "chart" },
  ],
  beforeAfter: {
    before: {
      title: "Spreadsheet estimating",
      caption: "5-day turnaround, inconsistent pricing, tribal knowledge",
    },
    after: {
      title: "Custom estimating platform",
      caption: "Same-day bids, consistent margins, any estimator",
    },
  },
  testimonial: {
    quote:
      "Clients now tell us our proposals are the most professional they've seen — and we send them in a day instead of a week. The website brings in exactly the high-end projects we want.",
    author: "Dana Okafor",
    role: "Principal",
    company: "Ironline Builders",
    industry: "construction",
  },
  featured: true,
};
