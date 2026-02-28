import Link from "next/link";
import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { contactPhoneDisplay, contactPhoneHref, directionsUrl, reviewUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thank You | Consultation Request Received",
  description: "Your Summer House consultation request was received. Our team will contact you shortly.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <main className="hero-grid py-20">
        <section className="mx-auto w-full max-w-3xl rounded-2xl border border-[#e6d9c5] bg-white px-5 py-8 text-center md:px-8">
          <h1 className="text-4xl text-[#182446]">Thanks, your request is in.</h1>
          <p className="mt-4 text-[#34496f]">
            A Summer House team member will contact you to confirm consultation details.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={contactPhoneHref}
              data-track-phone="thank_you"
              className="focus-ring inline-flex rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#97391a]"
            >
              Call {contactPhoneDisplay}
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex rounded-xl border border-[#2b436c] px-5 py-3 text-sm font-semibold text-[#2b436c] hover:bg-[#2b436c] hover:text-white"
            >
              Get Directions
            </a>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex rounded-xl border border-[#c9b08d] bg-[#fff8ef] px-5 py-3 text-sm font-semibold text-[#6a4a1e] hover:bg-[#f5ead7]"
            >
              Read Reviews
            </a>
          </div>
          <p className="mt-6 text-sm text-[#52638a]">
            <Link href="/" className="focus-ring font-semibold text-[#bb4b28] hover:text-[#97391a]">
              Return to homepage
            </Link>
          </p>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ]}
      />
    </SiteShell>
  );
}
