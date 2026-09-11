"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import {
  fireCampaignPrimaryCtaClick,
  fireCampaignSecondaryCtaClick,
} from "@/lib/campaigns/conversions";
import {
  getCampaignPortfolioProof,
  getPortfolioHeroImage,
} from "@/lib/campaigns/content";
import { cn } from "@/lib/utils";
import type { WebsiteShowcaseConfig } from "@/content/campaigns/website-design-showcase";

const ROTATE_MS = 3800;

export function WebsiteShowcaseHero({ config }: { config: WebsiteShowcaseConfig }) {
  const formId = getCampaignFormAnchorId();
  const reduceMotion = useReducedMotion();
  const slides = getCampaignPortfolioProof(config.gallerySlugs)
    .map((project) => {
      const src = getPortfolioHeroImage(project);
      if (!src) return null;
      return {
        slug: project.slug,
        title: project.title,
        src,
        alt:
          project.screenshots.find((s) => s.src)?.alt ??
          `${project.title} website homepage`,
      };
    })
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const [index, setIndex] = useState(0);
  const active = slides[index] ?? slides[0];

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length]);

  return (
    <div className="relative overflow-hidden border-b border-white/5 bg-radial-accent">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_20%,rgba(96,216,184,0.1),transparent_55%)]"
        aria-hidden
      />
      <Section className="relative pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow mb-4">{config.eyebrow}</p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] text-heading md:text-5xl lg:text-[3.35rem]">
                <AccentText text={config.headline} />
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">
                {config.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`#${formId}`}
                  onClick={() =>
                    fireCampaignPrimaryCtaClick({
                      campaignName: config.trackingCampaignName,
                      ctaLabel: config.primaryCTA,
                      pagePath: config.path,
                    })
                  }
                  className="inline-flex items-center justify-center rounded-[10px] bg-accent px-7 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
                >
                  {config.primaryCTA}
                </a>
                <a
                  href={config.secondaryHref}
                  {...(config.secondaryHref.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() =>
                    fireCampaignSecondaryCtaClick({
                      campaignName: config.trackingCampaignName,
                      ctaLabel: config.secondaryCTA,
                      pagePath: config.path,
                    })
                  }
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/15 px-7 py-3.5 font-display text-base font-semibold text-heading transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {config.secondaryCTA}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-elevated/80 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  {active ? (
                    <span className="ml-2 truncate text-xs text-muted">
                      {active.title}
                    </span>
                  ) : null}
                </div>

                {/* object-contain so full homepage heroes stay visible (no side crop) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0f14]">
                  {active ? (
                    reduceMotion ? (
                      <Image
                        src={active.src}
                        alt={active.alt}
                        fill
                        className="object-contain object-top"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={active.slug}
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
                          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Image
                            src={active.src}
                            alt={active.alt}
                            fill
                            className="object-contain object-top"
                            priority={index === 0}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </motion.div>
                      </AnimatePresence>
                    )
                  ) : null}
                </div>

                {active ? (
                  <div className="border-t border-white/10 bg-elevated/90 px-4 py-3">
                    <p className="font-display text-sm font-semibold tracking-wide text-heading">
                      {active.title}
                    </p>
                  </div>
                ) : null}
              </div>

              {slides.length > 1 ? (
                <div
                  className="mt-4 flex items-center justify-center gap-2"
                  aria-hidden
                >
                  {slides.map((slide, i) => (
                    <span
                      key={slide.slug}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-500",
                        i === index
                          ? "w-6 bg-accent"
                          : "w-1.5 bg-white/25",
                      )}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
