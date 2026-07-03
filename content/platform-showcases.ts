import type { PlatformShowcaseConfig } from "@/components/platform-showcase/types";

const trend = [22, 28, 26, 34, 38, 42, 48, 52, 58, 64, 72, 78];
const leads = [12, 18, 15, 22, 28, 32, 38, 44, 48, 55, 62, 68];

const paidAdsShowcase: PlatformShowcaseConfig = {
  variant: "paid-ads",
  eyebrow: "Campaign Performance Dashboard",
  headline: "Every Dollar Tracked. Every Lead *Attributed*.",
  lede: "Unified Google + Meta performance — spend, leads, CPL, and ROAS in one live view.",
  dashboardImage: "/showcases/paid-ads-dashboard.png",
  dashboardImageAlt: "Meta Ads Manager campaign performance dashboard for FTW Growth Platform",
  metrics: [
    { label: "Ad Spend", value: "$12,480", change: "+8% vs last month", positive: true },
    { label: "Leads Generated", value: "347", change: "+24%", positive: true, accent: "cyan" },
    { label: "Cost Per Lead", value: "$36", change: "−18%", positive: true, accent: "green" },
    { label: "Conversion Rate", value: "6.8%", change: "+1.2 pts", positive: true },
    { label: "Revenue Generated", value: "$89,400", accent: "green" },
    { label: "ROAS", value: "7.2x", change: "+2.1x", positive: true, accent: "cyan" },
  ],
  chartLabel: "Performance Trend — Spend vs Leads",
  chartSeries: [
    { label: "Ad Spend", values: trend, color: "muted" },
    { label: "Leads", values: leads, color: "accent" },
  ],
  barLabel: "Lead Trend by Week",
  barValues: [
    { label: "W1", value: 62 },
    { label: "W2", value: 74 },
    { label: "W3", value: 68 },
    { label: "W4", value: 88 },
  ],
  funnel: [
    { label: "Ad Impressions", value: "284K", width: 100 },
    { label: "Clicks", value: "5,120", width: 72 },
    { label: "Landing Page Views", value: "4,890", width: 65 },
    { label: "Form Submissions", value: "412", width: 48 },
    { label: "Qualified Leads", value: "347", width: 38 },
  ],
  campaigns: [
    { name: "HVAC Emergency — Search", platform: "Google", spend: "$4,200", leads: "128", cpl: "$33", roas: "8.1x" },
    { name: "Local Services — LSA", platform: "Google", spend: "$2,800", leads: "94", cpl: "$30", roas: "7.4x" },
    { name: "Retargeting — Meta", platform: "Meta", spend: "$3,100", leads: "72", cpl: "$43", roas: "6.2x" },
    { name: "Brand Awareness — TikTok", platform: "TikTok", spend: "$2,380", leads: "53", cpl: "$45", roas: "5.8x" },
  ],
  workflow: {
    headline: "How Paid Traffic Becomes Revenue",
    steps: [
      { label: "Search Ad", detail: "Google · Meta · TikTok" },
      { label: "Landing Page", detail: "Conversion-engineered" },
      { label: "Lead Form", detail: "Tracked submission" },
      { label: "CRM", detail: "Instant sync" },
      { label: "Appointment", detail: "Auto-booked" },
      { label: "Revenue", detail: "Attributed & reported" },
    ],
  },
  comparison: {
    before: {
      title: "Before FTW",
      items: [
        { label: "Cost Per Lead", value: "$78", bad: true },
        { label: "Conversion Rate", value: "2.1%", bad: true },
        { label: "Tracking", value: "None", bad: true },
        { label: "Funnel", value: "Broken", bad: true },
      ],
    },
    after: {
      title: "After FTW",
      items: [
        { label: "Cost Per Lead", value: "$36" },
        { label: "Conversion Rate", value: "6.8%" },
        { label: "Tracking", value: "Full attribution" },
        { label: "Funnel", value: "Optimized end-to-end" },
      ],
    },
  },
};

export function getPlatformShowcase(slug: string): PlatformShowcaseConfig | undefined {
  return slug === "paid-ads-management" ? paidAdsShowcase : undefined;
}
