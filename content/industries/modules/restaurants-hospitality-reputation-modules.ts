import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { BusinessProfile } from "@/content/reputation-showcase";

export const restaurantsHospitalityReputationModules = {
  showcase: {
    eyebrow: "Restaurant Reputation Example",
    title: "See How a Restaurant Group Climbed From 3.8 to 4.7 Stars",
    lede:
      "Diners choose by stars before they choose by menu. A systematic review engine turns every great meal into proof that compounds your map pack ranking and reservation volume.",
    beforeProfile: {
      name: "Harvest & Table — Downtown",
      rating: 3.8,
      reviewCount: 86,
      distribution: [6, 8, 14, 28, 30],
    } satisfies BusinessProfile,
    afterProfile: {
      name: "Harvest & Table — Downtown",
      rating: 4.7,
      reviewCount: 428,
      distribution: [3, 4, 8, 52, 361],
    } satisfies BusinessProfile,
    competitorProfile: {
      name: "The Garden Fork",
      rating: 4.5,
      reviewCount: 186,
      distribution: [4, 6, 10, 38, 128],
    } satisfies BusinessProfile,
  },

  funnel: {
    eyebrow: "Review Engine",
    title: "Turn Great Meals Into Five-Star Proof",
    lede:
      "Every cover is a chance to strengthen your reputation. Automated review requests after dining capture satisfaction while the experience is fresh.",
    stages: [
      { label: "Covers Served", value: 3200 },
      { label: "Review Requests Sent", value: 2880 },
      { label: "Reviews Received", value: 576 },
      { label: "4–5 Star Reviews", value: 548 },
      { label: "New Reservation Inquiries", value: 186 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Reputation Impact Calculator",
    title: "Estimate What a Stronger Rating Profile Could Mean",
    lede:
      "Higher ratings improve map pack rank and diner conversion. Even modest review growth can meaningfully increase covers for restaurants.",
    defaults: {
      monthlyVisitors: 320,
      currentRate: 28,
      improvedRate: 48,
      averageValue: 72,
    },
    limits: {
      monthlyVisitors: { min: 80, max: 1200, step: 20 },
      currentRate: { min: 10, max: 50, step: 1 },
      improvedRate: { min: 20, max: 70, step: 1 },
      averageValue: { min: 30, max: 250, step: 5 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly covers served",
      currentRate: "Current review request conversion (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average cover value ($)",
      currentOpportunities: "Current new reviews / mo",
      improvedOpportunities: "Improved new reviews / mo",
      additionalOpportunities: "Additional reviews",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Thin Reviews to Neighborhood Favorite",
    before: {
      label: "Before",
      headline: "3.8 stars wasn't filling tables.",
      items: [
        "Manual review asks — inconsistent",
        "3.8 rating losing to 4.5+ competitors",
        "Negative reviews unanswered",
        "No system after dining",
        "Map pack rank stuck at #5",
      ],
    },
    after: {
      label: "After",
      headline: "428 reviews at 4.7 stars.",
      items: [
        "Automated SMS review requests post-visit",
        "4.7 rating — top farm-to-table locally",
        "Every review answered within 24 hours",
        "Sentiment routing for concerns pre-public",
        "Map pack rank #1–2 for brunch and dinner",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
