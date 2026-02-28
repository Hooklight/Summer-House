import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dallas Medspa Blog | Summer House",
  description:
    "Educational guides on Botox, filler, laser, and medical weight-loss topics for Dallas clients.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <SiteShell>
      <main className="hero-grid min-h-[70vh] py-14">
        <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <p className="inline-flex rounded-full border border-[#dfccb2] bg-[#fff3df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7f4e1c]">
            Learning Center
          </p>
          <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">Summer House Dallas Medspa Guides</h1>
          <p className="mt-3 max-w-3xl text-[#3c5078]">
            Practical education for natural aesthetics, laser planning, and medically supervised wellness programs.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-[#e8dbc8] bg-white p-5 shadow-sm">
                <h2 className="text-2xl text-[#1c2848]">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#43597e]">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-ring mt-4 inline-block text-sm font-semibold text-[#bb4b28] hover:text-[#993616]"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
    </SiteShell>
  );
}
