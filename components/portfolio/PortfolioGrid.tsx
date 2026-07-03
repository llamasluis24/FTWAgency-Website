"use client";

import { useMemo, useState } from "react";
import { ProjectCard, type ProjectCardData } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";

type PortfolioView = "all" | "website" | "software";

const SECTION_COPY = {
  website: {
    eyebrow: "Websites & Platforms",
    title: "Conversion-engineered sites that turn search into revenue",
    lede:
      "Lead-generation websites, tourism hubs, and hospitality experiences — built for credibility, local visibility, and clear conversion paths.",
  },
  software: {
    eyebrow: "Custom Software",
    title: "Platforms and products built around real workflows",
    lede:
      "CRM systems, SaaS products, mobile app ecosystems, and industry-specific tools — engineered for how businesses actually operate and sell.",
  },
} as const;

function PortfolioStats({ projects }: { projects: ProjectCardData[] }) {
  const websiteCount = projects.filter((p) => p.project.portfolioKind === "website").length;
  const softwareCount = projects.filter((p) => p.project.portfolioKind === "software").length;
  const industryCount = new Set(projects.map((p) => p.project.industry)).size;

  const stats = [
    { value: String(projects.length), label: "systems shipped" },
    { value: String(websiteCount), label: "websites & platforms" },
    { value: String(softwareCount), label: "software products" },
    { value: String(industryCount), label: "industries served" },
  ];

  return (
    <div className="mb-10 grid gap-4 rounded-2xl border border-white/8 bg-surface/60 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <p className="tnum font-display text-3xl font-bold text-accent">{stat.value}</p>
          <p className="mt-1 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectGrid({ items }: { items: ProjectCardData[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((data) => (
        <ProjectCard key={data.project.slug} data={data} />
      ))}
    </div>
  );
}

function PortfolioSection({
  kind,
  items,
}: {
  kind: "website" | "software";
  items: ProjectCardData[];
}) {
  const copy = SECTION_COPY[kind];
  return (
    <section className="scroll-mt-28">
      <div className="mb-8 max-w-3xl">
        <p className="eyebrow mb-3">{copy.eyebrow}</p>
        <h2 className="text-2xl font-semibold text-heading md:text-3xl">{copy.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-body">{copy.lede}</p>
      </div>
      <ProjectGrid items={items} />
    </section>
  );
}

/** Portfolio index grouped by deliverable type — every tab always shows work. */
export function PortfolioGrid({ projects }: { projects: ProjectCardData[] }) {
  const [view, setView] = useState<PortfolioView>("all");

  const websites = useMemo(
    () => projects.filter((p) => p.project.portfolioKind === "website"),
    [projects],
  );
  const software = useMemo(
    () => projects.filter((p) => p.project.portfolioKind === "software"),
    [projects],
  );

  const tab = (active: boolean) =>
    cn(
      "rounded-full border px-5 py-2 text-sm font-medium transition-all",
      active
        ? "border-accent/50 bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,212,255,0.12)]"
        : "border-white/10 text-muted hover:border-white/25 hover:text-body",
    );

  return (
    <div>
      <PortfolioStats projects={projects} />

      <div className="mb-12 flex flex-wrap gap-2">
        <button type="button" className={tab(view === "all")} onClick={() => setView("all")}>
          All Work
          <span className="ml-1.5 text-xs opacity-70">({projects.length})</span>
        </button>
        <button
          type="button"
          className={tab(view === "website")}
          onClick={() => setView("website")}
        >
          Websites
          <span className="ml-1.5 text-xs opacity-70">({websites.length})</span>
        </button>
        <button
          type="button"
          className={tab(view === "software")}
          onClick={() => setView("software")}
        >
          Software
          <span className="ml-1.5 text-xs opacity-70">({software.length})</span>
        </button>
      </div>

      {view === "all" ? (
        <div className="space-y-20 md:space-y-24">
          <PortfolioSection kind="website" items={websites} />
          <PortfolioSection kind="software" items={software} />
        </div>
      ) : view === "website" ? (
        <PortfolioSection kind="website" items={websites} />
      ) : (
        <PortfolioSection kind="software" items={software} />
      )}
    </div>
  );
}
