import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const restaurantsHospitalityMobileAppModules = {
  showcase: {
    eyebrow: "Loyalty App Example",
    title: "See What a Loyalty App Looks Like for a Restaurant Group",
    lede:
      "Harvest & Table's loyalty app keeps regulars coming back — points on every visit, exclusive offers, and one-tap reservations across all three locations.",
    guestName: "Sarah M.",
    memberTier: "Harvest Regular",
    pointsBalance: 840,
    pointsToReward: 1000,
    nextReward: "Free appetizer",
    locations: ["Downtown", "Riverside", "Market Square"],
    recentActivity: [
      { label: "Brunch visit — Downtown", points: "+120", date: "Sat" },
      { label: "Tuesday special redeemed", points: "−200", date: "Tue" },
    ],
    perks: [
      { label: "Priority reservations", active: true },
      { label: "Birthday reward", active: true },
      { label: "Exclusive menu previews", active: false },
    ],
  },

  funnel: {
    eyebrow: "Loyalty App Pipeline",
    title: "Turn App Downloads Into Repeat Covers",
    lede:
      "A loyalty app captures guest data, rewards repeat visits, and gives you a direct channel that doesn't depend on third-party platforms.",
    stages: [
      { label: "App Downloads", value: 4200 },
      { label: "Active Monthly Users", value: 1860 },
      { label: "Visits Logged via App", value: 3720 },
      { label: "Rewards Redeemed", value: 620 },
      { label: "Repeat Visits (3+)", value: 840 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Loyalty App ROI Calculator",
    title: "Estimate What a Direct Guest Channel Could Mean",
    lede:
      "For restaurant groups, shifting even a portion of repeat visits to a direct loyalty app reduces platform fees and increases lifetime guest value.",
    defaults: {
      monthlyVisitors: 620,
      currentRate: 28,
      improvedRate: 42,
      averageValue: 78,
    },
    limits: {
      monthlyVisitors: { min: 100, max: 3000, step: 20 },
      currentRate: { min: 10, max: 50, step: 1 },
      improvedRate: { min: 18, max: 65, step: 1 },
      averageValue: { min: 30, max: 200, step: 5 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Active app users / month",
      currentRate: "Visits per user / month",
      improvedRate: "Improved visit frequency",
      averageValue: "Average check value ($)",
      currentOpportunities: "Current monthly visits",
      improvedOpportunities: "Improved monthly visits",
      additionalOpportunities: "Additional visits",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Punch Cards to a Connected Loyalty Experience",
    before: {
      label: "Before",
      headline: "Guests scattered across platforms.",
      items: [
        "Paper punch cards — easily lost",
        "No guest data beyond POS receipts",
        "Third-party apps take 15–30% commission",
        "No cross-location loyalty tracking",
        "28% of revenue from repeat guests",
      ],
    },
    after: {
      label: "After",
      headline: "Every regular connected in one app.",
      items: [
        "Digital points on every visit, all locations",
        "Push offers for slow nights and specials",
        "One-tap reservations across the group",
        "Guest preferences tracked for personalization",
        "31% of revenue from loyalty app members",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
