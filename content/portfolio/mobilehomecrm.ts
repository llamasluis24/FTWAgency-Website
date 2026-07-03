import type { Project } from "@/lib/schemas";

export const mobilehomecrm: Project = {
  slug: "mobilehomecrm",
  title: "MobileHomeCRM",
  portfolioKind: "software",
  industry: "home-services",
  services: ["custom-software", "mobile-app-development"],
  description:
    "Industry-specific CRM and business operating system for mobile home contractors — estimates, proposals, e-signatures, and pipeline in one platform.",
  screenshots: [
    {
      title: "Product marketing homepage",
      kind: "website",
      src: "/showcases/software/mobilehomecrm-hero.jpg",
      alt: "MobileHomeCRM marketing site hero with contractor CRM dashboard preview",
    },
    { title: "Lead management dashboard", kind: "dashboard" },
    { title: "Mobile estimating workflow", kind: "mobile" },
    { title: "Sales pipeline view", kind: "pipeline" },
  ],
  results: [
    { value: 6, suffix: "+", label: "core workflow modules" },
    { value: 1, label: "platform for sales & ops" },
  ],
  technologies: ["React", "CRM Engine", "E-Signatures", "Mobile Field App"],
  testimonial: {
    quote:
      "Generic contractor software never matched how mobile home dealers actually sell. MobileHomeCRM was built around the full estimate-to-close workflow.",
    author: "MobileHomeCRM",
    role: "Product Team",
    company: "MobileHomeCRM",
    industry: "home-services",
  },
  featured: true,
};
