import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const manufacturingAutomationModules = {
  showcase: {
    eyebrow: "Manufacturing Automation Example",
    title: "See How Slow RFQ Follow-Up Loses POs — and Automation Wins Them",
    lede:
      "Buyers award to the first credible quote. Automation acknowledges RFQs instantly, sends pricing, and nurtures open quotes until they award or decline.",
    smsMessages: [
      { sender: "system", text: "New RFQ — 5,000 unit aluminum bracket, 6061-T6, ±0.002\" tolerance" },
      {
        sender: "business",
        text: "Hi Marcus — Apex Precision here. We received your bracket RFQ. Preliminary quote: $2.84/unit at 5,000 qty, 3-week lead. Reply DETAILS for full breakdown or CALL to discuss FAI.",
      },
      { sender: "customer", text: "Can you do 2-week lead time?" },
      {
        sender: "business",
        text: "2-week rush is available at $3.12/unit ✓ Reply AWARD to hold capacity and we'll send the formal quote + PO instructions within the hour.",
      },
      { sender: "customer", text: "Award at $3.12 — send PO docs" },
      {
        sender: "business",
        text: "Confirmed ✓ Formal quote #APX-2847 sent to your email. Production slot reserved. We'll text when FAI samples ship.",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "RFQ Nurture Automation",
    title: "Every Open Quote Gets Followed Up Until Award or Close",
    lede:
      "Instant acknowledgments, quote delivery, and production updates run automatically — so no RFQ goes cold while estimators are on the floor.",
    steps: [
      { day: "Instant", channel: "Email", action: "RFQ received confirmation", status: "sent" },
      { day: "Hour +4", channel: "Email", action: "Formal quote delivered", status: "opened" },
      { day: "Day 2", channel: "SMS", action: "Quote follow-up + lead time check", status: "replied" },
      { day: "Day 5", channel: "Email", action: "Capacity hold reminder", status: "opened" },
      { day: "Award", channel: "SMS", action: "Production kickoff + FAI schedule", status: "sent" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Speed-to-Quote",
    title: "Turn RFQ Submissions Into Awarded POs",
    lede:
      "Every day a buyer waits is a day they award someone else. Automated follow-up wins jobs your estimators can't chase manually.",
    stages: [
      { label: "RFQs Received", value: 186 },
      { label: "Acknowledged < 15 min", value: 178 },
      { label: "Quotes Delivered < 24h", value: 168 },
      { label: "Buyer Responses", value: 112 },
      { label: "POs Awarded", value: 58 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Inside sales and estimators lose hours to RFQ intake, quote delivery, and order status updates. See how much repetitive admin time automation could give back — without adding inside sales headcount.",
    defaults: {
      manualHoursPerWeek: 10,
      automationScopeId: "standard",
      hourlyRate: 48,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "RFQ acknowledgments & order confirmations",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Quote delivery, status updates & follow-up",
        automatablePercent: 52,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "RFQ nurture, production updates & delivery comms",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on RFQ intake & order status updates",
      automationScope: "What would you automate first?",
      hourlyRate: "Admin time value for estimates ($/hr)",
      hoursSavedPerWeek: "Hours reclaimed per week",
      hoursSavedPerMonth: "Hours reclaimed per month",
      adminCapacity: "Equivalent admin capacity",
      adminTimeValue: "Optional admin time value",
    },
    responseTime: { before: "2–24 hrs", after: "under 5 min" },
  } satisfies IndustryModuleTimeSavingsCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Manual Callbacks to Instant RFQ Nurture",
    before: {
      label: "Before",
      headline: "Slow follow-up = lost POs.",
      items: [
        "RFQs sit in inbox 1–3 days",
        "No automated quote delivery",
        "10+ hrs/week chasing RFQs and status updates",
        "Buyers call for status updates",
        "40% of quotes never get a second touch",
      ],
    },
    after: {
      label: "After",
      headline: "Every RFQ nurtured to award or close.",
      items: [
        "Instant acknowledgment within 15 minutes",
        "Automated quote delivery + follow-up sequence",
        "SMS updates at production milestones",
        "Self-service portal cuts status calls 55%",
        "38% RFQ-to-award rate on nurtured quotes",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
