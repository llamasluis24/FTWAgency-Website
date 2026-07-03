import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { PlatformShowcaseConfig } from "@/components/platform-showcase/types";

const spendTrend = [18, 22, 20, 26, 30, 34, 38, 42, 48, 52, 58, 64];
const quoteLeads = [14, 20, 18, 26, 32, 36, 42, 48, 54, 62, 68, 74];

export const transportationLogisticsPaidAdsModules = {
  showcase: {
    variant: "paid-ads",
    eyebrow: "Transportation Paid Ads Example",
    headline: "See How Urgent Moving & Freight Searches Become Booked Loads",
    lede:
      "High-intent searches — \"emergency movers near me\" and \"same-day freight quote\" — get captured with lane-specific campaigns, instant-quote landing pages, and full attribution.",
    metrics: [
      { label: "Ad Spend", value: "$8,640", change: "+12% vs last month", positive: true },
      { label: "Quote Requests", value: "218", change: "+31%", positive: true, accent: "cyan" },
      { label: "Cost Per Quote", value: "$40", change: "−22%", positive: true, accent: "green" },
      { label: "Booking Rate", value: "42%", change: "+8 pts", positive: true },
      { label: "Revenue Attributed", value: "$284,600", accent: "green" },
      { label: "ROAS", value: "6.4x", change: "+1.8x", positive: true, accent: "cyan" },
    ],
    chartLabel: "Performance Trend — Spend vs Quote Requests",
    chartSeries: [
      { label: "Ad Spend", values: spendTrend, color: "muted" },
      { label: "Quote Requests", values: quoteLeads, color: "accent" },
    ],
    barLabel: "Quote Requests by Week",
    barValues: [
      { label: "W1", value: 48 },
      { label: "W2", value: 56 },
      { label: "W3", value: 52 },
      { label: "W4", value: 62 },
    ],
    funnel: [
      { label: "Ad Impressions", value: "186K", width: 100 },
      { label: "Clicks", value: "3,840", width: 68 },
      { label: "Landing Page Views", value: "3,620", width: 62 },
      { label: "Quote Form Starts", value: "312", width: 45 },
      { label: "Booked Loads", value: "218", width: 32 },
    ],
    campaigns: [
      {
        name: "Emergency Movers — Search",
        platform: "Google",
        spend: "$3,400",
        leads: "86",
        cpl: "$40",
        roas: "7.2x",
      },
      {
        name: "Long Distance — Search",
        platform: "Google",
        spend: "$2,600",
        leads: "62",
        cpl: "$42",
        roas: "6.8x",
      },
      {
        name: "Freight Quote — Search",
        platform: "Google",
        spend: "$1,840",
        leads: "44",
        cpl: "$42",
        roas: "5.9x",
      },
      {
        name: "Retargeting — Meta",
        platform: "Meta",
        spend: "$800",
        leads: "26",
        cpl: "$31",
        roas: "6.1x",
      },
    ],
    platforms: [
      { name: "Google Search", pct: 72 },
      { name: "Meta", pct: 18 },
      { name: "LSA", pct: 10 },
    ],
  } satisfies PlatformShowcaseConfig,

  funnel: {
    eyebrow: "Paid Demand Pipeline",
    title: "Turn High-Intent Search Clicks Into Confirmed Loads",
    lede:
      "Paid ads capture urgent moving and freight searches at peak intent — instant-quote pages and automated follow-up convert clicks before competitors respond.",
    stages: [
      { label: "Ad Impressions", value: 186000 },
      { label: "Clicks", value: 3840 },
      { label: "Quote Form Submissions", value: 312 },
      { label: "Qualified Quotes", value: 218 },
      { label: "Booked Loads", value: 92 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Paid Ads ROI Calculator",
    title: "Estimate What Better Campaign Performance Could Mean",
    lede:
      "For transportation companies, lowering cost per quote while raising booking rate directly fills schedule gaps — especially on high-margin lanes.",
    defaults: {
      monthlyVisitors: 280,
      currentRate: 34,
      improvedRate: 48,
      averageValue: 2800,
    },
    limits: {
      monthlyVisitors: { min: 50, max: 600, step: 10 },
      currentRate: { min: 15, max: 50, step: 1 },
      improvedRate: { min: 25, max: 65, step: 1 },
      averageValue: { min: 500, max: 15000, step: 100 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly paid quote requests",
      currentRate: "Current booking rate (%)",
      improvedRate: "Improved booking rate (%)",
      averageValue: "Average job value ($)",
      currentOpportunities: "Current booked loads",
      improvedOpportunities: "Improved booked loads",
      additionalOpportunities: "Additional loads",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Untracked Ad Spend to Lane-Level ROAS",
    before: {
      label: "Before",
      headline: "Ads with no attribution.",
      items: [
        "Generic campaigns, no lane targeting",
        "Quote forms buried on homepage",
        "No call or form tracking",
        "CPL unknown, ROAS guessed",
        "42 quote requests per month",
      ],
    },
    after: {
      label: "After",
      headline: "Every dollar tied to a booked load.",
      items: [
        "Lane and service-specific ad groups",
        "Instant-quote landing pages per corridor",
        "Full click-to-booking attribution",
        "CPL $40, ROAS 6.4x and improving",
        "218+ quote requests per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
