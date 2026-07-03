import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { AutomationMetric, WorkflowNode } from "@/content/automation-showcase";

export const constructionCustomSoftwareModules = {
  showcase: {
    eyebrow: "Estimating Platform Example",
    title: "See What Fast, Consistent Bidding Looks Like for a Remodeler",
    lede:
      "Northgate Design-Build replaced spreadsheet estimates with a custom estimating and proposal platform — every estimator bids with the same assemblies, margins, and professional output.",
    workflowNodes: [
      {
        id: "intake",
        label: "Project Intake",
        detail: "Walkthrough notes · scope · photos",
        type: "trigger",
      },
      {
        id: "estimate",
        label: "Assembly Pricing",
        detail: "Trade assemblies · labor · materials",
        type: "condition",
      },
      {
        id: "proposal",
        label: "Proposal Builder",
        detail: "Branded PDF · line items · options",
        type: "action",
      },
      {
        id: "pipeline",
        label: "Pipeline & Close",
        detail: "Follow-up · e-sign · job kickoff",
        type: "output",
      },
    ] satisfies WorkflowNode[],
    metrics: [
      { label: "Bid turnaround", before: "5 days", after: "1 day", improved: true },
      { label: "Estimate variance", before: "±18%", after: "±4%", improved: true },
      { label: "Close rate", before: "22%", after: "38%", improved: true },
    ] satisfies AutomationMetric[],
  },

  funnel: {
    eyebrow: "Proposal Pipeline",
    title: "Turn Walkthroughs Into Signed Contracts Faster",
    lede:
      "Custom estimating software connects scope capture, pricing logic, and proposal delivery — so every bid is fast, consistent, and professional.",
    stages: [
      { label: "Site Walkthroughs", value: 68 },
      { label: "Estimates Started", value: 64 },
      { label: "Proposals Sent", value: 58 },
      { label: "Client Reviews", value: 42 },
      { label: "Signed Contracts", value: 23 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Estimating Software ROI Calculator",
    title: "Estimate What Faster Bidding Could Recover",
    lede:
      "For builders, winning one additional project per month from faster, more professional proposals often pays for the entire platform.",
    defaults: {
      monthlyVisitors: 18,
      currentRate: 22,
      improvedRate: 38,
      averageValue: 92000,
    },
    limits: {
      monthlyVisitors: { min: 4, max: 60, step: 1 },
      currentRate: { min: 10, max: 40, step: 1 },
      improvedRate: { min: 20, max: 55, step: 1 },
      averageValue: { min: 25000, max: 500000, step: 5000 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly proposals sent",
      currentRate: "Current close rate (%)",
      improvedRate: "Improved close rate (%)",
      averageValue: "Average project value ($)",
      currentOpportunities: "Current signed projects",
      improvedOpportunities: "Improved signed projects",
      additionalOpportunities: "Additional projects",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Spreadsheet Chaos to a Unified Estimating System",
    before: {
      label: "Before",
      headline: "Every estimator, their own spreadsheet.",
      items: [
        "5-day average bid turnaround",
        "Inconsistent pricing across estimators",
        "Proposals built manually in Word",
        "No pipeline visibility for principals",
        "Lost jobs to faster bidders",
      ],
    },
    after: {
      label: "After",
      headline: "One platform from scope to signature.",
      items: [
        "Same-day proposals with branded output",
        "Assembly-based pricing — ±4% variance",
        "Automated follow-up on open proposals",
        "Pipeline dashboard for every open bid",
        "Close rate doubled with same-week bids",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
