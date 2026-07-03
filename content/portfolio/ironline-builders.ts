import type { Project } from "@/lib/schemas";

export const ironlineBuilders: Project = {
  slug: "ironline-builders",
  title: "Ironline Builders",
  portfolioKind: "website",
  industry: "construction",
  services: ["website-design-development", "custom-software", "seo"],
  description:
    "A portfolio-driven website and custom estimating platform for a design-build remodeler. Premium positioning lifted average project value while the estimating system cut bid turnaround from five days to one.",
  screenshots: [
    { title: "Portfolio-first website", kind: "website" },
    { title: "Custom estimating platform", kind: "dashboard" },
    { title: "Proposal builder", kind: "dashboard" },
    { title: "Project pipeline view", kind: "pipeline" },
  ],
  results: [
    { value: 64, suffix: "%", label: "increase in average project value" },
    { value: 80, suffix: "%", label: "faster bid turnaround" },
    { value: 3, suffix: "x", label: "more qualified project inquiries" },
  ],
  technologies: ["Next.js", "Custom Estimating Engine", "PostgreSQL", "Proposal Automation"],
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
