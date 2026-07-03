import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const startupsSeoModules = {
  showcase: {
    eyebrow: "Startup SEO Example",
    title: "See What Early Category Rankings Look Like for a Seed-Stage SaaS",
    lede:
      "Startups that plant organic flags early get a 6-month head start on incumbents. Category SEO puts LaunchLoop in the searches buyers run when evaluating async collaboration tools — before ad budgets scale.",
    searchQuery: "best async collaboration tool for remote teams",
    serpResults: [
      {
        title: "Ad · Notion — All-in-one workspace",
        url: "notion.so",
        description: "Docs, wikis, and project management in one place. Try free.",
        isAd: true,
      },
      {
        title: "LaunchLoop — Async Collaboration for Remote Startup Teams",
        url: "launchloop.io › product",
        description:
          "Built for startup teams that ship async-first. 4.9★ on Product Hunt · Free early access · No meeting overload · Integrates with Slack & Linear.",
        isHighlighted: true,
      },
      {
        title: "10 Best Async Collaboration Tools in 2026 — G2",
        url: "g2.com › categories › async-collaboration",
        description: "Compare top async tools by reviews, features, and pricing.",
      },
      {
        title: "How Remote Startups Run Without Daily Standups",
        url: "launchloop.io › blog › async-without-standups",
        description: "A practical guide to async workflows for distributed startup teams.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "async collaboration tool startup", target: "Product Page" },
      { query: "remote team workflow software", target: "Use Cases Page" },
      { query: "launchloop vs notion", target: "Comparison Page" },
      { query: "async standup alternative", target: "Blog Guide" },
      { query: "launchloop product hunt", target: "Launch Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Early Rankings",
    title: "Category Visibility That Grows While You Build Product",
    lede:
      "Unlike paid ads that stop when spend stops, early SEO compounds — every guide, comparison page, and launch asset earned lowers cost per signup over time.",
    chartValues: [2, 4, 8, 14, 22, 32, 46, 62, 82, 104, 128, 156],
    metrics: [
      { label: "Organic visits / mo", before: "180", after: "2,240" },
      { label: "Ranking keywords", before: "6", after: "94" },
      { label: "Waitlist signups", before: "24", after: "482" },
    ],
  },

  funnel: {
    eyebrow: "Organic Launch Pipeline",
    title: "Turn Category Rankings Into Waitlist and Demo Pipeline",
    lede:
      "Strong SEO captures founders and ops leads at the research stage — comparing tools, reading reviews, and shortlisting vendors all start in search.",
    stages: [
      { label: "Search Impressions", value: 38000 },
      { label: "Organic Clicks", value: 2240 },
      { label: "Product Page Views", value: 1340 },
      { label: "Waitlist Signups", value: 482 },
      { label: "Paying Customers", value: 24 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What early-stage SaaS sites get right",
    lede:
      "LaunchLoop planted category flags early — bottom-funnel pages for demo-ready searches and lean content that compounds while the team ships product.",
    insights: [
      {
        icon: "Rocket",
        title: "Win long-tail first",
        body:
          "You won't outrank incumbents on broad terms overnight. Own 'async collaboration for startups' before chasing 'project management.'",
        takeaway: "Pick winnable terms; expand as authority grows.",
      },
      {
        icon: "Target",
        title: "Comparison pages matter",
        body:
          "Prospects search '[you] vs [incumbent].' Honest comparison content captures evaluation traffic G2 would take.",
        takeaway: "Not in the comparison, not on the shortlist.",
      },
      {
        icon: "LineChart",
        title: "Lean beats bloated",
        body:
          "Five strong pages — product, pricing, use case, one guide — beat a thin site with dozens of duplicate posts.",
        takeaway: "Quality and indexation beat volume on a tight runway.",
      },
      {
        icon: "Zap",
        title: "Technical hygiene from day one",
        body:
          "Canonical tags, sitemaps, and clean meta are cheaper at launch than fixing crawl issues after investors ask about organic.",
        takeaway: "Foundation is one-time; organic compounds.",
      },
    ],
    audit: {
      healthBefore: 64,
      healthAfter: 94,
      checks: [
        { label: "Product & pricing indexed", status: "pass" },
        { label: "Comparison / alternative page", status: "pass" },
        { label: "Clean meta titles & descriptions", status: "pass" },
        { label: "XML sitemap submitted", status: "pass" },
        { label: "Demo CTA on mobile", status: "pass" },
        { label: "Core Web Vitals passing", status: "warn" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Zero Organic Presence to Category Contender",
    before: {
      label: "Before",
      headline: "Invisible in every category search.",
      items: [
        "No product or comparison pages indexed",
        "Competitors owned every category term",
        "Blog never launched",
        "24 organic signups per month",
        "100% dependent on Product Hunt + ads",
      ],
    },
    after: {
      label: "After",
      headline: "Page-one for core category terms.",
      items: [
        "Product, use case, and comparison pages live",
        "Authority guides that earn links from G2 and PH",
        "Structured schema across the site",
        "482+ waitlist signups from organic",
        "41% of pipeline now from search + AI",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
