import type { Service } from "@/lib/schemas";

export const paidAdsManagement: Service = {
  slug: "paid-ads-management",
  title: "Paid Ads Management",
  shortTitle: "Paid Ads",
  category: "attract",
  icon: "Megaphone",
  excerpt:
    "Profit-focused paid advertising across Google, Meta, and more — campaigns built to turn ad spend into a predictable stream of qualified leads.",
  heroHeadline: "Turn Ad Spend Into a *Predictable* Lead Machine.",
  heroSub:
    "We manage paid ads like an investment portfolio — Google, Meta, YouTube, and beyond. Every dollar tracked, every campaign accountable to cost-per-lead and return, not clicks.",
  problem: {
    title: "Most ad accounts quietly burn money",
    intro:
      "Wasted spend on the wrong audiences, leads that never get tracked, and agencies that report clicks instead of customers — across every platform.",
    painPoints: [
      {
        title: "Paying for the wrong clicks",
        description:
          "Broad targeting and lazy keyword or audience strategy drain budgets on traffic that never converts.",
      },
      {
        title: "Leads aren't tracked to revenue",
        description:
          "Without call tracking and CRM integration, nobody knows which campaigns or platforms actually produce customers.",
      },
      {
        title: "Landing pages that leak",
        description:
          "Great ads pointed at weak pages waste the spend that earned the click — on Google, Meta, or anywhere else.",
      },
      {
        title: "Set-and-forget management",
        description:
          "Accounts left on autopilot fall behind auction dynamics, creative fatigue, and competitor moves within weeks.",
      },
    ],
  },
  solution: {
    title: "Full-funnel paid media built for ROI",
    description:
      "Multi-platform campaign strategy, conversion-engineered landing pages, and revenue tracking managed as one accountable system.",
    points: [
      "Platform strategy aligned to where your buyers actually convert",
      "Google, Meta, TikTok, YouTube, LinkedIn, and retargeting managed under one roof",
      "Dedicated landing pages engineered to convert paid traffic from any source",
      "Call tracking and CRM integration tying spend to actual customers",
      "Weekly optimization cycles: bids, budgets, audiences, creative, and negatives",
      "Transparent reporting on cost-per-lead and return on ad spend by channel",
    ],
  },
  benefits: [
    {
      icon: "Zap",
      title: "Leads this week",
      description:
        "Paid media produces pipeline immediately while longer-term channels compound.",
    },
    {
      icon: "Crosshair",
      title: "Precision targeting",
      description:
        "Reach customers on search and social at the exact moment they're ready to buy.",
    },
    {
      icon: "DollarSign",
      title: "Accountable spend",
      description:
        "Every dollar tracked from click to customer — scale what works, cut what doesn't.",
    },
    {
      icon: "SlidersHorizontal",
      title: "Total control",
      description:
        "Budgets, geographies, platforms, and offers can shift in hours as your business needs change.",
    },
  ],
  process: [
    {
      title: "Account & Market Audit",
      description:
        "We analyze past performance across platforms, competitor activity, and untapped opportunities.",
    },
    {
      title: "Channel & Campaign Architecture",
      description:
        "Structured campaigns aligned to services, locations, buyer intent, and the platforms that fit each offer.",
    },
    {
      title: "Landing Page Build",
      description:
        "Conversion-engineered pages purpose-built for each campaign's promise and traffic source.",
    },
    {
      title: "Tracking Infrastructure",
      description:
        "Call tracking, pixel setup, form attribution, and CRM integration before spend scales.",
    },
    {
      title: "Optimize & Scale",
      description:
        "Continuous testing and budget reallocation toward the highest-return campaigns and channels.",
    },
  ],
  subservices: [
    {
      title: "Google Search & Local",
      description:
        "High-intent search campaigns and Local Services Ads for customers actively looking for what you sell.",
    },
    {
      title: "Google Performance Max",
      description:
        "Full Google network reach — Search, Display, YouTube, and Discover — optimized for conversions.",
    },
    {
      title: "Meta Ads",
      description:
        "Facebook and Instagram campaigns for demand generation, retargeting, and local awareness.",
    },
    {
      title: "TikTok Ads",
      description:
        "Short-form video campaigns that reach younger demographics and build brand awareness at scale.",
    },
    {
      title: "YouTube & Video",
      description:
        "Pre-roll, in-stream, and short-form video ads that build trust before the click.",
    },
    {
      title: "LinkedIn Ads",
      description:
        "B2B targeting by job title, industry, and company size for professional services and SaaS.",
    },
    {
      title: "Retargeting & Remarketing",
      description:
        "Cross-platform sequences that re-engage site visitors and past leads who didn't convert.",
    },
    {
      title: "Landing Pages & Creative",
      description:
        "Conversion-engineered pages and ad creative tested against each platform's best practices.",
    },
    {
      title: "Tracking & Attribution",
      description:
        "Call tracking, conversion pixels, and CRM integration so every channel reports to revenue.",
    },
  ],
  faqs: [
    {
      question: "Which ad platforms do you manage?",
      answer:
        "Google Ads (Search, Local Services, Performance Max, Display, and YouTube), Meta (Facebook and Instagram), TikTok, LinkedIn, and cross-platform retargeting. We recommend the mix based on your market, offer, and where your buyers convert — not every business needs every platform.",
    },
    {
      question: "What budget do I need to get started?",
      answer:
        "It depends on your market and goals, but most clients see strong results starting between $1,500–$5,000/month in total ad spend. We'll recommend a budget based on real auction and audience data — and never push spend that can't produce return.",
    },
    {
      question: "How fast will I see leads?",
      answer:
        "Campaigns typically start producing leads within the first 1–2 weeks. Expect 60–90 days of optimization data to reach stable, scalable cost-per-lead targets across your active channels.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "No. We earn retention with results. You own your ad accounts, your data, and your landing pages — always.",
    },
    {
      question: "How do you report performance?",
      answer:
        "A live dashboard plus monthly strategy reviews focused on cost-per-lead, booked appointments, and revenue attributed by platform — not impressions and click-through rates.",
    },
  ],
  relatedServices: ["website-design-development", "seo", "viral-social-media"],
  featured: false,
  meta: {
    title: "Paid Ads Management | FTW Agency",
    description:
      "ROI-focused paid ads management across Google, Meta, YouTube, and LinkedIn — conversion landing pages, call tracking, and revenue attribution. Turn ad spend into predictable leads.",
  },
};
