"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { socialVideoShowcase, type SocialVideoItem } from "@/content/social-video-showcase";
import { cn } from "@/lib/utils";

/**
 * Muted, loop, playsInline autoplay video that only loads and plays when
 * scrolled into view — keeps the page fast for SEO / LCP by avoiding eager
 * download of the source files on initial paint.
 */
function ShowcaseVideo({ item }: { item: SocialVideoItem }) {
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
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-[#121821] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#60d8b8]/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_48px_rgba(96,216,184,0.15)]"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={item.poster}
        aria-label={`${item.title} — ${item.tag} short-form video`}
        className="h-full w-full object-cover"
      >
        {shouldLoad ? <source src={item.src} type="video/mp4" /> : null}
      </video>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#60d8b8]">
          {item.tag}
        </p>
        <p className="mt-0.5 font-display text-sm font-semibold text-white">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export function SocialVideoShowcase({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-[#0B0F14]", className)}>
      <Container>
        <SectionHeading
          eyebrow={socialVideoShowcase.eyebrow}
          title={socialVideoShowcase.headline}
          lede={socialVideoShowcase.subheadline}
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {socialVideoShowcase.items.map((item) => (
            <ShowcaseVideo key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
