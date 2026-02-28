import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { contactPhoneDisplay, contactPhoneHref, primaryCtaHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Summer House Medspa | Natural-Results Philosophy",
  description:
    "Learn about Summer House Medspa's Dallas approach: conservative injectables, transparent treatment planning, and natural-looking outcomes.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    title: "Natural by Default",
    body:
      "Every plan starts conservatively. We prioritize facial balance and expression so results look refreshed, never overdone.",
  },
  {
    title: "Plan Before Procedure",
    body:
      "Consultations are built around goals, candidacy, timeline, and budget. We map sequence first, then treatment.",
  },
  {
    title: "Relationship-Based Care",
    body:
      "Clients return because communication is clear and continuity is protected. You should feel known, not processed.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="hero-grid py-14">
        <section className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <p className="inline-flex rounded-full border border-[#dfccb2] bg-[#fff3df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f4e1c]">
            About Summer House
          </p>
          <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">A Dallas Medspa Built for Natural Confidence</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#3a4e76]">
            Summer House Medspa was built for clients who want expert care and honest guidance, without pressure to over-treat.
            Our mission is simple: help you look and feel like your best self with outcomes that still feel like you.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#e8dbc8] bg-white p-5">
                <h2 className="text-2xl text-[#1d2a4a]">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#44597f]">{pillar.body}</p>
              </article>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border border-[#e8dbc8] bg-white p-6">
            <h2 className="text-3xl text-[#182446]">How We Work</h2>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-[#40557b]">
              <p>
                We start with consultation, assessment, and a personalized strategy. If treatment is appropriate, we explain options,
                expected timeline, and practical maintenance from day one.
              </p>
              <p>
                Whether you are focused on injectables, skin quality, or medical weight-loss support, our goal is continuity and
                measurable progress.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={primaryCtaHref}
                data-track-cta="book_consultation"
                className="focus-ring rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#963719]"
              >
                Book Consultation
              </a>
              <a
                href={contactPhoneHref}
                data-track-phone="about"
                className="focus-ring rounded-xl border border-[#2e8b57] px-5 py-3 text-sm font-semibold text-[#2e8b57] hover:bg-[#e9f7ef]"
              >
                Call {contactPhoneDisplay}
              </a>
            </div>
          </section>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
    </SiteShell>
  );
}
