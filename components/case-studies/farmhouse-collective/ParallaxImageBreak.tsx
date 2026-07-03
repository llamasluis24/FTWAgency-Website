"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ParallaxImageBreak({
  src,
  alt,
  height = "h-[min(70vh,700px)]",
  objectFit = "cover",
}: {
  src: string;
  alt: string;
  height?: string;
  objectFit?: "cover" | "contain";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? (["0%", "0%"] as const) : (["-8%", "8%"] as const),
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);

  return (
    <div ref={ref} className={`relative w-full overflow-hidden bg-[#0B0F14] ${height}`}>
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Image
          src={src}
          alt={alt}
          fill
          className={objectFit === "contain" ? "object-contain object-left" : "object-cover"}
          sizes="100vw"
          quality={92}
          priority={false}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F14]/30 via-transparent to-[#0B0F14]/40" />
    </div>
  );
}
