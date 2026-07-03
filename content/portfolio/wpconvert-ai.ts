import type { Project } from "@/lib/schemas";

export const wpconvertAi: Project = {
  slug: "wpconvert-ai",
  title: "WPConvert",
  portfolioKind: "software",
  industry: "technology",
  services: ["custom-software", "website-design-development"],
  description:
    "AI-powered platform that converts Lovable and custom-coded sites into editable WordPress themes in a single workflow.",
  screenshots: [
    {
      title: "Conversion-focused product homepage",
      kind: "website",
      src: "/showcases/software/wpconvert-ai-hero.jpg",
      alt: "WPConvert.ai hero page for Lovable to WordPress conversion",
    },
    { title: "One-click theme generation", kind: "dashboard" },
    { title: "Conversion workflow", kind: "pipeline" },
    { title: "Platform analytics", kind: "chart" },
  ],
  results: [
    { value: 7, suffix: "K+", label: "sites converted" },
    { value: 1, suffix: "-click", label: "theme generation flow" },
    { value: 100, suffix: "%", label: "WordPress-ready output" },
  ],
  technologies: ["AI Workflows", "WordPress", "Next.js", "Conversion Automation"],
  testimonial: {
    quote:
      "We needed a product site that explained a complex AI workflow in seconds — and a platform experience that felt as polished as the themes it generates. FTW delivered both.",
    author: "WPConvert",
    role: "Product Team",
    company: "WPConvert",
    industry: "technology",
  },
  featured: false,
};
