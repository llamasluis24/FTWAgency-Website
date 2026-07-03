import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const professionalServicesAutomationModules = {
  showcase: {
    eyebrow: "Professional Services Automation Example",
    title: "See How Instant Intake Response Wins High-Value Engagements",
    lede:
      "Prospects contact three firms — the first to respond professionally usually wins. Automation acknowledges inquiries instantly, qualifies needs, and books consultations before competitors call back.",
    smsMessages: [
      { sender: "system", text: "New intake — Estate planning consultation · Riverside · Referral: Google" },
      {
        sender: "business",
        text: "Hi James — Meridian Law Group here. We received your estate planning inquiry. Our team has a consultation slot Thursday at 11 AM or Friday at 2 PM. Reply 1 or 2 to confirm.",
      },
      { sender: "customer", text: "Thursday 11 works" },
      {
        sender: "business",
        text: "Confirmed ✓ Consultation booked Thursday 11:00 AM with Attorney Sarah Chen. Intake form sent to your email — please complete before your visit.",
      },
      { sender: "customer", text: "Got it, thanks" },
      {
        sender: "business",
        text: "You're all set. We'll text a reminder 24 hours before. Questions before then? Just reply here.",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Intake Nurture Automation",
    title: "Every Inquiry Gets Professional Follow-Up Until They Book or Decline",
    lede:
      "Instant acknowledgments, intake forms, and consultation reminders run automatically — so no prospect waits while attorneys are in court or meetings.",
    steps: [
      { day: "Instant", channel: "SMS", action: "Inquiry acknowledged + booking options", status: "sent" },
      { day: "Hour +1", channel: "Email", action: "Intake form + firm credentials", status: "opened" },
      { day: "Day 1", channel: "SMS", action: "Consultation reminder + prep checklist", status: "replied" },
      { day: "Day 3", channel: "Email", action: "Follow-up if form incomplete", status: "opened" },
      { day: "Pre-visit", channel: "SMS", action: "24-hour appointment reminder", status: "sent" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Speed-to-Response",
    title: "Turn Inquiries Into Signed Engagements",
    lede:
      "Every hour a prospect waits is an hour they hire someone else. Automated intake wins engagements your team can't respond to fast enough manually.",
    stages: [
      { label: "Inquiries Received", value: 186 },
      { label: "Acknowledged < 5 min", value: 178 },
      { label: "Intake Forms Completed", value: 124 },
      { label: "Consultations Booked", value: 84 },
      { label: "Engagements Signed", value: 42 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Intake coordinators and associates lose hours to inquiry response, scheduling, and follow-up. See how much repetitive admin time automation could give back — without hiring intake staff.",
    defaults: {
      manualHoursPerWeek: 10,
      automationScopeId: "standard",
      hourlyRate: 55,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Inquiry auto-replies & consultation reminders",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Intake, qualification & consultation scheduling",
        automatablePercent: 55,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Nurture sequences, doc requests & status updates",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on intake, scheduling & follow-up",
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
    title: "From Voicemail Tag to Instant Professional Intake",
    before: {
      label: "Before",
      headline: "Slow response = lost retainers.",
      items: [
        "Inquiries sit in inbox 4–24 hours",
        "10+ hrs/week on intake scheduling and callbacks",
        "Intake forms sent days later",
        "Prospects hire faster-responding firms",
        "32% inquiry-to-consultation rate",
      ],
    },
    after: {
      label: "After",
      headline: "Every inquiry nurtured to booking.",
      items: [
        "Instant acknowledgment within 5 minutes",
        "Automated intake form + booking links",
        "SMS reminders before consultations",
        "Attorneys focus on billable work, not scheduling",
        "52% inquiry-to-consultation rate",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
