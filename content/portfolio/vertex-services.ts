import type { Project } from "@/lib/schemas";

export const vertexServices: Project = {
  slug: "vertex-services",
  title: "Vertex Services",
  portfolioKind: "website",
  industry: "home-services",
  services: ["website-design-development", "seo", "google-business-profile"],
  description:
    "Commercial ice and beverage equipment maintenance site built to communicate service coverage, credibility, and fast quote requests.",
  screenshots: [
    {
      title: "Commercial services homepage",
      kind: "website",
      src: "/showcases/websites/vertex-services.jpg",
      alt: "Vertex Services commercial equipment maintenance website hero",
    },
    { title: "Service area architecture", kind: "website" },
    { title: "Quote request conversion path", kind: "pipeline" },
    { title: "Google Business Profile alignment", kind: "reviews" },
  ],
  results: [
    { value: 1, label: "commercial service positioning" },
    { value: 1, label: "quote-first conversion path" },
  ],
  technologies: ["Next.js", "Local SEO", "GBP Optimization", "Lead Capture"],
  testimonial: {
    quote:
      "FTW didn't just redesign our website — they built a system that helps commercial customers find us, trust us, and request service with confidence.",
    author: "Vertex Services Team",
    role: "Commercial Equipment Services",
    company: "Vertex Services",
    industry: "home-services",
  },
  featured: false,
};
