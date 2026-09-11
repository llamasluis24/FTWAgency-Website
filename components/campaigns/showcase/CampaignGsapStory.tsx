"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
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

const FRAME = 1 / 24;
/** Adjacent panel crossfade durations from the live Vote Christen page. */
const ADJACENT_FADE = [0.38, 0.43, 0.58] as const;

function crossfadeDuration(from: number, to: number) {
  if (from < 0 || from === to) return 0.32;
  if (Math.abs(from - to) !== 1) return 0.2;
  return ADJACENT_FADE[Math.min(from, to)] ?? 0.32;
}

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

function usableDuration(video: HTMLVideoElement) {
  const d = video.duration;
  if (!Number.isFinite(d) || d <= FRAME) return 8;
  return Math.max(d - FRAME, 0);
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
    <nav aria-label="Story chapters" className="mt-3.5">
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

/**
 * Dual-buffer scrubbed video stage — mirrors votechristen.com StickyMedia:
 * posters underneath, two paused scrub MP4s crossfaded with GSAP, currentTime
 * driven by chapter scroll progress.
 */
function ScrubMedia({
  panels,
  activeIndex,
  enabled,
  progressRef,
}: {
  panels: WebsiteShowcaseGsapPanel[];
  activeIndex: number | null;
  enabled: boolean;
  progressRef: MutableRefObject<number[]>;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeSlotRef = useRef(0);
  const loadedPanelRef = useRef<[number | null, number | null]>([null, null]);
  const loadingPanelRef = useRef<[number | null, number | null]>([null, null]);
  const loadGenRef = useRef([0, 0]);
  const loadPromiseRef = useRef<[Promise<HTMLVideoElement> | null, Promise<HTMLVideoElement> | null]>([
    null,
    null,
  ]);
  const lastSeekRef = useRef<[number | null, number | null]>([null, null]);
  const pendingSeekRef = useRef<[number | null, number | null]>([null, null]);
  const fadeTlRef = useRef<gsap.core.Timeline | null>(null);
  const shownPanelRef = useRef<number | null>(null);
  const lastRequestedRef = useRef<number | null>(null);
  const genRef = useRef(0);
  const primedRef = useRef(false);
  const rafRef = useRef(0);
  const [posterIndex, setPosterIndex] = useState(0);

  const slotVideo = useCallback(
    (slot: number) => (slot === 0 ? videoARef.current : videoBRef.current),
    [],
  );

  const findSlotForPanel = useCallback((panelIndex: number) => {
    if (
      loadedPanelRef.current[0] === panelIndex ||
      loadingPanelRef.current[0] === panelIndex
    ) {
      return 0;
    }
    if (
      loadedPanelRef.current[1] === panelIndex ||
      loadingPanelRef.current[1] === panelIndex
    ) {
      return 1;
    }
    return null;
  }, []);

  const resetStage = useCallback(() => {
    genRef.current += 1;
    fadeTlRef.current?.kill();
    fadeTlRef.current = null;
    shownPanelRef.current = null;
    lastRequestedRef.current = null;
    primedRef.current = false;
    lastSeekRef.current = [null, null];
    pendingSeekRef.current = [null, null];
    loadedPanelRef.current = [null, null];
    loadingPanelRef.current = [null, null];
    loadPromiseRef.current = [null, null];
    activeSlotRef.current = 0;
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    for (const video of [videoARef.current, videoBRef.current]) {
      if (!video) continue;
      video.pause();
      video.removeAttribute("src");
      video.src = "";
      video.load();
      video.style.opacity = "0";
    }
  }, []);

  const seekVideo = useCallback(
    (
      video: HTMLVideoElement,
      time: number,
      slot: number,
      force = false,
    ) => {
      if (!video.paused) video.pause();
      const clamped = Math.min(Math.max(time, 0), usableDuration(video));
      if (!force) {
        const last = lastSeekRef.current[slot];
        if (last != null && Math.abs(last - clamped) < FRAME) return;
        if (Math.abs(video.currentTime - clamped) < FRAME) {
          lastSeekRef.current[slot] = clamped;
          pendingSeekRef.current[slot] = null;
          return;
        }
      }
      if (video.readyState < 1) {
        pendingSeekRef.current[slot] = clamped;
        return;
      }
      if (video.readyState < 2) {
        pendingSeekRef.current[slot] = clamped;
        lastSeekRef.current[slot] = clamped;
        try {
          video.currentTime = clamped;
        } catch {
          /* ignore seek race */
        }
        return;
      }
      pendingSeekRef.current[slot] = null;
      lastSeekRef.current[slot] = clamped;
      try {
        video.currentTime = clamped;
      } catch {
        /* ignore seek race */
      }
    },
    [],
  );

  const scrubToProgress = useCallback(
    (video: HTMLVideoElement, progress: number, slot: number, force = false) => {
      const t =
        usableDuration(video) * Math.min(Math.max(progress, 0), 1);
      seekVideo(video, t, slot, force);
    },
    [seekVideo],
  );

  const loadIntoSlot = useCallback(
    (slot: number, panelIndex: number) => {
      const video = slotVideo(slot);
      if (!video) return Promise.reject(new Error("missing video"));

      if (
        loadedPanelRef.current[slot] === panelIndex &&
        video.readyState >= 2
      ) {
        video.pause();
        return Promise.resolve(video);
      }

      const inflight = loadPromiseRef.current[slot];
      if (loadingPanelRef.current[slot] === panelIndex && inflight) {
        return inflight;
      }

      const gen = ++loadGenRef.current[slot]!;
      loadedPanelRef.current[slot] = null;
      loadingPanelRef.current[slot] = panelIndex;
      lastSeekRef.current[slot] = null;
      pendingSeekRef.current[slot] = null;

      const promise = new Promise<HTMLVideoElement>((resolve, reject) => {
        const onReady = () => {
          if (gen !== loadGenRef.current[slot]) return;
          if (video.readyState < 2) return;
          video.pause();
          loadedPanelRef.current[slot] = panelIndex;
          loadingPanelRef.current[slot] = null;
          loadPromiseRef.current[slot] = null;
          video.removeEventListener("loadeddata", onReady);
          video.removeEventListener("canplay", onReady);
          video.removeEventListener("error", onError);
          resolve(video);
        };
        const onError = () => {
          if (gen !== loadGenRef.current[slot]) return;
          loadingPanelRef.current[slot] = null;
          loadPromiseRef.current[slot] = null;
          video.removeEventListener("loadeddata", onReady);
          video.removeEventListener("canplay", onReady);
          video.removeEventListener("error", onError);
          reject(new Error("video error"));
        };
        video.addEventListener("loadeddata", onReady);
        video.addEventListener("canplay", onReady);
        video.addEventListener("error", onError);
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";
        video.src = panels[panelIndex]!.videoScrubSrc;
        video.load();
      });

      loadPromiseRef.current[slot] = promise;
      return promise;
    },
    [panels, slotVideo],
  );

  const prefetch = useCallback(
    (panelIndex: number) => {
      if (!enabled || panelIndex < 0 || panelIndex >= panels.length) return;
      if (findSlotForPanel(panelIndex) !== null) return;
      const freeSlot = activeSlotRef.current === 0 ? 1 : 0;
      loadIntoSlot(freeSlot, panelIndex).catch(() => {});
    },
    [enabled, findSlotForPanel, loadIntoSlot, panels.length],
  );

  useEffect(() => {
    for (const video of [videoARef.current, videoBRef.current]) {
      if (!video) continue;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.pause();
      video.style.opacity = "0";
    }
  }, []);

  // Prime first scrub clip when stage approaches viewport.
  useEffect(() => {
    if (!enabled) {
      resetStage();
      setPosterIndex(0);
      return;
    }
    const stage = stageRef.current;
    if (!stage) return;

    const maybePrime = () => {
      if (primedRef.current) return;
      if (stage.getBoundingClientRect().top < 2.3 * window.innerHeight) {
        primedRef.current = true;
        loadIntoSlot(0, 0).catch(() => {});
      }
    };

    maybePrime();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !primedRef.current) {
          primedRef.current = true;
          loadIntoSlot(0, 0).catch(() => {});
        }
      },
      { root: null, rootMargin: "0px 0px 130% 0px", threshold: 0 },
    );
    io.observe(stage);
    window.addEventListener("scroll", maybePrime, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", maybePrime);
    };
  }, [enabled, loadIntoSlot, resetStage]);

  // Crossfade when active chapter changes.
  useEffect(() => {
    if (!enabled) return;
    if (activeIndex === lastRequestedRef.current) return;
    lastRequestedRef.current = activeIndex;

    if (activeIndex === null) {
      genRef.current += 1;
      fadeTlRef.current?.kill();
      videoARef.current?.pause();
      videoBRef.current?.pause();
      shownPanelRef.current = null;
      return;
    }

    const gen = ++genRef.current;
    setPosterIndex(activeIndex);
    const previous = shownPanelRef.current;
    const existingSlot = findSlotForPanel(activeIndex);
    const incomingSlot =
      existingSlot ?? (activeSlotRef.current === 0 ? 1 : 0);
    const outgoing = slotVideo(activeSlotRef.current);

    (async () => {
      let incoming: HTMLVideoElement;
      try {
        incoming = await loadIntoSlot(incomingSlot, activeIndex);
      } catch {
        return;
      }
      if (gen !== genRef.current) return;

      incoming.pause();
      scrubToProgress(
        incoming,
        progressRef.current[activeIndex] ?? 0,
        incomingSlot,
        true,
      );

      fadeTlRef.current?.kill();
      activeSlotRef.current = incomingSlot;
      shownPanelRef.current = activeIndex;

      const instant = previous == null || incoming === outgoing;
      const duration = instant
        ? 0
        : crossfadeDuration(previous ?? -1, activeIndex);

      if (instant || duration === 0) {
        incoming.style.opacity = "1";
        if (outgoing && outgoing !== incoming) {
          outgoing.style.opacity = "0";
          outgoing.pause();
        }
        prefetch(activeIndex + 1);
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", overwrite: "auto" },
        onComplete: () => {
          if (gen !== genRef.current) return;
          incoming.style.opacity = "1";
          if (outgoing && outgoing !== incoming) {
            outgoing.style.opacity = "0";
            outgoing.pause();
          }
          prefetch(activeIndex + 1);
        },
      });
      fadeTlRef.current = tl;
      tl.fromTo(
        incoming,
        { opacity: Number(incoming.style.opacity) || 0 },
        { opacity: 1, duration },
        0,
      );
      if (outgoing && outgoing !== incoming) {
        tl.fromTo(
          outgoing,
          { opacity: Number(outgoing.style.opacity) || 1 },
          { opacity: 0, duration },
          0,
        );
      }
    })();
  }, [
    activeIndex,
    enabled,
    findSlotForPanel,
    loadIntoSlot,
    prefetch,
    progressRef,
    scrubToProgress,
    slotVideo,
  ]);

  // Scrub active video on scroll.
  useEffect(() => {
    if (!enabled) return;
    let alive = true;

    const tick = () => {
      rafRef.current = 0;
      if (!alive) return;
      const panel = lastRequestedRef.current;
      if (panel === null) return;
      const slot = findSlotForPanel(panel);
      if (slot === null) return;
      if (
        loadedPanelRef.current[slot] !== panel &&
        loadingPanelRef.current[slot] !== panel
      ) {
        return;
      }
      const video = slotVideo(slot);
      if (!video) return;
      if (!video.paused) video.pause();
      scrubToProgress(video, progressRef.current[panel] ?? 0, slot);
    };

    const onScroll = () => {
      if (!alive || rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const flushPending = (event: Event) => {
      if (!alive) return;
      const video = event.currentTarget as HTMLVideoElement;
      const slot = video === videoARef.current ? 0 : 1;
      const pending = pendingSeekRef.current[slot];
      if (pending == null) return;

      const { buffered } = video;
      let bufferedEnough = false;
      for (let i = 0; i < buffered.length; i++) {
        if (buffered.start(i) <= pending + FRAME && buffered.end(i) >= pending) {
          bufferedEnough = true;
          break;
        }
      }
      if (
        !bufferedEnough &&
        !(video.readyState >= 2 && Math.abs(video.currentTime - pending) < FRAME)
      ) {
        if (video.readyState < 3) return;
      }
      seekVideo(video, pending, slot, true);
    };

    for (const video of [videoARef.current, videoBRef.current]) {
      if (!video) continue;
      video.addEventListener("progress", flushPending);
      video.addEventListener("canplay", flushPending);
      video.addEventListener("seeked", flushPending);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      alive = false;
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      for (const video of [videoARef.current, videoBRef.current]) {
        if (!video) continue;
        video.removeEventListener("progress", flushPending);
        video.removeEventListener("canplay", flushPending);
        video.removeEventListener("seeked", flushPending);
      }
    };
  }, [enabled, findSlotForPanel, progressRef, scrubToProgress, seekVideo, slotVideo]);

  useEffect(() => () => resetStage(), [resetStage]);

  const poster = panels[posterIndex] ?? panels[0]!;
  const counterPanel =
    panels[activeIndex ?? posterIndex] ?? panels[0]!;

  return (
    <figure className="m-0">
      <div
        ref={stageRef}
        className="relative aspect-video overflow-hidden rounded-xl bg-[#0a0f14] shadow-[0_28px_70px_-28px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
      >
        <Image
          src={poster.image}
          alt=""
          width={1280}
          height={720}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
        <video
          ref={videoARef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop={false}
          preload="none"
          tabIndex={-1}
          aria-hidden
          onEnded={(e) => e.currentTarget.pause()}
        />
        <video
          ref={videoBRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop={false}
          preload="none"
          tabIndex={-1}
          aria-hidden
          onEnded={(e) => e.currentTarget.pause()}
        />
        <p
          aria-hidden
          className="absolute right-3 top-3 font-serif text-[11px] font-bold tabular-nums tracking-[0.18em] text-white/90 drop-shadow"
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
      if (measured.index === null) {
        if (activeIndexRef.current !== null) {
          activeIndexRef.current = null;
          setActiveIndex(null);
        }
        return;
      }
      progressRef.current[measured.index] = measured.progress;
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
            <ScrubMedia
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

function MobilePlaybackChapter({
  panel,
  index,
  motionOk,
  videoRef,
}: {
  panel: WebsiteShowcaseGsapPanel;
  index: number;
  motionOk: boolean;
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  return (
    <div
      className={cn(
        "space-y-5 px-4 py-10",
        index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]",
      )}
    >
      <div
        data-chapter-media={panel.number}
        className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0a0f14] bg-cover bg-center shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
        style={{ backgroundImage: `url(${panel.image})` }}
      >
        <Image
          src={panel.image}
          alt={panel.imageAlt}
          width={1280}
          height={720}
          draggable={false}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          sizes="100vw"
        />
        {motionOk ? (
          <video
            ref={videoRef}
            className="absolute inset-0 z-10 h-full w-full object-cover opacity-0"
            muted
            playsInline
            controls={false}
            loop={false}
            preload="none"
            tabIndex={-1}
            aria-hidden
            onPlaying={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onPause={(e) => {
              if (!e.currentTarget.ended) e.currentTarget.style.opacity = "0";
            }}
            onEnded={(e) => {
              e.currentTarget.pause();
              e.currentTarget.style.opacity = "1";
            }}
          />
        ) : null}
      </div>
      <PanelCopy panel={panel} active />
    </div>
  );
}

function MobileStack({
  panels,
  motionOk,
}: {
  panels: WebsiteShowcaseGsapPanel[];
  motionOk: boolean;
}) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const loadedRef = useRef(panels.map(() => false));
  const genRef = useRef(panels.map(() => 0));
  const activeRef = useRef<number | null>(null);

  const pauseOthers = useCallback((except: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video || i === except) return;
      video.pause();
      video.style.opacity = "0";
    });
  }, []);

  const unloadFar = useCallback(
    (except: number) => {
      videoRefs.current.forEach((video, i) => {
        if (!video || i === except || i === except + 1) return;
        if (!loadedRef.current[i]) return;
        video.pause();
        video.removeAttribute("src");
        video.src = "";
        video.load();
        video.style.opacity = "0";
        loadedRef.current[i] = false;
      });
    },
    [],
  );

  const loadAndPlay = useCallback(
    (index: number) => {
      if (!motionOk) return;
      const video = videoRefs.current[index];
      if (!video) return;

      const same = activeRef.current === index;
      activeRef.current = index;
      pauseOthers(index);
      unloadFar(index);

      const ensureSrc = () => {
        if (loadedRef.current[index] && video.src) return;
        const gen = ++genRef.current[index]!;
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.preload = "auto";
        video.src = panels[index]!.videoPlaybackSrc;
        video.load();
        const mark = () => {
          if (gen !== genRef.current[index]) return;
          loadedRef.current[index] = true;
        };
        video.addEventListener("loadeddata", mark, { once: true });
      };

      ensureSrc();

      if (!same && (video.ended || video.currentTime > 0.05)) {
        try {
          video.currentTime = 0;
        } catch {
          /* ignore */
        }
      } else if (same && video.ended) {
        video.pause();
        video.style.opacity = "1";
        return;
      }

      const play = () => {
        if (activeRef.current !== index || video.ended) return;
        video.play().catch(() => {});
      };
      if (video.readyState >= 2) requestAnimationFrame(play);
      else video.addEventListener("loadeddata", play, { once: true });

      // Prefetch next
      const next = index + 1;
      if (next < panels.length) {
        const nextVideo = videoRefs.current[next];
        if (nextVideo && !loadedRef.current[next]) {
          nextVideo.muted = true;
          nextVideo.playsInline = true;
          nextVideo.preload = "auto";
          nextVideo.src = panels[next]!.videoPlaybackSrc;
          nextVideo.load();
          nextVideo.addEventListener(
            "loadeddata",
            () => {
              loadedRef.current[next] = true;
            },
            { once: true },
          );
        }
      }
    },
    [motionOk, panels, pauseOthers, unloadFar],
  );

  useEffect(() => {
    if (!motionOk) return;

    const nodes = videoRefs.current
      .map((video, index) => {
        const media = video?.closest("[data-chapter-media]");
        return media ? { media, index } : null;
      })
      .filter(Boolean) as { media: Element; index: number }[];

    const ratios = panels.map(() => 0);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = nodes.find((n) => n.media === entry.target)?.index;
          if (index == null) continue;
          ratios[index] = entry.intersectionRatio;
        }

        let best = -1;
        let bestRatio = 0;
        ratios.forEach((ratio, i) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = i;
          }
        });

        const current = activeRef.current;
        if (current != null && ratios[current]! >= 0.22) {
          if (best !== -1 && best !== current && bestRatio > ratios[current]!) {
            loadAndPlay(best);
          } else {
            loadAndPlay(current);
          }
          return;
        }

        if (best === -1) {
          activeRef.current = null;
          pauseOthers(-1);
          return;
        }
        loadAndPlay(best);
      },
      { threshold: [0, 0.22, 0.55, 0.75, 1] },
    );

    nodes.forEach(({ media }) => io.observe(media));
    return () => io.disconnect();
  }, [loadAndPlay, motionOk, panels, pauseOthers]);

  return (
    <div className="lg:hidden">
      {panels.map((panel, index) => (
        <MobilePlaybackChapter
          key={panel.number}
          panel={panel}
          index={index}
          motionOk={motionOk}
          videoRef={(el) => {
            videoRefs.current[index] = el;
          }}
        />
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
      {panels.map((panel) => (
        <li
          key={panel.number}
          className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-4 md:grid md:grid-cols-2 md:gap-6 md:p-6"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image
              src={panel.image}
              alt={panel.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <PanelCopy panel={panel} active />
        </li>
      ))}
    </ul>
  );
}

export function CampaignGsapStory({
  config,
}: {
  config: WebsiteShowcaseConfig;
}) {
  const formId = getCampaignFormAnchorId();
  const panels = config.gsapPanels;
  const reduceMotion = useReducedMotion();
  const [desktopMotion, setDesktopMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setDesktopMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div
      className="relative border-y border-white/5 bg-[#070b10]"
      aria-label="Scroll storytelling capability showcase"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,212,255,0.08),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_40%,rgba(96,216,184,0.06),transparent_50%)]"
        aria-hidden
      />
      <Container className="relative pb-6 pt-16 md:pb-8 md:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Scroll cinema · Built for conversion
          </p>
          <h2 className="font-display text-3xl font-semibold !text-heading md:text-4xl">
            Stories that move with the scroll
          </h2>
          <p className="mt-3 text-body">
            Pinned media, scrubbed film, and chapters that sell — an example of
            the scroll cinema we build for brands that need visitors to stay and
            convert.
          </p>
        </div>
      </Container>

      <div className="relative">
        {reduceMotion ? (
          <ReducedMotionStack panels={panels} />
        ) : desktopMotion ? (
          <DesktopStickyStory panels={panels} />
        ) : (
          <MobileStack panels={panels} motionOk />
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
            <a
              href="https://www.votechristen.com/why-water-matters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-body"
            >
              See a live example
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
