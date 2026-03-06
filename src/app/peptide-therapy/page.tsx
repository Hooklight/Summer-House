import type { Metadata } from "next";
import Link from "next/link";

import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { getAllPeptidePages } from "@/lib/peptide-pages";

export const metadata: Metadata = {
  title: "Peptide Therapy Dallas | Summer House Medspa",
  description:
    "Medically supervised peptide therapy programs in Dallas. BPC-157, thymosin, GHK-Cu, and targeted protocols for gut health, inflammation, sleep, skin, and more. Dr. Daniel Kim, MD.",
  alternates: { canonical: "/peptide-therapy" },
};

export default function PeptideTherapyHub() {
  const pages = getAllPeptidePages();

  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="hero-grid py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6535]">
              Summer House Medspa · Dallas
            </p>
            <h1
              className="mt-5 font-display font-normal leading-tight text-[#182446]"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
            >
              Peptide Therapy
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#3c5078]">
              Short amino acid chains that signal your body&rsquo;s repair, regulatory, and
              renewal processes. Supervised by Dr. Daniel Kim, MD — protocols built around your
              specific biology, not a generic menu.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#lead-form"
                className="focus-ring rounded-2xl bg-[#bb4b28] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#963719]"
              >
                Start a conversation
              </a>
              <Link
                href="/services"
                className="focus-ring text-sm font-semibold text-[#182446] underline decoration-[#c8b897] decoration-2 underline-offset-4 hover:decoration-[#bb4b28]"
              >
                All services →
              </Link>
            </div>
          </div>
        </section>

        {/* Topic grid */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a9e7e]">
              Peptide protocols
            </p>
            <h2
              className="mt-2 font-display font-semibold leading-tight text-[#182446]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              What we treat
            </h2>
            <p className="mt-3 max-w-2xl text-[#3c5078] leading-relaxed">
              Each protocol targets a specific system. Most patients come in focused on one and
              discover interconnections during the consultation.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pages.map((page, i) => (
                <Link
                  key={page.slug}
                  href={`/peptide-therapy/${page.slug}`}
                  className="focus-ring group block rounded-2xl border border-[#e6d9c5] bg-[#fff9f0] p-6 shadow-summer transition-all hover:-translate-y-1 hover:shadow-summer-lg"
                >
                  <div
                    className="mb-4 h-1 w-8 rounded-full"
                    style={{
                      backgroundColor:
                        i % 4 === 0
                          ? "#c8b897"
                          : i % 4 === 1
                            ? "#7a9e7e"
                            : i % 4 === 2
                              ? "#8fa8b7"
                              : "#bb4b28",
                    }}
                  />
                  <h3 className="font-display text-lg leading-snug text-[#182446]">
                    {page.displayTitle}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5a7090]">
                    {page.metaDescription.replace(" Dr. Daniel Kim, MD.", "").slice(0, 100)}…
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#bb4b28] group-hover:underline">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What to expect strip */}
        <section className="py-14" style={{ backgroundColor: "#f5ede0" }}>
          <div className="mx-auto max-w-6xl px-6">
            <h2
              className="font-display font-semibold text-[#182446]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
            >
              How it works
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  body: "Dr. Kim reviews your history, labs, symptoms, and goals — typically 45 minutes. No protocol is written until the picture is clear.",
                },
                {
                  step: "02",
                  title: "Protocol design",
                  body: "Peptides are selected for your specific targets. Dosing, timing, and delivery method are explained before you leave.",
                },
                {
                  step: "03",
                  title: "Supervised course",
                  body: "Most protocols run 8–12 weeks with a midpoint reassessment. Progress is tracked. The plan adjusts if needed.",
                },
              ].map((item) => (
                <article key={item.step} className="rounded-2xl bg-white p-6 shadow-summer">
                  <p className="font-display text-3xl font-semibold text-[#c8b897]">{item.step}</p>
                  <h3 className="mt-3 font-display text-xl text-[#182446]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3c5078]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section id="lead-form" className="bg-[#fff8ef] py-14">
          <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 md:grid-cols-2">
            <div>
              <h2
                className="font-display font-semibold leading-tight text-[#182446]"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
              >
                Ask us anything
              </h2>
              <p className="mt-4 leading-relaxed text-[#3c5078]">
                Peptide therapy questions are specific. So are the answers. Tell us what
                you&rsquo;re dealing with and Dr. Kim will respond personally.
              </p>
              <p className="mt-3 text-sm italic text-[#6b82a0]">
                Same-day callback during business hours.
              </p>
            </div>
            <LeadForm sourcePage="peptide-therapy-hub" title="Start the conversation" />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
