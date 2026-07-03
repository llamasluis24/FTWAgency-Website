"use client";

import dynamic from "next/dynamic";
import { Container, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  vertexFinal,
  vertexHighlights,
  vertexServices,
} from "@/content/case-studies/vertex-services";
import { VertexHero } from "./VertexHero";
import { SectionLoading } from "@/lib/section-loading";

const load = (minHeight = 320) => () => <SectionLoading minHeight={minHeight} />;

const VertexChallengeSection = dynamic(
  () => import("./VertexChallengeSection").then((m) => ({ default: m.VertexChallengeSection })),
  { loading: load(400) },
);
const VertexBuyerPersonas = dynamic(
  () => import("./VertexBuyerPersonas").then((m) => ({ default: m.VertexBuyerPersonas })),
  { loading: load(480) },
);
const VertexDigitalSalesSystem = dynamic(
  () =>
    import("./VertexDigitalSalesSystem").then((m) => ({
      default: m.VertexDigitalSalesSystem,
    })),
  { loading: load(400) },
);
const VertexSearchArchitecture = dynamic(
  () =>
    import("./VertexSearchArchitecture").then((m) => ({
      default: m.VertexSearchArchitecture,
    })),
  { loading: load(520) },
);
const VertexGbpSection = dynamic(
  () => import("./VertexGbpSection").then((m) => ({ default: m.VertexGbpSection })),
  { loading: load(480) },
);
const VertexWebsiteExperience = dynamic(
  () =>
    import("./VertexWebsiteExperience").then((m) => ({
      default: m.VertexWebsiteExperience,
    })),
  { loading: load(520) },
);
const VertexFeaturesGrid = dynamic(
  () => import("./VertexFeaturesGrid").then((m) => ({ default: m.VertexFeaturesGrid })),
  { loading: load(400) },
);
const VertexGrowthFoundation = dynamic(
  () =>
    import("./VertexGrowthFoundation").then((m) => ({
      default: m.VertexGrowthFoundation,
    })),
  { loading: load(480) },
);
const VertexBeforeAfter = dynamic(
  () => import("./VertexBeforeAfter").then((m) => ({ default: m.VertexBeforeAfter })),
  { loading: load(560) },
);

export function VertexServicesCaseStudy() {
  const cs = vertexServices;

  return (
    <>
      <VertexHero slug={cs.slug} />
      <VertexChallengeSection />
      <VertexBuyerPersonas />
      <VertexDigitalSalesSystem />
      <VertexSearchArchitecture />
      <VertexGbpSection />
      <VertexWebsiteExperience />
      <VertexFeaturesGrid />
      <VertexGrowthFoundation />
      <VertexBeforeAfter />

      {/* Section 10 — Project Highlights */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="eyebrow mb-3">Project Highlights</p>
            <h2 className="text-3xl font-semibold text-heading md:text-[2.75rem]">
              System Components Delivered
            </h2>
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vertexHighlights.map((item) => (
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

      {/* Section 11 — Final Message */}
      <section className="py-24 md:py-32">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">{vertexFinal.eyebrow}</p>
            <h2 className="text-3xl font-semibold leading-tight text-heading md:text-5xl md:leading-[1.1]">
              {vertexFinal.headline}
            </h2>
            <div className="mt-8 space-y-5">
              {vertexFinal.paragraphs.map((p) => (
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

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_120%,rgba(0,212,255,0.18),transparent)]" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-semibold md:text-5xl md:leading-[1.1]">
                  Ready to Build a Business That Gets Found?
                </h2>
                <p className="mt-5 text-lg text-body">
                  Whether you run commercial service operations, field teams, or multi-location
                  maintenance programs, FTW designs acquisition systems that turn search into
                  scheduled work.
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
