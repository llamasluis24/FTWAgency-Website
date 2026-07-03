import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { SerpResult } from "@/content/seo-showcase";

export const homeServicesGbpModules = {
  showcase: {
    eyebrow: "Home Services GBP Example",
    title: "See What Map Pack Dominance Looks Like for an HVAC Company",
    lede:
      "When a homeowner's AC fails, they search on their phone and call one of the top three map results. Your Google Business Profile is the storefront that wins or loses that moment.",
    searchQuery: "emergency hvac repair near me",
    serpResults: [
      {
        title: "Ad · CoolBreeze HVAC",
        url: "coolbreeze.example.com",
        description: "24/7 emergency AC repair. Call now for same-day service.",
        isAd: true,
      },
      {
        title: "Summit Comfort HVAC — 24/7 Emergency Repair",
        url: "summitcomfort.com › riverside",
        description:
          "4.9★ · 312 reviews · Open 24 hours · Licensed & insured · Same-day emergency AC and furnace repair.",
        isHighlighted: true,
      },
      {
        title: "Arctic Air Solutions",
        url: "arcticair.example.com",
        description: "4.6★ · 89 reviews · HVAC repair and installation.",
      },
      {
        title: "Valley Heating & Cooling",
        url: "valleyhvac.example.com",
        description: "4.5★ · 156 reviews · Family-owned since 1998.",
      },
    ] satisfies SerpResult[],
    profileStats: [
      { label: "Profile views / mo", value: "2,840" },
      { label: "Calls from GBP", value: "186" },
      { label: "Direction requests", value: "94" },
    ],
  },

  funnel: {
    eyebrow: "Local Discovery",
    title: "Turn Map Pack Visibility Into Booked Service Calls",
    lede:
      "Homeowners don't browse — they pick from the top local results and call. A optimized GBP puts your business in that shortlist every time.",
    stages: [
      { label: '"Near Me" Searches', value: 12400 },
      { label: "Map Pack Impressions", value: 6200 },
      { label: "Profile Views", value: 2840 },
      { label: "Calls & Direction Requests", value: 280 },
      { label: "Booked Jobs", value: 94 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "GBP Impact Calculator",
    title: "Estimate What Stronger Map Pack Visibility Could Mean",
    lede:
      "For home service companies, even a few additional booked jobs per month from Google Maps adds meaningful revenue — without increasing ad spend.",
    defaults: {
      monthlyVisitors: 600,
      currentRate: 2.5,
      improvedRate: 4.8,
      averageValue: 850,
    },
    labels: {
      monthlyVisitors: "Monthly profile views",
      currentRate: "Current call booking rate (%)",
      improvedRate: "Improved booking rate (%)",
      averageValue: "Average job value ($)",
      currentOpportunities: "Current monthly jobs",
      improvedOpportunities: "Improved monthly jobs",
      additionalOpportunities: "Additional jobs",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Buried on Page Two to Top of the Map Pack",
    before: {
      label: "Before",
      headline: "Invisible when it matters most.",
      items: [
        "Incomplete profile with outdated hours",
        "12 reviews at 3.8 stars",
        "No service area or category optimization",
        "Competitors own the map pack",
        "Calls go to the business above you",
      ],
    },
    after: {
      label: "After",
      headline: "First call homeowners make.",
      items: [
        "Fully optimized categories and services",
        "310+ reviews at 4.9 stars",
        "Weekly posts and fresh project photos",
        "Top-3 map pack for core service terms",
        "Profile drives 180+ calls per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
