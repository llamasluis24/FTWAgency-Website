"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Heart, MessageCircle, Play, Share2 } from "lucide-react";
import type { FeedPost } from "@/content/social-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const PLATFORM_STYLE = {
  TikTok: "from-pink-500/20 to-cyan-500/20 text-pink-300",
  Reels: "from-purple-500/20 to-orange-500/20 text-purple-300",
  Shorts: "from-red-500/20 to-red-500/10 text-red-300",
} as const;

function FeedCarouselDots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex justify-center gap-1.5 py-3">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`View example ${i + 1}`}
          onClick={() => onSelect(i)}
          className={cn(
            "h-1.5 rounded-full transition-all",
            i === active ? "w-5 bg-accent" : "w-1.5 bg-slate-600",
          )}
        />
      ))}
    </div>
  );
}

const PHONE_FRAME_WIDTH = 280;
/** Matches normalized mockup assets (520×1024). */
const PHONE_FRAME_HEIGHT = Math.round(PHONE_FRAME_WIDTH * (1024 / 520));

function ImageFeedCarousel({
  posts,
  active,
  reduceMotion,
}: {
  posts: FeedPost[];
  active: number;
  reduceMotion: boolean | null;
}) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[2.5rem] bg-black shadow-2xl"
      style={{ width: PHONE_FRAME_WIDTH, height: PHONE_FRAME_HEIGHT }}
    >
      {posts.map((item, i) =>
        item.image ? (
          <motion.div
            key={`${item.platform}-${item.hook}-${i}`}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE }}
            aria-hidden={i !== active}
          >
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.hook}
              fill
              className="object-contain object-center"
              sizes={`${PHONE_FRAME_WIDTH}px`}
              priority={i === 0}
            />
          </motion.div>
        ) : null,
      )}
    </div>
  );
}

export function PhoneFeedMock({ posts }: { posts: FeedPost[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % posts.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isInView, posts.length, reduceMotion]);

  const post = posts[active];
  const usesImageMockups = posts.some((item) => item.image);

  if (usesImageMockups) {
    return (
      <div
        ref={ref}
        className="mx-auto flex flex-col items-center"
        style={{ width: PHONE_FRAME_WIDTH }}
      >
        <ImageFeedCarousel posts={posts} active={active} reduceMotion={reduceMotion} />
        <FeedCarouselDots count={posts.length} active={active} onSelect={setActive} />
      </div>
    );
  }

  return (
    <div ref={ref} className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border-4 border-slate-800 bg-black shadow-2xl">
        <div className="flex items-center justify-center bg-black px-4 py-2">
          <div className="h-1 w-16 rounded-full bg-slate-700" />
        </div>

        <div className="relative aspect-[9/16] max-h-[420px] overflow-hidden bg-gradient-to-b from-slate-900 to-black">
          <motion.div
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className={cn(
              "absolute inset-0 bg-gradient-to-br",
              PLATFORM_STYLE[post.platform],
            )}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Play className="h-7 w-7 fill-white text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-16">
            <span
              className={cn(
                "mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold",
                PLATFORM_STYLE[post.platform],
              )}
            >
              {post.platform}
            </span>
            <p className="text-sm font-semibold leading-snug text-white">{post.hook}</p>
          </div>

          <div className="absolute bottom-4 right-3 flex flex-col items-center gap-4">
            {[
              { icon: Heart, value: post.likes },
              { icon: MessageCircle, value: "842" },
              { icon: Share2, value: post.shares },
            ].map(({ icon: Icon, value }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-0.5">
                <Icon className="h-5 w-5 text-white" />
                <span className="text-[10px] font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>

          <div className="absolute right-3 top-4 rounded-full bg-black/50 px-2 py-1">
            <span className="text-[10px] font-bold text-white">{post.views} views</span>
          </div>
        </div>

        <FeedCarouselDots count={posts.length} active={active} onSelect={setActive} />
      </div>
    </div>
  );
}
