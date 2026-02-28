import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { contactPhoneDisplay, contactPhoneHref, primaryCtaHref } from "@/lib/content";
import { personas } from "@/lib/personas";

type PersonaPageProps = {
  params: Promise<{ persona: string }>;
};

export function generateStaticParams() {
  return personas.map((p) => ({ persona: p.slug }));
}

export async function generateMetadata({ params }: PersonaPageProps): Promise<Metadata> {
  const { persona: slug } = await params;
  const persona = personas.find((p) => p.slug === slug);

  if (!persona) {
    return {};
  }

  return {
    title: persona.metaTitle,
    description: persona.metaDescription,
    alternates: {
      canonical: `/for/${persona.slug}`,
    },
  };
}

export default async function PersonaPage({ params }: PersonaPageProps) {
  const { persona: slug } = await params;
  const persona = personas.find((p) => p.slug === slug);

  if (!persona) {
    notFound();
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: persona.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <SiteShell>
      <main>
        <section className="hero-grid py-12 md:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <Link href="/" className="focus-ring text-sm font-semibold text-[#bb4b28] hover:text-[#933415]">
              ← Summer House Medspa
            </Link>
            <h1 className="mt-4 font-display text-4xl text-[#182446] md:text-6xl">{persona.headline}</h1>
            <p className="mt-3 max-w-4xl text-lg text-[#62749a]">{persona.subheadline}</p>

            <div className="mt-6 grid gap-4 text-[#3e5279] md:grid-cols-2">
              {persona.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#persona-lead-form"
                data-track-cta="persona_start_conversation"
                className="focus-ring inline-flex rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#97391a]"
              >
                Start a Conversation
              </a>
              <a
                href={contactPhoneHref}
                data-track-phone={`persona_${persona.slug}`}
                className="focus-ring text-sm font-semibold text-[#176038] underline"
              >
                Call {contactPhoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-2xl border border-[#e6d9c5] bg-white p-6">
                <h2 className="font-display text-2xl text-[#1c2848]">Why Summer House</h2>
                <div className="mt-4 grid gap-5">
                  {persona.benefits.map((benefit) => (
                    <div key={benefit.heading}>
                      <h3 className="text-lg font-semibold text-[#203053]">{benefit.heading}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#42587e]">{benefit.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <aside className="rounded-2xl border border-[#e6d9c5] bg-[#f8f2e8] p-6">
                <h2 className="font-display text-2xl text-[#1c2848]">Relevant Services</h2>
                <ul className="mt-3 grid gap-2">
                  {persona.keyServices.map((service) => (
                    <li key={service} className="rounded-lg bg-white px-3 py-2 text-sm text-[#41567d]">
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-[#42587e]">{persona.cta}</p>
                <a
                  href={primaryCtaHref}
                  data-track-cta={`persona_${persona.slug}_secondary`}
                  className="focus-ring mt-4 inline-flex text-sm font-semibold text-[#bb4b28] hover:text-[#97391a]"
                >
                  See what&rsquo;s possible →
                </a>
              </aside>
            </div>

            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="font-display text-2xl text-[#1c2848]">Frequently Asked Questions</h2>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                {persona.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-lg text-[#203053]">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#42587e]">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="bg-[#fff8ef] py-12">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <div id="persona-lead-form" className="mx-auto max-w-2xl">
              <LeadForm sourcePage={`persona:${persona.slug}`} title={`Let's Talk`} />
            </div>
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: persona.name, path: `/for/${persona.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </SiteShell>
  );
}
