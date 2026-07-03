"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import type { ProfileHighlight } from "@/content/social-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const PHONE_FRAME_WIDTH = 280;
/** Matches normalized mockup assets (520×1024). */
const PHONE_FRAME_HEIGHT = Math.round(PHONE_FRAME_WIDTH * (1024 / 520));

function getProfileFrameSize(imageWidth: number, imageHeight: number) {
  const isLandscape = imageWidth > imageHeight;

  if (isLandscape) {
    const width = 640;
    return {
      width,
      height: Math.round(width * (imageHeight / imageWidth)),
      isLandscape: true,
    };
  }

  return {
    width: PHONE_FRAME_WIDTH,
    height: PHONE_FRAME_HEIGHT,
    isLandscape: false,
  };
}

const GRID_GRADIENTS = [
  "from-orange-500/40 to-red-500/40",
  "from-cyan-500/40 to-blue-500/40",
  "from-purple-500/40 to-pink-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-amber-500/40 to-orange-500/40",
  "from-violet-500/40 to-indigo-500/40",
];

function ProfileConvertPlaceholder({
  name,
  handle,
  bio,
  link,
  highlights,
}: {
  name: string;
  handle: string;
  bio: string;
  link: string;
  highlights: ProfileHighlight[];
}) {
  const reduceMotion = useReducedMotion();
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [showDm, setShowDm] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[1.75rem] border-4 border-slate-800 bg-white shadow-2xl">
        <div className="border-b border-slate-100 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-cyan-400 font-display text-lg font-bold text-slate-900">
              {name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold text-slate-900">{name}</p>
              <p className="text-xs text-slate-500">{handle}</p>
            </div>
            <button
              type="button"
              onClick={() => setShowDm((v) => !v)}
              className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-slate-900"
            >
              Follow
            </button>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-700">{bio}</p>

          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-100 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {link}
          </button>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {highlights.map((h, i) => (
              <button
                key={h.label}
                type="button"
                onClick={() => setActiveHighlight(activeHighlight === i ? null : i)}
                className="flex shrink-0 flex-col items-center gap-1"
              >
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 text-[9px] font-semibold",
                    activeHighlight === i
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-slate-300 bg-slate-50 text-slate-600",
                  )}
                >
                  {h.label.slice(0, 4)}
                </span>
                <span className="text-[9px] text-slate-500">{h.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-0.5 bg-slate-100 p-0.5">
          {GRID_GRADIENTS.map((grad, i) => (
            <div key={i} className={cn("aspect-square bg-gradient-to-br", grad)} />
          ))}
        </div>

        {activeHighlight !== null && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="border-t border-slate-100 bg-emerald-50 px-4 py-3"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              {highlights[activeHighlight].label} Highlight
            </p>
            <p className="mt-1 text-xs text-emerald-800">
              Tap → book · DM &quot;QUOTE&quot; → auto-reply with scheduling link
            </p>
          </motion.div>
        )}

        {showDm && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.35, ease: EASE }}
            className="border-t border-slate-100 bg-slate-50 px-4 py-3"
          >
            <div className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-[10px] font-semibold text-slate-500">Auto-reply · DM keyword</p>
                <p className="mt-1 rounded-xl rounded-tl-sm bg-white px-3 py-2 text-xs text-slate-700 ring-1 ring-slate-200">
                  Hey! 👋 Thanks for reaching out. Here&apos;s our booking link for a free
                  estimate — we have slots open this week.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <p className="mt-3 text-center text-[10px] text-slate-400">
        Tap highlights or Follow to explore conversion paths
      </p>
    </div>
  );
}

export function ProfileConvertMock({
  name,
  handle,
  bio,
  link,
  highlights,
  image,
  imageAlt,
  imageWidth = 1016,
  imageHeight = 1024,
}: {
  name: string;
  handle: string;
  bio: string;
  link: string;
  highlights: ProfileHighlight[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  if (image) {
    const frame = getProfileFrameSize(imageWidth, imageHeight);

    if (frame.isLandscape) {
      return (
        <div className="mx-auto w-full max-w-[640px]">
          <div
            className="relative w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-slate-200"
            style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
          >
            <Image
              src={image}
              alt={imageAlt ?? `Profile conversion mockup for ${name}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 92vw, 640px"
              priority
            />
          </div>
        </div>
      );
    }

    return (
      <div
        className="mx-auto flex flex-col items-center"
        style={{ width: frame.width }}
      >
        <div
          className="relative shrink-0 overflow-hidden rounded-[2.5rem] bg-black shadow-2xl"
          style={{ width: frame.width, height: frame.height }}
        >
          <Image
            src={image}
            alt={imageAlt ?? `Profile conversion mockup for ${name}`}
            fill
            className="object-cover object-top"
            sizes={`${frame.width}px`}
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <ProfileConvertPlaceholder
      name={name}
      handle={handle}
      bio={bio}
      link={link}
      highlights={highlights}
    />
  );
}
