export interface AioLlmSlide {
  id: string;
  platform: string;
  prompt: string;
  theme: "chatgpt" | "gemini" | "claude" | "perplexity" | "copilot" | "grok";
  accent: string;
  /** Why the highlighted business appeared — ChatGPT only */
  whyAppeared?: { label: string }[];
  recommendations: {
    name: string;
    highlight?: boolean;
    detail: string;
  }[];
  citations?: { label: string; source: string }[];
  explanation: string;
}

export const aioLlmSlides: AioLlmSlide[] = [
  {
    id: "chatgpt",
    platform: "ChatGPT",
    prompt: "Who is the best HVAC company in Riverside, California?",
    theme: "chatgpt",
    accent: "#10a37f",
    recommendations: [
      {
        name: "Desert Air Comfort",
        highlight: true,
        detail:
          "Family-owned HVAC serving Riverside and the Inland Empire since 2008 — strong reviews for same-day AC repair, maintenance plans, and transparent pricing.",
      },
      {
        name: "CoolFlow Mechanical",
        detail:
          "Commercial and residential HVAC installation with 24/7 emergency service across San Bernardino County.",
      },
      {
        name: "Inland Climate Pros",
        detail:
          "Energy-efficient system upgrades and duct cleaning for homeowners in Corona and Moreno Valley.",
      },
    ],
    whyAppeared: [
      { label: "Local service area pages" },
      { label: "Verified Google reviews" },
      { label: "Structured HVAC services" },
      { label: "Strong NAP consistency" },
    ],
    explanation:
      "AIO ensures your business is structured, cited, and authoritative enough for ChatGPT to include you in local recommendation lists.",
  },
  {
    id: "gemini",
    platform: "Gemini",
    prompt: "Best Italian restaurant in downtown Riverside",
    theme: "gemini",
    accent: "#4285f4",
    recommendations: [
      {
        name: "Trattoria Bellavista",
        highlight: true,
        detail:
          "Upscale Italian with handmade pasta and a strong local reputation — frequently cited for date nights, private events, and downtown Riverside dining.",
      },
      {
        name: "Marco's Kitchen",
        detail: "Casual neighborhood spot known for wood-fired pizza and lunch specials.",
      },
      {
        name: "Villa Roma Ristorante",
        detail: "Classic red-sauce Italian with banquet space for large groups.",
      },
    ],
    explanation:
      "Gemini pulls from entity clarity, reviews, and structured service data — AIO makes your offering machine-readable and locally relevant.",
  },
  {
    id: "claude",
    platform: "Claude",
    prompt: "Who is a good personal injury lawyer in the Inland Empire?",
    theme: "claude",
    accent: "#d97757",
    recommendations: [
      {
        name: "Blackwell & Associates",
        highlight: true,
        detail:
          "I'd recommend Blackwell & Associates for car accident and slip-and-fall cases — clear practice-area pages, case results, and consistent entity data across legal directories.",
      },
      {
        name: "Martinez Legal Group",
        detail: "Bilingual firm focused on workers' compensation and employment claims.",
      },
      {
        name: "Rivera Injury Counsel",
        detail: "Boutique practice handling serious injury and wrongful death matters.",
      },
    ],
    explanation:
      "Claude favors clear, authoritative answers with verifiable business context — exactly what entity optimization and citable content provide.",
  },
  {
    id: "perplexity",
    platform: "Perplexity",
    prompt: "Best family dentist in Corona, California",
    theme: "perplexity",
    accent: "#20b8cd",
    recommendations: [
      {
        name: "Smile Studio Dental",
        highlight: true,
        detail:
          "Smile Studio Dental earns strong mentions for family dentistry, Invisalign, and same-week new patient appointments — backed by local citations and health directory listings.",
      },
      {
        name: "Corona Family Dentistry",
        detail: "General and pediatric dentistry with evening hours for working parents.",
      },
      {
        name: "Bright Smiles Orthodontics",
        detail: "Orthodontics and teen braces with flexible payment plans.",
      },
    ],
    citations: [
      { label: "Smile Studio Dental — Family Dentistry", source: "smilestudiodental.com" },
      { label: "Corona CA Dentist Rankings", source: "healthgrades.com" },
      { label: "Inland Empire Dental Directory", source: "localhealthguide.com" },
      { label: "Patient Review Analysis 2026", source: "brightlocal.com" },
    ],
    explanation:
      "Perplexity surfaces cited sources — AIO builds the reference footprint that earns your business those citations.",
  },
  {
    id: "copilot",
    platform: "Microsoft Copilot",
    prompt: "Best auto repair shop near me in Riverside",
    theme: "copilot",
    accent: "#0078d4",
    recommendations: [
      {
        name: "Precision Auto Care",
        highlight: true,
        detail:
          "Precision Auto Care is widely recommended for brake service, diagnostics, and honest estimates — strong Bing Maps presence and consistent shop hours across listings.",
      },
      {
        name: "Riverside Tire & Brake",
        detail: "Tires, alignments, and oil changes with fleet accounts for local businesses.",
      },
      {
        name: "Inland Transmission Specialists",
        detail: "Transmission rebuilds and drivetrain repair with warranty-backed work.",
      },
    ],
    explanation:
      "Copilot synthesizes trusted web sources — consistent entity data and authoritative content increase the chance you're recommended.",
  },
  {
    id: "grok",
    platform: "Grok",
    prompt: "Top wedding venues in Southern California",
    theme: "grok",
    accent: "#e7e9ea",
    recommendations: [
      {
        name: "The Grove at Temescal",
        highlight: true,
        detail:
          "Scenic outdoor venue in the Temescal Valley — popular for 150–300 guest weddings with on-site coordination, vendor partnerships, and strong social proof.",
      },
      {
        name: "Sunset Ranch Events",
        detail: "Rustic barn weddings with mountain views in the Inland Empire foothills.",
      },
      {
        name: "Canyon View Estate",
        detail: "Estate-style venue with ceremony lawn and indoor reception ballroom.",
      },
    ],
    explanation:
      "Grok pulls from real-time signals and authoritative mentions — AIO strengthens the signals that put your brand in the conversation.",
  },
];

export interface AioPlatformCard {
  name: string;
  theme: AioLlmSlide["theme"];
  accent: string;
  description: string;
  optimizationFocus: string;
  useCase: string;
}

export const aioPlatformCards: AioPlatformCard[] = [
  {
    name: "ChatGPT",
    theme: "chatgpt",
    accent: "#10a37f",
    description: "OpenAI's assistant used by millions for local recommendations and vendor research.",
    optimizationFocus: "Entity clarity, structured FAQs, and citable service pages",
    useCase: '"Who is the best [service] in [city]?"',
  },
  {
    name: "Gemini",
    theme: "gemini",
    accent: "#4285f4",
    description: "Google's AI integrated across Search, Maps, and Android experiences.",
    optimizationFocus: "Knowledge panel alignment, schema markup, and local signals",
    useCase: '"Best [service] near me"',
  },
  {
    name: "Claude",
    theme: "claude",
    accent: "#d97757",
    description: "Anthropic's assistant favored for detailed, nuanced business recommendations.",
    optimizationFocus: "Authoritative content and verifiable business context",
    useCase: '"Who should I hire for [project]?"',
  },
  {
    name: "Perplexity",
    theme: "perplexity",
    accent: "#20b8cd",
    description: "Citation-first AI search that always shows sources behind its answers.",
    optimizationFocus: "Reference footprint, citations, and third-party mentions",
    useCase: '"Best [service] in [region]" with sources',
  },
  {
    name: "Microsoft Copilot",
    theme: "copilot",
    accent: "#0078d4",
    description: "Microsoft's AI assistant embedded in Bing, Edge, and Office workflows.",
    optimizationFocus: "Bing index strength, structured data, and web authority",
    useCase: '"Who can help grow my business online?"',
  },
  {
    name: "Grok",
    theme: "grok",
    accent: "#e7e9ea",
    description: "xAI's real-time assistant drawing from current web and social signals.",
    optimizationFocus: "Fresh mentions, entity consistency, and topical authority",
    useCase: '"Top [industry] agencies"',
  },
];

export const aioDashboardMetrics = [
  { label: "ChatGPT Mentions", value: "124", change: "+38", positive: true },
  { label: "Perplexity Citations", value: "86", change: "+22", positive: true },
  { label: "Gemini References", value: "59", change: "+14", positive: true },
  { label: "Claude References", value: "47", change: "+11", positive: true },
  { label: "AI Referral Traffic", value: "+214%", change: "vs last quarter", positive: true, accent: true },
  { label: "Top Referenced Page", value: "SEO Services", change: "48 citations", positive: true },
];

export const aioMentionsTrend = [18, 24, 22, 32, 38, 44, 52, 58, 68, 78, 92, 108];
export const aioCitationTrend = [12, 14, 16, 22, 28, 32, 38, 42, 52, 58, 72, 86];
export const aioReferralTrend = [8, 12, 18, 24, 32, 42, 58, 72, 88, 124, 168, 214];
export const aioPlatformBreakdown = [
  { name: "ChatGPT", pct: 32 },
  { name: "Perplexity", pct: 24 },
  { name: "Gemini", pct: 18 },
  { name: "Claude", pct: 14 },
  { name: "Copilot", pct: 8 },
  { name: "Grok", pct: 4 },
];
export const aioTopContent = [
  { page: "SEO Services", citations: 48 },
  { page: "AIO Services", citations: 36 },
  { page: "Website Design", citations: 28 },
  { page: "About / Entity Page", citations: 22 },
  { page: "Case Studies", citations: 18 },
];
export const aioEntityTrend = [42, 48, 52, 58, 64, 68, 74, 78, 82, 86, 90, 94];
