import type { Metadata } from "next";

const SUMMER_HOUSE_BOOK = "https://summerhousemedspa.com/contact";
const SUMMER_HOUSE_GLP1 = "https://summerhousemedspa.com/services/glp1-weight-loss-dallas";

export const metadata: Metadata = {
  title: "Tirzepatide Weight Loss Dallas | Zepbound & Mounjaro Programs",
  description:
    "Physician-supervised tirzepatide (Zepbound/Mounjaro) weight loss programs in Dallas, TX — average 20–22% body weight loss in clinical trials. Summer House Medspa, Uptown Dallas.",
  alternates: { canonical: "/tirzepatide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is tirzepatide and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tirzepatide is a dual GLP-1 and GIP receptor agonist — it activates two hormonal pathways rather than one, producing stronger appetite suppression than semaglutide alone. It is the active ingredient in Zepbound (FDA-approved for weight loss) and Mounjaro (approved for type 2 diabetes). SURMOUNT-1 clinical trials showed average weight loss of 20–22% of body weight at 72 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Is tirzepatide better than semaglutide for weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tirzepatide produces higher average weight loss than semaglutide in clinical trials (20–22% vs 14–15% of body weight). Whether it is 'better' for a specific patient depends on health history, GI tolerance, insurance coverage, and goals. Tirzepatide tends to be more appropriate for patients seeking maximum weight loss, prior GLP-1 users who have plateaued, or those with a stronger metabolic profile. A physician assessment determines which is right for you.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get tirzepatide in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Summer House Medspa in Uptown Dallas offers physician-supervised tirzepatide programs under the medical direction of Dr. Daniel Kim, MD. Programs include initial health assessment, personalized titration starting at 2.5 mg, monthly check-ins, side-effect management, and a maintenance plan. Book at summerhousemedspa.com.",
      },
    },
    {
      "@type": "Question",
      name: "What are the side effects of tirzepatide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common side effects are nausea, diarrhea, decreased appetite, and vomiting — particularly during the early dose escalation phase. Tirzepatide's side effects can be more pronounced than semaglutide's during titration due to the dual-receptor mechanism. These typically improve significantly after the first 4–6 weeks at each dose level. Proper titration management and active side-effect monitoring significantly reduce dropout.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results on tirzepatide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Appetite suppression is typically noticeable within 2–4 weeks of starting tirzepatide. Measurable weight loss generally begins around weeks 4–8. The maximum weight loss in clinical trials was seen at approximately 72 weeks with full dose titration. Most patients see their most rapid progress in months 3–9.",
      },
    },
    {
      "@type": "Question",
      name: "How much does tirzepatide cost in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brand-name Zepbound runs approximately $1,300–$1,600/month at retail without insurance. Some commercial insurance plans cover Zepbound with prior authorization for patients meeting BMI criteria. Eli Lilly offers savings programs that can reduce out-of-pocket cost for eligible patients. Summer House provides a full cost breakdown at consultation, including insurance navigation and available savings options.",
      },
    },
  ],
};

const RESULTS = [
  { metric: "20–22%", label: "Average body weight lost at 72 weeks (SURMOUNT-1 trial)" },
  { metric: "~50 lbs", label: "Average weight loss at maximum dose for 200 lb patient" },
  { metric: "91%", label: "of trial participants achieved ≥5% weight loss at max dose" },
  { metric: "57%", label: "of trial participants achieved ≥20% weight loss" },
];

export default function TirzepatidePage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <a href="/" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#bb4b28", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
            ← All Programs
          </a>
          <span className="eyebrow" style={{ display: "block", marginTop: "1.25rem" }}>Tirzepatide in Dallas</span>
          <h1 className="display" style={{ marginTop: "0.75rem" }}>
            Tirzepatide Weight Loss Program
          </h1>
          <p className="subhead" style={{ marginTop: "1.25rem" }}>
            The active ingredient in Zepbound and Mounjaro. Dual GLP-1 + GIP mechanism for maximum weight-loss effect. Physician-supervised at Summer House Medspa in Uptown Dallas.
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
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1.5rem" }}>Clinical Trial Results — SURMOUNT-1 (Eli Lilly / NEJM)</p>
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

      {/* How it works */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <h2 className="headline">How Tirzepatide Works Differently</h2>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            Standard GLP-1 medications activate one receptor. Tirzepatide activates two — GLP-1 and GIP (glucose-dependent insulinotropic polypeptide). GIP is a separate gut hormone that works synergistically with GLP-1 to increase appetite suppression, enhance metabolic regulation, and drive greater total weight loss.
          </p>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            The mechanism also has implications for insulin sensitivity and beta-cell function that make tirzepatide particularly well-suited for patients with type 2 diabetes or metabolic syndrome alongside obesity. The dual-receptor action is why the clinical trial results are so significantly higher than semaglutide's — it's not the same drug at a higher dose. It's a different mechanism.
          </p>
          <p className="subhead" style={{ marginTop: "1rem" }}>
            Titration starts at 2.5 mg weekly, with increases every four weeks up to a maximum of 15 mg. The gradual titration manages the more pronounced early side effects that the dual-receptor mechanism can cause. A well-supervised program manages titration pace based on your tolerance — not a rigid calendar.
          </p>
        </div>
      </section>

      {/* Semaglutide vs Tirzepatide comparison */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="headline" style={{ marginBottom: "1.5rem" }}>Semaglutide vs Tirzepatide — Quick Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>Factor</th>
                  <th>Semaglutide (Wegovy)</th>
                  <th>Tirzepatide (Zepbound)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mechanism", "GLP-1 receptor agonist", "Dual GLP-1 + GIP receptor agonist"],
                  ["Avg. weight loss", "~14–15% at 68 weeks", "~20–22% at 72 weeks"],
                  ["Starting dose", "0.25 mg/week", "2.5 mg/week"],
                  ["Max dose", "2.4 mg/week", "15 mg/week"],
                  ["Side-effect profile", "Nausea, constipation — typically moderate", "Nausea, GI symptoms — can be more pronounced early"],
                  ["Best for", "First-time GLP-1 users, conservative start, cost-conscious", "Maximum weight loss, prior GLP-1 users, stronger results needed"],
                  ["FDA-approved (weight loss)", "Yes — Wegovy", "Yes — Zepbound"],
                ].map(([factor, sema, tirz]) => (
                  <tr key={factor}>
                    <td className="row-label">{factor}</td>
                    <td>{sema}</td>
                    <td>{tirz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#6b7f99" }}>
            Not sure which is right for you?{" "}
            <a href={SUMMER_HOUSE_BOOK} style={{ color: "#bb4b28", fontWeight: 700 }}>Book a consultation</a> — we&rsquo;ll assess your health picture and make a specific recommendation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <span className="eyebrow">Tirzepatide FAQs</span>
          <h2 className="headline" style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}>Tirzepatide Questions, Answered Directly</h2>
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
            Start a tirzepatide program in Dallas
          </h2>
          <p style={{ color: "#a8b8cc", marginBottom: "1.75rem", maxWidth: "480px", margin: "0 auto 1.75rem" }}>
            Schedule at Summer House Medspa in Uptown Dallas. We&rsquo;ll determine if tirzepatide is the right choice and build a program around your goals.
          </p>
          <a href={SUMMER_HOUSE_BOOK} className="btn-primary" style={{ fontSize: "1rem" }}>Book at Summer House Medspa</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
