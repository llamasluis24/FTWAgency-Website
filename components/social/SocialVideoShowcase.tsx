"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { LazyReelVideo } from "@/components/media/LazyReelVideo";
import { socialVideoShowcase } from "@/content/social-video-showcase";
import { cn } from "@/lib/utils";

function ShowcaseVideo({
  title,
  tag,
  src,
  poster,
}: {
  title: string;
  tag: string;
  src: string;
  poster: string;
}) {
  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-[#121821] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#60d8b8]/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_48px_rgba(96,216,184,0.15)]">
      <LazyReelVideo
        src={src}
        poster={poster}
        label={`${title} — ${tag} short-form video`}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#60d8b8]">
          {tag}
        </p>
        <p className="mt-0.5 font-display text-sm font-semibold text-white">{title}</p>
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
            <ShowcaseVideo
              key={item.src}
              title={item.title}
              tag={item.tag}
              src={item.src}
              poster={item.poster}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
