import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const healthcareSeoModules = {
  showcase: {
    eyebrow: "Healthcare SEO Example",
    title: "See What Treatment Rankings Look Like for a Dental Practice",
    lede:
      "Patients search by treatment and location — \"dental implants near me\" or \"Invisalign cost.\" Treatment SEO puts your practice in those results before they call your competitor.",
    searchQuery: "dental implants near me",
    serpResults: [
      {
        title: "Ad · SmileWorks Dental Group",
        url: "smileworks.example.com",
        description: "Dental implants starting at $2,999. Free consultation this month.",
        isAd: true,
      },
      {
        title: "Lakeside Dental Studio — Dental Implants & Restorative Dentistry",
        url: "lakesidedentalstudio.com › dental-implants",
        description:
          "Board-certified implant dentistry in Portland. 4.9★ from 468 reviews. Free consultation · Flexible financing · Same-week appointments.",
        isHighlighted: true,
      },
      {
        title: "Best Dental Implant Dentists in Portland",
        url: "dentalguide.example.com › portland-implants",
        description: "Compare top-rated implant dentists serving Portland and Lake Oswego.",
      },
      {
        title: "How Much Do Dental Implants Cost in Oregon?",
        url: "dentalcosts.example.com › implants",
        description: "Average implant costs, timelines, and what affects your treatment plan.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "dental implants portland", target: "Treatment Page" },
      { query: "invisalign near me", target: "Treatment Page" },
      { query: "emergency dentist", target: "Emergency Page" },
      { query: "cosmetic dentistry", target: "Service Page" },
      { query: "lakeside dental reviews", target: "Reviews Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Treatment Rankings",
    title: "Treatment & Specialty Rankings That Grow Every Month",
    lede:
      "Unlike paid leads, organic treatment visibility compounds — every optimized page, city page, and review earned lowers cost per new patient.",
    chartValues: [6, 10, 14, 20, 28, 36, 46, 58, 72, 88, 104, 124],
    metrics: [
      { label: "Organic visits / mo", before: "680", after: "4,120" },
      { label: "Ranking keywords", before: "28", after: "214" },
      { label: "New patient forms", before: "12", after: "68" },
    ],
  },

  funnel: {
    eyebrow: "Organic Pipeline",
    title: "Turn Treatment Rankings Into Booked Appointments",
    lede:
      "Strong healthcare SEO captures patients at the research stage — comparing providers, reading reviews, and shortlisting practices all start in search.",
    stages: [
      { label: "Search Impressions", value: 58000 },
      { label: "Organic Clicks", value: 4120 },
      { label: "Treatment Page Views", value: 2470 },
      { label: "Consultation Requests", value: 136 },
      { label: "New Patients Booked", value: 68 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking practices do differently",
    lede:
      "Lakeside Dental Studio ranks for high-value treatments with trust signals, treatment-specific pages, and local proof — not generic blog posts.",
    insights: [
      {
        icon: "HeartPulse",
        title: "Trust signals on every page",
        body:
          "Provider credentials, office photos, reviews, and privacy policies signal legitimacy. Thin template sites get filtered out.",
        takeaway: "Patients and Google need proof you're a real practice.",
      },
      {
        icon: "MapPin",
        title: "One page per treatment",
        body:
          "'Dental implants Riverside' needs its own page — procedure details, FAQs, before/after, and a booking CTA.",
        takeaway: "Each specialty treatment is a ranking opportunity.",
      },
      {
        icon: "Star",
        title: "Reviews compound visibility",
        body:
          "Review velocity on Google and health directories feeds map pack and organic trust.",
        takeaway: "Great care without reviews leaves rankings on the table.",
      },
      {
        icon: "ShieldCheck",
        title: "Schema and NAP hygiene",
        body:
          "MedicalBusiness schema and consistent directory listings help Google connect your site to local patient searches.",
        takeaway: "Fix directory and schema alignment before scaling content.",
      },
    ],
    audit: {
      healthBefore: 54,
      healthAfter: 92,
      checks: [
        { label: "Treatment landing pages", status: "pass" },
        { label: "Provider credentials visible", status: "pass" },
        { label: "MedicalBusiness schema", status: "pass" },
        { label: "Mobile booking CTA", status: "pass" },
        { label: "HIPAA-compliant forms", status: "warn" },
        { label: "Core Web Vitals passing", status: "pass" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible Treatments to Page-One Rankings",
    before: {
      label: "Before",
      headline: "One homepage, zero treatment pages.",
      items: [
        "No dedicated implant or Invisalign pages",
        "Missing city and neighborhood coverage",
        "Thin content, no medical schema",
        "Competitors rank for your specialties",
        "Organic drives 12 new patients/month",
      ],
    },
    after: {
      label: "After",
      headline: "Ranking for every treatment × city.",
      items: [
        "Dedicated page per high-value treatment",
        "City pages for every area served",
        "MedicalBusiness schema on every page",
        "Page-one for 35+ treatment terms",
        "Organic drives 68+ new patients monthly",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
