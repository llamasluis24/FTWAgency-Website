"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PhoneMissed } from "lucide-react";
import type { SmsMessage } from "@/content/automation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SmsConversationMock({ messages }: { messages: SmsMessage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(messages.length);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    setVisibleCount(0);
    let i = 0;
    let cancelled = false;

    const showNext = () => {
      if (cancelled || i >= messages.length) return;
      const msg = messages[i];
      if (msg.sender === "business") {
        setTyping(true);
        setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          setVisibleCount(i + 1);
          i += 1;
          setTimeout(showNext, 600);
        }, 800);
      } else {
        setVisibleCount(i + 1);
        i += 1;
        setTimeout(showNext, 500);
      }
    };

    const t = setTimeout(showNext, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isInView, messages, reduceMotion]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between bg-slate-800 px-5 py-3">
          <span className="text-xs font-medium text-white">Messages</span>
          <span className="text-[10px] text-slate-400">FTW Agency</span>
        </div>

        {visibleCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 border-b border-slate-700 bg-red-950/40 px-4 py-2.5"
          >
            <PhoneMissed className="h-4 w-4 shrink-0 text-red-400" />
            <span className="text-xs text-red-300">{messages[0]?.text}</span>
          </motion.div>
        )}

        <div className="min-h-[320px] space-y-3 bg-slate-900 p-4">
          {messages.slice(1, visibleCount).map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className={cn("flex", msg.sender === "customer" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  msg.sender === "customer"
                    ? "rounded-br-md bg-accent text-[#04222b]"
                    : "rounded-bl-md bg-slate-700 text-slate-100",
                )}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {typing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-md bg-slate-700 px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                    className="h-1.5 w-1.5 rounded-full bg-slate-400"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
