"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

/**
 * Strategy-call intake form (prototype: submits to local success state;
 * production wiring connects to CRM/scheduler).
 */
export function StrategyCallForm({
  industries,
  services,
}: {
  industries: Option[];
  services: Option[];
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-surface flex flex-col items-center p-12 text-center"
      >
        <CheckCircle2 className="mb-4 h-12 w-12 text-success" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-semibold text-heading">
          Request received.
        </h3>
        <p className="mt-2 max-w-sm text-body">
          We'll reach out within one business day to schedule your strategy
          call. Check your inbox for a confirmation.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-bg px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent/50";

  return (
    <form
      className="card-surface space-y-5 p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-heading">
            Name
          </label>
          <input id="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-heading">
            Company
          </label>
          <input id="company" required placeholder="Company name" className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-heading">
            Email
          </label>
          <input id="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-heading">
            Phone
          </label>
          <input id="phone" type="tel" placeholder="(555) 555-5555" className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="industry" className="mb-1.5 block text-xs font-semibold text-heading">
            Industry
          </label>
          <select id="industry" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-heading">
            Monthly growth budget
          </label>
          <select id="budget" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>Under $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
            <option>Project-based</option>
          </select>
        </div>
      </div>
      <div>
        <span className="mb-2 block text-xs font-semibold text-heading">
          What are you interested in?
        </span>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <label
              key={s.value}
              className="cursor-pointer rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-body transition-colors has-[:checked]:border-accent/50 has-[:checked]:bg-accent/10 has-[:checked]:text-accent"
            >
              <input type="checkbox" value={s.value} className="sr-only" />
              {s.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="goals" className="mb-1.5 block text-xs font-semibold text-heading">
          What does growth look like for you?
        </label>
        <textarea
          id="goals"
          rows={4}
          placeholder="Tell us about your business and your biggest growth constraint..."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-[10px] bg-accent px-6 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]"
      >
        Request My Strategy Call
      </button>
      <p className="text-center text-xs text-muted">
        Free 30-minute call · No pressure · Clear next steps either way
      </p>
    </form>
  );
}
