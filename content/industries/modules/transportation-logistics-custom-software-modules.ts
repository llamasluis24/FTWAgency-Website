import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";
import type { AutomationMetric, WorkflowNode } from "@/content/automation-showcase";

export const transportationLogisticsCustomSoftwareModules = {
  showcase: {
    eyebrow: "Dispatch Platform Example",
    title: "See What Quoting, Dispatch & Tracking Look Like as One System",
    lede:
      "Velocity Couriers replaced phone tag and whiteboards with a custom dispatch platform — instant quotes, live fleet view, and customer tracking in one place.",
    workflowNodes: [
      {
        id: "quote",
        label: "Quote Request",
        detail: "Web form · API · phone intake",
        type: "trigger",
      },
      {
        id: "pricing",
        label: "Auto Pricing",
        detail: "Distance · weight · lane rules",
        type: "condition",
      },
      {
        id: "assign",
        label: "Assign Driver",
        detail: "Nearest available · capacity match",
        type: "action",
      },
      {
        id: "track",
        label: "Live Tracking",
        detail: "GPS · ETA · customer portal",
        type: "output",
      },
    ] satisfies WorkflowNode[],
    metrics: [
      { label: "Quote turnaround", before: "4.2 hr", after: "6 min", improved: true },
      { label: "Fleet utilization", before: "68%", after: "85%", improved: true },
      { label: "Status calls / day", before: "84", after: "38", improved: true },
    ] satisfies AutomationMetric[],
  },

  funnel: {
    eyebrow: "Operations Pipeline",
    title: "Turn Quote Requests Into On-Time Deliveries",
    lede:
      "Custom software connects quoting, dispatch, and tracking — so every job flows from request to proof-of-delivery without manual handoffs.",
    stages: [
      { label: "Quote Requests", value: 380 },
      { label: "Quotes Sent Instantly", value: 352 },
      { label: "Confirmed Bookings", value: 186 },
      { label: "Dispatched Loads", value: 178 },
      { label: "On-Time Deliveries", value: 171 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Dispatch Software ROI Calculator",
    title: "Estimate What Better Utilization Could Add",
    lede:
      "For fleet operators, even a modest utilization lift and faster quoting translate directly into revenue per truck — without adding vehicles.",
    defaults: {
      monthlyVisitors: 24,
      currentRate: 68,
      improvedRate: 85,
      averageValue: 18500,
    },
    limits: {
      monthlyVisitors: { min: 5, max: 80, step: 1 },
      currentRate: { min: 40, max: 80, step: 1 },
      improvedRate: { min: 55, max: 95, step: 1 },
      averageValue: { min: 5000, max: 50000, step: 500 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Active trucks / vehicles",
      currentRate: "Current utilization rate (%)",
      improvedRate: "Improved utilization rate (%)",
      averageValue: "Revenue per truck / month ($)",
      currentOpportunities: "Current monthly revenue",
      improvedOpportunities: "Improved monthly revenue",
      additionalOpportunities: "Utilization gain",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Whiteboard Dispatch to a Unified Operations Platform",
    before: {
      label: "Before",
      headline: "Phone, spreadsheet, whiteboard.",
      items: [
        "Manual quoting by email and phone",
        "Dispatch on a whiteboard and group text",
        "No real-time fleet visibility",
        "Customers call for every status update",
        "Utilization capped at 68%",
      ],
    },
    after: {
      label: "After",
      headline: "One platform from quote to delivery.",
      items: [
        "Instant quotes with lane-based pricing rules",
        "Drag-and-drop dispatch with live GPS",
        "Customer self-service tracking portal",
        "Automated SMS updates at every milestone",
        "Fleet utilization up 25% without new trucks",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
