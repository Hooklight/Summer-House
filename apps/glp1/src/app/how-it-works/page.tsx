import type { Metadata } from "next";

const SUMMER_HOUSE_BOOK = "https://summerhousemedspa.com/contact";

export const metadata: Metadata = {
  title: "How GLP-1 Weight Loss Programs Work in Dallas | Summer House Medspa",
  description:
    "What a physician-supervised GLP-1 weight loss program looks like from intake to maintenance — what's included, what makes the difference, and what to ask any provider.",
  alternates: { canonical: "/how-it-works" },
};

const PHASES = [
  {
    phase: "Phase 1",
    title: "Medical Assessment & Intake",
    duration: "Before you start",
    body: [
      "A complete intake isn't a formality — it's the foundation of your program. We review your full health history, current medications, relevant lab work (blood glucose, thyroid, lipids, metabolic panel), and body composition baseline.",
      "This assessment determines candidacy, identifies any contraindications, and allows us to make a specific medication recommendation rather than a generic one. Patients with thyroid history, personal or family history of medullary thyroid carcinoma, or pancreatitis history require careful evaluation before starting GLP-1 therapy.",
      "Your intake also establishes the baseline we'll measure progress against — not just the scale, but the full metabolic picture.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Titration & Active Weight Loss",
    duration: "Months 1–8+",
    body: [
      "GLP-1 medications are dose-titrated over weeks to months. Semaglutide starts at 0.25 mg and increases every four weeks. Tirzepatide starts at 2.5 mg with similar escalation. The dose schedule is a guideline — we adjust based on your tolerance. Programs that rigidly stick to a calendar regardless of side effects have higher dropout rates.",
      "Monthly check-ins during the active phase allow us to track weight, body composition, side-effect burden, and any emerging concerns. Nausea, constipation, and fatigue — the most common early complaints — are actively managed, not waited out.",
      "Most patients see meaningful weight loss within the first 4–8 weeks. The active weight-loss phase typically runs 6–12 months, with rate of loss slowing as you approach a plateau.",
    ],
  },
  {
    phase: "Phase 3",
    title: "Plateau Management",
    duration: "As needed",
    body: [
      "A plateau on GLP-1 medication is not a sign of failure — it's a predictable consequence of metabolic adaptation. When weight loss slows, we assess: have you reached your maximum tolerated dose? Is protein intake adequate? Is resistance training in place? Is a medication switch to a more potent option appropriate?",
      "Switching from semaglutide to tirzepatide at plateau is a common and effective strategy — the dual-receptor mechanism provides additional appetite suppression that semaglutide cannot replicate. The switch requires dose management and physician oversight.",
      "Protein intake and resistance training are actively discussed at this phase — they preserve lean muscle mass, maintain metabolic rate, and make the weight loss you've achieved more sustainable.",
    ],
  },
  {
    phase: "Phase 4",
    title: "Maintenance & Transition",
    duration: "At goal weight and beyond",
    body: [
      "The most common failure point in GLP-1 programs is the exit. Studies show that most patients regain significant weight within a year of stopping without a structured plan. We plan for this from day one.",
      "Maintenance options include: continuing at a reduced maintenance dose, transitioning off medication with a formal behavioral support structure in place, or continuing full-dose for chronic weight management. The right approach depends on your health history, goals, and how sustainable your behavioral habits are.",
      "Patients who have built protein intake and resistance training habits during the active phase, and who have a specific written plan for the post-medication period, have significantly better long-term outcomes. This is why program structure matters more than which specific medication you choose.",
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a physician-supervised GLP-1 program different from telehealth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Physician-supervised programs include a comprehensive initial health assessment, ongoing monitoring by a licensed provider, active side-effect management, and a structured maintenance plan. Telehealth-only services often provide a prescription with minimal oversight — no body composition tracking, no lab monitoring, and no structured exit strategy. The clinical trials that produced 14–22% weight loss results used structured programs, not prescription-only services.",
      },
    },
    {
      "@type": "Question",
      name: "How often are check-ins required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly check-ins during the active loss phase are standard. Early in titration — the first two to three months — more frequent contact is helpful for managing side effects. Check-in frequency typically decreases once you reach a stable maintenance dose. Programs with longer check-in intervals have higher dropout rates because side effects go unmanaged and dose adjustments happen too slowly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need labs before starting a GLP-1 program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baseline labs — including fasting glucose, HbA1c, thyroid function, lipid panel, and basic metabolic panel — are part of a responsible intake. They identify contraindications, establish a health baseline, and allow for meaningful comparison at follow-up. Any program that starts medication without baseline labs is not doing a proper clinical assessment.",
      },
    },
    {
      "@type": "Question",
      name: "How much protein should I eat on a GLP-1 program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clinicians recommend 1.2 to 1.6 grams of protein per kilogram of body weight per day during active weight loss on GLP-1 medications. For a 200-pound (91 kg) person, that's approximately 109 to 145 grams per day. This is intentional because total food intake drops significantly on GLP-1 medications — without protein prioritization, lean muscle mass loss becomes a significant concern. Clinical data shows 25–40% of weight lost on semaglutide is lean mass without protein and resistance training optimization.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when I stop GLP-1 medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients regain significant weight after stopping GLP-1 medication without a structured transition plan. The STEP 4 trial showed that patients who stopped semaglutide after significant weight loss regained about two-thirds of their lost weight within a year. This is biology, not failure — the medication suppresses appetite signals, and those signals return when the medication stops. A structured exit plan — protein habits, resistance training, maintenance dose consideration — is essential before stopping.",
      },
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <a href="/" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#bb4b28", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
            ← Home
          </a>
          <span className="eyebrow" style={{ display: "block", marginTop: "1.25rem" }}>Program Structure</span>
          <h1 className="display" style={{ marginTop: "0.75rem" }}>How a GLP-1 Program Works</h1>
          <p className="subhead" style={{ marginTop: "1.25rem" }}>
            The clinical trials that produced 14 to 22% body weight loss used structured programs with consistent oversight — not a prescription and a vial. Here&rsquo;s what a complete program looks like from intake to maintenance.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="section bg-white">
        <div className="container-narrow">
          {PHASES.map((phase, i) => (
            <div
              key={phase.phase}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "1.5rem",
                marginBottom: i < PHASES.length - 1 ? "2.5rem" : 0,
                paddingBottom: i < PHASES.length - 1 ? "2.5rem" : 0,
                borderBottom: i < PHASES.length - 1 ? "1px solid #e8dbc8" : "none",
              }}
            >
              <div style={{ textAlign: "center", minWidth: "3rem" }}>
                <div style={{
                  width: "2.5rem", height: "2.5rem",
                  borderRadius: "50%",
                  background: "#0f1e3d",
                  color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: "0.8125rem",
                }}>
                  {i + 1}
                </div>
                {i < PHASES.length - 1 && (
                  <div style={{ width: "2px", background: "#e8dbc8", height: "calc(100% + 2.5rem)", margin: "0.375rem auto 0", minHeight: "2rem" }} />
                )}
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bb4b28", marginBottom: "0.25rem" }}>{phase.phase} · {phase.duration}</p>
                <h2 className="headline" style={{ fontSize: "1.375rem", marginBottom: "0.75rem" }}>{phase.title}</h2>
                {phase.body.map((para, j) => (
                  <p key={j} style={{ color: "#3d5278", lineHeight: 1.75, fontSize: "0.9375rem", marginBottom: "0.75rem" }}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to look for */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <span className="eyebrow">Evaluating Any GLP-1 Provider</span>
          <h2 className="headline" style={{ marginTop: "0.75rem", marginBottom: "1.25rem" }}>Questions to ask before you start</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              ["What's included in the baseline assessment?", "Should include labs, health history, and body composition measurement — not just a weight and a prescription."],
              ["What happens if I have side effects?", "You should have access to your provider between monthly visits. Side effects in the first few weeks are common; knowing who to call matters."],
              ["What does the titration schedule look like?", "Should be gradual and adjustable based on tolerance — not a rigid calendar regardless of how you're doing."],
              ["What is the maintenance or exit plan?", "Should be built into the program from day one. If the answer is 'we'll figure it out when you get there,' that's a red flag."],
              ["Do you track body composition, or just weight?", "Scale weight includes muscle, fat, water. Body composition tells you what you're actually losing."],
            ].map(([q, a]) => (
              <div key={q} className="card">
                <p style={{ fontWeight: 700, color: "#0f1e3d", marginBottom: "0.375rem" }}>{q}</p>
                <p style={{ fontSize: "0.9rem", color: "#3d5278", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-narrow">
          <span className="eyebrow">Program FAQs</span>
          <h2 className="headline" style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}>Common Program Questions</h2>
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
            Ready to start a properly structured program?
          </h2>
          <p style={{ color: "#a8b8cc", marginBottom: "1.75rem", maxWidth: "520px", margin: "0 auto 1.75rem" }}>
            Book a consultation at Summer House Medspa in Uptown Dallas. Physician-supervised, comprehensive, with a real plan from day one.
          </p>
          <a href={SUMMER_HOUSE_BOOK} className="btn-primary" style={{ fontSize: "1rem" }}>Book at Summer House Medspa</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
