import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { AutomationMetric, WorkflowNode } from "@/content/automation-showcase";

export const manufacturingCustomSoftwareModules = {
  showcase: {
    eyebrow: "Quoting Platform Example",
    title: "See What Fast, Accurate RFQ Response Looks Like for a Fabricator",
    lede:
      "Apex Precision Manufacturing replaced spreadsheet quoting with a custom RFQ and job tracking platform — every estimator prices with the same material rates, labor standards, and margin rules.",
    workflowNodes: [
      {
        id: "rfq",
        label: "RFQ Intake",
        detail: "Print upload · BOM · quantity",
        type: "trigger",
      },
      {
        id: "estimate",
        label: "Cost Engine",
        detail: "Material · machine time · setup",
        type: "condition",
      },
      {
        id: "quote",
        label: "Quote Builder",
        detail: "Branded PDF · lead time · terms",
        type: "action",
      },
      {
        id: "floor",
        label: "Job Traveler",
        detail: "Schedule · WIP · ship date",
        type: "output",
      },
    ] satisfies WorkflowNode[],
    metrics: [
      { label: "Quote turnaround", before: "4 days", after: "4 hours", improved: true },
      { label: "Pricing variance", before: "±22%", after: "±5%", improved: true },
      { label: "Win rate", before: "18%", after: "32%", improved: true },
    ] satisfies AutomationMetric[],
  },

  funnel: {
    eyebrow: "Quote-to-Floor Pipeline",
    title: "Turn RFQs Into Shipped POs Without Spreadsheet Chaos",
    lede:
      "Custom quoting software connects print intake, cost logic, and shop-floor tracking — so every RFQ is answered fast and every job is visible from award to ship date.",
    stages: [
      { label: "RFQs Received", value: 186 },
      { label: "Quotes Generated", value: 178 },
      { label: "Quotes Sent < 24h", value: 168 },
      { label: "POs Awarded", value: 58 },
      { label: "Jobs Shipped On Time", value: 54 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Quoting Software ROI Calculator",
    title: "Estimate What Faster RFQ Response Could Recover",
    lede:
      "For manufacturers, winning one additional PO per month from faster, more consistent quoting often pays for the entire platform.",
    defaults: {
      monthlyVisitors: 42,
      currentRate: 18,
      improvedRate: 32,
      averageValue: 48000,
    },
    limits: {
      monthlyVisitors: { min: 8, max: 120, step: 2 },
      currentRate: { min: 8, max: 40, step: 1 },
      improvedRate: { min: 15, max: 55, step: 1 },
      averageValue: { min: 5000, max: 500000, step: 5000 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly RFQs quoted",
      currentRate: "Current win rate (%)",
      improvedRate: "Improved win rate (%)",
      averageValue: "Average PO value ($)",
      currentOpportunities: "Current won POs",
      improvedOpportunities: "Improved won POs",
      additionalOpportunities: "Additional POs",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Spreadsheet Quoting to a Unified RFQ System",
    before: {
      label: "Before",
      headline: "Every estimator, their own formula.",
      items: [
        "4-day average quote turnaround",
        "Pricing varied ±22% between estimators",
        "Job status tracked on whiteboards",
        "No visibility from quote to ship date",
        "Lost POs to faster shops",
      ],
    },
    after: {
      label: "After",
      headline: "One platform from RFQ to shipment.",
      items: [
        "Same-day quotes with branded output",
        "Centralized rates — ±5% variance",
        "Digital job travelers on every work order",
        "WIP dashboard for production managers",
        "Win rate nearly doubled with 24h quotes",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
