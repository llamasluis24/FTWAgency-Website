import type { CaseStudy } from "@/lib/schemas";

export const CAL_STAR_NAME = "Cal Star Mobile Home Construction";

export const calStarImages = {
  logo: "/showcases/software/cal-star/cal-star-logo.png",
} as const;

export type WorkflowStageId =
  | "lead-capture"
  | "estimate-builder"
  | "proposal-delivery"
  | "e-signatures"
  | "scheduling"
  | "field-operations"
  | "owner-dashboard";

export interface WorkflowStage {
  id: WorkflowStageId;
  step: string;
  eyebrow: string;
  headline: string;
  body: string;
  features: readonly string[];
}

export const mobilehomecrmCalStar: CaseStudy = {
  slug: "mobilehomecrm-cal-star",
  title: "How Cal Star Replaced Manual Paperwork With a System That Closes More Jobs",
  client: CAL_STAR_NAME,
  industry: "home-services",
  services: ["custom-software", "mobile-app-development", "business-automation"],
  summary:
    "Cal Star Mobile Home Construction had become one of California's largest mobile home contractors — but growth was creating more paperwork, not more sales capacity. Reps calculated pricing by hand, proposals took days, follow-ups were inconsistent, and ownership had no real-time view of the pipeline. FTW built custom software around how Cal Star actually sells so the team closes more jobs with far less manual work.",
  challenge: [
    "Cal Star had already become one of California's largest mobile home contractors.",
    "As the company grew, every estimate required manually calculating pricing. Sales reps relied on paper packets. Follow-ups were inconsistent. Scheduling crews required multiple phone calls.",
    "Photos, customer information, and proposal documents lived across multiple systems. Every additional salesperson created more administrative work instead of more capacity.",
  ],
  strategy: [
    "Instead of forcing Cal Star into generic contractor software, FTW designed a platform around exactly how mobile home contractors sell projects.",
    "The system digitized every step: lead management, mobile estimating, proposal generation, digital signatures, automated follow-ups, scheduling, crew management, customer communication, and reporting.",
    "Everything became standardized while still matching how the company already operated.",
  ],
  execution: [
    "The software was developed specifically for the manufactured housing industry.",
    "Major modules included a mobile estimate builder, dynamic pricing database, proposal designer, electronic signatures, SMS follow-up automation, calendar scheduling, crew assignments, job photos, internal notes, dashboard reporting, and customer pipeline.",
    "Every feature reduced manual work while improving consistency across the organization.",
  ],
  results: [
    { value: 25, prefix: "15–", suffix: "%", label: "Higher close rate potential" },
    { value: 100, suffix: "%", label: "Digital proposal workflow" },
    { value: 1, label: "Platform from lead to completed job" },
  ],
  screenshots: [
    { title: "Lead Pipeline", kind: "pipeline" },
    { title: "Estimate Builder", kind: "dashboard" },
    { title: "Proposal Designer", kind: "dashboard" },
    { title: "Owner Dashboard", kind: "dashboard" },
  ],
  beforeAfter: {
    before: {
      title: "Manual Process",
      caption: "Paper estimates, calculator pricing, phone follow-ups, spreadsheet scheduling",
    },
    after: {
      title: "Custom Platform",
      caption: "Digital estimates, instant proposals, e-signatures, automated follow-ups, live dashboard",
    },
  },
  testimonial: {
    quote:
      "Before this system, every estimate felt different depending on who created it. Now every proposal is standardized, customers approve digitally, and our team at Cal Star spends more time selling instead of chasing paperwork.",
    author: CAL_STAR_NAME,
    role: "Operations Team",
    company: CAL_STAR_NAME,
    industry: "home-services",
  },
  featured: true,
};

export const mobilehomecrmHeroEyebrow = `Case Study · ${CAL_STAR_NAME}`;

export const mobilehomecrmHeroTags = [
  "Mobile Home Contractor",
  "Custom Software",
  "Sales Automation",
  "Field Operations",
  "California",
] as const;

export const mobilehomecrmMetrics = [
  { value: "15–25%", label: "Higher Close Rate Potential for Cal Star" },
  { value: "Minutes", sublabel: "Not Days", label: "To Send a Proposal" },
  { value: "Less", sublabel: "Manual Work", label: "Per Sales Rep" },
  { value: "1 System", label: "From Lead to Completed Job" },
] as const;

export const calStarProblemIntro = {
  eyebrow: "The Problem",
  headline: "Growth Was Creating More Paperwork, Not More Sales",
  lede: "Cal Star Mobile Home Construction was winning more work — but every new rep added more admin, more inconsistency, and more manual steps between a lead and a signed job.",
  painPoints: [
    "Paper estimate packets and hand-calculated pricing on every job",
    "Proposals retyped manually and delivered days later",
    "Follow-ups tracked in voicemails, texts, and memory",
    "Crew scheduling over phone calls and spreadsheets",
    "Job photos and notes scattered across phones and inboxes",
    "Ownership asking reps for updates instead of seeing the pipeline",
  ],
} as const;

export const mobilehomecrmWorkflowStages: readonly WorkflowStage[] = [
  {
    id: "lead-capture",
    step: "01",
    eyebrow: "Scattered Leads",
    headline: "Every Lead Used to Live Somewhere Different",
    body: "At Cal Star, jobs came in through calls, texts, and walk-ins — but customer details ended up in notebooks, spreadsheets, and rep voicemails. Follow-ups got missed and reps duplicated effort. FTW gave them one pipeline where every lead, photo, and next step lives in the same place.",
    features: [
      "No more lost leads between channels",
      "Clear rep ownership on every job",
      "Follow-up reminders instead of guesswork",
      "Customer history in one record",
    ],
  },
  {
    id: "estimate-builder",
    step: "02",
    eyebrow: "Manual Estimating",
    headline: "Reps Were Calculating Every Price by Hand",
    body: "Each Cal Star salesperson built estimates with paper packets and a calculator. Pricing varied by rep, onboarding took weeks, and errors meant rework before a customer ever saw a number. FTW built a field estimate tool with standardized pricing so any rep can produce a professional quote on-site.",
    features: [
      "Consistent pricing across the sales team",
      "Materials and labor built into every estimate",
      "Less time calculating, more time selling",
      "Faster onboarding for new reps",
    ],
  },
  {
    id: "proposal-delivery",
    step: "03",
    eyebrow: "Slow Proposals",
    headline: "Getting a Proposal to the Customer Took Days",
    body: "After an on-site visit, Cal Star reps often had to retype scope, pricing, and photos into a presentable document back at the office. Delays killed momentum while customers compared other contractors. FTW automated proposal generation so Cal Star can send a professional, branded proposal in minutes.",
    features: [
      "Proposals sent while the rep is still in the field",
      "Clear scope and pricing customers understand",
      "Cal Star branding on every document",
      "Faster decisions and fewer stalled deals",
    ],
  },
  {
    id: "e-signatures",
    step: "04",
    eyebrow: "Paper Signatures",
    headline: "Chasing Signatures Was Slowing Closes",
    body: "Cal Star used to print proposals, drive them back to customers, and wait for ink signatures before work could move forward. Deals stalled in the gap between interest and approval. FTW added digital approvals so Cal Star customers can sign from their phone and the job moves forward immediately.",
    features: [
      "No printing or return trips for signatures",
      "Faster yes from interested customers",
      "Signed record attached to every job",
      "Sales team stays focused on the next lead",
    ],
  },
  {
    id: "scheduling",
    step: "05",
    eyebrow: "Phone-Tag Scheduling",
    headline: "Approved Jobs Still Required Hours of Coordination",
    body: "Once Cal Star won a job, scheduling meant phone calls to crews, updates in spreadsheets, and manual reminders to customers. Miscommunication created delays and rework. FTW connected accepted proposals directly to crew scheduling so installers, dates, and reminders stay aligned.",
    features: [
      "Crew assignments without phone tag",
      "One calendar the whole team can see",
      "Job notes travel with the schedule",
      "Automatic customer reminders",
    ],
  },
  {
    id: "field-operations",
    step: "06",
    eyebrow: "Disconnected Field Work",
    headline: "Photos and Notes Never Made It Back to the Office",
    body: "Cal Star field teams captured before-and-after photos and job updates on personal phones, but those files rarely connected to the customer record. Office staff couldn't see progress without calling the crew. FTW tied photo documentation and internal notes directly to each Cal Star project.",
    features: [
      "Before and after photos on every job",
      "Field notes visible to office and ownership",
      "Complete job history in one place",
      "Less back-and-forth during active projects",
    ],
  },
  {
    id: "owner-dashboard",
    step: "07",
    eyebrow: "No Pipeline Visibility",
    headline: "Ownership Couldn't See the Business in Real Time",
    body: "Cal Star leadership had to ask reps for updates to know what was pending, what closed, and who needed follow-up. Without a clear pipeline view, opportunities slipped and forecasting was guesswork. FTW connected the full workflow to one dashboard so ownership can see leads, proposals, and closed jobs without chasing the team.",
    features: [
      "Real-time sales visibility for ownership",
      "Pipeline reporting across the whole team",
      "Follow-ups that don't fall through the cracks",
      "Clearer forecasting and fewer surprises",
    ],
  },
] as const;

export const mobilehomecrmOperationalBefore = [
  "Paper estimates on every job",
  "Hand-calculated pricing by rep",
  "Inconsistent follow-up",
  "Spreadsheet crew scheduling",
  "Photos stuck on personal phones",
  "Sales process depended on who you talked to",
] as const;

export const mobilehomecrmOperationalAfter = [
  "Digital estimates from the field",
  "Standardized pricing for every rep",
  "Automated follow-up reminders",
  "Calendar-based crew scheduling",
  "Photos and notes on every job record",
  "Repeatable sales system Cal Star can scale",
] as const;

export const mobilehomecrmSystemFeatures = [
  "Lead Management",
  "Estimate Builder",
  "Proposal Generator",
  "Digital Signatures",
  "SMS Follow-Ups",
  "Scheduling Calendar",
  "Crew Assignments",
  "Photo Documentation",
  "Internal Notes",
  "Customer Timeline",
  "Pricing Database",
  "Sales Dashboard",
] as const;
