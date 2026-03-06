"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { trackEvent } from "@/lib/analytics";
import {
  consultationSteps,
  contactPhoneDisplay,
  contactPhoneHref,
  hasRealPhone,
  serviceOptions,
} from "@/lib/content";

type LeadFormProps = {
  sourcePage: string;
  title?: string;
  defaultService?: string;
  defaultCity?: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  sourcePage,
  title = "Start a Conversation",
  defaultService,
  defaultCity,
}: LeadFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const serviceValue = defaultService ?? "Botox and Neuromodulators";
  const cityValue = defaultCity ?? "Dallas";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      city: cityValue,
      serviceType: String(formData.get("serviceType") ?? serviceValue),
      urgency: String(formData.get("urgency") ?? "this_month"),
      preferredContact: String(formData.get("preferredContact") ?? "text"),
      message: String(formData.get("message") ?? ""),
      consent: Boolean(formData.get("consent")),
      company: String(formData.get("company") ?? ""),
      sourcePage,
      landingUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      utmSource: searchParams?.get("utm_source") ?? "",
      utmMedium: searchParams?.get("utm_medium") ?? "",
      utmCampaign: searchParams?.get("utm_campaign") ?? "",
      utmTerm: searchParams?.get("utm_term") ?? "",
      utmContent: searchParams?.get("utm_content") ?? "",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please call us directly.");
      }

      setStatus("success");
      setMessage("Your message is on its way. We'll be in touch shortly.");
      trackEvent("generate_lead", {
        event_category: "lead_form",
        event_label: payload.serviceType,
      });
      form.reset();
      setIsExpanded(false);

      setTimeout(() => {
        router.push("/thank-you");
      }, 400);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please call us directly.",
      );
    }
  }

  const inputClass =
    "focus-ring w-full rounded-lg border border-[#d4c3aa] bg-white px-3 py-2.5 text-[#1b253f] text-sm placeholder:text-[#9ba8bf]";
  const labelClass = "flex flex-col gap-1.5 text-sm font-medium text-[#243354]";

  return (
    <section className="glass-card rounded-2xl border border-[#e4d9c8] p-5 shadow-[0_20px_60px_rgba(26,33,48,0.08)] md:p-7">
      {/* Header */}
      <h2 className="font-display text-2xl text-[#1c2743]">{title}</h2>
      <p className="mt-1.5 text-sm text-[#34405f]">
        Tell us what you&rsquo;re curious about. We&rsquo;ll take it from there.
      </p>

      {/* Privacy note — before the form, increases trust */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#e4d9c8] bg-[#f8f2e8] px-3 py-2 text-xs text-[#4a5c7a]">
        <svg className="h-3.5 w-3.5 shrink-0 text-[#7a9e7e]" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1L2 3.5v5c0 3.3 2.5 6.1 6 7 3.5-.9 6-3.7 6-7v-5L8 1z" />
        </svg>
        <span><strong>Your information stays with us.</strong> We only use it to respond to your request.</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
        {/* Honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

        {/* ── Tier 1: Always visible ─────────────────── */}

        <label className={labelClass}>
          First Name
          <input
            className={inputClass}
            name="name"
            required
            maxLength={80}
            autoComplete="given-name"
            placeholder="Your first name"
            onFocus={() => setIsExpanded(true)}
          />
        </label>

        <label className={labelClass}>
          What are you thinking about?
          <select
            className={inputClass}
            name="serviceType"
            defaultValue={serviceValue}
            onChange={() => setIsExpanded(true)}
          >
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          How would you like us to reach you?
          <select
            className={inputClass}
            name="preferredContact"
            defaultValue="text"
            onChange={() => setIsExpanded(true)}
          >
            <option value="text">Text message</option>
            <option value="phone">Phone call</option>
            <option value="email">Email</option>
          </select>
        </label>

        {/* ── Tier 2: Revealed after engagement ─────── */}
        {isExpanded && (
          <>
            <label className={labelClass}>
              Phone
              <input
                className={inputClass}
                name="phone"
                required
                maxLength={30}
                autoComplete="tel"
                inputMode="tel"
                placeholder="(214) 555-1234"
              />
            </label>

            <label className={labelClass}>
              Email <span className="font-normal text-[#7a9e7e]">(optional)</span>
              <input
                className={inputClass}
                name="email"
                type="email"
                maxLength={120}
                autoComplete="email"
                placeholder="name@email.com"
              />
            </label>

            <label className={labelClass}>
              When are you thinking?
              <select className={inputClass} name="urgency" defaultValue="this_month">
                <option value="this_week">This week</option>
                <option value="within_2_weeks">Within 2 weeks</option>
                <option value="this_month">This month</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </label>

            <label className={labelClass}>
              Anything else we should know? <span className="font-normal text-[#7a9e7e]">(optional)</span>
              <textarea
                className={`${inputClass} min-h-20`}
                name="message"
                maxLength={1000}
                placeholder="An upcoming event, a concern you have, how long you've been thinking about it…"
              />
            </label>

            <label className="flex items-start gap-2 text-xs text-[#43577e]">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-0.5 h-4 w-4 rounded border-[#c8b89d] accent-[#bb4b28]"
              />
              <span>
                I consent to be contacted by Summer House Medspa by phone, text, or email regarding my
                inquiry.
              </span>
            </label>
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          onClick={() => !isExpanded && setIsExpanded(true)}
          className="focus-ring w-full rounded-xl bg-[#bb4b28] px-4 py-3.5 text-base font-semibold text-white shadow-summer hover:bg-[#9d3b1d] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting"
            ? "Sending…"
            : isExpanded
              ? "Start a Conversation"
              : "Continue →"}
        </button>

        {/* Status message */}
        {message && (
          <div
            className={`rounded-lg px-3 py-2.5 text-sm ${
              status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
            }`}
          >
            {message}
            {status === "error" && (
              <>
                {" "}
                {hasRealPhone ? (
                  <a href={contactPhoneHref} data-track-phone="form_error" className="focus-ring font-semibold underline">
                    Call {contactPhoneDisplay}
                  </a>
                ) : (
                  <Link href="/#lead-form" className="focus-ring font-semibold underline">
                    Retry
                  </Link>
                )}
              </>
            )}
          </div>
        )}

        {/* What happens next — shown after expansion */}
        {isExpanded && (
          <div className="rounded-xl border border-[#eadfcf] bg-[#fff9f0] p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#485c83]">What Happens Next</p>
            <ul className="mt-2 grid gap-1 text-xs text-[#4c6188]">
              {consultationSteps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Prefer to call */}
        <p className="text-xs text-[#5a6b90]">
          Prefer to call?{" "}
          <a
            href={contactPhoneHref}
            data-track-phone="form"
            className="focus-ring font-semibold text-[#3d6642] underline"
          >
            {contactPhoneDisplay}
          </a>
          {" "}— we pick up Tuesday–Saturday.
        </p>
      </form>
    </section>
  );
}
