/** Shared module shapes for industry × service combo page enrichment. */

export interface IndustryModuleFunnel {
  eyebrow: string;
  title: string;
  lede: string;
  stages: readonly { label: string; value: number }[];
}

export interface IndustryModuleRoiCalculator {
  eyebrow: string;
  title: string;
  lede: string;
  defaults: {
    monthlyVisitors: number;
    currentRate: number;
    improvedRate: number;
    averageValue: number;
  };
  limits?: {
    monthlyVisitors?: { min: number; max: number; step: number };
    currentRate?: { min: number; max: number; step: number };
    improvedRate?: { min: number; max: number; step: number };
    averageValue?: { min: number; max: number; step: number };
    maxAddedRevenue?: number;
  };
  labels: {
    monthlyVisitors: string;
    currentRate: string;
    improvedRate: string;
    averageValue: string;
    currentOpportunities: string;
    improvedOpportunities: string;
    additionalOpportunities: string;
    addedRevenue: string;
  };
}

export interface IndustryTimeSavingsScopeOption {
  id: string;
  label: string;
  description: string;
  automatablePercent: number;
}

export interface IndustryModuleTimeSavingsCalculator {
  eyebrow: string;
  title: string;
  lede: string;
  defaults: {
    manualHoursPerWeek: number;
    automationScopeId: string;
    hourlyRate: number;
  };
  /** Industry-tailored scope options; falls back to shared defaults in the component. */
  automationScope?: IndustryTimeSavingsScopeOption[];
  limits?: {
    manualHoursPerWeek?: { min: number; max: number; step: number };
    hourlyRate?: { min: number; max: number; step: number };
    maxHoursSavedPerWeek?: number;
  };
  labels: {
    manualHoursPerWeek: string;
    automationScope: string;
    hourlyRate: string;
    hoursSavedPerWeek: string;
    hoursSavedPerMonth: string;
    adminCapacity: string;
    adminTimeValue: string;
  };
  responseTime?: {
    before: string;
    after: string;
  };
}

export interface IndustryModuleSeoEducation {
  eyebrow: string;
  title: string;
  lede: string;
  insights: readonly {
    icon: string;
    title: string;
    body: string;
    takeaway: string;
  }[];
  audit?: {
    checks: readonly { label: string; status: "pass" | "warn" | "fail" }[];
    healthBefore: number;
    healthAfter: number;
  };
}

export interface IndustryModuleBeforeAfter {
  eyebrow: string;
  title: string;
  before: {
    label: string;
    headline: string;
    items: readonly string[];
  };
  after: {
    label: string;
    headline: string;
    items: readonly string[];
  };
}
