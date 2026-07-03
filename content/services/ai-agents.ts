import type { Service } from "@/lib/schemas";

export const aiAgents: Service = {
  slug: "ai-agents",
  title: "AI Agents & Business Automation",
  shortTitle: "AI Agents",
  category: "automate",
  icon: "Bot",
  excerpt:
    "Deploy intelligent agents that qualify leads, book appointments, answer questions, and automate repetitive work.",
  heroHeadline:
    "AI Agents That Qualify Leads, Book Appointments, and Automate Repetitive Work.",
  heroSub:
    "FTW Agency builds AI-powered business automation systems that help companies respond faster, follow up consistently, support customers, and streamline daily operations.",
  heroVisual: "agent-workflow",
  secondaryCta: {
    label: "Explore Automation Services",
    href: "/services/business-automation",
  },
  problem: {
    title: "Manual work is the bottleneck — not demand",
    intro:
      "Most businesses don't lack opportunities. They lack the capacity to respond, follow up, and coordinate fast enough to win them. Staff get buried in repetitive tasks while leads go cold and customers wait.",
    painPoints: [
      {
        title: "Slow response times",
        description:
          "Inquiries sit in inboxes for hours. By the time someone replies, the customer has already moved on.",
      },
      {
        title: "Missed leads",
        description:
          "Calls, forms, and messages arrive across channels — and too many never get a timely, qualified response.",
      },
      {
        title: "Manual follow-up",
        description:
          "Quotes, reminders, and nurture sequences depend on someone remembering to send them. They don't scale.",
      },
      {
        title: "Repetitive admin work",
        description:
          "Scheduling, data entry, status updates, and routing requests consume hours that should go to revenue work.",
      },
      {
        title: "Inconsistent customer communication",
        description:
          "Quality varies by who's available. Customers get different answers, different tone, different speed.",
      },
      {
        title: "Disconnected tools",
        description:
          "CRM, calendar, phone, and website don't talk to each other — so automation stops at the first integration gap.",
      },
      {
        title: "Overloaded staff",
        description:
          "Your team spends the day answering the same questions instead of closing deals and serving customers.",
      },
    ],
  },
  solution: {
    title: "Intelligent agents that handle the work — reliably",
    description:
      "We design and deploy AI agent systems mapped to your actual workflows: qualifying inbound leads, answering common questions, booking appointments, sending follow-ups, and triggering the next step in your operations stack.",
    points: [
      "Qualify leads with structured questions before they reach your sales team",
      "Answer common customer questions instantly — 24/7, on-brand",
      "Book appointments directly into your calendar with confirmations and reminders",
      "Send persistent follow-ups so no inquiry goes cold",
      "Route requests to the right person or department automatically",
      "Trigger workflows in your CRM, scheduling, and ops tools",
      "Support internal teams with knowledge-base and assistant agents",
      "Reduce manual workload so staff focus on high-value work",
    ],
  },
  useCases: [
    {
      icon: "Target",
      title: "Lead Qualification Agents",
      description:
        "Capture intent, budget, timeline, and fit before a human ever picks up the phone.",
      outcome: "Sales teams talk only to qualified, ready-to-buy prospects.",
    },
    {
      icon: "CalendarCheck",
      title: "Appointment Scheduling Agents",
      description:
        "Let customers book, reschedule, and confirm appointments through natural conversation.",
      outcome: "More booked appointments with fewer no-shows and less phone tag.",
    },
    {
      icon: "Repeat",
      title: "Sales Follow-Up Agents",
      description:
        "Pursue every quote, estimate, and inquiry with timed, personalized follow-up sequences.",
      outcome: "Higher close rates from leads that would otherwise go silent.",
    },
    {
      icon: "MessageSquare",
      title: "Customer Support Agents",
      description:
        "Handle FAQs, order status, policies, and routing — escalating only when needed.",
      outcome: "Faster support and happier customers without adding headcount.",
    },
    {
      icon: "Workflow",
      title: "Internal Operations Agents",
      description:
        "Automate status updates, handoffs, reminders, and internal request routing.",
      outcome: "Operations run smoother with less manual coordination.",
    },
    {
      icon: "Database",
      title: "Knowledge Base Agents",
      description:
        "Give staff and customers instant answers from your SOPs, docs, and product knowledge.",
      outcome: "Consistent, accurate information delivered on demand.",
    },
    {
      icon: "Network",
      title: "Workflow Automation Agents",
      description:
        "Connect triggers across tools — new lead, new booking, new ticket — to automated actions.",
      outcome: "Systems that react in seconds instead of waiting on someone to notice.",
    },
    {
      icon: "Users",
      title: "Employee Assistant Agents",
      description:
        "Help teams draft responses, look up data, schedule tasks, and complete routine work faster.",
      outcome: "More output per employee without burning people out.",
    },
  ],
  partnerPlatforms: {
    headline: "AI Agent Systems Powered by *OpenClaw* and *Hermes*",
    subheadline:
      "FTW Agency helps businesses deploy intelligent AI agent systems using powerful platforms like OpenClaw and Hermes, then customizes those systems around each company's workflows, customers, and growth goals.",
    partners: [
      {
        name: "OpenClaw",
        logoKey: "openclaw",
        description:
          "OpenClaw-powered agents can support customer conversations, lead qualification, scheduling, support workflows, and business process automation.",
      },
      {
        name: "Hermes",
        logoKey: "hermes",
        description:
          "Hermes-powered agents can support business operations, customer communication, workflow automation, and scalable AI agent deployment.",
      },
    ],
  },
  process: [
    {
      title: "Discover",
      description:
        "We map where time is lost, leads leak, and customers wait — and identify the highest-ROI agent opportunities.",
    },
    {
      title: "Map Workflows",
      description:
        "Every conversation path, handoff rule, and integration point documented before a single agent is built.",
    },
    {
      title: "Build Agent",
      description:
        "Custom agent logic, prompts, guardrails, and escalation rules tailored to your brand and operations.",
    },
    {
      title: "Connect Systems",
      description:
        "CRM, calendar, phone, website, and internal tools wired so agents act on real data — not in isolation.",
    },
    {
      title: "Test & Train",
      description:
        "Scenario testing, edge-case handling, and team training so everyone trusts the system before launch.",
    },
    {
      title: "Launch",
      description:
        "Phased rollout with monitoring — starting where impact is highest and risk is lowest.",
    },
    {
      title: "Optimize",
      description:
        "Continuous improvement from conversation logs, conversion data, and team feedback.",
    },
  ],
  benefits: [
    {
      icon: "Timer",
      title: "Faster response times",
      description:
        "Every inquiry gets an instant, helpful reply — nights, weekends, and peak hours included.",
    },
    {
      icon: "Target",
      title: "More qualified leads",
      description:
        "Agents filter noise before it hits your team, so sales time goes to real opportunities.",
    },
    {
      icon: "Clock",
      title: "Less manual work",
      description:
        "Routine tasks run automatically — freeing staff for work only humans should do.",
    },
    {
      icon: "CalendarCheck",
      title: "More booked appointments",
      description:
        "Self-service scheduling and smart reminders keep calendars full.",
    },
    {
      icon: "Repeat",
      title: "Consistent follow-up",
      description:
        "Every lead pursued with the same persistence — no more forgotten quotes or cold pipelines.",
    },
    {
      icon: "Heart",
      title: "Better customer experience",
      description:
        "Customers get fast, accurate answers without waiting on hold or in an inbox queue.",
    },
    {
      icon: "TrendingUp",
      title: "Scalable operations",
      description:
        "Handle more volume without proportionally adding staff — agents scale with demand.",
    },
  ],
  subservices: [],
  faqs: [
    {
      question: "What are AI agents?",
      answer:
        "AI agents are software systems that can understand requests, take actions, and complete tasks on behalf of your business — qualifying leads, answering questions, booking appointments, sending follow-ups, and triggering workflows in your existing tools. They're practical automation, not chatbot gimmicks.",
    },
    {
      question: "How can AI agents help my business?",
      answer:
        "They reduce response time, eliminate repetitive admin work, improve follow-up consistency, and let your team focus on high-value conversations. Most businesses deploy agents first where speed matters most: lead response, scheduling, and customer support.",
    },
    {
      question: "Can AI agents qualify leads?",
      answer:
        "Yes — lead qualification is one of the highest-ROI use cases. Agents ask the right questions, score fit, and route hot prospects to your team while nurturing or filtering the rest automatically.",
    },
    {
      question: "Can AI agents book appointments?",
      answer:
        "Yes. Agents integrate with your calendar to offer available times, confirm bookings, send reminders, and handle reschedules — without back-and-forth email or phone tag.",
    },
    {
      question: "Can AI agents follow up with customers?",
      answer:
        "Absolutely. Follow-up agents pursue quotes, estimates, and inquiries on a schedule you define — personalized, persistent, and never forgotten because someone got busy.",
    },
    {
      question: "Can AI agents integrate with my current tools?",
      answer:
        "In most cases, yes. We connect agents to CRMs, calendars, phone systems, websites, help desks, and custom software. The agent is the intelligent layer; your existing stack remains the system of record.",
    },
    {
      question: "What types of businesses can use AI agents?",
      answer:
        "Any business with repeatable conversations or workflows: home services, healthcare, professional services, restaurants, logistics, SaaS, and more. If your team answers the same questions or chases the same follow-ups daily, agents will help.",
    },
    {
      question: "How much does an AI agent system cost?",
      answer:
        "It depends on scope — a single qualification or scheduling agent is very different from a multi-agent operations platform. We scope in phases with clear pricing after a strategy call, so you invest based on ROI, not hype.",
    },
  ],
  relatedServices: [
    "business-automation",
    "custom-software",
    "mobile-app-development",
    "aio",
    "seo",
  ],
  featured: false,
  ctaHeadline: "Ready to Automate the Work That Slows Your Business Down?",
  ctaSubheadline:
    "Book a strategy call and we'll map the AI agent systems that recover time, capture leads, and scale your operations.",
  meta: {
    title: "AI Agents for Business | FTW Agency",
    description:
      "FTW Agency builds AI agents that qualify leads, book appointments, answer customer questions, automate follow-up, and streamline business workflows.",
    ogTitle: "AI Agents & Business Automation | FTW Agency",
    ogDescription:
      "Deploy AI-powered business automation systems that improve response times, reduce manual work, and help your company scale.",
  },
};
