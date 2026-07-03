import type { Project } from "@/lib/schemas";

export const harvestTable: Project = {
  slug: "harvest-table",
  title: "Harvest & Table",
  portfolioKind: "website",
  industry: "restaurants-hospitality",
  services: ["viral-social-media", "google-business-profile", "review-reputation-growth", "mobile-app-development"],
  description:
    "A visibility and loyalty system for a farm-to-table restaurant group: short-form video that took weeknight covers up 40%, map pack dominance across three locations, and a loyalty app their regulars actually use.",
  screenshots: [
    { title: "Social content system", kind: "chart" },
    { title: "Loyalty mobile app", kind: "mobile" },
    { title: "Review growth across locations", kind: "reviews" },
    { title: "Reservation analytics", kind: "dashboard" },
  ],
  results: [
    { value: 40, suffix: "%", label: "increase in weeknight covers" },
    { value: 2.1, suffix: "M", label: "organic short-form views in 6 months" },
    { value: 31, suffix: "%", label: "of revenue now from repeat loyalty guests" },
  ],
  technologies: ["Short-Form Video System", "React Native", "Loyalty Engine", "GBP Management"],
  testimonial: {
    quote:
      "Tuesday used to be our quiet night. Now people come in saying they saw us on their feed — and the app keeps them coming back.",
    author: "Elena Vasquez",
    role: "Co-Founder",
    company: "Harvest & Table",
    industry: "restaurants-hospitality",
  },
  featured: false,
};
