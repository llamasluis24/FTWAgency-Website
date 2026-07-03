import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const constructionMobileAppModules = {
  showcase: {
    eyebrow: "Field App Example",
    title: "See What a Job Site App Looks Like for a Design-Build Crew",
    lede:
      "Northgate Design-Build' field app connects crews to the office — daily logs, progress photos, punch lists, and change orders captured on site instead of lost in group texts.",
    foremanName: "Jake R.",
    jobLabel: "Oak Street Kitchen Remodel",
    jobPhase: "Rough-In · Week 3",
    photosToday: 6,
    punchItems: 4,
    punchCompleted: 2,
    dailyLog: [
      { time: "7:45 AM", note: "Crew arrived — electrical rough-in started" },
      { time: "11:30 AM", note: "Cabinet layout verified with homeowner" },
      { time: "2:15 PM", note: "Plumbing inspection passed ✓" },
    ],
    openItems: [
      { task: "Install under-cabinet lighting", trade: "Electrical" },
      { task: "Patch drywall — north wall", trade: "Drywall" },
    ],
  },

  funnel: {
    eyebrow: "Field App Pipeline",
    title: "Turn On-Site Activity Into Real-Time Project Data",
    lede:
      "A field app captures photos, daily logs, and punch items at the source — so PMs, clients, and billing all work from the same live job record.",
    stages: [
      { label: "Active Jobs", value: 14 },
      { label: "Daily Field Logins", value: 52 },
      { label: "Photos Uploaded / Week", value: 186 },
      { label: "Punch Items Closed via App", value: 94 },
      { label: "Client Portal Views", value: 420 },
    ],
  } satisfies IndustryModuleFunnel,

  roiCalculator: {
    eyebrow: "Field App ROI Calculator",
    title: "Estimate What Connected Field Data Could Save",
    lede:
      "For contractors, reducing miscommunication and rework on active jobs protects margins — while client portal access cuts status-call volume.",
    defaults: {
      monthlyVisitors: 14,
      currentRate: 45,
      improvedRate: 72,
      averageValue: 2800,
    },
    limits: {
      monthlyVisitors: { min: 3, max: 40, step: 1 },
      currentRate: { min: 20, max: 60, step: 1 },
      improvedRate: { min: 40, max: 90, step: 1 },
      averageValue: { min: 500, max: 15000, step: 100 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Active jobs",
      currentRate: "Field data captured via app (%)",
      improvedRate: "Improved app adoption (%)",
      averageValue: "Rework cost avoided / job ($)",
      currentOpportunities: "Current savings",
      improvedOpportunities: "Improved savings",
      additionalOpportunities: "Additional savings",
      addedRevenue: "Estimated monthly margin protected",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Group Texts to a Connected Job Site",
    before: {
      label: "Before",
      headline: "Job status lost in texts and voicemails.",
      items: [
        "Progress photos in personal camera rolls",
        "Punch lists on paper clipboards",
        "PMs drive to site for every update",
        "Clients call daily for status",
        "Change orders delayed and disputed",
      ],
    },
    after: {
      label: "After",
      headline: "Every crew connected to the job record.",
      items: [
        "Timestamped photos tagged to each phase",
        "Digital punch lists with trade assignments",
        "Daily logs visible to PM and client portal",
        "Change orders captured and approved on site",
        "60% fewer client status calls",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
