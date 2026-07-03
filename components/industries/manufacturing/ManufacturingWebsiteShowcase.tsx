"use client";

import { ArrowRight, ArrowUpRight, Check, Factory, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { manufacturingWebsiteModules } from "@/content/industries/modules/manufacturing-website-modules";
import { cn } from "@/lib/utils";

type Capability = (typeof manufacturingWebsiteModules.showcase.capabilities)[number];

function SiteNav({
  siteName,
  tagline,
  phone,
}: {
  siteName: string;
  tagline: string;
  phone: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 bg-white px-4 py-3 sm:px-6">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600">
          <Factory className="h-4 w-4 text-white" />
        </span>
        <div>
          <p className="font-display text-sm font-bold leading-tight text-slate-900">{siteName}</p>
          <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500">
            {tagline}
          </p>
        </div>
      </div>
      <nav className="hidden items-center gap-5 text-[11px] font-medium text-slate-600 md:flex">
        {["Capabilities", "Industries", "Certifications", "Case Studies", "Contact"].map((item) => (
          <span key={item} className="cursor-default hover:text-orange-600">
            {item}
          </span>
        ))}
      </nav>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-2 text-[11px] font-semibold text-white"
      >
        <Phone className="h-3 w-3" />
        {phone}
      </button>
    </div>
  );
}

function SiteHero({
  hero,
}: {
  hero: typeof manufacturingWebsiteModules.showcase.hero;
}) {
  const parts = hero.headline.split(hero.headlineAccent);

  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover opacity-40 sm:opacity-50"
        style={{ backgroundImage: `url(${hero.heroImage})`, backgroundPosition: "70% center" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white from-35% via-white/95 to-white/70"
        aria-hidden
      />

      <div className="relative px-4 py-8 sm:px-8 sm:py-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          {hero.badge}
        </span>

        <h3 className="mt-4 max-w-lg font-display text-2xl font-bold leading-[1.15] tracking-tight !text-slate-950 sm:text-[1.75rem]">
          {parts[0]}
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text font-bold !text-transparent">
            {hero.headlineAccent}
          </span>
          {parts[1]}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-700">{hero.subheadline}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white"
          >
            {hero.primaryCta}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800"
          >
            <Phone className="h-3.5 w-3.5" />
            Call {hero.secondaryCta}
          </button>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {hero.trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-1.5 text-[10px] font-medium text-slate-600">
              <Check className="h-3 w-3 text-orange-600" strokeWidth={2.5} />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CapabilityTile({ capability, index }: { capability: Capability; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={cn(
        "group relative min-h-[140px] overflow-hidden rounded-2xl sm:min-h-0",
        capability.layout === "large" && "col-span-2 row-span-2 sm:col-span-1 sm:min-h-[280px]",
        capability.layout === "tall" && "col-span-1 row-span-2 sm:min-h-[280px]",
        capability.layout === "medium" && "col-span-1 row-span-1 min-h-[130px]",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={capability.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-white/70">
          {capability.type}
        </p>
        <p className="mt-0.5 font-display text-sm font-semibold text-white">{capability.name}</p>
        <p className="tnum mt-1 text-xs font-medium text-orange-200">{capability.detail}</p>
      </div>
    </motion.article>
  );
}

function CapabilityGallery({
  gallery,
  capabilities,
}: {
  gallery: typeof manufacturingWebsiteModules.showcase.gallery;
  capabilities: Capability[];
}) {
  return (
    <div className="border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-600">
            {gallery.eyebrow}
          </p>
          <h4 className="font-display text-xl font-bold !text-slate-950 sm:text-2xl">
            {gallery.title}
          </h4>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 hover:text-orange-600"
        >
          {gallery.cta}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1.4fr_1fr_0.85fr] sm:grid-rows-2">
        {capabilities.map((capability, i) => (
          <CapabilityTile key={capability.name} capability={capability} index={i} />
        ))}
      </div>
    </div>
  );
}

export function ManufacturingWebsiteShowcase({
  content,
}: {
  content: typeof manufacturingWebsiteModules.showcase;
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white text-slate-900 shadow-[0_0_48px_rgba(0,212,255,0.08)] [&_h3]:!text-slate-950 [&_h4]:!text-slate-950">
            <div className="border-b border-slate-200 bg-slate-100 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="mx-auto text-[10px] text-slate-500">{content.siteUrl}</span>
              </div>
            </div>

            <SiteNav
              siteName={content.siteName}
              tagline={content.tagline}
              phone={content.hero.secondaryCta}
            />
            <SiteHero hero={content.hero} />
            <CapabilityGallery
              gallery={content.gallery}
              capabilities={[...content.capabilities]}
            />

            <div className="grid grid-cols-3 gap-3 border-t border-slate-200 bg-white px-4 py-5 sm:px-8">
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="tnum font-display text-xl font-bold text-orange-600">{stat.value}</p>
                  <p className="mt-1 text-[10px] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
