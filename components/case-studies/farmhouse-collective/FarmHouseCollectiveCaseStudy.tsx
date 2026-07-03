"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Award } from "lucide-react";
import { Container } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SectionLoading } from "@/lib/section-loading";
import {
  farmhouseAward,
  farmhouseCollective,
  farmhouseDigital,
  farmhouseFinalResult,
  farmhouseHero,
  farmhouseHighlights,
  farmhouseParallaxBreaks,
  farmhousePhilosophy,
  farmhouseStory,
} from "@/content/case-studies/farmhouse-collective";
import { CinematicHero } from "./CinematicHero";

const load = (minHeight = 320) => () => <SectionLoading minHeight={minHeight} />;

const ParallaxImageBreak = dynamic(
  () => import("./ParallaxImageBreak").then((m) => ({ default: m.ParallaxImageBreak })),
  { loading: load(400) },
);
const FarmHouseHeroBreak = dynamic(
  () => import("./FarmHouseHeroBreak").then((m) => ({ default: m.FarmHouseHeroBreak })),
  { loading: load(480) },
);
const FarmHouseBrandBreak = dynamic(
  () => import("./FarmHouseBrandBreak").then((m) => ({ default: m.FarmHouseBrandBreak })),
  { loading: load(480) },
);
const FarmHouseBeforeAfterSlider = dynamic(
  () =>
    import("./FarmHouseBeforeAfterSlider").then((m) => ({
      default: m.FarmHouseBeforeAfterSlider,
    })),
  { loading: load(520) },
);
const ScreenshotShowcaseGrid = dynamic(
  () =>
    import("./ScreenshotShowcaseGrid").then((m) => ({
      default: m.ScreenshotShowcaseGrid,
    })),
  { loading: load(560) },
);

export function FarmHouseCollectiveCaseStudy() {
  const cs = farmhouseCollective;

  return (
    <>
      <CinematicHero hero={farmhouseHero} slug={cs.slug} />

      {/* Section 1 — The Story */}
      <section id="the-story" className="scroll-mt-28 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-4">{farmhouseStory.eyebrow}</p>
              <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-[2.75rem]">
                {farmhouseStory.headline}
              </h2>
              <div className="mt-8 space-y-5">
                {farmhouseStory.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-base leading-[1.75] text-body md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={farmhouseStory.image}
                  alt={farmhouseStory.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ParallaxImageBreak
        src={farmhouseParallaxBreaks[0].image}
        alt={farmhouseParallaxBreaks[0].alt}
      />

      {/* Section 2 — The Recognition */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,212,255,0.08),transparent)]" />
        <Container className="relative max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">{farmhouseAward.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-heading md:text-5xl">
              {farmhouseAward.headline}
            </h2>
            <div className="mx-auto mt-10 flex max-w-xs flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-accent/10 shadow-[0_0_40px_rgba(0,212,255,0.15)]">
                <Award className="h-10 w-10 text-accent" strokeWidth={1.5} />
              </div>
              <p className="tnum mt-6 font-display text-5xl font-bold text-accent md:text-6xl">
                {farmhouseAward.year}
              </p>
              <p className="mt-2 text-lg font-semibold text-heading">{farmhouseAward.award}</p>
              <p className="text-sm text-accent">{farmhouseAward.honor}</p>
            </div>
            <p className="mt-10 text-lg leading-relaxed text-body">
              FarmHouse Collective received the{" "}
              <span className="font-semibold text-heading">
                2026 Preservation Design Award — Trustees&apos; Award for Excellence
              </span>
              , recognizing the project&apos;s commitment to preserving Riverside&apos;s architectural
              heritage while creating a vibrant destination for future generations.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Section 3 — Designing the Digital Experience */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/8 shadow-[0_0_60px_rgba(0,212,255,0.08)]">
                <Image
                  src={farmhouseDigital.image}
                  alt={farmhouseDigital.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <p className="eyebrow mb-4">{farmhouseDigital.eyebrow}</p>
              <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl">
                {farmhouseDigital.headline}
              </h2>
              <p className="mt-6 text-base leading-[1.75] text-body md:text-lg">
                {farmhouseDigital.body}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {farmhouseDigital.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-white/5 bg-[#121821] px-4 py-3 text-sm font-medium text-heading"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <FarmHouseHeroBreak />

      {/* Section 4 — Before & After */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="max-w-5xl">
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">Before & After</p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              From Overlooked Motel to Riverside Destination
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-body">
              Start with the 1953 origin story, then slide left to reveal how FarmHouse Collective
              transformed the property decades later.
            </p>
          </Reveal>
          <Reveal>
            <FarmHouseBeforeAfterSlider />
          </Reveal>
        </Container>
      </section>

      {/* Section 5 — Inside the Experience */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 md:mb-16">
            <p className="eyebrow mb-3">Inside the Experience</p>
            <h2 className="max-w-2xl text-3xl font-semibold text-heading md:text-[2.75rem]">
              A Website Built Like an Editorial Feature
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-body">
              Large photography, glass surfaces, and immersive layouts — every screen designed to feel
              like walking through FarmHouse Collective.
            </p>
          </Reveal>
          <ScreenshotShowcaseGrid />
        </Container>
      </section>

      <FarmHouseBrandBreak />

      {/* Section 6 — Design Philosophy */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">Design Philosophy</p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              Three Principles That Guided Every Decision
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-8 md:grid-cols-3">
            {farmhousePhilosophy.map((item) => (
              <RevealItem key={item.title}>
                <div className="h-full border-t border-accent/30 pt-8">
                  <h3 className="font-display text-2xl font-semibold text-heading">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-body">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Section 7 — Project Highlights */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">Project Highlights</p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              By the Numbers
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farmhouseHighlights.map((item) => (
              <RevealItem key={item.label}>
                <div className="glass rounded-2xl border border-white/8 p-8 text-center">
                  <p className="tnum font-display text-3xl font-bold text-accent md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-body">{item.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Section 8 — Final Result */}
      <section className="py-24 md:py-32">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">{farmhouseFinalResult.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-heading md:text-5xl md:leading-[1.1]">
              {farmhouseFinalResult.headline}
            </h2>
            <div className="mt-8 space-y-5">
              {farmhouseFinalResult.paragraphs.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-body md:text-xl">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_120%,rgba(0,212,255,0.18),transparent)]" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-semibold md:text-5xl md:leading-[1.1]">
                  Exceptional Places Deserve Exceptional Digital Experiences
                </h2>
                <p className="mt-5 text-lg text-body">
                  From historic landmarks to modern destinations — FTW builds digital experiences
                  that feel as considered as the places they represent.
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
