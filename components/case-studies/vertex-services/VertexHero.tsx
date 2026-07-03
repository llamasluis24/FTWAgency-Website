"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  CalendarCheck,
  Globe,
  MapPin,
  Phone,
  Repeat,
  Search,
  FileText,
  Wrench,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  vertexEcosystemSteps,
  vertexHero,
  vertexImages,
} from "@/content/case-studies/vertex-services";
import { BlueprintGrid, SteelPanel } from "./VertexChrome";

const STEP_ICONS = {
  search: Search,
  gbp: MapPin,
  website: Globe,
  services: Wrench,
  quote: FileText,
  phone: Phone,
  scheduled: CalendarCheck,
  return: Repeat,
} as const;

const ECOSYSTEM_SCROLL_RANGE = 0.48;

export function VertexHero({ slug }: { slug: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduceMotion) return;
    const progress = Math.min(1, v / ECOSYSTEM_SCROLL_RANGE);
    const idx = Math.min(
      vertexEcosystemSteps.length - 1,
      Math.floor(progress * vertexEcosystemSteps.length),
    );
    setActiveStep(idx);
  });

  return (
    <section ref={ref} className="relative min-h-[110vh] overflow-hidden bg-[#0B0F14]">
      <BlueprintGrid className="[mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_35%,rgba(0,212,255,0.1),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-transparent to-[#0B0F14]" />

      <div className="relative z-10 mx-auto flex min-h-[110vh] max-w-7xl flex-col px-4 pb-16 pt-28 sm:px-6 md:pb-20 md:pt-32 lg:px-8">
        <div className="grid flex-1 items-stretch gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div className="flex min-h-[72vh] flex-col justify-between lg:min-h-[calc(110vh-10rem)]">
            {/* Static logo — kept outside scroll transforms to stay pixel-sharp */}
            <div className="relative flex flex-1 items-start justify-center pt-2 md:justify-start md:pt-4 lg:pt-2">
              <div className="pointer-events-none absolute left-1/2 top-[45%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,212,255,0.14),transparent_70%)] md:left-40 md:translate-x-0 lg:h-72 lg:w-72 xl:h-80 xl:w-80" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={vertexImages.heroLogo}
                alt="Vertex Services"
                width={1774}
                height={887}
                fetchPriority="high"
                decoding="sync"
                className="relative h-auto w-[min(94vw,26rem)] sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem]"
              />
            </div>

            <motion.div
              style={{ opacity, y }}
              className="mt-auto pt-8 lg:pt-10"
            >
              <Breadcrumbs
                items={[
                  { name: "Case Studies", path: "/case-studies" },
                  { name: "Vertex Services", path: `/case-studies/${slug}` },
                ]}
              />
              <p className="eyebrow mb-4 mt-6">{vertexHero.eyebrow}</p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-white md:text-5xl lg:text-[3rem]">
                {vertexHero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
                {vertexHero.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {vertexHero.tags.map((tag) => (
                  <Badge key={tag} tone={tag === "Website Design" ? "accent" : "neutral"}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mt-10 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted lg:flex">
                Scroll to trace the system
                <ArrowDown className="h-3.5 w-3.5 animate-bounce text-accent" />
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity, y }}
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:self-center"
          >
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#60d8b8] lg:text-left">
              Lead Generation Ecosystem
            </p>
            <div className="relative space-y-0">
              {vertexEcosystemSteps.map((step, index) => {
                const Icon = STEP_ICONS[step.id as keyof typeof STEP_ICONS];
                const isActive = !reduceMotion && activeStep === index;
                const isPast = !reduceMotion && activeStep > index;
                return (
                  <div key={step.id} className="relative">
                    <SteelPanel
                      className={cn(
                        "relative flex items-start gap-3 p-3.5 transition-all duration-500 md:p-4",
                        isActive
                          ? "border-[#60d8b8]/40 opacity-100 shadow-[0_0_32px_rgba(96,216,184,0.18)]"
                          : isPast
                            ? "border-[#60d8b8]/20 opacity-90"
                            : "opacity-60",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-shadow duration-500",
                          isActive
                            ? "border-[#60d8b8]/40 bg-[#60d8b8]/15 text-[#60d8b8] shadow-[0_0_24px_rgba(96,216,184,0.35)]"
                            : isPast
                              ? "border-[#60d8b8]/30 bg-[#60d8b8]/5 text-[#60d8b8]/80"
                              : "border-white/10 bg-white/5 text-muted",
                        )}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "tnum text-[10px] font-bold",
                              isActive || isPast ? "text-[#60d8b8]/80" : "text-muted",
                            )}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm font-semibold text-heading">{step.label}</p>
                        </div>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </SteelPanel>
                    {index < vertexEcosystemSteps.length - 1 && (
                      <div className="flex justify-center py-0.5" aria-hidden>
                        <div
                          className={cn(
                            "h-5 w-px transition-colors duration-500",
                            isPast || isActive ? "bg-[#60d8b8]/50" : "bg-white/10",
                          )}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
