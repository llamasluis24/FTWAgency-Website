import type { Industry } from "@/lib/schemas";

export const construction: Industry = {
  slug: "construction",
  title: "Construction",
  icon: "HardHat",
  excerpt:
    "Pipeline, proposals, and project operations for builders, remodelers, and contractors.",
  heroHeadline: "Build Your *Pipeline* Like You Build Projects.",
  heroSub:
    "We help builders, remodelers, and specialty contractors win better projects, present like professionals, and run operations on systems instead of spreadsheets.",
  painPoints: [
    {
      title: "Referral-only pipeline",
      description:
        "Word of mouth built the business, but it can't be scaled, predicted, or controlled.",
    },
    {
      title: "Bidding blind and slow",
      description:
        "Estimates built in spreadsheets take days and vary by who builds them — losing jobs to faster bidders.",
    },
    {
      title: "A portfolio nobody sees",
      description:
        "Stunning completed projects sit in camera rolls instead of winning the next client online.",
    },
    {
      title: "Office and field disconnected",
      description:
        "Job status lives in texts and phone calls — costly miscommunication on every project.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Construction",
    description:
      "A portfolio-driven web presence wins higher-value projects, estimating and proposal systems close them faster, and field-connected software keeps every job profitable.",
  },
  serviceStack: [
    {
      service: "website-design-development",
      reason: "A portfolio-first site that wins premium projects.",
    },
    {
      service: "custom-software",
      reason: "Estimating and proposal platforms that bid faster and more accurately.",
    },
    {
      service: "seo",
      reason: "Rank for the project types and areas you want more of.",
    },
    {
      service: "mobile-app-development",
      reason: "Field apps connecting crews, photos, and job status to the office.",
    },
    {
      service: "review-reputation-growth",
      reason: "Reviews and case studies that justify premium pricing.",
    },
  ],
  stats: [
    { value: 63, suffix: "%", label: "of clients research contractors online before calling" },
    { value: 2, suffix: "x", label: "close rate improvement with same-week proposals" },
    { value: 40, suffix: "%", label: "of bid time recoverable with estimating systems" },
  ],
  examples: {
    lead: "New project inquiry — kitchen remodel, $85k budget",
    review: "\u201cOn time, on budget, incredible craftsmanship.\u201d",
    appointment: "Site walkthrough scheduled — Monday 10:00 AM",
    metricLabel: "Proposals sent this month",
    metricValue: "23",
  },
  faqs: [
    {
      question: "Do you work with both residential and commercial contractors?",
      answer:
        "Yes. Residential remodelers and builders typically lead with portfolio and reviews; commercial contractors lead with capability and process. We build the system around your project mix.",
    },
    {
      question: "Can you build estimating software for our specific trade?",
      answer:
        "That's exactly what we do — custom estimating platforms built around your assemblies, pricing logic, and margins, so every estimator bids consistently and fast.",
    },
    {
      question: "How do you market high-ticket construction services?",
      answer:
        "High-ticket projects are won on trust: portfolio-driven SEO, detailed case studies, review velocity, and follow-up automation that nurtures long decision cycles.",
    },
  ],
  meta: {
    title: "Construction Marketing & Growth Systems | FTW Agency",
    description:
      "Growth systems for builders and contractors: portfolio websites, estimating platforms, SEO, and field apps that win better projects and streamline operations.",
  },
};
