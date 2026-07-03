import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { BusinessProfile } from "@/content/reputation-showcase";

export const healthcareReputationModules = {
  showcase: {
    eyebrow: "Healthcare Reputation Example",
    title: "See How a Dental Practice Climbed From 3.9 to 4.9 Stars",
    lede:
      "Patients choose providers by reviews before they ever call. A systematic review engine turns every completed visit into proof that compounds your map pack ranking and new patient bookings.",
    beforeProfile: {
      name: "Lakeside Dental Studio",
      rating: 3.9,
      reviewCount: 52,
      distribution: [4, 5, 7, 14, 22],
    } satisfies BusinessProfile,
    afterProfile: {
      name: "Lakeside Dental Studio",
      rating: 4.9,
      reviewCount: 468,
      distribution: [2, 3, 6, 42, 415],
    } satisfies BusinessProfile,
    competitorProfile: {
      name: "BrightSmile Family Dental",
      rating: 4.4,
      reviewCount: 118,
      distribution: [3, 4, 8, 28, 75],
    } satisfies BusinessProfile,
  },

  funnel: {
    eyebrow: "Review Engine",
    title: "Turn Completed Visits Into Five-Star Proof",
    lede:
      "Every appointment is a chance to strengthen your reputation. Automated review requests after treatment capture satisfaction while the experience is fresh.",
    stages: [
      { label: "Visits Completed", value: 420 },
      { label: "Review Requests Sent", value: 378 },
      { label: "Reviews Received", value: 210 },
      { label: "4–5 Star Reviews", value: 198 },
      { label: "New Patient Inquiries", value: 62 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Reputation Impact Calculator",
    title: "Estimate What a Stronger Rating Profile Could Mean",
    lede:
      "Higher ratings improve map pack rank and patient conversion. Even modest review growth can meaningfully increase new patient bookings for practices.",
    defaults: {
      monthlyVisitors: 180,
      currentRate: 24,
      improvedRate: 42,
      averageValue: 680,
    },
    limits: {
      monthlyVisitors: { min: 40, max: 600, step: 10 },
      currentRate: { min: 10, max: 40, step: 1 },
      improvedRate: { min: 20, max: 60, step: 1 },
      averageValue: { min: 200, max: 3000, step: 50 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly completed visits",
      currentRate: "Current review request conversion (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average new patient value ($)",
      currentOpportunities: "Current new reviews / mo",
      improvedOpportunities: "Improved new reviews / mo",
      additionalOpportunities: "Additional reviews",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Thin Reviews to Category Leader",
    before: {
      label: "Before",
      headline: "52 reviews wasn't winning patients.",
      items: [
        "Manual review asks — inconsistent",
        "3.9 stars losing to 4.5+ competitors",
        "Negative reviews unanswered",
        "No system after appointments",
        "Map pack rank stuck at #4",
      ],
    },
    after: {
      label: "After",
      headline: "468 reviews at 4.9 stars.",
      items: [
        "Automated SMS review requests post-visit",
        "4.9 rating — top dental practice locally",
        "Every review answered within 24 hours",
        "Sentiment routing for concerns pre-public",
        "Map pack rank #1–2 for core treatments",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
