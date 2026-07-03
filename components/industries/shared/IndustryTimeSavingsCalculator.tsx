"use client";

import { useMemo, useState } from "react";
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import type {
  IndustryModuleTimeSavingsCalculator,
  IndustryTimeSavingsScopeOption,
} from "@/content/industries/modules/types";
import { cn } from "@/lib/utils";

const HOURS_PER_MONTH = 4.33;
const DEFAULT_MAX_HOURS_SAVED = 25;

export const DEFAULT_AUTOMATION_SCOPES: IndustryTimeSavingsScopeOption[] = [
  {
    id: "essentials",
    label: "Essentials",
    description: "Auto-replies, reminders & missed-call text-back",
    automatablePercent: 35,
  },
  {
    id: "standard",
    label: "Standard",
    description: "Intake, follow-up sequences & scheduling",
    automatablePercent: 55,
  },
  {
    id: "full",
    label: "Full workflow",
    description: "End-to-end routing, nurture & status updates",
    automatablePercent: 70,
  },
];

const DEFAULT_LIMITS = {
  manualHoursPerWeek: { min: 4, max: 30, step: 1 },
  hourlyRate: { min: 25, max: 85, step: 5 },
  maxHoursSavedPerWeek: DEFAULT_MAX_HOURS_SAVED,
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <label className="text-sm text-body">{label}</label>
        <span className="tnum shrink-0 rounded-lg bg-accent/10 px-2.5 py-1 text-sm font-semibold text-accent">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-accent"
      />
    </div>
  );
}

function ScopeSelector({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: IndustryTimeSavingsScopeOption[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm text-body">{label}</p>
      <div className="space-y-2">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-left transition-colors",
                selected
                  ? "border-accent/50 bg-accent/10"
                  : "border-white/10 bg-bg/40 hover:border-white/20",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "font-display text-sm font-semibold",
                    selected ? "text-accent" : "text-heading",
                  )}
                >
                  {option.label}
                </span>
                <span
                  className={cn(
                    "h-4 w-4 shrink-0 rounded-full border-2",
                    selected ? "border-accent bg-accent" : "border-white/30",
                  )}
                  aria-hidden
                />
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted">{option.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight = false,
  sub,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-5 transition-colors",
        highlight
          ? "border-success/30 bg-success/5 shadow-[0_0_32px_rgba(46,212,122,0.1)]"
          : "border-white/10 bg-elevated",
      )}
    >
      <p className="text-xs text-muted">{label}</p>
      <p
        className={cn(
          "tnum mt-2 font-display text-2xl font-bold md:text-3xl",
          highlight ? "text-success" : "text-heading",
        )}
      >
        {value}
      </p>
      {sub && <p className="mt-1 text-[11px] text-muted">{sub}</p>}
    </div>
  );
}

export function IndustryTimeSavingsCalculator({
  content,
}: {
  content: IndustryModuleTimeSavingsCalculator;
}) {
  const { defaults, labels, limits: contentLimits } = content;
  const scopeOptions = content.automationScope ?? DEFAULT_AUTOMATION_SCOPES;
  const limits = {
    manualHoursPerWeek:
      contentLimits?.manualHoursPerWeek ?? DEFAULT_LIMITS.manualHoursPerWeek,
    hourlyRate: contentLimits?.hourlyRate ?? DEFAULT_LIMITS.hourlyRate,
    maxHoursSavedPerWeek:
      contentLimits?.maxHoursSavedPerWeek ?? DEFAULT_LIMITS.maxHoursSavedPerWeek,
  };

  const defaultScope =
    scopeOptions.find((o) => o.id === defaults.automationScopeId) ?? scopeOptions[1];

  const [manualHours, setManualHours] = useState(() =>
    clamp(defaults.manualHoursPerWeek, limits.manualHoursPerWeek.min, limits.manualHoursPerWeek.max),
  );
  const [scopeId, setScopeId] = useState(defaultScope.id);
  const [hourlyRate, setHourlyRate] = useState(() =>
    clamp(defaults.hourlyRate, limits.hourlyRate.min, limits.hourlyRate.max),
  );

  const selectedScope =
    scopeOptions.find((o) => o.id === scopeId) ?? scopeOptions[1];

  const results = useMemo(() => {
    const rawHoursPerWeek = manualHours * (selectedScope.automatablePercent / 100);
    const capped = rawHoursPerWeek > limits.maxHoursSavedPerWeek;
    const hoursPerWeek = Math.min(rawHoursPerWeek, limits.maxHoursSavedPerWeek);
    const hoursPerMonth = hoursPerWeek * HOURS_PER_MONTH;
    const adminTimeValue = hoursPerMonth * hourlyRate;
    return { hoursPerWeek, hoursPerMonth, adminTimeValue, capped, rawHoursPerWeek };
  }, [manualHours, selectedScope.automatablePercent, hourlyRate, limits.maxHoursSavedPerWeek]);

  const fmtHours = (n: number) =>
    n.toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: n % 1 ? 1 : 0 });

  const fmtCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const responseBefore = content.responseTime?.before ?? "2–24 hrs";
  const responseAfter = content.responseTime?.after ?? "under 5 min";

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="card-surface space-y-6 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <p className="font-display text-sm font-semibold text-heading">
                Adjust your assumptions
              </p>
            </div>

            <div className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-bg/50 p-3">
              <span className="rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-300">
                Before: {responseBefore} response
              </span>
              <span className="text-xs text-muted">→</span>
              <span className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
                After: {responseAfter}
              </span>
            </div>

            <SliderField
              label={labels.manualHoursPerWeek}
              value={manualHours}
              min={limits.manualHoursPerWeek.min}
              max={limits.manualHoursPerWeek.max}
              step={limits.manualHoursPerWeek.step}
              suffix=" hrs"
              onChange={setManualHours}
            />
            <ScopeSelector
              label={labels.automationScope}
              options={scopeOptions}
              value={scopeId}
              onChange={setScopeId}
            />
            <SliderField
              label={labels.hourlyRate}
              value={hourlyRate}
              min={limits.hourlyRate.min}
              max={limits.hourlyRate.max}
              step={limits.hourlyRate.step}
              prefix="$"
              suffix="/hr"
              onChange={setHourlyRate}
            />
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label={labels.hoursSavedPerWeek}
                value={`${fmtHours(results.hoursPerWeek)} hrs`}
                highlight
              />
              <ResultCard
                label={labels.hoursSavedPerMonth}
                value={`${fmtHours(results.hoursPerMonth)} hrs`}
              />
              <ResultCard
                label={labels.adminCapacity}
                value={`~${fmtHours(results.hoursPerWeek)} hrs/wk`}
                sub="Reclaimed admin capacity on your current team"
              />
              <ResultCard
                label={labels.adminTimeValue}
                value={fmtCurrency(results.adminTimeValue)}
                sub={`Admin time value at $${hourlyRate}/hr — not added revenue`}
              />
            </div>

            {results.capped && (
              <p className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-xs leading-relaxed text-body">
                Most teams reclaim <strong className="text-heading">5–20 hrs/week</strong> in the
                first 90 days. Your inputs suggest up to{" "}
                {fmtHours(results.rawHoursPerWeek)} hrs — results are capped at a realistic ceiling.
              </p>
            )}

            <p className="text-xs leading-relaxed text-muted">
              Estimates assume repetitive intake, follow-up, and scheduling tasks — not full staff
              replacement. Actual savings depend on workflow complexity and adoption.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
