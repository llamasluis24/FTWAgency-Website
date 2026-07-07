export const aboutHero = {
  eyebrow: "About FTW",
  headline: "Built by Founders. *For Businesses That Want to Grow.*",
  paragraphs: [
    "We didn't start FTW to sell websites.",
    "We built businesses ourselves and realized that growth doesn't come from hiring more vendors—it comes from connecting marketing, software, automation, and operations into one system.",
  ],
  backgroundImage: {
    src: "/brand/logo-inverted-transparent.png",
    alt: "FTW Agency logo",
    variant: "brand" as const,
  },
};

export interface AboutIntroPrinciple {
  label: string;
  value: string;
}

export const aboutIntro = {
  eyebrow: "The Mission",
  headline: "Growth isn't a service list. *It's a system.*",
  lead: "Most businesses don't stall from lack of effort. They stall because marketing, software, and operations live in separate silos—each owned by a different vendor with a different agenda.",
  body: "FTW exists to replace that fragmentation. One partner. One architecture. One engine designed to attract, convert, automate, and scale—without the handoffs, gaps, or guesswork.",
  principles: [
    { label: "Connect", value: "Every channel and tool wired into one flow" },
    { label: "Build", value: "We ship the work—we don't broker it out" },
    { label: "Compound", value: "Each layer makes the next one stronger" },
  ],
};

export interface AboutTimelineStep {
  number: string;
  title: string;
  body: string;
  /** Optional bullet list (step 2 vendor list) */
  bullets?: string[];
}

export const aboutStory = {
  eyebrow: "Our Story",
  title: "Why FTW Exists",
  steps: [
    {
      number: "01",
      title: "Entrepreneurs First",
      body: "FTW was founded by entrepreneurs solving real business problems—not agency veterans chasing retainers. We built companies, hit operational walls, and learned what growth actually requires when you're the one signing the checks.",
    },
    {
      number: "02",
      title: "The Problem",
      body: "Every vendor solved one piece of the puzzle. Nobody connected everything.",
      bullets: ["Marketing agency", "CRM", "Software", "Automation"],
    },
    {
      number: "03",
      title: "The Realization",
      body: "Businesses don't struggle because they lack effort. They struggle because their systems are disconnected—leads fall through cracks, data lives in silos, and no single team owns the outcome.",
    },
    {
      number: "04",
      title: "Build FTW",
      body: "Instead of becoming another agency, we built one company capable of designing, building, automating, and growing businesses under one roof—one partner accountable to revenue, not activity reports.",
    },
  ] satisfies AboutTimelineStep[],
};

export interface AboutFounder {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string;
}

export const aboutFounders = {
  eyebrow: "Founders",
  title: "The People Behind the *Systems*",
  founders: [
    {
      name: "Jose Montero",
      role: "Founder",
      bio: "Creative strategist focused on branding, digital experiences, and building memorable businesses.",
      initials: "JM",
      image: "/about/founders/jose-montero.png",
    },
    {
      name: "Luis Llamas",
      role: "Co-Founder",
      bio: "Industrial Electrician turned entrepreneur. Passionate about software, systems, automation, and helping businesses scale.",
      initials: "LL",
      image: "/about/founders/luis-llamas.png",
    },
  ] satisfies AboutFounder[],
};

export const aboutBeliefs = {
  eyebrow: "What We Believe",
  statements: [
    "Growth is engineered.",
    "Marketing should generate revenue.",
    "Software should eliminate work.",
    "Automation should save time.",
    "Businesses deserve one partner.",
  ],
};

export interface AboutSystemNode {
  label: string;
  description?: string;
}

export const aboutFtwSystem = {
  eyebrow: "The FTW System",
  title: "Every Service Strengthens *Another*",
  lede: "We don't sell isolated tactics. Each layer of the stack exists because it makes the next one work harder—connected systems compound; disconnected vendors decay.",
  nodes: [
    { label: "Lead", description: "Attention captured with intent" },
    { label: "Website", description: "Trust and conversion engineered" },
    { label: "SEO", description: "Discoverability that compounds" },
    { label: "Automation", description: "Instant follow-up, zero leakage" },
    { label: "CRM", description: "Every relationship tracked" },
    { label: "Reporting", description: "Decisions backed by data" },
    { label: "Revenue", description: "The only metric that matters" },
  ] satisfies AboutSystemNode[],
};

export interface AboutProject {
  title: string;
  description: string;
  tag: string;
  href?: string;
}

export const aboutBuilding = {
  eyebrow: "What We're Building",
  title: "Builders, Not Just *Consultants*",
  lede: "Client work funds the mission—but FTW is also building products, platforms, and internal systems that prove what we preach.",
  projects: [
    {
      title: "MobileHomeCRM",
      description:
        "Field operations software for mobile home dealers and installers—estimates, job docs, and sales workflows in one platform.",
      tag: "Product",
      href: "/case-studies/mobilehomecrm-cal-star",
    },
    {
      title: "Clear Cartel Automotive Restyling",
      description:
        "Coors Light–branded BMW wrap reveal reel — high-energy automotive content built to stop the scroll and drive shop inquiries for custom wraps and detailing.",
      tag: "Social Media",
      href: "/portfolio",
    },
    {
      title: "Internal AI Agents",
      description:
        "AI-powered workflows we run inside FTW—lead qualification, content systems, and operational automation we dogfood daily.",
      tag: "AI",
      href: "/services/ai-agents",
    },
    {
      title: "Future Software Products",
      description:
        "Vertical SaaS and growth tools born from patterns we see across client engagements—built to solve problems at scale.",
      tag: "Roadmap",
    },
  ] satisfies AboutProject[],
};

export const aboutIdealClient = {
  eyebrow: "Who We Work Best With",
  title: "Built for Businesses Ready to *Commit*",
  items: [
    "Businesses tired of managing five vendors",
    "Businesses investing in long-term growth",
    "Businesses that value systems over shortcuts",
    "Businesses wanting measurable outcomes",
  ],
};

export const aboutCta = {
  headline: "Ready To Build Something Bigger Than A Website?",
  sub: "Let's build the growth system your business actually needs.",
};
