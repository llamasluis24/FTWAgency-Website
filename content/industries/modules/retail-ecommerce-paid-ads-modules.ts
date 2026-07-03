import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { PlatformShowcaseConfig } from "@/components/platform-showcase/types";

const spendTrend = [24, 28, 26, 32, 36, 40, 44, 48, 54, 58, 64, 72];
const revenueTrend = [18, 22, 24, 30, 36, 42, 48, 56, 64, 72, 82, 94];

export const retailEcommercePaidAdsModules = {
  showcase: {
    variant: "paid-ads",
    eyebrow: "Ecommerce Paid Ads Example",
    headline: "See How Shopping Campaigns Drive *Profitable* Revenue",
    lede:
      "Google Shopping, Meta catalog, and retargeting campaigns — unified ROAS tracking so every dollar is accountable to revenue, not just clicks.",
    metrics: [
      { label: "Ad Spend", value: "$14,200", change: "+6% vs last month", positive: true },
      { label: "Purchases", value: "486", change: "+18%", positive: true, accent: "cyan" },
      { label: "Cost Per Purchase", value: "$29", change: "−14%", positive: true, accent: "green" },
      { label: "Conversion Rate", value: "4.2%", change: "+0.8 pts", positive: true },
      { label: "Revenue Attributed", value: "$42,800", accent: "green" },
      { label: "ROAS", value: "3.0x", change: "+0.6x", positive: true, accent: "cyan" },
    ],
    chartLabel: "Performance Trend — Spend vs Revenue",
    chartSeries: [
      { label: "Ad Spend", values: spendTrend, color: "muted" },
      { label: "Revenue", values: revenueTrend, color: "accent" },
    ],
    barLabel: "Revenue by Week",
    barValues: [
      { label: "W1", value: 9200 },
      { label: "W2", value: 10400 },
      { label: "W3", value: 9800 },
      { label: "W4", value: 12400 },
    ],
    funnel: [
      { label: "Ad Impressions", value: "420K", width: 100 },
      { label: "Clicks", value: "11,600", width: 68 },
      { label: "Product Page Views", value: "9,800", width: 58 },
      { label: "Add to Cart", value: "1,960", width: 42 },
      { label: "Purchases", value: "486", width: 28 },
    ],
    campaigns: [
      {
        name: "Google Shopping — Core SKUs",
        platform: "Google",
        spend: "$5,800",
        leads: "198",
        cpl: "$29",
        roas: "3.4x",
      },
      {
        name: "Meta Catalog — Retargeting",
        platform: "Meta",
        spend: "$4,200",
        leads: "142",
        cpl: "$30",
        roas: "2.8x",
      },
      {
        name: "Google PMax — Collections",
        platform: "Google",
        spend: "$2,600",
        leads: "86",
        cpl: "$30",
        roas: "3.1x",
      },
      {
        name: "TikTok Spark — Top Products",
        platform: "TikTok",
        spend: "$1,600",
        leads: "60",
        cpl: "$27",
        roas: "2.6x",
      },
    ],
    platforms: [
      { name: "Google Shopping", pct: 58 },
      { name: "Meta", pct: 30 },
      { name: "TikTok", pct: 12 },
    ],
  } satisfies PlatformShowcaseConfig,

  funnel: {
    eyebrow: "Paid Commerce Pipeline",
    title: "Turn Shopping Clicks Into Profitable Orders",
    lede:
      "Paid ads capture high-intent product searches and retarget warm audiences — optimized feeds and landing pages convert clicks into margin-positive orders.",
    stages: [
      { label: "Ad Impressions", value: 420000 },
      { label: "Clicks", value: 11600 },
      { label: "Add to Cart", value: 1960 },
      { label: "Checkout Started", value: 728 },
      { label: "Purchases", value: 486 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Paid Ads ROI Calculator",
    title: "Estimate What Better ROAS Could Mean",
    lede:
      "For ecommerce brands, lowering cost per purchase while raising average order value directly improves margin — especially on retargeting and shopping campaigns.",
    defaults: {
      monthlyVisitors: 380,
      currentRate: 2.8,
      improvedRate: 4.2,
      averageValue: 88,
    },
    limits: {
      monthlyVisitors: { min: 50, max: 2000, step: 25 },
      currentRate: { min: 1, max: 8, step: 0.2 },
      improvedRate: { min: 2, max: 12, step: 0.2 },
      averageValue: { min: 30, max: 400, step: 5 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly paid purchases",
      currentRate: "Current repeat purchase rate (%)",
      improvedRate: "Improved repeat rate (%)",
      averageValue: "Average order value ($)",
      currentOpportunities: "Current monthly revenue",
      improvedOpportunities: "Improved monthly revenue",
      additionalOpportunities: "Additional revenue",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Untracked Ad Spend to Margin-Positive ROAS",
    before: {
      label: "Before",
      headline: "Ads with no attribution.",
      items: [
        "Generic campaigns, no feed optimization",
        "Product pages not matched to ad groups",
        "No purchase tracking in platform",
        "ROAS unknown, CPA guessed",
        "1.8x ROAS on shopping campaigns",
      ],
    },
    after: {
      label: "After",
      headline: "Every dollar tied to a purchase.",
      items: [
        "Optimized Google Shopping + Meta catalog feeds",
        "Dynamic retargeting by cart value",
        "Full click-to-purchase attribution",
        "3.0x ROAS and improving",
        "486 purchases per month from paid",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
