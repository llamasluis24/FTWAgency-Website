"use client";

import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { IndustryModuleRoiCalculator } from "@/content/industries/modules/types";
import { cn } from "@/lib/utils";

const DEFAULT_LIMITS = {
  monthlyVisitors: { min: 500, max: 12_000, step: 500 },
  currentRate: { min: 0.5, max: 6, step: 0.1 },
  improvedRate: { min: 0.8, max: 10, step: 0.1 },
  averageValue: { min: 1500, max: 20_000, step: 500 },
  maxAddedRevenue: 5_000_000,
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

function ResultCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
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
    </div>
  );
}

export function IndustryRoiCalculator({
  content,
}: {
  content: IndustryModuleRoiCalculator;
}) {
  const { defaults, labels, limits: contentLimits } = content;
  const limits = {
    monthlyVisitors: contentLimits?.monthlyVisitors ?? DEFAULT_LIMITS.monthlyVisitors,
    currentRate: contentLimits?.currentRate ?? DEFAULT_LIMITS.currentRate,
    improvedRate: contentLimits?.improvedRate ?? DEFAULT_LIMITS.improvedRate,
    averageValue: contentLimits?.averageValue ?? DEFAULT_LIMITS.averageValue,
    maxAddedRevenue: contentLimits?.maxAddedRevenue ?? DEFAULT_LIMITS.maxAddedRevenue,
  };

  const [monthlyVisitors, setMonthlyVisitors] = useState(() =>
    clamp(defaults.monthlyVisitors, limits.monthlyVisitors.min, limits.monthlyVisitors.max),
  );
  const [currentRate, setCurrentRate] = useState(() =>
    clamp(defaults.currentRate, limits.currentRate.min, limits.currentRate.max),
  );
  const [improvedRate, setImprovedRate] = useState(() =>
    clamp(defaults.improvedRate, limits.improvedRate.min, limits.improvedRate.max),
  );
  const [averageValue, setAverageValue] = useState(() =>
    clamp(defaults.averageValue, limits.averageValue.min, limits.averageValue.max),
  );

  const results = useMemo(() => {
    const currentOpportunities = Math.round(monthlyVisitors * (currentRate / 100));
    const improvedOpportunities = Math.round(monthlyVisitors * (improvedRate / 100));
    const additional = Math.max(improvedOpportunities - currentOpportunities, 0);
    const rawRevenue = additional * averageValue;
    const capped = rawRevenue > limits.maxAddedRevenue;
    const addedRevenue = Math.min(rawRevenue, limits.maxAddedRevenue);
    return { currentOpportunities, improvedOpportunities, additional, addedRevenue, capped };
  }, [monthlyVisitors, currentRate, improvedRate, averageValue, limits.maxAddedRevenue]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const revenueDisplay = results.capped
    ? `${fmt(results.addedRevenue)}+`
    : fmt(results.addedRevenue);

  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          lede={content.lede}
        />

        <Reveal>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="card-surface space-y-6 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <p className="font-display text-sm font-semibold text-heading">
                  Adjust your assumptions
                </p>
              </div>

              <SliderField
                label={labels.monthlyVisitors}
                value={monthlyVisitors}
                min={limits.monthlyVisitors.min}
                max={limits.monthlyVisitors.max}
                step={limits.monthlyVisitors.step}
                onChange={setMonthlyVisitors}
              />
              <SliderField
                label={labels.currentRate}
                value={currentRate}
                min={limits.currentRate.min}
                max={limits.currentRate.max}
                step={limits.currentRate.step}
                suffix="%"
                onChange={setCurrentRate}
              />
              <SliderField
                label={labels.improvedRate}
                value={improvedRate}
                min={limits.improvedRate.min}
                max={limits.improvedRate.max}
                step={limits.improvedRate.step}
                suffix="%"
                onChange={setImprovedRate}
              />
              <SliderField
                label={labels.averageValue}
                value={averageValue}
                min={limits.averageValue.min}
                max={limits.averageValue.max}
                step={limits.averageValue.step}
                prefix="$"
                onChange={setAverageValue}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label={labels.currentOpportunities}
                value={results.currentOpportunities.toLocaleString()}
              />
              <ResultCard
                label={labels.improvedOpportunities}
                value={results.improvedOpportunities.toLocaleString()}
              />
              <ResultCard
                label={labels.additionalOpportunities}
                value={`+${results.additional.toLocaleString()}`}
              />
              <ResultCard
                label={labels.addedRevenue}
                value={revenueDisplay}
                highlight
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
