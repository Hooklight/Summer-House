import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use | Summer House Medspa",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <main className="hero-grid py-14">
        <section className="mx-auto w-full max-w-4xl rounded-2xl border border-[#e6d9c5] bg-white px-5 py-8 text-sm leading-7 text-[#31456d] md:px-8">
          <h1 className="text-4xl text-[#182446]">Terms of Use</h1>
          <p className="mt-4">
            This website provides educational and marketing information about Summer House Medspa services. Medical and
            aesthetic services are provided only after consultation and eligibility review.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">No Medical Advice</h2>
          <p className="mt-2">
            Website content does not replace medical advice, diagnosis, or treatment. Individual treatment recommendations
            are made only during direct clinical consultation.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">Scheduling and Availability</h2>
          <p className="mt-2">
            Submitting a form does not guarantee a specific appointment time, treatment, or pricing. Availability and care
            plans are confirmed by our team.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">Limitation of Liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, Summer House Medspa is not liable for website interruptions,
            third-party integrations, or indirect damages from use of this website.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">Contact</h2>
          <p className="mt-2">Questions about these terms: {contactEmail}</p>
          <p className="mt-6 text-xs text-[#56678d]">Last updated: February 27, 2026</p>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
      />
    </SiteShell>
  );
}
