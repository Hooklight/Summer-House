import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Summer House Medspa",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main className="hero-grid py-14">
        <section className="mx-auto w-full max-w-4xl rounded-2xl border border-[#e6d9c5] bg-white px-5 py-8 text-sm leading-7 text-[#31456d] md:px-8">
          <h1 className="text-4xl text-[#182446]">Privacy Policy</h1>
          <p className="mt-4">
            Summer House Medspa collects contact and consultation details submitted through this site to respond to inquiries,
            schedule services, and improve client experience.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">Information We Collect</h2>
          <p className="mt-2">
            Name, phone, email, city, service interests, message content, and technical metadata related to site interactions.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">How We Use Information</h2>
          <p className="mt-2">
            Information is used for consultation follow-up, scheduling, operational analytics, and service improvement.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">Data Retention</h2>
          <p className="mt-2">
            We retain lead and communication records for operational, compliance, and legal requirements.
          </p>
          <h2 className="mt-6 text-2xl text-[#1d2b4c]">Contact</h2>
          <p className="mt-2">For privacy inquiries, email: {contactEmail}</p>
          <p className="mt-6 text-xs text-[#56678d]">Last updated: February 27, 2026</p>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
    </SiteShell>
  );
}
