import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { contactAddressLine1, contactCity, contactPhoneDisplay, contactPhoneHref, contactPostalCode, contactRegion, hasRealPhone, locations, primaryCtaHref, services } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return {};
  }

  return {
    title: `${location.name} Medspa | Botox, Filler & Laser in Dallas | Summer House`,
    description: `Summer House serves ${location.name} with natural Botox, filler, laser treatments, and medically supervised wellness in Dallas, TX.`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    notFound();
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Summer House Medspa",
    url: absoluteUrl("/"),
    ...(hasRealPhone ? { telephone: contactPhoneDisplay } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: contactAddressLine1,
      addressLocality: contactCity,
      addressRegion: contactRegion,
      postalCode: contactPostalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    medicalSpecialty: "Aesthetic Medicine",
  };

  return (
    <SiteShell>
      <main className="hero-grid py-12">
        <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <Link href="/locations" className="focus-ring text-sm font-semibold text-[#bb4b28] hover:text-[#933415]">
              ← All Areas
            </Link>
            <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">Summer House Medspa in {location.name}</h1>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#62749a]">{location.county}</p>

            <div className="mt-5 grid gap-4 text-[#3e5279]">
              {location.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={primaryCtaHref}
                data-track-cta="book_consultation"
                className="focus-ring inline-flex rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#97391a]"
              >
                Book Consultation
              </a>
              <a
                href={contactPhoneHref}
                data-track-phone={`location_${location.slug}`}
                className="focus-ring text-sm font-semibold text-[#176038] underline"
              >
                Call {contactPhoneDisplay}
              </a>
            </div>

            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">Common Treatment Requests in {location.name}</h2>
              <div className="mt-3 grid gap-3 text-sm leading-7 text-[#41567d]">
                {location.commonIssues.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">Nearby Neighborhood Coverage</h2>
              <ul className="mt-3 grid gap-2 text-sm text-[#41567d] sm:grid-cols-2">
                {location.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="rounded-lg bg-[#f8f2e8] px-3 py-2">
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">What to Expect at Summer House</h2>
              <div className="mt-3 grid gap-3 text-sm leading-7 text-[#41567d]">
                {location.processParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">Frequently Asked Questions - {location.name}</h2>
              <div className="mt-3 grid gap-4">
                {location.faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-lg text-[#203053]">{item.question}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#42587e]">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-2xl text-[#1c2848]">Popular Services Near {location.name}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.slice(0, 6).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="focus-ring rounded-lg border border-[#e5d7c3] bg-[#fff9f0] px-3 py-2 text-sm font-semibold text-[#2a3f67] hover:border-[#c9ae90]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div>
            <LeadForm
              sourcePage={`location:${location.slug}`}
              defaultService="Botox and Neuromodulators"
              defaultCity={location.name}
              title={`Book a ${location.name} Consultation`}
            />
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.name, path: `/locations/${location.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </SiteShell>
  );
}
