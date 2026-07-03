import type { Project } from "@/lib/schemas";

export const calStarMobilehomecrm: Project = {
  slug: "cal-star-mobilehomecrm",
  title: "MobileHomeCRM · Cal Star Mobile Home Construction",
  portfolioKind: "software",
  industry: "home-services",
  services: ["custom-software", "business-automation", "mobile-app-development"],
  description:
    "Fully configured MobileHomeCRM instance for Cal Star Mobile Home Construction — dashboard, estimates, proposals, and sales pipeline in daily use.",
  screenshots: [
    {
      title: "Client CRM dashboard",
      kind: "dashboard",
      src: "/showcases/software/cal-star-mobilehomecrm-dashboard.jpg",
      alt:
        "Cal Star Mobile Home Construction MobileHomeCRM dashboard with leads and sales metrics",
    },
    { title: "Estimate builder", kind: "dashboard" },
    { title: "Digital proposal delivery", kind: "pipeline" },
    { title: "Field operations view", kind: "mobile" },
  ],
  results: [
    { value: 1, label: "live client CRM deployment" },
    { value: 1, label: "full estimate-to-close workflow" },
  ],
  technologies: ["MobileHomeCRM", "Sales Automation", "E-Signatures", "Pipeline Reporting"],
  testimonial: {
    quote:
      "Before this system, every estimate felt different depending on who created it. Now every proposal is standardized, customers approve digitally, and our team spends more time selling instead of chasing paperwork.",
    author: "Cal Star Mobile Home Construction",
    role: "Operations Team",
    company: "Cal Star Mobile Home Construction",
    industry: "home-services",
  },
  featured: false,
};
