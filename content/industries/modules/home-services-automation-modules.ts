import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage } from "@/content/automation-showcase";
import type { TimelineStep } from "@/content/automation-showcase";

export const homeServicesAutomationModules = {
  showcase: {
    eyebrow: "Home Services Automation Example",
    title: "See How Missed Calls Turn Into Booked Jobs Automatically",
    lede:
      "Your crew can't answer from a crawlspace. Automation texts back in seconds, qualifies the job, and books the appointment before the homeowner calls your competitor.",
    smsMessages: [
      { sender: "system", text: "Missed call from (951) 555-0142 — Emergency HVAC" },
      {
        sender: "business",
        text: "Hi! Sorry we missed your call — this is Summit Comfort HVAC. Need emergency AC repair? Reply YES and we'll get a tech scheduled today.",
      },
      { sender: "customer", text: "Yes our AC stopped working" },
      {
        sender: "business",
        text: "Got it. We have a 2–4 PM window open today. Want us to hold that slot for you at 1842 Oak Ridge Dr?",
      },
      { sender: "customer", text: "Yes that works" },
      { sender: "business", text: "Booked ✓ Tech Marcus arrives 2–4 PM. You'll get a reminder text 1 hour before." },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Follow-Up Automation",
    title: "Every Lead Gets Nurtured Until They Book or Say No",
    lede:
      "Quotes, reminders, and win-back sequences run automatically — so no lead falls through the cracks while your office is dispatching crews.",
    steps: [
      { day: "Instant", channel: "SMS", action: "Missed call text back", status: "sent" },
      { day: "Day 1", channel: "SMS", action: "Appointment confirmation", status: "opened" },
      { day: "Day 1", channel: "Email", action: "Pre-visit prep checklist", status: "opened" },
      { day: "Job day", channel: "SMS", action: "Tech en route notification", status: "sent" },
      { day: "Day +1", channel: "SMS", action: "Review request", status: "replied" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Speed-to-Lead",
    title: "Turn Missed Calls Into Completed Jobs",
    lede:
      "Every second a homeowner waits is a second they call someone else. Instant response automation recovers conversations your team physically can't answer.",
    stages: [
      { label: "Inbound Calls", value: 420 },
      { label: "Missed Calls", value: 168 },
      { label: "Text Responses", value: 134 },
      { label: "Booked Appointments", value: 72 },
      { label: "Completed Jobs", value: 68 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Dispatch and office staff lose hours to missed-call follow-up, scheduling, and reminders. See how much repetitive admin time automation could give back — without adding headcount.",
    defaults: {
      manualHoursPerWeek: 11,
      automationScopeId: "standard",
      hourlyRate: 45,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Missed-call text-back & appointment reminders",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Lead qualification, booking & follow-up sequences",
        automatablePercent: 55,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Dispatch comms, reviews & win-back on autopilot",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek:
        "Hours/week on missed-call follow-up, dispatch & reminders",
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
    title: "From Voicemail Black Hole to Instant Booking",
    before: {
      label: "Before",
      headline: "Missed calls = lost jobs.",
      items: [
        "Voicemail goes unchecked for hours",
        "No after-hours response system",
        "10+ hrs/week on manual follow-up and dispatch",
        "Homeowners book whoever calls back first",
        "40% of leads never re-contacted",
      ],
    },
    after: {
      label: "After",
      headline: "Every call gets answered instantly.",
      items: [
        "Missed call text back in under 30 seconds",
        "24/7 automated qualification",
        "Appointment booking without phone tag",
        "Reminder and review sequences on autopilot",
        "68% of missed calls converted to jobs",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
