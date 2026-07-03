"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexBuyerPersonas, vertexImages } from "@/content/case-studies/vertex-services";
import { SectionIntro, SteelPanel } from "./VertexChrome";

function VertexLogoMark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const dimensions =
    size === "lg"
      ? { width: 200, height: 100, className: "h-[72px] w-auto md:h-[88px]" }
      : { width: 96, height: 48, className: "h-8 w-auto" };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={vertexImages.logo}
      alt="Vertex Services"
      width={dimensions.width}
      height={dimensions.height}
      decoding="async"
      className={cn("shrink-0 object-contain object-center", dimensions.className)}
    />
  );
}

export function VertexBuyerPersonas() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<(typeof vertexBuyerPersonas)[number]["id"]>(
    vertexBuyerPersonas[0].id,
  );

  const active = vertexBuyerPersonas.find((p) => p.id === activeId) ?? vertexBuyerPersonas[0];

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Understanding the Buyer"
            headline="Designed Around Commercial Decision Makers"
            body="Instead of generic website copy, the system was built for the people who actually hire Vertex — each with different urgency, concerns, and buying priorities."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col gap-2">
            {vertexBuyerPersonas.map((persona) => {
              const isActive = persona.id === activeId;
              return (
                <button
                  key={persona.id}
                  type="button"
                  onMouseEnter={() => setActiveId(persona.id)}
                  onFocus={() => setActiveId(persona.id)}
                  onClick={() => setActiveId(persona.id)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-4 py-4 text-left transition-all duration-300",
                    isActive
                      ? "border-accent/35 bg-accent/[0.06] shadow-[0_0_24px_rgba(0,212,255,0.08)]"
                      : "border-white/8 bg-[#121821] hover:border-white/15",
                  )}
                >
                  <span className="font-semibold text-heading">{persona.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <VertexLogoMark size="sm" />
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isActive ? "text-accent" : "text-muted",
                      )}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <SteelPanel className="border-accent/20 p-6 md:p-8">
            <motion.div
              key={active.id}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
            >
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-2 text-accent">Buyer Profile</p>
                <h3 className="text-2xl font-semibold text-heading">{active.title}</h3>
                <dl className="mt-6 space-y-5">
                  <Detail label="Primary concern" value={active.concern} />
                  <Detail label="Urgency" value={active.urgency} />
                  <Detail label="Buying priorities" value={active.priorities} />
                  <Detail label="How the system responds" value={active.solution} highlight />
                </dl>
              </div>
              <div className="flex shrink-0 items-start justify-center md:justify-end md:pt-2">
                <VertexLogoMark size="lg" />
              </div>
            </motion.div>
          </SteelPanel>
        </div>
      </Container>
    </section>
  );
}

function Detail({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{label}</dt>
      <dd
        className={cn(
          "mt-1.5 text-sm leading-relaxed",
          highlight ? "text-accent/90" : "text-body",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
