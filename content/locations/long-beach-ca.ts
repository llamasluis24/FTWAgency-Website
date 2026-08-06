import type { Location } from "@/lib/schemas";

export const longBeachCa: Location = {
  slug: "long-beach-ca",
  city: "Long Beach",
  state: "California",
  stateAbbr: "CA",
  county: "Los Angeles County",
  region: "Southern California",
  metro: "Los Angeles-Long Beach-Anaheim",
  geo: { lat: 33.7701, lng: -118.1937 },
  nearbySlugs: ["los-angeles-ca", "torrance-ca", "huntington-beach-ca"],
  publish: { status: "full", publishedAt: "2026-08-05", lastModified: "2026-08-05" },
  heroHeadline: "Growth Systems for *Long Beach* Businesses.",
  heroSub:
    "Port commerce, healthcare, and coastal neighborhoods make Long Beach a dense local market. We help businesses win search, convert more leads, and respond before competitors do.",
  intro:
    "Long Beach combines a major port economy with dense residential corridors and a competitive service sector. Buyers here search on mobile, compare reviews quickly, and expect professional digital experiences from local providers.",
  marketPoints: [
    {
      title: "Port-adjacent commercial demand",
      description:
        "Logistics, marine services, healthcare, and trades cluster around the port and downtown — local visibility captures high-intent commercial and residential demand.",
    },
    {
      title: "Neighborhood-level competition",
      description:
        "From Belmont Shore to North Long Beach, customers choose providers who show up for their specific area — not generic LA pages.",
    },
    {
      title: "Mobile-first decision making",
      description:
        "Long Beach buyers research on phones between work and home. Speed, clarity, and click-to-action experiences win the moment of intent.",
    },
  ],
  stats: [
    { value: 460, suffix: "K+", label: "City population" },
    { value: 80, suffix: "%", label: "Local searches with map intent" },
    { value: 11, suffix: "", label: "Integrated growth services" },
  ],
  whyLocal: [
    {
      title: "LA County coastal fluency",
      description:
        "We understand how Long Beach buyers compare options across the South Bay and OC — and how to win when competition spans multiple cities.",
    },
    {
      title: "Reputation systems that compound",
      description:
        "Reviews and Google Business Profile performance decide who gets the call in this dense market. We build the systems that earn and surface them.",
    },
    {
      title: "Lead response automation",
      description:
        "Missed calls cost Long Beach businesses daily. Automation responds in minutes, qualifies the job, and books before competitors call back.",
    },
  ],
  serviceAreas: [
    "Downtown Long Beach",
    "Belmont Shore",
    "Naples",
    "Bixby Knolls",
    "Signal Hill",
    "Lakewood",
    "Seal Beach",
    "Carson",
  ],
  featuredCaseStudies: [],
  featuredProjects: [],
  featuredArticles: ["local-seo-guide-2026", "missed-call-text-back-roi"],
  faqs: [
    {
      question: "What industries do you serve in Long Beach?",
      answer:
        "Home services, healthcare, construction, restaurants, professional services, and logistics-adjacent businesses — any company that depends on local search and fast lead response.",
    },
    {
      question: "How is Long Beach different from marketing to Los Angeles?",
      answer:
        "Long Beach has its own neighborhoods, search patterns, and competitive set. Winning here means city- and neighborhood-level visibility — not relying on a generic LA metro strategy.",
    },
  ],
  meta: {
    title: "Long Beach Marketing Agency & Growth Systems | FTW Agency",
    description:
      "FTW Agency helps Long Beach businesses generate leads and scale — local SEO, websites, automation, and software for LA County's coastal market.",
  },
};
