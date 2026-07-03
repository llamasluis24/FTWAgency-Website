"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { StartupsAioModules } from "@/content/industries/modules/startups-aio-modules";
import { cn } from "@/lib/utils";

function seriesToPath(values: number[], w: number, h: number, pad = 8) {
  const max = Math.max(...values, 1);
  const step = (w - pad * 2) / (values.length - 1);
  return values
    .map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - (v / max) * (h - pad * 2);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

function seriesToArea(values: number[], w: number, h: number, pad = 8) {
  const line = seriesToPath(values, w, h, pad);
  const lastX = pad + (values.length - 1) * ((w - pad * 2) / (values.length - 1));
  return `${line} L${lastX},${h - pad} L${pad},${h - pad} Z`;
}

function TrendChart({
  label,
  values,
  color = "#0891b2",
}: {
  label: string;
  values: number[];
  color?: string;
}) {
  const reduceMotion = useReducedMotion();
  const w = 360;
  const h = 120;
  const area = seriesToArea(values, w, h);
  const line = seriesToPath(values, w, h);
  const gradId = `aio-su-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="mb-3 text-xs font-medium text-slate-500">{label}</p>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" aria-hidden>
        {[0.25, 0.5, 0.75].map((pct) => (
          <line
            key={pct}
            x1={8}
            x2={w - 8}
            y1={h * pct}
            y2={h * pct}
            stroke="rgba(15,23,42,0.08)"
            strokeWidth={1}
          />
        ))}
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.25} />
            <stop offset="100%" stopColor={color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gradId})`} />
        <motion.path
          d={line}
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={reduceMotion ? undefined : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}

function MetricCard({
  label,
  value,
  change,
  accent,
}: {
  label: string;
  value: string;
  change?: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">{label}</p>
      <p
        className={cn(
          "tnum mt-1 font-display text-2xl font-bold",
          accent ? "text-cyan-600" : "text-slate-900",
        )}
      >
        {value}
      </p>
      {change && <p className="mt-1 text-xs text-emerald-600">{change}</p>}
    </div>
  );
}

export function StartupsAioVisibilityChart({
  content,
}: {
  content: StartupsAioModules["visibility"];
}) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_48px_rgba(0,212,255,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 bg-elevated px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 hidden text-xs text-muted sm:inline">
                launchloop.io · AIO Analytics
              </span>
            </div>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
              Live Preview
            </span>
          </div>

          <div className="space-y-6 bg-white p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {content.metrics.map((m) => (
                <MetricCard
                  key={m.label}
                  label={m.label}
                  value={m.value}
                  change={m.change}
                  accent={"accent" in m && m.accent}
                />
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <TrendChart label="AI Mentions Over Time" values={[...content.mentionsTrend]} />
              <TrendChart
                label="Citation Trend"
                values={[...content.citationTrend]}
                color="#059669"
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <TrendChart
                label="AI Referral Traffic Trend"
                values={[...content.referralTrend]}
                color="#059669"
              />
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="mb-4 text-xs font-medium text-slate-500">Platform Breakdown</p>
                <div className="space-y-3">
                  {content.platformBreakdown.map((p) => (
                    <div key={p.name}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-slate-700">{p.name}</span>
                        <span className="tnum text-slate-500">{p.pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          className="h-full rounded-full bg-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="mb-4 text-xs font-medium text-slate-500">Top Cited Product Pages</p>
              <ul className="space-y-2">
                {content.topContent.map((item, i) => (
                  <li
                    key={item.page}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <span className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="tnum flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-[10px] font-bold text-cyan-700">
                        {i + 1}
                      </span>
                      {item.page}
                    </span>
                    <span className="tnum text-xs text-emerald-600">{item.citations} cites</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
