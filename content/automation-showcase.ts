export type AutomationVisualType = "sms" | "timeline" | "scheduling" | "workflow";

export interface AutomationFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface SmsMessage {
  sender: "system" | "customer" | "business";
  text: string;
}

export interface TimelineStep {
  day: string;
  channel: string;
  action: string;
  status: "sent" | "opened" | "replied" | "booked";
}

export interface SchedulingSlot {
  time: string;
  available: boolean;
}

export interface WorkflowNode {
  id: string;
  label: string;
  detail: string;
  type: "trigger" | "condition" | "action" | "output";
}

export interface AutomationMetric {
  label: string;
  before: string;
  after: string;
  improved: boolean;
}

export interface AutomationShowcaseRow {
  id: string;
  stepNumber: 1 | 2 | 3 | 4;
  eyebrow: string;
  headline: string;
  body: string;
  visualType: AutomationVisualType;
  imagePosition: "left" | "right";
  cards: AutomationFeatureCard[];
  smsMessages?: SmsMessage[];
  timelineSteps?: TimelineStep[];
  schedulingSlots?: SchedulingSlot[];
  selectedSlot?: string;
  workflowNodes?: WorkflowNode[];
  metrics?: AutomationMetric[];
}

export const automationShowcaseIntro = {
  eyebrow: "Automation in Action",
  headline: "See How Every Lead Gets Answered, Followed Up, and Booked",
  subheadline:
    "Most businesses lose revenue in the gaps — missed calls, slow replies, forgotten quotes, and no-shows. FTW Agency builds automation systems that respond instantly, follow up relentlessly, and keep your operations running while you focus on the work.",
};

export const automationShowcaseRows: AutomationShowcaseRow[] = [
  {
    id: "missed-call",
    stepNumber: 1,
    eyebrow: "Instant Response",
    headline: "Every Missed Call Gets a Text Back in Seconds",
    body: "When a customer calls and you can't answer, they don't wait — they call the next business. Missed call text back automation sends an instant, helpful reply so you recover the conversation before they move on.",
    visualType: "sms",
    imagePosition: "right",
    cards: [
      {
        title: "Speed-to-Lead",
        description:
          "Automated texts fire within seconds of a missed call — even after hours and on weekends.",
        icon: "Timer",
      },
      {
        title: "After-Hours Coverage",
        description:
          "Leads that arrive at 9 PM still get a professional response. No more next-morning voicemails.",
        icon: "Clock",
      },
      {
        title: "Two-Way SMS",
        description:
          "Customers reply by text and stay in conversation — no app downloads or portals required.",
        icon: "MessageSquare",
      },
      {
        title: "Call Recovery Tracking",
        description:
          "See exactly how many missed calls turn into booked appointments and recovered revenue.",
        icon: "Phone",
      },
    ],
    smsMessages: [
      {
        sender: "system",
        text: "Missed call from (951) 555-0148 · 7:42 PM",
      },
      {
        sender: "business",
        text: "Hi! Sorry we missed your call. This is FTW Agency — how can we help you today? Reply here or book a time: ftw.agency/book",
      },
      {
        sender: "customer",
        text: "I need help with lead follow-up automation for my HVAC business.",
      },
      {
        sender: "business",
        text: "Perfect — we specialize in that. I have openings tomorrow at 10 AM or 2 PM. Which works better?",
      },
      {
        sender: "customer",
        text: "2 PM works!",
      },
      {
        sender: "business",
        text: "You're booked for Thu at 2:00 PM. Confirmation sent — see you then!",
      },
    ],
  },
  {
    id: "follow-up",
    stepNumber: 2,
    eyebrow: "Relentless Follow-Up",
    headline: "Persistent Sequences Until Every Lead Responds",
    body: "Most deals aren't lost on the first contact — they're lost when follow-up stops. Automated sequences pursue every inquiry across email, SMS, and voicemail until the lead answers, books, or opts out.",
    visualType: "timeline",
    imagePosition: "left",
    cards: [
      {
        title: "Multi-Channel Sequences",
        description:
          "Email, SMS, and voicemail touchpoints work together so no channel goes untouched.",
        icon: "Repeat",
      },
      {
        title: "Smart Stop Rules",
        description:
          "Sequences pause automatically when a lead replies, books, or converts — no awkward double-messages.",
        icon: "ShieldCheck",
      },
      {
        title: "Personalization",
        description:
          "Messages reference the inquiry, service type, and timeline so follow-up feels human, not robotic.",
        icon: "UserPlus",
      },
      {
        title: "Pipeline Visibility",
        description:
          "Track every lead's sequence stage, open rates, and conversion in one dashboard view.",
        icon: "BarChart3",
      },
    ],
    timelineSteps: [
      {
        day: "Day 0",
        channel: "SMS",
        action: "Instant reply + booking link sent",
        status: "sent",
      },
      {
        day: "Day 1",
        channel: "Email",
        action: "Follow-up with case study + FAQ",
        status: "opened",
      },
      {
        day: "Day 3",
        channel: "SMS",
        action: "Check-in: still interested?",
        status: "replied",
      },
      {
        day: "Day 7",
        channel: "Email",
        action: "Final offer + calendar link",
        status: "booked",
      },
    ],
  },
  {
    id: "scheduling",
    stepNumber: 3,
    eyebrow: "Fewer No-Shows",
    headline: "Self-Service Booking With Reminders That Stick",
    body: "Let customers book on their schedule while automation handles confirmations and reminder cadences that dramatically cut no-show rates — without your team chasing confirmations all day.",
    visualType: "scheduling",
    imagePosition: "right",
    cards: [
      {
        title: "Self-Service Booking",
        description:
          "Customers pick a time from your live calendar — no phone tag, no back-and-forth emails.",
        icon: "CalendarCheck",
      },
      {
        title: "Auto Confirmations",
        description:
          "Instant confirmation texts and emails sent the moment an appointment is booked.",
        icon: "BellRing",
      },
      {
        title: "Reminder Cadence",
        description:
          "24-hour and 1-hour reminders keep appointments top of mind and reduce empty slots.",
        icon: "Clock",
      },
      {
        title: "Calendar Sync",
        description:
          "Two-way sync with Google Calendar, Outlook, and your CRM so availability stays accurate.",
        icon: "Globe",
      },
    ],
    schedulingSlots: [
      { time: "9:00 AM", available: true },
      { time: "10:30 AM", available: false },
      { time: "12:00 PM", available: true },
      { time: "2:00 PM", available: true },
      { time: "3:30 PM", available: false },
      { time: "5:00 PM", available: true },
    ],
    selectedSlot: "2:00 PM",
  },
  {
    id: "workflow",
    stepNumber: 4,
    eyebrow: "Systems That Run Themselves",
    headline: "Workflows, Nurture, and Reporting in One Hub",
    body: "Beyond lead response, we automate the internal work — CRM updates, task routing, long-term nurture, and performance reporting — so your team spends time selling and serving, not updating spreadsheets.",
    visualType: "workflow",
    imagePosition: "left",
    cards: [
      {
        title: "CRM Integration",
        description:
          "Every lead, booking, and interaction syncs to your CRM automatically — no manual data entry.",
        icon: "Database",
      },
      {
        title: "Internal Routing",
        description:
          "Tasks route to the right team member based on service type, territory, or availability.",
        icon: "Workflow",
      },
      {
        title: "Long-Term Nurture",
        description:
          "Past customers and future prospects stay engaged with seasonal offers and check-ins.",
        icon: "Heart",
      },
      {
        title: "Performance Reporting",
        description:
          "Track response times, booking rates, recovered leads, and ROI from one automation dashboard.",
        icon: "TrendingUp",
      },
    ],
    workflowNodes: [
      {
        id: "trigger",
        label: "New Lead",
        detail: "Form · Call · SMS",
        type: "trigger",
      },
      {
        id: "condition",
        label: "Qualify",
        detail: "Service · Budget · Timeline",
        type: "condition",
      },
      {
        id: "action",
        label: "Automate",
        detail: "Reply · Book · Assign",
        type: "action",
      },
      {
        id: "output",
        label: "Sync",
        detail: "CRM · Calendar · Email",
        type: "output",
      },
    ],
    metrics: [
      { label: "Avg. Response Time", before: "4.2 hrs", after: "12 sec", improved: true },
      { label: "No-Show Rate", before: "28%", after: "9%", improved: true },
      { label: "Leads Recovered", before: "—", after: "+34/mo", improved: true },
    ],
  },
];

export const automationShowcaseCta = {
  headline: "Ready to Stop Losing Leads to Slow Follow-Up?",
  body: "FTW Agency builds automation systems that respond instantly, follow up relentlessly, and turn missed opportunities into booked customers.",
  primaryLabel: "Schedule Strategy Call",
  primaryHref: "/contact",
  secondaryLabel: "View Related Services",
  secondaryHref: "#related-services",
};
