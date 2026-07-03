import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { BusinessProfile } from "@/content/reputation-showcase";

export const constructionReputationModules = {
  showcase: {
    eyebrow: "Construction Reputation Example",
    title: "See How a Remodeler Climbed From 3.8 to 4.9 Stars",
    lede:
      "Homeowners vet contractors on reviews before they ever request a walkthrough. A systematic review engine turns every completed project into proof that justifies premium pricing.",
    beforeProfile: {
      name: "Northgate Design-Build",
      rating: 3.8,
      reviewCount: 28,
      distribution: [1, 3, 5, 10, 9],
    } satisfies BusinessProfile,
    afterProfile: {
      name: "Northgate Design-Build",
      rating: 4.9,
      reviewCount: 186,
      distribution: [1, 2, 4, 18, 161],
    } satisfies BusinessProfile,
    competitorProfile: {
      name: "Pacific Ridge Construction",
      rating: 4.5,
      reviewCount: 64,
      distribution: [2, 3, 6, 18, 35],
    } satisfies BusinessProfile,
  },

  funnel: {
    eyebrow: "Review Engine",
    title: "Turn Completed Projects Into Five-Star Proof",
    lede:
      "Every finished remodel is a chance to strengthen your reputation. Automated review requests at project close capture satisfaction while craftsmanship is fresh.",
    stages: [
      { label: "Projects Completed", value: 23 },
      { label: "Review Requests Sent", value: 21 },
      { label: "Reviews Received", value: 16 },
      { label: "4–5 Star Reviews", value: 15 },
      { label: "New Inquiries from Reviews", value: 12 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Reputation Impact Calculator",
    title: "Estimate What a Stronger Rating Profile Could Mean",
    lede:
      "Higher ratings improve search rank and close rate on high-ticket projects. Even modest review growth can meaningfully increase qualified walkthrough requests.",
    defaults: {
      monthlyVisitors: 12,
      currentRate: 55,
      improvedRate: 78,
      averageValue: 92000,
    },
    limits: {
      monthlyVisitors: { min: 3, max: 40, step: 1 },
      currentRate: { min: 20, max: 70, step: 1 },
      improvedRate: { min: 40, max: 90, step: 1 },
      averageValue: { min: 25000, max: 500000, step: 5000 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly completed projects",
      currentRate: "Current review request conversion (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average project value ($)",
      currentOpportunities: "Current new reviews / mo",
      improvedOpportunities: "Improved new reviews / mo",
      additionalOpportunities: "Additional reviews",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Sparse Reviews to Category Leader",
    before: {
      label: "Before",
      headline: "28 reviews wasn't closing premium jobs.",
      items: [
        "Manual review asks — hit or miss",
        "3.8 stars losing to 4.5+ competitors",
        "No case studies tied to reviews",
        "Negative feedback handled reactively",
        "Referrals-only pipeline",
      ],
    },
    after: {
      label: "After",
      headline: "186 reviews at 4.9 stars.",
      items: [
        "Automated review requests at project close",
        "4.9 rating — top remodeler in market",
        "Case studies linked to review themes",
        "Sentiment routing for concerns pre-public",
        "3× more qualified project inquiries",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
