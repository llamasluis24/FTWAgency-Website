"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Case study reel with user-controlled playback and sound (not muted). */
export function CaseStudyReelVideo({
  name,
  location,
  description,
  src,
  poster,
  className,
}: {
  name: string;
  location: string;
  description: string;
  src: string;
  poster: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
        }
      },
      { threshold: 0.2, rootMargin: "120px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={containerRef}
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-[#121821] shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      <div className="relative mx-auto aspect-[9/16] max-h-[520px] w-full max-w-[300px] bg-black">
        <video
          ref={videoRef}
          controls
          playsInline
          preload={shouldLoad ? "metadata" : "none"}
          poster={poster}
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          aria-label={`${name} demolition reel — ${location}`}
          className="h-full w-full object-cover"
        >
          {shouldLoad ? <source src={src} type="video/mp4" /> : null}
        </video>
      </div>

      <figcaption className="space-y-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#60d8b8]">
              {location}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-heading">{name}</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
            <Volume2 className="h-3 w-3" aria-hidden />
            Sound on
          </span>
        </div>
        <p className="text-sm leading-relaxed text-body">{description}</p>
      </figcaption>
    </figure>
  );
}
