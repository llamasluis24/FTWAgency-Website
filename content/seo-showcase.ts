export type SeoVisualType = "serp" | "audit" | "keywords" | "dashboard";

export interface SeoFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface SerpResult {
  title: string;
  url: string;
  description: string;
  isAd?: boolean;
  isHighlighted?: boolean;
}

export interface AuditCheck {
  label: string;
  status: "pass" | "warn" | "fail";
}

export interface KeywordNode {
  query: string;
  target: string;
}

export interface GrowthMetric {
  label: string;
  before: string;
  after: string;
}

export interface SeoShowcaseRow {
  id: string;
  stepNumber: 1 | 2 | 3 | 4;
  eyebrow: string;
  headline: string;
  body: string;
  visualType: SeoVisualType;
  imagePosition: "left" | "right";
  cards: SeoFeatureCard[];
  searchQuery?: string;
  serpResults?: SerpResult[];
  auditChecks?: AuditCheck[];
  healthBefore?: number;
  healthAfter?: number;
  keywordNodes?: KeywordNode[];
  growthMetrics?: GrowthMetric[];
  chartValues?: number[];
}

export const seoShowcaseIntro = {
  eyebrow: "SEO in Action",
  headline: "See How Search Becomes a Predictable Lead Channel",
  subheadline:
    "SEO is not just rankings on a report. It is the system that puts your business in front of customers the moment they search for what you sell — and turns that visibility into traffic, leads, and revenue.",
};

export const seoShowcaseRows: SeoShowcaseRow[] = [
  {
    id: "search",
    stepNumber: 1,
    eyebrow: "How Customers Search",
    headline: "Your Customers Are Searching Right Now",
    body: "When someone needs a product or service, they search Google. The businesses at the top of page one get the clicks, the calls, and the customers. SEO is how you earn those top positions.",
    visualType: "serp",
    imagePosition: "right",
    cards: [
      {
        title: "Search Intent",
        description:
          "Customers search with specific intent — 'near me,' 'best,' 'cost,' or 'how to hire.' SEO targets the searches that lead to sales.",
        icon: "Search",
      },
      {
        title: "Page-One Visibility",
        description:
          "Over 90% of clicks go to the first page of results. If you're not there, you're invisible to ready-to-buy customers.",
        icon: "Eye",
      },
      {
        title: "Trust Signal",
        description:
          "Top rankings signal authority. Customers assume the #1 result is the best choice — before they ever visit your site.",
        icon: "ShieldCheck",
      },
      {
        title: "Competitors Below You",
        description:
          "Every position you climb is a position your competitor loses. SEO is a zero-sum game for high-intent searches.",
        icon: "TrendingUp",
      },
    ],
    searchQuery: "marketing agency riverside ca",
    serpResults: [
      {
        title: "Ad · Riverside Marketing Co.",
        url: "riversidemarketing.example.com",
        description: "Full-service marketing for local businesses. Get a free quote today.",
        isAd: true,
      },
      {
        title: "Ad · Growth Partners LLC",
        url: "growthpartners.example.com",
        description: "Digital marketing and advertising services in Riverside County.",
        isAd: true,
      },
      {
        title: "FTW Agency — Growth Systems for Local Businesses",
        url: "ftwagency.com › services",
        description:
          "SEO, paid ads, automation, and custom software built to generate leads and scale Riverside businesses.",
        isHighlighted: true,
      },
      {
        title: "Riverside Digital Solutions",
        url: "riversidedigital.example.com",
        description: "Website design and online marketing for small businesses.",
      },
      {
        title: "Local Marketing Group",
        url: "localmarketing.example.com",
        description: "Social media and SEO services for Inland Empire businesses.",
      },
    ],
  },
  {
    id: "technical",
    stepNumber: 2,
    eyebrow: "Technical Foundation",
    headline: "The Invisible Work That Unlocks Rankings",
    body: "Google can't rank what it can't crawl, understand, or load quickly. Technical SEO fixes the foundation — site speed, structure, schema, and mobile experience — so your content can actually compete.",
    visualType: "audit",
    imagePosition: "left",
    cards: [
      {
        title: "Site Speed",
        description:
          "Core Web Vitals measure how fast your site loads and responds. Slow sites rank lower and lose customers who won't wait.",
        icon: "Gauge",
      },
      {
        title: "Crawl & Index",
        description:
          "Search engines need to find and understand every page. Sitemaps, clean URLs, and proper indexing ensure nothing is missed.",
        icon: "Globe",
      },
      {
        title: "Schema Markup",
        description:
          "Structured data helps Google understand your business, services, reviews, and FAQs — often earning rich results in search.",
        icon: "Layers",
      },
      {
        title: "Mobile Experience",
        description:
          "Most searches happen on phones. A mobile-first, fast, readable site is non-negotiable for modern rankings.",
        icon: "Smartphone",
      },
    ],
    healthBefore: 62,
    healthAfter: 94,
    auditChecks: [
      { label: "XML Sitemap submitted", status: "pass" },
      { label: "Schema markup implemented", status: "pass" },
      { label: "Mobile-friendly design", status: "pass" },
      { label: "All pages indexed", status: "pass" },
      { label: "Core Web Vitals passing", status: "pass" },
    ],
  },
  {
    id: "keywords",
    stepNumber: 3,
    eyebrow: "Keywords & Content",
    headline: "The Right Pages for the Right Searches",
    body: "Every search query represents a customer need. We map buyer-intent keywords to dedicated pages — services, locations, industries, and content — so you rank for the searches that actually drive revenue.",
    visualType: "keywords",
    imagePosition: "right",
    cards: [
      {
        title: "Buyer-Intent Keywords",
        description:
          "We target searches where customers are ready to act — not just curious. Every keyword is chosen for revenue potential.",
        icon: "Target",
      },
      {
        title: "Service Page Targeting",
        description:
          "Each service gets a dedicated, optimized page built to rank for the terms customers use when they're ready to buy.",
        icon: "Crosshair",
      },
      {
        title: "Location & Industry Pages",
        description:
          "Programmatic page architecture lets you dominate local and niche searches competitors can't match at scale.",
        icon: "MapPin",
      },
      {
        title: "Content That Converts",
        description:
          "Blog and resource content builds authority and captures early-stage researchers — then routes them into your pipeline.",
        icon: "MessageSquare",
      },
    ],
    keywordNodes: [
      { query: "hvac repair near me", target: "Service Page" },
      { query: "best marketing agency riverside", target: "Location Page" },
      { query: "how to choose a web designer", target: "Blog / Guide" },
      { query: "construction seo services", target: "Industry Page" },
      { query: "google business profile optimization", target: "Service Page" },
    ],
  },
  {
    id: "growth",
    stepNumber: 4,
    eyebrow: "Measurable Growth",
    headline: "From Rankings to Revenue You Can Track",
    body: "We don't report vanity metrics. Every ranking, traffic gain, and keyword movement is tied to leads and pipeline — so you see exactly what SEO earns your business month over month.",
    visualType: "dashboard",
    imagePosition: "left",
    cards: [
      {
        title: "Ranking Growth",
        description:
          "Track keyword positions climbing over time as your authority and content compound.",
        icon: "TrendingUp",
      },
      {
        title: "Organic Traffic",
        description:
          "See qualified visitors arriving from search — the audience you didn't pay to reach.",
        icon: "Users",
      },
      {
        title: "Lead Attribution",
        description:
          "Connect organic sessions to form fills, calls, and booked appointments in your CRM.",
        icon: "Phone",
      },
      {
        title: "Revenue Impact",
        description:
          "Measure the pipeline and revenue SEO produces — not just clicks and impressions.",
        icon: "DollarSign",
      },
    ],
    chartValues: [12, 18, 24, 31, 38, 47, 58, 64, 72, 81, 88, 94],
    growthMetrics: [
      { label: "Organic Traffic", before: "820/mo", after: "4,200/mo" },
      { label: "Leads from SEO", before: "6/mo", after: "34/mo" },
      { label: "Page-1 Keywords", before: "8", after: "47" },
    ],
  },
];

export const seoShowcaseCta = {
  headline: "Ready to Turn Search Into a Predictable Lead Channel?",
  body: "FTW Agency builds SEO systems tied to pipeline and revenue — not just rankings on a monthly report. Let's map the search opportunity in your market.",
  primaryLabel: "Schedule Strategy Call",
  primaryHref: "/contact",
  secondaryLabel: "View Related Services",
  secondaryHref: "#related-services",
};
