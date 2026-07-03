import type { Industry } from "@/lib/schemas";

export const homeServices: Industry = {
  slug: "home-services",
  title: "Home Services",
  icon: "Home",
  excerpt:
    "Growth systems for HVAC, plumbing, electrical, roofing, landscaping, and every trade that keeps homes running.",
  heroHeadline: "Growth Systems Built for *Home Service* Businesses.",
  heroSub:
    "From the first Google search to the five-star review, we build the marketing, automation, and software systems that keep your schedule full and your crews busy.",
  painPoints: [
    {
      title: "Feast-or-famine lead flow",
      description:
        "Busy seasons overflow while slow months drain cash — without a system that generates demand year-round.",
    },
    {
      title: "Missed calls while on the job",
      description:
        "Your team can't answer the phone from a crawlspace. Every missed call is a job your competitor books.",
    },
    {
      title: "Competitors own the map pack",
      description:
        "Homeowners call the top three local results. If that's not you, you're invisible at the decision moment.",
    },
    {
      title: "Office buried in scheduling chaos",
      description:
        "Dispatching, reminders, and follow-up handled manually caps how many jobs you can run.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Home Services",
    description:
      "Local search dominance brings homeowners in, instant-response automation books them before competitors call back, and review systems compound your reputation with every completed job.",
  },
  serviceStack: [
    {
      service: "google-business-profile",
      reason: "Own the map pack where homeowners choose who to call.",
    },
    {
      service: "business-automation",
      reason: "Missed call text back and instant follow-up book jobs while crews work.",
    },
    {
      service: "review-reputation-growth",
      reason: "Turn every completed job into five-star proof.",
    },
    {
      service: "seo",
      reason: "Rank for every service and suburb you cover.",
    },
    {
      service: "website-design-development",
      reason: "A site that turns emergency searches into booked calls.",
    },
  ],
  stats: [
    { value: 78, suffix: "%", label: "of local searches result in a call within 24 hours" },
    { value: 3, suffix: "x", label: "more calls from a top-3 map pack position" },
    { value: 85, suffix: "%", label: "of missed callers won't leave a voicemail" },
  ],
  examples: {
    lead: "New estimate request — water heater replacement",
    review: "\u201cFixed our AC same-day. Outstanding service!\u201d",
    appointment: "Furnace tune-up booked — Thursday 9:00 AM",
    metricLabel: "Booked jobs this month",
    metricValue: "+47",
  },
  faqs: [
    {
      question: "Which home service businesses do you work with?",
      answer:
        "HVAC, plumbing, electrical, roofing, landscaping, painting, garage doors, cleaning, pest control, and most other trades. The growth system adapts to any service business that books jobs from local demand.",
    },
    {
      question: "How do you handle seasonal demand swings?",
      answer:
        "We build for it: paid campaigns scale up before peak seasons, automation nurtures your customer base into off-season bookings, and SEO captures year-round emergency demand.",
    },
    {
      question: "Can you work alongside our field service software?",
      answer:
        "Yes — we integrate with ServiceTitan, Jobber, Housecall Pro, and similar platforms, so leads flow straight into your existing dispatch workflow.",
    },
  ],
  meta: {
    title: "Home Services Marketing & Growth Systems | FTW Agency",
    description:
      "Growth systems for HVAC, plumbing, electrical, and roofing companies: local SEO, missed call automation, review growth, and websites that book jobs.",
  },
};
