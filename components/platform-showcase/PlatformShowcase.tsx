"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardShell } from "./DashboardShell";
import { MetricGrid } from "./MetricCard";
import { BarChart, FunnelChart, LineChart } from "./Charts";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { ComparisonSection } from "./ComparisonSection";
import type { PlatformShowcaseConfig } from "./types";
import { cn } from "@/lib/utils";

function ListPanel({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string; trend?: string }[];
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-bg/40 p-4">
      <p className="mb-3 text-xs font-medium text-muted">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-2 rounded-lg bg-white/[0.03] px-3 py-2"
          >
            <span className="truncate text-xs text-body">{item.label}</span>
            <span className="flex shrink-0 items-center gap-2">
              <span className="tnum text-xs font-semibold text-heading">
                {item.value}
              </span>
              {item.trend && (
                <span className="text-[10px] text-success">{item.trend}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CampaignTable({
  campaigns,
}: {
  campaigns: NonNullable<PlatformShowcaseConfig["campaigns"]>;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/5 bg-bg/40">
      <table className="w-full min-w-[480px] text-left text-xs">
        <thead>
          <tr className="border-b border-white/5 text-muted">
            <th className="px-4 py-2.5 font-medium">Campaign</th>
            <th className="px-4 py-2.5 font-medium">Platform</th>
            <th className="px-4 py-2.5 font-medium">Spend</th>
            <th className="px-4 py-2.5 font-medium">Leads</th>
            <th className="px-4 py-2.5 font-medium">CPL</th>
            <th className="px-4 py-2.5 font-medium">ROAS</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c.name} className="border-b border-white/[0.03] last:border-0">
              <td className="px-4 py-2.5 font-medium text-heading">{c.name}</td>
              <td className="px-4 py-2.5 text-muted">{c.platform}</td>
              <td className="tnum px-4 py-2.5 text-body">{c.spend}</td>
              <td className="tnum px-4 py-2.5 text-accent">{c.leads}</td>
              <td className="tnum px-4 py-2.5 text-body">{c.cpl}</td>
              <td className="tnum px-4 py-2.5 text-success">{c.roas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PlatformBreakdown({
  platforms,
}: {
  platforms: { name: string; pct: number }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <div
          key={p.name}
          className="flex items-center gap-2 rounded-lg border border-white/5 bg-bg/40 px-3 py-2"
        >
          <span className="text-xs text-body">{p.name}</span>
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${p.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <span className="tnum text-[10px] text-muted">{p.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function MobileShowcase({ screens }: { screens: string[] }) {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6 py-4">
      {screens.map((label, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={cn(
            "relative w-[140px] rounded-[1.75rem] border border-white/15 bg-bg p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]",
            i === 1 && "z-10 scale-105 sm:w-[156px]",
          )}
          style={{ rotate: i === 0 ? -4 : i === 2 ? 4 : 0 }}
        >
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/15" />
          <div className="space-y-1.5 rounded-2xl bg-surface p-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5" />
            {[0, 1, 2].map((r) => (
              <div key={r} className="h-3 rounded-md bg-white/5" />
            ))}
          </div>
          <p className="mt-2 text-center text-[9px] text-muted">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function SoftwareTabsShowcase({ tabs }: { tabs: string[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[180px_1fr]">
      <div className="hidden space-y-1 lg:block">
        {tabs.map((tab, i) => (
          <div
            key={tab}
            className={cn(
              "rounded-lg px-3 py-2 text-xs",
              i === 0
                ? "border border-accent/20 bg-accent/10 font-medium text-accent"
                : "text-muted",
            )}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {tabs.slice(0, 4).map((tab) => (
          <div
            key={tab}
            className="rounded-xl border border-white/5 bg-bg/50 p-4"
          >
            <p className="mb-3 text-xs font-medium text-heading">{tab}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 rounded-lg bg-accent/15" />
              <div className="h-8 rounded-lg bg-white/5" />
              <div className="col-span-2 h-16 rounded-lg bg-white/[0.04]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnerBadges({ partners }: { partners: string[] }) {
  const logos: Record<string, string> = {
    openclaw: "/partners/openclaw.svg",
    hermes: "/partners/hermes.png",
  };
  return (
    <div className="flex flex-wrap items-center gap-4">
      {partners.map((key) => (
        <div
          key={key}
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-bg/60 px-3 py-2"
        >
          {logos[key] && (
            <Image src={logos[key]} alt={key} width={24} height={24} className="h-6 w-6 object-contain" />
          )}
          <span className="text-xs capitalize text-body">{key}</span>
        </div>
      ))}
    </div>
  );
}

function DashboardBody({ config }: { config: PlatformShowcaseConfig }) {
  return (
    <div className="space-y-6">
      <MetricGrid metrics={config.metrics} />
      <div className="grid gap-4 lg:grid-cols-2">
        {config.chartSeries && config.chartSeries.length > 0 && (
          <LineChart
            label={config.chartLabel}
            series={config.chartSeries}
          />
        )}
        {config.barValues && config.barValues.length > 0 && (
          <BarChart label={config.barLabel} values={config.barValues} />
        )}
        {config.funnel && config.funnel.length > 0 && (
          <div className="rounded-xl border border-white/5 bg-bg/40 p-4 lg:col-span-2">
            <p className="mb-4 text-xs font-medium text-muted">Conversion Funnel</p>
            <FunnelChart steps={config.funnel} />
          </div>
        )}
      </div>
      {config.platforms && config.platforms.length > 0 && (
        <PlatformBreakdown platforms={config.platforms} />
      )}
      {config.listItems && config.listItems.length > 0 && (
        <ListPanel title="Top Performers" items={config.listItems} />
      )}
      {config.campaigns && config.campaigns.length > 0 && (
        <CampaignTable campaigns={config.campaigns} />
      )}
      {config.partners && config.partners.length > 0 && (
        <PartnerBadges partners={config.partners} />
      )}
      {config.tabs && config.tabs.length > 0 && (
        <SoftwareTabsShowcase tabs={config.tabs} />
      )}
      {config.mobileScreens && config.mobileScreens.length > 0 && (
        <MobileShowcase screens={config.mobileScreens} />
      )}
    </div>
  );
}

export function PlatformShowcase({ config }: { config: PlatformShowcaseConfig }) {
  const badgeLabels: Record<string, string> = {
    "paid-ads": "Live Campaign Data",
    seo: "Search Console",
    aio: "AI Visibility",
    gbp: "Google Business Profile",
    reputation: "Review Analytics",
    social: "Content Analytics",
    automation: "Automation Hub",
    "ai-agents": "Agent Console",
    software: "Operations Platform",
    mobile: "App Preview",
    website: "Site Analytics",
    analytics: "Analytics",
  };

  return (
    <>
      <Section surface>
        <Container>
          <SectionHeading
            eyebrow={config.eyebrow ?? "Platform Showcase"}
            title={config.headline}
            lede={config.lede}
          />
          <Reveal className="mt-10">
            {config.dashboardImage ? (
              <div className="mx-auto max-w-[1024px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(0,212,255,0.06)]">
                <Image
                  src={config.dashboardImage}
                  alt={config.dashboardImageAlt ?? "Campaign performance dashboard"}
                  width={1024}
                  height={576}
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="h-auto w-full"
                  priority
                />
              </div>
            ) : (
              <DashboardShell
                title="FTW Growth Platform"
                badge={badgeLabels[config.variant] ?? "Live"}
              >
                <DashboardBody config={config} />
              </DashboardShell>
            )}
          </Reveal>
        </Container>
      </Section>

      {config.workflow && (
        <Section>
          <Container>
            <WorkflowDiagram
              headline={config.workflow.headline}
              steps={config.workflow.steps}
            />
          </Container>
        </Section>
      )}

      {config.comparison && (
        <Section surface>
          <Container>
            <SectionHeading
              eyebrow="Results"
              title="Before & *After* FTW"
              lede="What changes when ad spend is managed as a revenue system — not a line item."
            />
            <Reveal className="mt-10">
              <ComparisonSection
                before={config.comparison.before}
                after={config.comparison.after}
              />
            </Reveal>
          </Container>
        </Section>
      )}
    </>
  );
}
