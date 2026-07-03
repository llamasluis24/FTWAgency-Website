"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Camera, MapPin, Clock } from "lucide-react";
import type { ShootClip } from "@/content/social-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function ShootDayPlaceholder({
  location,
  duration,
  clips,
}: {
  location: string;
  duration: string;
  clips: ShootClip[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(clips.length);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    setVisible(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= clips.length) clearInterval(interval);
    }, 450);
    return () => clearInterval(interval);
  }, [isInView, clips.length, reduceMotion]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-lg">
        <div className="mb-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
              <Camera className="h-5 w-5 text-accent" />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Batch Shoot Day
              </p>
              <p className="text-sm font-semibold text-slate-900">{location}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="h-3 w-3" />
              {duration}
            </div>
            <p className="tnum mt-0.5 text-lg font-bold text-accent">{clips.length} assets</p>
          </div>
        </div>

        <div className="relative mb-3 flex justify-center">
          <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 px-5 py-3 text-center shadow-md">
            <MapPin className="mx-auto h-4 w-4 text-accent" />
            <p className="mt-1 text-xs font-semibold text-white">One shoot · Many formats</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {clips.map((clip, i) => (
            <motion.div
              key={clip.hook}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 8 }}
              animate={i < visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.2, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div className={cn("h-14 bg-gradient-to-br", clip.gradient)} />
              <div className="p-2.5">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-wide text-accent">
                    {clip.platform}
                  </span>
                  <span className="text-[8px] text-slate-400">{clip.format}</span>
                </div>
                <p className="mt-1 text-[11px] font-medium leading-snug text-slate-800">
                  {clip.hook}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShootDayMock({
  location,
  duration,
  clips,
  image,
  imageAlt,
}: {
  location: string;
  duration: string;
  clips: ShootClip[];
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <div className="mx-auto w-full max-w-md">
        <Image
          src={image}
          alt={imageAlt ?? `Content shoot day for ${location}`}
          width={810}
          height={1024}
          className="block h-auto w-full rounded-2xl"
          sizes="(max-width: 1024px) 90vw, 36rem"
          priority
        />
      </div>
    );
  }

  return <ShootDayPlaceholder location={location} duration={duration} clips={clips} />;
}
