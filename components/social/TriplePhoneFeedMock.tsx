"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { FeedPost } from "@/content/social-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function PhoneScreen({
  post,
  widthClass,
  priority,
  className,
}: {
  post: FeedPost;
  widthClass: string;
  priority?: boolean;
  className?: string;
}) {
  if (!post.image) return null;

  return (
    <div
      className={cn(
        "relative aspect-[520/1024] overflow-hidden rounded-[2rem] border-[3px] border-[#111] bg-black",
        "shadow-[0_24px_60px_rgba(0,0,0,0.35),0_8px_20px_rgba(0,0,0,0.2)]",
        widthClass,
        className,
      )}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[7px] z-10 h-[11px] w-[28%] -translate-x-1/2 rounded-full bg-black"
        aria-hidden
      />
      <Image
        src={post.image}
        alt={post.imageAlt ?? post.hook}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 120px, 200px"
        priority={priority}
      />
    </div>
  );
}

export function TriplePhoneFeedMock({ posts }: { posts: FeedPost[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const center = posts[0];
  const left = posts[1] ?? posts[0];
  const right = posts[2] ?? posts[0];

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative mx-auto w-full max-w-[500px] px-1"
      role="img"
      aria-label="Three example social media posts for Elevate Coffee Co., BRGR HAUS, and Luxe Interiors"
    >
      <div className="relative flex min-h-[300px] items-end justify-center pb-1 pt-4 sm:min-h-[360px]">
        <div className="absolute bottom-1 left-0 z-10 origin-bottom-right -rotate-[10deg] sm:bottom-3 sm:left-[2%]">
          <PhoneScreen post={left} widthClass="w-[120px] sm:w-[136px]" />
        </div>

        <div className="relative z-20">
          <PhoneScreen
            post={center}
            widthClass="w-[172px] sm:w-[200px]"
            priority
          />
        </div>

        <div className="absolute bottom-1 right-0 z-10 origin-bottom-left rotate-[10deg] sm:bottom-3 sm:right-[2%]">
          <PhoneScreen post={right} widthClass="w-[120px] sm:w-[136px]" />
        </div>
      </div>
    </motion.div>
  );
}
