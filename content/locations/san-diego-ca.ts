import type { Location } from "@/lib/schemas";

export const sanDiegoCa: Location = {
  slug: "san-diego-ca",
  city: "San Diego",
  state: "California",
  stateAbbr: "CA",
  county: "San Diego County",
  region: "Southern California",
  metro: "San Diego-Carlsbad",
  geo: { lat: 32.7157, lng: -117.1611 },
  nearbySlugs: ["carlsbad-ca", "los-angeles-ca"],
  publish: { status: "full", publishedAt: "2026-07-05", lastModified: "2026-07-05" },
  heroHeadline: "Growth Systems for *San Diego* Businesses.",
  heroSub:
    "America's Finest City runs on competition — biotech, defense, hospitality, and trades all fighting for the same local searches. We help San Diego businesses win with systems built to scale.",
  intro:
    "San Diego is California's second-largest city with a diverse economy spanning biotech, military, tourism, and home services. Customers search on mobile, trust reviews and AI recommendations, and choose businesses that combine local credibility with modern digital infrastructure.",
  marketPoints: [
    {
      title: "Metro-scale competition",
      description:
        "Every category in San Diego has dozens of qualified competitors. Map pack visibility and review dominance are table stakes.",
    },
    {
      title: "Neighborhood micro-markets",
      description:
        "La Jolla buyers differ from South Bay buyers. Local systems must reflect neighborhood-level intent, not one generic city page.",
    },
    {
      title: "Tech-forward search behavior",
      description:
        "San Diego's educated workforce uses AI assistants and mobile search heavily — AIO and mobile-first experiences matter here.",
    },
  ],
  stats: [
    { value: 1.4, suffix: "M+", label: "City population" },
    { value: 3, suffix: "rd", label: "Largest city in California" },
    { value: 71, suffix: "%", label: "Consumers who check reviews first" },
  ],
  whyLocal: [
    {
      title: "Metro market architecture",
      description:
        "We build neighborhood-level visibility across San Diego's diverse communities — from Pacific Beach to Chula Vista.",
    },
    {
      title: "Multi-vertical experience",
      description:
        "From hospitality to biotech to home services, we deploy growth systems tuned to each vertical's search and buying behavior.",
    },
    {
      title: "Automation at scale",
      description:
        "San Diego's competitive pace demands instant lead response. We wire automation that captures and converts 24/7.",
    },
  ],
  serviceAreas: [
    "Downtown San Diego",
    "La Jolla",
    "Pacific Beach",
    "North Park",
    "Mission Valley",
    "Chula Vista",
    "Del Mar",
    "Coronado",
  ],
  featuredCaseStudies: [],
  featuredProjects: [],
  featuredArticles: ["aio-explained", "local-seo-guide-2026"],
  faqs: [
    {
      question: "Do you work with San Diego businesses across all neighborhoods?",
      answer:
        "Yes — we build service-area architecture that targets the specific San Diego neighborhoods and suburbs you serve, from coastal communities to South Bay.",
    },
    {
      question: "What makes San Diego local SEO different from smaller cities?",
      answer:
        "Competition density and neighborhood diversity. Winning requires neighborhood-level pages, strong GBP signals, review velocity, and content that matches how San Diego buyers actually search.",
    },
  ],
  meta: {
    title: "San Diego Marketing Agency & Growth Systems | FTW Agency",
    description:
      "FTW Agency helps San Diego businesses generate leads and scale — local SEO, AIO, websites, automation, and software for America's Finest City.",
  },
};
