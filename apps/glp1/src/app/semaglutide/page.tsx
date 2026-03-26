import type { Metadata } from "next";

const SUMMER_HOUSE_BOOK = "https://summerhousemedspa.com/contact";
const SUMMER_HOUSE_GLP1 = "https://summerhousemedspa.com/services/glp1-weight-loss-dallas";

export const metadata: Metadata = {
  title: "Semaglutide Weight Loss Dallas | Wegovy & Ozempic Programs",
  description:
    "Physician-supervised semaglutide (Wegovy/Ozempic) weight loss programs in Dallas, TX. Clinical results, costs, what to expect, and how our program is structured.",
  alternates: { canonical: "/semaglutide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is semaglutide and how does it cause weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Semaglutide is a GLP-1 receptor agonist — it mimics the gut hormone released after eating, slowing gastric emptying and reducing appetite. It is the active ingredient in Wegovy (FDA-approved for weight loss) and Ozempic (approved for type 2 diabetes, used off-label for weight loss). Clinical trials (STEP 1) showed average weight loss of 14–15% of body weight at 68 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get semaglutide in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Summer House Medspa in Uptown Dallas offers physician-supervised semaglutide programs under the medical direction of Dr. Daniel Kim, MD. Programs include initial health assessment, personalized titration, monthly check-ins, and a structured maintenance plan. Book a consultation at summerhousemedspa.com.",
      },
    },
    {
      "@type": "Question",
      name: "How much weight can I lose on semaglutide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The STEP 1 trial showed average weight loss of 14.9% of body weight at 68 weeks — about 33 pounds for a 220-pound person. Individual results vary based on starting dose, titration schedule, adherence, diet, activity level, and program support. Patients in structured programs with consistent oversight typically see better outcomes than those on prescription-only programs.",
      },
    },
    {
      "@type": "Question",
      name: "What are the side effects of semaglutide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common side effects are nausea, constipation, reduced appetite, and occasional vomiting — particularly during dose escalation. These are dose-dependent and typically improve after each dose transition as the body adapts. Managing side effects through slower titration, dietary adjustments, and anti-nausea medication when needed significantly reduces dropout rates.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for semaglutide to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients begin noticing appetite suppression within the first 2–4 weeks. Measurable weight loss typically begins in weeks 4–8. The active weight-loss phase runs approximately 6–12 months before a natural plateau, with results continuing to accumulate through the full titration schedule. Maintenance begins after reaching your goal weight.",
      },
    },
    {
      "@type": "Question",
      name: "Is semaglutide covered by insurance in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coverage varies by plan. Wegovy (semaglutide for weight loss) is covered by some commercial insurance plans with prior authorization — typically requiring BMI ≥30 or ≥27 with a weight-related comorbidity. Texas Medicaid does not currently cover weight-loss medications. Our program includes insurance navigation support to help determine your coverage options.",
      },
    },
  ],
};

const RESULTS = [
  { metric: "~14–15%", label: "Average body weight loss at 68 weeks (STEP 1 trial)" },
  { metric: "~15 lbs", label: "Average additional loss vs placebo" },
  { metric: "68%", label: "of trial participants achieved ≥5% weight loss" },
  { metric: "35%", label: "of trial participants achieved ≥15% weight loss" },
];

export default function SemaglutidePage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <a href="/" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#bb4b28", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
            ← All Programs
          </a>
          <span className="eyebrow" style={{ display: "block", marginTop: "1.25rem" }}>Semaglutide in Dallas</span>
          <h1 className="display" style={{ marginTop: "0.75rem" }}>
            Semaglutide Weight Loss Program
          </h1>
          <p className="subhead" style={{ marginTop: "1.25rem" }}>
            The active ingredient in Wegovy and Ozempic. Physician-supervised. Structured titration. Monthly check-ins. At Summer House Medspa in Uptown Dallas.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href={SUMMER_HOUSE_BOOK} className="btn-primary">Book Consultation</a>
            <a href={SUMMER_HOUSE_GLP1} className="btn-secondary">Program Details at Summer House</a>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-sm bg-white">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1.5rem" }}>Clinical Trial Results — STEP 1 (Novo Nordisk / NEJM)</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {RESULTS.map((r) => (
              <div key={r.metric} className="card-soft" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0f1e3d", lineHeight: 1.1 }}>{r.metric}</p>
                <p style={{ fontSize: "0.875rem", color: "#3d5278", marginTop: "0.375rem" }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <h2 className="headline">How Semaglutide Works</h2>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            Semaglutide mimics GLP-1 — a hormone your gut releases after eating. It slows how quickly food leaves your stomach (gastric emptying), reduces appetite signals in the brain, and improves insulin sensitivity. The result: you feel full on less food, think about food less, and make lower-calorie choices without white-knuckling it.
          </p>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            The medication is injected once weekly, starting at 0.25 mg and titrated up over 16–20 weeks to the target dose of 2.4 mg (Wegovy) or the prescribed clinical dose. The gradual titration lets your GI system adapt — programs that rush to the therapeutic dose see higher dropout rates from side effects.
          </p>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            Semaglutide is best suited for first-time GLP-1 users, patients who want the most established safety track record, or those who prefer to start conservatively and potentially switch to tirzepatide if more potency is needed.
          </p>
        </div>
      </section>

      {/* Who is it for */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div className="card">
              <h3 style={{ fontWeight: 700, color: "#2e6b4e", fontSize: "1.125rem", marginBottom: "1rem" }}>Semaglutide tends to work well for:</h3>
              <ul style={{ color: "#3d5278", fontSize: "0.9375rem", lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0 }}>
                <li>First-time GLP-1 medication users</li>
                <li>Patients who prefer the most established safety record</li>
                <li>Those seeking the more gradual titration approach</li>
                <li>Patients with commercial insurance likely to cover Wegovy</li>
                <li>Patients for whom moderate side effects are a concern</li>
                <li>Anyone with 15–40+ pounds to lose</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ fontWeight: 700, color: "#bb4b28", fontSize: "1.125rem", marginBottom: "1rem" }}>Consider tirzepatide instead if:</h3>
              <ul style={{ color: "#3d5278", fontSize: "0.9375rem", lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0 }}>
                <li>You want maximum weight-loss potential (20–22% vs 14–15%)</li>
                <li>You've plateaued on semaglutide and want more effect</li>
                <li>You have prior GLP-1 experience and good GI tolerance</li>
                <li>Significant weight loss (50+ lbs) is the goal</li>
              </ul>
              <a href="/tirzepatide" style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.875rem", fontWeight: 700, color: "#bb4b28" }}>Tirzepatide Program →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <span className="eyebrow">Semaglutide FAQs</span>
          <h2 className="headline" style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}>Semaglutide Questions, Answered Directly</h2>
          {(faqJsonLd.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map((item) => (
            <div key={item.name} className="faq-item">
              <p className="faq-q">{item.name}</p>
              <p className="faq-a">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="container-narrow">
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
            Start a semaglutide program in Dallas
          </h2>
          <p style={{ color: "#a8b8cc", marginBottom: "1.75rem", maxWidth: "480px", margin: "0 auto 1.75rem" }}>
            Book a consultation at Summer House Medspa. We&rsquo;ll assess candidacy, explain costs, and build a program around your goals.
          </p>
          <a href={SUMMER_HOUSE_BOOK} className="btn-primary" style={{ fontSize: "1rem" }}>Book at Summer House Medspa</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
