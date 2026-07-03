import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const manufacturingSeoModules = {
  showcase: {
    eyebrow: "Manufacturing SEO Example",
    title: "See What Capability Rankings Look Like for a CNC Fabricator",
    lede:
      "Engineers and procurement teams search by process and tolerance — \"CNC machining aluminum prototypes\" or \"ISO 9001 sheet metal fabrication.\" SEO puts your shop in those results before they shortlist your competitor.",
    searchQuery: "cnc machining aluminum prototypes midwest",
    serpResults: [
      {
        title: "Ad · MegaFab Industries",
        url: "megafab.example.com",
        description: "Full-service CNC machining. Request a quote online today.",
        isAd: true,
      },
      {
        title: "Apex Precision Manufacturing — CNC Machining & Prototyping",
        url: "apexprecision.com › cnc-machining-aluminum",
        description:
          "ISO 9001 certified CNC shop in Ohio. ±0.0005\" tolerances, 5-axis milling, rapid prototyping. Upload your RFQ — quote in 24 hours.",
        isHighlighted: true,
      },
      {
        title: "Best CNC Machining Shops for Aluminum Prototypes",
        url: "engineeringsource.example.com › cnc-aluminum",
        description: "Compare top-rated CNC shops for aerospace and industrial aluminum work.",
      },
      {
        title: "CNC Machining Tolerances Guide — What to Specify",
        url: "mfgstandards.example.com › tolerances",
        description: "How to specify tolerances, finishes, and inspection requirements in your RFQ.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "cnc machining aluminum prototypes", target: "Capability Page" },
      { query: "sheet metal fabrication ohio", target: "Fabrication Page" },
      { query: "5 axis cnc milling services", target: "Services Page" },
      { query: "iso 9001 machine shop", target: "Certifications Page" },
      { query: "apex precision manufacturing reviews", target: "Case Studies" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Capability Rankings",
    title: "Process & Tolerance Keywords That Grow Every Month",
    lede:
      "Unlike trade show leads, organic capability visibility compounds — every process page, case study, and certification earned lowers cost per qualified RFQ.",
    chartValues: [8, 12, 16, 22, 28, 36, 46, 58, 72, 88, 106, 128],
    metrics: [
      { label: "Organic visits / mo", before: "840", after: "5,120" },
      { label: "Ranking keywords", before: "38", after: "312" },
      { label: "RFQs from organic", before: "12", after: "68" },
    ],
  },

  funnel: {
    eyebrow: "Organic RFQ Pipeline",
    title: "Turn Capability Rankings Into Qualified RFQs",
    lede:
      "Strong manufacturing SEO captures buyers at the research stage — comparing tolerances, certifications, and lead times all start in search.",
    stages: [
      { label: "Search Impressions", value: 78000 },
      { label: "Organic Clicks", value: 5120 },
      { label: "Capability Page Views", value: 3070 },
      { label: "RFQ Form Submissions", value: 136 },
      { label: "Qualified Opportunities", value: 68 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking shops do differently",
    lede:
      "Apex Precision Manufacturing earns RFQs from search with capability pages, spec-rich content, and visible certifications — not a brochure site.",
    insights: [
      {
        icon: "Factory",
        title: "Pages per capability",
        body:
          "Engineers search 'CNC machining aluminum' or 'ISO 9001 sheet metal' — dedicated pages per process, material, and cert capture that intent.",
        takeaway: "Every capability is a keyword cluster someone else may already own.",
      },
      {
        icon: "Layers",
        title: "Specs build trust",
        body:
          "Tolerance tables, equipment lists, and case studies signal competence. Brochure fluff doesn't.",
        takeaway: "Technical depth is the content that ranks.",
      },
      {
        icon: "ShieldCheck",
        title: "Certs on the page",
        body:
          "ISO 9001, AS9100, ITAR — show audit scope on dedicated pages, not buried in a PDF footer.",
        takeaway: "Hidden credentials lose to shops that surface them in search.",
      },
      {
        icon: "Target",
        title: "Long-cycle terms compound",
        body:
          "Manufacturing SEO builds over quarters. RFQ-intent pages and industry guides grow while sales nurtures open quotes.",
        takeaway: "Start early — a two-year head start is hard to close.",
      },
    ],
    audit: {
      healthBefore: 55,
      healthAfter: 90,
      checks: [
        { label: "Capability pages per process", status: "pass" },
        { label: "Equipment & tolerance specs", status: "pass" },
        { label: "Certification pages", status: "pass" },
        { label: "RFQ / quote upload form", status: "pass" },
        { label: "Organization schema", status: "warn" },
        { label: "Mobile-friendly spec tables", status: "pass" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible Shop to Specifying Engineer's Shortlist",
    before: {
      label: "Before",
      headline: "Buyers couldn't find your capabilities online.",
      items: [
        "No dedicated process or tolerance pages",
        "Certifications buried in a PDF download",
        "Competitors ranking for your core services",
        "12 organic RFQs per month",
        "100% dependent on reps and trade shows",
      ],
    },
    after: {
      label: "After",
      headline: "Page-one rankings for core processes.",
      items: [
        "Capability pages for CNC, fabrication, and finishing",
        "ISO 9001 and AS9100 visible on every service page",
        "Case studies with tolerances and industries served",
        "68+ qualified RFQs per month from organic",
        "Inbound pipeline diversifies beyond top accounts",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
