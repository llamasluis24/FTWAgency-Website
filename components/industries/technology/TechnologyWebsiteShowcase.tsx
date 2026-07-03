"use client";

import { ArrowRight, Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import type { TechnologyWebsiteDesignModules } from "@/content/industries/technology-website-design-modules";
import { cn } from "@/lib/utils";

export function TechnologyWebsiteShowcase({
  content,
}: {
  content: TechnologyWebsiteDesignModules["showcase"];
}) {
  const { mockup } = content;

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_60px_rgba(0,212,255,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,212,255,0.12),transparent)]" />

          {/* Browser chrome */}
          <div className="relative border-b border-white/10 bg-elevated px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="mx-auto rounded-md bg-white/5 px-4 py-1 text-[10px] text-muted">
                clearpath.io
              </span>
            </div>
          </div>

          {/* White SaaS canvas — override global light heading color */}
          <div className="relative bg-white p-5 sm:p-8 md:p-10 [&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_h4]:!text-black">
            {/* Nav */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-cyan-300 text-xs font-bold text-bg">
                  CP
                </span>
                <span className="font-display text-sm font-semibold text-slate-900">
                  {mockup.brand}
                </span>
              </div>
              <div className="hidden items-center gap-5 text-xs font-medium text-slate-500 md:flex">
                {mockup.nav.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <span className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-bg">
                {mockup.heroCta}
              </span>
            </div>

            {/* Hero */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Platform for modern ops teams
                </p>
                <h3 className="font-display text-xl font-semibold leading-tight !text-black sm:text-2xl md:text-3xl">
                  {mockup.heroHeadline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{mockup.heroSub}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-bg">
                    {mockup.heroCta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700">
                    {mockup.heroSecondary}
                  </span>
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-lg">
                <div className="border-b border-slate-200 bg-white px-4 py-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {mockup.dashboardTitle}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-px bg-slate-200 p-px">
                  {mockup.dashboardMetrics.map((m) => (
                    <div key={m.label} className="bg-white p-3 text-center">
                      <p className="tnum font-display text-lg font-bold text-slate-900">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 p-4">
                  {[88, 72, 94, 61].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-accent to-cyan-300"
                        style={{ width: `${w}%` }}
                      />
                      <span className="tnum text-[10px] text-slate-400">{w}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {mockup.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition-shadow hover:shadow-md"
                >
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <Check className="h-4 w-4 text-accent" strokeWidth={2.5} />
                  </span>
                  <p className="font-display text-sm font-semibold text-slate-900">{f.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing + social proof */}
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white p-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs text-slate-500">{mockup.pricingLabel}</p>
                <p className="tnum font-display text-2xl font-bold text-slate-900">
                  {mockup.pricingAmount}
                  <span className="text-sm font-normal text-slate-500">
                    {mockup.pricingPeriod}
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {mockup.socialProof.map((item) => (
                  <span
                    key={item}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold text-slate-600",
                      item.includes("G2") && "text-amber-600",
                    )}
                  >
                    {item.includes("G2") && (
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
