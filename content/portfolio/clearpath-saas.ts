import type { Project } from "@/lib/schemas";

export const clearpathSaas: Project = {
  slug: "clearpath-saas",
  title: "ClearPath Software",
  portfolioKind: "website",
  industry: "technology",
  services: ["website-design-development", "seo", "aio", "business-automation"],
  description:
    "A demand engine for a B2B SaaS platform: positioning-led website redesign, category SEO, AI search visibility, and lifecycle automation that doubled demo conversion while organic signups tripled.",
  screenshots: [
    { title: "Positioning-led marketing site", kind: "website" },
    { title: "Organic growth analytics", kind: "chart" },
    { title: "Lifecycle automation flows", kind: "dashboard" },
    { title: "Demo pipeline", kind: "pipeline" },
  ],
  results: [
    { value: 3, suffix: "x", label: "organic trial signups" },
    { value: 104, suffix: "%", label: "increase in demo conversion rate" },
    { value: 41, suffix: "%", label: "of new pipeline now from organic + AI search" },
  ],
  technologies: ["Next.js", "Programmatic SEO", "Marketing Automation", "Product Analytics"],
  testimonial: {
    quote:
      "FTW rebuilt our site around how buyers actually evaluate us, then made sure we showed up everywhere they look — including ChatGPT. Pipeline has never been healthier.",
    author: "James Liu",
    role: "CEO",
    company: "ClearPath Software",
    industry: "technology",
  },
  featured: false,
};
