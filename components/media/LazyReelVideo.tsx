"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function LazyReelVideo({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (!prefersReducedMotion) {
              const playPromise = video.play();
              if (playPromise) playPromise.catch(() => undefined);
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35, rootMargin: "200px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative h-full w-full bg-black", className)}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={label}
        className="h-full w-full object-cover"
      >
        {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
