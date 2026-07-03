export type FeaturedWorkType = "software" | "website";

export interface FeaturedWorkStat {
  value: string;
  label: string;
}

export interface FeaturedWorkItem {
  id: string;
  type: FeaturedWorkType;
  name: string;
  url: string;
  domain: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
  stats: FeaturedWorkStat[];
}

const mobilehomecrm: FeaturedWorkItem = {
  id: "mobilehomecrm",
  type: "software",
  name: "MobileHomeCRM",
  url: "https://www.mobilehomecrm.com/",
  domain: "mobilehomecrm.com",
  category: "CRM Platform",
  tags: ["Software", "CRM", "SaaS"],
  description:
    "Industry-specific CRM and business operating system for mobile home contractors — estimates, proposals, e-signatures, and pipeline in one platform.",
  image: "/showcases/software/mobilehomecrm-hero.jpg",
  imageAlt: "MobileHomeCRM marketing site hero with contractor CRM dashboard preview",
  stats: [
    { value: "6+", label: "core workflow modules" },
    { value: "1", label: "platform for sales & ops" },
  ],
};

const allAroundMobileHomeService: FeaturedWorkItem = {
  id: "all-around-mobile-home-service",
  type: "website",
  name: "All Around Mobile Home Service",
  url: "https://www.allaroundmobilehomeservice.com/",
  domain: "allaroundmobilehomeservice.com",
  category: "Home Services Website",
  tags: ["Website", "Home Services", "Lead Gen"],
  description:
    "Conversion-focused mobile home repair site with clear service categories, estimate forms, and trust proof built to turn local searches into booked jobs.",
  image: "/showcases/websites/all-around-mobile-home-service.jpg",
  imageAlt: "All Around Mobile Home Service website homepage",
  stats: [
    { value: "Multi", label: "service category pages" },
    { value: "Mobile", label: "first lead capture" },
  ],
};

const calStarMobilehomecrm: FeaturedWorkItem = {
  id: "cal-star-mobilehomecrm",
  type: "software",
  name: "MobileHomeCRM · Cal Star Mobile Home Construction",
  url: "https://www.mobilehomecrm.com/",
  domain: "calstar.mobilehomecrm.com",
  category: "CRM Deployment",
  tags: ["Software", "CRM", "Custom Config"],
  description:
    "Fully configured MobileHomeCRM instance for Cal Star Mobile Home Construction — dashboard, estimates, proposals, and sales pipeline in daily use.",
  image: "/showcases/software/cal-star-mobilehomecrm-dashboard.jpg",
  imageAlt:
    "Cal Star Mobile Home Construction MobileHomeCRM dashboard with leads and sales metrics",
  stats: [
    { value: "Live", label: "client CRM deployment" },
    { value: "Full", label: "estimate-to-close workflow" },
  ],
};

/** Order keeps mobile-home projects at indices 0, 3, and 6 so they never appear adjacent (including carousel wrap). */
export const featuredWorkCarouselItems: FeaturedWorkItem[] = [
  mobilehomecrm,
  {
    id: "blue-social",
    type: "software",
    name: "Blue Social",
    url: "https://blue.social/",
    domain: "blue.social",
    category: "Social Platform",
    tags: ["Software", "Social", "Mobile App"],
    description:
      "Proximity-based social networking platform with real-world discovery, community engagement, and scalable content experiences.",
    image: "/showcases/software/blue-social-hero.jpg",
    imageAlt: "Blue Social hero page with app store download CTAs and map discovery UI",
    stats: [
      { value: "iOS", label: "& Android app ecosystem" },
      { value: "Web3", label: "token & community layer" },
    ],
  },
  {
    id: "visit-riverside",
    type: "website",
    name: "Visit Riverside",
    url: "https://visitriverside.com/",
    domain: "visitriverside.com",
    category: "Tourism & Directory",
    tags: ["Website", "Tourism", "Local SEO"],
    description:
      "City tourism hub for Riverside, CA — things to do, dining, events, trip planning, and business listings in one searchable destination guide.",
    image: "/showcases/websites/visit-riverside/category-things-to-do.png",
    imageAlt: "Visit Riverside tourism website hero and city discovery experience",
    stats: [
      { value: "City", label: "wide business directory" },
      { value: "Events", label: "& trip planner tools" },
    ],
  },
  allAroundMobileHomeService,
  {
    id: "wpconvert-ai",
    type: "software",
    name: "WP Convert AI",
    url: "https://wpconvert.ai/",
    domain: "wpconvert.ai",
    category: "AI SaaS Platform",
    tags: ["Software", "AI", "WordPress"],
    description:
      "AI-powered platform that converts Lovable and custom-coded sites into editable WordPress themes in a single workflow.",
    image: "/showcases/software/wpconvert-ai-hero.jpg",
    imageAlt: "WPConvert.ai hero page for Lovable to WordPress conversion",
    stats: [
      { value: "1-click", label: "theme generation flow" },
      { value: "7K+", label: "sites converted" },
    ],
  },
  {
    id: "farmhouse-collective",
    type: "website",
    name: "Farm House Collective",
    url: "https://farmhousecollective.com/",
    domain: "farmhousecollective.com",
    category: "Hospitality & Events",
    tags: ["Website", "Events", "Food & Drink"],
    description:
      "Riverside food hall and event collective site with calendar programming, vendor lineup, and brand storytelling for a multi-concept destination.",
    image: "/showcases/websites/farmhouse-collective.jpg",
    imageAlt:
      "Farm House Collective website hero with outdoor courtyard, stage, and Grow Where You Are Planted branding",
    stats: [
      { value: "Live", label: "events calendar" },
      { value: "Multi", label: "vendor collective hub" },
    ],
  },
  calStarMobilehomecrm,
  {
    id: "ghosttrade",
    type: "software",
    name: "GhostTrade",
    url: "https://www.ghosttrade.fun/",
    domain: "ghosttrade.fun",
    category: "Trading Platform",
    tags: ["Software", "Trading", "Chrome Extension"],
    description:
      "Solana paper-trading Chrome extension with real-time market overlays, simulated PnL, and risk-free training on live trading UIs.",
    image: "/showcases/software/ghosttrade-hero.jpg",
    imageAlt: "GhostTrade hero page with paper trading extension dashboard",
    stats: [
      { value: "Real-time", label: "market overlay" },
      { value: "Zero", label: "risk paper trading" },
    ],
  },
  {
    id: "vertex-services",
    type: "website",
    name: "Vertex Services",
    url: "https://vertex-services.co/",
    domain: "vertex-services.co",
    category: "Commercial Services",
    tags: ["Website", "B2B", "Lead Gen"],
    description:
      "Commercial ice and beverage equipment maintenance site built to communicate service coverage, credibility, and fast quote requests.",
    image: "/showcases/websites/vertex-services.jpg",
    imageAlt: "Vertex Services commercial equipment maintenance website hero",
    stats: [
      { value: "Commercial", label: "service positioning" },
      { value: "Quote", label: "first conversion path" },
    ],
  },
];
