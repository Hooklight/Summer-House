import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { personas } from "@/lib/personas";

export const metadata: Metadata = {
  title: "Aesthetic Care For You | Summer House Medspa Dallas",
  description:
    "Find the Summer House Medspa experience built for your situation — whether you're new to aesthetics, managing skin of color, recovering postpartum, or looking for natural results in Dallas.",
  alternates: { canonical: "/for" },
};

const featured = ["men", "women-over-50", "first-time-clients", "skin-of-color", "biohackers", "postpartum"];

const groups: { label: string; slugs: string[] }[] = [
  {
    label: "By life stage",
    slugs: ["women-in-their-30s", "women-in-their-40s", "women-over-50", "women-over-60", "men-over-60", "active-retirees", "postpartum"],
  },
  {
    label: "By goal",
    slugs: ["natural-look-seekers", "maintenance-clients", "pre-event", "biohackers", "looksmaxing", "athletes", "comeback-clients"],
  },
  {
    label: "By situation",
    slugs: ["first-time-clients", "skeptics", "out-of-town-clients", "new-to-dallas", "couples", "brides", "busy-moms", "executives", "teachers-and-nurses"],
  },
  {
    label: "By skin concern",
    slugs: ["skin-of-color", "men-sun-damage", "women-sun-damage"],
  },
  {
    label: "By neighborhood",
    slugs: ["park-cities", "north-dallas", "dallas-locals"],
  },
];

export default function ForIndexPage() {
  const featuredPersonas = featured
    .map((s) => personas.find((p) => p.slug === s))
    .filter(Boolean) as typeof personas;

  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="hero-grid py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6535]">
              Summer House Medspa · Dallas
            </p>
            <h1
              className="mt-5 font-display font-normal leading-tight text-[#182446]"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
            >
              Care that fits your life
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#3c5078]">
              Medspa care works best when it&rsquo;s built around who you actually are —
              your goals, your timeline, your comfort level. Find your starting point below.
            </p>
          </div>
        </section>

        {/* Featured cards */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a9e7e]">
              Most visited
            </p>
            <h2
              className="mt-2 font-display font-semibold leading-tight text-[#182446]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Where most people start
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPersonas.map((persona, i) => (
                <Link
                  key={persona.slug}
                  href={`/for/${persona.slug}`}
                  className="focus-ring group block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-summer-lg"
                  style={{
                    backgroundColor:
                      i % 3 === 0 ? "#f2e4dc" : i % 3 === 1 ? "#e2ede4" : "#e8f0f4",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: i % 3 === 0 ? "#bb4b28" : i % 3 === 1 ? "#3d6642" : "#486a80" }}
                  >
                    {persona.name}
                  </p>
                  <p
                    className="mt-3 font-display font-semibold italic leading-tight text-[#182446]"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
                  >
                    {persona.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#3c5078]">
                    {persona.subheadline}
                  </p>
                  <p
                    className="mt-5 text-sm font-semibold group-hover:underline"
                    style={{ color: i % 3 === 0 ? "#bb4b28" : i % 3 === 1 ? "#3d6642" : "#486a80" }}
                  >
                    See your guide →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Grouped browse */}
        <section className="py-14" style={{ backgroundColor: "#f5ede0" }}>
          <div className="mx-auto max-w-6xl px-6">
            <h2
              className="font-display font-semibold leading-tight text-[#182446]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
            >
              Browse all guides
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group) => {
                const groupPersonas = group.slugs
                  .map((s) => personas.find((p) => p.slug === s))
                  .filter(Boolean) as typeof personas;
                return (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7250]">
                      {group.label}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {groupPersonas.map((persona) => (
                        <Link
                          key={persona.slug}
                          href={`/for/${persona.slug}`}
                          className="focus-ring rounded-full border border-[#c8b897] bg-white/80 px-3 py-1.5 text-sm font-medium text-[#2f4268] hover:border-[#bb4b28] hover:text-[#bb4b28]"
                        >
                          {persona.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#fff8ef] py-12">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-display font-semibold text-[#182446]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Not sure where you fit?
            </h2>
            <p className="mt-3 leading-relaxed text-[#3c5078]">
              Start a conversation. Tell us your goals and we&rsquo;ll build a plan from there.
            </p>
            <a
              href="/#lead-form"
              className="focus-ring mt-6 inline-block rounded-2xl bg-[#bb4b28] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#963719]"
            >
              Start a conversation
            </a>
          </div>
        </section>
      </main>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Serve", path: "/for" },
        ]}
      />
    </SiteShell>
  );
}
