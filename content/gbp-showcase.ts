export interface GbpFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface GbpShowcaseRow {
  id: string;
  stepNumber: 1 | 2 | 3 | 4;
  eyebrow: string;
  headline: string;
  body: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Desktop: image on right (copy left) or left (copy right) */
  imagePosition: "left" | "right";
  cards: GbpFeatureCard[];
}

export const gbpShowcaseIntro = {
  eyebrow: "Google Business Profile in Action",
  headline: "See How Local Customers Find, Trust, and Contact Your Business",
  subheadline:
    "Your Google Business Profile is often the first thing customers see before they visit your website, call your business, or request directions. FTW Agency optimizes the signals that help your business appear, stand out, and convert local searches into real customers.",
};

export const gbpShowcaseRows: GbpShowcaseRow[] = [
  {
    id: "map-pack",
    stepNumber: 1,
    eyebrow: "Map Pack Visibility",
    headline: "Show Up Where Customers Look First",
    body: "When customers search for services near them, the Google Map Pack often appears before traditional website results. We optimize your profile so your business has a stronger chance of appearing in the top local results.",
    image: {
      src: "/showcases/gbp/map-pack-showcase.png",
      alt: "Google Search results showing FTW Agency ranked number one in the local Map Pack for marketing agencies in Riverside, CA",
      width: 1024,
      height: 710,
    },
    imagePosition: "right",
    cards: [
      {
        title: "Top 3 Visibility",
        description:
          "Help your business compete for the prime local map positions where customers click first.",
        icon: "MapPin",
      },
      {
        title: "Local Relevance",
        description:
          "Optimize categories, services, descriptions, and keywords to match how customers search.",
        icon: "Target",
      },
      {
        title: "Trust Signals",
        description:
          "Strengthen reviews, photos, business information, and activity signals that improve confidence.",
        icon: "ShieldCheck",
      },
      {
        title: "More Calls & Clicks",
        description:
          "Better visibility can lead to more website visits, calls, direction requests, and booked customers.",
        icon: "Phone",
      },
    ],
  },
  {
    id: "profile",
    stepNumber: 2,
    eyebrow: "Profile Optimization",
    headline: "Build a Profile Customers Can Trust",
    body: "A complete and active Google Business Profile gives customers the information they need to choose your business. We optimize the visible parts of your profile so it looks credible, accurate, and ready to convert.",
    image: {
      src: "/showcases/gbp/profile-preview.png",
      alt: "Optimized Google Business Profile preview for FTW Agency showing verified status, reviews, services, photos, and contact actions",
      width: 1024,
      height: 666,
    },
    imagePosition: "left",
    cards: [
      {
        title: "Accurate Business Info",
        description:
          "Make sure hours, categories, services, contact details, and descriptions are clear and consistent.",
        icon: "Globe",
      },
      {
        title: "Reviews & Reputation",
        description:
          "Improve credibility with review generation, review monitoring, and trust-building signals.",
        icon: "Star",
      },
      {
        title: "Photos & Updates",
        description:
          "Use professional photos, posts, and updates to keep the profile active and engaging.",
        icon: "Video",
      },
      {
        title: "Service Clarity",
        description:
          "Show customers exactly what you offer before they ever visit your website.",
        icon: "Layers",
      },
    ],
  },
  {
    id: "performance",
    stepNumber: 3,
    eyebrow: "Performance Tracking",
    headline: "Track the Actions That Drive Local Growth",
    body: "GBP optimization should not be guesswork. We monitor the performance signals that show how customers are finding and interacting with your business.",
    image: {
      src: "/showcases/gbp/performance-dashboard.png",
      alt: "Google Business Profile performance dashboard showing profile views, customer actions, search terms, and growth trends",
      width: 1024,
      height: 683,
    },
    imagePosition: "right",
    cards: [
      {
        title: "Profile Views",
        description:
          "Track how many people view your business profile across Google Search and Maps.",
        icon: "Eye",
      },
      {
        title: "Customer Actions",
        description:
          "Measure calls, website visits, direction requests, messages, and other conversion actions.",
        icon: "MessageSquare",
      },
      {
        title: "Search Terms",
        description: "See which searches are helping customers discover your business.",
        icon: "Search",
      },
      {
        title: "Growth Trends",
        description:
          "Understand whether your visibility, engagement, and customer actions are improving over time.",
        icon: "TrendingUp",
      },
    ],
  },
  {
    id: "before-after",
    stepNumber: 4,
    eyebrow: "Before vs After",
    headline: "Turn an Underused Profile Into a Local Growth Asset",
    body: "Many businesses have a Google Business Profile, but few use it strategically. With the right optimization, content, reviews, and tracking, your profile can become one of your strongest lead-generation assets.",
    image: {
      src: "/showcases/gbp/before-after.png",
      alt: "Before and after comparison of Map Pack rankings showing improved local visibility, engagement, and customer actions after GBP optimization",
      width: 1024,
      height: 682,
    },
    imagePosition: "left",
    cards: [
      {
        title: "Better Rankings",
        description:
          "Improve local visibility by strengthening the signals Google uses to evaluate your business.",
        icon: "BarChart3",
      },
      {
        title: "More Engagement",
        description:
          "Increase customer interactions through better photos, reviews, posts, and service information.",
        icon: "Users",
      },
      {
        title: "More Qualified Customers",
        description:
          "Help ready-to-buy customers understand what you offer and contact you faster.",
        icon: "UserPlus",
      },
      {
        title: "Long-Term Local Authority",
        description:
          "Build ongoing trust and visibility with consistent profile activity and reputation growth.",
        icon: "Crown",
      },
    ],
  },
];

export const gbpShowcaseCta = {
  headline: "Ready to Turn Your Business Profile Into a Local Growth Engine?",
  body: "FTW Agency helps businesses improve local visibility, increase trust, and turn map searches into calls, clicks, and customers.",
  primaryLabel: "Schedule Strategy Call",
  primaryHref: "/contact",
  secondaryLabel: "View Related Services",
  secondaryHref: "#related-services",
};
