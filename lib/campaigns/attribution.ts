const STORAGE_KEY = "ftw_campaign_attribution";

export interface CampaignAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
}

const PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

function parseAttributionFromUrl(url: string): CampaignAttribution {
  const parsed = new URL(url);
  const data: CampaignAttribution = {};

  for (const key of PARAM_KEYS) {
    const value = parsed.searchParams.get(key);
    if (value) data[key] = value;
  }

  return data;
}

export function captureCampaignAttribution(url?: string) {
  if (typeof window === "undefined") return;

  const currentUrl = url ?? window.location.href;
  const incoming = parseAttributionFromUrl(currentUrl);
  const existing = getCampaignAttribution();

  const merged: CampaignAttribution = {
    ...existing,
    ...incoming,
    landing_page: existing?.landing_page ?? window.location.pathname + window.location.search,
    referrer: existing?.referrer ?? (document.referrer || undefined),
    captured_at: existing?.captured_at ?? new Date().toISOString(),
  };

  const hasValues = PARAM_KEYS.some((key) => merged[key]) || merged.landing_page;
  if (hasValues) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  }
}

export function getCampaignAttribution(): CampaignAttribution {
  if (typeof window === "undefined") return {};

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as CampaignAttribution;
  } catch {
    return {};
  }
}

export function attributionToFormFields(
  attribution: CampaignAttribution,
): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(attribution)) {
    if (value) fields[`attribution_${key}`] = value;
  }
  return fields;
}
