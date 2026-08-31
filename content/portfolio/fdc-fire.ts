import type { Project } from "@/lib/schemas";

export const fdcFire: Project = {
  slug: "fdc-fire",
  title: "FDC Fire Sprinklers Corp.",
  portfolioKind: "website",
  industry: "construction",
  services: ["website-design-development", "seo", "google-business-profile"],
  liveUrl: "https://www.fdcfire.com/",
  description:
    "Family-owned fire sprinkler contractor site covering commercial installation, inspections, tenant improvements, repairs, and residential ADU work — with Corona HQ positioning and SoCal service-area depth for property managers and GCs.",
  screenshots: [
    {
      title: "Fire protection services homepage",
      kind: "website",
      src: "/showcases/websites/fdc-fire.jpg",
      alt: "FDC Fire Sprinklers commercial warehouse fire protection website hero",
    },
    { title: "Commercial service architecture", kind: "website" },
    { title: "Inspection and compliance paths", kind: "reviews" },
    { title: "Southern California coverage map", kind: "dashboard" },
  ],
  results: [
    { prefix: "C-16 ", value: 1097066, label: "licensed fire protection contractor" },
    { value: 2, label: "commercial & residential service tracks" },
  ],
  technologies: ["Next.js", "Local SEO", "GBP Optimization", "Lead Capture"],
  testimonial: {
    quote:
      "FDC needed a site that communicates trade credibility and coverage depth — installation, inspections, TI mods, and maintenance — without reading like a generic contractor template. We built the architecture around how facility managers and GCs actually search and call.",
    author: "FTW Agency",
    role: "Project Team",
    company: "FDC Fire Sprinklers Corp.",
    industry: "construction",
  },
  featured: false,
};
