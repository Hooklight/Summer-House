import Image from "next/image";
import Link from "next/link";

import {
  contactAddressLine1,
  contactCity,
  contactPhoneDisplay,
  contactPhoneHref,
  contactPostalCode,
  contactRegion,
  directionsUrl,
  hasRealPhone,
  officeHours,
  primaryCtaHref,
} from "@/lib/content";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#e7dccd] bg-[#fff8ef]/96 backdrop-blur">
        {/* Announcement bar */}
        <div className="border-b border-[#e9dfd1] bg-[#f6eddc] px-4 py-1 text-center text-[11px] text-[#4a5c82] md:px-6">
          Natural-results medspa care in Dallas · Appointments Tuesday–Saturday
        </div>

        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="focus-ring flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="Summer House Medspa"
              width={40}
              height={40}
              className="h-9 w-9 rounded-sm"
              priority
            />
            <span className="font-display text-base font-semibold text-[#1a2745] md:text-lg">
              Summer House
              <span className="hidden font-normal text-[#7a9e7e] md:inline"> Medspa</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <Link href="/services" className="focus-ring text-sm font-medium text-[#243354] hover:text-[#bb4b28]">
              Services
            </Link>
            <Link href="/conditions" className="focus-ring text-sm font-medium text-[#243354] hover:text-[#bb4b28]">
              Conditions
            </Link>
            <Link href="/peptide-therapy" className="focus-ring text-sm font-medium text-[#243354] hover:text-[#bb4b28]">
              Peptides
            </Link>
            <Link href="/locations" className="focus-ring text-sm font-medium text-[#243354] hover:text-[#bb4b28]">
              Areas
            </Link>
            <Link href="/about" className="focus-ring text-sm font-medium text-[#243354] hover:text-[#bb4b28]">
              About
            </Link>
            <Link href="/blog" className="focus-ring text-sm font-medium text-[#243354] hover:text-[#bb4b28]">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop: persistent phone (boomer-friendly) */}
            <a
              href={contactPhoneHref}
              data-track-phone="header"
              className="focus-ring hidden rounded-lg border border-[#7a9e7e] bg-[#f0f7f1] px-3 py-2 text-sm font-semibold text-[#3d6642] hover:bg-[#dff0e4] md:inline-flex"
            >
              {contactPhoneDisplay}
            </a>
            {/* Mobile: tap to call */}
            <a
              href={hasRealPhone ? contactPhoneHref : primaryCtaHref}
              data-track-phone="header_mobile"
              className="focus-ring rounded-lg border border-[#7a9e7e] bg-[#7a9e7e] px-3 py-2 text-sm font-semibold text-white hover:bg-[#5c7d60] md:hidden"
            >
              {hasRealPhone ? "Call" : "Book"}
            </a>
            {/* Desktop: book CTA */}
            <a
              href={primaryCtaHref}
              data-track-cta="book_consultation"
              className="focus-ring hidden rounded-lg border border-[#ba4b28] bg-[#ba4b28] px-3 py-2 text-sm font-semibold text-white hover:bg-[#9d3c1e] md:inline-flex"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Mobile: horizontal quick-nav chips */}
        <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden scrollbar-hide">
          <Link href="/services" className="focus-ring whitespace-nowrap rounded-full border border-[#dacbb7] bg-white px-3 py-1 text-xs font-semibold text-[#25385f]">
            Services
          </Link>
          <Link href="/conditions" className="focus-ring whitespace-nowrap rounded-full border border-[#dacbb7] bg-white px-3 py-1 text-xs font-semibold text-[#25385f]">
            Conditions
          </Link>
          <Link href="/services/botox-dallas" className="focus-ring whitespace-nowrap rounded-full border border-[#dacbb7] bg-white px-3 py-1 text-xs font-semibold text-[#25385f]">
            Botox
          </Link>
          <Link href="/services/glp1-weight-loss-dallas" className="focus-ring whitespace-nowrap rounded-full border border-[#dacbb7] bg-white px-3 py-1 text-xs font-semibold text-[#25385f]">
            Weight Loss
          </Link>
          <Link href="/contact" className="focus-ring whitespace-nowrap rounded-full border border-[#dacbb7] bg-white px-3 py-1 text-xs font-semibold text-[#25385f]">
            Contact
          </Link>
        </div>
      </header>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="pb-20 md:pb-0">{children}</div>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[#e7dccd] bg-[#f7efe4]">
        <div className="mx-auto grid w-full max-w-6xl gap-7 px-4 py-10 text-sm text-[#2f3f61] md:grid-cols-4 md:px-6">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.webp"
                alt="Summer House Medspa"
                width={52}
                height={52}
                className="h-13 w-13 rounded-sm"
              />
              <p className="font-display text-base font-semibold text-[#182445]">Summer House Medspa</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Boutique medical aesthetics and wellness care in Dallas, focused on natural results and personalized plans.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#182445]">Explore</p>
            <div className="mt-2 grid gap-1">
              <Link href="/services" className="focus-ring hover:text-[#bb4b28]">Services</Link>
              <Link href="/conditions" className="focus-ring hover:text-[#bb4b28]">Conditions</Link>
              <Link href="/peptide-therapy" className="focus-ring hover:text-[#bb4b28]">Peptide Therapy</Link>
              <Link href="/locations" className="focus-ring hover:text-[#bb4b28]">Areas We Serve</Link>
              <Link href="/about" className="focus-ring hover:text-[#bb4b28]">About</Link>
              <Link href="/blog" className="focus-ring hover:text-[#bb4b28]">Blog</Link>
              <Link href="/privacy" className="focus-ring hover:text-[#bb4b28]">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[#182445]">Visit</p>
            <p className="mt-2 text-sm leading-relaxed">
              {contactAddressLine1}<br />
              {contactCity}, {contactRegion} {contactPostalCode}
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-3 inline-flex text-sm font-semibold text-[#3d6642] underline"
            >
              Get directions
            </a>
          </div>

          <div>
            <p className="font-semibold text-[#182445]">Reach Us</p>
            <a
              href={contactPhoneHref}
              data-track-phone="footer"
              className="focus-ring mt-2 block text-base font-semibold text-[#3d6642] hover:text-[#2a5031]"
            >
              {contactPhoneDisplay}
            </a>
            <a
              href={primaryCtaHref}
              data-track-cta="book_consultation"
              className="focus-ring mt-3 inline-flex rounded-lg bg-[#ba4b28] px-3 py-2 text-sm font-semibold text-white hover:bg-[#9d3c1e]"
            >
              Start a Conversation
            </a>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#4f5e7f]">Hours</p>
            <ul className="mt-1 space-y-1 text-xs text-[#4f5e7f]">
              {officeHours.map((entry) => (
                <li key={entry.day}>{entry.day}: {entry.hours}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e7dccd] px-4 py-4 text-center text-xs text-[#58698e] md:px-6">
          © {year} Summer House Medspa. All rights reserved.
        </div>
      </footer>

      {/* ── Mobile bottom action bar ─────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d8ccb7] bg-[#fff8ef]/98 p-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
          <a
            href={contactPhoneHref}
            data-track-phone="mobile_bottom_bar"
            className="focus-ring rounded-lg bg-[#7a9e7e] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {hasRealPhone ? "Call Us" : "Contact"}
          </a>
          <a
            href={primaryCtaHref}
            data-track-cta="book_consultation"
            className="focus-ring rounded-lg bg-[#ba4b28] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Book Visit
          </a>
        </div>
      </div>
    </>
  );
}
