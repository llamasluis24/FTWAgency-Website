import type { Location } from "@/lib/schemas";

export const losAngelesCa: Location = {
  slug: "los-angeles-ca",
  city: "Los Angeles",
  state: "California",
  stateAbbr: "CA",
  county: "Los Angeles County",
  region: "Southern California",
  metro: "Los Angeles-Long Beach-Anaheim",
  geo: { lat: 34.0522, lng: -118.2437 },
  nearbySlugs: ["irvine-ca", "anaheim-ca", "santa-ana-ca", "riverside-ca"],
  publish: { status: "full", publishedAt: "2026-07-05", lastModified: "2026-07-05" },
  heroHeadline: "Growth Systems for *Los Angeles* Businesses.",
  heroSub:
    "The nation's second-largest metro demands more than marketing tactics — it requires growth systems. We help LA businesses compete across neighborhoods, verticals, and search channels at scale.",
  intro:
    "Los Angeles is not one market — it's dozens. From DTLA professional services to Westside luxury brands to Valley home services, each micro-market has distinct search behavior, competition levels, and customer expectations. Winning here requires architecture, not ad-hoc campaigns.",
  marketPoints: [
    {
      title: "Micro-market complexity",
      description:
        "LA customers search by neighborhood, not city. Visibility must match how Angelenos actually describe where they are and what they need.",
    },
    {
      title: "Entertainment and creator economy",
      description:
        "Social proof, viral visibility, and brand presence intersect with traditional SEO — LA businesses need both.",
    },
    {
      title: "Extreme competition density",
      description:
        "Every service category has entrenched competitors. Systems that compound — reviews, content, automation — beat one-time campaigns.",
    },
  ],
  stats: [
    { value: 4, suffix: "M+", label: "City population" },
    { value: 88, suffix: "+", label: "Neighborhoods and districts" },
    { value: 13, suffix: "M+", label: "Metro area population" },
  ],
  whyLocal: [
    {
      title: "Neighborhood-level architecture",
      description:
        "We build local visibility for the specific LA communities you serve — not one generic city page that ranks nowhere.",
    },
    {
      title: "Multi-channel growth systems",
      description:
        "SEO, AIO, social, paid, and automation working together — because LA customers discover businesses across every channel.",
    },
    {
      title: "Southern California coverage",
      description:
        "LA systems connect to our broader SoCal network — Orange County, Inland Empire, and San Diego — for businesses that serve multiple markets.",
    },
  ],
  serviceAreas: [
    "Downtown LA",
    "Westside",
    "San Fernando Valley",
    "South Bay",
    "Hollywood",
    "Pasadena",
    "Long Beach",
    "Santa Monica",
  ],
  featuredCaseStudies: ["rigo-demolition"],
  featuredProjects: [],
  featuredArticles: ["growth-systems-vs-marketing", "aio-explained"],
  faqs: [
    {
      question: "How do you approach local SEO in a city as large as Los Angeles?",
      answer:
        "Neighborhood by neighborhood. We build service-area architecture targeting the specific LA communities you serve — with unique local signals for each, not thin duplicate pages.",
    },
    {
      question: "Do you serve businesses that operate across multiple LA neighborhoods?",
      answer:
        "Yes — our programmatic location system scales across your full service radius, from the Valley to the Westside to South Bay, from one unified growth infrastructure.",
    },
  ],
  meta: {
    title: "Los Angeles Marketing Agency & Growth Systems | FTW Agency",
    description:
      "FTW Agency helps Los Angeles businesses generate leads and scale — local SEO, AIO, websites, automation, and software for the LA metro.",
  },
};
