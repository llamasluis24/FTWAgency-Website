export type ReputationVisualType = "comparison" | "request-flow" | "router" | "pulse";

export interface ReputationFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface BusinessProfile {
  name: string;
  rating: number;
  reviewCount: number;
  distribution: [number, number, number, number, number]; // [1★, 2★, 3★, 4★, 5★]
}

export interface SmsMessage {
  from: "business" | "customer" | "system";
  text: string;
  time?: string;
}

export interface LiveReview {
  author: string;
  rating: number;
  text: string;
  daysAgo: string;
  response?: string;
}

export interface MonthlyPulse {
  month: string;
  reviews: number;
  avgRating: number;
}

export interface ReputationShowcaseRow {
  id: string;
  stepNumber: 1 | 2 | 3 | 4;
  eyebrow: string;
  headline: string;
  body: string;
  visualType: ReputationVisualType;
  imagePosition: "left" | "right";
  cards: ReputationFeatureCard[];
  beforeProfile?: BusinessProfile;
  afterProfile?: BusinessProfile;
  competitorProfile?: BusinessProfile;
  smsMessages?: SmsMessage[];
  liveReviews?: LiveReview[];
  monthlyPulse?: MonthlyPulse[];
}

export const reputationShowcaseIntro = {
  eyebrow: "Reputation in Action",
  headline: "See How Trust Gets Built — and Protected — in Real Time",
  subheadline:
    "Reviews aren't luck. FTW Agency builds systems that capture satisfaction at the perfect moment, route feedback intelligently, and turn your reputation into a compounding sales asset.",
};

export const reputationShowcaseRows: ReputationShowcaseRow[] = [
  {
    id: "comparison",
    stepNumber: 1,
    eyebrow: "The Trust Gap",
    headline: "Customers Compare You Side by Side Before They Call",
    body: "When a homeowner searches for your service, they don't read your website first — they compare star ratings and review counts. Volume and recency decide who gets the call.",
    visualType: "comparison",
    imagePosition: "right",
    cards: [
      {
        title: "Rating Benchmarking",
        description:
          "We audit your profile against the top 5 competitors customers actually compare you to.",
        icon: "Eye",
      },
      {
        title: "Velocity Tracking",
        description:
          "Fresh reviews matter more than old ones — we measure how fast your profile is growing.",
        icon: "TrendingUp",
      },
      {
        title: "Response Quality",
        description:
          "Unanswered reviews signal neglect. Every response is crafted to show you care.",
        icon: "MessageSquare",
      },
      {
        title: "Platform Coverage",
        description:
          "Google first, plus Yelp, Facebook, and industry directories that matter in your market.",
        icon: "Globe",
      },
    ],
    beforeProfile: {
      name: "Your Business Today",
      rating: 3.8,
      reviewCount: 47,
      distribution: [4, 3, 8, 14, 18],
    },
    afterProfile: {
      name: "With FTW System",
      rating: 4.9,
      reviewCount: 412,
      distribution: [1, 2, 8, 45, 356],
    },
    competitorProfile: {
      name: "Top Competitor",
      rating: 4.6,
      reviewCount: 318,
      distribution: [3, 4, 18, 62, 231],
    },
  },
  {
    id: "request-flow",
    stepNumber: 2,
    eyebrow: "Perfect Timing",
    headline: "The Request Lands When Satisfaction Peaks",
    body: "Manual asking doesn't scale. Our automation triggers at the moment customers are most likely to share — right after a completed job, a positive interaction, or a milestone in your CRM.",
    visualType: "request-flow",
    imagePosition: "left",
    cards: [
      {
        title: "CRM Integration",
        description:
          "Job marked complete in ServiceTitan, Jobber, or your system → request fires automatically.",
        icon: "Workflow",
      },
      {
        title: "Smart Delays",
        description:
          "2-hour buffer lets the experience settle — timing tuned per industry for max conversion.",
        icon: "Clock",
      },
      {
        title: "Multi-Channel",
        description:
          "Text first (94% open rate), email as backup — one tap to leave a review.",
        icon: "Smartphone",
      },
      {
        title: "Follow-Up Sequences",
        description:
          "Gentle reminders for non-responders without ever feeling pushy or spammy.",
        icon: "BellRing",
      },
    ],
    smsMessages: [
      { from: "system", text: "Job #4821 marked complete · Summit HVAC", time: "2:14 PM" },
      { from: "system", text: "Review request scheduled · 2hr delay", time: "2:14 PM" },
      {
        from: "business",
        text: "Hi Sarah! Thanks for choosing Summit HVAC. Mind sharing a quick review? It takes 30 seconds → g.page/summit-hvac/review",
        time: "4:16 PM",
      },
      { from: "customer", text: "Done! You guys were great 👍", time: "4:22 PM" },
      { from: "system", text: "★★★★★ review posted to Google", time: "4:23 PM" },
    ],
  },
  {
    id: "router",
    stepNumber: 3,
    eyebrow: "Smart Routing",
    headline: "Happy Customers Go Public. Unhappy Ones Come to You First.",
    body: "Not every experience deserves a public review. Our sentiment router catches dissatisfied customers privately — giving you a chance to fix the issue before it becomes a one-star story.",
    visualType: "router",
    imagePosition: "right",
    cards: [
      {
        title: "Sentiment Detection",
        description:
          "Pre-review survey asks one question: how was your experience? Routing happens instantly.",
        icon: "Heart",
      },
      {
        title: "Private Feedback Loop",
        description:
          "1–3 star intent routes to a private form that alerts your team in real time.",
        icon: "ShieldCheck",
      },
      {
        title: "Public Review Gate",
        description:
          "4–5 star intent gets the direct Google link — only promoters become public proof.",
        icon: "Star",
      },
      {
        title: "Recovery Workflows",
        description:
          "Negative feedback triggers follow-up tasks so issues get resolved, not ignored.",
        icon: "Repeat",
      },
    ],
  },
  {
    id: "pulse",
    stepNumber: 4,
    eyebrow: "Compounding Trust",
    headline: "Every Review Makes the Next Customer Decision Easier",
    body: "Reputation is an asset that compounds. As your rating climbs and review volume grows, every ad, map listing, and sales conversation converts better — without spending another dollar.",
    visualType: "pulse",
    imagePosition: "left",
    cards: [
      {
        title: "Review Velocity",
        description:
          "3–10x your previous review pace within 60 days — fresh proof every week.",
        icon: "TrendingUp",
      },
      {
        title: "Response Management",
        description:
          "Every new review answered on-brand within 24 hours — showing customers you listen.",
        icon: "MessageSquare",
      },
      {
        title: "Social Proof Syndication",
        description:
          "Best reviews embedded on your website, ads, and proposals automatically.",
        icon: "Megaphone",
      },
      {
        title: "Ongoing Optimization",
        description:
          "Request timing, messaging, and channels tuned monthly based on conversion data.",
        icon: "SlidersHorizontal",
      },
    ],
    liveReviews: [
      {
        author: "Maria G.",
        rating: 5,
        text: "Showed up on time, fixed our AC same day. Honest pricing — no upsells.",
        daysAgo: "2 days ago",
        response: "Thank you Maria! We appreciate you trusting Summit HVAC.",
      },
      {
        author: "James T.",
        rating: 5,
        text: "Best HVAC company in Riverside. Already recommended to two neighbors.",
        daysAgo: "5 days ago",
      },
      {
        author: "Linda K.",
        rating: 5,
        text: "Professional crew, cleaned up after themselves. Will use again.",
        daysAgo: "1 week ago",
        response: "Thanks Linda — our team takes pride in leaving your home spotless!",
      },
    ],
    monthlyPulse: [
      { month: "Jan", reviews: 4, avgRating: 4.2 },
      { month: "Feb", reviews: 7, avgRating: 4.3 },
      { month: "Mar", reviews: 12, avgRating: 4.5 },
      { month: "Apr", reviews: 18, avgRating: 4.6 },
      { month: "May", reviews: 28, avgRating: 4.7 },
      { month: "Jun", reviews: 41, avgRating: 4.8 },
      { month: "Jul", reviews: 52, avgRating: 4.9 },
    ],
  },
];

export const reputationShowcaseCta = {
  headline: "Ready to Turn Happy Customers Into Your Best Marketing?",
  body: "FTW Agency builds reputation systems that grow review volume, protect your rating, and convert trust into revenue. Let's audit your profile and map the opportunity.",
  primaryLabel: "Schedule Strategy Call",
  primaryHref: "/contact",
  secondaryLabel: "View Related Services",
  secondaryHref: "#related-services",
};
