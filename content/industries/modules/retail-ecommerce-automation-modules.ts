import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleTimeSavingsCalculator,
} from "./types";
import type { SmsMessage, TimelineStep } from "@/content/automation-showcase";

export const retailEcommerceAutomationModules = {
  showcase: {
    eyebrow: "Ecommerce Automation Example",
    title: "See How Abandoned Carts Turn Into Recovered Revenue Automatically",
    lede:
      "Seventy percent of carts never check out. Automation reaches shoppers within minutes — with the right message, incentive, and timing — before they buy from a competitor.",
    smsMessages: [
      { sender: "system", text: "Cart abandoned — Sage Linen Bundle ($186)" },
      {
        sender: "business",
        text: "Hi Maya! You left the Sage Linen Bundle in your cart at Verde Market. Complete checkout in the next 24 hrs and we'll cover shipping ✓",
      },
      { sender: "customer", text: "Is the sage color still in stock?" },
      {
        sender: "business",
        text: "Yes — 12 sets left in Sage. Want us to hold one for you? Reply HOLD and we'll send a checkout link.",
      },
      { sender: "customer", text: "Hold please" },
      {
        sender: "business",
        text: "Held ✓ Checkout link sent to your email. Your cart expires in 48 hrs — free shipping applied.",
      },
    ] satisfies SmsMessage[],
  },

  timeline: {
    eyebrow: "Cart Recovery Automation",
    title: "Every Abandoned Cart Gets a Recovery Sequence",
    lede:
      "Multi-channel flows — email, SMS, and win-back offers — run automatically so abandoned revenue doesn't disappear while your team is offline.",
    steps: [
      { day: "1 hr", channel: "Email", action: "Cart reminder with product image", status: "opened" },
      { day: "4 hr", channel: "SMS", action: "Free shipping offer", status: "sent" },
      { day: "Day 1", channel: "Email", action: "Social proof + reviews", status: "opened" },
      { day: "Day 3", channel: "SMS", action: "10% off final reminder", status: "replied" },
      { day: "Day 7", channel: "Email", action: "Win-back browse abandonment", status: "booked" },
    ] satisfies TimelineStep[],
  },

  funnel: {
    eyebrow: "Cart Recovery",
    title: "Turn Abandoned Carts Into Completed Orders",
    lede:
      "Every hour a shopper waits is an hour they buy elsewhere. Instant recovery automation recovers revenue your storefront already earned.",
    stages: [
      { label: "Carts Abandoned", value: 1680 },
      { label: "Recovery Messages Sent", value: 1596 },
      { label: "Cart Reopens", value: 672 },
      { label: "Checkout Completed", value: 336 },
      { label: "Recovered Revenue", value: 29000 },
    ],
  } satisfies IndustryModuleFunnel,

  timeSavingsCalculator: {
    eyebrow: "Time Savings Calculator",
    title: "Estimate How Many Admin Hours You Could Reclaim",
    lede:
      "Ecommerce teams lose hours to cart recovery outreach, order updates, and customer follow-up. See how much repetitive admin time automation could give back — without adding support headcount.",
    defaults: {
      manualHoursPerWeek: 9,
      automationScopeId: "standard",
      hourlyRate: 40,
    },
    automationScope: [
      {
        id: "essentials",
        label: "Essentials",
        description: "Cart recovery messages & order confirmations",
        automatablePercent: 35,
      },
      {
        id: "standard",
        label: "Standard",
        description: "Abandoned cart flows, shipping & update comms",
        automatablePercent: 52,
      },
      {
        id: "full",
        label: "Full workflow",
        description: "Post-purchase nurture, win-back & reorder prompts",
        automatablePercent: 70,
      },
    ],
    limits: {
      manualHoursPerWeek: { min: 4, max: 30, step: 1 },
      hourlyRate: { min: 25, max: 85, step: 5 },
      maxHoursSavedPerWeek: 25,
    },
    labels: {
      manualHoursPerWeek: "Hours/week on cart recovery & order updates",
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
    title: "From Lost Carts to Automated Recovery",
    before: {
      label: "Before",
      headline: "70% of carts — gone forever.",
      items: [
        "8–10 hrs/week on manual cart and order follow-up",
        "No SMS recovery flows",
        "One generic Shopify default email",
        "8% cart recovery rate",
        "$0 from win-back campaigns",
      ],
    },
    after: {
      label: "After",
      headline: "Every cart gets a recovery sequence.",
      items: [
        "Multi-step email + SMS recovery",
        "Dynamic incentives based on cart value",
        "Browse abandonment win-back flows",
        "22% cart recovery rate",
        "$29k+ recovered monthly",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
