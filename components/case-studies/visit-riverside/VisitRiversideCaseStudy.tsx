"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Calendar,
  LayoutGrid,
  MapPin,
  Navigation,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { Container, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionLoading } from "@/lib/section-loading";
import {
  visitRiverside,
  visitRiversideChallenge,
  visitRiversideHighlights,
  visitRiversideImages,
  visitRiversidePhilosophy,
  visitRiversideResult,
  visitRiversideStrategy,
} from "@/content/case-studies/visit-riverside";
import { VisitRiversideHero } from "./VisitRiversideHero";

const load = (minHeight = 320) => () => <SectionLoading minHeight={minHeight} />;

const ExploreCategorySection = dynamic(
  () =>
    import("./ExploreCategorySection").then((m) => ({
      default: m.ExploreCategorySection,
    })),
  { loading: load(560) },
);
const VisitorJourneySection = dynamic(
  () =>
    import("./VisitorJourneySection").then((m) => ({
      default: m.VisitorJourneySection,
    })),
  { loading: load(520) },
);
const DiscoveryBeforeAfter = dynamic(
  () =>
    import("./DiscoveryBeforeAfter").then((m) => ({
      default: m.DiscoveryBeforeAfter,
    })),
  { loading: load(480) },
);
const PlatformFeatureGrid = dynamic(
  () =>
    import("./PlatformFeatureGrid").then((m) => ({
      default: m.PlatformFeatureGrid,
    })),
  { loading: load(480) },
);

const STRATEGY_PILLAR_ICONS = [
  LayoutGrid,
  MapPin,
  Calendar,
  Smartphone,
  TrendingUp,
  Navigation,
] as const;

export function VisitRiversideCaseStudy() {
  const cs = visitRiverside;

  return (
    <>
      <VisitRiversideHero slug={cs.slug} />

      {/* Section 1 — The Challenge */}
      <section
        id="the-challenge"
        className="relative scroll-mt-28 overflow-hidden py-20 md:min-h-[720px] md:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="relative h-full min-h-[520px] w-full md:min-h-[720px]">
            <Image
              src={visitRiversideImages.challengeBg}
              alt=""
              fill
              className="object-cover object-center brightness-[1.02] contrast-[1.06] saturate-[0.98]"
              sizes="100vw"
              quality={100}
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-[#0B0F14]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/78 via-[#0B0F14]/28 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/55 via-transparent to-[#0B0F14]/10" />
        </div>

        <Container className="relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">{visitRiversideChallenge.eyebrow}</p>
              <h2 className="text-3xl font-semibold leading-tight text-white drop-shadow-sm md:text-4xl lg:text-[2.75rem]">
                {visitRiversideChallenge.headline}
              </h2>
              <div className="mt-8 space-y-5">
                {visitRiversideChallenge.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-base leading-[1.75] text-white/90 drop-shadow-sm md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {visitRiversideChallenge.questions.map((q) => (
                  <li
                    key={q}
                    className="rounded-xl border border-white/15 bg-[#0B0F14]/65 px-4 py-3 text-sm text-white/90"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="sticky top-28 rounded-2xl border border-white/15 bg-[#0B0F14]/70 p-6 md:p-7">
                <p className="eyebrow mb-5">Platform Highlights</p>
                <div className="space-y-5">
                  {visitRiversideChallenge.highlights.map((item) => (
                    <div key={item.title} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-white/75">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Section 2 — The Strategy */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-4">{visitRiversideStrategy.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl">
              {visitRiversideStrategy.headline}
            </h2>
            <p className="mt-6 text-base leading-[1.75] text-body md:text-lg">
              {visitRiversideStrategy.body}
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {visitRiversideStrategy.pillars.map((pillar, i) => {
                const Icon = STRATEGY_PILLAR_ICONS[i] ?? LayoutGrid;
                return (
                  <li
                    key={pillar}
                    className="flex items-center gap-3 rounded-xl border border-[#60d8b8]/25 bg-[#121821]/80 p-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#60d8b8]/30 bg-[#60d8b8]/15 shadow-[0_0_20px_rgba(96,216,184,0.35)]">
                      <Icon className="h-4 w-4 text-[#60d8b8]" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm leading-snug text-body">{pillar}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Section 3 — The Execution */}
      <ExploreCategorySection />

      {/* Section 4 — Visitor Journey */}
      <section className="bg-surface">
        <VisitorJourneySection />
      </section>

      {/* Section 5 — The Gap → The Platform */}
      <section className="py-20 md:py-28">
        <Container className="max-w-6xl">
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">
              <span className="text-red-500">The Gap</span>
              <span className="text-green-500"> → The Platform</span>
            </p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              Building Riverside&apos;s First Official Discovery Platform
            </h2>
          </Reveal>
          <DiscoveryBeforeAfter />
        </Container>
      </section>

      {/* Section 6 — What We Built */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 md:mb-16">
            <p className="eyebrow mb-3">What We Built</p>
            <h2 className="max-w-2xl text-3xl font-semibold text-heading md:text-[2.75rem]">
              Inside the Visit Riverside Platform
            </h2>
          </Reveal>
          <PlatformFeatureGrid />
        </Container>
      </section>

      {/* Section 7 — Design Philosophy */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">Design Philosophy</p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              A City Platform Should Feel Alive
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {visitRiversidePhilosophy.map((item) => (
              <RevealItem key={item.title}>
                <div className="h-full border-t border-accent/30 pt-8">
                  <h3 className="font-display text-xl font-semibold text-heading md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-body">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Section 8 — Project Highlights */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">Project Highlights</p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              Built for Discovery at City Scale
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visitRiversideHighlights.map((item) => (
              <RevealItem key={item.label}>
                <div className="glass rounded-2xl border border-white/8 p-8 text-center">
                  <p className="font-display text-2xl font-bold text-accent md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-body">{item.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Section 9 — Result */}
      <section className="py-24 md:py-32">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">{visitRiversideResult.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-heading md:text-5xl md:leading-[1.1]">
              {visitRiversideResult.headline}
            </h2>
            <div className="mt-8 space-y-5">
              {visitRiversideResult.paragraphs.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-body md:text-xl">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Section surface className="!py-12 md:!py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <TestimonialCard testimonial={cs.testimonial} />
          </Reveal>
        </Container>
      </Section>

      {/* Section 11 — CTA */}
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_120%,rgba(0,212,255,0.18),transparent)]" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-semibold md:text-5xl md:leading-[1.1]">
                  Ready to Build a Platform People Actually Use?
                </h2>
                <p className="mt-5 text-lg text-body">
                  Whether you are building a tourism website, local directory, city guide, community
                  platform, or content-driven brand, FTW Agency designs digital experiences that
                  organize information and turn attention into action.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Button href="/contact" size="lg" showArrow>
                    Schedule Strategy Call
                  </Button>
                  <Button href="/portfolio" variant="ghost" size="lg">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
