import type { AioLlmSlide } from "@/content/aio-demo";
import type {
  TechModuleBeforeAfter,
  TechModuleFunnel,
  TechModuleRoiCalculator,
} from "./technology-shared-types";

/** Editable copy + defaults for /industries/technology/aio/ modules only. */

export const technologyAioModules = {
  showcase: {
    eyebrow: "AI Discovery Example",
    title: "See How Software Buyers Discover Products Through AI Assistants",
    lede:
      "Technology buyers increasingly ask ChatGPT, Claude, Gemini, and Perplexity which tools to shortlist. AIO positions your product to appear in those recommendations — before prospects ever hit Google.",
    slides: [
      {
        id: "chatgpt",
        platform: "ChatGPT",
        prompt: "What's the best workflow automation software for a growing SaaS team?",
        theme: "chatgpt",
        accent: "#10a37f",
        recommendations: [
          {
            name: "ClearPath",
            highlight: true,
            detail:
              "Ops automation platform built for modern SaaS teams — strong G2 reviews, SOC 2 Type II, native CRM integrations, and transparent pricing from $149/seat.",
          },
          {
            name: "AutomatePro Suite",
            detail: "Enterprise workflow suite with long implementation cycles and heavy services fees.",
          },
          {
            name: "FlowStack",
            detail: "No-code automation for small teams — limited reporting and enterprise controls.",
          },
        ],
        whyAppeared: [
          { label: "Structured product entity data" },
          { label: "Comparison & category pages" },
          { label: "Third-party review footprint" },
          { label: "Citable feature documentation" },
        ],
        explanation:
          "AIO structures your product so AI assistants can confidently recommend you when buyers ask category-level software questions.",
      },
      {
        id: "perplexity",
        platform: "Perplexity",
        prompt: "Compare the top ops automation platforms for B2B SaaS companies",
        theme: "perplexity",
        accent: "#20b8cd",
        recommendations: [
          {
            name: "ClearPath",
            highlight: true,
            detail:
              "ClearPath ranks highly for mid-market SaaS — cited across G2, product docs, and comparison content for workflow automation, integrations, and onboarding speed.",
          },
          {
            name: "Zapier",
            detail: "General automation connector — less depth for ops reporting and team workflows.",
          },
          {
            name: "Make (Integromat)",
            detail: "Visual automation builder suited to lighter use cases and smaller teams.",
          },
        ],
        citations: [
          { label: "ClearPath — Workflow Automation Platform", source: "clearpath.io" },
          { label: "G2 Category Leader — Workflow Automation", source: "g2.com" },
          { label: "SaaS Ops Stack Comparison 2026", source: "saasreview.com" },
          { label: "B2B Automation Buyer's Guide", source: "techcrunch.com" },
        ],
        explanation:
          "Perplexity always shows sources — AIO builds the citation footprint that earns your product those reference slots.",
      },
      {
        id: "claude",
        platform: "Claude",
        prompt: "Which software should I use to automate customer onboarding for a tech startup?",
        theme: "claude",
        accent: "#d97757",
        recommendations: [
          {
            name: "ClearPath",
            highlight: true,
            detail:
              "I'd recommend ClearPath for startups that need onboarding workflows tied to CRM and billing — clear use-case pages, integration docs, and verifiable customer outcomes.",
          },
          {
            name: "HubSpot Operations Hub",
            detail: "CRM-native automation — better when you're already all-in on HubSpot.",
          },
          {
            name: "Tray.ai",
            detail: "Enterprise iPaaS with technical setup requirements and longer time-to-value.",
          },
        ],
        explanation:
          "Claude favors authoritative, specific answers — entity clarity and citable product content make your brand the obvious recommendation.",
      },
      {
        id: "gemini",
        platform: "Gemini",
        prompt: "Best B2B automation tools for software companies in 2026",
        theme: "gemini",
        accent: "#4285f4",
        recommendations: [
          {
            name: "ClearPath",
            highlight: true,
            detail:
              "Frequently recommended for B2B SaaS ops — strong entity signals, structured schema, and consistent brand mentions across directories and review sites.",
          },
          {
            name: "Workato",
            detail: "Enterprise integration platform with higher complexity and cost.",
          },
          {
            name: "n8n",
            detail: "Developer-friendly open-source automation — self-hosted option for technical teams.",
          },
        ],
        explanation:
          "Gemini pulls from Google's index and entity graph — AIO aligns your product data across the sources AI models trust.",
      },
    ] satisfies AioLlmSlide[],
  },

  funnel: {
    eyebrow: "AI Discovery Pipeline",
    title: "Turn AI Recommendations Into Product Pipeline",
    lede:
      "When your product appears in AI answers, buyers arrive with context and intent. AIO maps entity optimization to the demo and trial flow that converts that trust into revenue.",
    stages: [
      { label: "Category AI Queries", value: 42000 },
      { label: "Brand Mentions", value: 2800 },
      { label: "AI Referral Visits", value: 940 },
      { label: "Demo Requests", value: 186 },
      { label: "New Customers", value: 24 },
    ],
  } satisfies TechModuleFunnel,

  visibility: {
    eyebrow: "AI Visibility Tracking",
    title: "Monitor How AI Platforms Reference Your Product",
    lede:
      "Track mentions, citations, and referral traffic across the AI assistants your buyers use during vendor research — and see which product pages AI models cite most.",
    metrics: [
      { label: "ChatGPT Mentions", value: "86", change: "+31" },
      { label: "Perplexity Citations", value: "64", change: "+18" },
      { label: "Gemini References", value: "42", change: "+12" },
      { label: "Claude References", value: "38", change: "+9" },
      { label: "AI Referral Traffic", value: "+168%", change: "vs last quarter", accent: true },
      { label: "Top Cited Page", value: "Product Overview", change: "52 citations" },
    ],
    mentionsTrend: [6, 10, 14, 18, 24, 32, 38, 46, 58, 68, 78, 86],
    citationTrend: [4, 8, 12, 16, 22, 28, 34, 42, 48, 54, 60, 64],
    referralTrend: [12, 18, 24, 32, 42, 58, 72, 88, 108, 128, 148, 168],
    platformBreakdown: [
      { name: "ChatGPT", pct: 34 },
      { name: "Perplexity", pct: 26 },
      { name: "Gemini", pct: 18 },
      { name: "Claude", pct: 14 },
      { name: "Copilot", pct: 6 },
      { name: "Grok", pct: 2 },
    ],
    topContent: [
      { page: "Workflow Automation Platform", citations: 52 },
      { page: "ClearPath vs Competitors", citations: 38 },
      { page: "Integrations Hub", citations: 29 },
      { page: "Pricing & Plans", citations: 22 },
      { page: "Customer Case Studies", citations: 16 },
    ],
  },

  roiCalculator: {
    eyebrow: "AIO Impact Calculator",
    title: "Estimate What AI Visibility Could Add to Pipeline",
    lede:
      "AI-referred buyers often arrive further along in their evaluation. Even a small lift in AI-driven demo volume can meaningfully impact revenue for SaaS companies.",
    defaults: {
      monthlyVisitors: 300,
      currentRate: 2.0,
      improvedRate: 3.0,
      averageValue: 5500,
    },
    labels: {
      monthlyVisitors: "Monthly AI-referred visitors",
      currentRate: "Current demo conversion rate (%)",
      improvedRate: "Improved demo conversion rate (%)",
      averageValue: "Average customer value ($)",
      currentOpportunities: "Current monthly demos",
      improvedOpportunities: "Improved monthly demos",
      additionalOpportunities: "Additional demos",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies TechModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible in AI to Category Recommendation",
    before: {
      label: "Before",
      headline: "AI recommends your competitors.",
      items: [
        "No entity optimization",
        "Missing structured product data",
        "Zero third-party citations",
        "Competitors own comparisons",
        "No AI referral traffic",
      ],
    },
    after: {
      label: "After",
      headline: "Your product gets recommended.",
      items: [
        "Structured entity footprint",
        "Citable product & use-case pages",
        "Review & directory presence",
        "Comparison content indexed",
        "Compounding AI referrals",
      ],
    },
  } satisfies TechModuleBeforeAfter,
} as const;

export type TechnologyAioModules = typeof technologyAioModules;
