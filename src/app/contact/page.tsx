import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import {
  contactAddressLine1,
  contactCity,
  contactPhoneDisplay,
  contactPhoneHref,
  contactPostalCode,
  contactRegion,
  directionsUrl,
  officeHours,
  primaryCtaHref,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Summer House Medspa Dallas | Book a Consultation",
  description:
    "Contact Summer House Medspa in Dallas, TX for Botox, filler, laser, and medically supervised wellness consultation.",
  alternates: {
    canonical: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Summer House Medspa",
  url: "https://summerhousemedspa.com/contact",
  telephone: contactPhoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactAddressLine1,
    addressLocality: contactCity,
    addressRegion: contactRegion,
    postalCode: contactPostalCode,
    addressCountry: "US",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="hero-grid py-12">
        <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <h1 className="text-4xl text-[#182446] md:text-5xl">Contact Summer House Medspa</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#3a4e76]">
              Book your consultation and get a natural-results treatment plan tailored to your goals.
            </p>

            <section className="mt-6 rounded-2xl border border-[#e8dbc8] bg-white p-5">
              <h2 className="text-2xl text-[#1c2848]">Visit</h2>
              <p className="mt-3 text-sm leading-7 text-[#40557c]">
                {contactAddressLine1}
                <br />
                {contactCity}, {contactRegion} {contactPostalCode}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={contactPhoneHref}
                  data-track-phone="contact_page"
                  className="focus-ring rounded-xl border border-[#2e8b57] px-4 py-2 text-sm font-semibold text-[#2e8b57] hover:bg-[#e9f7ef]"
                >
                  Call {contactPhoneDisplay}
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-xl border border-[#2b436c] px-4 py-2 text-sm font-semibold text-[#2b436c] hover:bg-[#2b436c] hover:text-white"
                >
                  Get Directions
                </a>
                <a
                  href={primaryCtaHref}
                  data-track-cta="book_consultation"
                  className="focus-ring rounded-xl bg-[#bb4b28] px-4 py-2 text-sm font-semibold text-white hover:bg-[#963719]"
                >
                  Book Consultation
                </a>
              </div>
            </section>

            <section className="mt-6 rounded-2xl border border-[#e8dbc8] bg-white p-5">
              <h2 className="text-2xl text-[#1c2848]">Hours</h2>
              <ul className="mt-3 grid gap-2 text-sm text-[#40557c] sm:grid-cols-2">
                {officeHours.map((entry) => (
                  <li key={entry.day} className="rounded-lg bg-[#f8f2e8] px-3 py-2">
                    <span className="font-semibold">{entry.day}:</span> {entry.hours}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div id="lead-form">
            <LeadForm sourcePage="contact" title="Start a Conversation" />
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
    </SiteShell>
  );
}
