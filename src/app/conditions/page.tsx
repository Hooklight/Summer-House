import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { conditions } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Skin & Aesthetic Conditions We Treat | Summer House Medspa Dallas",
  description:
    "Browse conditions treated at Summer House Medspa in Dallas: sun damage, tech neck, acne scars, post-weight-loss skin, facial asymmetry, and more. Find the right treatment for your concern.",
  alternates: {
    canonical: "/conditions",
  },
};

export default function ConditionsPage() {
  return (
    <SiteShell>
      <main className="hero-grid min-h-[70vh] py-14">
        <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <p className="inline-flex rounded-full border border-[#dfccb2] bg-[#fff3df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f4e1c]">
            Conditions & Concerns
          </p>
          <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">
            Skin & Aesthetic Conditions We Treat in Dallas
          </h1>
          <p className="mt-3 max-w-3xl text-[#3c5078]">
            Not sure which treatment is right for you? Start here. Browse by what you&rsquo;re experiencing — we&rsquo;ll help
            you understand the cause and the best path forward.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {conditions.map((condition) => (
              <article key={condition.slug} className="rounded-2xl border border-[#e8dbc8] bg-white p-5 shadow-sm">
                <h2 className="text-2xl text-[#1c2848]">{condition.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#43597e]">{condition.symptomSummary}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {condition.treatments.slice(0, 2).map((t) => (
                    <span
                      key={t.name}
                      className="rounded-full bg-[#f0ebe0] px-2 py-0.5 text-xs text-[#5a4030]"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="focus-ring mt-4 inline-block text-sm font-semibold text-[#bb4b28] hover:text-[#993616]"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Conditions", path: "/conditions" },
        ]}
      />
    </SiteShell>
  );
}
