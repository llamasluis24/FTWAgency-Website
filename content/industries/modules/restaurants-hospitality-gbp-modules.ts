import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { SerpResult } from "@/content/seo-showcase";

export const restaurantsHospitalityGbpModules = {
  showcase: {
    eyebrow: "Restaurant GBP Example",
    title: "See What Map Pack Dominance Looks Like for a Farm-to-Table Group",
    lede:
      "When a couple searches 'brunch near me' on Saturday morning, they pick from the top three map results. Your Google Business Profile is the storefront that wins or loses that table.",
    searchQuery: "farm to table brunch near me",
    serpResults: [
      {
        title: "Ad · Urban Plate Kitchen",
        url: "urbanplate.example.com",
        description: "Weekend brunch reservations. Book your table online today.",
        isAd: true,
      },
      {
        title: "Harvest & Table — Farm-to-Table Brunch & Dinner",
        url: "harvestandtable.com › downtown",
        description:
          "4.7★ · 428 reviews · Brunch Sat–Sun · Seasonal menu · Patio seating · Reserve a table online.",
        isHighlighted: true,
      },
      {
        title: "The Garden Fork",
        url: "gardenfork.example.com",
        description: "4.5★ · 186 reviews · American · Brunch and dinner.",
      },
      {
        title: "Locavore Bistro",
        url: "locavore.example.com",
        description: "4.4★ · 92 reviews · Farm-fresh ingredients, craft cocktails.",
      },
    ] satisfies SerpResult[],
    profileStats: [
      { label: "Profile views / mo", value: "6,240" },
      { label: "Reservation clicks", value: "412" },
      { label: "Direction requests", value: "286" },
    ],
  },

  funnel: {
    eyebrow: "Local Discovery",
    title: "Turn Map Pack Visibility Into Booked Covers",
    lede:
      "Diners don't browse — they pick from the top local results and reserve. An optimized GBP puts your restaurant in that shortlist every night.",
    stages: [
      { label: '"Near Me" Searches', value: 28400 },
      { label: "Map Pack Impressions", value: 14200 },
      { label: "Profile Views", value: 6240 },
      { label: "Reservation & Menu Clicks", value: 698 },
      { label: "Booked Covers", value: 412 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "GBP Impact Calculator",
    title: "Estimate What Stronger Map Pack Visibility Could Mean",
    lede:
      "For restaurants, even a modest lift in reservation clicks from Google Maps fills weeknight tables — without increasing ad spend.",
    defaults: {
      monthlyVisitors: 1200,
      currentRate: 4.2,
      improvedRate: 7.8,
      averageValue: 68,
    },
    limits: {
      monthlyVisitors: { min: 200, max: 8000, step: 100 },
      currentRate: { min: 1, max: 12, step: 0.2 },
      improvedRate: { min: 2, max: 18, step: 0.2 },
      averageValue: { min: 25, max: 200, step: 5 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly profile views",
      currentRate: "Current reservation rate (%)",
      improvedRate: "Improved reservation rate (%)",
      averageValue: "Average cover value ($)",
      currentOpportunities: "Current monthly covers",
      improvedOpportunities: "Improved monthly covers",
      additionalOpportunities: "Additional covers",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Buried on Page Two to Top of the Map Pack",
    before: {
      label: "Before",
      headline: "Invisible when diners decide.",
      items: [
        "Incomplete profile with outdated menu",
        "86 reviews at 3.8 stars",
        "No brunch hours or category optimization",
        "Competitors own the map pack",
        "Weeknight tables sit empty",
      ],
    },
    after: {
      label: "After",
      headline: "First restaurant diners choose.",
      items: [
        "Fully optimized categories and menu links",
        "428+ reviews at 4.7 stars across locations",
        "Weekly posts with food photos and specials",
        "Top-3 map pack for brunch and dinner terms",
        "GBP drives 400+ reservation clicks per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
