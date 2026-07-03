import type {
  AutomationMetric,
  SmsMessage,
  TimelineStep,
  WorkflowNode,
} from "@/content/automation-showcase";
import type {
  TechModuleBeforeAfter,
  TechModuleFunnel,
} from "./technology-shared-types";
import type { IndustryModuleTimeSavingsCalculator } from "./modules/types";

/** Editable copy + defaults for /industries/technology/business-automation/ modules only. */

export const technologyAutomationModules = {
  showcase: {
    eyebrow: "SaaS Lifecycle Automation",
    title: "See How Automation Converts Signups While Your Team Builds",
    lede:
      "Technology companies lose pipeline in the gaps — slow demo follow-up, cold trials, and manual CRM updates. Automation responds instantly and nurtures every signup toward activation and revenue.",
    workflow: {
      title: "Trial-to-Demo Workflow",
      subtitle: "ClearPath · SaaS lifecycle automation",
      nodes: [
        {
          id: "trigger",
          label: "Trial Signup",
          detail: "Product · Pricing · Demo",
          type: "trigger",
        },
        {
          id: "condition",
          label: "Score Lead",
          detail: "Use case · Team size",
          type: "condition",
        },
        {
          id: "action",
          label: "Nurture",
          detail: "Email · SMS · In-app",
          type: "action",
        },
        {
          id: "output",
          label: "Book Demo",
          detail: "CRM · Calendar · Slack",
          type: "output",
        },
      ] satisfies WorkflowNode[],
      metrics: [
        { label: "Response Time", before: "3.8 hrs", after: "8 sec", improved: true },
        { label: "Trial → Demo", before: "11%", after: "27%", improved: true },
        { label: "Signups Nurtured", before: "—", after: "+186/mo", improved: true },
      ] satisfies AutomationMetric[],
    },
    timeline: {
      title: "Lifecycle Nurture Sequence",
      subtitle: "SaaS trial · Active nurture",
      steps: [
        {
          day: "Hour 0",
          channel: "Email",
          action: "Welcome + activation checklist sent",
          status: "sent",
        },
        {
          day: "Day 2",
          channel: "In-app",
          action: "Feature walkthrough + integration prompt",
          status: "opened",
        },
        {
          day: "Day 4",
          channel: "SMS",
          action: "Personal check-in from success team",
          status: "replied",
        },
        {
          day: "Day 7",
          channel: "Email",
          action: "Case study + demo booking link",
          status: "booked",
        },
      ] satisfies TimelineStep[],
    },
    sms: {
      messages: [
        {
          sender: "system",
          text: "New demo request from alex@northwind.io · Product: Workflow Automation",
        },
        {
          sender: "business",
          text: "Hi Alex! Thanks for requesting a ClearPath demo. I can walk you through workflow automation for your ops team — tomorrow at 10 AM or 2 PM PT?",
        },
        {
          sender: "customer",
          text: "2 PM works. We're evaluating tools for a 40-person SaaS team.",
        },
        {
          sender: "business",
          text: "Perfect — I'll tailor the demo around team onboarding and CRM integrations. Calendar invite sent for Thu 2:00 PM PT.",
        },
        {
          sender: "customer",
          text: "Got it, see you then.",
        },
        {
          sender: "business",
          text: "Looking forward to it! Reply here anytime if questions come up before the call.",
        },
      ] satisfies SmsMessage[],
    },
  },

  funnel: {
    eyebrow: "Lifecycle Pipeline",
    title: "Turn Product Signups Into Paying Customers",
    lede:
      "Automation keeps every trial engaged through onboarding, feature adoption, and demo conversion — so pipeline grows even when engineering is heads-down on the product.",
    stages: [
      { label: "Trial Signups", value: 1200 },
      { label: "Activated Users", value: 680 },
      { label: "Demo Requests", value: 240 },
      { label: "Sales Conversations", value: 96 },
      { label: "New Customers", value: 32 },
    ],
  } satisfies TechModuleFunnel,

  performance: {
    eyebrow: "Automation Performance",
    title: "Track What Your Lifecycle Engine Is Delivering",
    lede:
      "Monitor response times, nurture performance, and conversion lift across every automated touchpoint — from first signup to booked demo.",
    metrics: [
      { label: "Avg. First Response", value: "8 sec", change: "was 3.8 hrs" },
      { label: "Trials Nurtured", value: "186", change: "+142/mo" },
      { label: "Demo Book Rate", value: "27%", change: "+16 pts" },
      { label: "No-Show Rate", value: "8%", change: "-19 pts" },
      { label: "Pipeline Influenced", value: "+$284K", change: "last quarter", accent: true },
      { label: "Hours Saved / wk", value: "18 hrs", change: "per rep" },
    ],
    responseTrend: [420, 380, 310, 240, 180, 120, 84, 52, 28, 18, 12, 8],
    nurtureTrend: [24, 32, 38, 48, 58, 72, 88, 104, 128, 148, 168, 186],
    conversionTrend: [11, 12, 13, 14, 16, 17, 19, 21, 22, 24, 26, 27],
    workflowBreakdown: [
      { name: "Trial welcome", pct: 28 },
      { name: "Feature nurture", pct: 24 },
      { name: "Demo follow-up", pct: 22 },
      { name: "Re-engagement", pct: 16 },
      { name: "CRM sync", pct: 10 },
    ],
    topAutomations: [
      { name: "Trial signup → welcome sequence", runs: 1240 },
      { name: "Demo request → instant SMS", runs: 420 },
      { name: "Inactive trial → re-engagement", runs: 380 },
      { name: "Demo booked → reminder cadence", runs: 240 },
      { name: "Won deal → onboarding handoff", runs: 96 },
    ],
  },

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Sales and success teams lose hours to demo follow-up, trial nurture, and CRM updates. See how much repetitive admin time automation could give back — without adding SDR headcount.",
    defaults: {
      manualHoursPerWeek: 8,
      automationScopeId: "standard",
      hourlyRate: 50,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Demo auto-replies & trial reminders",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Demo scheduling, trial nurture & handoffs",
        automatablePercent: 55,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Full lifecycle nurture, CRM sync & onboarding",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on demo follow-up & trial nurture",
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
    title: "From Manual Follow-Up to Automated Lifecycle Engine",
    before: {
      label: "Before",
      headline: "Signups go cold. Demos slip.",
      items: [
        "8+ hrs/week on demo follow-up and trial nurture",
        "No trial nurture sequence",
        "CRM updated by hand",
        "Slow lead response times",
        "Revenue lost in the gaps",
      ],
    },
    after: {
      label: "After",
      headline: "Every signup gets a system.",
      items: [
        "Instant demo response",
        "Automated trial nurture",
        "CRM + calendar sync",
        "Sub-10-second follow-up",
        "Compounding pipeline lift",
      ],
    },
  } satisfies TechModuleBeforeAfter,
} as const;

export type TechnologyAutomationModules = typeof technologyAutomationModules;
