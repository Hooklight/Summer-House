import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { SiteShell } from "@/components/site-shell";
import { contactPhoneDisplay, contactPhoneHref, primaryCtaHref } from "@/lib/content";
import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      "@type": "Organization",
      name: "Summer House Medspa",
    },
    publisher: {
      "@type": "Organization",
      name: "Summer House Medspa",
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    description: post.description,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <SiteShell>
      <main className="hero-grid py-12">
        <article className="mx-auto w-full max-w-4xl rounded-2xl border border-[#e8dbc8] bg-white px-5 py-8 md:px-8">
          <Link href="/blog" className="focus-ring text-sm font-semibold text-[#bb4b28] hover:text-[#933415]">
            ← Back to blog
          </Link>
          <h1 className="mt-4 text-4xl text-[#182446] md:text-5xl">{post.title}</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#5d7096]">
            Published {post.datePublished} • {post.author}
          </p>
          <p className="mt-4 text-lg leading-8 text-[#3a4e76]">{post.intro}</p>

          <div className="mt-8 grid gap-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl text-[#1f2c4c]">{section.heading}</h2>
                <div className="mt-3 grid gap-3 text-sm leading-7 text-[#3f547b]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-[#e6d9c5] bg-[#fffaf2] p-5">
            <h2 className="text-2xl text-[#1f2c4c]">FAQ</h2>
            <div className="mt-4 grid gap-4">
              {post.faq.map((item) => (
                <article key={item.question}>
                  <h3 className="text-lg text-[#1f2c4c]">{item.question}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#3f547b]">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-[#e6d9c5] bg-[#f7efe2] p-5">
            <h2 className="text-2xl text-[#1f2c4c]">Need help now?</h2>
            <p className="mt-2 text-sm leading-7 text-[#3f547b]">{post.cta}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={primaryCtaHref}
                data-track-cta="book_consultation"
                className="focus-ring rounded-lg bg-[#bb4b28] px-4 py-2 text-sm font-semibold text-white hover:bg-[#963719]"
              >
                Book Consultation
              </a>
              <a
                href={contactPhoneHref}
                data-track-phone={`blog_${post.slug}`}
                className="focus-ring rounded-lg border border-[#2e8b57] px-4 py-2 text-sm font-semibold text-[#2e8b57] hover:bg-[#e9f7ef]"
              >
                Call {contactPhoneDisplay}
              </a>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl text-[#1f2c4c]">Related Guides</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="focus-ring rounded-xl border border-[#e6d9c5] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2a3f67] hover:border-[#c9ae90]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </SiteShell>
  );
}
