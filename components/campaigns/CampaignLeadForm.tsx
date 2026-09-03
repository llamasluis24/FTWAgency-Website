"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/content/site";
import { web3formsAccessKey, web3formsSubmitUrl } from "@/lib/forms";
import {
  attributionToFormFields,
  getCampaignAttribution,
} from "@/lib/campaigns/attribution";
import { fireCampaignFormStart } from "@/lib/campaigns/conversions";
import { Container, Section } from "@/components/layout/Section";
import { getCampaignFormAnchorId } from "@/lib/campaigns/metadata";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function CampaignLeadForm({ page }: { page: ResolvedCampaignPage }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStarted = useRef(false);

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-bg px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-muted focus:border-accent/50 disabled:opacity-60";

  const handleFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    fireCampaignFormStart({
      campaignName: page.trackingCampaignName,
      service: page.service,
      city: page.city,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const attribution = getCampaignAttribution();
    const attributionFields = attributionToFormFields(attribution);

    for (const [key, value] of Object.entries(attributionFields)) {
      formData.append(key, value);
    }

    formData.append("campaign_name", page.trackingCampaignName);
    formData.append("campaign_service", page.service);
    formData.append("campaign_city", page.city);
    formData.append("campaign_variant", page.experimentVariant);

    try {
      const response = await fetch(web3formsSubmitUrl, {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Something went wrong. Please try again.");
      }

      const thankYouUrl = new URL(page.thankYouDestination, window.location.origin);
      thankYouUrl.searchParams.set("campaign", page.trackingCampaignName);
      thankYouUrl.searchParams.set("service", page.service);
      thankYouUrl.searchParams.set("city", page.city);
      router.push(thankYouUrl.pathname + thankYouUrl.search);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id={getCampaignFormAnchorId()} surface>
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Get Started
            </p>
            <h2 className="font-display text-3xl font-semibold text-heading md:text-4xl">
              Get Your Website Plan
            </h2>
            <p className="mt-4 text-body">
              Tell us about your business and what you need. We will follow up with clear next steps
              — no pressure, no generic pitch deck.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-body">
              <li>Free strategy conversation</li>
              <li>Clear scope and timeline after discovery</li>
              <li>Built for conversion, SEO, and growth systems</li>
            </ul>
          </div>

          <form
            action={web3formsSubmitUrl}
            method="POST"
            className="card-surface space-y-4 p-6 md:p-8"
            onSubmit={handleSubmit}
            onFocus={handleFormStart}
          >
            <input type="hidden" name="access_key" value={web3formsAccessKey} />
            <input type="hidden" name="subject" value={page.formSubject} />
            <input type="hidden" name="from_name" value={siteConfig.name} />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="campaign-name" className="mb-1.5 block text-xs font-semibold text-heading">
                  Name
                </label>
                <input
                  id="campaign-name"
                  name="name"
                  type="text"
                  required
                  disabled={submitting}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="campaign-company" className="mb-1.5 block text-xs font-semibold text-heading">
                  Business Name
                </label>
                <input
                  id="campaign-company"
                  name="company"
                  type="text"
                  required
                  disabled={submitting}
                  className={inputClass}
                  placeholder="Business name"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="campaign-email" className="mb-1.5 block text-xs font-semibold text-heading">
                  Email
                </label>
                <input
                  id="campaign-email"
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="campaign-phone" className="mb-1.5 block text-xs font-semibold text-heading">
                  Phone
                </label>
                <input
                  id="campaign-phone"
                  name="phone"
                  type="tel"
                  disabled={submitting}
                  className={inputClass}
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div>
              <label htmlFor="campaign-website" className="mb-1.5 block text-xs font-semibold text-heading">
                Current Website
              </label>
              <input
                id="campaign-website"
                name="current_website"
                type="url"
                disabled={submitting}
                className={inputClass}
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label htmlFor="campaign-needs" className="mb-1.5 block text-xs font-semibold text-heading">
                What Do You Need Help With?
              </label>
              <textarea
                id="campaign-needs"
                name="message"
                rows={4}
                required
                disabled={submitting}
                className={inputClass}
                placeholder="New website, redesign, better lead capture, mobile improvements..."
              />
            </div>

            <div>
              <label htmlFor="campaign-budget" className="mb-1.5 block text-xs font-semibold text-heading">
                Estimated Project Budget <span className="text-muted">(optional)</span>
              </label>
              <select
                id="campaign-budget"
                name="budget"
                disabled={submitting}
                className={inputClass}
                defaultValue=""
              >
                <option value="">Select a range</option>
                <option value="Under $5,000">Under $5,000</option>
                <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                <option value="$25,000+">$25,000+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
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
              {submitting ? "Sending…" : page.primaryCTA}
            </button>
            <p className="text-center text-xs text-muted">
              By submitting, you agree we may contact you about your request.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
