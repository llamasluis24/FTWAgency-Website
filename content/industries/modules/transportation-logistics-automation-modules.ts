import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const transportationLogisticsAutomationModules = {
  showcase: {
    eyebrow: "Logistics Automation Example",
    title: "See How Slow Quotes Turn Into Booked Loads Automatically",
    lede:
      "Customers book the first credible quote. Automation follows up in seconds, sends pricing, and confirms pickup windows before they call your competitor.",
    smsMessages: [
      { sender: "system", text: "New quote request — 3BR move, Denver → Phoenix (842 mi)" },
      {
        sender: "business",
        text: "Hi Sarah! This is Summit Freight & Moving. Your long-distance quote is ready: $4,280 all-in with packing option. Reply BOOK to hold your Friday pickup window.",
      },
      { sender: "customer", text: "Can you do Thursday instead?" },
      {
        sender: "business",
        text: "Thursday 8–10 AM pickup is open ✓ Reply YES to confirm and we'll send your tracking link + crew details.",
      },
      { sender: "customer", text: "Yes confirm Thursday" },
      {
        sender: "business",
        text: "Booked ✓ Crew assigned. Track your move at summitfreight.com/track/SFM-4821. We'll text when the truck is en route.",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Quote Follow-Up Automation",
    title: "Every Quote Gets Nurtured Until They Book or Decline",
    lede:
      "Instant quotes, pickup reminders, and en-route updates run automatically — so no lead goes cold while dispatch is coordinating the fleet.",
    steps: [
      { day: "Instant", channel: "SMS", action: "Quote delivered with pricing", status: "sent" },
      { day: "Hour +2", channel: "Email", action: "Quote summary + FAQ", status: "opened" },
      { day: "Day 1", channel: "SMS", action: "Pickup window reminder", status: "opened" },
      { day: "Pickup day", channel: "SMS", action: "Crew en route notification", status: "sent" },
      { day: "Delivery day", channel: "SMS", action: "Delivery confirmation + review", status: "replied" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Speed-to-Quote",
    title: "Turn Quote Requests Into Confirmed Loads",
    lede:
      "Every hour a shipper waits is an hour they book someone else. Instant follow-up automation wins jobs your office can't respond to fast enough.",
    stages: [
      { label: "Quote Requests", value: 420 },
      { label: "Quotes Sent < 5 min", value: 378 },
      { label: "Customer Responses", value: 252 },
      { label: "Confirmed Bookings", value: 168 },
      { label: "Completed Moves", value: 162 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Dispatch and sales teams lose hours to quote follow-up, status updates, and customer comms. See how much repetitive admin time automation could give back — without adding dispatch headcount.",
    defaults: {
      manualHoursPerWeek: 12,
      automationScopeId: "standard",
      hourlyRate: 45,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Quote acknowledgments & delivery status texts",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Quote follow-up, booking & dispatch updates",
        automatablePercent: 55,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Route updates, POD confirmations & customer nurture",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on quote follow-up & dispatch comms",
      automationScope: "What would you automate first?",
      hourlyRate: "Admin time value for estimates ($/hr)",
      hoursSavedPerWeek: "Hours reclaimed per week",
      hoursSavedPerMonth: "Hours reclaimed per month",
      adminCapacity: "Equivalent admin capacity",
      adminTimeValue: "Optional admin time value",
    },
    responseTime: { before: "4–24 hrs", after: "under 5 min" },
  } satisfies IndustryModuleTimeSavingsCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Manual Callbacks to Instant Booking",
    before: {
      label: "Before",
      headline: "Slow quotes = lost loads.",
      items: [
        "Quotes take 4–24 hours to send",
        "No automated follow-up on open quotes",
        "12+ hrs/week on quote follow-up and status calls",
        "Customers call repeatedly for ETAs",
        "35% of quotes never get a second touch",
      ],
    },
    after: {
      label: "After",
      headline: "Quotes sent and booked in minutes.",
      items: [
        "Instant quote delivery via SMS + email",
        "Automated nurture until book or decline",
        "Pickup and en-route updates on autopilot",
        "Self-service tracking cuts status calls 60%",
        "48% quote-to-book rate on nurtured leads",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
