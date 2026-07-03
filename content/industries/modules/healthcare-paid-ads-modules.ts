import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { PlatformShowcaseConfig } from "@/components/platform-showcase/types";

const spendTrend = [20, 24, 22, 28, 32, 36, 40, 44, 48, 52, 58, 64];
const leadsTrend = [16, 20, 22, 28, 34, 38, 44, 50, 56, 62, 68, 74];

export const healthcarePaidAdsModules = {
  showcase: {
    variant: "paid-ads",
    eyebrow: "Healthcare Paid Ads Example",
    headline: "See How High-Value Treatment Ads Drive *New Patients*",
    lede:
      "Google Search and LSA campaigns for implants, Invisalign, and new patient specials — full attribution from click to booked consultation.",
    metrics: [
      { label: "Ad Spend", value: "$9,840", change: "+4% vs last month", positive: true },
      { label: "New Patient Leads", value: "186", change: "+22%", positive: true, accent: "cyan" },
      { label: "Cost Per Lead", value: "$53", change: "−16%", positive: true, accent: "green" },
      { label: "Booking Rate", value: "38%", change: "+6 pts", positive: true },
      { label: "Revenue Attributed", value: "$182,400", accent: "green" },
      { label: "ROAS", value: "5.8x", change: "+1.2x", positive: true, accent: "cyan" },
    ],
    chartLabel: "Performance Trend — Spend vs Leads",
    chartSeries: [
      { label: "Ad Spend", values: spendTrend, color: "muted" },
      { label: "New Patient Leads", values: leadsTrend, color: "accent" },
    ],
    barLabel: "Leads by Week",
    barValues: [
      { label: "W1", value: 42 },
      { label: "W2", value: 48 },
      { label: "W3", value: 44 },
      { label: "W4", value: 52 },
    ],
    funnel: [
      { label: "Ad Impressions", value: "248K", width: 100 },
      { label: "Clicks", value: "4,960", width: 68 },
      { label: "Landing Page Views", value: "4,620", width: 62 },
      { label: "Consultation Forms", value: "248", width: 45 },
      { label: "New Patients Booked", value: "186", width: 32 },
    ],
    campaigns: [
      {
        name: "Dental Implants — Search",
        platform: "Google",
        spend: "$3,600",
        leads: "68",
        cpl: "$53",
        roas: "6.4x",
      },
      {
        name: "Invisalign — Search",
        platform: "Google",
        spend: "$2,800",
        leads: "52",
        cpl: "$54",
        roas: "5.9x",
      },
      {
        name: "New Patient Special — LSA",
        platform: "Google",
        spend: "$2,200",
        leads: "44",
        cpl: "$50",
        roas: "6.1x",
      },
      {
        name: "Retargeting — Meta",
        platform: "Meta",
        spend: "$1,240",
        leads: "22",
        cpl: "$56",
        roas: "4.8x",
      },
    ],
    platforms: [
      { name: "Google Search", pct: 64 },
      { name: "LSA", pct: 22 },
      { name: "Meta", pct: 14 },
    ],
  } satisfies PlatformShowcaseConfig,

  funnel: {
    eyebrow: "Paid Patient Pipeline",
    title: "Turn Treatment Search Clicks Into Booked Consultations",
    lede:
      "Paid ads capture high-intent treatment searches at peak urgency — landing pages and automated follow-up convert clicks before patients call your competitor.",
    stages: [
      { label: "Ad Impressions", value: 248000 },
      { label: "Clicks", value: 4960 },
      { label: "Consultation Forms", value: 248 },
      { label: "Qualified Leads", value: 186 },
      { label: "New Patients Booked", value: 112 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Paid Ads ROI Calculator",
    title: "Estimate What Better Campaign Performance Could Mean",
    lede:
      "For practices, lowering cost per lead while raising booking rate directly fills treatment chairs — especially for high-margin procedures.",
    defaults: {
      monthlyVisitors: 160,
      currentRate: 32,
      improvedRate: 48,
      averageValue: 980,
    },
    limits: {
      monthlyVisitors: { min: 30, max: 400, step: 10 },
      currentRate: { min: 15, max: 50, step: 1 },
      improvedRate: { min: 25, max: 65, step: 1 },
      averageValue: { min: 300, max: 5000, step: 50 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly paid leads",
      currentRate: "Current booking rate (%)",
      improvedRate: "Improved booking rate (%)",
      averageValue: "Average new patient value ($)",
      currentOpportunities: "Current booked patients",
      improvedOpportunities: "Improved booked patients",
      additionalOpportunities: "Additional patients",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Untracked Ad Spend to Treatment-Level ROAS",
    before: {
      label: "Before",
      headline: "Generic ads, unknown ROI.",
      items: [
        "Broad campaigns, no treatment targeting",
        "Landing pages on homepage only",
        "No call or form tracking",
        "CPL unknown, ROAS guessed",
        "62 leads per month",
      ],
    },
    after: {
      label: "After",
      headline: "Every dollar tied to a booked patient.",
      items: [
        "Treatment-specific ad groups per specialty",
        "Dedicated implant & Invisalign landing pages",
        "Full click-to-booking attribution",
        "CPL $53, ROAS 5.8x and improving",
        "186+ new patient leads per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
