"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { WebsiteBeforeAfterExample } from "@/content/website-portfolio-before-after";
import { cn } from "@/lib/utils";

interface AnimationConfig {
  beforeShouldAnimate: boolean;
  afterShouldAnimate: boolean;
  beforeDuration: number;
  afterDuration: number;
  beforeScrollDuration: number;
  afterScrollDuration: number;
  maxScrollDuration: number;
}

const DEFAULT_ANIMATION: AnimationConfig = {
  beforeShouldAnimate: false,
  afterShouldAnimate: false,
  beforeDuration: 0,
  afterDuration: 0,
  beforeScrollDuration: 0,
  afterScrollDuration: 0,
  maxScrollDuration: 0,
};

function useBeforeAfterAnimation(example: WebsiteBeforeAfterExample): AnimationConfig {
  const [animationConfig, setAnimationConfig] =
    useState<AnimationConfig>(DEFAULT_ANIMATION);

  useEffect(() => {
    setAnimationConfig(DEFAULT_ANIMATION);

    const loadImageDimensions = async () => {
      const beforeImg = new window.Image();
      const afterImg = new window.Image();

      const beforePromise = new Promise<{ width: number; height: number }>(
        (resolve) => {
          beforeImg.onload = () =>
            resolve({
              width: beforeImg.naturalWidth,
              height: beforeImg.naturalHeight,
            });
          beforeImg.src = example.before;
        },
      );

      const afterPromise = new Promise<{ width: number; height: number }>(
        (resolve) => {
          afterImg.onload = () =>
            resolve({
              width: afterImg.naturalWidth,
              height: afterImg.naturalHeight,
            });
          afterImg.src = example.after;
        },
      );

      try {
        const [beforeDims, afterDims] = await Promise.all([
          beforePromise,
          afterPromise,
        ]);

        const containerHeight = window.innerWidth >= 768 ? 384 : 288;
        const screenWidth = window.innerWidth;
        const containerWidth =
          screenWidth >= 768
            ? Math.min(screenWidth * 0.4, 500)
            : screenWidth - 32;

        const containerAspectRatio = containerWidth / containerHeight;
        const beforeAspectRatio = beforeDims.width / beforeDims.height;
        const afterAspectRatio = afterDims.width / afterDims.height;

        const beforeNeedsAnimation = beforeAspectRatio < containerAspectRatio;
        const afterNeedsAnimation = afterAspectRatio < containerAspectRatio;

        let beforeScrollPixels = 0;
        let afterScrollPixels = 0;

        if (beforeNeedsAnimation) {
          const scaledBeforeHeight = containerWidth / beforeAspectRatio;
          beforeScrollPixels = Math.max(0, scaledBeforeHeight - containerHeight);
        }

        if (afterNeedsAnimation) {
          const scaledAfterHeight = containerWidth / afterAspectRatio;
          afterScrollPixels = Math.max(0, scaledAfterHeight - containerHeight);
        }

        const scrollSpeed = 50;
        const beforeScrollDuration = beforeScrollPixels / scrollSpeed;
        const afterScrollDuration = afterScrollPixels / scrollSpeed;
        const maxScrollDuration = Math.max(
          beforeScrollDuration,
          afterScrollDuration,
        );
        const totalDuration = maxScrollDuration * 2 + 2;

        setAnimationConfig({
          beforeShouldAnimate: beforeNeedsAnimation,
          afterShouldAnimate: afterNeedsAnimation,
          beforeDuration: totalDuration,
          afterDuration: totalDuration,
          beforeScrollDuration,
          afterScrollDuration,
          maxScrollDuration,
        });
      } catch {
        setAnimationConfig(DEFAULT_ANIMATION);
      }
    };

    loadImageDimensions();
  }, [example]);

  return animationConfig;
}

function ScrollingScreenshot({
  src,
  alt,
  shouldAnimate,
  duration,
  imageType,
  scrollDuration,
  maxScrollDuration,
}: {
  src: string;
  alt: string;
  shouldAnimate: boolean;
  duration: number;
  imageType: "before" | "after";
  scrollDuration: number;
  maxScrollDuration: number;
}) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    if (shouldAnimate && duration > 0 && scrollDuration > 0) {
      const animationName = `object-position-${imageType}-${Date.now()}`;
      const scrollDownPercent = (scrollDuration / duration) * 100;
      const waitEndPercent = ((maxScrollDuration + 2) / duration) * 100;

      const keyframes = `
        @keyframes ${animationName} {
          0% { object-position: top center; }
          ${scrollDownPercent}% { object-position: bottom center; }
          ${waitEndPercent}% { object-position: bottom center; }
          100% { object-position: top center; }
        }
      `;

      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);
      img.style.animation = `${animationName} ${duration}s linear infinite`;

      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }

    img.style.animation = "none";
    img.style.objectPosition = "top center";
  }, [src, shouldAnimate, duration, imageType, scrollDuration, maxScrollDuration]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      style={{ objectPosition: "top center" }}
    />
  );
}

export function WebsiteBeforeAfterComparison({
  example,
  className,
  showLabels = true,
}: {
  example: WebsiteBeforeAfterExample;
  className?: string;
  showLabels?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const animationConfig = useBeforeAfterAnimation(example);

  return (
    <motion.div
      key={example.title}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn("grid gap-8 md:grid-cols-2 md:gap-12", className)}
    >
      <ComparisonCard
        variant="before"
        label="Before"
        showLabel={showLabels}
        imageSrc={example.before}
        imageAlt={`${example.title} before`}
        title={example.beforeTitle}
        description={example.beforeDescription}
        shouldAnimate={animationConfig.beforeShouldAnimate}
        duration={animationConfig.beforeDuration}
        scrollDuration={animationConfig.beforeScrollDuration}
        maxScrollDuration={animationConfig.maxScrollDuration}
      />

      <ComparisonCard
        variant="after"
        label="After"
        showLabel={showLabels}
        imageSrc={example.after}
        imageAlt={`${example.title} after`}
        title={example.afterTitle}
        description={example.afterDescription}
        shouldAnimate={animationConfig.afterShouldAnimate}
        duration={animationConfig.afterDuration}
        scrollDuration={animationConfig.afterScrollDuration}
        maxScrollDuration={animationConfig.maxScrollDuration}
      />
    </motion.div>
  );
}

function ComparisonCard({
  variant,
  label,
  showLabel = true,
  imageSrc,
  imageAlt,
  title,
  description,
  shouldAnimate,
  duration,
  scrollDuration,
  maxScrollDuration,
}: {
  variant: "before" | "after";
  label: string;
  showLabel?: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  shouldAnimate: boolean;
  duration: number;
  scrollDuration: number;
  maxScrollDuration: number;
}) {
  const isAfter = variant === "after";

  return (
    <div className="relative">
      {showLabel && (
        <div
          className={cn(
            "absolute left-0 top-0 z-10 rounded-br-lg px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white md:text-xs",
            isAfter ? "bg-accent" : "bg-red-500",
          )}
        >
          {label}
        </div>
      )}

      <div className="h-72 overflow-hidden rounded-2xl border border-white/10 bg-elevated shadow-card md:h-96">
        <ScrollingScreenshot
          src={imageSrc}
          alt={imageAlt}
          shouldAnimate={shouldAnimate}
          duration={duration}
          imageType={variant}
          scrollDuration={scrollDuration}
          maxScrollDuration={maxScrollDuration}
        />
      </div>

      <div
        className={cn(
          "mt-4 rounded-xl border p-4",
          isAfter
            ? "border-accent/20 bg-accent/5"
            : "border-white/10 bg-surface",
        )}
      >
        <h4
          className={cn(
            "font-display text-base font-semibold",
            isAfter ? "text-accent" : "text-heading",
          )}
        >
          {title}
        </h4>
        <p className="mt-1 text-sm text-body">{description}</p>
      </div>
    </div>
  );
}
