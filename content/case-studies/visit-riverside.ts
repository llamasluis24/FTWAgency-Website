import type { CaseStudy } from "@/lib/schemas";
import {
  visitRiversideCategoryExplorer,
  type VisitRiversideCategoryId,
  type VisitRiversideListing,
} from "./visit-riverside-category-data";

export {
  visitRiversideCategoryExplorer,
  type VisitRiversideCategoryId,
  type VisitRiversideListing,
  type VisitRiversideInteractiveCategory,
  type VisitRiversideStaticCategory,
} from "./visit-riverside-category-data";

export const VISIT_RIVERSIDE_NAME = "Visit Riverside";

const CAT = "/showcases/websites/visit-riverside";
const IMG = `${CAT}/category-things-to-do.png`;

export const visitRiversideImages = {
  hero: IMG,
  platform: IMG,
  mobile: IMG,
  logo: `${CAT}/logo.png`,
  journeyChoose: `${CAT}/journey-choose-restaurants.png`,
  mapThingsToDo: `${CAT}/map-things-to-do.png`,
  homepageHero: `${CAT}/homepage-hero.png`,
  challengeBg: `${CAT}/challenge-bg-hq.jpg`,
} as const;

/** @deprecated Use visitRiversideCategoryExplorer */
export const visitRiversideCategoryTabs = visitRiversideCategoryExplorer.map((tab) => ({
  id: tab.id,
  label: tab.label,
  image: tab.image,
  mapImage: "mapImage" in tab ? tab.mapImage : tab.image,
  alt: tab.alt,
}));

export const visitRiverside: CaseStudy = {
  slug: "visit-riverside",
  title: "How Visit Riverside Became a Digital Front Door to the City",
  client: VISIT_RIVERSIDE_NAME,
  industry: "professional-services",
  services: ["website-design-development", "seo"],
  summary:
    "Visit Riverside was designed as a modern destination platform that helps locals, visitors, students, families, and travelers discover restaurants, attractions, events, businesses, neighborhoods, and experiences throughout Riverside.",
  challenge: [
    "Riverside has restaurants, events, historic landmarks, colleges, museums, nightlife, local shops, parks, and community experiences spread across the city. The challenge was not simply creating a website — it was organizing an entire city into a digital experience that people could actually explore.",
    "Visitors needed an easier way to answer questions like where to eat, what to do this weekend, what events are happening, and what makes Riverside worth visiting.",
    "The platform needed to make Riverside easier to discover, easier to navigate, and easier to promote.",
  ],
  strategy: [
    "Most directory websites are built around lists. Visit Riverside needed to be built around journeys — tourists, students, families, and local businesses all arrive with different goals.",
    "Organize content around how people actually explore a city: category-based discovery, local business visibility, event exploration, and clear paths from interest to action.",
    "Build mobile-friendly browsing and SEO-friendly content structure so discovery works on the go and compounds over time.",
  ],
  execution: [
    "Designed a visual homepage entry point that introduces Riverside through curated categories instead of overwhelming lists.",
    "Built category architecture for restaurants, events, hotels, attractions, shopping, nightlife, arts, and outdoor activities.",
    "Created listing cards and detail views built for discovery, trust, and action — photos, tags, location, and clear CTAs.",
    "Structured pages and categories for long-term organic visibility across local search intent.",
  ],
  results: [
    { value: 5, suffix: " Steps", label: "Visitor journey from search to visit" },
    { value: 1, label: "Central Riverside discovery hub" },
    { value: 3, label: "Core audience paths — visitors, locals, students" },
  ],
  screenshots: [
    { title: "Destination Homepage", kind: "website" },
    { title: "Category Discovery", kind: "website" },
    { title: "Mobile Exploration", kind: "mobile" },
  ],
  beforeAfter: {
    before: {
      title: "The Gap",
      caption: "No official hub — visitors had to piece Riverside together from scattered sources",
    },
    after: {
      title: "The Platform",
      caption: "Riverside's first official discovery hub with categories, listings, and mobile browsing",
    },
  },
  testimonial: {
    quote:
      "A city has more to offer than people can find through random searches. Visit Riverside was built to make local discovery easier, faster, and more intentional.",
    author: "FTW Agency",
    role: "Project Team",
    company: VISIT_RIVERSIDE_NAME,
    industry: "professional-services",
  },
  featured: true,
};

export const visitRiversideHero = {
  eyebrow: "Case Study • Visit Riverside",
  headline: "How Visit Riverside Became a Digital Front Door to the City",
  subheadline:
    "Visit Riverside was designed as a modern destination platform that helps locals, visitors, students, families, and travelers discover restaurants, attractions, events, businesses, neighborhoods, and experiences throughout Riverside.",
  tags: [
    "Website Design",
    "Destination Marketing",
    "Content Architecture",
    "Local SEO",
    "UX Strategy",
    "Community Platform",
  ] as const,
  image: visitRiversideImages.hero,
  imageAlt: "Visit Riverside destination platform homepage in browser mockup",
} as const;

export const visitRiversideChallenge = {
  eyebrow: "The Challenge",
  headline: "One City. Hundreds of Places to Discover.",
  paragraphs: [
    "Riverside has restaurants, events, historic landmarks, colleges, museums, nightlife, local shops, parks, and community experiences spread across the city. The challenge was not simply creating a website. The challenge was organizing an entire city into a digital experience that people could actually explore.",
    "Visitors needed an easier way to answer questions like: Where should we eat? What can we do this weekend? What events are happening? What local businesses should we check out? What makes Riverside worth visiting?",
    "The platform needed to make Riverside easier to discover, easier to navigate, and easier to promote.",
  ],
  questions: [
    "Where should we eat?",
    "What can we do this weekend?",
    "What events are happening?",
    "What local businesses should we check out?",
    "What makes Riverside worth visiting?",
  ] as const,
  highlights: [
    { title: "City-Scale Platform", description: "Built for Riverside discovery" },
    { title: "Multiple Categories", description: "Restaurants, events, attractions, shops, hotels, and more" },
    { title: "Local SEO Foundation", description: "Structured for long-term search visibility" },
    { title: "Mobile-First Experience", description: "Designed for visitors exploring on the go" },
  ] as const,
} as const;

export const visitRiversideStrategy = {
  eyebrow: "The Strategy",
  headline: "Design Around Visitor Intent",
  body: "Most directory websites are built around lists. Visit Riverside needed to be built around journeys. Different users arrive with different goals. A tourist may be looking for things to do. A student may be looking for food nearby. A family may be searching for weekend events. A local business may need visibility. The strategy was to organize content around how people actually explore a city.",
  pillars: [
    "Category-based discovery",
    "Local business visibility",
    "Event and attraction exploration",
    "Mobile-friendly browsing",
    "SEO-friendly content structure",
    "Clear paths from interest to action",
  ] as const,
} as const;

export const visitRiversideExecution = {
  eyebrow: "The Execution",
  headline: "Turning Riverside Into a Searchable Digital Destination",
  body: "The platform was designed to make local discovery feel simple, visual, and useful. A visitor lands on the homepage, chooses a category, explores local listings, views details, and finds a reason to visit.",
  categories: visitRiversideCategoryExplorer.map((tab) => tab.label),
} as const;

export const visitRiversideJourneySteps = [
  {
    id: "search",
    step: "01",
    title: "Search",
    headline: "things to do in Riverside",
    body: "Discovery often starts with a simple search — a weekend plan, a dinner idea, or a first visit to the city.",
  },
  {
    id: "discover",
    step: "02",
    title: "Discover",
    headline: "Land on Visit Riverside",
    body: "The homepage introduces Riverside through curated categories instead of forcing users to dig through disconnected results.",
  },
  {
    id: "explore",
    step: "03",
    title: "Explore",
    headline: "Filter by interest",
    body: "Visitors browse food, events, entertainment, shopping, and attractions through visual category paths.",
  },
  {
    id: "choose",
    step: "04",
    title: "Choose",
    headline: "Open a listing",
    body: "Business and attraction pages combine photography, tags, location context, and a clear reason to visit.",
  },
  {
    id: "visit",
    step: "05",
    title: "Visit",
    headline: "Plan the trip",
    body: "Directions, sharing, and mobile-friendly CTAs help users move from browsing to actually showing up.",
  },
] as const;

export const visitRiversideBeforeItems = [
  "No official city discovery hub",
  "Visitors piecing info together from random searches",
  "Events and businesses hard to find in one place",
  "No shared showcase for local businesses",
  "Riverside's story not told in one place",
  "No structured path from interest to visit",
] as const;

export const visitRiversideAfterItems = [
  "Riverside's first official discovery platform",
  "Organized categories for food, events, and attractions",
  "Local business listings with map discovery",
  "Event and attraction visibility in one hub",
  "SEO-ready content architecture",
  "Mobile-first visitor experience",
] as const;

export const visitRiversideFeatures = [
  {
    title: "Destination Homepage",
    description: "A visual entry point for the city.",
    visual: "homepage" as const,
  },
  {
    title: "Category Architecture",
    description: "Restaurants, events, hotels, attractions, shopping, and local experiences organized clearly.",
    visual: "categories" as const,
  },
  {
    title: "Local Business Listings",
    description: "Business cards built for discovery, trust, and action.",
    visual: "listing" as const,
  },
  {
    title: "Mobile Exploration",
    description: "A visitor-friendly browsing experience for people exploring on the go.",
    visual: "mobile" as const,
  },
  {
    title: "SEO Content Structure",
    description: "Pages and categories structured to support long-term organic visibility.",
    visual: "seo" as const,
  },
  {
    title: "Community Growth Platform",
    description: "Built to expand as Riverside adds more businesses, events, and experiences.",
    visual: "growth" as const,
  },
] as const;

export const visitRiversidePhilosophy = [
  {
    title: "Visual Discovery",
    description: "Photography and category previews help visitors understand the city quickly.",
  },
  {
    title: "Useful Navigation",
    description: "The structure is built around what people want to do, not how a database is organized.",
  },
  {
    title: "Local Trust",
    description: "Listings and content help local businesses feel credible and easier to find.",
  },
  {
    title: "Scalable Content",
    description: "The platform can grow with new categories, listings, neighborhoods, and events.",
  },
] as const;

export const visitRiversideHighlights = [
  { value: "Destination", label: "Website" },
  { value: "City", label: "Discovery Platform" },
  { value: "Local", label: "Business Directory" },
  { value: "Mobile", label: "First UX" },
  { value: "SEO", label: "Foundation" },
  { value: "Scalable", label: "Content Architecture" },
] as const;

export const visitRiversideResult = {
  eyebrow: "Result",
  headline: "A Digital Gateway for Riverside",
  paragraphs: [
    "Visit Riverside gives the city a stronger digital presence by making restaurants, events, attractions, and local businesses easier to discover. Instead of forcing users to search across disconnected platforms, the website creates one place where people can explore what Riverside has to offer.",
    "This was not just a website. It was a foundation for destination marketing, local discovery, and community visibility.",
  ],
} as const;

export const visitRiversideCategories = [
  { label: "Restaurants", tone: "accent" as const },
  { label: "Events", tone: "neutral" as const },
  { label: "Things To Do", tone: "neutral" as const },
  { label: "Hotels", tone: "neutral" as const },
  { label: "Nightlife", tone: "neutral" as const },
  { label: "Arts & Culture", tone: "neutral" as const },
] as const;
