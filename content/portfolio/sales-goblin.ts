import type { Project } from "@/lib/schemas";

export const salesGoblin: Project = {
  slug: "sales-goblin",
  title: "Sales Goblin",
  portfolioKind: "software",
  industry: "technology",
  services: ["custom-software", "mobile-app-development", "website-design-development"],
  liveUrl: "https://salesgoblin.app/",
  description:
    "Multi-account Stripe companion that unifies payments, invoices, subscriptions, refunds, and alerts into one real-time feed — with Insights, widgets, and Sales Watch.",
  screenshots: [
    {
      title: "Product marketing homepage",
      kind: "website",
      src: "/showcases/software/sales-goblin-hero.jpg",
      alt: "Sales Goblin homepage — every Stripe account, every sale, one feed",
    },
    { title: "Unified multi-account feed", kind: "dashboard" },
    { title: "Today insights & account totals", kind: "chart" },
    { title: "Sales Watch widgets & Live Activity", kind: "mobile" },
  ],
  results: [
    { value: 1, label: "unified feed across Stripe accounts" },
    { value: 1, label: "Sales Watch Lock Screen & Dynamic Island" },
  ],
  technologies: ["Stripe Connect", "iOS", "Real-Time Feed", "Widgets"],
  testimonial: {
    quote:
      "Sales Goblin needed a product site that made multi-account Stripe visibility obvious in seconds — feed, alerts, and Sales Watch without sounding like another dashboard.",
    author: "Sales Goblin",
    role: "Product Team",
    company: "Sales Goblin",
    industry: "technology",
  },
  featured: false,
};
