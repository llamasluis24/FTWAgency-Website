import type { Service } from "@/lib/schemas";

export const businessAutomation: Service = {
  slug: "business-automation",
  title: "Business Automation",
  shortTitle: "Automation",
  category: "automate",
  icon: "Zap",
  excerpt:
    "Stop losing leads to slow follow-up. Automate the busywork and respond to every opportunity instantly.",
  heroHeadline: "Every Lead Answered. Every Follow-Up Sent. *Automatically*.",
  heroSub:
    "Speed wins deals. We build automation systems that respond to leads in seconds, follow up relentlessly, and run your operations while you run the business.",
  problem: {
    title: "Leads die in the gaps of a busy day",
    intro:
      "Most businesses don't have a lead problem — they have a follow-up problem. Missed calls, slow replies, and forgotten quotes quietly cost more revenue than any marketing budget can recover.",
    painPoints: [
      {
        title: "Missed calls become missed revenue",
        description:
          "The majority of callers who hit voicemail simply call the next business on the list.",
      },
      {
        title: "Slow follow-up loses deals",
        description:
          "Leads contacted within five minutes convert dramatically better — most businesses take hours or days.",
      },
      {
        title: "Manual busywork eats the week",
        description:
          "Scheduling, reminders, data entry, and status updates consume hours your team should spend selling and serving.",
      },
      {
        title: "No-shows and cold quotes",
        description:
          "Appointments forgotten, estimates never chased — pipeline leaks at every stage.",
      },
    ],
  },
  solution: {
    title: "Systems that never forget, never sleep",
    description:
      "We map your customer journey and automate every gap — instant responses, persistent follow-up, and operational workflows that run themselves.",
    points: [
      "Missed call text back: every unanswered call gets an instant text response",
      "Lead follow-up sequences that pursue every inquiry until it answers",
      "Self-service scheduling with reminders that eliminate no-shows",
      "Quote and estimate follow-up that revives stalled deals",
      "Long-term nurture that keeps your business first in mind",
    ],
  },
  benefits: [
    {
      icon: "Timer",
      title: "Speed-to-lead in seconds",
      description:
        "Every inquiry gets an instant response — even at 9 PM on a Saturday.",
    },
    {
      icon: "Repeat",
      title: "Relentless follow-up",
      description:
        "Automated sequences pursue every lead so nothing falls through the cracks.",
    },
    {
      icon: "CalendarCheck",
      title: "Fewer no-shows",
      description:
        "Confirmations and reminders cut no-show rates dramatically.",
    },
    {
      icon: "Clock",
      title: "Hours back every week",
      description:
        "Routine scheduling, reminders, and updates run without human touch.",
    },
  ],
  process: [
    {
      title: "Journey Mapping",
      description:
        "We trace every step from first contact to repeat customer and find where revenue leaks.",
    },
    {
      title: "System Design",
      description:
        "Automation workflows prioritized by revenue impact — biggest leaks first.",
    },
    {
      title: "Build & Integrate",
      description:
        "Workflows connected to your phone, website, CRM, and calendar.",
    },
    {
      title: "Test & Launch",
      description:
        "Every sequence tested end-to-end before it touches a real customer.",
    },
    {
      title: "Measure & Refine",
      description:
        "Response rates, bookings, and recovered revenue tracked and tuned monthly.",
    },
  ],
  subservices: [
    {
      title: "Lead Follow-Up Automation",
      description: "Instant, persistent pursuit of every inquiry.",
    },
    {
      title: "Missed Call Text Back",
      description: "Every missed call answered by text in seconds.",
    },
    {
      title: "Appointment Scheduling",
      description: "Self-service booking with no-show-killing reminders.",
    },
    {
      title: "Customer Nurture Systems",
      description: "Stay first-in-mind with past and future customers.",
    },
    {
      title: "Workflow Automation",
      description: "Internal operations that run themselves.",
    },
  ],
  faqs: [
    {
      question: "Will automation feel impersonal to my customers?",
      answer:
        "Done right, it feels like incredible service. Customers experience instant responses and helpful reminders — written in your voice. Automation handles timing and persistence; the personality is still yours.",
    },
    {
      question: "What systems does this work with?",
      answer:
        "We integrate with your existing phone system, website, CRM, and calendar — or set up the right stack if you don't have one. The system fits your business, not the other way around.",
    },
    {
      question: "How fast will I see results?",
      answer:
        "Missed call text back and speed-to-lead automation typically recover measurable revenue within the first month. You'll see exactly how many conversations and bookings the system saves.",
    },
    {
      question: "Is this complicated to maintain?",
      answer:
        "No — we build, monitor, and maintain everything. Your team just sees more booked appointments and fewer dropped balls.",
    },
  ],
  relatedServices: ["ai-agents", "custom-software", "review-reputation-growth", "website-design-development"],
  featured: true,
  meta: {
    title: "Business Automation Services | FTW Agency",
    description:
      "Lead follow-up automation, missed call text back, appointment scheduling, and workflow automation that responds to every lead instantly and recovers lost revenue.",
  },
};
