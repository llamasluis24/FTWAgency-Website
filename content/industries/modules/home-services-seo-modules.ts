import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const homeServicesSeoModules = {
  showcase: {
    eyebrow: "Home Services SEO Example",
    title: "See What Local Search Dominance Looks Like for an HVAC Company",
    lede:
      "Homeowners search by service and city — 'AC repair Riverside' or 'emergency plumber near me.' Local SEO puts your business in those results before they ever open the map.",
    searchQuery: "ac repair riverside ca",
    serpResults: [
      {
        title: "Ad · CoolBreeze HVAC",
        url: "coolbreeze.example.com",
        description: "Same-day AC repair in Riverside. Call for a free estimate.",
        isAd: true,
      },
      {
        title: "Summit Comfort HVAC — AC Repair Riverside, CA",
        url: "summitcomfort.com › ac-repair-riverside",
        description:
          "Licensed HVAC repair in Riverside & Corona. 4.9★ rating, same-day emergency service, upfront pricing. Call (951) 555-0198.",
        isHighlighted: true,
      },
      {
        title: "AC Repair Riverside CA | Top 10 Companies",
        url: "localguide.example.com › hvac",
        description: "Compare the best AC repair companies in Riverside, California.",
      },
      {
        title: "How Much Does AC Repair Cost in Riverside?",
        url: "homeadvisor.example.com › costs",
        description: "Average AC repair costs and what to expect from local contractors.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "ac repair riverside", target: "Service Page" },
      { query: "emergency hvac near me", target: "Emergency Page" },
      { query: "furnace repair corona ca", target: "Service Area Page" },
      { query: "hvac maintenance plan", target: "Maintenance Page" },
      { query: "summit comfort hvac reviews", target: "Reviews Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Local Rankings",
    title: "Local SEO Equity That Grows Every Month",
    lede:
      "Unlike paid leads, organic local rankings build lasting visibility. Every service page, city page, and review earned compounds into lower cost per booked job.",
    chartValues: [8, 12, 16, 22, 28, 34, 42, 52, 64, 78, 94, 112],
    metrics: [
      { label: "Organic visits / mo", before: "840", after: "4,280" },
      { label: "Ranking keywords", before: "38", after: "214" },
      { label: "Calls from organic", before: "18", after: "96" },
    ],
  },

  funnel: {
    eyebrow: "Organic Pipeline",
    title: "Turn Local Search Visibility Into Booked Service Calls",
    lede:
      "Strong local SEO captures homeowners at the moment of need — emergency breakdowns, seasonal tune-ups, and replacement research all start in search.",
    stages: [
      { label: "Local Search Impressions", value: 48000 },
      { label: "Organic Clicks", value: 4280 },
      { label: "Service Page Visits", value: 2140 },
      { label: "Call & Form Leads", value: 186 },
      { label: "Booked Jobs", value: 96 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking trade companies do differently",
    lede:
      "Summit Comfort HVAC ranks by building service pages per city, strong local signals, and a fast mobile site — not by stuffing keywords on one homepage.",
    insights: [
      {
        icon: "MapPin",
        title: "Service + city pages",
        body:
          "Homeowners search 'AC repair Riverside,' not your brand. Every service you offer needs a page for every city you cover.",
        takeaway: "One homepage can't rank for 40+ local terms.",
      },
      {
        icon: "Phone",
        title: "Mobile-ready for emergencies",
        body:
          "Breakdown searches happen on phones, often after hours. Click-to-call, licenses, and reviews need to be visible immediately.",
        takeaway: "No tap-to-call means lost jobs.",
      },
      {
        icon: "Star",
        title: "GBP and website aligned",
        body:
          "Google compares your Business Profile to your site — services, areas served, and contact info must match.",
        takeaway: "Fix GBP and site alignment before chasing new keywords.",
      },
      {
        icon: "Gauge",
        title: "Speed and schema basics",
        body:
          "Slow mobile loads and missing LocalBusiness schema cap rankings even with good reviews.",
        takeaway: "Technical foundation comes before more content.",
      },
    ],
    audit: {
      healthBefore: 58,
      healthAfter: 94,
      checks: [
        { label: "Service pages per trade", status: "pass" },
        { label: "City landing pages", status: "pass" },
        { label: "Click-to-call on mobile", status: "pass" },
        { label: "LocalBusiness schema", status: "pass" },
        { label: "GBP matches site services", status: "warn" },
        { label: "Core Web Vitals passing", status: "pass" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Page Five to Page One for Every Service You Offer",
    before: {
      label: "Before",
      headline: "One homepage, zero city pages.",
      items: [
        "No service-specific landing pages",
        "Missing city and suburb coverage",
        "Thin content, no local schema",
        "Competitors rank for your services",
        "Organic drives 18 calls per month",
      ],
    },
    after: {
      label: "After",
      headline: "Ranking for every service × city.",
      items: [
        "Dedicated page per core service",
        "City pages for every area served",
        "LocalBusiness schema on every page",
        "Page-one rankings for 40+ terms",
        "Organic drives 96+ calls per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
