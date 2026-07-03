"use client";

import {
  Camera,
  Globe,
  Layers,
  MapPin,
  Search,
  Smartphone,
  Target,
  Zap,
} from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexFeatures } from "@/content/case-studies/vertex-services";
import { SectionIntro, SteelPanel } from "./VertexChrome";

const ICONS = {
  globe: Globe,
  search: Search,
  map: MapPin,
  target: Target,
  camera: Camera,
  layers: Layers,
  smartphone: Smartphone,
  zap: Zap,
} as const;

export function VertexFeaturesGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="What We Built" headline="A Complete Commercial Acquisition System" />
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vertexFeatures.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <RevealItem key={feature.title}>
                <SteelPanel className="group h-full border-white/8 p-6 transition-colors duration-300 hover:border-[#60d8b8]/25">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#60d8b8]/25 bg-[#60d8b8]/[0.06] text-[#60d8b8] transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(96,216,184,0.12)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-heading">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{feature.description}</p>
                </SteelPanel>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
