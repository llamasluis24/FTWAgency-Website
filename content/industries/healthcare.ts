import type { Industry } from "@/lib/schemas";

export const healthcare: Industry = {
  slug: "healthcare",
  title: "Healthcare",
  icon: "HeartPulse",
  excerpt:
    "Patient acquisition and practice operations for clinics, dental practices, and healthcare providers.",
  heroHeadline: "More Patients. Less Front-Desk *Chaos*.",
  heroSub:
    "We help practices grow patient volume with trusted online visibility while automation handles scheduling, reminders, and follow-up your front desk can't keep up with.",
  painPoints: [
    {
      title: "Patients choose by reviews",
      description:
        "Prospective patients compare ratings before booking — a thin review profile sends them elsewhere.",
    },
    {
      title: "Front desk overwhelmed",
      description:
        "Phones, check-ins, and reminders compete for attention — and booking opportunities slip away.",
    },
    {
      title: "No-shows drain the schedule",
      description:
        "Every empty slot is unrecoverable revenue, and manual reminder calls don't scale.",
    },
    {
      title: "Invisible for key treatments",
      description:
        "High-value treatment searches go to competitors who rank — even when you're the better provider.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Healthcare",
    description:
      "Search visibility and reputation bring patients in, self-service scheduling books them without phone tag, and automated reminders keep the schedule full.",
  },
  serviceStack: [
    {
      service: "review-reputation-growth",
      reason: "Build the rating profile patients trust with their health.",
    },
    {
      service: "seo",
      reason: "Rank for the treatments and specialties that drive practice revenue.",
    },
    {
      service: "business-automation",
      reason: "Reminders, recalls, and follow-ups that fill the schedule automatically.",
    },
    {
      service: "website-design-development",
      reason: "A trustworthy site that converts research into booked appointments.",
    },
    {
      service: "paid-ads-management",
      reason: "Immediate visibility for high-value treatment searches.",
    },
  ],
  stats: [
    { value: 77, suffix: "%", label: "of patients read reviews before choosing a provider" },
    { value: 30, suffix: "%", label: "average no-show reduction with automated reminders" },
    { value: 5, suffix: "x", label: "more bookings from page-one treatment rankings" },
  ],
  examples: {
    lead: "New patient inquiry — dental implant consultation",
    review: "\u201cThe whole team made me feel completely at ease.\u201d",
    appointment: "New patient exam booked — Tuesday 2:30 PM",
    metricLabel: "New patients this month",
    metricValue: "+31",
  },
  faqs: [
    {
      question: "Do you understand healthcare compliance requirements?",
      answer:
        "Yes — every system we build respects patient privacy regulations. Review requests, reminders, and marketing automation are designed to operate without exposing protected health information.",
    },
    {
      question: "Which types of practices do you work with?",
      answer:
        "Dental, medical, chiropractic, physical therapy, mental health, veterinary, and specialty clinics. The patient acquisition system adapts to any appointment-based practice.",
    },
    {
      question: "Can you integrate with our practice management system?",
      answer:
        "In most cases, yes — we integrate scheduling and reminder automation with common practice management platforms so the front desk works from one system.",
    },
  ],
  meta: {
    title: "Healthcare Marketing & Practice Growth | FTW Agency",
    description:
      "Patient acquisition systems for clinics and practices: reputation growth, treatment SEO, scheduling automation, and websites that convert patients.",
  },
};
