import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const professionalServicesSeoModules = {
  showcase: {
    eyebrow: "Professional Services SEO Example",
    title: "See What Practice Area Rankings Look Like for a Law Firm",
    lede:
      "Clients search by specialty and urgency — \"estate planning attorney near me\" or \"business lawyer for LLC formation.\" Practice area SEO puts your firm in those results before they contact your competitor.",
    searchQuery: "estate planning attorney riverside ca",
    serpResults: [
      {
        title: "Ad · Riverside Legal Center",
        url: "riversidelegal.example.com",
        description: "Estate planning attorneys. Free consultation — call today.",
        isAd: true,
      },
      {
        title: "Meridian Law Group — Estate Planning & Business Law",
        url: "meridianlawgroup.com › estate-planning",
        description:
          "Trusted estate planning and business attorneys in Riverside. 4.8★ from 214 reviews. Free consultation · Flat-fee options · Same-week appointments.",
        isHighlighted: true,
      },
      {
        title: "Best Estate Planning Lawyers in Riverside, CA",
        url: "legalguide.example.com › riverside-estate-planning",
        description: "Compare top-rated estate planning attorneys serving Riverside County.",
      },
      {
        title: "Estate Planning Checklist — What Documents Do You Need?",
        url: "estatelaw.example.com › checklist",
        description: "Wills, trusts, and power of attorney explained for California families.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "estate planning attorney riverside", target: "Practice Area Page" },
      { query: "business lawyer llc formation", target: "Business Law Page" },
      { query: "trust attorney near me", target: "Estate Planning Page" },
      { query: "probate lawyer california", target: "Probate Page" },
      { query: "meridian law group reviews", target: "Reviews Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Authority Rankings",
    title: "Practice Area Equity That Grows Every Month",
    lede:
      "Unlike referrals alone, organic practice area visibility compounds — every guide, case result, and review earned lowers cost per qualified consultation.",
    chartValues: [6, 10, 14, 20, 28, 38, 50, 64, 80, 98, 118, 142],
    metrics: [
      { label: "Organic visits / mo", before: "420", after: "2,840" },
      { label: "Ranking keywords", before: "18", after: "164" },
      { label: "Consultation requests", before: "8", after: "42" },
    ],
  },

  funnel: {
    eyebrow: "Organic Pipeline",
    title: "Turn Practice Area Rankings Into Booked Consultations",
    lede:
      "Strong SEO captures clients at the research stage — comparing firms, reading reviews, and shortlisting attorneys all start in search.",
    stages: [
      { label: "Search Impressions", value: 52000 },
      { label: "Organic Clicks", value: 2840 },
      { label: "Practice Page Views", value: 1700 },
      { label: "Consultation Forms", value: 84 },
      { label: "Qualified Consultations", value: 42 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking firms do differently",
    lede:
      "Meridian Law Group wins consultations from search with practice-area depth, real attorney proof, and consistent local signals — not a generic template site.",
    insights: [
      {
        icon: "Briefcase",
        title: "One page per practice area",
        body:
          "People search 'estate planning attorney Riverside,' not your firm name. Each practice area needs its own page — bios, outcomes, FAQs, and a clear consult CTA.",
        takeaway: "A single services page can't rank for dozens of legal terms.",
      },
      {
        icon: "ShieldCheck",
        title: "Prove expertise on the page",
        body:
          "Bar admissions, case results, articles, and real attorney profiles matter. Thin template sites lose to firms that show who they are.",
        takeaway: "Google and prospects both need visible credentials and proof.",
      },
      {
        icon: "MapPin",
        title: "Match local and regional searches",
        body:
          "'Divorce lawyer Corona' and 'California estate planning attorney' need different pages — city landing pages plus broader practice hubs.",
        takeaway: "Build the page that matches how people actually search.",
      },
      {
        icon: "Star",
        title: "Reviews reinforce everything else",
        body:
          "Google reviews, Avvo, and consistent directory listings build trust that rankings alone can't.",
        takeaway: "Strong SEO without reviews still loses the click.",
      },
    ],
    audit: {
      healthBefore: 56,
      healthAfter: 93,
      checks: [
        { label: "Practice-area pages", status: "pass" },
        { label: "Attorney bios with credentials", status: "pass" },
        { label: "LegalService schema", status: "pass" },
        { label: "Consultation CTA", status: "pass" },
        { label: "SSL & privacy policy", status: "pass" },
        { label: "Mobile-friendly forms", status: "warn" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Referral-Only to Practice Area Authority",
    before: {
      label: "Before",
      headline: "Expertise invisible in search.",
      items: [
        "No dedicated practice area pages",
        "Competitors ranking for your specialties",
        "Blog abandoned after launch",
        "8 organic consultations per month",
        "100% dependent on referrals",
      ],
    },
    after: {
      label: "After",
      headline: "Page-one for core practice areas.",
      items: [
        "Dedicated pages per practice area with FAQs",
        "Authority guides that earn links and citations",
        "Local + practice schema across the site",
        "42+ qualified consultations per month",
        "Inbound pipeline diversifies beyond referrals",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
