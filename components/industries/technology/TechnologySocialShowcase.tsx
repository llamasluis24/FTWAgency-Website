"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clapperboard, Smartphone, Video } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { PhoneFeedMock } from "@/components/social/PhoneFeedMock";
import { ShootDayMock } from "@/components/social/ShootDayMock";
import { ProfileConvertMock } from "@/components/social/ProfileConvertMock";
import type { TechnologySocialModules } from "@/content/industries/technology-social-modules";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TechnologySocialShowcase({
  content,
}: {
  content: TechnologySocialModules["showcase"];
}) {
  const reduceMotion = useReducedMotion();
  const [activePanel, setActivePanel] = useState<"feed" | "shoot" | "profile">("feed");

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {(
            [
              { id: "feed" as const, label: "Content Feed", icon: Video },
              { id: "shoot" as const, label: "Batch Shoot", icon: Clapperboard },
              { id: "profile" as const, label: "Profile CTA", icon: Smartphone },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActivePanel(id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                activePanel === id
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-white/10 text-muted hover:border-white/20 hover:text-body",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_60px_rgba(0,212,255,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,212,255,0.12),transparent)]" />

          <div className="relative border-b border-white/10 bg-elevated px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="mx-auto rounded-md bg-white/5 px-4 py-1 text-[10px] text-muted">
                clearpath.io · content studio
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center bg-white p-5 sm:p-8">
            <motion.div
              key={activePanel}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="w-full"
            >
              {activePanel === "feed" && <PhoneFeedMock posts={[...content.feedPosts]} />}
              {activePanel === "shoot" && (
                <ShootDayMock
                  location={content.shootLocation}
                  duration={content.shootDuration}
                  clips={[...content.shootClips]}
                  image={content.shootImage}
                  imageAlt={content.shootImageAlt}
                />
              )}
              {activePanel === "profile" && (
                <ProfileConvertMock
                  name={content.profileName}
                  handle={content.profileHandle}
                  bio={content.profileBio}
                  link={content.profileLink}
                  highlights={[...content.profileHighlights]}
                  image={content.profileImage}
                  imageAlt={content.profileImageAlt}
                />
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
