import type { Industry } from "@/lib/schemas";

export const manufacturing: Industry = {
  slug: "manufacturing",
  title: "Manufacturing",
  icon: "Factory",
  excerpt:
    "Lead generation and operational software for manufacturers, fabricators, and industrial suppliers.",
  heroHeadline: "Modern Growth Systems for *Industrial* Companies.",
  heroSub:
    "Your buyers research online long before they call. We make sure they find you — and we build the quoting and operations systems that win and deliver the work.",
  painPoints: [
    {
      title: "Invisible to specifying engineers",
      description:
        "Buyers and engineers search for capabilities online — and find competitors with stronger digital presence.",
    },
    {
      title: "RFQs answered too slowly",
      description:
        "Complex quotes assembled manually take days, while faster shops win the PO.",
    },
    {
      title: "Tribal knowledge runs the floor",
      description:
        "Scheduling and job tracking live in a few key people's heads — fragile and unscalable.",
    },
    {
      title: "Dependent on a few big accounts",
      description:
        "Without inbound demand, losing one major customer threatens the whole operation.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Manufacturing",
    description:
      "Capability-driven SEO brings qualified RFQs in, quoting systems answer them first, and shop-floor software keeps every job visible from PO to ship date.",
  },
  serviceStack: [
    {
      service: "seo",
      reason: "Rank for the capabilities and processes buyers search.",
    },
    {
      service: "website-design-development",
      reason: "A capability showcase that earns RFQs from serious buyers.",
    },
    {
      service: "custom-software",
      reason: "Quoting and job tracking systems built for your shop.",
    },
    {
      service: "business-automation",
      reason: "RFQ follow-up and customer updates that run themselves.",
    },
    {
      service: "paid-ads-management",
      reason: "Capture active capability searches while SEO compounds.",
    },
  ],
  stats: [
    { value: 67, suffix: "%", label: "of B2B buying research happens before first contact" },
    { value: 30, suffix: "%", label: "more RFQs won by responding first" },
    { value: 20, suffix: "%", label: "throughput gain from systematic job tracking" },
  ],
  examples: {
    lead: "RFQ received — 5,000 unit CNC production run",
    review: "\u201cTolerances perfect, delivered ahead of schedule.\u201d",
    appointment: "Facility tour scheduled — Thursday 1:00 PM",
    metricLabel: "RFQs this month",
    metricValue: "+22",
  },
  faqs: [
    {
      question: "Does digital marketing really work for manufacturers?",
      answer:
        "Yes — because your buyers changed. Engineers and procurement teams shortlist suppliers from online research. Manufacturers with strong capability content and fast RFQ response consistently take share from invisible competitors.",
    },
    {
      question: "Can you build software for our shop floor?",
      answer:
        "Yes — quoting platforms, job travelers, scheduling boards, and customer portals built around your actual processes, integrated with your ERP or accounting system.",
    },
    {
      question: "We sell through distributors — does this still apply?",
      answer:
        "Even more so. Brand visibility creates pull-through demand, and dealer portals and spec tools make you the easiest manufacturer for the channel to sell.",
    },
  ],
  meta: {
    title: "Manufacturing Marketing & Growth Systems | FTW Agency",
    description:
      "Growth systems for manufacturers: capability SEO, RFQ-generating websites, quoting software, and shop operations systems that win and deliver more work.",
  },
};
