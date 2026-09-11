"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Compass,
  GripVertical,
  LayoutGrid,
  MapPinned,
  Navigation,
  Search,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import { InteractiveDirectoryView } from "@/components/case-studies/visit-riverside/InteractiveDirectoryView";
import { JourneyVisual } from "@/components/case-studies/visit-riverside/DestinationUI";
import { VertexSalesFunnel } from "@/components/case-studies/vertex-services/VertexSalesFunnel";
import { WorkflowStageVisual } from "@/components/case-studies/mobilehomecrm/WorkflowStageVisual";
import { farmhouseImages } from "@/content/case-studies/farmhouse-collective";
import {
  visitRiversideCategoryExplorer,
  visitRiversideJourneySteps,
  type VisitRiversideInteractiveCategory,
} from "@/content/case-studies/visit-riverside";
import {
  mobilehomecrmWorkflowStages,
  type WorkflowStageId,
} from "@/content/case-studies/mobilehomecrm-cal-star";
import type { MapCityPin } from "@/lib/map/pins";
import { cn } from "@/lib/utils";

const LocationsMap = dynamic(
  () =>
    import("@/components/locations/LocationsMap").then((mod) => ({
      default: mod.LocationsMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[16/10] w-full animate-pulse rounded-2xl border border-white/10 bg-elevated" />
    ),
  },
);

type DemoCase = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  project: string;
  hint?: string;
};

const CASES: DemoCase[] = [
  {
    id: "visit-riverside-map",
    eyebrow: "Map discovery",
    title: "Explore a city by pin",
    description:
      "A directory that syncs listings with an interactive map — tap a place, see it on the map.",
    project: "Visit Riverside",
    hint: "Tap a pin or listing",
  },
  {
    id: "farmhouse-before-after",
    eyebrow: "Visual storytelling",
    title: "Drag the history open",
    description:
      "A before/after slider that turns restoration into something visitors can feel.",
    project: "Farm House Collective",
    hint: "Drag to compare",
  },
  {
    id: "vertex-funnel",
    eyebrow: "Conversion systems",
    title: "From search to booked job",
    description:
      "An animated sales funnel that shows how search, trust, and contact become work.",
    project: "Vertex Services",
    hint: "Hover the stages",
  },
  {
    id: "mapbox-locations",
    eyebrow: "Location & service pages",
    title: "Markets on Mapbox",
    description:
      "Interactive Mapbox hubs with service-area radius, nearby markets, and deep links into location pages.",
    project: "Location hubs",
    hint: "Click a city pin",
  },
  {
    id: "visit-riverside-journey",
    eyebrow: "Visitor journey",
    title: "From search to showing up",
    description:
      "A Search → Visit journey that auto-plays the path, then lets visitors take over.",
    project: "Visit Riverside",
    hint: "Tap a step",
  },
  {
    id: "cal-star-workflow",
    eyebrow: "Custom software UI",
    title: "Tap through the sales system",
    description:
      "A multi-module sales workflow — auto-plays through every stage, then yours to drive.",
    project: "Cal Star / MobileHomeCRM",
    hint: "Switch modules",
  },
];

const restaurantsCategory = visitRiversideCategoryExplorer.find(
  (c): c is VisitRiversideInteractiveCategory =>
    c.id === "restaurants" && c.interactive === true,
)!;

const JOURNEY_ICONS = {
  search: Search,
  discover: Compass,
  explore: LayoutGrid,
  choose: MapPinned,
  visit: Navigation,
} as const;

const WORKFLOW_TABS: { id: WorkflowStageId; label: string }[] = [
  { id: "lead-capture", label: "Leads" },
  { id: "estimate-builder", label: "Estimates" },
  { id: "proposal-delivery", label: "Proposals" },
  { id: "e-signatures", label: "Signatures" },
  { id: "scheduling", label: "Schedule" },
  { id: "field-operations", label: "Field" },
  { id: "owner-dashboard", label: "Dashboard" },
];

function CompactBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(52);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] cursor-ew-resize select-none overflow-hidden rounded-xl border border-white/10"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onPointerUp={() => {
        dragging.current = false;
      }}
      role="slider"
      aria-label="Farm House Collective before and after comparison"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <Image
        src={farmhouseImages.afterPolaroid}
        alt="Restored Farm House Motel"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 70vw"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-accent"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full" style={{ width: width || "100%" }}>
          <Image
            src={farmhouseImages.beforePolaroid}
            alt="Farm House Motel before restoration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
          />
        </div>
      </div>
      <div
        className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${position}%` }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[#04222b] shadow-[0_0_24px_rgba(0,212,255,0.5)]">
          <GripVertical className="h-5 w-5" strokeWidth={2} />
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-bg/80 px-2.5 py-1 text-[10px] font-semibold text-muted backdrop-blur">
        1953 — Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold text-accent backdrop-blur">
        2024 — After
      </span>
    </div>
  );
}

function CompactVisitorJourney({
  onInteract,
  isActiveSlide,
}: {
  onInteract: () => void;
  isActiveSlide: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const active = visitRiversideJourneySteps[activeIndex]!;
  const ActiveIcon = JOURNEY_ICONS[active.id as keyof typeof JOURNEY_ICONS];

  const goToStep = (index: number, fromUser = false) => {
    setActiveIndex(index);
    if (fromUser) {
      setUserPaused(true);
      onInteract();
    }
  };

  useEffect(() => {
    if (!isActiveSlide || reduceMotion || userPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visitRiversideJourneySteps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [isActiveSlide, reduceMotion, userPaused]);

  useEffect(() => {
    if (!isActiveSlide) {
      setUserPaused(false);
      setActiveIndex(0);
    }
  }, [isActiveSlide]);

  return (
    <div
      onPointerDown={() => {
        setUserPaused(true);
        onInteract();
      }}
    >
      <div className="mb-5 flex items-center justify-between gap-1 overflow-x-auto pb-2 md:gap-0 md:overflow-visible">
        {visitRiversideJourneySteps.map((step, index) => {
          const Icon = JOURNEY_ICONS[step.id as keyof typeof JOURNEY_ICONS];
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <div key={step.id} className="flex flex-1 items-center">
              <button
                type="button"
                onClick={() => goToStep(index, true)}
                aria-pressed={isActive}
                className="group flex min-w-[64px] flex-col items-center gap-2 md:min-w-0"
              >
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 md:h-12 md:w-12",
                    isActive
                      ? "border-[#60d8b8] bg-[#60d8b8]/15 text-[#60d8b8] shadow-[0_0_24px_rgba(96,216,184,0.35)]"
                      : isPast
                        ? "border-[#60d8b8]/40 bg-[#60d8b8]/5 text-[#60d8b8]/80"
                        : "border-white/10 bg-white/5 text-muted group-hover:border-[#60d8b8]/30 group-hover:text-body",
                  )}
                >
                  <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={1.75} />
                </span>
                <span
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-[0.14em] md:text-[11px]",
                    isActive
                      ? "text-[#60d8b8]"
                      : isPast
                        ? "text-[#60d8b8]/70"
                        : "text-muted",
                  )}
                >
                  {step.title}
                </span>
              </button>
              {index < visitRiversideJourneySteps.length - 1 ? (
                <div
                  className={cn(
                    "mx-1 hidden h-px flex-1 transition-colors duration-300 md:block",
                    index < activeIndex ? "bg-[#60d8b8]/50" : "bg-white/10",
                  )}
                  aria-hidden
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#121821]/80 shadow-[0_0_60px_rgba(0,212,255,0.06)] backdrop-blur-sm">
        <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative flex min-h-[200px] flex-col justify-center border-b border-white/8 p-5 md:p-7 lg:min-h-[320px] lg:border-b-0 lg:border-r">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <ActiveIcon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Step {active.step} — {active.title}
                  </p>
                </div>
                <h4 className="mt-4 font-display text-2xl font-semibold leading-tight text-heading md:text-[1.75rem]">
                  {active.headline}
                </h4>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-body md:text-base">
                  {active.body}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  {visitRiversideJourneySteps.map((step, i) => (
                    <button
                      key={step.id}
                      type="button"
                      aria-label={`Go to ${step.title}`}
                      onClick={() => goToStep(i, true)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-white/15 hover:bg-white/30",
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative min-h-[260px] bg-[#0B0F14] p-4 md:min-h-[340px] md:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,212,255,0.06),transparent)]" />
            <div className="relative h-full min-h-[232px] md:min-h-[292px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, scale: 1.02, filter: "blur(4px)" }
                  }
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <JourneyVisual stepId={active.id} variant="large" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-muted">
        {userPaused
          ? "Tap a step to continue exploring"
          : "Auto-playing — tap any step to take over"}
      </p>
    </div>
  );
}

function CompactCalStarWorkflow({
  onInteract,
  isActiveSlide,
}: {
  onInteract: () => void;
  isActiveSlide: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [stageIndex, setStageIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const stageId = WORKFLOW_TABS[stageIndex]!.id;
  const stage = mobilehomecrmWorkflowStages.find((s) => s.id === stageId);

  const goToStage = (index: number, fromUser = false) => {
    setStageIndex(index);
    if (fromUser) {
      setUserPaused(true);
      onInteract();
    }
  };

  useEffect(() => {
    if (!isActiveSlide || reduceMotion || userPaused) return;
    const id = window.setInterval(() => {
      setStageIndex((current) => (current + 1) % WORKFLOW_TABS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [isActiveSlide, reduceMotion, userPaused]);

  useEffect(() => {
    if (!isActiveSlide) {
      setUserPaused(false);
      setStageIndex(0);
    }
  }, [isActiveSlide]);

  return (
    <div
      onPointerDown={() => {
        setUserPaused(true);
        onInteract();
      }}
    >
      <div className="mb-5 flex flex-wrap gap-2">
        {WORKFLOW_TABS.map((tab, index) => {
          const isActive = index === stageIndex;
          const isPast = index < stageIndex;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => goToStage(index, true)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-300",
                isActive
                  ? "border-accent/50 bg-accent/15 text-accent shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  : isPast
                    ? "border-accent/25 bg-accent/5 text-accent/80"
                    : "border-white/10 text-body hover:border-white/25",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          "overflow-hidden rounded-3xl border px-5 py-8 transition-[border-color,box-shadow,background-color] duration-500 md:px-7 md:py-10",
          "border-accent/20 bg-accent/[0.03] shadow-[0_0_80px_rgba(0,212,255,0.06)]",
        )}
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              {stage ? (
                <motion.div
                  key={stage.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: 12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {stage.step} — {stage.eyebrow}
                  </p>
                  <h4 className="font-display text-2xl font-semibold leading-tight text-heading md:text-3xl">
                    {stage.headline}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-body md:text-base">
                    {stage.body}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {stage.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-body"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15">
                          <Check className="h-3 w-3 text-success" strokeWidth={2.5} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2">
                    {WORKFLOW_TABS.map((tab, i) => (
                      <button
                        key={tab.id}
                        type="button"
                        aria-label={`Show ${tab.label}`}
                        onClick={() => goToStage(i, true)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          i === stageIndex
                            ? "w-8 bg-accent"
                            : "w-1.5 bg-white/15 hover:bg-white/30",
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={stageId}
                initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, y: -10, scale: 1.01 }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <WorkflowStageVisual stageId={stageId} active />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-muted">
        {userPaused
          ? "Tap a module to keep exploring"
          : "Auto-playing — tap any module to take over"}
      </p>
    </div>
  );
}

function CompactMapboxLocations({
  pins,
  onInteract,
}: {
  pins: MapCityPin[];
  onInteract: () => void;
}) {
  const focusSlug =
    pins.find((pin) => pin.slug === "riverside-ca")?.slug ?? pins[0]?.slug;

  if (pins.length === 0) {
    return (
      <p className="text-sm text-muted">
        Location map pins are unavailable in this environment.
      </p>
    );
  }

  return (
    <div onPointerDown={onInteract} onWheel={onInteract}>
      <LocationsMap
        pins={pins}
        mode="city"
        focusSlug={focusSlug}
        className="lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)]"
      />
    </div>
  );
}

function useInView(threshold = 0.35) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold, rootMargin: "-10% 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function DemoStage({
  caseId,
  inView,
  mapPins,
}: {
  caseId: string;
  inView: boolean;
  mapPins: MapCityPin[];
}) {
  switch (caseId) {
    case "visit-riverside-map":
      return <InteractiveDirectoryView category={restaurantsCategory} />;
    case "farmhouse-before-after":
      return <CompactBeforeAfter />;
    case "vertex-funnel":
      return (
        <div className="flex justify-center py-2">
          <VertexSalesFunnel />
        </div>
      );
    case "mapbox-locations":
      return <CompactMapboxLocations pins={mapPins} onInteract={() => {}} />;
    case "visit-riverside-journey":
      return (
        <CompactVisitorJourney onInteract={() => {}} isActiveSlide={inView} />
      );
    case "cal-star-workflow":
      return (
        <CompactCalStarWorkflow onInteract={() => {}} isActiveSlide={inView} />
      );
    default:
      return null;
  }
}

function MiniCaseCard({
  demo,
  mapPins,
}: {
  demo: DemoCase;
  mapPins: MapCityPin[];
}) {
  const { ref, inView } = useInView(0.32);

  return (
    <div ref={ref}>
      <article
        className="overflow-hidden rounded-[var(--showcase-radius)] border border-[color:var(--showcase-border)] bg-[color:var(--showcase-card)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)]"
      >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/8 px-5 py-5 md:px-7 md:py-6">
        <div className="min-w-0 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {demo.eyebrow}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-semibold !text-heading md:text-2xl">
            {demo.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-body md:text-base">
            {demo.description}
          </p>
        </div>
        <p className="shrink-0 rounded-full border border-white/10 bg-elevated/70 px-3.5 py-1.5 text-xs font-semibold text-muted">
          From {demo.project}
        </p>
      </div>

      <div className="p-[var(--showcase-pad)]">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f14]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-elevated/70 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
            <span className="ml-2 truncate text-[11px] text-muted">
              {demo.project}
            </span>
          </div>
          <div className="p-3 md:p-4">
            <DemoStage caseId={demo.id} inView={inView} mapPins={mapPins} />
          </div>
        </div>
        {demo.hint ? (
          <p className="mt-3 text-center text-xs font-medium tracking-wide text-muted">
            {demo.hint}
          </p>
        ) : null}
      </div>
      </article>
    </div>
  );
}

export function CampaignInteractivityDemos({
  mapPins,
}: {
  mapPins: MapCityPin[];
}) {
  return (
    <Section id="showcase-demos" surface>
      <Container>
        <SectionHeading
          eyebrow="Interactive by design"
          title="Tools visitors can *actually use*"
          lede="Six mini case studies from sites and systems we’ve shipped — same shell, different capability."
          align="center"
        />

        <div
          className="mx-auto flex max-w-5xl flex-col gap-8 md:gap-10"
          style={
            {
              "--showcase-card": "rgba(18, 24, 33, 0.72)",
              "--showcase-border": "rgba(255, 255, 255, 0.1)",
              "--showcase-radius": "1.25rem",
              "--showcase-pad": "1rem",
            } as Record<string, string>
          }
        >
          {CASES.map((demo) => (
            <MiniCaseCard key={demo.id} demo={demo} mapPins={mapPins} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
