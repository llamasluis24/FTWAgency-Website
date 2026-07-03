import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const restaurantsHospitalityAutomationModules = {
  showcase: {
    eyebrow: "Restaurant Automation Example",
    title: "See How Guest Nurture Turns First Visits Into Regulars",
    lede:
      "Most restaurants lose guests after one visit. Automation captures diners, sends win-back offers, and fills slow nights — without your staff chasing a spreadsheet.",
    smsMessages: [
      { sender: "system", text: "New guest — Sarah M. · Party of 4 · Saturday brunch · $186 check" },
      {
        sender: "business",
        text: "Thanks for brunching with us, Sarah! 🌿 Your table is already in our regulars list. Reply YES for 15% off your next Tuesday visit — our quietest (and best) night.",
      },
      { sender: "customer", text: "Yes! What's the special this week?" },
      {
        sender: "business",
        text: "This Tuesday: handmade pappardelle with braised short rib ✓ Reply BOOK and we'll hold a patio table for 2 at 7 PM.",
      },
      { sender: "customer", text: "Book for 2 at 7" },
      {
        sender: "business",
        text: "Confirmed ✓ Table for 2, Tuesday 7:00 PM. See you on the patio — we'll have the special waiting.",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Guest Nurture Automation",
    title: "Every Guest Gets Followed Up Until They Become a Regular",
    lede:
      "Post-visit thank-yous, win-back offers, and event invites run automatically — so no guest slips away after a single great meal.",
    steps: [
      { day: "Day 0", channel: "SMS", action: "Thank-you + review request", status: "sent" },
      { day: "Day 3", channel: "Email", action: "Win-back offer for slow night", status: "opened" },
      { day: "Day 14", channel: "SMS", action: "New seasonal menu preview", status: "replied" },
      { day: "Day 30", channel: "Email", action: "Birthday / anniversary offer", status: "opened" },
      { day: "Day 45", channel: "SMS", action: "Private event invitation", status: "sent" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Guest Lifecycle",
    title: "Turn First Visits Into Repeat Revenue",
    lede:
      "Repeat guests drive restaurant margins. Automated nurture converts one-time diners into regulars who fill slow nights without a discount war.",
    stages: [
      { label: "First-Time Guests", value: 840 },
      { label: "Captured to Guest List", value: 756 },
      { label: "Win-Back Offers Sent", value: 680 },
      { label: "Return Visits Booked", value: 272 },
      { label: "Regulars (3+ Visits)", value: 186 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Hosts and managers lose hours to reservations, waitlist updates, and review requests. See how much repetitive guest comms automation could handle — without adding front-of-house staff.",
    defaults: {
      manualHoursPerWeek: 8,
      automationScopeId: "standard",
      hourlyRate: 35,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Reservation confirmations & review requests",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Waitlist updates, guest follow-up & promotions",
        automatablePercent: 50,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Win-back offers, loyalty touches & slow-night fills",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on reservations, waitlist & review requests",
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
    title: "From One-and-Done Guests to a Regulars Engine",
    before: {
      label: "Before",
      headline: "Every night started from zero.",
      items: [
        "No guest data captured at checkout",
        "8+ hrs/week on reservation calls and guest follow-up",
        "Tuesday nights 40% empty",
        "No win-back or birthday offers",
        "22% of guests returned within 60 days",
      ],
    },
    after: {
      label: "After",
      headline: "Guests nurtured into regulars automatically.",
      items: [
        "Automatic guest capture at reservation & POS",
        "SMS + email nurture sequences per visit",
        "Tuesday win-back offers fill slow nights",
        "Birthday and event campaigns on autopilot",
        "38% return rate within 60 days",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
