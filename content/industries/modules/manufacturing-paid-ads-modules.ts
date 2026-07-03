import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { PlatformShowcaseConfig } from "@/components/platform-showcase/types";

const spendTrend = [18, 22, 20, 26, 30, 34, 38, 42, 46, 50, 56, 62];
const leadsTrend = [12, 16, 18, 24, 28, 32, 38, 44, 50, 56, 62, 68];

export const manufacturingPaidAdsModules = {
  showcase: {
    variant: "paid-ads",
    eyebrow: "Manufacturing Paid Ads Example",
    headline: "See How Capability Search Ads Drive *Qualified RFQs*",
    lede:
      "Google Search campaigns for CNC machining, sheet metal fabrication, and rapid prototyping — full attribution from click to awarded PO.",
    metrics: [
      { label: "Ad Spend", value: "$8,420", change: "+3% vs last month", positive: true },
      { label: "Qualified RFQs", value: "142", change: "+19%", positive: true, accent: "cyan" },
      { label: "Cost Per RFQ", value: "$59", change: "−14%", positive: true, accent: "green" },
      { label: "Quote Rate", value: "94%", change: "+8 pts", positive: true },
      { label: "Revenue Attributed", value: "$248,000", accent: "green" },
      { label: "ROAS", value: "6.2x", change: "+1.4x", positive: true, accent: "cyan" },
    ],
    chartLabel: "Performance Trend — Spend vs RFQs",
    chartSeries: [
      { label: "Ad Spend", values: spendTrend, color: "muted" },
      { label: "Qualified RFQs", values: leadsTrend, color: "accent" },
    ],
    barLabel: "RFQs by Week",
    barValues: [
      { label: "W1", value: 32 },
      { label: "W2", value: 36 },
      { label: "W3", value: 34 },
      { label: "W4", value: 40 },
    ],
    funnel: [
      { label: "Ad Impressions", value: "186K", width: 100 },
      { label: "Clicks", value: "3,720", width: 68 },
      { label: "Landing Page Views", value: "3,480", width: 62 },
      { label: "RFQ Form Submissions", value: "168", width: 45 },
      { label: "Qualified RFQs", value: "142", width: 32 },
    ],
    campaigns: [
      {
        name: "CNC Machining — Search",
        platform: "Google",
        spend: "$3,200",
        leads: "52",
        cpl: "$62",
        roas: "6.8x",
      },
      {
        name: "Sheet Metal Fabrication — Search",
        platform: "Google",
        spend: "$2,600",
        leads: "44",
        cpl: "$59",
        roas: "6.4x",
      },
      {
        name: "Rapid Prototyping — Search",
        platform: "Google",
        spend: "$1,800",
        leads: "32",
        cpl: "$56",
        roas: "5.9x",
      },
      {
        name: "Retargeting — LinkedIn",
        platform: "LinkedIn",
        spend: "$820",
        leads: "14",
        cpl: "$59",
        roas: "5.2x",
      },
    ],
    platforms: [
      { name: "Google Search", pct: 72 },
      { name: "LinkedIn", pct: 18 },
      { name: "Display", pct: 10 },
    ],
  } satisfies PlatformShowcaseConfig,

  funnel: {
    eyebrow: "Paid RFQ Pipeline",
    title: "Turn Capability Search Clicks Into Awarded POs",
    lede:
      "Paid ads capture high-intent process searches at peak urgency — capability landing pages and automated follow-up convert clicks before buyers shortlist your competitor.",
    stages: [
      { label: "Ad Impressions", value: 186000 },
      { label: "Clicks", value: 3720 },
      { label: "RFQ Submissions", value: 168 },
      { label: "Qualified RFQs", value: 142 },
      { label: "POs Awarded", value: 48 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Paid Ads ROI Calculator",
    title: "Estimate What Better Campaign Performance Could Mean",
    lede:
      "For manufacturers, lowering cost per RFQ while raising award rate directly fills production lines — especially for high-margin custom runs.",
    defaults: {
      monthlyVisitors: 120,
      currentRate: 28,
      improvedRate: 42,
      averageValue: 52000,
    },
    limits: {
      monthlyVisitors: { min: 20, max: 300, step: 5 },
      currentRate: { min: 12, max: 50, step: 1 },
      improvedRate: { min: 20, max: 65, step: 1 },
      averageValue: { min: 5000, max: 500000, step: 5000 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly paid RFQs",
      currentRate: "Current award rate (%)",
      improvedRate: "Improved award rate (%)",
      averageValue: "Average PO value ($)",
      currentOpportunities: "Current awarded POs",
      improvedOpportunities: "Improved awarded POs",
      additionalOpportunities: "Additional POs",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Untracked Ad Spend to Process-Level ROAS",
    before: {
      label: "Before",
      headline: "Generic ads, unknown ROI.",
      items: [
        "Broad campaigns, no process targeting",
        "Landing pages on homepage only",
        "No RFQ or call tracking",
        "CPL unknown, ROAS guessed",
        "48 RFQs per month from ads",
      ],
    },
    after: {
      label: "After",
      headline: "Every dollar tied to an awarded PO.",
      items: [
        "Process-specific ad groups per capability",
        "Dedicated CNC & fabrication landing pages",
        "Full click-to-award attribution",
        "CPL $59, ROAS 6.2x and improving",
        "142+ qualified RFQs per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
