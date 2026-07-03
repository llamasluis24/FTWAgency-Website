"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import type { PlatformSpreadItem } from "@/content/social-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const VISIBLE_COUNT = 3;

const PLATFORM_LABEL = {
  TikTok: "TikTok",
  Reels: "Instagram Reels",
  Shorts: "YouTube Shorts",
  Facebook: "Facebook",
  Reddit: "Reddit",
} as const;

const PHONE_WIDTH = 100;
const PHONE_GAP = 10;
const PHONE_HEIGHT = Math.round(PHONE_WIDTH * (1024 / 520));
const SLIDE_WIDTH = PHONE_WIDTH + PHONE_GAP;
const VIEWPORT_WIDTH = PHONE_WIDTH * VISIBLE_COUNT + PHONE_GAP * (VISIBLE_COUNT - 1);

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
    <div className="mt-4 flex justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`View example ${i + 1}`}
          onClick={() => onSelect(i)}
          className={cn(
            "h-1.5 rounded-full transition-all",
            i === active ? "w-5 bg-accent" : "w-1.5 bg-white/25",
          )}
        />
      ))}
    </div>
  );
}

function ImagePhoneCard({
  item,
  isCenter,
  priority,
}: {
  item: PlatformSpreadItem;
  isCenter: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-[1.25rem] bg-black shadow-lg transition-all duration-300",
        isCenter ? "ring-2 ring-accent/60 shadow-xl" : "opacity-75",
      )}
      style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}
    >
      {item.image && (
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.hook}
          width={520}
          height={1024}
          className="h-full w-full object-contain object-center"
          sizes={`${PHONE_WIDTH}px`}
          priority={priority}
          draggable={false}
        />
      )}
    </div>
  );
}

function PlaceholderPhoneCard({ item, isCenter }: { item: PlatformSpreadItem; isCenter: boolean }) {
  return (
    <div
      className={cn(
        "shrink-0 overflow-hidden rounded-[1.25rem] border-4 bg-black shadow-lg",
        isCenter ? "border-accent/60" : "border-slate-700 opacity-75",
      )}
      style={{ width: PHONE_WIDTH }}
    >
      <div className="bg-black px-2 py-1 text-center">
        <span className="text-[7px] font-semibold text-slate-400">
          {PLATFORM_LABEL[item.platform]}
        </span>
      </div>
      <div className={cn("relative aspect-[9/14] bg-gradient-to-br", item.gradient)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="h-4 w-4 fill-white/80 text-white" />
        </div>
      </div>
    </div>
  );
}

function getVisibleItems(items: PlatformSpreadItem[], offset: number) {
  return Array.from({ length: VISIBLE_COUNT }, (_, j) => {
    const trackIndex = offset + j;
    return trackIndex < items.length ? items[trackIndex] : items[trackIndex - items.length];
  });
}

function findInitialOffset(items: PlatformSpreadItem[]) {
  if (items.length <= VISIBLE_COUNT) return 0;

  for (let offset = 0; offset < items.length; offset++) {
    const keys = getVisibleItems(items, offset).map(
      (item) => item.image ?? `${item.platform}-${item.hook}`,
    );
    if (new Set(keys).size === VISIBLE_COUNT) return offset;
  }

  return 0;
}

export function PlatformSpreadMock({ items }: { items: PlatformSpreadItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState(() => findInitialOffset(items));
  const [instant, setInstant] = useState(false);
  const usesImageMockups = items.some((item) => item.image);

  const trackItems = [...items, ...items.slice(0, VISIBLE_COUNT)];
  const centerIndex = (offset + 1) % items.length;
  const centerItem = items[centerIndex];

  useEffect(() => {
    if (!isInView || reduceMotion || items.length <= VISIBLE_COUNT) return;
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [isInView, items.length, reduceMotion]);

  useEffect(() => {
    if (offset !== items.length) return;
    const frame = requestAnimationFrame(() => {
      setInstant(true);
      setOffset(findInitialOffset(items));
      requestAnimationFrame(() => setInstant(false));
    });
    return () => cancelAnimationFrame(frame);
  }, [offset, items.length]);

  const goTo = (index: number) => {
    setInstant(false);
    setOffset((index - 1 + items.length) % items.length);
  };

  return (
    <div ref={ref} className="mx-auto w-full" style={{ maxWidth: VIEWPORT_WIDTH + 8 }}>
      <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-wider text-muted">
        Same brand · Every feed
      </p>

      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: VIEWPORT_WIDTH, height: usesImageMockups ? PHONE_HEIGHT : 160 }}
      >
        <motion.div
          className="flex"
          style={{ gap: PHONE_GAP }}
          animate={{ x: -offset * SLIDE_WIDTH }}
          transition={
            instant || reduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: EASE }
          }
        >
          {trackItems.map((item, i) => {
            const isCenter = i === offset + 1;
            return usesImageMockups && item.image ? (
              <ImagePhoneCard
                key={`${item.platform}-${item.image}-${i}`}
                item={item}
                isCenter={isCenter}
                priority={i < VISIBLE_COUNT + 1}
              />
            ) : (
              <PlaceholderPhoneCard
                key={`${item.platform}-${item.hook}-${i}`}
                item={item}
                isCenter={isCenter}
              />
            );
          })}
        </motion.div>
      </div>

      {centerItem && usesImageMockups && (
        <p className="mt-3 text-center text-[11px] font-medium text-muted">
          {centerItem.caption}
        </p>
      )}

      <CarouselDots count={items.length} active={centerIndex} onSelect={goTo} />
    </div>
  );
}
