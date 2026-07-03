import type { Industry } from "@/lib/schemas";

export const startups: Industry = {
  slug: "startups",
  title: "Startup Companies",
  icon: "Rocket",
  excerpt:
    "Launch-ready brand, web, and growth infrastructure for startups that need traction fast.",
  heroHeadline: "From Zero to *Traction* — Without the Wasted Quarters.",
  heroSub:
    "Startups don't get second chances at early momentum. We build the brand presence, growth infrastructure, and automation that make every early dollar work harder.",
  painPoints: [
    {
      title: "Credibility gap",
      description:
        "Customers and investors judge you by your digital presence — and early-stage usually looks early-stage.",
    },
    {
      title: "No time, no playbook",
      description:
        "Founders juggle product, sales, and fundraising — marketing gets whatever's left, which is nothing.",
    },
    {
      title: "Burning cash on scattered tactics",
      description:
        "A boosted post here, a directory listing there — spend without a system produces noise, not pipeline.",
    },
    {
      title: "Growth that can't scale",
      description:
        "Founder hustle closes the first customers, but there's no engine behind it.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Startups",
    description:
      "A credibility-building web presence, early SEO and AI visibility that compound from day one, and automation that lets a tiny team operate like a funded growth org.",
  },
  serviceStack: [
    {
      service: "website-design-development",
      reason: "A launch site that makes you look like the company you're becoming.",
    },
    {
      service: "business-automation",
      reason: "Operate like a 10-person growth team with a team of two.",
    },
    {
      service: "seo",
      reason: "Plant the organic flags that compound while you build.",
    },
    {
      service: "aio",
      reason: "Get cited by AI in your category before incumbents notice.",
    },
    {
      service: "viral-social-media",
      reason: "Build an audience that derisks every future launch.",
    },
  ],
  stats: [
    { value: 90, suffix: "%", label: "of customers check your website before a first call" },
    { value: 6, suffix: "mo", label: "average head start from early SEO investment" },
    { value: 10, suffix: "x", label: "leverage from automation on a small team" },
  ],
  examples: {
    lead: "Early access signup — beta waitlist #482",
    review: "\u201cThis team ships faster than anyone we've worked with.\u201d",
    appointment: "Discovery call booked — Friday 10:00 AM",
    metricLabel: "Waitlist signups",
    metricValue: "+482",
  },
  faqs: [
    {
      question: "We're pre-revenue — is this premature?",
      answer:
        "It depends on stage. A credible web presence and basic growth infrastructure pay off immediately; heavy channel spend can wait. We scope startup engagements to runway and stage — no enterprise retainers for seed-stage teams.",
    },
    {
      question: "Can you move at startup speed?",
      answer:
        "It's our favorite pace. Launch sites in weeks, not quarters, and growth experiments shipped in days. We work in sprints aligned to your fundraising and launch milestones.",
    },
    {
      question: "What if we pivot?",
      answer:
        "We build for it — modular sites, flexible positioning, and systems that adapt. Several clients have repositioned entirely without rebuilding their infrastructure from scratch.",
    },
  ],
  meta: {
    title: "Startup Marketing & Growth Infrastructure | FTW Agency",
    description:
      "Growth systems for startups: launch-ready websites, early SEO and AI visibility, and automation that gives small teams enterprise leverage.",
  },
};
