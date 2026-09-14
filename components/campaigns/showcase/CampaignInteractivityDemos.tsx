"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import { ShowcaseVisitRiversideDirectory } from "@/components/campaigns/showcase/visit-riverside/ShowcaseVisitRiversideDirectory";
import { VertexSalesFunnel } from "@/components/case-studies/vertex-services/VertexSalesFunnel";
import { farmhouseImages } from "@/content/case-studies/farmhouse-collective";
import { cn } from "@/lib/utils";

type DemoCase = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  project: string;
  hint?: string;
  /** Full-bleed native replica — no nested FTW browser chrome. */
  nativeReplica?: boolean;
};

const CASES: DemoCase[] = [
  {
    id: "farmhouse-before-after",
    eyebrow: "Trust & clarity",
    title: "Look Credible Before Anyone Calls",
    description:
      "A clear, professional site is the foundation for SEO and conversion — visitors decide if you are trustworthy before they ever pick up the phone.",
    project: "Farm House Collective",
    hint: "Drag to compare",
  },
  {
    id: "visit-riverside-map",
    eyebrow: "Findable locally",
    title: "Help Customers Discover What You Offer Where You Serve",
    description:
      "Use the live directory the same way visitors would — search listings, switch categories, tap cards or map pins, zoom the map. This is the service + location architecture pattern behind findable local pages.",
    project: "Visit Riverside",
    hint: "Search, switch categories, tap a pin or listing",
    nativeReplica: true,
  },
  {
    id: "vertex-funnel",
    eyebrow: "Visibility → opportunity",
    title: "Turn Search Interest Into Real Business Opportunities",
    description:
      "Structured paths from discovery to contact show how a growth website converts traffic — organic, AI Search, or paid — into calls, forms, and booked work.",
    project: "Vertex Services",
    hint: "Hover the stages",
  },
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

function DemoStage({ caseId }: { caseId: string }) {
  switch (caseId) {
    case "farmhouse-before-after":
      return <CompactBeforeAfter />;
    case "visit-riverside-map":
      return <ShowcaseVisitRiversideDirectory />;
    case "vertex-funnel":
      return (
        <div className="flex justify-center py-2">
          <VertexSalesFunnel />
        </div>
      );
    default:
      return null;
  }
}

function MiniCaseCard({ demo }: { demo: DemoCase }) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-[var(--showcase-radius)] border border-[color:var(--showcase-border)] bg-[color:var(--showcase-card)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)]",
      )}
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

      <div className={demo.nativeReplica ? "p-0" : "p-[var(--showcase-pad)]"}>
        {demo.nativeReplica ? (
          <div className="overflow-hidden border-t border-white/10">
            <DemoStage caseId={demo.id} />
          </div>
        ) : (
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
              <DemoStage caseId={demo.id} />
            </div>
          </div>
        )}
        {demo.hint ? (
          <p
            className={cn(
              "text-center text-xs font-medium tracking-wide text-muted",
              demo.nativeReplica ? "px-4 py-3" : "mt-3",
            )}
          >
            {demo.hint}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function CampaignInteractivityDemos() {
  return (
    <Section id="showcase-demos" surface>
      <Container>
        <SectionHeading
          eyebrow="Proof in practice"
          title="See How a Growth Website Earns Trust, Gets Found, and Converts"
          lede="Three interactive examples — trust and clarity, local discovery, and paths from visibility to opportunity. Proof of execution; the growth system above is the sales story."
          align="center"
        />

        <div
          className="mx-auto flex flex-col gap-8 md:gap-10"
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
            <MiniCaseCard key={demo.id} demo={demo} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
