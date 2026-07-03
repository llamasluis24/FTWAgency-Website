import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { BusinessProfile } from "@/content/reputation-showcase";

export const professionalServicesReputationModules = {
  showcase: {
    eyebrow: "Professional Services Reputation Example",
    title: "See How a Law Firm Climbed From 3.9 to 4.8 Stars",
    lede:
      "Clients choose firms by reviews before they choose by credentials. A systematic review engine turns every successful engagement into proof that justifies premium fees.",
    beforeProfile: {
      name: "Meridian Law Group",
      rating: 3.9,
      reviewCount: 48,
      distribution: [5, 6, 8, 14, 15],
    } satisfies BusinessProfile,
    afterProfile: {
      name: "Meridian Law Group",
      rating: 4.8,
      reviewCount: 214,
      distribution: [2, 3, 6, 38, 165],
    } satisfies BusinessProfile,
    competitorProfile: {
      name: "Riverside Legal Center",
      rating: 4.4,
      reviewCount: 92,
      distribution: [4, 5, 8, 24, 51],
    } satisfies BusinessProfile,
  },

  funnel: {
    eyebrow: "Review Engine",
    title: "Turn Successful Engagements Into Five-Star Proof",
    lede:
      "Every closed matter is a chance to strengthen your reputation. Automated review requests at the right moment capture satisfaction while the outcome is fresh.",
    stages: [
      { label: "Matters Closed", value: 84 },
      { label: "Review Requests Sent", value: 76 },
      { label: "Reviews Received", value: 42 },
      { label: "4–5 Star Reviews", value: 40 },
      { label: "New Consultation Inquiries", value: 18 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Reputation Impact Calculator",
    title: "Estimate What a Stronger Rating Profile Could Mean",
    lede:
      "Higher ratings improve local rank and client conversion. Even modest review growth can meaningfully increase consultations for professional firms.",
    defaults: {
      monthlyVisitors: 48,
      currentRate: 26,
      improvedRate: 44,
      averageValue: 5200,
    },
    limits: {
      monthlyVisitors: { min: 10, max: 120, step: 2 },
      currentRate: { min: 10, max: 50, step: 1 },
      improvedRate: { min: 20, max: 65, step: 1 },
      averageValue: { min: 1000, max: 50000, step: 500 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly matters closed",
      currentRate: "Current review request conversion (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average engagement value ($)",
      currentOpportunities: "Current new reviews / mo",
      improvedOpportunities: "Improved new reviews / mo",
      additionalOpportunities: "Additional reviews",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Thin Reviews to Trusted Local Authority",
    before: {
      label: "Before",
      headline: "48 reviews wasn't winning clients.",
      items: [
        "Manual review asks — inconsistent",
        "3.9 stars losing to 4.5+ competitors",
        "Negative reviews unanswered",
        "No system after matter close",
        "Prospects chose better-rated firms",
      ],
    },
    after: {
      label: "After",
      headline: "214 reviews at 4.8 stars.",
      items: [
        "Automated review requests post-engagement",
        "4.8 rating — top-rated firm locally",
        "Every review answered within 24 hours",
        "Sentiment routing for concerns pre-public",
        "Consultation volume up 2.4× from reviews",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
