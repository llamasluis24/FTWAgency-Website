"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Avoid SSR/hydration leaving content at opacity:0 when client JS fails to load. */
function useCanAnimate() {
  const [canAnimate, setCanAnimate] = useState(false);
  useEffect(() => setCanAnimate(true), []);
  return canAnimate;
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Render as a different element for layout purposes */
  as?: "div" | "section" | "li" | "span";
}

/**
 * Shared scroll-reveal wrapper: fade-up 24px, 0.6s, premium ease.
 * Honors prefers-reduced-motion automatically.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const canAnimate = useCanAnimate();
  const Component = motion[as];
  const Tag = as;

  if (reduceMotion || !canAnimate) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();
  const canAnimate = useCanAnimate();
  if (reduceMotion || !canAnimate) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
