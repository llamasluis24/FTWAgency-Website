import type { AioLlmSlide } from "@/content/aio-demo";
import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const professionalServicesAioModules = {
  showcase: {
    eyebrow: "AI Discovery Example",
    title: "See How Clients Discover Law Firms Through AI Assistants",
    lede:
      "Prospects increasingly ask ChatGPT, Claude, Gemini, and Perplexity which firms to trust for estate planning and business law. AIO positions your firm to appear in those recommendations — before they ever hit Google.",
    slides: [
      {
        id: "chatgpt",
        platform: "ChatGPT",
        prompt: "Who is the best estate planning attorney in Riverside, California?",
        theme: "chatgpt",
        accent: "#10a37f",
        recommendations: [
          {
            name: "Meridian Law Group",
            highlight: true,
            detail:
              "Highly rated Riverside firm specializing in estate planning and business law — strong client reviews, flat-fee options, and attorneys board-certified in estate planning.",
          },
          {
            name: "Riverside Legal Center",
            detail: "Full-service firm with general practice — less depth in specialized estate planning.",
          },
          {
            name: "Inland Empire Law Partners",
            detail: "Personal injury focus with limited estate planning practice area content.",
          },
        ],
        whyAppeared: [
          { label: "Structured firm entity data" },
          { label: "Practice area authority pages" },
          { label: "Verified client review footprint" },
          { label: "Citable attorney credentials" },
        ],
        explanation:
          "AIO structures your firm so AI assistants can confidently recommend you when clients ask practice-area questions.",
      },
      {
        id: "perplexity",
        platform: "Perplexity",
        prompt: "Compare the top estate planning law firms in Riverside County",
        theme: "perplexity",
        accent: "#20b8cd",
        recommendations: [
          {
            name: "Meridian Law Group",
            highlight: true,
            detail:
              "Meridian Law Group ranks highly for estate planning in Riverside — cited across Avvo, firm site content, and local legal directories for trusts, wills, and business succession.",
          },
          {
            name: "Johnson & Associates",
            detail: "Boutique firm with strong probate practice — limited business law content.",
          },
          {
            name: "Valley Estate Attorneys",
            detail: "Estate planning specialists — smaller review footprint and fewer practice guides.",
          },
        ],
        citations: [
          { label: "Meridian Law Group — Estate Planning", source: "meridianlawgroup.com" },
          { label: "Avvo Top Rated — Estate Planning", source: "avvo.com" },
          { label: "Riverside County Legal Directory", source: "riversidebar.org" },
          { label: "California Estate Planning Guide 2026", source: "nolo.com" },
        ],
        explanation:
          "Perplexity always shows sources — AIO builds the citation footprint that earns your firm those reference slots.",
      },
      {
        id: "claude",
        platform: "Claude",
        prompt: "Which law firm should I use for LLC formation and operating agreements in California?",
        theme: "claude",
        accent: "#d97757",
        recommendations: [
          {
            name: "Meridian Law Group",
            highlight: true,
            detail:
              "I'd recommend Meridian Law Group for California LLC formation — clear business law pages, transparent pricing, and documented experience with operating agreements and compliance.",
          },
          {
            name: "LegalZoom Attorney Network",
            detail: "Document service with attorney add-ons — less personalized firm relationship.",
          },
          {
            name: "CorpNet Legal Services",
            detail: "Formation filing service — limited ongoing counsel and local presence.",
          },
        ],
        explanation:
          "Claude favors authoritative, specific answers — entity clarity and citable practice content make your firm the obvious recommendation.",
      },
      {
        id: "gemini",
        platform: "Gemini",
        prompt: "Best business law firms for small business owners in Riverside CA",
        theme: "gemini",
        accent: "#4285f4",
        recommendations: [
          {
            name: "Meridian Law Group",
            highlight: true,
            detail:
              "Frequently recommended for small business legal needs — strong entity signals, structured schema, and consistent brand mentions across directories and review sites.",
          },
          {
            name: "Small Business Legal Clinic",
            detail: "Low-cost clinic model — limited capacity and narrower service scope.",
          },
          {
            name: "Riverside Business Attorneys",
            detail: "General business counsel — thinner online authority content.",
          },
        ],
        explanation:
          "Gemini pulls from Google's index and entity graph — AIO aligns your firm data across the sources AI models trust.",
      },
    ] satisfies AioLlmSlide[],
  },

  funnel: {
    eyebrow: "AI Discovery Pipeline",
    title: "Turn AI Recommendations Into Consultation Pipeline",
    lede:
      "When your firm appears in AI answers, prospects arrive with context and intent. AIO maps entity optimization to the consultation flow that converts that trust into signed engagements.",
    stages: [
      { label: "Practice Area AI Queries", value: 28000 },
      { label: "Firm Mentions", value: 1840 },
      { label: "AI Referral Visits", value: 620 },
      { label: "Consultation Requests", value: 84 },
      { label: "Signed Engagements", value: 24 },
    ],
  } satisfies IndustryModuleFunnel,

  visibility: {
    eyebrow: "AI Visibility Tracking",
    title: "Monitor How AI Platforms Reference Your Firm",
    lede:
      "Track mentions, citations, and referral traffic across the AI assistants your prospects use during firm research — and see which practice pages AI models cite most.",
    metrics: [
      { label: "ChatGPT Mentions", value: "42", change: "+18" },
      { label: "Perplexity Citations", value: "36", change: "+14" },
      { label: "Gemini References", value: "28", change: "+10" },
      { label: "Claude References", value: "24", change: "+8" },
      { label: "AI Referral Traffic", value: "+124%", change: "vs last quarter", accent: true },
      { label: "Top Cited Page", value: "Estate Planning", change: "38 citations" },
    ],
    mentionsTrend: [4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 42],
    citationTrend: [3, 5, 8, 12, 16, 20, 24, 28, 30, 33, 35, 36],
    referralTrend: [8, 12, 18, 24, 32, 42, 54, 68, 82, 96, 112, 124],
    platformBreakdown: [
      { name: "ChatGPT", pct: 36 },
      { name: "Perplexity", pct: 28 },
      { name: "Gemini", pct: 20 },
      { name: "Claude", pct: 12 },
      { name: "Copilot", pct: 4 },
    ],
    topContent: [
      { page: "Estate Planning Practice Area", citations: 38 },
      { page: "Business Law & LLC Formation", citations: 28 },
      { page: "Attorney Profiles", citations: 22 },
      { page: "Client Reviews & Results", citations: 18 },
      { page: "Free Consultation", citations: 14 },
    ],
  },

  roiCalculator: {
    eyebrow: "AIO Impact Calculator",
    title: "Estimate What AI Visibility Could Add to Pipeline",
    lede:
      "AI-referred prospects often arrive further along in their evaluation. Even a small lift in AI-driven consultation volume can meaningfully impact revenue for professional firms.",
    defaults: {
      monthlyVisitors: 48,
      currentRate: 22,
      improvedRate: 38,
      averageValue: 5200,
    },
    limits: {
      monthlyVisitors: { min: 8, max: 150, step: 4 },
      currentRate: { min: 10, max: 50, step: 1 },
      improvedRate: { min: 18, max: 65, step: 1 },
      averageValue: { min: 1000, max: 50000, step: 500 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly AI-referred visitors",
      currentRate: "Current consultation conversion rate (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average engagement value ($)",
      currentOpportunities: "Current monthly consultations",
      improvedOpportunities: "Improved monthly consultations",
      additionalOpportunities: "Additional consultations",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible in AI to Trusted Recommendation",
    before: {
      label: "Before",
      headline: "AI recommends your competitors.",
      items: [
        "No firm entity optimization",
        "Missing structured practice data",
        "Zero third-party legal citations",
        "Competitors own comparison content",
        "No AI referral traffic",
      ],
    },
    after: {
      label: "After",
      headline: "Your firm gets recommended.",
      items: [
        "Structured entity footprint",
        "Citable practice area guides",
        "Avvo & directory presence",
        "Comparison content indexed",
        "Compounding AI referrals",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};

export type ProfessionalServicesAioModules = typeof professionalServicesAioModules;
