import type { Metadata } from "next";

const SUMMER_HOUSE_BOOK = "https://summerhousemedspa.com/contact";
const SUMMER_HOUSE_ABOUT = "https://summerhousemedspa.com/about";

export const metadata: Metadata = {
  title: "GLP-1 Weight Loss Dallas | Physician-Supervised Semaglutide & Tirzepatide",
  description:
    "Semaglutide and tirzepatide weight loss programs in Dallas, TX — physician-supervised by Dr. Daniel Kim, MD at Summer House Medspa in Uptown. Transparent pricing, monthly check-ins, full program support.",
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Summer House Medspa — GLP-1 Weight Loss Dallas",
  url: "https://glp1weightlossdallas.com",
  sameAs: ["https://summerhousemedspa.com"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Dallas" },
  medicalSpecialty: "Obesity Medicine",
  description:
    "Physician-supervised GLP-1 weight loss programs including semaglutide and tirzepatide at Summer House Medspa in Uptown Dallas.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a GLP-1 weight loss program in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GLP-1 weight loss program uses medications like semaglutide (Wegovy/Ozempic) or tirzepatide (Zepbound/Mounjaro) under physician supervision to reduce appetite and support significant weight loss. Programs at Summer House Medspa include a baseline health assessment, personalized titration schedule, monthly check-ins, and a structured plan for maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get semaglutide in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Summer House Medspa in Uptown Dallas offers physician-supervised semaglutide weight loss programs. Programs include medical assessment, dose titration, ongoing monitoring, and support — not just a prescription. Book a consultation at summerhousemedspa.com.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between semaglutide and tirzepatide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Semaglutide (Wegovy) activates one receptor (GLP-1) and produces average weight loss of around 14-15% of body weight. Tirzepatide (Zepbound) activates two receptors (GLP-1 and GIP) and produces average weight loss of 20-22% in clinical trials. Tirzepatide is generally more potent but may have more pronounced early side effects. The right choice depends on your health history, goals, insurance coverage, and tolerance.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a GLP-1 weight loss program cost in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medication cost varies: brand-name Wegovy or Zepbound runs $1,300-$1,600/month without insurance. Some commercial insurance plans cover these medications with prior authorization. Manufacturer savings programs can reduce cost to as low as $25/month for eligible patients. Program oversight fees are separate from medication cost. Summer House provides a full cost breakdown at consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly do you lose weight on semaglutide or tirzepatide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients begin losing weight within the first 4-8 weeks as the medication takes effect. The active weight-loss phase typically runs 6-16 months, with average results of 14% body weight loss on semaglutide and 20-22% on tirzepatide in clinical trials. Individual results depend on starting dose, titration schedule, diet, activity level, and program support.",
      },
    },
  ],
};

const STATS = [
  { number: "14–22%", label: "Average body weight loss in clinical trials" },
  { number: "Once/week", label: "Injection frequency — both semaglutide and tirzepatide" },
  { number: "Physician-led", label: "Monthly check-ins, not just a prescription" },
  { number: "Uptown Dallas", label: "In-person care at Summer House Medspa" },
];

const PROGRAMS = [
  {
    name: "Semaglutide Program",
    tagline: "The established GLP-1 pathway",
    body: "Semaglutide — the active ingredient in Wegovy and Ozempic — has the longest real-world track record in GLP-1 weight management. Clinical trials showed average weight loss of ~14–15% of body weight at 68 weeks. The right starting point for most patients.",
    avg: "~14–15% body weight lost",
    href: "/semaglutide",
    cta: "Semaglutide Details",
  },
  {
    name: "Tirzepatide Program",
    tagline: "Maximum weight loss potential",
    body: "Tirzepatide — Zepbound and Mounjaro — activates two hormonal pathways (GLP-1 + GIP) for stronger appetite suppression. Clinical trials showed average weight loss of 20–22%. The stronger option for patients who want maximum results or who have plateaued on semaglutide.",
    avg: "~20–22% body weight lost",
    href: "/tirzepatide",
    cta: "Tirzepatide Details",
  },
];

const HOW_IT_WORKS_STEPS = [
  { step: "1", title: "Medical Assessment", body: "Comprehensive intake: labs, health history, body composition. We understand your full picture before recommending anything." },
  { step: "2", title: "Personalized Plan", body: "Your physician maps your starting dose, titration schedule, and program milestones. No generic protocols." },
  { step: "3", title: "Monthly Check-ins", body: "Active monitoring during the loss phase. Side effects are managed as they arise — not after you've already quit." },
  { step: "4", title: "Maintenance Planning", body: "Your exit strategy is built from day one — not figured out when you hit your goal weight." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-cream">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Physician-Supervised · Uptown Dallas</span>
          <h1 className="display" style={{ marginTop: "1rem" }}>
            GLP-1 Weight Loss in Dallas
          </h1>
          <p className="subhead" style={{ marginTop: "1.25rem", maxWidth: "600px", margin: "1.25rem auto 0" }}>
            Semaglutide and tirzepatide programs with real medical oversight — monthly check-ins, transparent pricing, and a plan for the long term. Through Summer House Medspa in Uptown Dallas.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href={SUMMER_HOUSE_BOOK} className="btn-primary">Book a Consultation</a>
            <a href="/how-it-works" className="btn-secondary">How It Works</a>
          </div>
          <p style={{ marginTop: "1.25rem", fontSize: "0.8125rem", color: "#6b7f99" }}>
            Programs offered through Summer House Medspa · Dr. Daniel Kim, MD · Dallas, TX
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {STATS.map((stat) => (
              <div key={stat.number} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "#0f1e3d", lineHeight: 1.1 }}>{stat.number}</p>
                <p style={{ fontSize: "0.875rem", color: "#3d5278", marginTop: "0.375rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GLP-1 — AEO answer block */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <span className="eyebrow">What is a GLP-1 Program?</span>
          <h2 className="headline" style={{ marginTop: "0.75rem" }}>Not a prescription — a program</h2>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            GLP-1 medications like semaglutide and tirzepatide work by mimicking gut hormones that regulate appetite and blood sugar. They reduce hunger, slow digestion, and improve insulin sensitivity — producing clinically meaningful weight loss in most patients who complete a full program.
          </p>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            A prescription alone is not a program. The results in the clinical trials — 14 to 22 percent body weight lost — came from structured programs with consistent titration, active side-effect management, and behavioral support. Patients who receive a vial and no oversight have significantly worse outcomes.
          </p>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            Our programs at Summer House Medspa include physician oversight from Dr. Daniel Kim, MD — monthly check-ins, lab monitoring, side-effect management, and an explicit plan for what happens when you reach your goal.
          </p>
          <div style={{ marginTop: "1.75rem" }}>
            <a href={SUMMER_HOUSE_ABOUT} className="btn-secondary">Meet the Medical Team</a>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="eyebrow">Programs Available in Dallas</span>
            <h2 className="headline" style={{ marginTop: "0.75rem" }}>Semaglutide or Tirzepatide?</h2>
            <p style={{ color: "#3d5278", marginTop: "0.75rem", maxWidth: "520px", margin: "0.75rem auto 0" }}>
              Both are effective. The right choice depends on your goals, health history, insurance, and tolerance. We help you decide at consultation.
            </p>
          </div>
          <div className="grid-2">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="card">
                <span className="badge">{p.tagline}</span>
                <h3 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#0f1e3d", margin: "0.75rem 0 0.5rem" }}>{p.name}</h3>
                <p style={{ color: "#3d5278", fontSize: "0.9375rem", lineHeight: 1.7 }}>{p.body}</p>
                <p style={{ marginTop: "1rem", fontWeight: 700, color: "#2e6b4e", fontSize: "0.9375rem" }}>{p.avg}</p>
                <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href={p.href} className="btn-secondary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>{p.cta}</a>
                  <a href={SUMMER_HOUSE_BOOK} className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>Book Consultation</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — condensed */}
      <section className="section bg-cream">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="eyebrow">Program Structure</span>
            <h2 className="headline" style={{ marginTop: "0.75rem" }}>What a real program looks like</h2>
          </div>
          <div className="grid-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div key={s.step} className="card-soft">
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#0f1e3d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.75rem" }}>{s.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0f1e3d", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ color: "#3d5278", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/how-it-works" className="btn-secondary">Full Program Details</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-narrow">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="headline" style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}>GLP-1 Weight Loss in Dallas — Quick Answers</h2>
          <div>
            {(faqJsonLd.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map((item) => (
              <div key={item.name} className="faq-item">
                <p className="faq-q">{item.name}</p>
                <p className="faq-a">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <div className="cta-strip">
        <div className="container-narrow">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
            Ready to start a medically supervised GLP-1 program?
          </h2>
          <p style={{ color: "#a8b8cc", marginBottom: "1.75rem", maxWidth: "520px", margin: "0 auto 1.75rem" }}>
            Schedule a consultation at Summer House Medspa in Uptown Dallas. We&rsquo;ll review your candidacy, explain your options, and give you a full cost picture — no pressure.
          </p>
          <a href={SUMMER_HOUSE_BOOK} className="btn-primary" style={{ fontSize: "1rem" }}>Book a Consultation at Summer House</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
