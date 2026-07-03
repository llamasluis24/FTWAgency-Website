import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const healthcareAutomationModules = {
  showcase: {
    eyebrow: "Healthcare Automation Example",
    title: "See How No-Shows and Missed Recalls Get Filled Automatically",
    lede:
      "Your front desk can't call every patient twice. Automation sends reminders, recall notices, and follow-ups on schedule — so empty slots and lapsed patients don't drain revenue.",
    smsMessages: [
      { sender: "system", text: "Appointment tomorrow — Sarah M. · Dental implant consult" },
      {
        sender: "business",
        text: "Hi Sarah! Reminder: your consultation at Lakeside Dental is tomorrow at 2:30 PM. Reply C to confirm or R to reschedule.",
      },
      { sender: "customer", text: "C" },
      {
        sender: "business",
        text: "Confirmed ✓ Please arrive 10 min early to complete new patient forms. Need directions? lakesidedentalstudio.com/visit",
      },
      { sender: "system", text: "Day-of reminder sent — patient confirmed" },
      {
        sender: "business",
        text: "See you today at 2:30! Dr. Raman's team is ready for you. Text us if you're running late.",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Patient Lifecycle Automation",
    title: "Every Patient Gets Reminded, Recalled, and Re-Engaged",
    lede:
      "Appointment confirmations, hygiene recalls, and post-visit follow-ups run automatically — so the schedule stays full without burning out your front desk.",
    steps: [
      { day: "Booked", channel: "SMS", action: "Appointment confirmation", status: "sent" },
      { day: "Day −1", channel: "SMS", action: "24-hr reminder + confirm", status: "replied" },
      { day: "Day −1", channel: "Email", action: "New patient prep guide", status: "opened" },
      { day: "Day +1", channel: "SMS", action: "Post-visit check-in", status: "opened" },
      { day: "Month +6", channel: "SMS", action: "Hygiene recall reminder", status: "booked" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Schedule Optimization",
    title: "Turn Reminders Into Full Appointment Books",
    lede:
      "Every missed reminder is an empty chair. Automated confirmations and recalls recover no-shows and bring lapsed patients back before they choose another provider.",
    stages: [
      { label: "Appointments Scheduled", value: 840 },
      { label: "Confirmations Sent", value: 820 },
      { label: "Patient Confirmations", value: 738 },
      { label: "Visits Completed", value: 714 },
      { label: "Recalls Booked", value: 186 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Front desk and care coordinators lose hours to patient intake, reminders, and recall outreach. See how much repetitive admin time automation could give back — without adding staff.",
    defaults: {
      manualHoursPerWeek: 9,
      automationScopeId: "standard",
      hourlyRate: 42,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Appointment reminders & patient recall notices",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Patient intake, scheduling & follow-up",
        automatablePercent: 52,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Recall campaigns, no-show recovery & status updates",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on patient intake, reminders & recall",
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
    title: "From Manual Calls to Automated Schedule Management",
    before: {
      label: "Before",
      headline: "12% no-show rate, recalls ignored.",
      items: [
        "8–10 hrs/week on intake, reminders & recall calls",
        "No automated recall for hygiene patients",
        "Missed calls go to voicemail",
        "12% no-show rate on appointments",
        "Front desk overwhelmed daily",
      ],
    },
    after: {
      label: "After",
      headline: "4% no-shows, recalls on autopilot.",
      items: [
        "SMS + email reminders 24 hrs before visit",
        "Automated 6-month hygiene recall sequences",
        "Instant text back on missed calls",
        "No-show rate cut by 32%",
        "714 completed visits per month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
