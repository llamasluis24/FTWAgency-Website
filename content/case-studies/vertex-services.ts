import type { CaseStudy } from "@/lib/schemas";

export const VERTEX_NAME = "Vertex Services";

const CAT = "/showcases/websites/vertex-services";
const IMG = "/showcases/websites/vertex-services.jpg";

export const vertexImages = {
  hero: IMG,
  website: IMG,
  logo: `${CAT}/logo.png`,
  heroLogo: `${CAT}/logo-hero.png`,
  salesFunnel: `${CAT}/vertex-sales-funnel.png`,
  gbpPhotos: [
    {
      src: `${CAT}/gbp-beverage-syrup-rack.png`,
      alt: "Commercial soda fountain syrup rack and beverage line setup",
    },
    {
      src: `${CAT}/gbp-beverage-station.png`,
      alt: "Convenience store beverage station with soda fountain and ICEE machines",
    },
    {
      src: `${CAT}/gbp-equipment-filter.png`,
      alt: "Commercial kitchen hood filter before and after cleaning",
    },
  ],
} as const;

export const vertexServices: CaseStudy = {
  slug: "vertex-services",
  title: "Building a Commercial Lead Generation System for Vertex Services",
  client: VERTEX_NAME,
  industry: "home-services",
  services: ["website-design-development", "seo", "google-business-profile"],
  summary:
    "Vertex Services specializes in preventative maintenance and repair for commercial ice machines, beverage equipment, and foodservice systems. We helped transform their online presence into a professional customer acquisition platform built around trust, search visibility, and commercial buyers.",
  challenge: [
    "Vertex Services had years of commercial experience maintaining ice machines, beverage equipment, and restaurant systems — but the challenge wasn't technical ability.",
    "Commercial buyers expect credibility before making contact. The business needed a stronger digital presence that reflected the quality of its work while creating a clear path from search to service request.",
    "Communicating professionalism online meant more than a brochure site. It required service architecture, trust signals, local search visibility, and multiple conversion paths.",
  ],
  strategy: [
    "Design around commercial decision makers — restaurant owners, facility managers, and regional maintenance coordinators — each with different urgency and buying priorities.",
    "Build a connected acquisition system: Google Search, Google Business Profile, service pages, quote requests, and phone calls working as one journey.",
    "Structure SEO around how customers actually search for ice machine repair, preventative maintenance, and emergency foodservice equipment service.",
  ],
  execution: [
    "Launched a commercial website with service-specific pages, professional photography, and clear calls-to-action for quote requests and phone contact.",
    "Optimized Google Business Profile with services, photos, reviews, and service area coverage aligned to local search intent.",
    "Built an SEO-ready site architecture connecting homepage, commercial services, equipment categories, emergency service, and service areas.",
  ],
  results: [
    { value: 8, suffix: "-Part", label: "Lead generation ecosystem" },
    { value: 1, label: "Unified customer acquisition system" },
    { value: 7, suffix: "+", label: "Commercial service page architecture" },
  ],
  screenshots: [
    { title: "Commercial Website", kind: "website" },
    { title: "Google Business Profile", kind: "dashboard" },
    { title: "Service Page Architecture", kind: "website" },
  ],
  beforeAfter: {
    before: {
      title: "Online Brochure",
      caption: "Minimal presence, few service pages, limited credibility and conversion paths",
    },
    after: {
      title: "Acquisition System",
      caption: "Commercial positioning, SEO architecture, GBP optimization, and lead generation foundation",
    },
  },
  testimonial: {
    quote:
      "FTW didn't just redesign our website — they built a system that helps commercial customers find us, trust us, and request service with confidence.",
    author: "Vertex Services Team",
    role: "Commercial Equipment Services",
    company: VERTEX_NAME,
    industry: "home-services",
  },
  featured: true,
};

export const vertexHero = {
  eyebrow: "Case Study • Vertex Services",
  headline: "Building a Commercial Lead Generation System for Vertex Services",
  subheadline:
    "Vertex Services specializes in preventative maintenance and repair for commercial ice machines, beverage equipment, and foodservice systems. We helped transform their online presence into a professional customer acquisition platform built around trust, search visibility, and commercial buyers.",
  tags: [
    "Website Design",
    "SEO",
    "Google Business Profile",
    "Commercial Photography",
    "Lead Generation",
    "Conversion Optimization",
  ] as const,
} as const;

export const vertexEcosystemSteps = [
  { id: "search", label: "Google Search", description: "Commercial buyers search when equipment fails" },
  { id: "gbp", label: "Google Business Profile", description: "Local trust, reviews, and quick contact" },
  { id: "website", label: "Vertex Website", description: "Professional commercial positioning" },
  { id: "services", label: "Commercial Service Pages", description: "Equipment-specific expertise" },
  { id: "quote", label: "Quote Request", description: "Structured lead capture" },
  { id: "phone", label: "Phone Call", description: "Direct connection to dispatch" },
  { id: "scheduled", label: "Service Scheduled", description: "Technician dispatched" },
  { id: "return", label: "Returning Customer", description: "Preventative maintenance retention" },
] as const;

export const vertexChallenge = {
  eyebrow: "The Challenge",
  headline: "Commercial Customers Buy Confidence",
  paragraphs: [
    "Vertex Services had years of commercial experience maintaining ice machines, beverage equipment, and restaurant systems.",
    "The challenge wasn't technical ability. The challenge was communicating professionalism online.",
    "Commercial buyers expect credibility before making contact. The business needed a stronger digital presence that reflected the quality of its work while creating a clear path from search to service request.",
  ],
  beforeItems: [
    "Old website",
    "No service pages",
    "Minimal search presence",
    "Weak trust signals",
    "Limited conversion paths",
  ],
  afterItems: [
    "Professional website",
    "Google Business",
    "Commercial photography",
    "Service pages",
    "Quote forms",
    "Clear calls-to-action",
  ],
} as const;

export const vertexBuyerPersonas = [
  {
    id: "restaurant",
    title: "Restaurant Owner",
    concern: "Equipment downtime during service hours",
    urgency: "Same-day response expected",
    priorities: "Reliability, speed, and technician expertise",
    solution: "Emergency service pages, phone-first CTAs, and trust signals from commercial photography",
  },
  {
    id: "cstore",
    title: "Convenience Store Manager",
    concern: "Ice and beverage systems affecting sales",
    urgency: "High — revenue stops when machines fail",
    priorities: "Fast dispatch, clear pricing path, preventative options",
    solution: "Ice machine and beverage equipment pages with quote requests and service area clarity",
  },
  {
    id: "gas",
    title: "Gas Station Operator",
    concern: "Frozen beverage and soda equipment reliability",
    urgency: "Moderate to high depending on season",
    priorities: "Preventative maintenance, multi-location support",
    solution: "Preventative maintenance positioning and scalable service architecture",
  },
  {
    id: "facility",
    title: "Facility Manager",
    concern: "Vendor accountability across properties",
    urgency: "Planned maintenance with emergency backup",
    priorities: "Documentation, professionalism, consistent service",
    solution: "About page credibility, service listings, and structured contact paths",
  },
  {
    id: "regional",
    title: "Regional Maintenance Coordinator",
    concern: "Coordinating repairs across multiple sites",
    urgency: "Batch planning with emergency escalation",
    priorities: "Clear service scope, easy quote workflow, responsive communication",
    solution: "Commercial services hub and conversion-optimized quote forms",
  },
] as const;

export const vertexSalesJourney = [
  { id: "fail", label: "Restaurant equipment fails" },
  { id: "search", label: "Searches Google" },
  { id: "find", label: "Finds Vertex" },
  { id: "page", label: "Views service page" },
  { id: "trust", label: "Sees trust signals" },
  { id: "call", label: "Calls company" },
  { id: "dispatch", label: "Technician dispatched" },
  { id: "repair", label: "Equipment repaired" },
  { id: "maintain", label: "Preventative maintenance scheduled" },
] as const;

export const vertexSitemap = [
  {
    id: "home",
    label: "Homepage",
    preview: "Commercial positioning and primary conversion paths",
    path: "/",
    image: `${CAT}/home.png`,
    imageAlt: "Vertex Services homepage hero with preventative maintenance headline and CTAs",
  },
  {
    id: "commercial",
    label: "Commercial Services",
    preview: "Hub for all commercial equipment services",
    path: "/services",
    image: `${CAT}/commercial-services.png`,
    imageAlt: "Vertex Services commercial equipment services hub page",
  },
  {
    id: "ice",
    label: "Ice Machine Repair",
    preview: "High-intent service page for ice equipment",
    path: "/ice-machine-services",
    image: `${CAT}/ice-machine-services.png`,
    imageAlt: "Vertex Services commercial ice machine repair and maintenance page",
  },
  {
    id: "preventative",
    label: "Preventative Maintenance",
    preview: "Recurring revenue and retention pathway",
    path: "/preventative-maintenance-programs",
    image: `${CAT}/preventative-maintenance-programs.png`,
    imageAlt: "Vertex Services preventative maintenance programs page",
  },
  {
    id: "frozen",
    label: "Frozen Beverage Equipment",
    preview: "Slushie and frozen drink system repair",
    path: "/frozen-beverage-machine-services",
    image: `${CAT}/frozen-beverage-machine-services.png`,
    imageAlt: "Vertex Services frozen beverage machine repair page",
  },
  {
    id: "soda",
    label: "Soda Equipment",
    preview: "Fountain and soda system service",
    path: "/beverage-equipment-services",
    image: `${CAT}/beverage-equipment-services.png`,
    imageAlt: "Vertex Services commercial beverage and soda fountain equipment page",
  },
  {
    id: "restaurant",
    label: "Restaurant Equipment",
    preview: "Broader foodservice equipment support",
    path: "/",
    image: `${CAT}/restaurant-equipment.png`,
    imageAlt: "Vertex Services industries section highlighting restaurant foodservice equipment support",
    imageFit: "contain" as const,
    imageAspect: 1024 / 527,
  },
  {
    id: "emergency",
    label: "Emergency Service",
    preview: "Urgent repair conversion page",
    path: "/emergency-equipment-repair",
    image: `${CAT}/emergency-equipment-repair.png`,
    imageAlt: "Vertex Services emergency commercial equipment repair dispatch page",
  },
  {
    id: "areas",
    label: "Service Areas",
    preview: "Local SEO and geographic coverage",
    path: "/service-areas",
    image: `${CAT}/service-areas.png`,
    imageAlt: "Vertex Services Southern California service areas coverage page",
  },
] as const;

export const vertexFeatures = [
  {
    title: "Commercial Website",
    description: "Professional site built for commercial buyers evaluating service partners.",
    icon: "globe" as const,
  },
  {
    title: "SEO Foundation",
    description: "Architecture aligned to how customers search for equipment repair and maintenance.",
    icon: "search" as const,
  },
  {
    title: "Google Business Optimization",
    description: "Profile tuned for local discovery, reviews, services, and direct contact.",
    icon: "map" as const,
  },
  {
    title: "Conversion Strategy",
    description: "Quote forms, phone CTAs, and service-specific conversion paths.",
    icon: "target" as const,
  },
  {
    title: "Commercial Photography",
    description: "On-site imagery that communicates professionalism and technical capability.",
    icon: "camera" as const,
  },
  {
    title: "Service Architecture",
    description: "Dedicated pages for ice, beverage, restaurant, and emergency service intent.",
    icon: "layers" as const,
  },
  {
    title: "Responsive Design",
    description: "Mobile-ready experience for managers searching from the field.",
    icon: "smartphone" as const,
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading pages that support search visibility and user trust.",
    icon: "zap" as const,
  },
] as const;

export const vertexSalesFunnel = {
  eyebrow: "Customer Journey",
  headline: "From Discovery to Retention",
  body: "Seven stages — from first Google search to repeat preventative maintenance — mapped to how Vertex converts commercial buyers.",
  logo: vertexImages.logo,
  logoAlt: "Vertex Services logo",
  image: vertexImages.salesFunnel,
  imageAlt:
    "Vertex Services sales funnel showing discover, find and trust, explore, interest, convert, serve, and retain stages",
  stages: [
    {
      id: "discover",
      label: "Discover",
      description: "Customers search for commercial equipment service",
      icon: "search" as const,
    },
    {
      id: "find-trust",
      label: "Find & Trust",
      description: "They find Vertex on Google and see trust signals",
      icon: "mapPin" as const,
    },
    {
      id: "explore",
      label: "Explore",
      description: "They visit the website and explore services",
      icon: "globe" as const,
    },
    {
      id: "interest",
      label: "Interest",
      description: "They view service pages and find the solution",
      icon: "clipboardList" as const,
    },
    {
      id: "convert",
      label: "Convert",
      description: "They contact Vertex via call or form",
      icon: "phone" as const,
    },
    {
      id: "serve",
      label: "Serve",
      description: "The job is scheduled and service is delivered",
      icon: "wrench" as const,
    },
    {
      id: "retain",
      label: "Retain",
      description: "They become a repeat customer with ongoing maintenance",
      icon: "refreshCw" as const,
    },
  ],
} as const;

export const vertexBeforeItems = [
  "Minimal online presence",
  "Few service pages",
  "Weak differentiation",
  "Limited credibility",
  "Passive website",
] as const;

export const vertexAfterItems = [
  "Commercial positioning",
  "SEO-ready architecture",
  "Professional branding",
  "Google Business optimization",
  "Multiple conversion paths",
  "Lead generation foundation",
] as const;

export const vertexGrowthPillars = [
  "New service pages",
  "New locations",
  "Future SEO expansion",
  "Commercial photography",
  "Content marketing",
  "Review generation",
  "Google Business optimization",
] as const;

export const vertexHighlights = [
  { value: "Commercial", label: "Website" },
  { value: "Google", label: "Business Profile" },
  { value: "SEO", label: "Foundation" },
  { value: "On-Site", label: "Photography" },
  { value: "Quote", label: "Conversion Paths" },
  { value: "Local", label: "Search Strategy" },
  { value: "Mobile", label: "Responsive UX" },
  { value: "Scalable", label: "Architecture" },
] as const;

export const vertexFinal = {
  eyebrow: "Final Message",
  headline: "Building More Than a Website",
  paragraphs: [
    "For Vertex Services, success wasn't about launching another website.",
    "It was about creating a digital system that reflects the professionalism of the business, builds trust with commercial customers, supports long-term search visibility, and creates a better path from first search to scheduled service.",
  ],
} as const;

export const vertexWebsitePages = [
  { id: "home", label: "Homepage", headline: "Commercial Equipment Service You Can Trust" },
  { id: "commercial", label: "Commercial Services", headline: "Full-Service Commercial Equipment Support" },
  { id: "ice", label: "Ice Machine Repair", headline: "Ice Machine Repair & Maintenance" },
  { id: "preventative", label: "Preventative Maintenance", headline: "Prevent Costly Breakdowns" },
  { id: "contact", label: "Contact", headline: "Request Service or a Quote" },
  { id: "about", label: "About", headline: "Experienced Commercial Service Team" },
] as const;
