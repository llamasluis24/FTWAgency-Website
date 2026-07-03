import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const transportationLogisticsMobileAppModules = {
  showcase: {
    eyebrow: "Driver App Example",
    title: "See What a Driver App Looks Like for a Regional Courier Fleet",
    lede:
      "Velocity Couriers' driver app connects the road to dispatch — route stops, proof-of-delivery, and live GPS sync so the office always knows where every truck is.",
    driverName: "Marcus T.",
    routeLabel: "Route 7 — Denver Metro",
    stopsCompleted: 3,
    stopsTotal: 8,
    currentStop: {
      name: "Apex Manufacturing",
      address: "1842 Industrial Blvd, Aurora, CO",
      window: "10:30 – 11:00 AM",
      pieces: 4,
    },
    nextStops: [
      { name: "Front Range Supply", eta: "11:24 AM" },
      { name: "Peak Retail Co.", eta: "12:05 PM" },
    ],
  },

  funnel: {
    eyebrow: "Driver App Pipeline",
    title: "Turn Field Activity Into Real-Time Operations Data",
    lede:
      "A driver app captures every stop, signature, and GPS ping — so dispatch, customers, and billing all work from the same live data.",
    stages: [
      { label: "Active Drivers", value: 48 },
      { label: "Daily App Logins", value: 46 },
      { label: "Stops Completed via App", value: 920 },
      { label: "POD Captured Digitally", value: 915 },
      { label: "Customer Tracking Views", value: 2400 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Driver App ROI Calculator",
    title: "Estimate What Real-Time Field Data Could Save",
    lede:
      "For fleet operators, cutting status calls and dispatch coordination time frees office staff to book more loads — while drivers finish routes faster.",
    defaults: {
      monthlyVisitors: 48,
      currentRate: 54,
      improvedRate: 78,
      averageValue: 420,
    },
    limits: {
      monthlyVisitors: { min: 10, max: 120, step: 2 },
      currentRate: { min: 20, max: 70, step: 1 },
      improvedRate: { min: 40, max: 90, step: 1 },
      averageValue: { min: 100, max: 2000, step: 25 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Active drivers",
      currentRate: "Stops completed via app (%)",
      improvedRate: "Improved app adoption (%)",
      averageValue: "Office hours saved / driver / month ($)",
      currentOpportunities: "Current hours saved",
      improvedOpportunities: "Improved hours saved",
      additionalOpportunities: "Additional hours saved",
      addedRevenue: "Estimated monthly savings",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Radio Check-Ins to a Connected Driver Experience",
    before: {
      label: "Before",
      headline: "Drivers call dispatch for everything.",
      items: [
        "Paper manifests and phone check-ins",
        "No proof-of-delivery in the field",
        "Dispatch blind between stops",
        "Customers call for ETA updates",
        "54% of stops logged manually",
      ],
    },
    after: {
      label: "After",
      headline: "Every driver connected in real time.",
      items: [
        "Digital route list with turn-by-turn",
        "Photo + signature POD at every stop",
        "Live GPS visible to dispatch and customers",
        "Automated ETA texts on en route",
        "78% app adoption, 60% fewer status calls",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
