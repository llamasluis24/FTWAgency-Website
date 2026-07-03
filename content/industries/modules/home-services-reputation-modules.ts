import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { BusinessProfile } from "@/content/reputation-showcase";

export const homeServicesReputationModules = {
  showcase: {
    eyebrow: "Home Services Reputation Example",
    title: "See How an HVAC Company Climbed From 3.9 to 4.9 Stars",
    lede:
      "Homeowners trust star ratings before they trust your truck. A systematic review engine turns every completed job into proof that compounds your map pack ranking.",
    beforeProfile: {
      name: "Summit Comfort HVAC",
      rating: 3.9,
      reviewCount: 47,
      distribution: [8, 6, 9, 12, 12],
    } satisfies BusinessProfile,
    afterProfile: {
      name: "Summit Comfort HVAC",
      rating: 4.9,
      reviewCount: 312,
      distribution: [2, 3, 8, 41, 258],
    } satisfies BusinessProfile,
    competitorProfile: {
      name: "Arctic Air Solutions",
      rating: 4.4,
      reviewCount: 89,
      distribution: [4, 5, 8, 22, 50],
    } satisfies BusinessProfile,
  },

  funnel: {
    eyebrow: "Review Engine",
    title: "Turn Completed Jobs Into Five-Star Proof",
    lede:
      "Every job is a chance to strengthen your reputation. Automated review requests at the right moment capture satisfaction while it's fresh.",
    stages: [
      { label: "Jobs Completed", value: 186 },
      { label: "Review Requests Sent", value: 168 },
      { label: "Reviews Received", value: 94 },
      { label: "4–5 Star Reviews", value: 88 },
      { label: "New Calls from Reviews", value: 34 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Reputation Impact Calculator",
    title: "Estimate What a Stronger Rating Profile Could Mean",
    lede:
      "Higher ratings improve map pack rank and conversion. Even modest review growth can meaningfully increase inbound calls for home service businesses.",
    defaults: {
      monthlyVisitors: 140,
      currentRate: 22,
      improvedRate: 38,
      averageValue: 720,
    },
    labels: {
      monthlyVisitors: "Monthly completed jobs",
      currentRate: "Current review request conversion (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average job value ($)",
      currentOpportunities: "Current new reviews / mo",
      improvedOpportunities: "Improved new reviews / mo",
      additionalOpportunities: "Additional reviews",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible Ratings to Category Leader",
    before: {
      label: "Before",
      headline: "47 reviews wasn't enough.",
      items: [
        "Manual review asks — inconsistent",
        "3.9 stars losing to 4.5+ competitors",
        "Negative reviews unanswered",
        "No system after job completion",
        "Map pack rank stuck at #5",
      ],
    },
    after: {
      label: "After",
      headline: "312 reviews at 4.9 stars.",
      items: [
        "Automated SMS review requests post-job",
        "4.9 rating — top in local category",
        "Every review answered within 24 hours",
        "Sentiment routing for negative feedback",
        "Map pack rank #1–2 for core terms",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
