import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const constructionSeoModules = {
  showcase: {
    eyebrow: "Construction SEO Example",
    title: "See What Local Project Rankings Look Like for a Design-Build Remodeler",
    lede:
      "Homeowners search by project type and city — \"kitchen remodel Portland\" or \"design build contractor near me.\" SEO puts your portfolio in those results before they call your competitor.",
    searchQuery: "kitchen remodel contractor portland or",
    serpResults: [
      {
        title: "Ad · Pacific Ridge Construction",
        url: "pacificridge.example.com",
        description: "Kitchen & bath remodeling in Portland. Free design consultation.",
        isAd: true,
      },
      {
        title: "Northgate Design-Build — Kitchen Remodel Portland, OR",
        url: "northgatedesignbuild.com › kitchen-remodel-portland",
        description:
          "Award-winning design-build remodeler in Portland. 4.9★ rating, portfolio of 80+ projects, transparent pricing. Schedule a walkthrough.",
        isHighlighted: true,
      },
      {
        title: "Best Kitchen Remodeling Contractors in Portland",
        url: "remodelguide.example.com › portland",
        description: "Compare top-rated kitchen remodelers serving Portland and Lake Oswego.",
      },
      {
        title: "How Much Does a Kitchen Remodel Cost in Portland?",
        url: "remodelcosts.example.com › portland",
        description: "Average kitchen remodel costs, timelines, and what affects your budget.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "kitchen remodel portland", target: "Service Page" },
      { query: "design build contractor", target: "Process Page" },
      { query: "whole home renovation portland", target: "Service Page" },
      { query: "adu builder oregon", target: "Addition Page" },
      { query: "northgate builders reviews", target: "Reviews Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Project Rankings",
    title: "Service & City Rankings That Grow Every Month",
    lede:
      "Unlike paid leads, organic visibility for your project types compounds — every service page, city page, and case study earned lowers cost per qualified inquiry.",
    chartValues: [5, 8, 12, 16, 22, 28, 36, 44, 54, 66, 78, 92],
    metrics: [
      { label: "Organic visits / mo", before: "480", after: "2,840" },
      { label: "Ranking keywords", before: "18", after: "156" },
      { label: "Walkthrough requests", before: "8", after: "42" },
    ],
  },

  funnel: {
    eyebrow: "Organic Pipeline",
    title: "Turn Project Rankings Into Signed Contracts",
    lede:
      "Strong SEO captures homeowners at the research stage — comparing remodelers, budgeting projects, and shortlisting contractors all start in search.",
    stages: [
      { label: "Search Impressions", value: 44000 },
      { label: "Organic Clicks", value: 2840 },
      { label: "Portfolio Page Views", value: 1700 },
      { label: "Walkthrough Requests", value: 84 },
      { label: "Signed Projects", value: 23 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking builders do differently",
    lede:
      "Northgate Design-Build wins premium remodel searches with portfolio proof, project-type pages, and geo coverage — not a homepage with a phone number.",
    insights: [
      {
        icon: "HardHat",
        title: "Portfolio pages sell trust",
        body:
          "A $80K kitchen remodel buyer wants finished projects, timelines, and neighborhoods you've worked in — structured gallery pages per project type.",
        takeaway: "Visual proof on dedicated pages is ranking content.",
      },
      {
        icon: "MapPin",
        title: "City pages for local intent",
        body:
          "'Kitchen remodel Portland' needs a city page with local photos, testimonials, and an estimate CTA — not a footer list of suburbs.",
        takeaway: "Every market you serve gets its own page.",
      },
      {
        icon: "Star",
        title: "Proof above the fold",
        body:
          "License numbers, insurance, Houzz/Google reviews, and BBB badges belong on every service page.",
        takeaway: "Weaker work with stronger proof often wins the click.",
      },
      {
        icon: "Gauge",
        title: "Speed and mobile UX",
        body:
          "Slow photo galleries and broken mobile forms kill rankings and leads. Fast loads and one-click estimate requests keep you on page one.",
        takeaway: "Performance is part of premium positioning.",
      },
    ],
    audit: {
      healthBefore: 52,
      healthAfter: 91,
      checks: [
        { label: "Project-type landing pages", status: "pass" },
        { label: "City / metro pages", status: "pass" },
        { label: "Portfolio with optimized images", status: "pass" },
        { label: "LocalBusiness schema", status: "warn" },
        { label: "Mobile estimate form", status: "pass" },
        { label: "Core Web Vitals passing", status: "pass" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible to Page-One for Every Project Type You Want",
    before: {
      label: "Before",
      headline: "Referrals only — zero search presence.",
      items: [
        "No service-specific landing pages",
        "Missing city and neighborhood coverage",
        "Portfolio not indexed or structured",
        "Competitors rank for your project types",
        "Organic drives 8 inquiries per month",
      ],
    },
    after: {
      label: "After",
      headline: "Ranking for every service × city.",
      items: [
        "Dedicated page per remodel type",
        "City pages for every area served",
        "Case studies with schema markup",
        "Page-one for 30+ project terms",
        "Organic drives 42+ walkthrough requests monthly",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
