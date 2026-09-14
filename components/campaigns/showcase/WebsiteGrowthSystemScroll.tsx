"use client";

import {
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Section";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import { fireCampaignPrimaryCtaClick } from "@/lib/campaigns/conversions";
import { cn } from "@/lib/utils";
import type {
  WebsiteShowcaseConfig,
  WebsiteShowcaseGsapPanel,
} from "@/content/campaigns/website-design-showcase";

gsap.registerPlugin(ScrollTrigger);

function measureChapter(
  section: HTMLElement,
): { index: number | null; progress: number } {
  const chapters = Array.from(
    section.querySelectorAll<HTMLElement>("[data-chapter]"),
  );
  if (chapters.length === 0) return { index: null, progress: 0 };

  const mid = 0.5 * window.innerHeight;
  const firstTop = chapters[0]!.getBoundingClientRect().top;
  const lastBottom = chapters[chapters.length - 1]!.getBoundingClientRect().bottom;

  if (mid < firstTop) return { index: null, progress: 0 };
  if (mid > lastBottom) return { index: null, progress: 1 };

  for (let i = 0; i < chapters.length; i++) {
    const top = chapters[i]!.getBoundingClientRect().top;
    const nextTop =
      i < chapters.length - 1
        ? chapters[i + 1]!.getBoundingClientRect().top
        : lastBottom;
    if (mid <= nextTop) {
      const span = Math.max(nextTop - top, 1);
      return {
        index: i,
        progress: Math.min(1, Math.max(0, (mid - top) / span)),
      };
    }
  }

  return { index: chapters.length - 1, progress: 1 };
}

/** Continuous 0→1 scrub from per-chapter progress slots. */
function chapterScrub(
  progressRef: MutableRefObject<number[]>,
  panelCount: number,
): number {
  if (panelCount <= 0) return 0;
  let sum = 0;
  for (let i = 0; i < panelCount; i++) {
    sum += progressRef.current[i] ?? 0;
  }
  return Math.min(1, Math.max(0, sum / panelCount));
}

function layerAmount(scrub: number, start: number, end: number) {
  if (scrub <= start) return 0;
  if (scrub >= end) return 1;
  return (scrub - start) / (end - start);
}

function layersFromScrub(scrub: number, panelCount: number) {
  const n = panelCount || 6;
  const t = (i: number) => i / n;
  return {
    website: layerAmount(scrub, 0, t(0) + 0.1),
    services: layerAmount(scrub, t(1) - 0.02, t(1) + 0.12),
    seo: layerAmount(scrub, t(2) - 0.02, t(2) + 0.12),
    locations: layerAmount(scrub, t(3) - 0.02, t(3) + 0.12),
    aio: layerAmount(scrub, t(4) - 0.02, t(4) + 0.12),
    convert: layerAmount(scrub, t(5) - 0.02, t(5) + 0.1),
    ring: layerAmount(scrub, t(5) + 0.02, 0.98),
  };
}

function PanelCopy({
  panel,
  active,
  large,
}: {
  panel: WebsiteShowcaseGsapPanel;
  active?: boolean;
  large?: boolean;
}) {
  const emphasize = active !== false;
  return (
    <div
      className={cn(
        "border-l-4 pl-4 transition-opacity duration-300 xl:pl-5",
        emphasize
          ? "border-accent opacity-100"
          : "border-transparent opacity-[0.55]",
      )}
    >
      <p
        className={cn(
          "mb-1.5 font-display font-bold tabular-nums",
          large ? "text-2xl xl:text-3xl" : "text-2xl",
          emphasize ? "text-accent" : "text-heading/40",
        )}
      >
        {panel.number}
      </p>
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#60d8b8]">
        {panel.eyebrow}
      </p>
      <h3
        className={cn(
          "mb-3 font-display font-semibold leading-tight !text-heading",
          large ? "text-[1.35rem] xl:text-2xl" : "text-[1.35rem]",
        )}
      >
        {panel.headline}
      </h3>
      <div className="space-y-3.5 text-[15px] leading-[1.65] text-body xl:text-base">
        {panel.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mb-1.5 mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#60d8b8]">
        Bottom line
      </p>
      <p className="border-l-4 border-accent/80 pl-3.5 font-display text-base leading-snug !text-heading xl:text-lg">
        {panel.bottomLine}
      </p>
    </div>
  );
}

function ChapterNav({
  panels,
  activeIndex,
}: {
  panels: WebsiteShowcaseGsapPanel[];
  activeIndex: number | null;
}) {
  return (
    <nav aria-label="Growth story chapters" className="mt-3.5">
      <ol className="flex flex-col xl:flex-row xl:flex-wrap xl:items-center">
        {panels.map((panel, index) => {
          const active = activeIndex === index;
          const last = index === panels.length - 1;
          return (
            <li key={panel.number} className="relative flex items-center">
              <span
                className={cn(
                  "text-sm font-medium",
                  active ? "font-semibold text-heading" : "text-muted",
                )}
              >
                {panel.number} {panel.navLabel}
              </span>
              {!last ? (
                <span
                  className="mx-3 hidden h-px w-6 bg-white/15 xl:inline-block"
                  aria-hidden
                />
              ) : null}
              {!last ? (
                <span
                  className="absolute -bottom-2 left-[0.35rem] top-[1.35rem] w-px bg-white/15 xl:hidden"
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

type StageRefs = {
  root: HTMLElement | null;
  website: SVGGElement | null;
  services: SVGGElement | null;
  serviceLines: SVGPathElement | null;
  seo: SVGGElement | null;
  locations: SVGGElement | null;
  aio: SVGGElement | null;
  convert: SVGGElement | null;
  ring: SVGEllipseElement | null;
  glow: HTMLElement | null;
  counter: HTMLElement | null;
};

/**
 * Sticky growth-system diagram — continuous scrub (not opacity-on-index only).
 * Layers accumulate: Website → Services → SEO → Locations → AI Search → Convert.
 */
function GrowthSystemStage({
  panels,
  activeIndex,
  enabled,
  progressRef,
  staticIndex,
}: {
  panels: WebsiteShowcaseGsapPanel[];
  activeIndex: number | null;
  enabled: boolean;
  progressRef?: MutableRefObject<number[]>;
  /** When set, render a fixed chapter snapshot (mobile / reduced motion). */
  staticIndex?: number;
}) {
  const refs = useRef<StageRefs>({
    root: null,
    website: null,
    services: null,
    serviceLines: null,
    seo: null,
    locations: null,
    aio: null,
    convert: null,
    ring: null,
    glow: null,
    counter: null,
  });
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const displayIndex =
    staticIndex ??
    (activeIndex === null ? 0 : Math.min(activeIndex, panels.length - 1));
  const counterPanel = panels[displayIndex] ?? panels[0]!;

  const initialScrub =
    staticIndex != null
      ? (staticIndex + 0.92) / Math.max(panels.length, 1)
      : 0.08;
  const initial = layersFromScrub(initialScrub, panels.length);
  const ringLen = 1400;

  useEffect(() => {
    const apply = (scrub: number, indexForCounter: number) => {
      const {
        website,
        services,
        seo,
        locations,
        aio,
        convert,
        ring,
      } = layersFromScrub(scrub, panels.length);

      const r = refs.current;

      if (r.website) {
        gsap.set(r.website, {
          opacity: 0.25 + website * 0.75,
          scale: 0.86 + website * 0.14,
          transformOrigin: "400px 225px",
        });
      }
      if (r.serviceLines) {
        const dash = 480;
        gsap.set(r.serviceLines, {
          strokeDasharray: dash,
          strokeDashoffset: dash * (1 - services),
          opacity: services,
        });
      }
      if (r.services) {
        gsap.set(r.services, {
          opacity: services,
          scale: 0.92 + services * 0.08,
          transformOrigin: "400px 225px",
        });
      }
      if (r.seo) {
        gsap.set(r.seo, {
          opacity: seo,
          y: (1 - seo) * -18,
        });
      }
      if (r.locations) {
        gsap.set(r.locations, {
          opacity: locations,
          y: (1 - locations) * 22,
        });
      }
      if (r.aio) {
        gsap.set(r.aio, {
          opacity: aio,
          x: (1 - aio) * 28,
        });
      }
      if (r.convert) {
        gsap.set(r.convert, {
          opacity: convert,
          y: (1 - convert) * 16,
          scale: 0.9 + convert * 0.1,
          transformOrigin: "400px 300px",
        });
      }
      if (r.ring) {
        gsap.set(r.ring, {
          strokeDasharray: ringLen,
          strokeDashoffset: ringLen * (1 - ring),
          opacity: 0.15 + ring * 0.85,
        });
      }
      if (r.glow) {
        gsap.set(r.glow, {
          opacity: 0.35 + scrub * 0.55,
        });
      }
      if (r.counter) {
        const panel = panels[Math.min(indexForCounter, panels.length - 1)]!;
        r.counter.textContent = `${panel.number} / 0${panels.length}`;
      }
    };

    if (staticIndex != null) {
      apply((staticIndex + 0.92) / panels.length, staticIndex);
      return;
    }

    if (!enabled || !progressRef) {
      apply(initialScrub, displayIndex);
      return;
    }

    let raf = 0;
    const tick = () => {
      const scrub = chapterScrub(progressRef, panels.length);
      const idx = activeIndexRef.current;
      const indexForCounter =
        idx === null
          ? scrub >= 0.92
            ? panels.length - 1
            : scrub <= 0.02
              ? 0
              : Math.min(
                  panels.length - 1,
                  Math.floor(scrub * panels.length),
                )
          : idx;
      apply(scrub, indexForCounter);
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [displayIndex, enabled, initialScrub, panels, progressRef, staticIndex]);

  const serviceCards = [
    { x: 88, y: 78, label: "Service A", sub: "Dedicated page" },
    { x: 560, y: 70, label: "Service B", sub: "Dedicated page" },
    { x: 72, y: 300, label: "Service C", sub: "Dedicated page" },
    { x: 548, y: 308, label: "Service D", sub: "Dedicated page" },
  ] as const;

  return (
    <figure
      ref={(el) => {
        refs.current.root = el;
      }}
      className="relative"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#060a0f] shadow-[0_28px_70px_-28px_rgba(0,0,0,0.75)] ring-1 ring-white/12">
        <div
          ref={(el) => {
            refs.current.glow = el;
          }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_42%,rgba(0,212,255,0.16),transparent_62%),radial-gradient(ellipse_40%_35%_at_78%_28%,rgba(96,216,184,0.1),transparent_55%)]"
          style={{ opacity: 0.35 + initialScrub * 0.55 }}
          aria-hidden
        />
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
          }}
          aria-hidden
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="growth-ring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#60d8b8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.55" />
            </linearGradient>
            <filter id="growth-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Growth ring (draws last) */}
          <ellipse
            ref={(el) => {
              refs.current.ring = el;
            }}
            cx="400"
            cy="225"
            rx="355"
            ry="188"
            fill="none"
            stroke="url(#growth-ring)"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity={0.15 + initial.ring * 0.85}
            strokeDasharray={ringLen}
            strokeDashoffset={ringLen * (1 - initial.ring)}
          />

          {/* Service connection lines */}
          <path
            ref={(el) => {
              refs.current.serviceLines = el;
            }}
            d="M400 225 L160 110 M400 225 L640 105 M400 225 L150 340 M400 225 L650 345"
            fill="none"
            stroke="rgba(96,216,184,0.45)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity={initial.services}
            strokeDasharray={480}
            strokeDashoffset={480 * (1 - initial.services)}
          />

          {/* Website foundation — browser card */}
          <g
            ref={(el) => {
              refs.current.website = el;
            }}
            opacity={0.25 + initial.website * 0.75}
          >
            <rect
              x="292"
              y="158"
              width="216"
              height="148"
              rx="14"
              fill="#0d141c"
              stroke="rgba(0,212,255,0.55)"
              strokeWidth="1.8"
              filter="url(#growth-soft)"
            />
            <rect x="292" y="158" width="216" height="28" rx="14" fill="#121a24" />
            <rect x="292" y="172" width="216" height="14" fill="#121a24" />
            <circle cx="310" cy="172" r="3.5" fill="#ff5f57" />
            <circle cx="324" cy="172" r="3.5" fill="#febc2e" />
            <circle cx="338" cy="172" r="3.5" fill="#28c840" />
            <rect
              x="352"
              y="166"
              width="130"
              height="12"
              rx="6"
              fill="rgba(255,255,255,0.06)"
            />
            <text
              x="400"
              y="220"
              textAnchor="middle"
              fill="#00d4ff"
              fontSize="11"
              fontWeight="700"
              letterSpacing="0.16em"
            >
              WEBSITE
            </text>
            <text
              x="400"
              y="244"
              textAnchor="middle"
              fill="#e8eef5"
              fontSize="18"
              fontWeight="600"
            >
              Foundation
            </text>
            <rect
              x="330"
              y="262"
              width="140"
              height="8"
              rx="4"
              fill="rgba(255,255,255,0.08)"
            />
            <rect
              x="330"
              y="262"
              width="92"
              height="8"
              rx="4"
              fill="rgba(0,212,255,0.65)"
            />
          </g>

          {/* Service pages */}
          <g
            ref={(el) => {
              refs.current.services = el;
            }}
            opacity={initial.services}
          >
            {serviceCards.map((card) => (
              <g key={card.label}>
                <rect
                  x={card.x}
                  y={card.y}
                  width="152"
                  height="52"
                  rx="10"
                  fill="rgba(96,216,184,0.1)"
                  stroke="rgba(96,216,184,0.5)"
                  strokeWidth="1.4"
                />
                <text
                  x={card.x + 16}
                  y={card.y + 22}
                  fill="#60d8b8"
                  fontSize="13"
                  fontWeight="700"
                >
                  {card.label}
                </text>
                <text
                  x={card.x + 16}
                  y={card.y + 38}
                  fill="rgba(232,238,245,0.55)"
                  fontSize="10"
                >
                  {card.sub}
                </text>
              </g>
            ))}
          </g>

          {/* SEO signals */}
          <g
            ref={(el) => {
              refs.current.seo = el;
            }}
            opacity={initial.seo}
          >
            {[
              { x: 210, label: "Structure" },
              { x: 340, label: "Metadata" },
              { x: 470, label: "Crawlability" },
            ].map((item) => (
              <g key={item.label}>
                <rect
                  x={item.x}
                  y="28"
                  width="118"
                  height="30"
                  rx="15"
                  fill="rgba(0,212,255,0.14)"
                  stroke="rgba(0,212,255,0.5)"
                  strokeWidth="1.2"
                />
                <text
                  x={item.x + 59}
                  y="47"
                  textAnchor="middle"
                  fill="#00d4ff"
                  fontSize="11"
                  fontWeight="700"
                  letterSpacing="0.06em"
                >
                  {item.label}
                </text>
              </g>
            ))}
            <path
              d="M269 58 L360 158 M399 58 L400 158 M529 58 L440 158"
              fill="none"
              stroke="rgba(0,212,255,0.28)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
          </g>

          {/* Locations */}
          <g
            ref={(el) => {
              refs.current.locations = el;
            }}
            opacity={initial.locations}
          >
            <path
              d="M160 390 C260 360, 540 360, 640 390"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="2"
            />
            {[
              { x: 230, label: "Riverside" },
              { x: 400, label: "Irvine" },
              { x: 570, label: "Anaheim" },
            ].map((pin) => (
              <g key={pin.label}>
                <circle
                  cx={pin.x}
                  cy="372"
                  r="7"
                  fill="#00d4ff"
                  opacity="0.9"
                />
                <circle
                  cx={pin.x}
                  cy="372"
                  r="14"
                  fill="none"
                  stroke="rgba(0,212,255,0.35)"
                  strokeWidth="1.5"
                />
                <text
                  x={pin.x}
                  y="408"
                  textAnchor="middle"
                  fill="rgba(232,238,245,0.8)"
                  fontSize="11"
                  fontWeight="600"
                >
                  {pin.label}
                </text>
              </g>
            ))}
          </g>

          {/* AI Search panel */}
          <g
            ref={(el) => {
              refs.current.aio = el;
            }}
            opacity={initial.aio}
          >
            <rect
              x="598"
              y="168"
              width="168"
              height="108"
              rx="12"
              fill="#101822"
              stroke="rgba(0,212,255,0.4)"
              strokeWidth="1.4"
            />
            <text
              x="614"
              y="192"
              fill="#00d4ff"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.14em"
            >
              AI SEARCH
            </text>
            <text x="614" y="214" fill="rgba(232,238,245,0.75)" fontSize="11">
              Structured answers
            </text>
            <rect
              x="614"
              y="228"
              width="136"
              height="6"
              rx="3"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="614"
              y="242"
              width="104"
              height="6"
              rx="3"
              fill="rgba(255,255,255,0.08)"
            />
            <text
              x="614"
              y="264"
              fill="rgba(96,216,184,0.9)"
              fontSize="9"
            >
              ChatGPT · AI Overviews
            </text>
          </g>

          {/* Convert CTAs */}
          <g
            ref={(el) => {
              refs.current.convert = el;
            }}
            opacity={initial.convert}
          >
            {[
              { x: 292, label: "Call" },
              { x: 372, label: "Form" },
              { x: 452, label: "Book" },
            ].map((cta) => (
              <g key={cta.label}>
                <rect
                  x={cta.x}
                  y="318"
                  width="64"
                  height="26"
                  rx="13"
                  fill="#00d4ff"
                />
                <text
                  x={cta.x + 32}
                  y="335"
                  textAnchor="middle"
                  fill="#04222b"
                  fontSize="12"
                  fontWeight="800"
                >
                  {cta.label}
                </text>
              </g>
            ))}
            <text
              x="400"
              y="368"
              textAnchor="middle"
              fill="#60d8b8"
              fontSize="11"
              fontWeight="700"
              letterSpacing="0.18em"
            >
              GROWTH SYSTEM
            </text>
          </g>
        </svg>

        <p
          ref={(el) => {
            refs.current.counter = el;
          }}
          className="absolute right-3 top-3 z-30 font-serif text-[11px] font-bold tabular-nums tracking-[0.18em] text-white/90"
        >
          {counterPanel.number} / 0{panels.length}
        </p>
      </div>
      <figcaption className="sr-only">
        {counterPanel.eyebrow}: {counterPanel.headline}
      </figcaption>
    </figure>
  );
}

function DesktopStickyStory({
  panels,
}: {
  panels: WebsiteShowcaseGsapPanel[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(panels.map(() => 0));
  const activeIndexRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sync = () => {
      const measured = measureChapter(section);
      const count = panels.length;

      if (measured.index === null) {
        if (measured.progress >= 1) {
          for (let i = 0; i < count; i++) progressRef.current[i] = 1;
        } else {
          for (let i = 0; i < count; i++) progressRef.current[i] = 0;
        }
        if (activeIndexRef.current !== null) {
          activeIndexRef.current = null;
          setActiveIndex(null);
        }
        return;
      }

      for (let i = 0; i < count; i++) {
        if (i < measured.index) progressRef.current[i] = 1;
        else if (i > measured.index) progressRef.current[i] = 0;
        else progressRef.current[i] = measured.progress;
      }

      if (activeIndexRef.current !== measured.index) {
        activeIndexRef.current = measured.index;
        setActiveIndex(measured.index);
      }
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: sync,
        onEnter: sync,
        onEnterBack: sync,
        onLeave: sync,
        onLeaveBack: sync,
      });
    }, section);

    ScrollTrigger.refresh();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      ctx.revert();
    };
  }, [panels.length]);

  return (
    <section ref={sectionRef} className="bg-transparent py-4 lg:py-5">
      <div className="mx-auto w-full max-w-[92rem] px-4 lg:px-6 xl:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(17rem,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(17rem,1fr)] xl:gap-10 2xl:grid-cols-[minmax(0,1.7fr)_minmax(18rem,1fr)]">
          <aside className="sticky top-28 z-10 self-start">
            <GrowthSystemStage
              panels={panels}
              activeIndex={activeIndex}
              enabled
              progressRef={progressRef}
            />
            <ChapterNav panels={panels} activeIndex={activeIndex} />
          </aside>
          <div>
            {panels.map((panel, index) => (
              <article
                key={panel.number}
                data-chapter={panel.number}
                className="flex min-h-[92vh] items-start pb-16 pt-28 xl:min-h-[100vh] xl:pb-24"
              >
                <PanelCopy
                  panel={panel}
                  active={activeIndex === index}
                  large
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStack({
  panels,
}: {
  panels: WebsiteShowcaseGsapPanel[];
}) {
  return (
    <div>
      {panels.map((panel, index) => (
        <div
          key={panel.number}
          className={cn(
            "space-y-5 px-4 py-10",
            index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]",
          )}
        >
          <GrowthSystemStage
            panels={panels}
            activeIndex={index}
            enabled={false}
            staticIndex={index}
          />
          <PanelCopy panel={panel} active />
        </div>
      ))}
    </div>
  );
}

function ReducedMotionStack({
  panels,
}: {
  panels: WebsiteShowcaseGsapPanel[];
}) {
  return (
    <ul className="space-y-6 px-4 py-8 md:px-6">
      {panels.map((panel, index) => (
        <li
          key={panel.number}
          className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-4 md:grid md:grid-cols-2 md:gap-6 md:p-6"
        >
          <GrowthSystemStage
            panels={panels}
            activeIndex={index}
            enabled={false}
            staticIndex={index}
          />
          <PanelCopy panel={panel} active />
        </li>
      ))}
    </ul>
  );
}

export function WebsiteGrowthSystemScroll({
  config,
}: {
  config: WebsiteShowcaseConfig;
}) {
  const formId = getCampaignFormAnchorId();
  const panels = config.gsapPanels;
  /** boot = visible static chapters (SSR + first paint). Never hide behind lg:hidden. */
  const [mode, setMode] = useState<"boot" | "desktop" | "mobile" | "reduced">(
    "boot",
  );

  useEffect(() => {
    const sync = () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      if (reduce) setMode("reduced");
      else if (desktop) setMode("desktop");
      else setMode("mobile");
    };
    sync();
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqDesktop.addEventListener("change", sync);
    mqReduce.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mqDesktop.removeEventListener("change", sync);
      mqReduce.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div
      id="growth-system"
      className="relative scroll-mt-24 border-y border-white/5 bg-[#070b10]"
      aria-label="Website growth system scroll story"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.08),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_40%,rgba(96,216,184,0.06),transparent_50%)]"
        aria-hidden
      />
      <Container className="relative pb-6 pt-16 md:pb-8 md:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Growth infrastructure · Built into the website
          </p>
          <h2 className="font-display text-3xl font-semibold !text-heading md:text-4xl">
            How one website becomes a connected growth system
          </h2>
          <p className="mt-3 text-body">
            Foundation, service pages, SEO, locations, AI Search readiness, and
            conversion paths — architecture that turns attention into
            opportunity.
          </p>
        </div>
      </Container>

      <div className="relative">
        {mode === "desktop" ? (
          <DesktopStickyStory panels={panels} />
        ) : mode === "mobile" ? (
          <MobileStack panels={panels} />
        ) : (
          <ReducedMotionStack panels={panels} />
        )}
      </div>

      <Container className="relative pb-16 pt-8 md:pb-20">
        <div className="text-center">
          <a
            href={`#${formId}`}
            onClick={() =>
              fireCampaignPrimaryCtaClick({
                campaignName: config.trackingCampaignName,
                ctaLabel: config.primaryCTA,
                pagePath: config.path,
              })
            }
            className="inline-flex items-center justify-center rounded-[10px] bg-accent px-7 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
          >
            {config.primaryCTA}
          </a>
          <p className="mt-4 text-sm text-muted">
            Keep scrolling for interactive proof of how this looks in practice.
          </p>
        </div>
      </Container>
    </div>
  );
}
