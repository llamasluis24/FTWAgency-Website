export interface ShowcaseMetric {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  accent?: "cyan" | "green" | "default";
}

export interface ChartSeries {
  label: string;
  values: number[];
  color?: "accent" | "success" | "muted";
}

export interface FunnelStep {
  label: string;
  value: string;
  width: number;
}

export interface WorkflowStep {
  label: string;
  detail?: string;
}

export interface ComparisonSide {
  title: string;
  items: { label: string; value: string; bad?: boolean }[];
}

export interface CampaignRow {
  name: string;
  platform: string;
  spend: string;
  leads: string;
  cpl: string;
  roas: string;
}

export interface PlatformShowcaseConfig {
  eyebrow?: string;
  headline: string;
  lede?: string;
  metrics: ShowcaseMetric[];
  /** Primary line/area chart label */
  chartLabel?: string;
  chartSeries?: ChartSeries[];
  /** Secondary bar chart */
  barLabel?: string;
  barValues?: { label: string; value: number }[];
  funnel?: FunnelStep[];
  campaigns?: CampaignRow[];
  workflow?: {
    headline: string;
    steps: WorkflowStep[];
  };
  comparison?: {
    before: ComparisonSide;
    after: ComparisonSide;
  };
  /** Platform breakdown pills */
  platforms?: { name: string; pct: number }[];
  /** List rows for rankings, keywords, etc. */
  listItems?: { label: string; value: string; trend?: string }[];
  /** Tab labels for multi-panel software demos */
  tabs?: string[];
  /** Mobile screen labels */
  mobileScreens?: string[];
  /** Partner logo keys (openclaw, hermes) */
  partners?: string[];
  /** Real dashboard screenshot (replaces synthetic dashboard UI) */
  dashboardImage?: string;
  dashboardImageAlt?: string;
  variant:
    | "analytics"
    | "paid-ads"
    | "seo"
    | "aio"
    | "gbp"
    | "reputation"
    | "social"
    | "automation"
    | "ai-agents"
    | "software"
    | "mobile"
    | "website";
}
