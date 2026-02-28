import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { ServiceAreaMapShell } from "@/components/service-area-map-shell";
import { SiteShell } from "@/components/site-shell";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dallas Medspa Areas Served | Summer House",
  description:
    "Explore Summer House medspa coverage across Preston Hollow, Park Cities, Uptown, Lakewood, North Dallas, and nearby neighborhoods.",
  alternates: {
    canonical: "/locations",
  },
};

const featuredLocationSlugs = [
  "downtown-dallas",
  "uptown",
  "park-cities",
  "north-dallas",
  "preston-hollow",
  "highland-park",
  "university-park",
  "oak-lawn",
  "lakewood",
  "frisco",
  "plano",
  "southlake",
];

function getFeaturedLocations() {
  const featured = featuredLocationSlugs
    .map((slug) => locations.find((location) => location.slug === slug))
    .filter((location): location is (typeof locations)[number] => Boolean(location));

  const seen = new Set(featured.map((location) => location.slug));

  for (const location of locations) {
    if (featured.length >= 12) {
      break;
    }

    if (!seen.has(location.slug)) {
      featured.push(location);
      seen.add(location.slug);
    }
  }

  return featured;
}

export default function LocationsPage() {
  const featuredLocations = getFeaturedLocations();
  const allLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));
  const featuredSlugs = new Set(featuredLocations.map((location) => location.slug));
  const additionalLocations = allLocations.filter((location) => !featuredSlugs.has(location.slug));

  return (
    <SiteShell>
      <main className="hero-grid min-h-[70vh] py-14">
        <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <p className="inline-flex rounded-full border border-[#dfccb2] bg-[#fff3df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f4e1c]">
            Service Areas
          </p>
          <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">Dallas Neighborhoods We Serve</h1>
          <p className="mt-3 max-w-3xl text-[#3c5078]">
            Explore local pages for neighborhood-specific treatment context, consultation flow, and service availability.
          </p>

          <section className="mt-8 grid gap-5 rounded-2xl border border-[#e8dbc8] bg-white p-4 shadow-sm md:p-6">
            <div>
              <h2 className="text-2xl text-[#1c2848] md:text-3xl">Interactive Service Map</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#43597e]">
                Tap a marker to open neighborhood pages and review care options near you.
              </p>
            </div>
            <ServiceAreaMapShell
              locations={featuredLocations.map((location) => ({
                slug: location.slug,
                name: location.name,
                summary: location.summary,
                latitude: location.latitude,
                longitude: location.longitude,
              }))}
            />
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featuredLocations.map((location) => (
              <article key={location.slug} className="rounded-2xl border border-[#e8dbc8] bg-white p-5 shadow-sm">
                <h2 className="text-2xl text-[#1c2848]">{location.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#6a7b9d]">{location.county}</p>
                <p className="mt-2 text-sm leading-6 text-[#43597e]">{location.summary}</p>
                <Link
                  href={`/locations/${location.slug}`}
                  className="focus-ring mt-4 inline-block text-sm font-semibold text-[#bb4b28] hover:text-[#993616]"
                >
                  Open page →
                </Link>
              </article>
            ))}
          </div>

          {additionalLocations.length > 0 ? (
            <section className="mt-8 rounded-2xl border border-[#e8dbc8] bg-white p-5 shadow-sm md:p-6">
              <h2 className="text-2xl text-[#1c2848]">Full Neighborhood Index</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#43597e]">
                We keep detailed local pages for every area we serve, but highlight only key Dallas hubs above for a cleaner browsing experience.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {additionalLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="focus-ring rounded-lg border border-[#e8dbc8] bg-[#fff9f0] px-3 py-2 text-sm font-medium text-[#2f4268] hover:border-[#c6a88c]"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]}
      />
    </SiteShell>
  );
}
