import type { KeywordNode, SerpResult } from "@/content/seo-showcase";
import type {
  TechModuleBeforeAfter,
  TechModuleFunnel,
} from "./technology-shared-types";
import type { IndustryModuleSeoEducation } from "./modules/types";

/** Editable copy + defaults for /industries/technology/seo/ modules only. */

export const technologySeoModules = {
  showcase: {
    eyebrow: "Tech SEO Example",
    title: "See What Category-Dominating SEO Looks Like for a Software Company",
    lede:
      "Technology buyers search with high intent — comparing categories, evaluating features, and shortlisting vendors. SEO puts your product in those conversations before paid ads ever enter the picture.",
    searchQuery: "best workflow automation software",
    serpResults: [
      {
        title: "Ad · AutomatePro Suite",
        url: "automatepro.example.com",
        description: "Enterprise workflow automation. Request a demo today.",
        isAd: true,
      },
      {
        title: "Ad · FlowStack",
        url: "flowstack.example.com",
        description: "Automate ops workflows in days, not quarters.",
        isAd: true,
      },
      {
        title: "ClearPath — Workflow Automation Platform for Modern Ops Teams",
        url: "clearpath.io › workflow-automation",
        description:
          "Unify workflows, reporting, and customer data. SOC 2 certified. 500+ teams. Compare features, pricing, and integrations.",
        isHighlighted: true,
      },
      {
        title: "Top 10 Workflow Automation Tools (2026)",
        url: "saasreview.example.com › lists",
        description: "A roundup of the best workflow automation platforms for growing teams.",
      },
      {
        title: "Zapier vs Custom Workflow Software",
        url: "devblog.example.com › compare",
        description: "When off-the-shelf automation breaks down and what to use instead.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "workflow automation software", target: "Category Page" },
      { query: "ops automation platform", target: "Product Page" },
      { query: "clearpath vs competitor", target: "Comparison Page" },
      { query: "workflow automation pricing", target: "Pricing Page" },
      { query: "how to automate business workflows", target: "Guide / Blog" },
    ] satisfies KeywordNode[],
  },

  funnel: {
    eyebrow: "Organic Pipeline",
    title: "Turn Search Visibility Into Qualified Product Demand",
    lede:
      "Strong technology SEO does not stop at traffic. It maps category searches to the pages, proof, and CTAs that convert researchers into trials and demos.",
    stages: [
      { label: "Search Impressions", value: 85000 },
      { label: "Organic Clicks", value: 6200 },
      { label: "Product Page Views", value: 3100 },
      { label: "Demo Requests", value: 420 },
      { label: "New Customers", value: 38 },
    ],
  } satisfies TechModuleFunnel,

  growth: {
    eyebrow: "Compounding Results",
    title: "SEO Equity That Grows Month Over Month",
    lede:
      "Unlike paid channels, organic rankings build lasting demand. Every page indexed, every keyword won, and every backlink earned compounds into lower CAC over time.",
    chartValues: [12, 18, 24, 31, 38, 52, 68, 84, 102, 128, 156, 190],
    metrics: [
      { label: "Organic traffic", before: "2.1K", after: "18.4K" },
      { label: "Ranking keywords", before: "84", after: "612" },
      { label: "Demo leads / mo", before: "22", after: "148" },
    ],
  },

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking software companies do differently",
    lede:
      "ClearPath mapped every search intent to the right page type and built the technical foundation SaaS buyers expect before they book a demo.",
    insights: [
      {
        icon: "Layers",
        title: "Category pages capture buyers",
        body:
          "Prospects search 'workflow automation software' before they know your brand. A dedicated category page with proof and demo CTAs beats a generic homepage.",
        takeaway: "Own the category search first — brand follows pipeline.",
      },
      {
        icon: "Target",
        title: "Comparison pages close the gap",
        body:
          "Buyers search '[you] vs [competitor].' If you don't publish honest comparisons, review sites define your narrative.",
        takeaway: "Not in the conversation, not on the vendor list.",
      },
      {
        icon: "Code2",
        title: "Technical SEO for SaaS",
        body:
          "JS-heavy sites often hide product pages from crawlers or ship duplicate meta. Clean indexation matters as much as content.",
        takeaway: "Fix crawlability before scaling content.",
      },
      {
        icon: "LineChart",
        title: "Bottom- and top-funnel balance",
        body:
          "Pricing and integration pages capture demo-ready traffic. Guides build authority over time. You need both.",
        takeaway: "Every search should land on a page built to convert or nurture.",
      },
    ],
    audit: {
      healthBefore: 62,
      healthAfter: 96,
      checks: [
        { label: "Category & product pages indexed", status: "pass" },
        { label: "Comparison pages", status: "pass" },
        { label: "Clean canonical & meta", status: "pass" },
        { label: "XML sitemap submitted", status: "pass" },
        { label: "Core Web Vitals passing", status: "warn" },
        { label: "SoftwareApplication schema", status: "pass" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible in Search to Category Authority",
    before: {
      label: "Before",
      headline: "Buried on page three.",
      items: [
        "No category page strategy",
        "Thin product content",
        "Missing technical SEO",
        "Competitors own comparisons",
        "Zero organic pipeline",
      ],
    },
    after: {
      label: "After",
      headline: "Own the searches that drive pipeline.",
      items: [
        "Page-one category terms",
        "Intent-mapped content hub",
        "Clean technical foundation",
        "Comparison & use-case pages",
        "Compounding demo flow",
      ],
    },
  } satisfies TechModuleBeforeAfter,
} as const;

export type TechnologySeoModules = typeof technologySeoModules;
