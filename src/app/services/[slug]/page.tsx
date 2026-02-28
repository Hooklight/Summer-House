import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import {
  contactPhoneDisplay,
  contactPhoneHref,
  hasRealPhone,
  primaryCtaHref,
  services,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const treatmentTimeline = [
  {
    step: "Consultation",
    description: "A relaxed, no-pressure conversation. We'll understand your goals, review candidacy, and answer every question before anything else.",
    time: "30 min",
  },
  {
    step: "Treatment",
    description: "When you're ready, treatment is typically 30–60 minutes in a private room. You're in control of pace and comfort throughout.",
    time: "30–60 min",
  },
  {
    step: "Recovery",
    description: "Most clients return to normal activity immediately. We'll walk you through any aftercare specific to your treatment.",
    time: "1–7 days",
  },
  {
    step: "Results",
    description: "You'll notice the first changes within a few days to two weeks. Final results continue to develop over 4–8 weeks.",
    time: "2–8 weeks",
  },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} Dallas TX`,
    areaServed: "Dallas, TX",
    provider: {
      "@type": "MedicalBusiness",
      name: "Summer House Medspa",
      url: absoluteUrl("/"),
      ...(hasRealPhone ? { telephone: contactPhoneDisplay } : {}),
    },
    description: service.summary,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const concernApproachPairs = service.problems.map((problem, index) => ({
    problem,
    approach: service.signs[index] ?? "We review this during consultation and build a conservative sequence around your goals.",
  }));

  return (
    <SiteShell>
      <main>

        {/* ── Service Hero ──────────────────────────────── */}
        <section className="hero-grid py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Link
              href="/services"
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-[#bb4b28] hover:text-[#933415]"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 12L6 8l4-4" />
              </svg>
              All Services
            </Link>

            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_0.9fr]">
              <div>
                {/* Eyebrow */}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a9e7e]">
                  Summer House Medspa · Dallas
                </p>

                {/* Service name — Fraunces, large */}
                <h1 className="reveal-up mt-3 font-display text-4xl leading-[1.1] tracking-[-0.02em] text-[#182446] md:text-6xl">
                  {service.title}
                </h1>

                {/* Definition summary (LLM-optimized) */}
                <p className="reveal-up stagger-1 mt-4 text-lg leading-relaxed text-[#334569]">
                  {service.intro}
                </p>

                {/* CTAs */}
                <div className="reveal-up stagger-2 mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={primaryCtaHref}
                    data-track-cta="book_consultation"
                    className="focus-ring rounded-xl bg-[#bb4b28] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#97391a] shadow-summer"
                  >
                    Is This Right for Me?
                  </a>
                  <a
                    href={contactPhoneHref}
                    data-track-phone={`service_${service.slug}`}
                    className="focus-ring text-sm font-semibold text-[#3d6642] underline"
                  >
                    Call {contactPhoneDisplay}
                  </a>
                </div>
              </div>

              {/* Provider card (column 2 — top of page) */}
              <aside className="reveal-up stagger-2">
                <div className="rounded-2xl border border-[#e4d9c8] bg-white p-6 shadow-summer">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a9e7e]">
                    You&rsquo;ll be treated by
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f0ede6] text-2xl">
                      👩‍⚕️
                    </div>
                    <div>
                      <p className="font-display text-lg text-[#182446]">Summer House Providers</p>
                      <p className="text-sm text-[#4a6080]">Licensed injectors & laser specialists</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#3c5078]">
                    Every client sees the same provider for their treatment type — no rotating staff, no
                    surprises. Your provider reviews your goals before every visit.
                  </p>
                  <Link
                    href="/about"
                    className="focus-ring mt-3 inline-flex text-sm font-semibold text-[#bb4b28] hover:underline"
                  >
                    Meet the team →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Concerns → Solutions + Structured Flow ───── */}
        <section className="bg-white py-12">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:px-6">
            <article className="rounded-2xl border border-[#e6d9c5] bg-[#fff9f2] p-6">
              <h2 className="font-display text-2xl text-[#1c2848]">Concerns to Solutions</h2>
              <p className="mt-2 text-sm text-[#4a5c7a]">
                We start with your language, then translate it into a conservative treatment approach.
              </p>
              <div className="mt-5 grid gap-3">
                {concernApproachPairs.map((pair) => (
                  <div key={pair.problem} className="grid gap-3 rounded-xl border border-[#e8dbc8] bg-white p-4 md:grid-cols-[1fr_1fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7f4e1c]">What clients say</p>
                      <p className="mt-1 text-sm text-[#3f5378]">{pair.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#3d6642]">How we approach it</p>
                      <p className="mt-1 text-sm text-[#3f5378]">{pair.approach}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="font-display text-2xl text-[#1c2848]">What to Expect</h2>
              <p className="mt-2 text-sm text-[#4a5c7a]">
                A simple, low-pressure sequence from consultation to final outcome.
              </p>
              <div className="mt-5 grid gap-0">
                {treatmentTimeline.map((item, i) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#bb4b28] text-xs font-bold text-white">
                        {i + 1}
                      </div>
                      {i < treatmentTimeline.length - 1 && (
                        <div className="mt-1 w-px flex-1 bg-[#e8dbc8]" style={{ minHeight: "1.5rem" }} />
                      )}
                    </div>

                    <div className="pb-5">
                      <div className="flex items-baseline gap-3">
                        <p className="font-display text-lg text-[#182446]">{item.step}</p>
                        <span className="rounded-full border border-[#e4d9c8] bg-[#f8f2e8] px-2 py-0.5 text-xs text-[#5a6f96]">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-[#42587e]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <section className="rounded-2xl border border-[#e6d9c5] bg-[#f8f2e8] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5a6f96]">Next Step</p>
              <h2 className="mt-2 font-display text-2xl text-[#1c2848]">Is {service.title} Right for Me?</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#43597e]">
                We will review candidacy, expected outcome, downtime, and total plan before any treatment decision.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#service-lead-form"
                  className="focus-ring rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#97391a]"
                >
                  Start a Conversation
                </a>
                <a
                  href={contactPhoneHref}
                  data-track-phone={`service_${service.slug}_midpage`}
                  className="focus-ring text-sm font-semibold text-[#3d6642] underline"
                >
                  Call {contactPhoneDisplay}
                </a>
              </div>
            </section>

            <article className="rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="font-display text-2xl text-[#1c2848]">Frequently Asked Questions</h2>
              <div className="mt-4 grid gap-5">
                {service.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-display text-lg text-[#203053]">{item.question}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#42587e]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>

            <section className="rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="font-display text-2xl text-[#1c2848]">Often Combined With</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="focus-ring rounded-xl border border-[#e5d7c3] bg-[#fff9f0] px-4 py-3 text-sm font-semibold text-[#2a3f67] hover:border-[#c9ae90] hover:shadow-summer"
                  >
                    {item.title} →
                  </Link>
                ))}
              </div>
            </section>

            <section id="service-lead-form" className="rounded-2xl border border-[#e6d9c5] bg-white p-5 md:p-7">
              <LeadForm
                sourcePage={`service:${service.slug}`}
                defaultService={service.title}
                title={`Let's Talk About ${service.title}`}
              />
            </section>
          </div>
        </section>

      </main>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </SiteShell>
  );
}
