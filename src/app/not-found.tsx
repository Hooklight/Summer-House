import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="hero-grid py-20">
        <section className="mx-auto w-full max-w-3xl rounded-2xl border border-[#e6d9c5] bg-white px-5 py-8 text-center md:px-8">
          <h1 className="text-4xl text-[#182446]">Page not found</h1>
          <p className="mt-4 text-[#34496f]">
            The page you requested is unavailable. Return to the homepage or contact us to book consultation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="focus-ring inline-flex rounded-xl bg-[#bb4b28] px-5 py-3 text-sm font-semibold text-white hover:bg-[#97391a]"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex rounded-xl border border-[#2b436c] px-5 py-3 text-sm font-semibold text-[#2b436c] hover:bg-[#2b436c] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
