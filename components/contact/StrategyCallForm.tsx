"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { web3formsAccessKey, web3formsSubmitUrl } from "@/lib/forms";

interface Option {
  value: string;
  label: string;
}

export function StrategyCallForm({
  industries,
  services,
}: {
  industries: Option[];
  services: Option[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-surface flex flex-col items-center p-12 text-center"
      >
        <CheckCircle2 className="mb-4 h-12 w-12 text-success" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-semibold text-heading">Request received.</h3>
        <p className="mt-2 max-w-sm text-body">
          We'll reach out within one business day to schedule your strategy call. Check your inbox
          for a confirmation.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-bg px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent/50 disabled:opacity-60";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    if (formData.getAll("services_interested").length === 0) {
      formData.append("services_interested", "Not specified");
    }

    try {
      const response = await fetch(web3formsSubmitUrl, {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      action={web3formsSubmitUrl}
      method="POST"
      className="card-surface space-y-5 p-8"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="access_key" value={web3formsAccessKey} />
      <input type="hidden" name="subject" value="New strategy call request — FTW Agency" />
      <input type="hidden" name="from_name" value={siteConfig.name} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-heading">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={submitting}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-heading">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            disabled={submitting}
            placeholder="Company name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-heading">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={submitting}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-heading">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            disabled={submitting}
            placeholder="(555) 555-5555"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="industry" className="mb-1.5 block text-xs font-semibold text-heading">
            Industry
          </label>
          <select id="industry" name="industry" disabled={submitting} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((i) => (
              <option key={i.value} value={i.label}>
                {i.label}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-heading">
            Monthly growth budget
          </label>
          <select id="budget" name="budget" disabled={submitting} className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option value="Under $2,500">Under $2,500</option>
            <option value="$2,500 – $5,000">$2,500 – $5,000</option>
            <option value="$5,000 – $10,000">$5,000 – $10,000</option>
            <option value="$10,000+">$10,000+</option>
            <option value="Project-based">Project-based</option>
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
              <input
                type="checkbox"
                name="services_interested"
                value={s.label}
                disabled={submitting}
                className="sr-only"
              />
              {s.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-heading">
          What does growth look like for you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={submitting}
          placeholder="Tell us about your business and your biggest growth constraint..."
          className={inputClass}
        />
      </div>

      {error ? (
        <p className="rounded-[10px] border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-[10px] bg-accent px-6 py-3.5 font-display text-base font-semibold text-[#04222b] transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request My Strategy Call"}
      </button>
      <p className="text-center text-xs text-muted">
        Free 30-minute call · No pressure · Clear next steps either way
      </p>
    </form>
  );
}
