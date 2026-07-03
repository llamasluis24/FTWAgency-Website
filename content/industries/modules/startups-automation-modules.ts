import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const startupsAutomationModules = {
  showcase: {
    eyebrow: "Startup Automation Example",
    title: "See How a Two-Person Team Operates Like a Growth Org",
    lede:
      "Founders can't manually respond to every waitlist signup, nurture every lead, and schedule every demo. Automation handles intake instantly — so your tiny team focuses on product and closing.",
    smsMessages: [
      { sender: "system", text: "New waitlist signup — LaunchLoop · Product: async collaboration · Source: Product Hunt" },
      {
        sender: "business",
        text: "Hey Maya! You're #482 on the LaunchLoop waitlist 🚀 We'll email your early access invite within 48 hours. Want to skip the line? Book a 15-min founder demo: launchloop.io/demo",
      },
      { sender: "customer", text: "Yes — demo please" },
      {
        sender: "business",
        text: "Perfect ✓ Demo booked Friday 10:00 AM with co-founder Alex. Calendar invite sent — we'll walk through the async workflow features your team asked about.",
      },
      { sender: "customer", text: "Looking forward to it" },
      {
        sender: "business",
        text: "Us too! We'll text a reminder Thursday evening. In the meantime, here's our 2-min product overview: launchloop.io/preview",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Waitlist Nurture Automation",
    title: "Every Signup Gets Follow-Up Until They Convert or Unsubscribe",
    lede:
      "Instant welcome messages, onboarding sequences, and demo reminders run automatically — so no lead goes cold while founders are building product.",
    steps: [
      { day: "Instant", channel: "SMS", action: "Waitlist welcome + demo link", status: "sent" },
      { day: "Hour +1", channel: "Email", action: "Product overview + founder story", status: "opened" },
      { day: "Day 2", channel: "Email", action: "Use case guide for remote teams", status: "opened" },
      { day: "Day 5", channel: "SMS", action: "Early access invite + onboarding link", status: "replied" },
      { day: "Day 14", channel: "Email", action: "Re-engage inactive waitlist members", status: "sent" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Lean Team Leverage",
    title: "Turn Waitlist Signups Into Paying Early Customers",
    lede:
      "Automation lets a seed-stage team respond in minutes, nurture for weeks, and book demos without hiring SDRs — every signup gets a system behind it.",
    stages: [
      { label: "Waitlist Signups", value: 482 },
      { label: "Instant Acknowledgments", value: 476 },
      { label: "Demo Links Clicked", value: 142 },
      { label: "Demos Booked", value: 68 },
      { label: "Early Customers", value: 24 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Founders lose hours to waitlist replies, demo scheduling, and lead nurture. See how much repetitive admin time automation could give back — so your tiny team focuses on product and closing.",
    defaults: {
      manualHoursPerWeek: 7,
      automationScopeId: "standard",
      hourlyRate: 45,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Waitlist replies & demo confirmations",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Waitlist nurture, demo scheduling & follow-up",
        automatablePercent: 50,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Full pipeline nurture from signup to close",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on waitlist & demo scheduling",
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
    title: "From Manual Founder Replies to Automated Growth Engine",
    before: {
      label: "Before",
      headline: "Signups sat in a spreadsheet.",
      items: [
        "Waitlist emails sent manually once a week",
        "Demo requests lost in founder inbox",
        "No nurture between signup and launch",
        "18% demo-to-customer close rate",
        "Founders spent 12+ hrs/week on follow-up",
      ],
    },
    after: {
      label: "After",
      headline: "Every signup nurtured automatically.",
      items: [
        "Instant SMS + email on every signup",
        "Automated demo booking and reminders",
        "14-day nurture sequence until conversion",
        "35% demo-to-customer close rate",
        "Founders back to building product",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
