import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/blog";
import {
  contactAddressLine1,
  contactCity,
  contactPhoneDisplay,
  contactPhoneHref,
  contactPostalCode,
  contactRegion,
  directionsUrl,
  faqItems,
  hasRealPhone,
  instagramUrl,
  locations,
  primaryCtaHref,
  services,
} from "@/lib/content";
import { siteName } from "@/lib/site";
import { homeownerOutcomes, trustStats } from "@/lib/trust";

export const metadata: Metadata = {
  title: "Summer House Medspa | Natural Aesthetic and Wellness Care in Dallas",
  description:
    "Natural-looking Botox, filler, laser, and medically supervised wellness in Dallas, TX. Personalized plans designed to look like you, only better.",
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteName,
  url: "https://summerhousemedspa.com",
  ...(hasRealPhone ? { telephone: contactPhoneDisplay } : {}),
  description: "Boutique Dallas medspa focused on natural injectable results, advanced laser care, and medically supervised wellness programs.",
  areaServed: ["Dallas, TX", "Preston Hollow", "University Park, TX", "Highland Park, TX"],
  medicalSpecialty: ["Aesthetic Medicine", "Weight Management"],
  priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: contactAddressLine1, addressLocality: contactCity, addressRegion: contactRegion, postalCode: contactPostalCode, addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 32.8798, longitude: -96.7684 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "13" },
  sameAs: [instagramUrl].filter(Boolean),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const spotlightServices = [
  "botox-dallas", "dallas-filler", "laser-treatment-dallas",
  "microneedling-dallas", "glp1-weight-loss-dallas", "morpheus8-dallas",
  "bbl-photofacial-dallas", "lip-filler-dallas",
];

const homepageLocationSlugs = [
  "uptown-dallas", "park-cities", "preston-hollow", "north-dallas",
  "lakewood-dallas", "downtown-dallas", "oak-lawn-dallas", "university-park",
];

export default function Home() {
  const spotlighted = spotlightServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const displayServices = spotlighted.length >= 6 ? spotlighted : services.slice(0, 8);

  const displayLocations = homepageLocationSlugs
    .map((s) => locations.find((x) => x.slug === s))
    .filter(Boolean) as typeof locations;

  const extraLocationCount = Math.max(0, locations.length - displayLocations.length);

  const featuredQuote = homeownerOutcomes[0];
  const sideQuotes = homeownerOutcomes.slice(1, 4);

  return (
    <SiteShell>
      <main>

        {/* ═══════════════════════════════════════════════════
            1 · HERO  —  The front porch.
            Two-column on desktop: text + real salon photo.
            Stacked on mobile.
            ═══════════════════════════════════════════════════ */}
        <section className="hero-grid relative overflow-hidden">
          {/* Decorative warm orbs — desktop only */}
          <div aria-hidden className="pointer-events-none absolute -left-40 top-20 hidden h-80 w-80 rounded-full md:block"
            style={{ background: "radial-gradient(circle, rgba(200,184,151,0.5) 0%, transparent 70%)", filter: "blur(70px)" }} />

          <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-6 py-12 md:min-h-[90vh] md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-12 md:py-20">

            {/* Left / top: text content */}
            <div className="relative z-10">

              {/* Eyebrow */}
              <p className="reveal-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6535]">
                <span aria-hidden className="h-px w-8 bg-[#bb4b28]" />
                Dallas · Natural results · Personalized care
              </p>

              {/* Headline — editorial scale, safe on all viewports */}
              <h1
                className="reveal-up stagger-1 mt-5 font-display font-normal leading-[1.1] tracking-[0.01em] text-[#182446]"
                style={{ fontSize: "clamp(2.4rem, 8vw, 7rem)" }}
              >
                You&rsquo;re already
                <br />
                <span className="wave-underline italic text-[#bb4b28]">beautiful.</span>
                <br />
                <span className="text-[#182446]">We help you</span>
                <br />
                feel like it.
              </h1>

              <p className="reveal-up stagger-2 mt-6 max-w-lg text-base leading-relaxed text-[#334569] md:text-lg">
                Conservative injectables, advanced laser care, and medically guided wellness
                in Dallas — designed to look like <em>you</em>, only rested.
              </p>

              {/* CTA pair */}
              <div className="reveal-up stagger-3 mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                <a
                  href={primaryCtaHref}
                  data-track-cta="hero_primary"
                  className="focus-ring rounded-2xl bg-[#bb4b28] px-6 py-3.5 text-base font-semibold text-white shadow-summer hover:bg-[#963719] md:px-8 md:py-4"
                >
                  Start a conversation
                </a>
                <Link
                  href="/services"
                  className="focus-ring text-sm font-semibold text-[#182446] underline decoration-[#c8b897] decoration-2 underline-offset-4 hover:decoration-[#bb4b28] md:text-base"
                >
                  See what&rsquo;s possible →
                </Link>
              </div>

              {/* Trust stats */}
              <div className="reveal-up stagger-4 mt-8 flex flex-wrap items-end gap-x-7 gap-y-3 border-t border-[#e2d4bc] pt-6 md:mt-12 md:gap-x-10 md:pt-8">
                {trustStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-semibold text-[#182446] md:text-4xl">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#7a8fa8] md:text-xs">{stat.label}</p>
                  </div>
                ))}
                <div>
                  <p className="font-display text-3xl font-semibold text-[#182446] md:text-4xl">5.0 ★</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#7a8fa8] md:text-xs">Average review</p>
                </div>
              </div>
            </div>

            {/* Right / bottom: real salon photo */}
            <div className="relative mt-2 h-64 overflow-hidden rounded-2xl shadow-summer-lg md:mt-0 md:h-[72vh] md:rounded-3xl">
              <Image
                src="/images/salon-suite.webp"
                alt="Summer House Aesthetics treatment suite in Dallas — warm, private, boutique"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Credential strip at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1628]/70 to-transparent px-5 pb-5 pt-14">
                <p className="text-sm font-semibold text-white">Our Dallas treatment suite</p>
                <p className="text-xs text-white/65">Boutique. Private. Personalized.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            2 · PHILOSOPHY STRIP
            Full bleed. White. Text as art. No cards.
            ═══════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">

            {/* Botanical vine SVG divider */}
            <div className="botanical-divider mx-auto mb-12 max-w-xs" aria-hidden>
              <svg viewBox="0 0 80 20" className="h-5 w-20 fill-none stroke-[#7a9e7e]" strokeWidth="1.2">
                <path d="M5,10 Q12,3 20,10 Q28,17 36,10 Q44,3 52,10 Q60,17 68,10 Q72,7 75,10" strokeLinecap="round"/>
                <circle cx="10" cy="8" r="2" className="fill-[#7a9e7e] stroke-none opacity-50"/>
                <circle cx="36" cy="10" r="1.5" className="fill-[#7a9e7e] stroke-none opacity-60"/>
                <circle cx="62" cy="8" r="2" className="fill-[#7a9e7e] stroke-none opacity-50"/>
              </svg>
            </div>

            <p
              className="font-display font-normal italic leading-tight text-[#182446]"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
            >
              We don&rsquo;t transform people.
            </p>
            <p
              className="font-display font-normal italic leading-tight text-[#bb4b28]"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
            >
              We reveal them.
            </p>

            <p className="mx-auto mt-7 max-w-md text-[#3c5078] leading-relaxed md:text-lg">
              Every plan starts with what you want to keep, not what you want to change.
              The goal is never &ldquo;different&rdquo; — it&rsquo;s <em>you</em>, only better rested.
            </p>

            <div className="botanical-divider mx-auto mt-12 max-w-xs" aria-hidden>
              <svg viewBox="0 0 80 20" className="h-5 w-20 fill-none stroke-[#7a9e7e]" strokeWidth="1.2">
                <path d="M5,10 Q12,3 20,10 Q28,17 36,10 Q44,3 52,10 Q60,17 68,10 Q72,7 75,10" strokeLinecap="round"/>
                <circle cx="10" cy="8" r="2" className="fill-[#7a9e7e] stroke-none opacity-50"/>
                <circle cx="36" cy="10" r="1.5" className="fill-[#7a9e7e] stroke-none opacity-60"/>
                <circle cx="62" cy="8" r="2" className="fill-[#7a9e7e] stroke-none opacity-50"/>
              </svg>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3 · SERVICES  —  dusty-blue tint background.
            Horizontal scroll, staggered heights, no uniform grid.
            ═══════════════════════════════════════════════════ */}
        <section className="overflow-hidden py-16" style={{ backgroundColor: "#edf3f6" }}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#6a8fa0" }}>
                  Treatments
                </p>
                <h2
                  className="mt-2 font-display font-semibold leading-tight text-[#182446]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  Designed for real life
                </h2>
              </div>
              <Link href="/services" className="focus-ring hidden text-sm font-semibold text-[#bb4b28] hover:underline md:block">
                All 42 treatments →
              </Link>
            </div>
          </div>

          {/* Horizontal scroll — bleeds to edges */}
          <div className="scroll-snap-x scrollbar-hide mt-8 flex gap-4 px-6 pb-4 md:px-12">
            {displayServices.map((service, i) => (
              <article
                key={service.slug}
                className="scroll-snap-start w-60 flex-none rounded-2xl bg-white p-5 shadow-summer transition-transform hover:-translate-y-1 hover:shadow-summer-lg"
                style={{ marginTop: i % 3 === 1 ? "2rem" : i % 3 === 2 ? "1rem" : "0" }}
              >
                <div className="mb-4 h-1 w-8 rounded-full" style={{
                  backgroundColor: i % 4 === 0 ? "#c8b897" : i % 4 === 1 ? "#7a9e7e" : i % 4 === 2 ? "#8fa8b7" : "#e2cba0"
                }} />
                <h3 className="font-display text-xl text-[#1c2848]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#44577d]">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="focus-ring mt-4 inline-flex text-sm font-semibold text-[#bb4b28] hover:underline">
                  Learn more →
                </Link>
              </article>
            ))}
            {/* All services card */}
            <article className="scroll-snap-start flex w-44 flex-none flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#c8b897] bg-white/60 p-5 text-center">
              <p className="font-display text-2xl text-[#bb4b28]">42</p>
              <p className="mt-0.5 text-sm text-[#5a7087]">treatments</p>
              <Link href="/services" className="focus-ring mt-4 rounded-xl bg-[#bb4b28] px-4 py-2 text-xs font-semibold text-white hover:bg-[#963719]">
                Browse all →
              </Link>
            </article>
          </div>

          <div className="px-6 md:hidden mt-4">
            <Link href="/services" className="focus-ring text-sm font-semibold text-[#bb4b28] hover:underline">
              See all 42 treatments →
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4 · RESULTS — Warm cream. Honest, editorial.
            Text-based — no stock photos, no clinical energy.
            ═══════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "#fdf6ec" }}>
          <div className="mx-auto max-w-6xl px-6">

            <div className="botanical-divider mx-auto mb-10 max-w-xs" aria-hidden>
              <svg viewBox="0 0 80 20" className="h-5 w-20 fill-none stroke-[#c8b897]" strokeWidth="1.2">
                <path d="M5,10 Q12,3 20,10 Q28,17 36,10 Q44,3 52,10 Q60,17 68,10 Q72,7 75,10" strokeLinecap="round"/>
                <circle cx="10" cy="8" r="2" className="fill-[#c8b897] stroke-none opacity-60"/>
                <circle cx="36" cy="10" r="1.5" className="fill-[#c8b897] stroke-none opacity-70"/>
                <circle cx="62" cy="8" r="2" className="fill-[#c8b897] stroke-none opacity-60"/>
              </svg>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7250]">
              What to expect
            </p>
            <h2
              className="mt-2 font-display font-semibold leading-tight text-[#182446]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Natural results, honestly described
            </h2>
            <p className="mt-3 max-w-2xl leading-[1.75] text-[#3c5078]">
              We optimize for outcomes that look like you had a long vacation — not like you had work done.
              Real patterns from our clients:
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  treatment: "Conservative Botox",
                  demo: "Woman, 40s · Forehead & 11 lines",
                  before: "Lines stayed visible at rest; foundation settled into texture by afternoon.",
                  after: "Expression stayed natural while lines softened and skin read smoother in photos.",
                  timeline: "Visible in 5–7 days",
                },
                {
                  treatment: "Lower-face balancing",
                  demo: "Man, 40s · Jaw tension, heavy masseter",
                  before: "Jaw appeared wide from clenching; tension visible by end of day.",
                  after: "Lower face looked leaner and more relaxed — no overfilled appearance.",
                  timeline: "Progressive over 3–6 weeks",
                },
                {
                  treatment: "Skin tone & texture",
                  demo: "Woman, 55 · Sun damage, uneven tone",
                  before: "Pigment and texture changes made skin look tired even after good rest.",
                  after: "Tone appeared clearer, texture more even, overall glow restored.",
                  timeline: "2–3 sessions over 8–12 weeks",
                },
              ].map((item) => (
                <article key={item.treatment} className="rounded-2xl border border-[#e2d4bc] bg-white p-6 shadow-summer">
                  <p className="font-display text-xl font-semibold text-[#182446]">{item.treatment}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[#9a7250]">{item.demo}</p>

                  <div className="mt-5 space-y-3 text-sm leading-[1.75]">
                    <div className="rounded-xl bg-[#f8f2e8] px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a7250]">Before</p>
                      <p className="mt-1 text-[#42577e]">{item.before}</p>
                    </div>
                    <div className="rounded-xl bg-[#eef5ef] px-4 py-3 ring-1 ring-[#7a9e7e]/25">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3d6642]">After</p>
                      <p className="mt-1 text-[#2c4a32]">{item.after}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#9a7250]">⏱ {item.timeline}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-[#8fa0b8]">
              Results vary by anatomy, history, and treatment plan. Your consultation defines what is realistic for you.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            5 · PERSONA GATEWAY  —  warm blush background.
            Three distinctly different cards. No uniform grid.
            ═══════════════════════════════════════════════════ */}
        <section className="py-16" style={{ backgroundColor: "#f5ece0" }}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7250]">
              Who we&rsquo;re made for
            </p>
            <h2
              className="mt-2 font-display font-semibold leading-tight text-[#182446]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              No two clients are the same
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {/* Men — navy */}
              <Link
                href="/for/men"
                className="focus-ring group block rounded-2xl bg-[#182446] p-8 text-white transition-all hover:shadow-summer-lg hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fa8b7]">For men</p>
                <p
                  className="mt-3 font-display font-semibold italic leading-tight text-white"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  Looking as sharp as you feel.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Subtle treatments that maintain confidence without changing what makes you, you.
                </p>
                <p className="mt-6 text-sm font-semibold text-[#8fa8b7] group-hover:text-white group-hover:underline transition-colors">
                  See treatments for men →
                </p>
              </Link>

              {/* Women 50+ — terracotta light */}
              <Link
                href="/for/women-over-50"
                className="focus-ring group block rounded-2xl p-8 transition-all hover:shadow-summer-lg hover:-translate-y-1"
                style={{ backgroundColor: "#f2e4dc" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bb4b28]">Women 50+</p>
                <p
                  className="mt-3 font-display font-semibold italic leading-tight text-[#182446]"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  Refinement,<br />not reinvention.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#3c5078]">
                  You&rsquo;ve earned every bit of who you are. We just help the outside match how good you feel inside.
                </p>
                <p className="mt-6 text-sm font-semibold text-[#bb4b28] group-hover:underline">
                  Treatments for women 50+ →
                </p>
              </Link>

              {/* First-timers — sage */}
              <Link
                href="/for/first-time-clients"
                className="focus-ring group block rounded-2xl p-8 transition-all hover:shadow-summer-lg hover:-translate-y-1"
                style={{ backgroundColor: "#e2ede4" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3d6642]">First-timers</p>
                <p
                  className="mt-3 font-display font-semibold italic leading-tight text-[#182446]"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  Zero pressure.<br />All questions welcome.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#3c5078]">
                  New to aesthetics? Start here. We&rsquo;ll walk you through everything at your pace.
                </p>
                <p className="mt-6 text-sm font-semibold text-[#3d6642] group-hover:underline">
                  Your first-timer&rsquo;s guide →
                </p>
              </Link>
            </div>

            {/* Secondary persona links */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { slug: "women-over-60", label: "Women 60+" },
                { slug: "men-over-60",   label: "Men Over 60" },
                { slug: "skeptics",      label: "The Skeptics" },
                { slug: "new-to-dallas", label: "New to Dallas" },
                { slug: "postpartum",    label: "Postpartum" },
                { slug: "active-retirees", label: "Active Retirees" },
              ].map((p) => (
                <Link
                  key={p.slug}
                  href={`/for/${p.slug}`}
                  className="focus-ring rounded-full border border-[#c8b897] bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#4a5c7a] hover:border-[#bb4b28] hover:text-[#bb4b28]"
                >
                  {p.label}
                </Link>
              ))}
              <Link href="/for/men" className="focus-ring rounded-full border border-[#c8b897] bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#4a5c7a] hover:border-[#bb4b28] hover:text-[#bb4b28]">
                + 24 more →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6 · TESTIMONIAL  —  sandy gold atmosphere.
            Full-bleed, editorial quote at large scale.
            ═══════════════════════════════════════════════════ */}
        <section className="py-20" style={{ backgroundColor: "#f5ede0" }}>
          <div className="mx-auto max-w-5xl px-6">

            {/* Decorative large quotation mark */}
            <p
              aria-hidden
              className="select-none font-display leading-none text-[#c8b897]"
              style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)", opacity: 0.5, lineHeight: 1 }}
            >
              &ldquo;
            </p>

            <blockquote className="-mt-4">
              <p
                className="font-display font-semibold italic leading-tight text-[#182446]"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
              >
                {featuredQuote.quote}
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="h-px w-12 bg-[#c8b897]" />
                <div>
                  <p className="font-semibold text-[#182446]">{featuredQuote.person}, {featuredQuote.city}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#9a7250]">{featuredQuote.serviceType}</p>
                </div>
              </footer>
            </blockquote>

            {/* Supporting quotes */}
            <div className="mt-12 grid gap-5 border-t border-[#e2d4bc] pt-10 md:grid-cols-3">
              {sideQuotes.map((item) => (
                <article key={`${item.person}-${item.city}`}>
                  <p className="text-sm leading-relaxed text-[#3c5078] italic">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px w-6 bg-[#c8b897]" />
                    <p className="text-xs font-semibold text-[#182446]">{item.person}, {item.city}</p>
                  </div>
                  <p className="mt-1 ml-8 text-xs uppercase tracking-[0.1em] text-[#9a7250]">{item.serviceType}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            7 · EDUCATION  —  white background, clean grid.
            ═══════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a9e7e]">
                  Education
                </p>
                <h2
                  className="mt-2 font-display font-semibold leading-tight text-[#182446]"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
                >
                  Know before you go
                </h2>
              </div>
              <Link href="/blog" className="focus-ring hidden text-sm font-semibold text-[#bb4b28] hover:underline md:block">
                All {52} articles →
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {blogPosts.slice(0, 4).map((post) => (
                <article key={post.slug} className="group rounded-2xl border border-[#e8dbc8] bg-white p-5 shadow-summer hover:shadow-summer-lg transition-shadow">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7a9e7e]">
                    {post.datePublished}
                  </p>
                  <h3 className="font-display mt-2 text-xl text-[#1c2848]">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#43597e]">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="focus-ring mt-4 inline-block text-sm font-semibold text-[#bb4b28] group-hover:underline">
                    Read →
                  </Link>
                </article>
              ))}
            </div>

            <Link href="/blog" className="focus-ring mt-5 inline-flex text-sm font-semibold text-[#bb4b28] hover:underline md:hidden">
              All 52 articles →
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            8 · FAQ  —  weathered white.
            ═══════════════════════════════════════════════════ */}
        <section className="py-14" style={{ backgroundColor: "#f0ede6" }}>
          <div className="mx-auto max-w-6xl px-6">
            <h2
              className="font-display font-semibold text-[#182446]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Frequently asked questions
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl bg-white p-6 shadow-summer">
                  <h3 className="font-display text-lg text-[#1e2b4b]">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#41557c]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            9 · CONTACT + FORM  —  Cream. The ask comes last.
            Trust established. Now the invitation.
            ═══════════════════════════════════════════════════ */}
        <section className="bg-[#fff8ef] py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.1fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a9e7e]">
                Start here
              </p>
              <h2
                className="mt-3 font-display font-semibold leading-tight text-[#182446]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Let&rsquo;s have a conversation
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-[#3c5078]">
                No pressure, no commitment. Just an honest talk about what&rsquo;s possible —
                and what makes sense for your face, your goals, and your timeline.
              </p>

              {/* Trust signals */}
              <div className="mt-8 space-y-3">
                {[
                  { icon: "✓", title: "Same-day response", sub: "During business hours, Tuesday–Saturday" },
                  { icon: "✓", title: "Zero-obligation consultations", sub: "Come with questions. Leave with a plan — or just answers." },
                  { icon: "✓", title: "Your information stays with us", sub: "HIPAA-compliant. Never shared or sold." },
                ].map((sig) => (
                  <div key={sig.title} className="flex items-start gap-3 rounded-xl border border-[#e4d9c8] bg-white p-4">
                    <span className="mt-0.5 text-base text-[#7a9e7e]">{sig.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#1c2848]">{sig.title}</p>
                      <p className="mt-0.5 text-xs text-[#5a6f96]">{sig.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="mt-6 rounded-xl border border-[#e4d9c8] bg-white p-5">
                <p className="font-display text-lg text-[#182446]">Visit us in Dallas</p>
                <p className="mt-2 text-sm text-[#3c5078]">
                  {contactAddressLine1}<br />{contactCity}, {contactRegion} {contactPostalCode}
                </p>
                <div className="mt-3 flex gap-3">
                  <a href={directionsUrl} target="_blank" rel="noreferrer"
                    className="focus-ring rounded-lg border border-[#25365d] px-3 py-2 text-xs font-semibold text-[#25365d] hover:bg-[#25365d] hover:text-white">
                    Get directions
                  </a>
                  <a href={contactPhoneHref} data-track-phone="contact_section"
                    className="focus-ring rounded-lg border border-[#7a9e7e] px-3 py-2 text-xs font-semibold text-[#3d6642] hover:bg-[#e8f2e9]">
                    Call {contactPhoneDisplay}
                  </a>
                </div>
              </div>

              {/* Location chips */}
              <div className="mt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4a5c82]">Dallas area locations</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {displayLocations.map((loc) => (
                    <Link key={loc.slug} href={`/locations/${loc.slug}`}
                      className="focus-ring rounded-full border border-[#dfd1bd] bg-white px-2.5 py-1 text-xs font-medium text-[#2f4268] hover:border-[#bb4b28] hover:text-[#bb4b28]">
                      {loc.name}
                    </Link>
                  ))}
                  <Link href="/locations"
                    className="focus-ring rounded-full border border-[#bb4b28] px-2.5 py-1 text-xs font-semibold text-[#bb4b28] hover:bg-[#bb4b28] hover:text-white">
                    +{extraLocationCount} more →
                  </Link>
                </div>
              </div>
            </div>

            <div id="lead-form">
              <LeadForm sourcePage="homepage" title="Start a conversation" />
            </div>
          </div>
        </section>

      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </SiteShell>
  );
}
