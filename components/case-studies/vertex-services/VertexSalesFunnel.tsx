"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronDown,
  ClipboardList,
  Globe,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { vertexSalesFunnel } from "@/content/case-studies/vertex-services";

const EASE = [0.22, 1, 0.36, 1] as const;
const STAGE_INTERVAL_MS = 1100;
const PARTICLE_COUNT = 4;

const STAGE_ICONS = {
  search: Search,
  mapPin: MapPin,
  globe: Globe,
  clipboardList: ClipboardList,
  phone: Phone,
  wrench: Wrench,
  refreshCw: RefreshCw,
} as const;

function segmentWidth(index: number, total: number): number {
  const max = 100;
  const min = 58;
  if (total <= 1) return max;
  const step = (max - min) / (total - 1);
  return max - index * step;
}

function segmentClip(index: number, total: number): string {
  const t = index / Math.max(total - 1, 1);
  const topInset = 0.5 + t * 1.2;
  const bottomInset = 2 + t * 3.5;
  return `polygon(${topInset}% 0%, ${100 - topInset}% 0%, ${100 - bottomInset}% 100%, ${bottomInset}% 100%)`;
}

function SpiralParticle({
  index,
  active,
}: {
  index: number;
  active: boolean;
}) {
  if (!active) return null;
  const offset = index / PARTICLE_COUNT;

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,212,255,0.95)]"
      animate={{
        top: ["2%", "88%"],
        x: [
          `${Math.sin(offset * Math.PI * 2) * 38}%`,
          `${Math.sin((offset + 0.33) * Math.PI * 2) * 22}%`,
          `${Math.sin((offset + 0.66) * Math.PI * 2) * 8}%`,
          "0%",
        ],
        opacity: [0, 0.9, 0.9, 0],
        scale: [1, 0.7, 0.45],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        delay: offset * 3.2,
        ease: "linear",
      }}
      aria-hidden
    />
  );
}

function AmbientSwirls({ spinning }: { spinning: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 400 640"
        fill="none"
        animate={spinning ? { rotate: 360 } : undefined}
        transition={
          spinning
            ? { duration: 48, repeat: Infinity, ease: "linear" }
            : undefined
        }
      >
        <ellipse
          cx="200"
          cy="300"
          rx="160"
          ry="260"
          stroke="rgba(0,212,255,0.35)"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        <ellipse
          cx="200"
          cy="300"
          rx="120"
          ry="200"
          stroke="rgba(0,212,255,0.2)"
          strokeWidth="0.75"
          strokeDasharray="4 12"
        />
      </motion.svg>
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,212,255,0.08),transparent)]" />
    </div>
  );
}

function FunnelSegment({
  stage,
  index,
  total,
  Icon,
  widthPct,
  isCurrent,
  isPast,
  isSelected,
  evenlyLit,
  dimmed,
  onHover,
  onLeave,
  onFocus,
  onBlur,
  onClick,
}: {
  stage: (typeof vertexSalesFunnel.stages)[number];
  index: number;
  total: number;
  Icon: (typeof STAGE_ICONS)[keyof typeof STAGE_ICONS];
  widthPct: number;
  isCurrent: boolean;
  isPast: boolean;
  isSelected: boolean;
  evenlyLit: boolean;
  dimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onClick: () => void;
}) {
  const highlighted = evenlyLit || isCurrent || isSelected;
  const completed = isPast && !isCurrent;

  return (
    <div
      className={cn(
        "mx-auto transition-opacity duration-500",
        dimmed && "opacity-40",
      )}
      style={{ width: `${widthPct}%` }}
    >
      <button
        type="button"
        aria-current={isCurrent ? "step" : undefined}
        aria-label={`Stage ${index + 1}: ${stage.label}. ${stage.description}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        className={cn(
          "group relative w-full text-left transition-all duration-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60d8b8]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]",
        )}
      >
        {/* Glossy top rim */}
        <div
          className={cn(
            "absolute inset-x-[6%] top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500",
            highlighted ? "opacity-100" : "opacity-50",
          )}
          aria-hidden
        />

        <div
          className={cn(
            "relative overflow-hidden px-3 py-1.5 md:px-4 md:py-2",
            "min-h-[2rem] md:min-h-[2.25rem]",
            "bg-gradient-to-b from-[#1a2535]/95 via-[#121a26]/92 to-[#0a1018]/95",
            "border border-accent/20",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-8px_16px_rgba(0,0,0,0.35),0_8px_24px_rgba(0,0,0,0.45)]",
            highlighted
              ? "border-[#60d8b8]/40 shadow-[inset_0_1px_0_rgba(96,216,184,0.2),0_0_28px_rgba(96,216,184,0.15)]"
              : completed
                ? "border-accent/25"
                : "border-accent/15 opacity-85",
          )}
          style={{
            clipPath: segmentClip(index, total),
            borderRadius: index === 0 ? "4px 4px 2px 2px" : "2px",
          }}
        >
          {highlighted && (
            <motion.div
              layoutId="funnel-segment-glow"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,rgba(96,216,184,0.1),transparent_65%)]"
              transition={{ duration: 0.35, ease: EASE }}
            />
          )}

          <div className="relative flex items-center gap-2 md:gap-2.5">
            <div
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-500 md:h-7 md:w-7",
                highlighted
                  ? "border-[#60d8b8]/50 bg-[#60d8b8]/10 text-[#60d8b8] shadow-[0_0_16px_rgba(96,216,184,0.25)]"
                  : completed
                    ? "border-[#60d8b8]/30 bg-[#60d8b8]/5 text-[#60d8b8]/80"
                    : "border-white/15 bg-[#0B0F14]/60 text-[#60d8b8]/50",
              )}
            >
              <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={1.75} />
            </div>

            <div className="h-5 w-px shrink-0 bg-accent/25" aria-hidden />

            <div className="flex min-w-0 flex-1 items-baseline gap-1.5">
              <span
                className={cn(
                  "tnum shrink-0 text-[10px] font-bold md:text-xs",
                  highlighted || completed ? "text-[#60d8b8]" : "text-[#60d8b8]/50",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.06em] text-white md:text-[11px]">
                {stage.label}
              </span>
            </div>
          </div>
        </div>

        {/* Step ledge — emphasizes pyramid tier */}
        <div
          className="mx-auto h-0.5 bg-gradient-to-b from-black/50 to-transparent"
          style={{ width: `${Math.max(72, widthPct - 4)}%` }}
          aria-hidden
        />
      </button>
    </div>
  );
}

function StageConnector({ lit }: { lit: boolean }) {
  return (
    <div className="flex justify-center py-0" aria-hidden>
      <ChevronDown
        className={cn(
          "h-2.5 w-2.5 transition-colors duration-500",
          lit ? "text-accent/70 drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]" : "text-accent/25",
        )}
      />
    </div>
  );
}

export function VertexSalesFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-10%" });
  const reduceMotion = useReducedMotion();
  const stages = vertexSalesFunnel.stages;

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const pausedIndex = hoveredIndex ?? focusedIndex;
  const displayIndex = pausedIndex ?? activeIndex;
  const spinning = isInView && !reduceMotion && pausedIndex === null;
  const showParticles = isInView && !reduceMotion && pausedIndex === null;

  useEffect(() => {
    if (!isInView || reduceMotion || pausedIndex !== null) return;

    setActiveIndex(0);
    let idx = 0;
    const interval = window.setInterval(() => {
      idx = (idx + 1) % stages.length;
      setActiveIndex(idx);
    }, STAGE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [isInView, reduceMotion, pausedIndex, stages.length]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || pausedIndex !== null) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * -3, y: x * 4 });
    },
    [reduceMotion, pausedIndex],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHoveredIndex(null);
  }, []);

  const selectedStage =
    pausedIndex !== null ? stages[pausedIndex] : stages[displayIndex];

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[30rem]"
      role="list"
      aria-label="Vertex Services customer journey funnel"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative z-10 mb-3 flex justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={vertexSalesFunnel.logo}
          alt={vertexSalesFunnel.logoAlt}
          width={240}
          height={56}
          decoding="async"
          className="h-auto w-36 md:w-40"
        />
      </motion.div>

      <motion.div
        className="relative"
        style={{
          perspective: 900,
          rotateX: 4 + tilt.x,
          rotateY: tilt.y,
        }}
      >
        <AmbientSwirls spinning={spinning} />

        <div className="relative px-1">
          <div className="pointer-events-none absolute inset-x-[12%] top-0 bottom-[14%]">
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <SpiralParticle key={i} index={i} active={showParticles} />
            ))}
          </div>

          {/* Pyramid guide — subtle funnel silhouette */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 bottom-[12%] z-0 mx-auto w-full opacity-[0.12]"
            viewBox="0 0 480 620"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 40 20 L 440 20 L 280 560 L 200 560 Z"
              fill="none"
              stroke="rgba(0,212,255,0.6)"
              strokeWidth="1.5"
            />
          </svg>

          <div className="relative z-10 flex flex-col gap-0.5">
            {stages.map((stage, index) => {
              const Icon = STAGE_ICONS[stage.icon];
              const widthPct = segmentWidth(index, stages.length);
              const isCurrent = !reduceMotion && displayIndex === index;
              const isPast = reduceMotion || displayIndex > index;
              const isSelected = pausedIndex === index;
              const dimmed =
                !reduceMotion && pausedIndex !== null && pausedIndex !== index;
              const evenlyLit = Boolean(reduceMotion) && pausedIndex === null;

              return (
                <motion.div
                  key={stage.id}
                  role="listitem"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
                >
                  <FunnelSegment
                    stage={stage}
                    index={index}
                    total={stages.length}
                    Icon={Icon}
                    widthPct={widthPct}
                    isCurrent={isCurrent}
                    isPast={isPast}
                    isSelected={isSelected}
                    evenlyLit={evenlyLit}
                    dimmed={dimmed}
                    onHover={() => setHoveredIndex(index)}
                    onLeave={() => setHoveredIndex(null)}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    onClick={() =>
                      setFocusedIndex((prev) => (prev === index ? null : index))
                    }
                  />
                  {index < stages.length - 1 && (
                    <StageConnector lit={isPast || isCurrent} />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Funnel tip + floor grid */}
          <div className="relative z-10 mt-0.5 flex flex-col items-center">
            <div
              className="h-3 w-px bg-gradient-to-b from-accent/50 to-accent"
              aria-hidden
            />
            <div className="relative">
              {showParticles && (
                <motion.div
                  className="absolute inset-0 -m-3 rounded-full bg-accent/30 blur-xl"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
              )}
              <div className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_rgba(0,212,255,0.95)]" />
            </div>
            <div className="relative mt-1.5 h-8 w-[58%] min-w-[9rem] max-w-[14rem] overflow-hidden md:h-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(0,212,255,0.35),transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.12)_1px,transparent_1px)] bg-[size:11px_11px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black,transparent)]" />
              {showParticles && (
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,212,255,0.2),transparent_60%)]"
                  animate={{ opacity: [0.3, 0.65, 0.3] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStage.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="mx-auto mt-3 min-h-[4.25rem] max-w-xs rounded-xl border border-accent/20 bg-[#121821]/90 px-3.5 py-2.5 text-center backdrop-blur-sm"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#60d8b8]">
            {String(displayIndex + 1).padStart(2, "0")} {selectedStage.label}
          </p>
          <p className="mt-1 text-sm leading-snug text-body">{selectedStage.description}</p>
        </motion.div>
      </AnimatePresence>

      {!reduceMotion && pausedIndex === null && isInView && (
        <p className="mt-2 text-center text-[10px] text-muted">Hover a stage to pause the vortex</p>
      )}
    </div>
  );
}
