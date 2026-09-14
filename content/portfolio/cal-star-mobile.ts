import type { Project } from "@/lib/schemas";

export const calStarMobile: Project = {
  slug: "cal-star-mobile",
  title: "Cal Star Mobile Home Construction",
  portfolioKind: "website",
  industry: "home-services",
  services: ["website-design-development", "seo"],
  liveUrl: "https://calstarmobile.com/",
  description:
    "Southern California mobile home repair and remodeling site — foundation, roofing, plumbing, HVAC, electrical, and remodel paths built to convert estimate requests from homeowners across five counties.",
  screenshots: [
    {
      title: "Mobile home specialists homepage",
      kind: "website",
      src: "/showcases/websites/cal-star-mobile.jpg",
      alt: "Cal Star Mobile Home Construction website homepage — repair, remodeling, and foundation experts",
    },
    { title: "Service category architecture", kind: "website" },
    { title: "Estimate request conversion", kind: "website" },
    { title: "Service-area coverage", kind: "dashboard" },
  ],
  results: [
    { value: 15000, suffix: "+", label: "jobs completed featured as trust proof" },
    { value: 5, label: "Southern California counties covered" },
    { value: 1, label: "clear estimate-first conversion path" },
  ],
  technologies: ["Next.js", "Local SEO", "Lead Capture", "Service-Area Architecture"],
  testimonial: {
    quote:
      "Cal Star needed a site that speaks like a mobile home specialist — not a generic contractor brochure. We built service depth, estimate paths, and SoCal coverage so homeowners can understand the work and request help fast.",
    author: "FTW Agency",
    role: "Project Team",
    company: "Cal Star Mobile Home Construction",
    industry: "home-services",
  },
  featured: true,
};
