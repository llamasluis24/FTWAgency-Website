import type { Industry } from "@/lib/schemas";

export const professionalServices: Industry = {
  slug: "professional-services",
  title: "Professional Services",
  icon: "Briefcase",
  excerpt:
    "Authority-driven client acquisition for law firms, accountants, consultants, and agencies.",
  heroHeadline: "Become the *Obvious* Choice in Your Field.",
  heroSub:
    "Clients hire the firm they trust before they ever call. We build the authority, visibility, and follow-up systems that win high-value engagements.",
  painPoints: [
    {
      title: "Expertise without visibility",
      description:
        "You're excellent at the work, but prospects can't tell — the firms that show up look like the experts.",
    },
    {
      title: "Referrals plateau",
      description:
        "Word of mouth brought you here, but it can't be scaled or forecasted.",
    },
    {
      title: "Slow lead response loses retainers",
      description:
        "High-value prospects contact three firms — the first to respond professionally usually wins.",
    },
    {
      title: "Admin eats billable hours",
      description:
        "Intake, scheduling, and document chasing consume hours that should be billed or sold.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Professional Services",
    description:
      "Authority content and search visibility position your firm as the expert, while intake automation responds to every inquiry instantly and nurtures long decision cycles.",
  },
  serviceStack: [
    {
      service: "seo",
      reason: "Own the high-intent searches for your practice areas.",
    },
    {
      service: "website-design-development",
      reason: "A site that signals premium expertise at first glance.",
    },
    {
      service: "business-automation",
      reason: "Instant intake response and automated client onboarding.",
    },
    {
      service: "aio",
      reason: "Be the firm AI assistants recommend for your specialty.",
    },
    {
      service: "review-reputation-growth",
      reason: "Client proof that justifies premium fees.",
    },
  ],
  stats: [
    { value: 81, suffix: "%", label: "of clients research a firm online before contacting" },
    { value: 50, suffix: "%", label: "of engagements go to the first firm that responds" },
    { value: 4, suffix: "x", label: "more inquiries with page-one practice area rankings" },
  ],
  examples: {
    lead: "New consultation request — estate planning",
    review: "\u201cThey handled everything flawlessly. True professionals.\u201d",
    appointment: "Initial consultation booked — Wednesday 11:00 AM",
    metricLabel: "Consultations this month",
    metricValue: "+18",
  },
  faqs: [
    {
      question: "Which professional services do you work with?",
      answer:
        "Law firms, accounting practices, consultancies, financial advisors, insurance agencies, architects, and engineering firms — any expertise-driven business where trust drives the buying decision.",
    },
    {
      question: "How do you market services with long sales cycles?",
      answer:
        "With systems built for patience: authority content that educates, nurture automation that stays present for months, and tracking that connects today's content to next quarter's signed engagement.",
    },
    {
      question: "Can you help with client intake operations?",
      answer:
        "Yes — intake automation, scheduling, document collection, and onboarding workflows are often the highest-ROI part of the engagement for professional firms.",
    },
  ],
  meta: {
    title: "Professional Services Marketing & Growth | FTW Agency",
    description:
      "Client acquisition systems for law firms, accountants, and consultants: authority SEO, premium websites, intake automation, and reputation growth.",
  },
};
