import type { Faq, Stat, Testimonial } from "@/lib/schemas";

export const siteConfig = {
  name: "FTW Agency",
  tagline: "Helping Businesses Generate More Leads, Automate Operations, and Scale.",
  description:
    "Custom Websites, SEO, AIO, Advertising, Automation, Mobile Apps, and Software Solutions Designed to Accelerate Growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ftwagency.ai",
  email: "hello@ftwagency.com",
  address: {
    street: "1501 Research Park Dr",
    city: "Riverside",
    state: "CA",
    zip: "92507",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ftw-agency",
    instagram: "https://www.instagram.com/ftwagency",
    youtube: "https://www.youtube.com/@ftwagency",
    tiktok: "https://www.tiktok.com/@ftwagency",
  },
  cta: {
    primary: { label: "Schedule Strategy Call", href: "/contact" },
    secondary: { label: "View Portfolio", href: "/portfolio" },
  },
};

export const frameworkStages = [
  {
    key: "attract",
    title: "Attract",
    description:
      "Be found everywhere customers look. SEO, AIO, advertising, social, and reputation systems put your business in front of buyers at the moment of intent.",
    services: ["seo", "aio", "paid-ads-management", "google-business-profile", "viral-social-media"],
  },
  {
    key: "convert",
    title: "Convert",
    description:
      "Turn attention into action. Conversion-engineered websites and trust systems transform visitors into booked appointments and qualified leads.",
    services: ["website-design-development", "review-reputation-growth"],
  },
  {
    key: "automate",
    title: "Automate",
    description:
      "Never lose another lead to slow follow-up. Automation responds instantly, nurtures relentlessly, and runs operations while you run the business.",
    services: ["business-automation", "ai-agents"],
  },
  {
    key: "scale",
    title: "Scale",
    description:
      "Build the systems growth requires. Custom software and mobile apps turn your operations into a competitive advantage that compounds.",
    services: ["custom-software", "mobile-app-development"],
  },
] as const;

export const whyFtw = {
  headline: "Not a Marketing Agency. A *Growth Systems* Company.",
  sub: "Marketing agencies sell activity. We build systems — marketing, automation, and software engineered to work together and compound.",
  differentiators: [
    {
      icon: "Network",
      title: "Systems, not silos",
      description:
        "Your website, SEO, ads, automation, and software are designed as one connected engine — not disconnected vendors' deliverables.",
    },
    {
      icon: "BarChart3",
      title: "Accountable to revenue",
      description:
        "We report on leads, bookings, and revenue — not impressions, activity, or vanity dashboards.",
    },
    {
      icon: "Code2",
      title: "Engineering depth",
      description:
        "A real software team behind the marketing — custom platforms, apps, and automation most agencies can't build.",
    },
    {
      icon: "Handshake",
      title: "A partner, not a vendor",
      description:
        "We win when you grow. Engagements are structured around your goals, your stage, and your economics.",
    },
  ],
  stats: [
    { value: 50, prefix: "", suffix: "+", label: "projects" },
    { value: 90, suffix: "%", label: "client retention rate" },
    { value: 1, prefix: "$", suffix: "M+", label: "client revenue attributed" },
    { value: 10, label: "industries served" },
  ] as Stat[],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our old site looked like every other builder template. Homeowners couldn't tell what we actually did. The new site makes our services obvious, the estimate form is front and center, and we're finally getting calls from the right customers.",
    author: "All Around Mobile Home Service",
    role: "Home Services · Website",
    company: "All Around Mobile Home Service",
    industry: "home-services",
  },
  {
    quote:
      "The website captures the feeling of being here. Visitors discover our restaurants, shops, and story before they ever walk through the courtyard, and that matters for a place built on craftsmanship and community.",
    author: "Farm House Collective",
    role: "Restaurants & Hospitality · Website",
    company: "Farm House Collective",
    industry: "restaurants-hospitality",
  },
  {
    quote:
      "We needed a product site that explained a complex AI workflow in seconds, and a platform experience that felt as polished as the themes it generates. FTW delivered both.",
    author: "WPConvert",
    role: "Technology · Software Platform",
    company: "WPConvert",
    industry: "technology",
  },
  {
    quote:
      "FTW didn't just redesign our website. They built a system that helps commercial customers find us, trust us, and request service with confidence.",
    author: "Vertex Services",
    role: "Home Services · Website",
    company: "Vertex Services",
    industry: "home-services",
  },
  {
    quote:
      "A city has more to offer than people can find through random searches. Visit Riverside was built to make local discovery easier, faster, and more intentional.",
    author: "Visit Riverside",
    role: "Tourism · Website Platform",
    company: "Visit Riverside",
    industry: "professional-services",
  },
  {
    quote:
      "Before this system, every estimate felt different depending on who created it. Now every proposal is standardized, customers approve digitally, and our team spends more time selling instead of chasing paperwork.",
    author: "Cal Star Mobile Home Construction",
    role: "Home Services · Custom Software",
    company: "Cal Star Mobile Home Construction",
    industry: "home-services",
  },
  {
    quote:
      "Generic contractor software never matched how mobile home dealers actually sell. We built MobileHomeCRM around the full estimate-to-close workflow.",
    author: "MobileHomeCRM",
    role: "Home Services · Software Platform",
    company: "MobileHomeCRM",
    industry: "home-services",
  },
  {
    quote:
      "We needed a product site that explained proximity networking in seconds, and a platform experience as polished as the app itself.",
    author: "Blue Social",
    role: "Technology · Social Platform",
    company: "Blue Social",
    industry: "technology",
  },
  {
    quote:
      "We needed a landing page that explained paper trading on Solana in seconds, with a brand that feels native to crypto traders.",
    author: "GhostTrade",
    role: "Technology · Trading Software",
    company: "GhostTrade",
    industry: "technology",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "What makes FTW Agency different from a traditional marketing agency?",
    answer:
      "Traditional agencies sell channels — ads, SEO, or social — in isolation. FTW builds growth systems: marketing, automation, mobile apps, and custom software engineered to work together. Your website feeds your automation, your reviews feed your rankings, and everything is accountable to leads and revenue, not activity reports.",
  },
  {
    question: "What types of businesses does FTW Agency work with?",
    answer:
      "We serve SMBs and growing companies across home services, construction, healthcare, restaurants, professional services, transportation, retail, manufacturing, and technology. The growth system adapts to any business that needs more leads, better operations, and room to scale.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "It depends on the system. Automation and advertising typically produce measurable results within the first 30 days; SEO and reputation systems compound over 3–6 months. In your strategy call we'll map a timeline specific to your goals and market.",
  },
  {
    question: "Do I need all of FTW's services to get results?",
    answer:
      "No. Most clients start with the one or two systems that address their biggest growth constraint, then expand as results compound. We'll recommend the right starting point — even if it's smaller than what you came in asking for.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Engagements are scoped to your goals and stage: project-based for builds like websites, apps, and software; monthly partnerships for ongoing systems like SEO, advertising, and automation. Every engagement starts with a strategy call and a clear, fixed proposal.",
  },
  {
    question: "What is a 'growth system'?",
    answer:
      "A growth system is the connected set of assets that generate revenue predictably: visibility channels that attract customers, web experiences that convert them, automation that responds and follows up instantly, and software that scales operations. We design, build, and run those systems.",
  },
];

export const tickerEvents = [
  { icon: "UserPlus", text: "New lead captured", time: "just now" },
  { icon: "Star", text: "Five-star review received", time: "2m ago" },
  { icon: "CalendarCheck", text: "Appointment booked", time: "4m ago" },
  { icon: "MessageSquare", text: "Missed call recovered by text", time: "7m ago" },
  { icon: "TrendingUp", text: "Keyword moved to position #1", time: "12m ago" },
  { icon: "DollarSign", text: "Proposal accepted", time: "18m ago" },
];
