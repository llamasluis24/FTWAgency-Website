"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { FeaturedWorkItem } from "@/content/featured-work-carousel";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const VISIBLE_COUNT = 3;
const CARD_GAP = 24;

function FeaturedWorkCard({ item }: { item: FeaturedWorkItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121821] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="border-b border-white/5 bg-[#0B0F14] p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-success/70" />
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1A2330] px-3 py-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="truncate font-mono text-[10px] text-muted">{item.domain}</span>
          <ExternalLink className="ml-auto h-3 w-3 shrink-0 text-muted" />
        </div>
      </div>

      <div className="relative h-44 overflow-hidden border-b border-white/5 bg-black">
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={1280}
          height={720}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge tone="neutral">{item.category}</Badge>
          {item.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} tone="accent">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold text-heading">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{item.description}</p>

        <div className="mt-5 flex gap-6 border-t border-white/5 pt-4">
          {item.stats.map((stat) => (
            <div key={stat.label}>
              <div className="tnum font-display text-xl font-bold text-success">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
        >
          Visit {item.type === "software" ? "Platform" : "Website"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function CarouselDots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-8 flex justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={cn(
            "h-1.5 rounded-full transition-all",
            i === active ? "w-5 bg-accent" : "w-1.5 bg-slate-600",
          )}
        />
      ))}
    </div>
  );
}

export function FeaturedWorkCarousel({ items }: { items: FeaturedWorkItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);
  const [instant, setInstant] = useState(false);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(VISIBLE_COUNT);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxOffset = Math.max(0, items.length - visibleCount);
  const trackItems = maxOffset > 0 ? [...items, ...items.slice(0, visibleCount)] : items;
  const activeDot = maxOffset > 0 ? offset % (maxOffset + 1) : 0;

  useEffect(() => {
    if (!isInView || reduceMotion || maxOffset === 0) return;
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isInView, maxOffset, reduceMotion]);

  useEffect(() => {
    if (maxOffset === 0 || offset !== items.length) return;
    const frame = requestAnimationFrame(() => {
      setInstant(true);
      setOffset(0);
      requestAnimationFrame(() => setInstant(false));
    });
    return () => cancelAnimationFrame(frame);
  }, [offset, items.length, maxOffset]);

  useEffect(() => {
    setOffset((prev) => Math.min(prev, maxOffset));
  }, [maxOffset]);

  const goTo = (index: number) => {
    setInstant(false);
    setOffset(Math.min(index, maxOffset));
  };

  const step = (direction: -1 | 1) => {
    setInstant(false);
    setOffset((prev) => {
      if (direction === 1 && prev >= maxOffset) return 0;
      if (direction === -1 && prev <= 0) return maxOffset;
      return prev + direction;
    });
  };

  return (
    <div ref={ref} className="relative">
      {maxOffset > 0 && (
        <div className="pointer-events-none absolute inset-y-0 right-0 left-0 z-10 hidden items-center justify-between lg:flex">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => step(-1)}
            className="pointer-events-auto -ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#121821]/90 text-heading backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => step(1)}
            className="pointer-events-auto -mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#121821]/90 text-heading backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap: CARD_GAP }}
          animate={{
            x: `calc(-${offset} * ((100% - ${(visibleCount - 1) * CARD_GAP}px) / ${visibleCount} + ${CARD_GAP}px))`,
          }}
          transition={
            instant || reduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE }
          }
        >
          {trackItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="shrink-0"
              style={{
                width: `calc((100% - ${(visibleCount - 1) * CARD_GAP}px) / ${visibleCount})`,
              }}
            >
              <FeaturedWorkCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>

      {maxOffset > 0 && (
        <CarouselDots count={maxOffset + 1} active={activeDot} onSelect={goTo} />
      )}
    </div>
  );
}
