import type { Project } from "@/lib/schemas";

export const ghosttrade: Project = {
  slug: "ghosttrade",
  title: "GhostTrade",
  portfolioKind: "software",
  industry: "technology",
  services: ["custom-software", "website-design-development"],
  description:
    "Solana paper-trading Chrome extension with real-time market overlays, simulated PnL, and risk-free training on live trading UIs.",
  screenshots: [
    {
      title: "Product marketing homepage",
      kind: "website",
      src: "/showcases/software/ghosttrade-hero.jpg",
      alt: "GhostTrade hero page with paper trading extension dashboard",
    },
    { title: "Trading overlay UI", kind: "dashboard" },
    { title: "Simulated PnL tracking", kind: "chart" },
    { title: "Chrome extension experience", kind: "mobile" },
  ],
  results: [
    { value: 1, label: "real-time market overlay" },
    { value: 100, suffix: "%", label: "simulated paper trading" },
  ],
  technologies: ["Chrome Extension", "Solana", "Real-Time Data", "Trading UI"],
  testimonial: {
    quote:
      "GhostTrade needed a landing page that explained paper trading on Solana in seconds — with a brand that felt native to crypto traders.",
    author: "GhostTrade",
    role: "Product Team",
    company: "GhostTrade",
    industry: "technology",
  },
  featured: false,
};
