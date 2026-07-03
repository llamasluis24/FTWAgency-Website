"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Play, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { TechModuleBeforeAfter } from "@/content/industries/technology-shared-types";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function MiniFeedPreview({
  variant,
  headline,
  label,
}: {
  variant: "before" | "after";
  headline: string;
  label: string;
}) {
  const isAfter = variant === "after";

  const posts = isAfter
    ? [
        { hook: "We cut onboarding from 2 weeks to 2 days", platform: "Reels", active: true },
        { hook: "3 signs your workflow tool is failing", platform: "TikTok", active: false },
        { hook: "Why ops teams switch to ClearPath", platform: "Shorts", active: false },
      ]
    : [
        { hook: "Happy Monday! 🎉", platform: "LinkedIn", active: true },
        { hook: "Check out our new feature update", platform: "Twitter", active: false },
        { hook: "Company picnic photos!", platform: "Facebook", active: false },
      ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-shadow duration-300",
        isAfter
          ? "border-accent/25 shadow-[0_0_40px_rgba(0,212,255,0.12)]"
          : "border-white/10",
      )}
    >
      <div
        className={cn(
          "px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-wider",
          isAfter ? "bg-accent/10 text-accent" : "bg-red-500/10 text-red-400",
        )}
      >
        {label}
      </div>

      <div className={cn("p-4", isAfter ? "bg-surface" : "bg-bg")}>
        <div className="mx-auto max-w-[200px] overflow-hidden rounded-2xl border-2 border-slate-700 bg-black">
          <div className="relative aspect-[9/14] bg-gradient-to-b from-slate-900 to-black">
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br",
                isAfter ? "from-purple-500/20 to-orange-500/20" : "from-slate-700/30 to-slate-800/30",
              )}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="h-8 w-8 fill-white/80 text-white/80" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10">
              <span className="mb-1 inline-block rounded-full bg-black/50 px-2 py-0.5 text-[8px] font-semibold text-white/80">
                {posts[0].platform}
              </span>
              <p className="text-[10px] font-semibold leading-snug text-white">{posts[0].hook}</p>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-1.5">
          {posts.slice(1).map((post) => (
            <div
              key={post.hook}
              className="flex items-center gap-2 rounded-lg border border-white/5 bg-elevated/50 px-3 py-2 opacity-50"
            >
              <span className="text-[9px] font-medium text-muted">{post.platform}</span>
              <span className="truncate text-[10px] text-body">{post.hook}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 font-display text-sm font-semibold text-heading">{headline}</p>
      </div>
    </div>
  );
}

export function TechnologySocialBeforeAfter({
  content,
}: {
  content: TechModuleBeforeAfter;
}) {
  const [active, setActive] = useState<"before" | "after" | "both">("both");
  const reduceMotion = useReducedMotion();

  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mb-8 flex justify-center gap-2 md:hidden">
          {(["before", "after"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setActive(v)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                active === v ? "bg-accent text-bg" : "border border-white/10 text-body",
              )}
            >
              {content[v].label}
            </button>
          ))}
        </div>

        <RevealStagger className="grid gap-8 lg:grid-cols-2">
          <RevealItem className={cn(active === "after" && "hidden md:block")}>
            <MiniFeedPreview
              variant="before"
              label={content.before.label}
              headline={content.before.headline}
            />
            <ul className="mt-5 space-y-2.5">
              {content.before.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-body">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-500/15">
                    <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className={cn(active === "before" && "hidden md:block")}>
            <MiniFeedPreview
              variant="after"
              label={content.after.label}
              headline={content.after.headline}
            />
            <ul className="mt-5 space-y-2.5">
              {content.after.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-body">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-success/15">
                    <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealStagger>

        {!reduceMotion && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mx-auto mt-10 hidden h-px max-w-md bg-gradient-to-r from-transparent via-accent/50 to-transparent md:block"
          />
        )}
      </Container>
    </Section>
  );
}
