import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Medspa Services Dallas TX | Summer House",
  description:
    "Explore Summer House services: Botox, filler, laser, GLP-1 medical weight loss, peptide therapy, and microneedling in Dallas.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <main className="hero-grid min-h-[70vh] py-14">
        <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <p className="inline-flex rounded-full border border-[#dfccb2] bg-[#fff3df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f4e1c]">
            Service Directory
          </p>
          <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">Summer House Medspa Services in Dallas</h1>
          <p className="mt-3 max-w-3xl text-[#3c5078]">
            Browse each service page for candidacy guidance, planning approach, and next-step consultation details.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-2xl border border-[#e8dbc8] bg-white p-5 shadow-sm">
                <h2 className="text-2xl text-[#1c2848]">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#43597e]">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="focus-ring mt-4 inline-block text-sm font-semibold text-[#bb4b28] hover:text-[#993616]"
                >
                  Open page →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
    </SiteShell>
  );
}
