"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";
import type { SmsMessage } from "@/content/reputation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ReviewRequestPhoneMock({ messages }: { messages: SmsMessage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setVisible(messages.length);
      return;
    }
    setVisible(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= messages.length) clearInterval(interval);
    }, 900);
    return () => clearInterval(interval);
  }, [isInView, messages.length, reduceMotion]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] border-4 border-slate-800 bg-black shadow-2xl">
        <div className="flex items-center justify-between bg-slate-900 px-5 py-3">
          <div>
            <p className="text-[10px] text-slate-400">Messages</p>
            <p className="text-sm font-semibold text-white">Summit HVAC</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <CheckCheck className="h-4 w-4 text-emerald-400" />
          </div>
        </div>

        <div className="space-y-2 bg-slate-950 px-3 py-4" style={{ minHeight: 340 }}>
          {messages.slice(0, visible).map((msg, i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className={cn(
                "flex",
                msg.from === "customer" ? "justify-end" : "justify-start",
              )}
            >
              {msg.from === "system" ? (
                <div className="mx-auto flex items-center gap-1.5 rounded-full bg-slate-800/80 px-3 py-1">
                  <Check className="h-3 w-3 text-accent" />
                  <span className="text-[10px] text-slate-400">{msg.text}</span>
                  {msg.time && (
                    <span className="text-[9px] text-slate-500">{msg.time}</span>
                  )}
                </div>
              ) : (
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5",
                    msg.from === "business"
                      ? "rounded-bl-md bg-slate-800 text-slate-100"
                      : "rounded-br-md bg-accent text-slate-900",
                  )}
                >
                  <p className="text-[13px] leading-snug">{msg.text}</p>
                  {msg.time && (
                    <p
                      className={cn(
                        "mt-1 text-[9px]",
                        msg.from === "business" ? "text-slate-500" : "text-slate-700",
                      )}
                    >
                      {msg.time}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}

          {visible >= messages.length && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, ease: EASE }}
              className="mx-auto mt-2 flex items-center justify-center gap-1"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08, ease: EASE }}
                  className="text-lg text-[#FBBC04]"
                >
                  ★
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
