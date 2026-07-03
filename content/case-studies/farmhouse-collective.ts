import type { CaseStudy } from "@/lib/schemas";

export const FARMHOUSE_NAME = "FarmHouse Collective";

const IMG = "/showcases/websites/farmhouse-collective";

export const farmhouseImages = {
  hero: `${IMG}/hero-landmark-bg.png`,
  storySide: `${IMG}/story-motel-sign.png`,
  breakCourtyard: `${IMG}/arch-4.png`,
  breakGoldenHour: `${IMG}/break-home-hero.png`,
  breakInterior: `${IMG}/break-brand-footer.png`,
  beforeMotel: `${IMG}/before-after-before-1953.png`,
  beforePolaroid: `${IMG}/before-after-before-polaroid.png`,
  afterPolaroid: `${IMG}/before-after-after-polaroid.png`,
  afterWebsite: `${IMG}/before-after-after-2024.png`,
  screenshotHome: `${IMG}/screenshot-homepage-sign.png`,
  screenshotCollective: `${IMG}/screenshot-collective-vendor.png`,
  screenshotEvents: `${IMG}/screenshot-events.png`,
  screenshotCalendar: `${IMG}/screenshot-calendar.png`,
  screenshotStory: `${IMG}/screenshot-story.jpg`,
  screenshotMobile: `${IMG}/screenshot-mobile.jpg`,
} as const;

export const farmhouseCollective: CaseStudy = {
  slug: "farmhouse-collective",
  title: "Bringing a Historic Riverside Landmark Into the Digital Era",
  client: FARMHOUSE_NAME,
  industry: "restaurants-hospitality",
  services: ["website-design-development", "seo"],
  summary:
    "A restored 1950s motel became one of Riverside's most distinctive destinations for dining, shopping, and community gathering. We created a digital experience that reflects the same craftsmanship visitors experience in person.",
  challenge: [
    "FarmHouse Collective transformed a nearly 10,000-square-foot 1950s motel into a mixed-use destination — but the digital presence did not yet reflect the quality of the physical experience.",
    "The property needed a website that felt like walking through the courtyard, not reading a commercial brochure.",
    "Restaurants, retail shops, events, and the preservation story all needed room to breathe in one cohesive brand experience.",
  ],
  strategy: [
    "Design every interaction to mirror what visitors feel when exploring FarmHouse Collective in person — large photography, warm typography, and editorial pacing.",
    "Build restaurant discovery and retail exploration into the core navigation instead of treating them as secondary pages.",
    "Establish an SEO foundation that helps Riverside locals and UC Riverside visitors discover the destination organically.",
  ],
  execution: [
    "Built an immersive homepage with cinematic photography and editorial storytelling.",
    "Created a collective directory for restaurants and retail with rich visual discovery.",
    "Developed mobile-first navigation, fast performance, and structured SEO architecture.",
    "Wove the preservation narrative and award-winning restoration story throughout the experience.",
  ],
  results: [
    { value: 1950, suffix: "s", label: "Historic property restored" },
    { value: 9891, suffix: " sq ft", label: "Mixed-use destination" },
    { value: 2026, label: "Preservation Design Award" },
  ],
  screenshots: [
    { title: "Homepage", kind: "website" },
    { title: "Restaurant Directory", kind: "website" },
    { title: "Retail Experience", kind: "website" },
    { title: "Responsive Design", kind: "mobile" },
  ],
  beforeAfter: {
    before: {
      title: "Before",
      caption: "Old motel, little awareness, no unified identity, disconnected experience",
    },
    after: {
      title: "After",
      caption: "Recognizable destination, premium website, brand storytelling, community hub",
    },
  },
  testimonial: {
    quote:
      "The website captures the feeling of being here. Visitors discover our restaurants, shops, and story before they ever walk through the courtyard — and that matters for a place built on craftsmanship and community.",
    author: FARMHOUSE_NAME,
    role: "Leadership Team",
    company: FARMHOUSE_NAME,
    industry: "restaurants-hospitality",
  },
  featured: true,
};

export const farmhouseHero = {
  eyebrow: "Case Study",
  title: FARMHOUSE_NAME,
  headline: "Bringing a Historic Riverside Landmark Into the Digital Era",
  subheadline:
    "A restored 1950s motel became one of Riverside's most distinctive destinations for dining, shopping, and community gathering. We created a digital experience that reflects the same craftsmanship visitors experience in person.",
  tags: [
    "Website Design",
    "Brand Experience",
    "UX",
    "Local SEO",
    "Historic Preservation",
  ] as const,
  image: farmhouseImages.hero,
  imageAlt:
    "Vintage Farm House Motel illustration — restoring an iconic Riverside landmark",
};

export const farmhouseStory = {
  eyebrow: "The Story",
  headline: "Preserving History While Creating Something New",
  paragraphs: [
    "Located in Riverside, California, FarmHouse Collective is the adaptive reuse of a nearly 10,000-square-foot motel originally built during the 1950s.",
    "Instead of replacing the property's history, the vision focused on preserving its architectural identity while transforming it into a vibrant destination filled with locally owned restaurants, boutique retail shops, and outdoor gathering spaces.",
    "Located just blocks from UC Riverside, the development was inspired by Costa Mesa's celebrated anti-mall concept, creating a walkable environment centered around local businesses, craftsmanship, and community.",
    "The restoration carefully preserved original buildings, landscape elements, and architectural details while introducing a modern experience built for future generations.",
  ],
  image: farmhouseImages.storySide,
  imageAlt:
    "Historic Farm House Motel sign preserved at FarmHouse Collective in Riverside, California",
};

export const farmhouseAward = {
  eyebrow: "The Recognition",
  headline: "Award-Winning Preservation",
  body: "FarmHouse Collective received the **2026 Preservation Design Award — Trustees' Award for Excellence**, recognizing the project's commitment to preserving Riverside's architectural heritage while creating a vibrant destination for future generations.",
  year: "2026",
  award: "Preservation Design Award",
  honor: "Trustees' Award for Excellence",
};

export const farmhouseDigital = {
  eyebrow: "Designing the Digital Experience",
  headline: "The Website Needed to Feel Like the Place",
  body: "Rather than building a traditional commercial website, every interaction was designed to mirror the experience visitors have when exploring FarmHouse Collective.",
  features: [
    "Large Photography",
    "Editorial Layouts",
    "Restaurant Discovery",
    "Retail Directory",
    "Responsive Design",
    "SEO Foundation",
  ] as const,
  image: farmhouseImages.screenshotHome,
  imageAlt:
    "FarmHouse Collective homepage featuring the historic motel sign and Grow Where You Are Planted tagline",
};

export const farmhouseTimelineStory = {
  headline: "The Story of the Farm House",
  subhead: "( From Roadside Motel to Collective. )",
  lede: "Explore key moments in the transformation—restoration milestones, vendor openings, and community firsts.",
  footer: "Rooted in connection — where local makers, neighbors, and families come together.",
  footerEmphasis: ["connection", "families come together"] as const,
} as const;

export const farmhouseBeforeItems = [
  "Old motel with little public awareness",
  "No unified brand identity online",
  "Disconnected visitor experience",
  "Restaurants and shops hard to discover",
] as const;

export const farmhouseAfterItems = [
  "Recognizable Riverside destination",
  "Premium website with brand storytelling",
  "Restaurant and retail discovery built in",
  "Community gathering place, online and off",
] as const;

export const farmhouseShowcaseCards = [
  {
    title: "Homepage",
    description:
      "Cinematic hero photography anchored by the preserved motel sign and Grow Where You Are Planted tagline.",
    image: farmhouseImages.screenshotHome,
    alt: "FarmHouse Collective homepage with historic motel sign",
  },
  {
    title: "Restaurant Directory",
    description:
      "Visual vendor discovery — each restaurant and shop gets immersive photography and editorial copy.",
    image: farmhouseImages.screenshotCollective,
    alt: "FarmHouse Collective collective page featuring Go Go Bird",
  },
  {
    title: "Events",
    description:
      "Editorial event listings with featured photography and a calendar built for community programming.",
    image: farmhouseImages.screenshotEvents,
    alt: "FarmHouse Collective events page with featured artist photography",
  },
  {
    title: "Calendar",
    description:
      "A full event calendar with category-coded programming — sports, markets, live music, and community gatherings.",
    image: farmhouseImages.screenshotCalendar,
    alt: "FarmHouse Collective events calendar interface",
  },
] as const;

export const farmhousePhilosophy = [
  {
    title: "Authenticity",
    description: "Everything reflects the physical property — the materials, the light, the courtyard, the craft.",
  },
  {
    title: "Storytelling",
    description: "Visitors experience the destination before arriving. The site extends the walk through the property.",
  },
  {
    title: "Community",
    description: "Designed to showcase local businesses instead of simply listing them — each vendor gets room to shine.",
  },
] as const;

export const farmhouseHighlights = [
  { value: "1950s", label: "Historic Property" },
  { value: "9,891", label: "Square Feet" },
  { value: "Mixed-Use", label: "Destination" },
  { value: "Award-Winning", label: "Restoration" },
  { value: "Mobile-First", label: "Experience" },
  { value: "SEO", label: "Foundation" },
] as const;

export const farmhouseFinalResult = {
  eyebrow: "Final Result",
  headline: "A Website That Feels Like the Destination",
  paragraphs: [
    "Today, FarmHouse Collective has a digital experience that reflects the same craftsmanship found throughout the physical property.",
    "Visitors discover restaurants, retail shops, and the story behind the project before ever arriving.",
    "The website doesn't simply explain the destination. It extends it.",
  ],
};

export const farmhouseParallaxBreaks = [
  {
    image: farmhouseImages.breakCourtyard,
    alt: "FarmHouse Collective outdoor courtyard with Airstream market and community gathering spaces",
  },
  {
    image: farmhouseImages.breakGoldenHour,
    alt: "FarmHouse Collective homepage hero — Grow Where You Are Planted at the restored Riverside motel courtyard",
  },
  {
    image: farmhouseImages.breakInterior,
    alt: "Farm House Collective brand lockup — FARM HOUSE COLLECTIVE wordmark",
    objectFit: "contain" as const,
  },
] as const;
