import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { contactPhoneDisplay, contactPhoneHref, primaryCtaHref } from "@/lib/content";
import { conditions } from "@/lib/conditions";

type ConditionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);

  if (!condition) {
    return {};
  }

  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
    alternates: {
      canonical: `/conditions/${condition.slug}`,
    },
  };
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = conditions.find((item) => item.slug === slug);

  if (!condition) {
    notFound();
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const medicalConditionJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.title,
    description: condition.symptomSummary,
    possibleTreatment: condition.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t.name,
    })),
  };

  const otherConditions = conditions.filter((item) => item.slug !== condition.slug).slice(0, 3);

  return (
    <SiteShell>
      <main className="hero-grid py-12">
        <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <Link
              href="/conditions"
              className="focus-ring text-sm font-semibold text-[#bb4b28] hover:text-[#933415]"
            >
              ← All Conditions
            </Link>
            <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">{condition.title}</h1>
            <p className="mt-3 text-base font-medium italic text-[#4a6080]">{condition.symptomSummary}</p>

            {condition.introParagraphs.map((para, i) => (
              <p key={i} className="mt-4 text-lg leading-relaxed text-[#364a70]">
                {para}
              </p>
            ))}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={primaryCtaHref}
                data-track-cta="book_consultation"
                className="focus-ring inline-flex rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#97391a]"
              >
                Book Consultation
              </a>
              <a
                href={contactPhoneHref}
                data-track-phone={`condition_${condition.slug}`}
                className="focus-ring text-sm font-semibold text-[#176038] underline"
              >
                Call {contactPhoneDisplay}
              </a>
            </div>

            {/* Quick Answers (AEO: LLM + featured snippet target) */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {condition.faq.slice(0, 2).map((item) => (
                <div key={item.question} className="rounded-xl border border-[#e6d9c5] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7f4e1c]">{item.question}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#374d72]">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Signs & Symptoms */}
            <article className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-5">
              <h2 className="text-2xl text-[#1c2848]">Signs you may have this concern</h2>
              <ul className="mt-3 grid gap-2 text-sm text-[#41567d]">
                {condition.whatYouNotice.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 rounded-lg bg-[#f8f2e8] px-3 py-2">
                    <span className="mt-0.5 text-[#bb4b28]">✓</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Treatments */}
            <section className="mt-8">
              <h2 className="text-2xl text-[#1c2848]">Treatments that address this</h2>
              <div className="mt-4 grid gap-4">
                {condition.treatments.map((treatment) => (
                  <article
                    key={treatment.slug + treatment.name}
                    className="rounded-2xl border border-[#e6d9c5] bg-white p-5"
                  >
                    <Link
                      href={`/services/${treatment.slug}`}
                      className="focus-ring text-lg font-semibold text-[#bb4b28] hover:text-[#933415]"
                    >
                      {treatment.name} →
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-[#42587e]">{treatment.description}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* How it helps */}
            <article className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">How we approach treatment</h2>
              {condition.howItHelpsParagraphs.map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-[#42587e]">
                  {para}
                </p>
              ))}
            </article>

            {/* FAQ */}
            <article className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">Frequently asked questions</h2>
              <div className="mt-3 grid gap-4">
                {condition.faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg text-[#203053]">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#42587e]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Related conditions */}
            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">Other concerns we treat</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {otherConditions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/conditions/${item.slug}`}
                    className="focus-ring rounded-xl border border-[#e5d7c3] bg-[#fff9f0] px-4 py-3 text-sm font-semibold text-[#2a3f67] hover:border-[#c9ae90]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>

            <p className="mt-6 text-sm italic text-[#6b82a0]">{condition.cta}</p>
          </div>

          <div>
            <LeadForm
              sourcePage={`condition:${condition.slug}`}
              title={`Discuss ${condition.title}`}
            />
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
          { name: condition.title, path: `/conditions/${condition.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionJsonLd) }}
      />
    </SiteShell>
  );
}
