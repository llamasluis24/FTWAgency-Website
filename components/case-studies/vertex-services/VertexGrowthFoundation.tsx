"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexGrowthPillars } from "@/content/case-studies/vertex-services";
import { BlueprintGrid, SectionIntro, SteelPanel } from "./VertexChrome";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function splitPillars(pillars: readonly string[]) {
  const left: string[] = [];
  const right: string[] = [];
  pillars.forEach((pillar, index) => {
    if (index % 2 === 0) left.push(pillar);
    else right.push(pillar);
  });
  return { left, right };
}

function PillarNode({
  label,
  index,
  visible,
}: {
  label: string;
  index: number;
  visible: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0.5, y: visible ? 0 : 4 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
      className="relative z-10"
    >
      <SteelPanel
        className={cn(
          "px-4 py-3.5 transition-colors duration-300",
          visible
            ? "border-[#60d8b8]/30 bg-[#121821]/95 shadow-[0_0_24px_rgba(96,216,184,0.08)]"
            : "border-white/8 bg-[#121821]/70",
        )}
      >
        <p className="text-sm font-medium leading-snug text-heading md:text-[0.9375rem]">
          {label}
        </p>
      </SteelPanel>
    </motion.div>
  );
}

function PillarColumn({
  items,
  side,
  expanded,
  endBulb = false,
}: {
  items: string[];
  side: "left" | "right";
  expanded: number;
  endBulb?: boolean;
}) {
  const startIndex = side === "left" ? 0 : 1;
  const lineClass = "left-1/2 -translate-x-1/2";

  return (
    <div className="relative flex flex-1 flex-col">
      <div className={cn("relative", endBulb && "pb-3 sm:pb-4")}>
        {/* Bulb where horizontal bus meets this column */}
        <div
          className={cn(
            "pointer-events-none absolute top-0 z-20 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#60d8b8] shadow-[0_0_10px_rgba(96,216,184,0.65)] sm:block",
            lineClass,
          )}
          aria-hidden
        />

        {/* Vertical line — through boxes; right column stops just past last box */}
        <div
          className={cn(
            "pointer-events-none absolute top-0 bottom-0 z-0 hidden w-px bg-[#60d8b8]/55 sm:block",
            lineClass,
          )}
          aria-hidden
        />

        {/* Bottom bulb (right column) */}
        {endBulb && (
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 z-20 hidden h-2 w-2 translate-y-1/2 rounded-full bg-[#60d8b8] shadow-[0_0_10px_rgba(96,216,184,0.65)] sm:block",
              lineClass,
            )}
            aria-hidden
          />
        )}

        <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4">
          {items.map((pillar, index) => {
            const globalIndex = startIndex + index * 2;
            return (
              <PillarNode
                key={pillar}
                label={pillar}
                index={index}
                visible={globalIndex < expanded}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function VertexGrowthFoundation() {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState<number>(vertexGrowthPillars.length);
  const { left, right } = useMemo(() => splitPillars(vertexGrowthPillars), []);

  useEffect(() => {
    if (reduceMotion) {
      setExpanded(vertexGrowthPillars.length);
      return;
    }
    setExpanded(3);
    const timer = window.setInterval(() => {
      setExpanded((n) => (n >= vertexGrowthPillars.length ? 3 : n + 1));
    }, 1200);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <BlueprintGrid className="opacity-40" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(96,216,184,0.06),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <SectionIntro
            eyebrow="The Foundation for Growth"
            headline="Built to Scale Alongside the Business"
            body="The platform supports future expansion — new services, locations, content, and local search growth without rebuilding from scratch."
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Core hub */}
          <div className="relative z-10 flex justify-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative w-full max-w-md"
            >
              <SteelPanel
                glow
                className="relative overflow-hidden border-[#60d8b8]/35 px-8 py-5 text-center shadow-[0_0_40px_rgba(96,216,184,0.15)] md:px-10"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(96,216,184,0.12),transparent_70%)]"
                  aria-hidden
                />
                <div className="relative flex flex-col items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#60d8b8]/30 bg-[#60d8b8]/10">
                    <Layers className="h-5 w-5 text-[#60d8b8]" strokeWidth={1.75} />
                  </span>
                  <p className="font-display text-base font-semibold text-heading md:text-lg">
                    Vertex Acquisition Core
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#60d8b8]/80">
                    Scalable growth infrastructure
                  </p>
                </div>
              </SteelPanel>

              {/* Stem from core down to connector bus */}
              <div
                className="pointer-events-none absolute left-1/2 top-full hidden h-12 w-px -translate-x-1/2 bg-[#60d8b8]/70 sm:block"
                aria-hidden
              />
            </motion.div>
          </div>

          {/* Connector bridge: core stem → horizontal bus (ends at each column bulb) */}
          <div
            className="relative z-10 mx-auto hidden h-12 max-w-3xl sm:block"
            aria-hidden
          >
            {/* Horizontal bus — column center to column center */}
            <div className="absolute bottom-0 left-[calc((100%-2rem)/4)] right-[calc((100%-2rem)/4)] h-px bg-[#60d8b8]/60 md:left-[calc((100%-3rem)/4)] md:right-[calc((100%-3rem)/4)]" />

            {/* Center junction where core stem meets bus */}
            <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#60d8b8] shadow-[0_0_10px_rgba(96,216,184,0.6)]" />
          </div>

          {/* Mobile stem */}
          <div className="relative z-10 mx-auto flex justify-center sm:hidden" aria-hidden>
            <div className="h-6 w-px bg-[#60d8b8]/60" />
          </div>

          {/* Columns — vertical lines start at bulbs and run straight through boxes */}
          <div className="relative z-10 flex items-start gap-8 md:gap-12">
            <PillarColumn items={left} side="left" expanded={expanded} endBulb />
            <PillarColumn items={right} side="right" expanded={expanded} endBulb />
          </div>
        </div>
      </Container>
    </section>
  );
}
