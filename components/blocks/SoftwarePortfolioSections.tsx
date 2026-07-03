"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  softwareBuiltForNeeds,
  softwarePortfolioProjects,
  softwareTrustSection,
  type SoftwareProject,
} from "@/content/software-portfolio";
import { cn } from "@/lib/utils";

const ACCENT_STYLES = {
  cyan: {
    glow: "group-hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]",
    border: "group-hover:border-accent/30",
    gradient: "from-accent/25 via-accent/10 to-transparent",
    bar: "bg-accent",
    pill: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
  },
  violet: {
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    border: "group-hover:border-violet-400/30",
    gradient: "from-violet-500/25 via-violet-500/10 to-transparent",
    bar: "bg-violet-400",
    pill: "bg-violet-500/10 text-violet-300 border-violet-400/20",
    dot: "bg-violet-400",
  },
  emerald: {
    glow: "group-hover:shadow-[0_0_40px_rgba(46,212,122,0.15)]",
    border: "group-hover:border-success/30",
    gradient: "from-success/25 via-success/10 to-transparent",
    bar: "bg-success",
    pill: "bg-success/10 text-success border-success/20",
    dot: "bg-success",
  },
  amber: {
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    border: "group-hover:border-amber-400/30",
    gradient: "from-amber-500/25 via-amber-500/10 to-transparent",
    bar: "bg-amber-400",
    pill: "bg-amber-500/10 text-amber-300 border-amber-400/20",
    dot: "bg-amber-400",
  },
} as const;

function PreviewMock({ preview, accent }: Pick<SoftwareProject, "preview" | "accent">) {
  const style = ACCENT_STYLES[accent];

  if (preview === "crm") {
    return (
      <div className="flex h-full gap-2 p-3">
        <div className="hidden w-10 shrink-0 space-y-1.5 sm:block">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn("h-1.5 rounded-full", i === 0 ? style.bar : "bg-white/10")}
            />
          ))}
        </div>
        <div className="flex-1 space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md bg-white/5 p-1.5">
                <div className={cn("mb-1 h-2 w-6 rounded-full", i === 0 ? style.bar : "bg-white/15")} />
                <div className="h-1 w-8 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-14 rounded-md bg-white/[0.04]" />
            <div className="space-y-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex gap-1">
                  <div className="h-1 flex-1 rounded-full bg-white/10" />
                  <div className="h-1 w-4 rounded-full bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "social") {
    return (
      <div className="grid h-full grid-cols-[1fr_72px] gap-2 p-3">
        <div className="space-y-2">
          {[0, 1].map((i) => (
            <div key={i} className="rounded-md border border-white/5 bg-white/[0.03] p-2">
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className={cn("h-3 w-3 rounded-full", style.bar)} />
                <div className="h-1 w-10 rounded-full bg-white/15" />
              </div>
              <div className={cn("mb-1.5 h-8 rounded-md bg-gradient-to-br", style.gradient)} />
              <div className="h-1 w-full rounded-full bg-white/10" />
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-6 rounded-md bg-white/5" />
          ))}
        </div>
      </div>
    );
  }

  if (preview === "ai") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 p-4">
        <div className="flex items-center justify-center gap-2">
          <div className={cn("h-6 w-6 rounded-lg", style.bar, "opacity-80")} />
          <div className="h-px w-8 bg-white/20" />
          <div className="h-5 w-5 rounded-full border border-white/20 bg-white/5" />
          <div className="h-px w-8 bg-white/20" />
          <div className={cn("h-6 w-6 rounded-lg", style.bar)} />
        </div>
        <div className="mx-auto grid w-full max-w-[180px] grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-8 rounded-md bg-white/5" />
          ))}
        </div>
        <div className={cn("mx-auto h-1.5 w-24 rounded-full", style.bar, "opacity-60")} />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-end p-3">
      <div className="mb-2 flex items-end gap-0.5">
        {[28, 42, 36, 58, 48, 72, 64, 88, 76, 94, 82, 100].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h * 0.45}px` }}
            className={cn("flex-1 rounded-t-sm", i >= 8 ? style.bar : "bg-white/10")}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md bg-white/5 p-1.5">
            <div className={cn("h-1 w-6 rounded-full", i === 0 ? style.bar : "bg-white/15")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SoftwareProjectCard({ project }: { project: SoftwareProject }) {
  const style = ACCENT_STYLES[project.accent];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121821] transition-shadow duration-300",
        style.glow,
        style.border,
      )}
    >
      {/* Browser mockup */}
      <div className="border-b border-white/5 bg-[#0B0F14] p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-success/70" />
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1A2330] px-3 py-1.5">
          <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", style.dot)} />
          <span className="truncate font-mono text-[10px] text-muted">{project.domain}</span>
          <ExternalLink className="ml-auto h-3 w-3 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>

      {/* Preview */}
      <div
        className={cn(
          "relative overflow-hidden border-b border-white/5",
          project.heroImage ? "h-48 bg-black" : cn("h-44 bg-gradient-to-br to-[#0B0F14]", style.gradient),
        )}
      >
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.heroImageAlt ?? `${project.name} website hero`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06),transparent_60%)]" />
            <PreviewMock preview={project.preview} accent={project.accent} />
          </>
        )}
        <div className="absolute bottom-2 right-2 z-10">
          <Badge tone="accent" className={cn("text-[10px]", style.pill)}>
            {project.highlightTag}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="neutral" className="text-[10px]">
            {project.category}
          </Badge>
        </div>

        <h3 className="font-display text-xl font-semibold text-heading transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.features.slice(0, 5).map((feature) => (
            <li
              key={feature}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted"
            >
              {feature}
            </li>
          ))}
          {project.features.length > 5 && (
            <li className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted">
              +{project.features.length - 5} more
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[10px] bg-accent px-4 py-2 text-sm font-semibold text-[#04222b] transition-all hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] hover:brightness-110"
          >
            Visit Platform
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span
            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-[10px] border border-white/10 px-4 py-2 text-sm font-semibold text-muted"
            aria-disabled="true"
            title="Case study coming soon"
          >
            <FileText className="h-3.5 w-3.5" />
            View Case Study
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function SoftwarePortfolioShowcase() {
  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="Real Software Projects"
          title="Software Platforms Built for Growth, Automation, and Operations"
          lede="From CRM platforms and business operating systems to social platforms and AI-powered applications, FTW Agency helps businesses turn ideas into scalable SaaS development products and custom business platforms."
        />
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2">
          {softwarePortfolioProjects.map((project) => (
            <RevealItem key={project.slug}>
              <SoftwareProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}

export function SoftwareBuiltForNeedsSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              className="mb-0 md:mb-0"
              title={softwareBuiltForNeeds.headline}
              lede={softwareBuiltForNeeds.body}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-[#121821] p-6 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
                What We Build
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {softwareBuiltForNeeds.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-[#1A2330] px-3 py-2.5 text-sm text-body"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

const relatedSoftwareServices = [
  { label: "Business Automation", href: "/services/business-automation" },
  { label: "AI Agents", href: "/services/ai-agents" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Website Design", href: "/services/website-design-development" },
  { label: "AIO", href: "/services/aio" },
];

export function SoftwareTrustSection() {
  return (
    <Section surface>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title={softwareTrustSection.headline}
            lede={softwareTrustSection.description}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-[#60d8b8]/20 bg-gradient-to-br from-[#60d8b8]/5 via-[#121821] to-[#0B0F14] p-6 sm:p-8">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-[#60d8b8]">
              Related Services
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {relatedSoftwareServices.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[#60d8b8]/25 bg-[#1A2330] px-4 py-2 text-sm font-medium text-[#60d8b8] transition-colors hover:border-[#60d8b8]/50 hover:bg-[#60d8b8]/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
