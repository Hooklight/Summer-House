import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { getAllPeptidePages, getPeptidePage } from "@/lib/peptide-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPeptidePages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPeptidePage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/peptide-therapy/${slug}` },
  };
}

export default async function PeptidePage({ params }: Props) {
  const { slug } = await params;
  const page = getPeptidePage(slug);
  if (!page) notFound();

  const related = getAllPeptidePages()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.displayTitle,
    description: page.metaDescription,
    url: `https://summerhousemedspa.com/peptide-therapy/${slug}`,
    about: { "@type": "MedicalTherapy", name: page.displayTitle },
    reviewedBy: {
      "@type": "Person",
      name: "Dr. Daniel Kim, MD",
      jobTitle: "Medical Director",
      worksFor: { "@type": "MedicalBusiness", name: "Summer House Medspa" },
    },
    lastReviewed: "2026-03-05",
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };

  return (
    <SiteShell>
      <main className="hero-grid py-12">
        <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <Link
              href="/peptide-therapy"
              className="focus-ring text-sm font-semibold text-[#bb4b28] hover:text-[#933415]"
            >
              ← Peptide Therapy
            </Link>

            {/* Content rendered from markdown */}
            <article
              className="prose-summer mt-6"
              dangerouslySetInnerHTML={{ __html: page.contentHtml }}
            />

            {/* Related topics */}
            <section className="mt-10 rounded-2xl border border-[#e6d9c5] bg-white p-6">
              <h2 className="text-xl text-[#1c2848] font-display">Other peptide topics</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/peptide-therapy/${item.slug}`}
                    className="focus-ring rounded-xl border border-[#e5d7c3] bg-[#fff9f0] px-4 py-3 text-sm font-semibold text-[#2a3f67] hover:border-[#c9ae90]"
                  >
                    {item.displayTitle}
                  </Link>
                ))}
              </div>
            </section>

            <p className="mt-6 text-sm italic text-[#6b82a0]">
              Summer House Medspa is located in Dallas, TX. Dr. Daniel Kim, MD oversees all
              peptide therapy protocols. This content is for informational purposes and does not
              replace individualized medical advice.
            </p>
          </div>

          <div>
            <LeadForm
              sourcePage={`peptide-therapy:${slug}`}
              title="Start the conversation"
            />
          </div>
        </section>
      </main>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Peptide Therapy", path: "/peptide-therapy" },
          { name: page.displayTitle, path: `/peptide-therapy/${slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }}
      />
    </SiteShell>
  );
}
