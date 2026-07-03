import type { Industry } from "@/lib/schemas";

export const transportationLogistics: Industry = {
  slug: "transportation-logistics",
  title: "Transportation & Logistics",
  icon: "Truck",
  excerpt:
    "Demand generation and operational systems for moving companies, fleets, couriers, and logistics providers.",
  heroHeadline: "Keep Your Fleet *Moving* and Your Pipeline Full.",
  heroSub:
    "We help transportation and logistics companies generate consistent demand, quote faster, and run dispatch and tracking on systems built for how you operate.",
  painPoints: [
    {
      title: "Lumpy, unpredictable demand",
      description:
        "Trucks sit idle one week and turn away work the next — without a demand engine smoothing the curve.",
    },
    {
      title: "Quotes too slow to win",
      description:
        "Customers book the first credible quote. Manual quoting loses jobs by hours.",
    },
    {
      title: "Dispatch by phone and whiteboard",
      description:
        "Manual coordination caps fleet utilization and breaks down as you add vehicles.",
    },
    {
      title: "Customers calling for updates",
      description:
        "'Where's my delivery?' calls consume your office while customers expect real-time tracking.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Transportation & Logistics",
    description:
      "Search visibility and instant quoting win the booking, while custom dispatch, tracking, and customer portals turn operations into a competitive advantage.",
  },
  serviceStack: [
    {
      service: "seo",
      reason: "Rank for the routes and services that fill your schedule.",
    },
    {
      service: "custom-software",
      reason: "Quoting, dispatch, and tracking systems built for your operation.",
    },
    {
      service: "business-automation",
      reason: "Instant quote follow-up and automated customer updates.",
    },
    {
      service: "paid-ads-management",
      reason: "Capture urgent, high-intent moving and freight searches.",
    },
    {
      service: "mobile-app-development",
      reason: "Driver apps connecting the road to the office in real time.",
    },
  ],
  stats: [
    { value: 65, suffix: "%", label: "of customers book the first credible quote received" },
    { value: 25, suffix: "%", label: "utilization improvement with systematic dispatch" },
    { value: 60, suffix: "%", label: "of status calls eliminated by self-service tracking" },
  ],
  examples: {
    lead: "Quote request — 3-bedroom move, 40 miles",
    review: "\u201cOn time, careful, and zero surprises on price.\u201d",
    appointment: "Pickup scheduled — Friday 8:00 AM window",
    metricLabel: "Jobs booked this week",
    metricValue: "+34",
  },
  faqs: [
    {
      question: "What types of transportation companies do you work with?",
      answer:
        "Moving companies, courier and last-mile services, freight brokers, trucking fleets, and specialty haulers. The system adapts to both consumer-facing and B2B logistics models.",
    },
    {
      question: "Can you build software that works with our dispatch process?",
      answer:
        "Yes — we build custom dispatch, quoting, and tracking platforms around your routes, equipment, and pricing logic, integrated with your accounting and telematics.",
    },
    {
      question: "How do you generate B2B logistics leads?",
      answer:
        "With authority SEO for your lanes and capabilities, outbound-supporting content, and follow-up automation built for longer procurement cycles.",
    },
  ],
  meta: {
    title: "Transportation & Logistics Growth Systems | FTW Agency",
    description:
      "Demand generation and operations software for moving companies, fleets, and logistics providers: SEO, instant quoting, dispatch systems, and driver apps.",
  },
};
