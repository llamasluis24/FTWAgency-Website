export interface SoftwareProject {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  highlightTag: string;
  description: string;
  features: string[];
  /** Visual theme for the browser mock preview */
  preview: "crm" | "social" | "ai" | "trading";
  accent: "cyan" | "violet" | "emerald" | "amber";
  /** Hero screenshot — replaces the abstract preview mock when set. */
  heroImage?: string;
  heroImageAlt?: string;
}

export const softwarePortfolioProjects: SoftwareProject[] = [
  {
    slug: "mobilehomecrm",
    name: "MobileHomeCRM",
    url: "https://www.mobilehomecrm.com/",
    domain: "mobilehomecrm.com",
    category: "CRM Platform / Business Operating System",
    highlightTag: "Industry-Specific SaaS Platform",
    description:
      "A custom-built CRM and business operating system designed specifically for the mobile home service industry.",
    features: [
      "Lead Management",
      "Estimating",
      "Proposals",
      "E-Signatures",
      "Automated Follow-Up",
      "Scheduling",
      "Sales Pipeline",
      "Operations Dashboard",
    ],
    preview: "crm",
    accent: "cyan",
    heroImage: "/showcases/software/mobilehomecrm-hero.jpg",
    heroImageAlt: "MobileHomeCRM hero page showing contractor CRM dashboard and workflow cards",
  },
  {
    slug: "blue-social",
    name: "Blue Social",
    url: "https://blue.social/",
    domain: "blue.social",
    category: "Social Platform",
    highlightTag: "Social Media Platform",
    description:
      "A social networking platform focused on community engagement, user interaction, and scalable content experiences.",
    features: [
      "User Profiles",
      "Content Publishing",
      "Community Interaction",
      "Engagement Systems",
      "Modern Social Infrastructure",
    ],
    preview: "social",
    accent: "violet",
    heroImage: "/showcases/software/blue-social-hero.jpg",
    heroImageAlt: "Blue Social hero page with app download buttons and social discovery map",
  },
  {
    slug: "wpconvert-ai",
    name: "WP Convert AI",
    url: "https://wpconvert.ai/",
    domain: "wpconvert.ai",
    category: "AI Software Platform",
    highlightTag: "AI SaaS Platform",
    description:
      "An AI-powered platform focused on conversion optimization, automation, and intelligent user engagement.",
    features: [
      "AI Workflows",
      "Automation",
      "Conversion Optimization",
      "Lead Generation Tools",
      "Intelligent User Experiences",
    ],
    preview: "ai",
    accent: "emerald",
    heroImage: "/showcases/software/wpconvert-ai-hero.jpg",
    heroImageAlt: "WPConvert.ai hero page for converting Lovable sites to WordPress themes",
  },
  {
    slug: "ghosttrade",
    name: "GhostTrade",
    url: "https://www.ghosttrade.fun/",
    domain: "ghosttrade.fun",
    category: "Trading Platform",
    highlightTag: "Trading Software Platform",
    description:
      "A software platform built around market engagement, user activity tracking, and trading-focused experiences.",
    features: [
      "Trading Dashboard",
      "Performance Tracking",
      "User Analytics",
      "Real-Time Data",
      "Interactive Platform Design",
    ],
    preview: "trading",
    accent: "amber",
    heroImage: "/showcases/software/ghosttrade-hero.jpg",
    heroImageAlt: "GhostTrade hero page with Solana paper trading extension dashboard",
  },
];

export const softwareBuiltForNeeds = {
  headline: "Software Built Around Real Business Needs",
  body: "FTW Agency develops custom software development solutions that solve operational challenges, improve customer experiences, automate workflows, and create scalable digital products — from CRM software and business operating systems to AI software development and web application development.",
  examples: [
    "CRM Platforms",
    "Industry-Specific SaaS Products",
    "Social Platforms",
    "AI Applications",
    "Internal Business Systems",
    "Mobile Applications",
    "Customer Portals",
    "Business Automation Tools",
  ],
};

export const softwareTrustSection = {
  headline: "From Marketing to Software Development",
  description:
    "Most agencies stop at websites and advertising. FTW Agency goes further by helping businesses build the systems that power growth, operations, customer experiences, and automation — the custom business platforms and software solutions for businesses that turn marketing momentum into lasting operational advantage.",
};
