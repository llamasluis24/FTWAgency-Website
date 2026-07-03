"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexSalesFunnel } from "@/content/case-studies/vertex-services";
import { BlueprintGrid, SectionIntro } from "./VertexChrome";
import { VertexSalesFunnel } from "./VertexSalesFunnel";

export function VertexBeforeAfter() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <BlueprintGrid className="opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(0,212,255,0.06),transparent)]" />
      <Container className="relative max-w-4xl">
        <Reveal className="text-center">
          <SectionIntro
            eyebrow={vertexSalesFunnel.eyebrow}
            headline={vertexSalesFunnel.headline}
            body={vertexSalesFunnel.body}
            centered
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-8 overflow-visible">
          <VertexSalesFunnel />
        </Reveal>
      </Container>
    </section>
  );
}
