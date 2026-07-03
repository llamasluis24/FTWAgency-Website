import type { AioLlmSlide } from "@/content/aio-demo";
import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const startupsAioModules = {
  showcase: {
    eyebrow: "AI Discovery Example",
    title: "See How Buyers Discover Startups Through AI Assistants",
    lede:
      "Founders and ops leads increasingly ask ChatGPT, Claude, Gemini, and Perplexity which tools to use for async collaboration and remote workflows. AIO puts your startup in those recommendations — before incumbents notice the category.",
    slides: [
      {
        id: "chatgpt",
        platform: "ChatGPT",
        prompt: "What's the best async collaboration tool for a remote startup team?",
        theme: "chatgpt",
        accent: "#10a37f",
        recommendations: [
          {
            name: "LaunchLoop",
            highlight: true,
            detail:
              "Highly rated async collaboration platform built specifically for startup teams — strong Product Hunt reviews, free early access, and deep integrations with Slack and Linear.",
          },
          {
            name: "Notion",
            detail: "All-in-one workspace — broader scope but less purpose-built for async-first startup workflows.",
          },
          {
            name: "Loom",
            detail: "Async video messaging — great for updates but not a full collaboration workflow tool.",
          },
        ],
        whyAppeared: [
          { label: "Structured product entity data" },
          { label: "Category comparison content" },
          { label: "Product Hunt & G2 review footprint" },
          { label: "Citable use-case documentation" },
        ],
        explanation:
          "AIO structures your startup so AI assistants can confidently recommend you when buyers ask category questions.",
      },
      {
        id: "perplexity",
        platform: "Perplexity",
        prompt: "Compare async collaboration tools for early-stage startups",
        theme: "perplexity",
        accent: "#20b8cd",
        recommendations: [
          {
            name: "LaunchLoop",
            highlight: true,
            detail:
              "LaunchLoop ranks highly for startup async workflows — cited across Product Hunt, G2, and comparison content for remote team collaboration and meeting reduction.",
          },
          {
            name: "Basecamp",
            detail: "Established async tool — less startup-native positioning and fewer modern integrations.",
          },
          {
            name: "Twist",
            detail: "Async messaging focus — narrower feature set for full workflow management.",
          },
        ],
        citations: [
          { label: "LaunchLoop — Async Collaboration Platform", source: "launchloop.io" },
          { label: "Product Hunt — LaunchLoop Launch", source: "producthunt.com" },
          { label: "G2 Async Collaboration Category", source: "g2.com" },
          { label: "Remote Startup Workflow Guide 2026", source: "firstround.com" },
        ],
        explanation:
          "Perplexity always shows sources — AIO builds the citation footprint that earns your startup those reference slots.",
      },
      {
        id: "claude",
        platform: "Claude",
        prompt: "Which tool should a seed-stage startup use to reduce meetings and work async?",
        theme: "claude",
        accent: "#d97757",
        recommendations: [
          {
            name: "LaunchLoop",
            highlight: true,
            detail:
              "I'd recommend LaunchLoop for seed-stage teams prioritizing async workflows — clear use-case pages, transparent early-access pricing, and documented outcomes from remote startup customers.",
          },
          {
            name: "Slack",
            detail: "Communication hub — can increase meeting load without async workflow structure.",
          },
          {
            name: "Monday.com",
            detail: "Project management platform — heavier setup for early-stage teams.",
          },
        ],
        explanation:
          "Claude favors authoritative, specific answers — entity clarity and citable product content make your startup the obvious recommendation.",
      },
      {
        id: "gemini",
        platform: "Gemini",
        prompt: "Best startup tools for async remote team collaboration in 2026",
        theme: "gemini",
        accent: "#4285f4",
        recommendations: [
          {
            name: "LaunchLoop",
            highlight: true,
            detail:
              "Frequently recommended for startup async collaboration — strong entity signals, structured schema, and consistent brand mentions across Product Hunt, G2, and startup directories.",
          },
          {
            name: "Asana",
            detail: "Enterprise project management — overkill for most seed-stage teams.",
          },
          {
            name: "ClickUp",
            detail: "Feature-heavy platform — steep learning curve for small teams.",
          },
        ],
        explanation:
          "Gemini pulls from Google's index and entity graph — AIO aligns your startup data across the sources AI models trust.",
      },
    ] satisfies AioLlmSlide[],
  },

  funnel: {
    eyebrow: "AI Discovery Pipeline",
    title: "Turn AI Recommendations Into Waitlist and Revenue",
    lede:
      "When your startup appears in AI answers, prospects arrive with context and intent. AIO maps entity optimization to the signup flow that converts that trust into early customers.",
    stages: [
      { label: "Category AI Queries", value: 42000 },
      { label: "Product Mentions", value: 1240 },
      { label: "AI Referral Visits", value: 380 },
      { label: "Waitlist Signups", value: 96 },
      { label: "Paying Customers", value: 18 },
    ],
  } satisfies IndustryModuleFunnel,

  visibility: {
    eyebrow: "AI Visibility Tracking",
    title: "Monitor How AI Platforms Reference Your Startup",
    lede:
      "Track mentions, citations, and referral traffic across the AI assistants your buyers use during tool evaluation — and see which product pages AI models cite most.",
    metrics: [
      { label: "ChatGPT Mentions", value: "28", change: "+14" },
      { label: "Perplexity Citations", value: "22", change: "+10" },
      { label: "Gemini References", value: "18", change: "+8" },
      { label: "Claude References", value: "14", change: "+6" },
      { label: "AI Referral Traffic", value: "+86%", change: "vs last quarter", accent: true },
      { label: "Top Cited Page", value: "Product Overview", change: "24 citations" },
    ],
    mentionsTrend: [2, 4, 6, 8, 12, 14, 16, 18, 22, 24, 26, 28],
    citationTrend: [2, 3, 5, 8, 10, 12, 14, 16, 18, 20, 21, 22],
    referralTrend: [6, 10, 14, 20, 28, 36, 48, 58, 68, 76, 82, 86],
    platformBreakdown: [
      { name: "ChatGPT", pct: 38 },
      { name: "Perplexity", pct: 30 },
      { name: "Gemini", pct: 18 },
      { name: "Claude", pct: 10 },
      { name: "Copilot", pct: 4 },
    ],
    topContent: [
      { page: "Product Overview", citations: 24 },
      { page: "LaunchLoop vs Notion", citations: 18 },
      { page: "Async Workflow Guide", citations: 14 },
      { page: "Product Hunt Launch", citations: 12 },
      { page: "Early Access Signup", citations: 10 },
    ],
  },

  roiCalculator: {
    eyebrow: "AIO Impact Calculator",
    title: "Estimate What AI Visibility Could Add to Pipeline",
    lede:
      "AI-referred prospects often arrive further along in their evaluation. Even a small lift in AI-driven signup volume can meaningfully impact early revenue and investor narrative.",
    defaults: {
      monthlyVisitors: 32,
      currentRate: 18,
      improvedRate: 32,
      averageValue: 2400,
    },
    limits: {
      monthlyVisitors: { min: 4, max: 120, step: 4 },
      currentRate: { min: 8, max: 50, step: 1 },
      improvedRate: { min: 15, max: 65, step: 1 },
      averageValue: { min: 500, max: 25000, step: 250 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly AI-referred visitors",
      currentRate: "Current signup conversion rate (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average customer value ($)",
      currentOpportunities: "Current monthly signups",
      improvedOpportunities: "Improved monthly signups",
      additionalOpportunities: "Additional signups",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible in AI to Category Recommendation",
    before: {
      label: "Before",
      headline: "AI recommended incumbents only.",
      items: [
        "No product entity optimization",
        "Missing structured startup data",
        "Zero third-party citations",
        "Notion owned comparison content",
        "No AI referral traffic",
      ],
    },
    after: {
      label: "After",
      headline: "LaunchLoop gets recommended.",
      items: [
        "Structured entity footprint",
        "Citable comparison & use-case pages",
        "Product Hunt & G2 presence",
        "Category guides indexed by AI",
        "Compounding AI referrals",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};

export type StartupsAioModules = typeof startupsAioModules;
