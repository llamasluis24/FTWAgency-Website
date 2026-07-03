import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const transportationLogisticsSeoModules = {
  showcase: {
    eyebrow: "Transportation & Logistics SEO Example",
    title: "See What Route & Service Rankings Look Like for a Moving Company",
    lede:
      "Shippers and homeowners search by lane and urgency — \"long distance movers Denver\" or \"same-day freight quote.\" SEO puts your operation in those results before they call your competitor.",
    searchQuery: "long distance movers denver co",
    serpResults: [
      {
        title: "Ad · QuickHaul Moving",
        url: "quickhaul.example.com",
        description: "Licensed long-distance movers in Denver. Free instant quote online.",
        isAd: true,
      },
      {
        title: "Summit Freight & Moving — Long Distance Movers Denver, CO",
        url: "summitfreight.com › long-distance-movers-denver",
        description:
          "Full-service moving & freight in Denver & Front Range. 4.8★ rating, upfront pricing, real-time tracking. Get a quote in 60 seconds.",
        isHighlighted: true,
      },
      {
        title: "Best Long Distance Moving Companies in Denver",
        url: "movingguide.example.com › denver",
        description: "Compare top-rated long-distance movers serving Denver and Colorado.",
      },
      {
        title: "How Much Does a Long Distance Move Cost from Denver?",
        url: "movecosts.example.com › denver",
        description: "Average interstate move pricing, timelines, and what affects your quote.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "long distance movers denver", target: "Service Page" },
      { query: "interstate freight shipping", target: "Freight Page" },
      { query: "office relocation denver", target: "Commercial Page" },
      { query: "same day courier colorado", target: "Express Page" },
      { query: "summit freight moving reviews", target: "Reviews Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Search Equity",
    title: "Lane & Service Rankings That Grow Every Month",
    lede:
      "Unlike paid leads, organic visibility for your routes and services compounds — every lane page, capability page, and review earned lowers cost per booked load.",
    chartValues: [6, 9, 14, 18, 24, 31, 38, 48, 58, 72, 86, 104],
    metrics: [
      { label: "Organic visits / mo", before: "620", after: "3,840" },
      { label: "Ranking keywords", before: "24", after: "186" },
      { label: "Quote requests from organic", before: "14", after: "78" },
    ],
  },

  funnel: {
    eyebrow: "Organic Pipeline",
    title: "Turn Route Rankings Into Booked Loads",
    lede:
      "Strong SEO captures shippers and movers at the moment of need — lane research, urgent freight, and relocation planning all start in search.",
    stages: [
      { label: "Search Impressions", value: 52000 },
      { label: "Organic Clicks", value: 3840 },
      { label: "Quote Page Visits", value: 1920 },
      { label: "Quote Requests", value: 156 },
      { label: "Booked Jobs", value: 78 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking movers and carriers do differently",
    lede:
      "Summit Freight & Moving wins quote requests with route pages, fleet proof, and mobile quote CTAs — not one homepage with a phone number.",
    insights: [
      {
        icon: "Truck",
        title: "Route and service-area pages",
        body:
          "Customers search 'movers Denver to Phoenix' or 'freight shipping LA' — dedicated pages per lane beat a generic services list.",
        takeaway: "Every regular route deserves its own ranking target.",
      },
      {
        icon: "ShieldCheck",
        title: "Credentials on every page",
        body:
          "DOT numbers, MC authority, insurance limits, and fleet photos belong visible — high-stakes moves demand proof before the first quote.",
        takeaway: "Unverifiable movers rank poorly and convert worse.",
      },
      {
        icon: "Star",
        title: "Reviews feed maps and clicks",
        body:
          "Systematic review collection after jobs drives map pack visibility and organic CTR.",
        takeaway: "Great trucks without reviews lose to average fleets with 200+ reviews.",
      },
      {
        icon: "Phone",
        title: "Mobile quote path",
        body:
          "Most logistics searches are urgent and mobile. Click-to-call and quick quote forms above the fold win the click.",
        takeaway: "Ranking without frictionless mobile quotes wastes the traffic.",
      },
    ],
    audit: {
      healthBefore: 57,
      healthAfter: 89,
      checks: [
        { label: "Route / service-area pages", status: "pass" },
        { label: "DOT & MC credentials", status: "pass" },
        { label: "LocalBusiness schema", status: "pass" },
        { label: "Click-to-call on mobile", status: "pass" },
        { label: "Quote request form", status: "warn" },
        { label: "Core Web Vitals passing", status: "pass" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible Lanes to Page-One for Every Route You Serve",
    before: {
      label: "Before",
      headline: "One homepage, zero lane pages.",
      items: [
        "No dedicated pages per route or service",
        "Missing city-pair and capability coverage",
        "Thin content, no logistics schema",
        "Brokers rank for your lanes",
        "Organic drives 14 quotes per month",
      ],
    },
    after: {
      label: "After",
      headline: "Ranking for every lane × service.",
      items: [
        "Dedicated page per core lane and service",
        "City-pair pages for every corridor served",
        "LocalBusiness + Service schema sitewide",
        "Page-one rankings for 35+ freight terms",
        "Organic drives 78+ quote requests monthly",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
