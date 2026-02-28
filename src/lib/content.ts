export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  problems: string[];
  signs: string[];
  faq: Array<{ question: string; answer: string }>;
};

export type Location = {
  slug: string;
  name: string;
  county: string;
  latitude: number;
  longitude: number;
  summary: string;
  introParagraphs: string[];
  commonIssues: string[];
  neighborhoods: string[];
  processParagraphs: string[];
  faq: Array<{ question: string; answer: string }>;
};

const configuredPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() ?? "";
const configuredBookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? "";

function phoneToTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `tel:+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `tel:+${digits}`;
  }

  if (digits.length > 0) {
    return `tel:+${digits}`;
  }

  return "/#lead-form";
}

export const contactPhone = configuredPhone;
export const hasRealPhone = Boolean(contactPhone);
export const contactPhoneDisplay = hasRealPhone ? contactPhone : "(469) XXX-XXXX";
export const contactPhoneHref = hasRealPhone ? phoneToTelHref(contactPhone) : "/#lead-form";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@summerhousemedspa.com";
export const contactAddressLine1 = "9667 N Central Expy, Suite 141";
export const contactCity = "Dallas";
export const contactRegion = "TX";
export const contactPostalCode = "75231";
export const directionsUrl =
  process.env.NEXT_PUBLIC_DIRECTIONS_URL ??
  "https://www.google.com/maps/search/?api=1&query=9667+N+Central+Expy+Suite+141+Dallas+TX+75231";
export const reviewUrl =
  process.env.NEXT_PUBLIC_REVIEW_URL ??
  "https://www.google.com/search?q=summer+house+medspa+dallas+reviews";
export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "";
export const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "";

export const primaryCtaLabel = configuredBookingUrl ? "Book Online" : "Book Consultation";
export const primaryCtaHref = configuredBookingUrl || "/#lead-form";
export const inspectionClaim = "Conservative, natural-first treatment planning";
export const responseTimeClaim = "Same-day callback during business hours";
export const pricingGuidance =
  "Weight-loss programs typically start around $250/month. Botox, filler, and laser treatment plans are customized during consultation.";
export const consultationSteps = [
  "Share your goals and treatment history.",
  "Get a conservative, personalized treatment plan.",
  "Review options, pricing, and scheduling in one visit.",
];
export const officeHours = [
  { day: "Monday", hours: "By appointment" },
  { day: "Tuesday", hours: "By appointment" },
  { day: "Wednesday", hours: "By appointment" },
  { day: "Thursday", hours: "By appointment" },
  { day: "Friday", hours: "By appointment" },
  { day: "Saturday", hours: "Limited appointments" },
  { day: "Sunday", hours: "Closed" },
];

export const services: Service[] = [
  {
    slug: "botox-dallas",
    title: "Botox and Neuromodulators",
    summary:
      "Subtle Botox, Jeuveau, and Xeomin treatment plans designed for natural movement and refreshed results in Dallas.",
    intro:
      "At Summer House, neuromodulator treatments are designed to keep expression and reduce lines, not freeze your face. Every plan starts with full facial assessment, dosing transparency, and a conservative first session.",
    metaTitle: "Botox Dallas TX | Natural Results | Summer House Medspa",
    metaDescription:
      "Botox in Dallas with a natural-results approach. Personalized neuromodulator plans, expert injectors, and same-provider continuity at Summer House Medspa.",
    problems: [
      "Forehead and frown lines that look deeper at rest",
      "Crow's feet that persist despite skincare",
      "Previous overdone injectables and fear of looking unnatural",
      "Inconsistent results from rotating providers",
    ],
    signs: [
      "Lines remain visible even when your face is relaxed",
      "You want prevention before lines set deeper",
      "You want a lighter dose with room to build gradually",
      "You prefer consistent injector follow-up at 2 weeks",
    ],
    faq: [
      {
        question: "How much Botox do I need?",
        answer:
          "Dose depends on anatomy, muscle strength, and goals. We map dosage by treatment area and adjust conservatively after your first follow-up.",
      },
      {
        question: "How long does Botox last?",
        answer:
          "Most clients return every 3 to 4 months. Consistent scheduling usually gives smoother maintenance and fewer dramatic peaks and drops.",
      },
    ],
  },
  {
    slug: "dallas-filler",
    title: "Dermal Filler and Biostimulators",
    summary:
      "Lip, cheek, chin, jawline, and under-eye filler plans focused on balanced shape and natural proportion.",
    intro:
      "Filler at Summer House is built around restraint, proportion, and long-term planning. We use full-face assessment, conservative layering, and honest guidance on when not to inject.",
    metaTitle: "Dallas Filler Specialists | Summer House Medspa",
    metaDescription:
      "Dallas filler treatments for lips, cheeks, chin, and full-face balancing. Natural outcomes with HA filler and Radiesse at Summer House Medspa.",
    problems: [
      "Volume loss that makes you look tired",
      "Asymmetry in lips or lower face",
      "Flattened cheek contour",
      "Fear of migration or overfilled results",
    ],
    signs: [
      "You prefer subtle, staged results",
      "You want facial balancing instead of one-area treatment",
      "You need correction from previous filler",
      "You want clear dissolver and safety protocols",
    ],
    faq: [
      {
        question: "Do you do natural lip filler?",
        answer:
          "Yes. Most clients choose staged volume increases over one-session dramatic change, which helps maintain natural proportions.",
      },
      {
        question: "What is your approach to filler safety?",
        answer:
          "We review history, anatomy, contraindications, and expected outcomes before treatment, with conservative dosing and documented follow-up.",
      },
    ],
  },
  {
    slug: "laser-treatment-dallas",
    title: "Laser Treatment (Face and Body)",
    summary:
      "Clarity II laser treatment for hair reduction, pigmentation, vascular concerns, and skin rejuvenation.",
    intro:
      "Our Clarity II laser platform allows treatment customization by skin type, concern, and downtime tolerance. We prioritize realistic timelines and treatment sequencing for durable outcomes.",
    metaTitle: "Laser Treatment Dallas TX | Clarity II | Summer House Medspa",
    metaDescription:
      "Dallas laser treatment with Lutronic Clarity II for hair removal, pigment, vascular concerns, and texture support. Personalized plans at Summer House Medspa.",
    problems: [
      "Unwanted facial or body hair",
      "Sun spots and uneven tone",
      "Persistent redness or vascular patches",
      "Texture concerns not improving with topical skincare",
    ],
    signs: [
      "You want minimal-downtime treatment options",
      "You need a plan across multiple skin concerns",
      "You want transparent package pricing before starting",
      "You want treatment intervals mapped from day one",
    ],
    faq: [
      {
        question: "How many laser sessions will I need?",
        answer:
          "Most protocols run as a series. Exact session count depends on treatment zone, hair cycle, skin type, and your target endpoint.",
      },
      {
        question: "Is Clarity II safe for different skin tones?",
        answer:
          "Yes, with correct settings and candidate screening. We adjust parameters by skin type and treatment objective.",
      },
    ],
  },
  {
    slug: "glp1-weight-loss-dallas",
    title: "Medical Weight Loss (GLP-1)",
    summary:
      "Physician-supervised semaglutide and tirzepatide programs with check-ins, labs, and structured lifestyle support.",
    intro:
      "Summer House runs GLP-1 care as a full medical program, not just a prescription. We focus on candidacy, side-effect management, dose progression, and retention support so clients can sustain results.",
    metaTitle: "GLP-1 Weight Loss Dallas TX | Semaglutide and Tirzepatide",
    metaDescription:
      "Medical weight loss in Dallas with semaglutide and tirzepatide care plans. Structured check-ins, transparent pricing, and physician oversight.",
    problems: [
      "Repeated weight regain from short-term diets",
      "Appetite dysregulation and cravings",
      "Need for medically supervised weight-loss options",
      "Low energy and stalled metabolic progress",
    ],
    signs: [
      "You need long-term accountability, not one-time prescribing",
      "You want transparent monthly plan options",
      "You want support for nutrition and adherence",
      "You want ongoing monitoring and adjustment",
    ],
    faq: [
      {
        question: "Do you offer semaglutide and tirzepatide programs?",
        answer:
          "Yes. We determine the right path by medical history, goals, tolerance, and budget. Plans include structured follow-up.",
      },
      {
        question: "Do you bill insurance?",
        answer:
          "Coverage varies by plan and indication. We review options during consultation and provide transparent self-pay pathways.",
      },
    ],
  },
  {
    slug: "peptide-therapy-dallas",
    title: "Peptide and Wellness Therapy",
    summary:
      "Personalized peptide and wellness support programs focused on recovery, energy, body composition, and longevity goals.",
    intro:
      "Our wellness lane is built for clients who want more than aesthetics alone. Programs are guided by clinical review, candidacy, and measurable milestones rather than trend-based protocols.",
    metaTitle: "Peptide Therapy Dallas TX | Wellness Programs | Summer House",
    metaDescription:
      "Peptide and wellness programs in Dallas with clinical guidance. Build personalized protocols for recovery, energy, and metabolic support.",
    problems: [
      "Recovery lag and fatigue",
      "Body composition plateaus",
      "Need for structured wellness support",
      "Confusion from conflicting online peptide advice",
    ],
    signs: [
      "You want supervised, compliant protocol design",
      "You need regular reassessment instead of one-off visits",
      "You want to combine wellness with aesthetic goals",
      "You want one clinic managing your full plan",
    ],
    faq: [
      {
        question: "Do you customize peptide plans?",
        answer:
          "Yes. We personalize based on goals, history, and response over time, with scheduled follow-up and plan adjustments.",
      },
      {
        question: "Can peptide therapy be paired with weight-loss care?",
        answer:
          "In many cases, yes. We evaluate safety and sequencing during your consultation before combining modalities.",
      },
    ],
  },
  {
    slug: "microneedling-prp-dallas",
    title: "Microneedling and PRP",
    summary:
      "Collagen-focused skin rejuvenation with microneedling and PRP protocols for texture, tone, and scar support.",
    intro:
      "Microneedling and PRP are ideal for clients who want progressive skin improvement with little downtime. We define treatment sequence, expected milestones, and home-care support before beginning.",
    metaTitle: "Microneedling Dallas TX | PRP Skin Rejuvenation",
    metaDescription:
      "Microneedling and PRP in Dallas for texture, acne scars, and collagen support. Personalized treatment plans at Summer House Medspa.",
    problems: [
      "Acne scar texture",
      "Early laxity and dull tone",
      "Fine lines and uneven skin quality",
      "Need for low-downtime collagen stimulation",
    ],
    signs: [
      "You want natural, cumulative improvement",
      "You are willing to complete a treatment series",
      "You want clear pre/post-care instructions",
      "You prefer combining in-clinic and home-care strategy",
    ],
    faq: [
      {
        question: "How many sessions do I need?",
        answer:
          "Most clients need a series for full improvement. We build your schedule around skin goals, timeline, and downtime tolerance.",
      },
      {
        question: "Is PRP required with microneedling?",
        answer:
          "Not always. PRP may improve outcomes for certain concerns, but we decide based on your skin profile and goals.",
      },
    ],
  },
  {
    slug: "botox-hyperhidrosis-dallas",
    title: "Botox for Excessive Sweating (Hyperhidrosis)",
    summary:
      "FDA-approved Botox treatment for underarm, hand, and foot excessive sweating with results lasting 6 to 12 months.",
    intro:
      "Hyperhidrosis — excessive sweating beyond what normal temperature regulation requires — affects 3 to 5 percent of the population, and most people suffer through it without knowing there is a highly effective clinical solution. Botox injected into the sweat glands blocks the nerve signals that trigger overproduction, with results typically lasting 6 to 12 months per treatment cycle.",
    metaTitle: "Botox for Excessive Sweating Dallas TX | Hyperhidrosis Treatment",
    metaDescription:
      "FDA-approved Botox treatment for excessive sweating (hyperhidrosis) in Dallas. Underarm, hand, and foot hyperhidrosis treated at Summer House Medspa.",
    problems: [
      "Underarm sweat that soaks through clothing regardless of temperature",
      "Palmar hyperhidrosis affecting handshakes and keyboard use",
      "Social anxiety caused by unpredictable sweating in professional situations",
      "Prescription antiperspirants that did not provide adequate control",
    ],
    signs: [
      "Sweating that occurs without heat or exercise triggers",
      "Prior use of clinical-strength antiperspirant without adequate improvement",
      "Desire for 6 to 12 month results with a simple, low-downtime treatment",
      "Frustration with how hyperhidrosis affects daily quality of life",
    ],
    faq: [
      {
        question: "Does Botox for sweating work as well as for wrinkles?",
        answer:
          "For many clients, hyperhidrosis Botox is more reliable than cosmetic Botox. The mechanism directly blocks sweat gland nerve activity, and most clients see 80 to 90 percent reduction in treated areas.",
      },
      {
        question: "How many units of Botox are needed for hyperhidrosis?",
        answer:
          "Underarm treatment typically requires 50 units per side (100 total). Hands and feet vary. Dosing and pricing are discussed during consultation.",
      },
    ],
  },
  {
    slug: "laser-vein-treatment-dallas",
    title: "Laser Vein Treatment",
    summary:
      "Clarity II laser treatment for facial spider veins, broken capillaries, and leg vein reduction with minimal downtime.",
    intro:
      "Visible veins on the face, nose, and legs are one of the most common aesthetic concerns — and one of the least talked about. The Clarity II laser targets hemoglobin in blood vessels, causing them to collapse and be reabsorbed without damaging surrounding skin. Both facial telangiectasia and smaller leg veins respond well to laser treatment, often with significant improvement after two to four sessions.",
    metaTitle: "Laser Vein Treatment Dallas TX | Spider Veins, Broken Capillaries",
    metaDescription:
      "Clarity II laser for facial spider veins, broken capillaries, and leg vein reduction in Dallas. Minimal downtime, visible results. Summer House Medspa.",
    problems: [
      "Visible facial spider veins and broken capillaries around the nose and cheeks",
      "Leg veins that make shorts and swimwear uncomfortable",
      "Persistent facial redness from dilated capillaries",
      "Small leg veins that do not require surgical treatment",
    ],
    signs: [
      "Clients bothered by specific visible veins rather than diffuse redness",
      "Willingness to complete a 2 to 4 session series spaced 4 to 6 weeks apart",
      "Preference for laser over sclerotherapy for smaller veins",
      "Prior topical redness treatments that did not produce sufficient improvement",
    ],
    faq: [
      {
        question: "How many laser sessions are needed for vein treatment?",
        answer:
          "Most facial vein concerns respond in 2 to 4 sessions spaced 4 to 6 weeks apart. Leg veins may require additional sessions depending on size and depth.",
      },
      {
        question: "Does laser vein treatment hurt?",
        answer:
          "Most clients describe it as a mild snapping sensation. Topical numbing is available for sensitive areas. Downtime is typically 24 to 48 hours of mild redness.",
      },
    ],
  },
  {
    slug: "dark-spot-removal-dallas",
    title: "Laser Dark Spot and Pigmentation Treatment",
    summary:
      "Clarity II laser treatment for sun spots, age spots, and pigmentation on the face, hands, chest, arms, and legs.",
    intro:
      "Dark spots from sun exposure, aging, and hormonal changes are one of the most searched aesthetic concerns — and laser treatment is one of the few interventions that actually works. The Clarity II targets melanin in hyperpigmented spots, breaking them down into smaller particles that the body clears naturally over 2 to 4 weeks post-treatment. Most clients see significant improvement in 1 to 3 sessions, with results lasting years when sun protection is maintained.",
    metaTitle: "Laser Dark Spot Removal Dallas TX | Age Spots, Sun Damage | Summer House",
    metaDescription:
      "Clarity II laser dark spot removal in Dallas for sun spots, age spots, and hyperpigmentation on face, hands, chest, and body. Summer House Medspa.",
    problems: [
      "Sun spots and age spots on the face, hands, chest, or arms",
      "Post-inflammatory hyperpigmentation from acne or prior skin injury",
      "Melasma or hormonal pigmentation that resists topical treatment",
      "Uneven skin tone from accumulated sun damage",
    ],
    signs: [
      "Clients bothered by specific spots rather than overall texture issues",
      "Prior use of topical brighteners without sufficient improvement",
      "Interest in body-area treatment beyond the face — hands, chest, arms",
      "Event-motivated timeline with realistic improvement expectations",
    ],
    faq: [
      {
        question: "Can you treat dark spots on areas other than the face?",
        answer:
          "Yes. The Clarity II is effective for dark spots on the hands, chest, arms, and legs — common areas for sun damage that are often overlooked compared to the face.",
      },
      {
        question: "How many sessions does it take to remove age spots?",
        answer:
          "Most isolated sun spots respond in 1 to 2 sessions. More diffuse damage may take 3 to 4 sessions. We set realistic expectations during consultation.",
      },
    ],
  },
  {
    slug: "masseter-botox-dallas",
    title: "Jawline Slimming with Botox (Masseter Reduction)",
    summary:
      "Botox injections into the masseter muscle to slim the jawline, reduce facial width, and relieve TMJ tension and jaw clenching.",
    intro:
      "The masseter is the large chewing muscle at the jaw angle — and in many people, it becomes overdeveloped from jaw clenching, teeth grinding (bruxism), or genetics. Botox injected into the masseter weakens the muscle over time, resulting in a slimmer, more oval facial silhouette. The same treatment provides significant relief from TMJ tension, jaw pain, and chronic headaches caused by nighttime grinding.",
    metaTitle: "Jawline Slimming Botox Dallas TX | Masseter Reduction | Summer House",
    metaDescription:
      "Botox masseter reduction in Dallas for jawline slimming and TMJ relief. Natural face shape improvement with Botox injections at Summer House Medspa.",
    problems: [
      "Square or wide lower face from overdeveloped masseter muscles",
      "Jaw clenching or bruxism causing facial tension and morning headaches",
      "TMJ discomfort that does not respond fully to nightguards",
      "Desire for softer, more oval facial shape without surgical intervention",
    ],
    signs: [
      "Visibly developed jaw angles with interest in facial slimming",
      "Confirmed bruxism with interest in combined aesthetic and functional benefit",
      "Preference for a gradual, reversible jawline refinement approach",
      "Jaw tension, grinding, or TMJ-related discomfort",
    ],
    faq: [
      {
        question: "How long does masseter Botox take to work?",
        answer:
          "Initial muscle relaxation is noticeable within 4 to 6 weeks. Visible jaw slimming typically takes 2 to 3 months as the muscle gradually reduces in size with repeated treatment.",
      },
      {
        question: "Does masseter Botox also help with teeth grinding?",
        answer:
          "Yes. Most clients report significant reduction in jaw tension, headaches, and nighttime grinding. It is often used alongside or instead of nightguards.",
      },
    ],
  },
  {
    slug: "brow-lift-botox-dallas",
    title: "Non-Surgical Brow Lift with Botox",
    summary:
      "Strategic Botox placement to elevate the brows, open the eye area, and correct asymmetry without surgery.",
    intro:
      "A brow that sits low or heavy — particularly on the outer corner — makes the eyes look tired, stern, or older without any underlying facial change. Strategic Botox placement relaxes the depressor muscles that pull the brow down while leaving the elevator muscles intact, producing a natural lift of 2 to 4 millimeters in the outer brow. The result is a more open, refreshed appearance that looks like good rest rather than treatment.",
    metaTitle: "Non-Surgical Brow Lift Dallas TX | Botox Brow Lift | Summer House Medspa",
    metaDescription:
      "Non-surgical brow lift with strategic Botox in Dallas. Open, lifted brow appearance without surgery at Summer House Medspa, Dallas TX.",
    problems: [
      "Heavy outer brow that makes eyes look tired or stern",
      "Brow asymmetry where one side sits noticeably lower",
      "Prior forehead Botox that flattened rather than lifted the brows",
      "Early brow descent not yet severe enough for surgical intervention",
    ],
    signs: [
      "Brow sitting at or below the orbital rim, especially laterally",
      "Desire for a more open eye appearance without surgery",
      "Interest in combining brow lift with standard forehead Botox",
      "Pre-existing asymmetry requiring a non-permanent correction",
    ],
    faq: [
      {
        question: "How is a Botox brow lift different from regular forehead Botox?",
        answer:
          "Standard forehead Botox targets the frontalis muscle and can flatten brows if not carefully planned. A brow lift protocol specifically targets the depressor muscles to allow the brow to lift, requiring precise placement and conservative dosing.",
      },
      {
        question: "How much lift can I realistically expect?",
        answer:
          "Most clients see 2 to 4 millimeters of outer brow elevation — subtle but visually significant. The result is an open, alert appearance without surgical-looking overcorrection.",
      },
    ],
  },
  {
    slug: "neck-rejuvenation-dallas",
    title: "Neck and Décolletage Rejuvenation",
    summary:
      "Botox, laser, and microneedling treatments for neck banding, tech neck lines, chest wrinkles, and skin laxity.",
    intro:
      "The neck and décolletage are the most neglected areas in aesthetic medicine — clients invest heavily in their faces but leave the neck and chest untreated, creating a visible mismatch. Summer House addresses this with a combination approach: Botox for platysmal neck bands, Clarity II laser for pigmentation and texture on the chest, and microneedling with PRP for skin quality and early laxity. These areas respond well to treatment when the right tools are applied in the right sequence.",
    metaTitle: "Neck Rejuvenation Dallas TX | Tech Neck, Décolletage Laser | Summer House",
    metaDescription:
      "Neck and décolletage rejuvenation in Dallas with Botox, Clarity II laser, and microneedling. Tech neck lines, chest wrinkles, and skin laxity treatment at Summer House Medspa.",
    problems: [
      "Visible platysmal neck bands (vertical cords) that appear when smiling or speaking",
      "Tech neck lines — horizontal creases from prolonged phone and screen use",
      "Chest wrinkles and sun damage on the décolletage",
      "Mismatched skin quality between a treated face and neglected neck or chest",
    ],
    signs: [
      "Clients who have had facial work and notice the neck-face mismatch",
      "Those bothered by neck bands visible in conversation or photographs",
      "Significant chest sun damage from years of Texas outdoor exposure",
      "Interest in a comprehensive approach covering the full treatment zone",
    ],
    faq: [
      {
        question: "Does Botox for neck bands actually work?",
        answer:
          "Yes. Botox injected into the platysmal bands softens their appearance significantly. It does not eliminate them entirely, but the result is typically satisfying and repeatable every 4 to 6 months.",
      },
      {
        question: "What is the best treatment for chest wrinkles?",
        answer:
          "The décolletage responds well to Clarity II laser for pigmentation and texture, and microneedling for fine lines and collagen stimulation. Most clients see improvement after 2 to 3 sessions.",
      },
    ],
  },
  {
    slug: "lip-flip-dallas",
    title: "Lip Flip",
    summary: "A small amount of Botox relaxes the upper lip muscle so the lip rolls slightly outward, adding subtle definition without adding volume.",
    intro: "The lip flip uses a precise placement of neuromodulator along the upper lip border to gently evert the lip edge. It is one of our most conservative options for clients who want a natural enhancement without committing to filler. Results typically last 6 to 8 weeks and pair well with a conservative lip filler approach.",
    metaTitle: "Lip Flip Dallas TX | Natural Upper Lip Definition | Summer House Medspa",
    metaDescription: "Subtle upper lip definition with Botox at Summer House Medspa in Dallas TX. Conservative treatment, natural results. Call 214-307-1877.",
    problems: [
      "Upper lip that appears thin or disappears when smiling",
      "Visible lip lines that make the lip border less defined",
      "Wanting a more balanced lip without adding filler volume",
      "Gummy appearance where the upper lip curls inward at rest",
    ],
    signs: [
      "You want a subtle enhancement, not a dramatic size increase",
      "Your upper lip rolls inward slightly and loses definition when you smile",
      "You are new to lip treatments and want to start conservatively",
      "You are considering lip filler and want to preview what a fuller lip border looks like",
    ],
    faq: [
      {
        question: "What is the difference between a lip flip and lip filler?",
        answer:
          "A lip flip uses Botox to relax the muscle around the upper lip so the lip edge rolls outward, giving the appearance of more lip without adding volume. Lip filler adds actual volume and definition using hyaluronic acid. The lip flip is subtler and temporary — it typically lasts 6 to 8 weeks — while filler results last 9 to 12 months or longer.",
      },
      {
        question: "Will a lip flip look natural?",
        answer:
          "When done conservatively, yes. We use a small, precise amount of neuromodulator along the upper lip border. The goal is to reveal more of the lip you already have, not to create an exaggerated look. We walk through your expected outcome at consultation so you know exactly what to expect.",
      },
    ],
  },
  {
    slug: "lip-filler-dallas",
    title: "Lip Filler",
    summary: "Hyaluronic acid filler adds volume, definition, and symmetry to the lips with results that look and feel natural.",
    intro: "Lip filler is one of the most requested treatments at Summer House Medspa. We use premium hyaluronic acid filler to add volume, refine the lip border, and correct asymmetry. Our approach is conservative — we build gradually so results integrate naturally with your face rather than appearing overdone.",
    metaTitle: "Lip Filler Dallas TX | Natural Volume & Definition | Summer House Medspa",
    metaDescription: "Natural-looking lip filler in Dallas TX at Summer House Medspa. Conservative approach, premium HA filler. Call 214-307-1877.",
    problems: [
      "Lips that have lost volume with age and appear thinner than before",
      "Asymmetry between the upper and lower lip or left and right sides",
      "Undefined lip border that blurs lipstick and loses structure",
      "Vertical lip lines that create a feathering effect around the mouth",
    ],
    signs: [
      "You want more volume or definition without an overdone appearance",
      "Your lip shape is naturally thin or has changed over time",
      "You have noticeable asymmetry you would like to soften",
      "You are willing to build gradually across two or more appointments",
    ],
    faq: [
      {
        question: "How long does lip filler last?",
        answer:
          "Most clients see results lasting 9 to 12 months, though this varies based on the filler product used, the amount placed, and how quickly your body metabolizes it. Active metabolisms and very expressive lips may see shorter duration. We recommend a maintenance appointment before the filler is fully gone to preserve your results.",
      },
      {
        question: "Is lip filler painful?",
        answer:
          "Lips are a sensitive area, but we use topical numbing cream prior to treatment and the filler itself contains lidocaine, which further reduces discomfort during injection. Most clients describe the experience as mild pressure and occasional brief stinging. The appointment typically takes 30 minutes or less.",
      },
    ],
  },
  {
    slug: "cheek-filler-dallas",
    title: "Cheek Filler",
    summary: "Strategic filler placement restores midface volume, lifts the cheek contour, and softens hollowing that develops with age.",
    intro: "Volume loss in the midface is one of the earliest visible signs of aging, and cheek filler is one of the most effective ways to address it. We use hyaluronic acid or Radiesse placed along the cheek bone and lateral face to restore structure and create a natural lift that also softens under-eye hollowing and nasolabial folds.",
    metaTitle: "Cheek Filler Dallas TX | Midface Volume Restoration | Summer House Medspa",
    metaDescription: "Restore midface volume and cheek contour with filler at Summer House Medspa, Dallas TX. Natural-looking results. Call 214-307-1877.",
    problems: [
      "Flat or hollow midface that has changed over the past several years",
      "Cheeks that look deflated in photographs even with makeup",
      "Nasolabial folds that have deepened as cheek volume has dropped",
      "Under-eye hollowing that is partly related to loss of cheek support",
    ],
    signs: [
      "You have noticed your midface flattening or hollowing in your 30s, 40s, or beyond",
      "Photos show a tired or drawn appearance even when you feel rested",
      "You want a subtle structural improvement rather than dramatic augmentation",
      "Your provider has noted significant midface volume loss at consultation",
    ],
    faq: [
      {
        question: "Will cheek filler make me look puffy or unnatural?",
        answer:
          "Overfilling is the most common cause of unnatural results. We use a conservative, layered approach and place filler along natural anatomical structures rather than simply adding bulk. The goal is to restore what was there, not to create new contour. We review photos with you at consultation so expectations are clear.",
      },
      {
        question: "How much filler is typically needed for the cheeks?",
        answer:
          "Most clients need 1 to 2 syringes per side for meaningful improvement, though this depends on the degree of volume loss. We often recommend starting with a smaller amount and adding at a follow-up visit after you have seen how the initial placement settles. Results typically last 12 to 18 months.",
      },
    ],
  },
  {
    slug: "under-eye-filler-dallas",
    title: "Under-Eye / Tear Trough Filler",
    summary: "Filler placed in the tear trough reduces hollow shadowing under the eyes for a more rested appearance.",
    intro: "The tear trough is the depression that runs from the inner corner of the eye toward the cheek. When this area hollows, it creates a shadow that reads as chronic fatigue regardless of how much sleep you get. Tear trough filler is a precise treatment that requires careful technique — we use a conservative amount of soft hyaluronic acid filler to reduce shadowing without creating puffiness.",
    metaTitle: "Under-Eye Filler Dallas TX | Tear Trough Treatment | Summer House Medspa",
    metaDescription: "Reduce under-eye hollowing and dark shadows with tear trough filler at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Dark circles or shadowing under the eyes that persist despite adequate sleep",
      "Hollow depression at the inner corner of the eye that creates a sunken look",
      "Tired appearance that does not reflect how rested you actually feel",
      "Genetics-related under-eye hollowing that has been present since early adulthood",
    ],
    signs: [
      "The shadow under your eye is caused by structural hollowing rather than pigmentation",
      "You have adequate cheek support but a distinct indentation in the tear trough",
      "You have not had previous filler in this area that may have migrated",
      "You have realistic expectations — tear trough filler softens shadows, it does not eliminate them entirely",
    ],
    faq: [
      {
        question: "Is tear trough filler safe?",
        answer:
          "Tear trough filler requires precise technique because the under-eye area has delicate anatomy and limited margin for error. We use a soft, low-G-prime hyaluronic acid filler that integrates naturally with the tissue and is reversible with hyaluronidase if needed. A thorough consultation is required before this treatment to assess your anatomy and confirm you are a good candidate.",
      },
      {
        question: "How long does under-eye filler last?",
        answer:
          "Tear trough filler often lasts longer than lip or cheek filler because the area moves less. Many clients see results lasting 12 to 18 months or longer. Because hyaluronic acid is hydrophilic, some clients notice very gradual fluid accumulation over time, which is one reason we start conservatively and assess at follow-up.",
      },
    ],
  },
  {
    slug: "nasolabial-filler-dallas",
    title: "Nasolabial Fold Filler",
    summary: "Filler placed along the nasolabial folds softens the lines that run from the nose to the corners of the mouth.",
    intro: "Nasolabial folds — commonly called smile lines — deepen over time as midface volume drops and skin loses elasticity. Filler placed strategically in this area softens the fold and restores a smoother transition between the cheek and the mouth. We often combine this with midface filler for the most natural result.",
    metaTitle: "Nasolabial Fold Filler Dallas TX | Smile Line Treatment | Summer House Medspa",
    metaDescription: "Soften deep smile lines with filler at Summer House Medspa in Dallas TX. Natural, balanced results. Call 214-307-1877.",
    problems: [
      "Deep lines running from the nose to the corners of the mouth",
      "Folds that are visible at rest and create a stern or aged appearance",
      "Asymmetry in the depth of folds on left versus right side",
      "Lines that have progressed noticeably over the past 5 to 10 years",
    ],
    signs: [
      "Your nasolabial folds are visible and bothersome at rest, not just when smiling",
      "Midface volume loss is contributing to the depth of the fold",
      "You want softening, not complete elimination, which is more natural",
      "You have not had significant filler in this area that may need to be dissolved first",
    ],
    faq: [
      {
        question: "Should I treat the nasolabial folds directly or address the midface first?",
        answer:
          "Often both. The nasolabial fold deepens partly because cheek volume drops, allowing skin to fold downward. Restoring midface volume lifts the fold from above, which may reduce how much direct fold filler you need. We assess your full facial anatomy at consultation and recommend the most efficient approach.",
      },
      {
        question: "How long does nasolabial fold filler last?",
        answer:
          "Typically 9 to 12 months, though results in this area can last longer than in more mobile areas like the lips. The amount of filler placed and the product chosen affect duration. We recommend a maintenance appointment as you notice the fold returning, rather than waiting until it is fully back.",
      },
    ],
  },
  {
    slug: "marionette-lines-dallas",
    title: "Marionette Lines Treatment",
    summary: "Filler and strategic neuromodulator placement address the lines and jowl droop that create a downturned mouth appearance.",
    intro: "Marionette lines run from the corners of the mouth downward toward the chin. They are named for the puppet joints they resemble and tend to create a permanently downturned or stern expression. We address marionette lines with filler to restore volume in the trough, sometimes combined with neuromodulator in the depressor anguli oris muscle to gently lift the corner of the mouth.",
    metaTitle: "Marionette Lines Dallas TX | Corner of Mouth Filler | Summer House Medspa",
    metaDescription: "Soften marionette lines and downturned mouth corners with filler at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Lines running downward from the corners of the mouth creating a stern resting expression",
      "Downturned mouth corners that look sad or disapproving when relaxed",
      "Jowl formation contributing to the depth of the marionette line",
      "Progressive worsening of the lower face over the past several years",
    ],
    signs: [
      "You have visible marionette lines at rest that bother you in photographs",
      "The corners of your mouth turn downward at rest despite a neutral expression",
      "You are not a surgical candidate or prefer to avoid surgery for now",
      "You have realistic expectations about what filler and neuromodulator can achieve",
    ],
    faq: [
      {
        question: "Can filler alone fix marionette lines?",
        answer:
          "Filler addresses the volume deficit in the trough and softens the line itself. For corner of mouth droop, we often combine filler with a small amount of Botox in the depressor anguli oris, the muscle that pulls the mouth corners down. This combination provides better and more balanced results than filler alone in many cases.",
      },
      {
        question: "How many syringes are needed for marionette lines?",
        answer:
          "Typically 1 to 2 syringes depending on the depth of the lines and whether we are also addressing the lower face more broadly. We assess your full lower face at consultation because jowling and cheek descent often contribute to marionette depth and may need to be part of the treatment plan.",
      },
    ],
  },
  {
    slug: "chin-filler-dallas",
    title: "Chin Filler and Augmentation",
    summary: "Filler placed in the chin improves projection, sharpens definition, and creates better facial proportion without surgery.",
    intro: "Chin projection and shape play a significant role in overall facial balance. A recessed or short chin can make the nose appear larger, the neck less defined, and the lower face appear weak. Chin filler with hyaluronic acid or Radiesse adds projection, length, or definition depending on your anatomy, with results that last 12 to 24 months.",
    metaTitle: "Chin Filler Dallas TX | Non-Surgical Chin Augmentation | Summer House Medspa",
    metaDescription: "Improve chin projection and facial balance with filler at Summer House Medspa in Dallas TX. No surgery required. Call 214-307-1877.",
    problems: [
      "Recessed chin that throws off facial proportion in profile view",
      "Weak chin definition that makes the lower face appear soft or undefined",
      "Chin that appears to shorten with age as bone density changes",
      "Desire for better facial balance without surgical implants",
    ],
    signs: [
      "Your profile shows a recessed or underprojected chin",
      "Your chin appears short vertically, reducing lower face definition",
      "You want a non-surgical option before considering implants",
      "Facial balancing at consultation confirms chin is contributing to proportion imbalance",
    ],
    faq: [
      {
        question: "Is chin filler painful?",
        answer:
          "The chin is a moderately sensitive area. We apply topical numbing beforehand and the filler itself contains lidocaine. Most clients describe the experience as mild pressure and brief stinging that resolves quickly. The appointment takes about 20 to 30 minutes total.",
      },
      {
        question: "How long does chin filler last?",
        answer:
          "Chin filler tends to last longer than filler in more mobile areas. Hyaluronic acid in the chin typically lasts 12 to 18 months, and Radiesse can last up to 18 to 24 months. Because the chin has less movement than the lips, the product is metabolized more slowly.",
      },
    ],
  },
  {
    slug: "hand-rejuvenation-dallas",
    title: "Hand Rejuvenation",
    summary: "Filler restores volume to the backs of the hands, reducing the skeletal appearance caused by age-related volume loss.",
    intro: "The hands are often among the first places to show visible aging — tendons and veins become more prominent as the skin thins and subcutaneous fat is lost. Hand rejuvenation with Radiesse or hyaluronic acid filler restores a softer, fuller appearance to the back of the hand. Laser treatments can also address age spots and pigmentation in the same visit.",
    metaTitle: "Hand Rejuvenation Dallas TX | Hand Filler & Laser | Summer House Medspa",
    metaDescription: "Restore volume and reduce age spots on the hands at Summer House Medspa in Dallas TX. Filler and laser options available. Call 214-307-1877.",
    problems: [
      "Prominent tendons and veins on the back of the hand that look skeletal",
      "Thin, crepey skin on the hands that has developed with age",
      "Age spots and sun damage from years of Texas sun exposure",
      "Hands that look significantly older than the rest of your appearance",
    ],
    signs: [
      "Volume loss on the back of your hands is noticeable and bothers you",
      "You have addressed facial aging and want your hands to be consistent",
      "You have age spots or uneven pigmentation on the hands",
      "You are looking for a non-surgical option to soften the skeletal appearance",
    ],
    faq: [
      {
        question: "What filler works best for hands?",
        answer:
          "Radiesse is often preferred for hand rejuvenation because it is thicker, provides good volumization, and also stimulates collagen production over time. Hyaluronic acid filler is also used and has the advantage of being reversible. We assess your hands at consultation and recommend the most appropriate product for your goals.",
      },
      {
        question: "How long does hand filler last?",
        answer:
          "Radiesse in the hands typically lasts 12 to 18 months. Hyaluronic acid filler lasts approximately 9 to 12 months in this area. We can also treat pigmentation with the Clarity II laser at the same or a separate visit to address age spots alongside volume.",
      },
    ],
  },
  {
    slug: "forehead-lines-botox-dallas",
    title: "Forehead Lines with Botox",
    summary: "Botox placed in the forehead smooths horizontal lines while preserving enough movement for natural expression.",
    intro: "Horizontal forehead lines develop from repeated brow elevation over years. Botox relaxes the frontalis muscle to soften these lines, but the dose must be carefully calibrated — too much causes brow heaviness, too little leaves lines unchanged. We use a conservative, balanced approach that smooths the forehead while keeping your expression natural.",
    metaTitle: "Forehead Lines Botox Dallas TX | Natural Results | Summer House Medspa",
    metaDescription: "Smooth forehead lines with Botox at Summer House Medspa in Dallas TX. Conservative dosing, natural expression preserved. Call 214-307-1877.",
    problems: [
      "Horizontal lines across the forehead visible at rest or when animated",
      "Deep creases that have formed from decades of brow raising",
      "Forehead lines that appear in every photograph regardless of expression",
      "Lines that give a worried or tense appearance even when relaxed",
    ],
    signs: [
      "You have noticeable horizontal forehead lines at rest or with mild expression",
      "You want softer lines without a frozen or expressionless forehead",
      "You have not had brow heaviness with previous Botox treatments",
      "Your brow position is naturally at or above the orbital rim, giving room for safe treatment",
    ],
    faq: [
      {
        question: "Will Botox for forehead lines make my brows drop?",
        answer:
          "Brow heaviness is the most common side effect of forehead Botox, and it occurs when too much product is placed or when placement is too low on the forehead. We assess your brow position, how much the frontalis is compensating for other muscles, and your history with neuromodulators before dosing. A conservative first treatment is always preferable.",
      },
      {
        question: "How many units of Botox are needed for forehead lines?",
        answer:
          "Forehead treatment typically requires 8 to 20 units depending on the strength of your frontalis muscle, the depth of the lines, and how much movement you want preserved. We treat the forehead in coordination with the glabella (11 lines) for balanced results. We recommend starting with a moderate dose and adjusting at your two-week follow-up.",
      },
    ],
  },
  {
    slug: "crows-feet-botox-dallas",
    title: "Crow's Feet Treatment",
    summary: "Botox relaxes the lateral eye muscle to soften the fan-shaped lines that form at the outer corners of the eyes.",
    intro: "Crow's feet are among the most common reasons clients start Botox. The orbicularis oculi muscle contracts with every smile and squint, creating radiating lines at the outer corners of the eyes over time. A small amount of Botox placed precisely in this area softens these lines significantly while keeping your smile natural.",
    metaTitle: "Crow's Feet Botox Dallas TX | Eye Line Treatment | Summer House Medspa",
    metaDescription: "Soften crow's feet and eye corner lines with Botox at Summer House Medspa in Dallas TX. Natural smile preserved. Call 214-307-1877.",
    problems: [
      "Fan-shaped lines at the outer corners of the eyes visible when smiling or squinting",
      "Lines that have become visible at rest, not just with expression",
      "Sun damage from years of squinting outdoors in Texas that has deepened lines",
      "Lines that are more prominent on one side due to habitual squinting",
    ],
    signs: [
      "You have visible crow's feet when smiling or at rest that you want softened",
      "You want a natural result that preserves your smile expression",
      "This is your first or an ongoing maintenance treatment for this area",
      "You have not had any eye or eyelid procedures that might affect placement",
    ],
    faq: [
      {
        question: "How long does Botox for crow's feet last?",
        answer:
          "Most clients see crow's feet results lasting 3 to 4 months. The lateral eye area tends to metabolize Botox slightly faster than the glabella because the muscle is thinner and more active. Consistent maintenance prevents new static lines from forming and often allows the same or lower doses to maintain results over time.",
      },
      {
        question: "Will treating crow's feet affect my smile?",
        answer:
          "When placed correctly, crow's feet Botox does not change how you smile. The injection targets the lateral portion of the orbicularis oculi muscle, which is responsible for lines at the corner. The muscle fibers that create your full smile expression are preserved. We place conservatively to ensure your smile stays natural.",
      },
    ],
  },
  {
    slug: "bunny-lines-botox-dallas",
    title: "Bunny Lines with Botox",
    summary: "Botox softens the diagonal lines on the sides of the nose that appear when scrunching or smiling.",
    intro: "Bunny lines are the small diagonal wrinkles that appear on either side of the nose when you scrunch or smile. They are a natural expression line that some clients find bothersome or feel draws attention to the nose. A small amount of Botox placed in the nasalis muscle softens these lines with minimal treatment and no downtime.",
    metaTitle: "Bunny Lines Botox Dallas TX | Nose Scrunch Lines | Summer House Medspa",
    metaDescription: "Smooth bunny lines on the nose with Botox at Summer House Medspa in Dallas TX. Quick, precise treatment. Call 214-307-1877.",
    problems: [
      "Diagonal lines on the sides of the nose that appear with smiling or scrunching",
      "Bunny lines that have become more prominent after Botox elsewhere redirected muscle activity",
      "Lines that draw attention to the nose area in photographs",
      "Persistent lines on the nose that are visible even at rest",
    ],
    signs: [
      "You have visible bunny lines when you scrunch your nose or smile broadly",
      "You have had glabella or forehead Botox and noticed more activity shifting to the nose",
      "You want a subtle refinement to complement other neuromodulator treatments",
      "The lines are dynamic (movement-related) rather than deeply etched static lines",
    ],
    faq: [
      {
        question: "Is bunny line treatment separate from my regular Botox appointment?",
        answer:
          "Bunny line treatment can be done at the same appointment as your regular Botox visit. It requires only a small number of units — typically 4 to 6 total — and takes just a few minutes. Many clients add it as a refinement after noticing increased nasal activity following their standard neuromodulator treatment.",
      },
      {
        question: "Are there any risks specific to bunny line Botox?",
        answer:
          "The main consideration is lip movement. The nasalis muscle sits close to the muscles that move the upper lip, so placement must be precise to avoid affecting the smile or lip elevation. We use careful technique and conservative dosing to avoid any effect on adjacent muscles.",
      },
    ],
  },
  {
    slug: "lip-lines-botox-dallas",
    title: "Lip Lines and Smoker's Lines",
    summary: "Botox and filler address the fine vertical lines above the upper lip that cause lipstick bleeding and an aged appearance.",
    intro: "Vertical lines above and around the lips develop from repeated muscle movement, sun exposure, and collagen loss over time. They are not exclusive to smokers — anyone who purses their lips regularly can develop them. We address these lines with a combination of neuromodulator to reduce future movement and filler to plump and smooth existing lines.",
    metaTitle: "Lip Lines Botox Dallas TX | Smoker's Lines Treatment | Summer House Medspa",
    metaDescription: "Treat vertical lip lines and smoker's lines at Summer House Medspa in Dallas TX. Botox and filler combination. Call 214-307-1877.",
    problems: [
      "Fine vertical lines above the upper lip that cause lipstick to bleed",
      "Lines around the mouth that create an aged or pursed appearance at rest",
      "Lines that have deepened from sun exposure and decades of muscle movement",
      "Inability to wear bold lip colors due to feathering",
    ],
    signs: [
      "You have visible lip lines above the upper lip at rest or with expression",
      "Your lipstick bleeds into fine lines within hours of application",
      "You want softer lines without a frozen or unnatural upper lip",
      "You are open to a combination approach using both neuromodulator and filler",
    ],
    faq: [
      {
        question: "How do you treat lip lines — with Botox or filler?",
        answer:
          "Usually both, used together. A small amount of Botox in the orbicularis oris muscle reduces the repetitive contraction that creates new lines. Hyaluronic acid filler placed superficially fills existing lines and smooths the surface. Laser resurfacing or microneedling can also improve skin texture in this area over a series of treatments.",
      },
      {
        question: "Will Botox around the lips affect how I speak or eat?",
        answer:
          "When dosed conservatively, no. We use minimal units in this area — typically 4 to 6 — precisely placed to reduce line formation without impairing lip function. We avoid over-treatment that would affect articulation, drinking through a straw, or normal eating. First-time clients start with a lower dose that we can adjust at follow-up.",
      },
    ],
  },
  {
    slug: "gummy-smile-dallas",
    title: "Gummy Smile Correction",
    summary: "A small amount of Botox reduces how much the upper lip elevates when smiling, lowering the amount of gum visible.",
    intro: "A gummy smile occurs when the muscles that elevate the upper lip contract too strongly, exposing more gum tissue than the client is comfortable with. Botox placed in the levator labii superioris alaeque nasi and adjacent muscles gently reduces lip elevation during smiling. Results are subtle and require precise dosing to avoid affecting the smile itself.",
    metaTitle: "Gummy Smile Dallas TX | Botox for Gum Line | Summer House Medspa",
    metaDescription: "Reduce gum show when smiling with precise Botox placement at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Excessive gum tissue visible when smiling that causes self-consciousness",
      "Upper lip that elevates too high, exposing the gum line in photos",
      "Asymmetric smile where one side shows more gum than the other",
      "Avoidance of open-mouth smiling in photographs due to gum visibility",
    ],
    signs: [
      "More than 3 to 4 mm of gum tissue is visible when you smile naturally",
      "The gum show is caused by hyperactive lip elevator muscles rather than bone structure",
      "You want a subtle reduction, not elimination of your natural smile appearance",
      "You have consulted with your dentist and orthodontic causes have been ruled out",
    ],
    faq: [
      {
        question: "How effective is Botox for gummy smile?",
        answer:
          "When the cause is hyperactive upper lip muscles, Botox is very effective. It reduces how high the lip elevates during smiling, which decreases gum visibility. Results are not permanent — they typically last 3 to 4 months — but many clients find consistent maintenance very manageable for an issue that has long bothered them.",
      },
      {
        question: "Can gummy smile Botox change how my smile looks?",
        answer:
          "Dosing must be precise. Too much product or incorrect placement can flatten the smile or create asymmetry. We take an anatomical approach, identifying the specific muscles contributing to your lip elevation before injecting. First treatments use a conservative dose that we can build on once we see how your muscles respond.",
      },
    ],
  },
  {
    slug: "facial-balancing-dallas",
    title: "Facial Balancing",
    summary: "A comprehensive assessment and treatment plan using filler and neuromodulator to improve overall facial proportion and harmony.",
    intro: "Facial balancing is not a single treatment — it is a strategic approach to assessing the face as a whole and identifying which areas, when treated, will create the most natural improvement in proportion. We evaluate ratios between the forehead, midface, and lower face, the relationship between the nose and chin, and whether volume, movement, or structure is the primary issue to address.",
    metaTitle: "Facial Balancing Dallas TX | Full Face Assessment | Summer House Medspa",
    metaDescription: "Comprehensive facial balancing with filler and Botox at Summer House Medspa in Dallas TX. Proportion-focused, natural results. Call 214-307-1877.",
    problems: [
      "Facial features that feel disproportionate or unbalanced overall",
      "Treating individual areas without seeing improvement in the overall face",
      "Asymmetry between the left and right sides that affects confidence",
      "Feeling like something is off with the face but being unable to identify exactly what",
    ],
    signs: [
      "You have multiple areas of concern and want a coordinated plan rather than piecemeal treatments",
      "You want to understand which treatments would give the most impactful overall improvement",
      "You prefer a consultation-first approach before committing to specific treatments",
      "You have had treatments elsewhere and feel the results did not improve your overall balance",
    ],
    faq: [
      {
        question: "How is a facial balancing consultation different from a regular appointment?",
        answer:
          "A facial balancing consultation involves a full facial assessment rather than focusing on a single concern. We evaluate facial thirds, the relationship between features, bone structure, volume distribution, and dynamic movement. From this, we build a prioritized treatment plan that may span one appointment or several, depending on the scope and your budget.",
      },
      {
        question: "Do I have to do everything in the plan at once?",
        answer:
          "No. A facial balancing plan is a roadmap, not a commitment. We prioritize the treatments that will have the most visible impact and you decide how and when to proceed. Many clients start with one or two areas and add others over subsequent visits as they see results and build confidence in the process.",
      },
    ],
  },
  {
    slug: "full-face-refresh-dallas",
    title: "Full Face Refresh",
    summary: "A combination treatment visit addressing multiple areas of the face with filler and neuromodulator in a single appointment.",
    intro: "The full face refresh is designed for clients who want to address several areas in one efficient visit. We combine neuromodulator for dynamic lines with filler for volume and structural support, treating the upper, mid, and lower face in a coordinated session. Results are comprehensive and cohesive because all areas are addressed together rather than piecemeal over multiple months.",
    metaTitle: "Full Face Refresh Dallas TX | Combination Treatment | Summer House Medspa",
    metaDescription: "Address multiple face areas with filler and Botox in one visit at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Multiple areas of concern that feel inefficient to address one at a time",
      "Previous treatments that addressed individual areas without improving the whole face",
      "Scheduled event or occasion within weeks that motivates a more comprehensive approach",
      "A significant birthday or life event that has prompted reflection on overall appearance",
    ],
    signs: [
      "You have 3 or more distinct treatment areas you want addressed",
      "You prefer to consolidate visits and limit time away from work or family",
      "You have a clear consultation beforehand to plan the treatment session",
      "You are an established patient with a known response to previous treatments",
    ],
    faq: [
      {
        question: "Is it safe to get filler and Botox in multiple areas on the same day?",
        answer:
          "Yes, for most clients. Combining treatments in a single visit is common and does not increase safety risk when appropriate. It does mean more temporary swelling and bruising than a single-area treatment, and we prepare you for this. We recommend the full face refresh for clients who have had previous treatments so we have a baseline for how your face responds.",
      },
      {
        question: "How much downtime should I plan for after a full face refresh?",
        answer:
          "Most clients take 2 to 5 days before feeling fully comfortable in public, though many return to normal activities the next day with makeup. Swelling is the most common side effect and peaks at 24 to 48 hours. Bruising is possible and can last up to 10 to 14 days in some cases. We advise scheduling the appointment at least 2 weeks before any important event.",
      },
    ],
  },
  {
    slug: "microneedling-dallas",
    title: "Microneedling",
    summary: "Controlled micro-injuries stimulate the skin's natural collagen production, improving texture, pores, and fine lines over a series of treatments.",
    intro: "Microneedling uses fine needles to create microscopic channels in the skin, triggering a wound-healing response that produces new collagen and elastin. It is one of the most versatile skin treatments available, addressing texture, enlarged pores, fine lines, acne scars, and overall skin quality. Results improve progressively with each session and continue developing for several weeks afterward.",
    metaTitle: "Microneedling Dallas TX | Collagen Induction Therapy | Summer House Medspa",
    metaDescription: "Improve skin texture, pores, and fine lines with microneedling at Summer House Medspa in Dallas TX. Series plans available. Call 214-307-1877.",
    problems: [
      "Rough or uneven skin texture that does not respond to topical products alone",
      "Enlarged pores that are visible across the nose and cheeks",
      "Fine lines and early wrinkles that have developed with age or sun exposure",
      "Dull, flat skin quality that lacks the tone and radiance it once had",
    ],
    signs: [
      "You have textural concerns — rough, bumpy, or uneven skin surface",
      "You want to improve skin quality proactively with minimal downtime",
      "You are willing to commit to a series of 3 to 6 treatments for best results",
      "You do not have active acne, open wounds, or certain skin conditions that would contraindicate treatment",
    ],
    faq: [
      {
        question: "How many microneedling sessions are needed to see results?",
        answer:
          "Most clients see initial improvement after 1 to 2 sessions, with the best results developing after a series of 3 to 6 treatments spaced 4 to 6 weeks apart. Collagen remodeling continues for several months after each session, so the skin keeps improving even between appointments. We recommend a maintenance session every 3 to 6 months after the initial series.",
      },
      {
        question: "What is the downtime after microneedling?",
        answer:
          "Expect 24 to 48 hours of redness similar to a mild sunburn. Some clients experience minor swelling or a sandpaper-like skin texture for 2 to 3 days as the skin heals. Most clients return to normal activities the next day. We recommend avoiding active skincare ingredients like retinol and vitamin C for 24 to 48 hours after treatment and applying SPF diligently.",
      },
    ],
  },
  {
    slug: "chemical-peel-dallas",
    title: "Chemical Peels",
    summary: "Customized chemical solutions exfoliate the outer skin layers to improve tone, texture, pigmentation, and surface clarity.",
    intro: "Chemical peels use carefully selected acids to accelerate skin cell turnover, removing the outermost layers of dull or damaged skin and revealing fresher skin beneath. We offer a range of peel depths from light refreshers with no downtime to medium-depth peels that require several days of peeling. The right peel depends on your skin concerns, tone, and lifestyle.",
    metaTitle: "Chemical Peels Dallas TX | Skin Tone & Texture | Summer House Medspa",
    metaDescription: "Customized chemical peels for pigmentation, texture, and clarity at Summer House Medspa in Dallas TX. All skin tones welcome. Call 214-307-1877.",
    problems: [
      "Uneven skin tone with areas of hyperpigmentation or post-inflammatory marks",
      "Dull, lackluster complexion that does not respond to at-home exfoliation",
      "Fine surface lines and early textural aging from sun exposure",
      "Active acne and congested pores that need a stronger intervention than topicals alone",
    ],
    signs: [
      "You want improved skin tone and texture without laser treatment",
      "Your skin concerns are primarily in the surface layers — pigmentation, dullness, minor texture",
      "You can plan around 3 to 7 days of visible peeling if choosing a medium-depth peel",
      "You wear SPF daily and can protect your skin carefully during the healing period",
    ],
    faq: [
      {
        question: "What types of chemical peels do you offer?",
        answer:
          "We offer light peels using salicylic or lactic acid for a lunchtime refresh with minimal downtime, and medium-depth options using trichloroacetic acid (TCA) or combination formulas for more significant results. The right peel depends on your skin tone, concerns, and how much downtime you can accommodate. We assess your skin at consultation before recommending a peel type.",
      },
      {
        question: "Are chemical peels safe for darker skin tones?",
        answer:
          "Yes, when selected carefully. Darker skin tones are more susceptible to post-inflammatory hyperpigmentation if the peel is too aggressive or if pre-treatment preparation is skipped. We use peel formulations appropriate for your Fitzpatrick skin type and often recommend a pre-treatment protocol to prime the skin and reduce the risk of pigmentation complications.",
      },
    ],
  },
  {
    slug: "hydrafacial-dallas",
    title: "HydraFacial",
    summary: "A multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin in one appointment with no downtime.",
    intro: "HydraFacial is a medical-grade facial that uses a patented vortex technology to simultaneously cleanse, exfoliate, extract impurities, and infuse the skin with hydrating serums. It is suitable for virtually all skin types and concerns, requires no downtime, and produces a visible improvement in skin clarity and glow immediately after the appointment.",
    metaTitle: "HydraFacial Dallas TX | Glow & Hydration | Summer House Medspa",
    metaDescription: "HydraFacial for instant clarity, hydration, and glow at Summer House Medspa in Dallas TX. No downtime. Call 214-307-1877.",
    problems: [
      "Congested pores and blackheads that are difficult to address at home",
      "Dry, dehydrated skin that looks dull and feels rough despite moisturizing",
      "Skin that needs a reset before an event or after travel or stress",
      "Mild hyperpigmentation and uneven tone on the surface of the skin",
    ],
    signs: [
      "You want a skin-improvement treatment with zero downtime",
      "Your skin feels congested, dry, or dull and needs a thorough cleanse and hydration boost",
      "You have a special event within days and want your skin to look its best",
      "You want to maintain skin health between more intensive treatments like peels or laser",
    ],
    faq: [
      {
        question: "How often should I get a HydraFacial?",
        answer:
          "Many clients get a HydraFacial monthly as a skin maintenance routine. The treatment removes accumulated congestion and replenishes hydration on a consistent cycle. Some clients use it quarterly as a seasonal refresh, or before special events. There is no minimum interval — HydraFacial can be done as frequently as every 2 to 4 weeks.",
      },
      {
        question: "Can a HydraFacial be combined with other treatments?",
        answer:
          "Yes. HydraFacial pairs well with LED light therapy and booster serums that can be added to address specific concerns like brightening, anti-aging, or acne. It is also commonly done as a preparatory treatment before more intensive procedures. We do not recommend combining HydraFacial on the same day as laser or microneedling, as the skin needs to be intact for those treatments.",
      },
    ],
  },
  {
    slug: "skin-tightening-dallas",
    title: "Skin Tightening (RF / Morpheus8)",
    summary: "Radiofrequency energy delivered into the deeper skin layers stimulates collagen and tightens lax skin without surgery.",
    intro: "Radiofrequency skin tightening, including treatments like Morpheus8, delivers controlled thermal energy into the dermis and subcutaneous tissue to contract existing collagen fibers and stimulate new collagen production. Results develop gradually over 2 to 3 months and improve skin laxity, texture, and definition in areas like the lower face, neck, and body.",
    metaTitle: "Skin Tightening Dallas TX | RF Morpheus8 | Summer House Medspa",
    metaDescription: "Non-surgical skin tightening with RF and Morpheus8 at Summer House Medspa in Dallas TX. Gradual, natural results. Call 214-307-1877.",
    problems: [
      "Mild to moderate skin laxity in the lower face, jowl area, or neck",
      "Crepey skin texture that has developed with age or significant weight changes",
      "Body skin laxity in the abdomen or arms that does not respond to exercise",
      "Early jowling or lower face loosening that is not yet severe enough for surgery",
    ],
    signs: [
      "You have mild to moderate laxity and are not ready for or interested in surgical options",
      "You want gradual improvement that develops over weeks to months",
      "You can commit to a series of 1 to 3 treatments and understand results are not immediate",
      "You have realistic expectations about the degree of tightening achievable non-surgically",
    ],
    faq: [
      {
        question: "How long does RF skin tightening last?",
        answer:
          "Results from a proper treatment series typically last 1 to 2 years, though this depends on the individual's skin, the severity of laxity treated, and ongoing lifestyle factors like sun exposure and weight stability. Annual maintenance treatments help preserve and extend results. Collagen remodeling continues for up to 6 months after the final session.",
      },
      {
        question: "Is there downtime with Morpheus8 or RF skin tightening?",
        answer:
          "Morpheus8, which combines microneedling with RF energy, typically involves 2 to 5 days of redness and swelling, with pinpoint marks from the needles that resolve within days. Surface-only RF treatments have minimal downtime — some redness and mild swelling for 24 to 48 hours. We go over recovery expectations at consultation based on which treatment and settings are appropriate for your skin.",
      },
    ],
  },
  {
    slug: "prp-facial-dallas",
    title: "PRP / PRF Facial",
    summary: "Platelet-rich plasma or fibrin derived from your own blood is applied to the skin to accelerate healing and collagen production.",
    intro: "PRP (platelet-rich plasma) and PRF (platelet-rich fibrin) facials use growth factors concentrated from your own blood to stimulate skin renewal. The concentrate is either applied topically during microneedling to enhance penetration or injected superficially for a rejuvenating effect. Because the treatment uses your own biology, there is no risk of allergic reaction and the regenerative response is natural.",
    metaTitle: "PRP Facial Dallas TX | Platelet-Rich Plasma Skin | Summer House Medspa",
    metaDescription: "PRP and PRF facial treatments using your own growth factors at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Dull, fatigued skin that lacks the radiance and tone it once had",
      "Fine lines and early texture changes that you want to address with a biologic approach",
      "Skin that is slow to heal or recover after other treatments",
      "Preference for natural, growth-factor-based treatments without synthetic additives",
    ],
    signs: [
      "You are looking for a natural, regenerative approach to skin quality",
      "You want to enhance the results of microneedling with your own growth factors",
      "You have no contraindications to blood draw or platelet therapies",
      "You want progressive, gradual improvement that builds over several weeks",
    ],
    faq: [
      {
        question: "What is the difference between PRP and PRF?",
        answer:
          "PRP (platelet-rich plasma) is spun at a higher speed, producing a liquid concentrate with a high platelet count. PRF (platelet-rich fibrin) is spun more slowly, creating a gel-like fibrin matrix that releases growth factors more slowly over time. PRF is generally considered a more advanced formulation with a sustained regenerative effect. We offer both and will recommend based on your goals.",
      },
      {
        question: "Is a PRP facial painful?",
        answer:
          "When combined with microneedling, the discomfort is similar to standard microneedling — manageable with topical numbing cream applied beforehand. The blood draw is a brief pinch. If PRP or PRF is injected rather than applied topically, numbing is also used. Most clients find the experience tolerable and well worth the regenerative benefit.",
      },
    ],
  },
  {
    slug: "eyelid-rejuvenation-dallas",
    title: "Non-Surgical Eyelid Rejuvenation",
    summary: "A combination of neuromodulator, filler, and skin tightening addresses hooding, hollowing, and crepiness around the eyes without surgery.",
    intro: "The upper and lower eyelid area is one of the most noticed features of the face and one of the most delicate to treat. Non-surgical eyelid rejuvenation uses a combination of carefully placed Botox to lift the brow and open the eye, under-eye filler to reduce hollowing, and RF or laser treatments to tighten crepey eyelid skin. The approach is conservative and anatomy-specific.",
    metaTitle: "Non-Surgical Eyelid Rejuvenation Dallas TX | Summer House Medspa",
    metaDescription: "Address eyelid hooding, hollowing, and crepiness without surgery at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Upper eyelid hooding that makes eyes appear smaller or more tired",
      "Crepey lower eyelid skin that adds years to the appearance",
      "Under-eye hollowing that creates persistent shadowing",
      "Brow descent that has contributed to upper eyelid heaviness over time",
    ],
    signs: [
      "You have mild to moderate eyelid concerns that are not yet severe enough for surgery",
      "You want a conservative, combination approach assessed by an experienced provider",
      "You understand that non-surgical options have limits and set expectations accordingly",
      "You have not had previous eyelid surgery that might affect treatment planning",
    ],
    faq: [
      {
        question: "Can Botox lift a drooping eyelid?",
        answer:
          "Botox can lift the brow, which indirectly opens the upper eyelid and reduces the appearance of hooding caused by brow descent. If the hooding is primarily from excess eyelid skin (dermatochalasis), Botox has limited effect and surgical blepharoplasty may be a better long-term solution. We assess the cause of hooding at consultation to recommend the most appropriate treatment.",
      },
      {
        question: "Is the under-eye area safe to treat with filler?",
        answer:
          "Yes, with careful technique. The tear trough is a high-skill treatment area. We use soft hyaluronic acid filler, conservative volumes, and precise placement to minimize the risk of puffiness or migration. Filler in this area is fully reversible with hyaluronidase. A detailed consultation and anatomy assessment are required before any under-eye treatment.",
      },
    ],
  },
  {
    slug: "bbl-photofacial-dallas",
    title: "BBL Photofacial",
    summary: "Broadband light energy targets pigmentation, redness, and vascular irregularities to restore a clearer, more even complexion.",
    intro: "BBL (BroadBand Light) photofacial delivers precise wavelengths of light energy to address pigmentation irregularities, redness, and visible blood vessels at the skin's surface. It is particularly effective for sun damage, age spots, rosacea-related redness, and general skin tone irregularities. The Clarity II laser at Summer House Medspa allows us to target these concerns with precision.",
    metaTitle: "BBL Photofacial Dallas TX | Sun Damage & Redness | Summer House Medspa",
    metaDescription: "Clear sun spots, redness, and uneven tone with BBL photofacial using Clarity II at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Brown spots and sun damage from years of Texas sun exposure",
      "Visible redness, broken capillaries, and vascular irregularities on the face",
      "Uneven, blotchy skin tone that foundation cannot fully conceal",
      "Skin that looks older than your age due to accumulated sun damage",
    ],
    signs: [
      "You have visible brown spots, sun damage, or redness that you want addressed",
      "Your skin tone is uneven from years of outdoor exposure",
      "You can avoid direct sun exposure for several weeks after treatment",
      "You want a non-invasive treatment with minimal downtime for pigmentation correction",
    ],
    faq: [
      {
        question: "What happens to brown spots after a photofacial?",
        answer:
          "Treated pigmented lesions typically darken initially — they may look like coffee grounds on the skin surface — and then flake off over 7 to 14 days, revealing clearer skin beneath. This is a normal part of the process. Multiple sessions are often recommended for comprehensive improvement, spaced 4 to 6 weeks apart.",
      },
      {
        question: "Is BBL photofacial safe for all skin tones?",
        answer:
          "BBL photofacial is most effective and safest for lighter skin tones. For medium to darker skin tones, treatment parameters must be carefully adjusted to avoid causing hyperpigmentation rather than treating it. We assess your Fitzpatrick skin type at consultation and may recommend alternative treatments like topical protocols or different laser wavelengths if BBL is not the safest option for your skin.",
      },
    ],
  },
  {
    slug: "melasma-treatment-dallas",
    title: "Melasma Treatment",
    summary: "A targeted, multi-modal approach to managing melasma using topical protocols, chemical peels, and carefully selected laser treatments.",
    intro: "Melasma is a chronic pigmentation condition that requires a careful, consistent management strategy rather than a single treatment solution. It is triggered by UV exposure, hormonal changes, and heat, and is prone to returning after treatment without diligent maintenance. We take a comprehensive approach combining medical-grade topicals, chemical peels, and selective laser or light treatments appropriate for your skin type.",
    metaTitle: "Melasma Treatment Dallas TX | Pigmentation Management | Summer House Medspa",
    metaDescription: "Expert melasma management in Dallas TX at Summer House Medspa. Multi-modal approach for all skin tones. Call 214-307-1877.",
    problems: [
      "Dark, patchy pigmentation on the cheeks, forehead, or upper lip that worsens with sun exposure",
      "Melasma that has returned after previous treatment attempts",
      "Frustration with over-the-counter brightening products that have not produced results",
      "Melasma triggered or worsened by pregnancy, birth control, or hormonal changes",
    ],
    signs: [
      "You have a confirmed or suspected melasma diagnosis and want a structured treatment plan",
      "You are committed to daily SPF use and sun avoidance as part of your protocol",
      "You understand melasma requires ongoing management rather than a one-time cure",
      "You are not pregnant and can safely use prescription-strength topical agents if recommended",
    ],
    faq: [
      {
        question: "Can melasma be permanently cured?",
        answer:
          "Melasma is a chronic condition that can be significantly improved but is not permanently cured. Triggers — particularly UV exposure and hormonal changes — can cause it to return. Consistent SPF use, avoidance of heat and sun, and maintenance treatments are essential for long-term control. With the right protocol, many clients achieve significant lightening and maintain it successfully.",
      },
      {
        question: "Is laser treatment safe for melasma?",
        answer:
          "Laser treatment for melasma requires careful selection. Certain laser wavelengths can worsen melasma by stimulating melanocytes rather than suppressing them. We select treatment modalities specifically appropriate for melasma — typically low-fluence settings and a combined topical preparation — rather than the same approach used for sun spots or other pigmentation types.",
      },
    ],
  },
  {
    slug: "rosacea-treatment-dallas",
    title: "Rosacea Treatment",
    summary: "Laser and light-based treatments reduce the redness, flushing, and visible vessels associated with rosacea.",
    intro: "Rosacea is a chronic skin condition characterized by persistent redness, flushing, visible blood vessels, and sometimes inflammatory bumps. While it cannot be eliminated entirely, laser and light-based treatments significantly reduce visible redness and capillaries. We use the Clarity II laser to target vascular components of rosacea and work with you on a maintenance plan that keeps symptoms controlled.",
    metaTitle: "Rosacea Treatment Dallas TX | Laser Redness Reduction | Summer House Medspa",
    metaDescription: "Reduce rosacea redness and visible vessels with Clarity II laser at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Persistent facial redness that makes skin look flushed even without a trigger",
      "Visible capillaries across the nose and cheeks that cannot be concealed with makeup",
      "Frequent flushing or burning with heat, alcohol, exercise, or spicy foods",
      "Skin sensitivity and reactivity that limits what products and treatments you can use",
    ],
    signs: [
      "You have a rosacea diagnosis or consistent redness and visible vessels on the central face",
      "You want to reduce baseline redness with laser and have realistic expectations about maintenance",
      "You are committed to a gentle skincare routine and trigger avoidance between treatments",
      "You have not had recent significant sun exposure that would contraindicate laser treatment",
    ],
    faq: [
      {
        question: "How many laser sessions are needed for rosacea?",
        answer:
          "Most clients see meaningful improvement in redness and visible vessels after 2 to 4 sessions spaced 4 to 6 weeks apart. Because rosacea is chronic, new vessels can form over time. Annual or biannual maintenance sessions help sustain results. The number of sessions depends on the severity of your rosacea and how well your skin responds.",
      },
      {
        question: "Will rosacea treatment hurt?",
        answer:
          "The Clarity II laser delivers energy in rapid pulses that most clients describe as a snapping sensation against the skin. Rosacea-prone skin can be sensitive, and we take this into account with our settings. Topical numbing is available if needed. Treated skin typically appears redder for 24 to 48 hours before calming significantly.",
      },
    ],
  },
  {
    slug: "acne-scar-treatment-dallas",
    title: "Acne Scar Treatment",
    summary: "A combination of microneedling, RF, chemical peels, and laser targets different types of acne scarring to improve skin texture and tone.",
    intro: "Acne scars come in several types — atrophic (pitted), rolling, boxcar, and post-inflammatory hyperpigmentation — and each responds to different treatments. We assess your scar types at consultation and design a plan using microneedling, RF energy, chemical peels, and Clarity II laser as appropriate. Most clients need a series of treatments and see progressive improvement over several months.",
    metaTitle: "Acne Scar Treatment Dallas TX | Texture & Pigmentation | Summer House Medspa",
    metaDescription: "Treat acne scars with microneedling, laser, and peels at Summer House Medspa in Dallas TX. Multi-modal approach for lasting improvement. Call 214-307-1877.",
    problems: [
      "Pitted or indented acne scars that create an uneven skin surface",
      "Rolling or boxcar scars that cast shadows and are difficult to conceal",
      "Post-inflammatory hyperpigmentation from healed acne that leaves dark marks",
      "Overall rough skin texture from years of acne that affects confidence",
    ],
    signs: [
      "Your acne is controlled or resolved and scarring is the primary remaining concern",
      "You are willing to commit to a multi-session treatment series for best results",
      "You have realistic expectations — significant improvement is achievable, perfection is not",
      "You are not on isotretinoin (Accutane) and have been off it for at least 6 months",
    ],
    faq: [
      {
        question: "Which treatment works best for acne scars?",
        answer:
          "The most effective approach depends on your scar type. Atrophic and rolling scars respond well to microneedling and RF microneedling, which stimulate collagen from below. Post-inflammatory hyperpigmentation responds better to chemical peels and laser. Many clients have a mix of scar types, so a combination protocol is often most effective. We assess your scars at consultation and map out a specific plan.",
      },
      {
        question: "How many treatments are needed for acne scars?",
        answer:
          "Most clients with moderate scarring see meaningful improvement after 3 to 6 treatments. More severe scarring may require additional sessions. Collagen remodeling continues for 3 to 6 months after each session, so results keep improving over time. We recommend spacing treatments 4 to 6 weeks apart and reassessing progress at each visit.",
      },
    ],
  },
  {
    slug: "body-contouring-dallas",
    title: "Body Contouring",
    summary: "Non-invasive treatments reduce stubborn fat deposits and improve body shape in areas resistant to diet and exercise.",
    intro: "Body contouring encompasses non-surgical treatments that target and reduce localized fat in areas like the abdomen, flanks, thighs, and arms. These treatments work best on stubborn pockets of fat that persist despite consistent diet and exercise, and are not designed as weight loss solutions. We offer options appropriate to your anatomy and goals, with results that develop over 4 to 12 weeks.",
    metaTitle: "Body Contouring Dallas TX | Non-Surgical Fat Reduction | Summer House Medspa",
    metaDescription: "Non-surgical body contouring for stubborn fat at Summer House Medspa in Dallas TX. Not a weight loss procedure — targeted shaping. Call 214-307-1877.",
    problems: [
      "Stubborn fat in the abdomen or flanks that does not respond to diet and exercise",
      "Localized fat deposits in the thighs, arms, or back that create proportion imbalance",
      "Post-pregnancy body changes with areas of fat that have not resolved",
      "Preference for a non-surgical fat reduction option before considering liposuction",
    ],
    signs: [
      "You are at or near your goal weight but have specific fat pockets you want addressed",
      "The areas you want treated can be pinched — they are true fat deposits, not loose skin",
      "You have realistic expectations about the degree of change achievable non-surgically",
      "You are willing to maintain results with a consistent lifestyle after treatment",
    ],
    faq: [
      {
        question: "What is the difference between body contouring and weight loss?",
        answer:
          "Body contouring reduces localized fat deposits in specific areas — it does not reduce overall body weight or treat obesity. The best candidates are within 20 to 30 pounds of their goal weight and have specific stubborn pockets they want addressed. We are transparent about realistic outcomes and will tell you honestly if we think another approach would serve you better.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Most non-surgical fat reduction treatments show initial results at 4 to 8 weeks, with full results at 12 weeks as the body processes and eliminates treated fat cells. Results are permanent for the treated fat cells, but remaining fat cells can still enlarge with weight gain, which is why maintaining a stable weight after treatment is important.",
      },
    ],
  },
  {
    slug: "double-chin-dallas",
    title: "Double Chin Treatment (Kybella)",
    summary: "Kybella injections destroy submental fat cells under the chin for a more defined jaw and neck profile.",
    intro: "Kybella is an FDA-approved injectable containing deoxycholic acid, a naturally occurring molecule that breaks down dietary fat. When injected into the submental fat beneath the chin, it destroys fat cells permanently. Multiple treatment sessions are typically needed for full results, and the treated fat cells do not return. It is a well-established non-surgical option for reducing submental fullness.",
    metaTitle: "Double Chin Treatment Dallas TX | Kybella Injections | Summer House Medspa",
    metaDescription: "Reduce submental fat and define the jawline with Kybella at Summer House Medspa in Dallas TX. Permanent fat cell reduction. Call 214-307-1877.",
    problems: [
      "Submental fullness or a double chin that persists despite weight loss",
      "Genetic predisposition to fat accumulation beneath the chin",
      "Undefined jaw and neck profile due to submental fat",
      "Self-consciousness about the chin area in profile photographs or video calls",
    ],
    signs: [
      "You have pinchable fat beneath your chin rather than skin laxity alone",
      "You want a non-surgical alternative to liposuction for the submental area",
      "You can commit to 2 to 4 treatment sessions spaced 4 to 6 weeks apart",
      "You are prepared for several days of swelling and firmness after each treatment",
    ],
    faq: [
      {
        question: "How many Kybella treatments are needed?",
        answer:
          "Most clients need 2 to 4 sessions to achieve their desired result, with each session spaced 4 to 6 weeks apart. The number depends on the volume of submental fat and the definition goal. Each session destroys a portion of the fat, and results accumulate with each treatment. We reassess after each session to determine whether additional treatment is warranted.",
      },
      {
        question: "Is there downtime with Kybella?",
        answer:
          "Yes. Swelling, bruising, numbness, and firmness beneath the chin are common after Kybella and are part of the expected treatment response. Swelling can be significant for the first 3 to 5 days, with residual firmness that continues to resolve over several weeks. We recommend scheduling treatments when you have flexibility in your social calendar for the first week afterward.",
      },
    ],
  },
  {
    slug: "prp-prf-dallas",
    title: "Platelet-Rich Fibrin (PRF) Therapy",
    summary: "PRF uses growth factors concentrated from your own blood to support natural regeneration in the skin, hair, and joints.",
    intro: "Platelet-rich fibrin (PRF) is an advanced evolution of PRP therapy that creates a slower-releasing growth factor concentrate using a gentler centrifuge protocol. The fibrin matrix holds platelets and stem cells that release regenerative signals over days rather than hours. PRF is used at Summer House Medspa for facial rejuvenation, hair restoration, and as an adjunct to microneedling for enhanced skin healing.",
    metaTitle: "PRF Therapy Dallas TX | Platelet-Rich Fibrin | Summer House Medspa",
    metaDescription: "Platelet-rich fibrin (PRF) therapy for skin, hair, and regenerative wellness at Summer House Medspa in Dallas TX. Call 214-307-1877.",
    problems: [
      "Skin quality concerns that have not fully responded to topical treatments alone",
      "Early hair thinning or shedding that you want to address proactively",
      "Post-treatment healing that you want to optimize and accelerate",
      "Interest in biologic, natural approaches that use your own body's regenerative capacity",
    ],
    signs: [
      "You want a natural, regenerative treatment without synthetic fillers or chemicals",
      "You have no contraindications to blood draw or platelet-based therapies",
      "You are looking for progressive improvement over weeks rather than immediate results",
      "You are interested in hair restoration and want a non-pharmaceutical first approach",
    ],
    faq: [
      {
        question: "How is PRF different from PRP?",
        answer:
          "PRF uses a lower centrifuge speed than PRP, which preserves more growth factors and creates a fibrin scaffold that releases platelets slowly over several days. This sustained release is thought to produce a more robust and prolonged regenerative stimulus. PRF also typically contains stem cells and white blood cells that are spun out in traditional PRP preparation.",
      },
      {
        question: "How many PRF sessions are recommended?",
        answer:
          "For skin rejuvenation, a series of 3 sessions spaced 4 to 6 weeks apart is a common starting protocol. For hair restoration, monthly sessions for 3 to 4 months followed by quarterly maintenance are typical. Individual response varies, and we assess results at each visit to adjust the plan as needed.",
      },
    ],
  },
  {
    slug: "vitamin-b12-dallas",
    title: "Vitamin B12 Injections",
    summary: "Intramuscular B12 injections support energy production, mood, and neurological function for clients with deficiency or depletion.",
    intro: "Vitamin B12 is essential for energy metabolism, red blood cell formation, and neurological function. Many adults — particularly those eating plant-based diets, taking certain medications, or over 50 — have suboptimal B12 levels that contribute to fatigue, brain fog, and mood changes. Intramuscular B12 injections bypass the digestive system for direct absorption and are a simple, well-tolerated addition to a wellness routine.",
    metaTitle: "Vitamin B12 Injections Dallas TX | Energy & Wellness | Summer House Medspa",
    metaDescription: "Vitamin B12 injections for energy, clarity, and wellness at Summer House Medspa in Dallas TX. Fast absorption, no downtime. Call 214-307-1877.",
    problems: [
      "Persistent fatigue that does not improve with adequate sleep or diet changes",
      "Brain fog, difficulty concentrating, or memory lapses",
      "Known or suspected B12 deficiency from a plant-based diet, medication use, or malabsorption",
      "Low energy that affects daily productivity and motivation",
    ],
    signs: [
      "You have low or borderline B12 levels confirmed on bloodwork or have risk factors for deficiency",
      "You follow a vegan or vegetarian diet and may have inadequate dietary B12 intake",
      "You take metformin or a proton pump inhibitor that reduces B12 absorption",
      "You are looking for a simple, low-commitment wellness addition to your routine",
    ],
    faq: [
      {
        question: "How quickly will I feel results from B12 injections?",
        answer:
          "Some clients notice improved energy within 24 to 48 hours of their first injection, particularly if they were significantly deficient. Others notice changes more gradually over a series of injections. B12 injections are not a stimulant — their effect is one of restoring a baseline that was missing, so the experience is more like returning to normal than getting a boost.",
      },
      {
        question: "How often should I get B12 injections?",
        answer:
          "The frequency depends on your baseline levels and goals. Clients with confirmed deficiency may benefit from weekly injections initially, tapering to monthly maintenance. Those using B12 for general wellness typically get monthly injections. We can help guide frequency based on your history and how you respond to initial treatments.",
      },
    ],
  },
  {
    slug: "iv-hydration-dallas",
    title: "IV Hydration Therapy",
    summary: "Customized intravenous fluid and nutrient infusions restore hydration, replenish vitamins, and support recovery efficiently.",
    intro: "IV hydration therapy delivers fluids, electrolytes, vitamins, and minerals directly into the bloodstream for immediate absorption — bypassing the digestive system entirely. At Summer House Medspa, we offer customized IV formulations for hydration and recovery, immune support, energy, and general wellness. Sessions typically take 30 to 60 minutes and are administered in a comfortable clinical setting.",
    metaTitle: "IV Hydration Dallas TX | Vitamin Infusion & Recovery | Summer House Medspa",
    metaDescription: "Custom IV hydration and vitamin infusions at Summer House Medspa in Dallas TX. Rehydrate, recover, and replenish. Call 214-307-1877.",
    problems: [
      "Dehydration from illness, travel, intense heat, or athletic performance",
      "Post-event recovery from a late night, alcohol consumption, or high-exertion activity",
      "General fatigue, low energy, or frequent illness that may relate to nutritional depletion",
      "Difficulty absorbing nutrients orally due to gastrointestinal sensitivity or conditions",
    ],
    signs: [
      "You are acutely dehydrated or recovering from illness and want faster replenishment",
      "You feel run down, fatigued, or depleted and want a direct, efficient wellness boost",
      "You have an upcoming event, travel, or athletic competition and want to be at your best",
      "You are interested in supporting your immune system or overall wellness consistently",
    ],
    faq: [
      {
        question: "What is in a typical IV hydration drip?",
        answer:
          "A base IV drip contains saline or lactated Ringer's solution for hydration and electrolyte replenishment. We customize formulations with added nutrients such as B vitamins, vitamin C, magnesium, zinc, and glutathione depending on your goals. An anti-nausea or anti-inflammatory medication can be added for recovery-focused infusions. We go over your customized formula at each visit.",
      },
      {
        question: "Is IV hydration safe?",
        answer:
          "Yes, when administered by a qualified provider in a clinical setting. We assess your health history and current medications before treatment and monitor you throughout the infusion. IV therapy delivers nutrients at high concentrations, and certain medical conditions require adjustments or may be contraindications. We do not administer IV therapy without a brief intake and health screening.",
      },
    ],
  },
];

export const serviceOptions = services.map((service) => service.title);

export const locations: Location[] = [
  {
    slug: "preston-hollow",
    name: "Preston Hollow",
    county: "Dallas County",
    latitude: 32.8846,
    longitude: -96.804,
    summary: "Boutique medspa care near Preston Hollow with natural injectables, laser, and medical wellness services.",
    introParagraphs: [
      "Summer House serves Preston Hollow clients seeking discreet, relationship-based aesthetic care. Most clients choose us for continuity with the same injector and a conservative treatment philosophy.",
      "Our treatment planning balances aesthetics and wellness so clients can maintain results with fewer reactive decisions and better long-term consistency.",
    ],
    commonIssues: [
      "Clients in Preston Hollow commonly request subtle facial balancing, preventative neuromodulator care, and laser plans that preserve natural expression.",
      "Medical weight-loss and wellness programs are also a high-demand category, especially for clients wanting accountable monthly support.",
    ],
    neighborhoods: ["Preston Hollow", "Bluffview", "Midway Hollow", "Devonshire", "Preston Royal"],
    processParagraphs: [
      "Consultations begin with goals, prior treatment history, and candidacy screening. We map a 90-day plan instead of pushing one-time upsells.",
      "Follow-up cadence is built into every plan so adjustments happen proactively and results stay stable.",
    ],
    faq: [
      {
        question: "Do you treat first-time injectable clients in Preston Hollow?",
        answer:
          "Yes. Many first-time clients choose Summer House specifically for conservative dosing and detailed consultation before treatment.",
      },
      {
        question: "Can I combine Botox and filler in one visit?",
        answer:
          "Often yes, depending on goals and candidacy. We phase treatment when needed to prioritize safety and natural outcomes.",
      },
    ],
  },
  {
    slug: "park-cities",
    name: "Park Cities",
    county: "Dallas County",
    latitude: 32.8439,
    longitude: -96.7845,
    summary: "Natural aesthetic and wellness care for Highland Park and University Park clients.",
    introParagraphs: [
      "Park Cities clients typically want subtle, polished outcomes that never look overdone. Summer House is designed around that exact expectation.",
      "Our team prioritizes consistency, transparent treatment planning, and repeatable maintenance schedules.",
    ],
    commonIssues: [
      "Most Park Cities appointments focus on preventative Botox, lower-face balancing, and ongoing skin quality work.",
      "Clients also request medical weight-loss options that are supervised and realistic for long-term retention.",
    ],
    neighborhoods: ["Highland Park", "University Park", "SMU Area", "Snider Plaza", "Armstrong Corridor"],
    processParagraphs: [
      "We document baseline photos, align on treatment limits, and set expectations for what will change now versus over the next 8 to 12 weeks.",
      "Each visit includes next-step recommendations to avoid scattered treatment decisions.",
    ],
    faq: [
      {
        question: "Do you offer same-provider continuity?",
        answer:
          "Yes. Consistency is one of our core differentiators and a major reason clients switch from larger chains.",
      },
      {
        question: "Do you provide consultation-only visits?",
        answer:
          "Yes. You can book consultation first and decide on treatment once you review recommendations.",
      },
    ],
  },
  {
    slug: "uptown-dallas",
    name: "Uptown Dallas",
    county: "Dallas County",
    latitude: 32.8009,
    longitude: -96.7995,
    summary: "Injectables, laser, and wellness care for Uptown professionals who want efficient, natural results.",
    introParagraphs: [
      "Uptown clients value efficient visits, clear planning, and outcomes that look polished in person and on camera. Summer House treatment protocols are built around that reality.",
      "We combine aesthetic and wellness planning so clients can improve appearance, confidence, and metabolic health together.",
    ],
    commonIssues: [
      "Common Uptown concerns include forehead lines, lower-face contour balance, laser maintenance, and energy/mood dips during weight-loss attempts.",
      "Many clients are balancing high-demand schedules and need predictable, low-friction treatment cadence.",
    ],
    neighborhoods: ["State Thomas", "West Village", "Victory Park", "Harwood District", "Knox-Henderson"],
    processParagraphs: [
      "Consultation maps a realistic sequence, then we schedule maintenance cadence up front to improve retention.",
      "Client communication is optimized for speed: text follow-up, clear aftercare, and short progress check-ins.",
    ],
    faq: [
      {
        question: "Can I get lunchtime treatments with minimal downtime?",
        answer:
          "Yes. Many neuromodulator and select laser appointments are designed for minimal disruption to your workday.",
      },
      {
        question: "Do you support long-term treatment plans?",
        answer:
          "Yes. Most clients do best on structured treatment cycles versus one-off appointments.",
      },
    ],
  },
  {
    slug: "lakewood-dallas",
    name: "Lakewood",
    county: "Dallas County",
    latitude: 32.8316,
    longitude: -96.7414,
    summary: "Family-friendly medspa care near Lakewood for natural injectables, skin rejuvenation, and wellness support.",
    introParagraphs: [
      "Lakewood clients often request conservative facial refresh plans with clear downtime expectations and simple maintenance.",
      "Summer House emphasizes personalized planning and education so treatment decisions feel informed, not pressured.",
    ],
    commonIssues: [
      "Frequent goals include softening expression lines, restoring subtle volume, improving texture, and starting medically guided weight-loss care.",
      "Trust and communication are key for first-time clients in this area.",
    ],
    neighborhoods: ["Lakewood Proper", "Lakewood Heights", "M Streets", "White Rock", "Lower Greenville"],
    processParagraphs: [
      "Every plan starts with objective-setting and candidacy review. We prioritize low-risk sequencing for first treatment cycles.",
      "Post-treatment follow-up is structured so clients know what to expect and when to return.",
    ],
    faq: [
      {
        question: "Do you treat clients new to aesthetic medicine?",
        answer:
          "Yes. We welcome first-time clients and focus heavily on consultation, education, and conservative results.",
      },
      {
        question: "Can I combine skin and injectable treatment plans?",
        answer:
          "Yes. Combined plans are common and often produce stronger long-term outcomes.",
      },
    ],
  },
  {
    slug: "north-dallas",
    name: "North Dallas",
    county: "Dallas County",
    latitude: 32.9303,
    longitude: -96.8039,
    summary: "Comprehensive medspa and wellness programs for North Dallas clients seeking continuity and measurable results.",
    introParagraphs: [
      "North Dallas clients typically look for high-touch care without the corporate chain experience. Summer House is built around continuity and relationship-first treatment.",
      "From injectables to GLP-1 care, we provide one coordinated plan so clients avoid fragmented decisions across multiple providers.",
    ],
    commonIssues: [
      "Top requests include natural Botox, facial balancing, laser maintenance, and medically supervised weight-loss.",
      "Many clients are transitioning from high-volume medspas and want a more personalized approach.",
    ],
    neighborhoods: ["Bent Tree", "Far North Dallas", "Prestonwood", "Hillcrest Village", "Campbell Green"],
    processParagraphs: [
      "We align treatment priorities around timeline, budget, and tolerance for downtime.",
      "Plans are documented with clear follow-up intervals to reduce drop-off and maintain outcomes.",
    ],
    faq: [
      {
        question: "Do you offer membership options?",
        answer:
          "Yes. Membership pathways are designed around recurring aesthetic and wellness maintenance.",
      },
      {
        question: "How soon can I be seen?",
        answer:
          "Availability changes weekly, but we prioritize rapid consult response for high-intent inquiries.",
      },
    ],
  },
  {
    slug: "university-park",
    name: "University Park",
    county: "Dallas County",
    latitude: 32.8501,
    longitude: -96.7847,
    summary: "University Park medspa services with conservative aesthetics and accountable wellness planning.",
    introParagraphs: [
      "University Park clients choose Summer House for subtle, repeatable outcomes and clear provider communication.",
      "We focus on outcomes that fit real life: professional confidence, natural presentation, and practical maintenance cadence.",
    ],
    commonIssues: [
      "Preventative injectable care and skin quality plans are the most common requests.",
      "There is also strong demand for structured GLP-1 weight-loss support with consistent follow-up.",
    ],
    neighborhoods: ["University Park Core", "SMU Corridor", "Snider Plaza", "Caruth Hills", "Preston Center"],
    processParagraphs: [
      "We define objective milestones at consultation and map treatment sequence with explicit follow-up expectations.",
      "Ongoing communication helps clients stay on plan and avoid last-minute correction appointments.",
    ],
    faq: [
      {
        question: "Do you prioritize natural outcomes over volume?",
        answer:
          "Yes. Our approach defaults to conservative treatment with optional staged enhancement.",
      },
      {
        question: "Can I book both aesthetics and wellness consultation?",
        answer:
          "Yes. Combined consultations are available and often improve planning quality.",
      },
    ],
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin County",
    latitude: 33.1507,
    longitude: -96.8236,
    summary: "Natural aesthetics and medical weight-loss programs serving Frisco clients with a personalized, relationship-based approach.",
    introParagraphs: [
      "Frisco has become one of the fastest-growing communities in North Texas, and its residents are increasingly prioritizing preventative and maintenance-focused aesthetic care. Summer House brings boutique-level personalization to Frisco clients who want quality without compromise.",
      "We serve clients from Frisco and surrounding Collin County communities with the same conservative, plan-first philosophy — every consultation maps a realistic 90-day roadmap before any treatment begins.",
    ],
    commonIssues: [
      "Frisco clients most frequently request neuromodulator maintenance, facial balancing with filler, and Clarity II laser for sun damage accumulated from an active Texas lifestyle.",
      "Medical weight loss is also high demand, particularly semaglutide and tirzepatide programs with structured medical supervision and monthly check-ins.",
    ],
    neighborhoods: ["Frisco Square", "The Star District", "Stonebriar", "Westridge", "Starwood"],
    processParagraphs: [
      "Consultations cover goals, prior treatment history, and candidacy criteria before any plan is presented. We build treatment cadence that fits real schedules.",
      "Frisco clients traveling to Dallas for appointments can consolidate two to three service visits into efficient blocks once a treatment plan is established.",
    ],
    faq: [
      {
        question: "Is the drive from Frisco worth it for a medspa?",
        answer:
          "Clients consistently tell us the consultation quality and results justify the trip. Many drive from Frisco monthly once a plan is established.",
      },
      {
        question: "What treatments work best for outdoor-active clients?",
        answer:
          "Laser maintenance and preventative neuromodulator care are especially relevant for active clients who get frequent Texas sun exposure.",
      },
    ],
  },
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    latitude: 33.0198,
    longitude: -96.6989,
    summary: "Conservative injectables, laser care, and medical wellness programs for Plano clients seeking natural, personalized results.",
    introParagraphs: [
      "Plano is one of the most populous cities in North Texas, and its diverse professional client base has specific expectations for aesthetic care: natural outcomes, transparent planning, and continuity with the same provider.",
      "Summer House is built around those exact expectations. Every treatment plan starts with consultation and candidacy review before a single unit is administered.",
    ],
    commonIssues: [
      "Plano clients frequently request Botox for preventative care and maintenance, mid-face volume restoration, and skin quality improvement through laser and microneedling.",
      "GLP-1 weight-loss programs are also common, particularly for clients who want medical accountability and a structured approach after trying self-directed methods.",
    ],
    neighborhoods: ["Legacy West", "West Plano", "Willow Bend", "East Plano", "Haggard Park"],
    processParagraphs: [
      "We document baseline photos and align on realistic targets before any treatment. This creates a shared framework for measuring results over time.",
      "Most Plano clients schedule 3 to 4 visits per year across aesthetics and wellness, reducing both cost and reactive decision-making.",
    ],
    faq: [
      {
        question: "Do you see a lot of Plano clients?",
        answer:
          "Yes. Plano is one of our most active service areas — clients from all parts of the city have established ongoing plans with us.",
      },
      {
        question: "Can I book a consultation before committing to treatment?",
        answer:
          "Yes. Consultation-only visits are available and encouraged for any client who wants to understand options before making a treatment decision.",
      },
    ],
  },
  {
    slug: "allen",
    name: "Allen",
    county: "Collin County",
    latitude: 33.1032,
    longitude: -96.6705,
    summary: "Natural injectables, laser treatment, and medically supervised wellness programs serving Allen and east Collin County.",
    introParagraphs: [
      "Allen clients have access to many medical aesthetics options, but Summer House stands out for one reason: every treatment plan is built around long-term consistency, not one-time results.",
      "Whether the goal is subtle facial refreshment, skin quality improvement, or medically guided weight management, we map out the full plan before asking for a commitment.",
    ],
    commonIssues: [
      "Common Allen appointment goals include forehead and crow's feet neuromodulators, lower-face contour work, Clarity II for active sun damage, and peptide or GLP-1 wellness programs.",
      "Active families and professionals in Allen often benefit from combining aesthetic and wellness care under one plan to maximize efficiency.",
    ],
    neighborhoods: ["Allen Station", "Twin Creeks", "Bethany Road Corridor", "Exchange Parkway", "East Allen"],
    processParagraphs: [
      "Consultation identifies the primary concern, reviews treatment history, and establishes a realistic timeline before presenting plan options.",
      "Clients who combine aesthetic and wellness services see better overall results because the underlying health variables are accounted for together.",
    ],
    faq: [
      {
        question: "Is Allen within your normal service area?",
        answer:
          "Yes. We have established clients from Allen and serve the area regularly. The drive to our Dallas location is straightforward from most Allen neighborhoods.",
      },
      {
        question: "Do you offer virtual consultations for Allen clients?",
        answer:
          "We can discuss goals and general candidacy by phone or text before your first in-person visit to make the process more efficient.",
      },
    ],
  },
  {
    slug: "mckinney",
    name: "McKinney",
    county: "Collin County",
    latitude: 33.1972,
    longitude: -96.6397,
    summary: "Boutique medspa care serving McKinney clients with natural injectables, skin rejuvenation, and medical wellness programs.",
    introParagraphs: [
      "McKinney's growing affluent communities are increasingly turning to medical aesthetics for natural, maintenance-focused care. Summer House serves McKinney clients who want quality, consistency, and a provider they can trust long-term.",
      "Our plan-first approach ensures every client leaves consultation with a clear picture of what to expect, what it costs, and what the follow-up looks like before any treatment begins.",
    ],
    commonIssues: [
      "McKinney clients frequently request preventative neuromodulator care, subtle lip and cheek enhancement, and Clarity II laser sessions for sun-damaged skin from an outdoor Texas lifestyle.",
      "Medical weight loss with semaglutide or tirzepatide is also a common request, particularly for clients who want a structured, supervised approach.",
    ],
    neighborhoods: ["Historic Downtown McKinney", "Stonebridge Ranch", "Adriatica", "Craig Ranch", "Eldorado"],
    processParagraphs: [
      "We start every consultation with a goals conversation and candidacy review before presenting any treatment options. This keeps planning realistic and client-driven.",
      "Most McKinney clients schedule 3 to 4 visits annually and appreciate the consistent provider relationship our approach makes possible.",
    ],
    faq: [
      {
        question: "Do you serve clients from McKinney regularly?",
        answer:
          "Yes. We have McKinney clients on established treatment plans and welcome new clients from this area.",
      },
      {
        question: "What is the best treatment for someone new to injectables from McKinney?",
        answer:
          "A consultation is always the first step. Most first-time clients start with a conservative neuromodulator plan, with optional add-ons reviewed after the initial follow-up.",
      },
    ],
  },
  {
    slug: "southlake",
    name: "Southlake",
    county: "Tarrant County",
    latitude: 32.9406,
    longitude: -97.1331,
    summary: "Polished, discreet aesthetic and wellness care for Southlake clients who value results that speak for themselves.",
    introParagraphs: [
      "Southlake is a high-visibility community where clients want results that look intentional and polished — never overdone or obvious. Summer House is built around exactly that philosophy: conservative dosing, natural outcomes, and provider continuity.",
      "We serve Southlake clients across aesthetics and medical wellness with the same transparent planning approach, ensuring every treatment decision is informed and unhurried.",
    ],
    commonIssues: [
      "Southlake clients most commonly request subtle Botox maintenance, facial balancing with filler, and skin quality plans that deliver consistent results season to season.",
      "Pre-event preparation is a frequent request given the social calendar most Southlake clients maintain. We build timelines that account for events months in advance.",
    ],
    neighborhoods: ["Southlake Town Square", "Timarron", "Shady Oaks", "Monticello", "Estes Park"],
    processParagraphs: [
      "Consultations are thorough, unhurried, and focused on long-term outcome rather than single-session results. We map 90-day plans and build in follow-up from the first visit.",
      "Clients traveling from Southlake to our Dallas location typically consolidate multiple services per visit once a plan is in place.",
    ],
    faq: [
      {
        question: "Is the drive from Southlake to Summer House worth it?",
        answer:
          "Many Southlake clients tell us the consultation quality and treatment results justify the drive. Provider consistency and natural outcomes matter more than proximity for most clients in this area.",
      },
      {
        question: "Can you accommodate Southlake clients on a tight schedule?",
        answer:
          "Yes. We plan appointments and consolidate services to minimize round trips. Most established clients visit 3 to 4 times per year.",
      },
    ],
  },
  {
    slug: "addison",
    name: "Addison",
    county: "Dallas County",
    latitude: 32.9618,
    longitude: -96.8319,
    summary: "Efficient aesthetic and wellness care for Addison professionals who want natural results without disrupting their schedule.",
    introParagraphs: [
      "Addison is a dense professional district with a high concentration of working adults who need efficient, high-quality aesthetic care. Summer House offers the structure and planning approach that busy Addison clients expect.",
      "Our treatment protocols are designed for clients who want predictable outcomes, short downtime, and clear guidance — not pressure to over-treat.",
    ],
    commonIssues: [
      "Addison clients frequently request lunchtime-friendly neuromodulator treatments, skin quality maintenance, and medical weight management programs with flexible scheduling.",
      "Consistency and provider continuity are important to Addison clients who have had varied results at high-turnover medspas in the area.",
    ],
    neighborhoods: ["Addison Circle", "Quorum Drive", "Belt Line", "Vitruvian Park", "Mercer Road"],
    processParagraphs: [
      "We build treatment plans around real schedules, documenting goals and follow-up cadence so each visit builds efficiently on the last.",
      "Most Addison clients maintain aesthetics and wellness together under one plan, maximizing the value of each visit.",
    ],
    faq: [
      {
        question: "Can I get Botox during a lunch break near Addison?",
        answer:
          "Many neuromodulator treatments require minimal downtime and can fit into a midday schedule. We discuss timing and expectations at consultation.",
      },
      {
        question: "Do you offer medical weight loss programs for Addison clients?",
        answer:
          "Yes. Semaglutide and tirzepatide programs with structured follow-up are available and popular among our professional client base.",
      },
    ],
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    county: "Dallas County",
    latitude: 32.9537,
    longitude: -96.8901,
    summary: "Natural injectables, laser care, and medical wellness programs serving Carrollton and north Dallas County.",
    introParagraphs: [
      "Carrollton's diverse, practical client base values transparency, fair pricing, and a provider who treats them like an individual rather than a number. Summer House delivers on all three.",
      "Whether clients are first-timers exploring injectables or established patients adding laser or wellness to their plan, we build around goals and realistic timelines.",
    ],
    commonIssues: [
      "Common requests from Carrollton include conservative Botox for expression lines, lip and chin filler for subtle balance, and Clarity II laser for skin tone and texture.",
      "Medical weight loss and peptide wellness programs are also popular, especially for clients who want one clinic managing multiple health and aesthetic goals.",
    ],
    neighborhoods: ["Castle Hills", "Josey Ranch", "Trinity Mills", "North Carrollton", "Crosby Road"],
    processParagraphs: [
      "Every consultation starts with a goals and history review. We present treatment options with clear pricing and expected timelines before asking for any commitment.",
      "Follow-up is built into every plan so results stay consistent and clients know when to return.",
    ],
    faq: [
      {
        question: "Is Summer House convenient from Carrollton?",
        answer:
          "Our Dallas location on Central Expressway is accessible from Carrollton via I-35E or the Tollway. Most clients find the route manageable for monthly or quarterly visits.",
      },
      {
        question: "Do you offer payment plans for Carrollton clients?",
        answer:
          "Financing options are available and reviewed during consultation. We aim to make consistent care accessible regardless of budget.",
      },
    ],
  },
  {
    slug: "richardson",
    name: "Richardson",
    county: "Dallas County",
    latitude: 32.9483,
    longitude: -96.7299,
    summary: "Research-driven aesthetic and wellness care for Richardson professionals who want evidence-based treatment planning.",
    introParagraphs: [
      "Richardson's professional community — particularly around the Telecom Corridor and CityLine — tends to approach aesthetic decisions with research and questions. Summer House is built for exactly this type of client: consultations are thorough, plans are documented, and every recommendation has a rationale.",
      "We serve Richardson clients across injectables, laser, and medical wellness with the same evidence-first philosophy. No pressure, no guesswork, no surprises.",
    ],
    commonIssues: [
      "Richardson clients frequently ask for neuromodulator plans with clear dosing rationale, skin quality programs with measurable milestones, and medical weight management with tracked outcomes.",
      "Many come from providers who moved too fast or didn't explain their approach. We address that by building transparency into every step.",
    ],
    neighborhoods: ["CityLine", "Canyon Creek", "Telecom Corridor", "Palisades", "Arapaho Road"],
    processParagraphs: [
      "Consultation is detailed and educational. We explain candidacy criteria, treatment sequencing, expected outcomes, and follow-up timing before any plan is accepted.",
      "Clients who want to see baseline documentation and track improvement over time are particularly well-served by our approach.",
    ],
    faq: [
      {
        question: "Do you explain the science behind the treatments you recommend?",
        answer:
          "Yes. We walk through how treatments work, why we recommend a specific sequence, and what realistic outcomes look like based on your individual anatomy.",
      },
      {
        question: "Can I get a second opinion consultation at Summer House?",
        answer:
          "Absolutely. We welcome clients who want an honest assessment and second perspective before committing to treatment elsewhere or with us.",
      },
    ],
  },
  {
    slug: "flower-mound",
    name: "Flower Mound",
    county: "Denton County",
    latitude: 33.0145,
    longitude: -97.0969,
    summary: "Family-focused aesthetic and wellness care for Flower Mound clients who want natural results and structured maintenance.",
    introParagraphs: [
      "Flower Mound's active, wellness-oriented community increasingly prioritizes preventative aesthetic care and medical weight management as part of a broader health routine. Summer House serves Flower Mound clients with a plan-first approach that fits busy family and professional schedules.",
      "Most clients start with conservative injectable care and expand their plan over time as they build confidence in the process and outcomes.",
    ],
    commonIssues: [
      "Top requests from Flower Mound include preventative Botox, natural lip filler, and skin care plans that address Texas sun exposure without significant downtime.",
      "GLP-1 weight management and peptide wellness are also frequent requests among clients balancing family life and personal health goals.",
    ],
    neighborhoods: ["Lakeside", "Bridlewood", "Highland Village", "River Walk", "Flower Mound Ranch"],
    processParagraphs: [
      "We prioritize consultation before treatment and structure plans around realistic timelines that accommodate school schedules, family events, and work travel.",
      "Follow-up is scheduled in advance so clients maintain results without reactive or rushed appointments.",
    ],
    faq: [
      {
        question: "Do you treat clients from Flower Mound frequently?",
        answer:
          "Yes. We have clients from Flower Mound on regular treatment schedules and are familiar with the common goals and lifestyle considerations in this area.",
      },
      {
        question: "What treatments have low downtime for busy parents?",
        answer:
          "Neuromodulators and many laser sessions have minimal visible downtime. We discuss treatment timing and downtime expectations at every consultation.",
      },
    ],
  },
  {
    slug: "grapevine",
    name: "Grapevine",
    county: "Tarrant County",
    latitude: 32.9343,
    longitude: -97.0781,
    summary: "Aesthetic and wellness care for Grapevine clients, including event prep, neuromodulators, and medical weight management.",
    introParagraphs: [
      "Grapevine's hospitality culture and active social calendar create a steady demand for aesthetic treatments that look polished for events, travel, and high-visibility occasions. Summer House plans around that reality from the first consultation.",
      "We serve Grapevine clients with the same conservative, plan-driven philosophy regardless of whether the goal is ongoing maintenance or preparation for a specific occasion.",
    ],
    commonIssues: [
      "Grapevine clients commonly request Botox and filler plans timed around travel and events, laser care for skin quality, and medical weight management programs with flexible scheduling.",
      "Event-driven timelines require careful planning to ensure results peak at the right moment. We build this into the treatment sequence from day one.",
    ],
    neighborhoods: ["Main Street", "Grapevine Lake", "Southlake border", "Silver Lake", "DFW Corridor"],
    processParagraphs: [
      "Consultations map the timeline from first treatment to expected outcome, with attention to any upcoming events or travel that affect scheduling.",
      "Clients who visit seasonally for event prep typically establish ongoing maintenance plans after their first successful cycle.",
    ],
    faq: [
      {
        question: "How far in advance should I book before a big event?",
        answer:
          "For Botox, we recommend 2 to 3 weeks before an event. For filler, 3 to 4 weeks. Laser and other treatments require longer lead times depending on the protocol.",
      },
      {
        question: "Do you serve Grapevine clients regularly?",
        answer:
          "Yes. Clients from Grapevine and the mid-cities area are part of our regular client base.",
      },
    ],
  },
  {
    slug: "irving",
    name: "Irving",
    county: "Dallas County",
    latitude: 32.8140,
    longitude: -96.9490,
    summary: "Natural aesthetic and wellness care for Irving and Las Colinas professionals seeking conservative, plan-based treatment.",
    introParagraphs: [
      "Irving and Las Colinas have a high density of corporate professionals who want natural, maintenance-focused aesthetic results. Summer House serves this community with efficient consultations and clear treatment plans built around work schedules.",
      "From Botox and filler to GLP-1 programs and laser care, we provide one coordinated plan so clients manage multiple goals without visiting multiple providers.",
    ],
    commonIssues: [
      "Irving clients frequently request subtle neuromodulator care, skin quality improvement for professional appearance, and medical weight management with structured follow-up.",
      "Many Las Colinas corporate clients also request IV hydration and wellness programs that fit into demanding travel and meeting schedules.",
    ],
    neighborhoods: ["Las Colinas", "Valley Ranch", "Hackberry Creek", "Irving Heights", "MacArthur Park"],
    processParagraphs: [
      "We build treatment plans around professional schedules and document everything from first visit forward for consistent outcomes.",
      "Irving clients often consolidate aesthetic and wellness visits to minimize time away from work while maintaining consistent results.",
    ],
    faq: [
      {
        question: "Do you serve Las Colinas corporate clients?",
        answer:
          "Yes. We have clients from Las Colinas and Irving's corporate corridors on established aesthetic and wellness plans.",
      },
      {
        question: "Can I schedule early morning or evening appointments?",
        answer:
          "Appointment availability varies. Contact us directly and we will work to accommodate schedules that don't interfere with work commitments.",
      },
    ],
  },
  {
    slug: "lewisville",
    name: "Lewisville",
    county: "Denton County",
    latitude: 33.0462,
    longitude: -96.9942,
    summary: "Practical, natural aesthetic care and medical wellness programs for Lewisville and south Denton County clients.",
    introParagraphs: [
      "Lewisville clients value transparency, fair pricing, and a provider who treats their goals seriously without pushing unnecessary treatment. Summer House delivers on all three.",
      "Whether new to medical aesthetics or looking for a better provider experience, Lewisville clients find our consultation-first approach both refreshing and reassuring.",
    ],
    commonIssues: [
      "Common requests from Lewisville include conservative Botox for forehead and eye area, natural lip enhancement, and Clarity II laser for sun damage and skin texture.",
      "Medical weight management programs are also popular, especially for clients who have not had success with self-directed approaches and want medical accountability.",
    ],
    neighborhoods: ["Castle Hills edge", "Hebron", "Lewisville Lake", "Valley Ridge", "Old Town Lewisville"],
    processParagraphs: [
      "We present honest assessments at consultation rather than upselling. Clients leave knowing exactly what they need, what it will cost, and when to return.",
      "Most Lewisville clients establish quarterly or semi-annual treatment cycles that keep results stable without overspending.",
    ],
    faq: [
      {
        question: "Is Summer House affordable for Lewisville clients?",
        answer:
          "Our pricing is transparent and competitive. We present full treatment costs at consultation and offer financing options for multi-service plans.",
      },
      {
        question: "Can I start with just one treatment and expand later?",
        answer:
          "Yes. Starting conservative and building over time is our preferred approach. Most clients begin with one primary treatment and add to their plan after seeing initial results.",
      },
    ],
  },
  {
    slug: "the-colony",
    name: "The Colony",
    county: "Denton County",
    latitude: 33.0845,
    longitude: -96.8836,
    summary: "Natural injectables and wellness care for The Colony's growing community of young professionals and families.",
    introParagraphs: [
      "The Colony has grown rapidly and its younger professional and family demographic is increasingly interested in preventative aesthetic care and medical wellness programs. Summer House serves The Colony with a first-timer-friendly approach that emphasizes education before treatment.",
      "We help clients understand their options clearly before making any commitment, which is especially valuable for clients who are new to medical aesthetics.",
    ],
    commonIssues: [
      "The Colony clients frequently ask about preventative Botox in their late 20s and 30s, natural lip filler for subtle enhancement, and GLP-1 programs for sustainable weight management.",
      "Education is a priority for many clients in this area — they want to understand the treatments, not just have them done.",
    ],
    neighborhoods: ["Grandscape", "Austin Ranch", "Stewart Peninsula", "The Colony Town Center", "Lewisville Lake Shore"],
    processParagraphs: [
      "Consultations are educational and unhurried. We explain every treatment option, expected outcome, and cost before any plan is accepted.",
      "First-time clients appreciate that we do not require same-day treatment decisions. You can consult, think it over, and book when ready.",
    ],
    faq: [
      {
        question: "I'm in my late 20s — is it too early to start Botox?",
        answer:
          "No. Preventative Botox in the late 20s to early 30s is common and effective for slowing the formation of deeper lines. Dosing is conservative and appropriate for your age.",
      },
      {
        question: "What should I expect at my first consultation in The Colony area?",
        answer:
          "We review your goals, discuss candidacy and realistic outcomes, and present a treatment plan with clear pricing. No obligation to start treatment on the same visit.",
      },
    ],
  },
  {
    slug: "rockwall",
    name: "Rockwall",
    county: "Rockwall County",
    latitude: 32.9307,
    longitude: -96.4597,
    summary: "Boutique aesthetic and wellness care for Rockwall clients willing to drive for trusted, natural-results medspa treatment.",
    introParagraphs: [
      "Rockwall's lakeside community has high standards for quality and a strong preference for providers they trust. Summer House attracts Rockwall clients who want consistent outcomes and a relationship with their provider, not a different face every visit.",
      "The drive to our Dallas location is a common conversation — and clients who make it once typically become long-term patients because of the care quality and outcome consistency.",
    ],
    commonIssues: [
      "Rockwall clients most often request natural Botox, full-face balancing, and skin quality improvement. Many have been disappointed by overdone results elsewhere.",
      "Medical weight loss and wellness programs are also a draw for clients who want a structured, accountable approach to health management.",
    ],
    neighborhoods: ["The Harbor", "Chandlers Landing", "Heath", "McLendon-Chisholm", "Lakeside Village"],
    processParagraphs: [
      "We make every visit efficient for clients who travel a distance. Consultations cover everything needed to establish a full plan, and follow-up visits are kept focused.",
      "Many Rockwall clients consolidate aesthetic and wellness services into single visits and maintain plans on 90-day cycles.",
    ],
    faq: [
      {
        question: "Is it worth driving from Rockwall for a medspa?",
        answer:
          "Many of our Rockwall clients say yes — the provider consistency and natural-outcomes philosophy is hard to find closer to home. Most become regulars after their first visit.",
      },
      {
        question: "How do you minimize trips for clients who drive far?",
        answer:
          "We consolidate services efficiently and schedule follow-up visits in advance so clients can plan their calendar around appointments.",
      },
    ],
  },
  {
    slug: "garland",
    name: "Garland",
    county: "Dallas County",
    latitude: 32.9126,
    longitude: -96.6389,
    summary: "Accessible, natural aesthetic care and medical wellness programs for Garland and east Dallas County clients.",
    introParagraphs: [
      "Garland's large and diverse client base encompasses first-time medspa clients, established patients seeking better outcomes, and clients exploring medical wellness. Summer House serves all three with a transparent, unhurried approach.",
      "We prioritize clear communication and honest candidacy assessment so clients understand their options fully before committing to any treatment plan.",
    ],
    commonIssues: [
      "Common Garland requests include conservative Botox and filler, skin texture improvement with laser or microneedling, and medically supervised weight management.",
      "Many clients are making the switch from high-volume medspas and are looking for a more personalized experience with consistent provider relationships.",
    ],
    neighborhoods: ["Firewheel", "Club Hill", "Springpark", "Sachse border", "Downtown Garland"],
    processParagraphs: [
      "Consultation starts with a candid conversation about goals, history, and realistic outcomes. We never present a plan that includes treatments you did not ask about.",
      "Follow-up is structured so clients maintain results predictably without reactive last-minute appointments.",
    ],
    faq: [
      {
        question: "Do you serve Garland clients regularly?",
        answer:
          "Yes. Clients from Garland and the Firewheel area are part of our established patient base.",
      },
      {
        question: "What is the most popular treatment for Garland clients?",
        answer:
          "Conservative Botox for expression lines is the most common starting point. Many clients expand into skin quality and wellness plans over subsequent visits.",
      },
    ],
  },
  {
    slug: "dallas-design-district",
    name: "Dallas Design District",
    county: "Dallas County",
    latitude: 32.7932,
    longitude: -96.8215,
    summary: "Aesthetic care for Design District clients with a sharp eye for quality and a preference for understated, refined results.",
    introParagraphs: [
      "The Design District attracts clients with strong visual sensibility who are particularly attuned to proportion, detail, and natural-looking outcomes. Summer House serves this community with a refined, conservative approach that matches their aesthetic intelligence.",
      "Most Design District clients want results that look intentional rather than obvious — a refreshed face, not a treated one. That is the philosophy behind everything we do.",
    ],
    commonIssues: [
      "Design District clients frequently request facial balancing, subtle filler work, and skin quality treatments that enhance without altering overall character.",
      "Many are experienced with aesthetics and come to us after outgrowing providers who pushed volume over nuance.",
    ],
    neighborhoods: ["Hi Line Drive", "Market Center", "Stemmons Corridor", "Trinity Groves edge", "Motor Street"],
    processParagraphs: [
      "Consultations are assessment-first. We review what you have, what has changed, and what a well-considered plan looks like before presenting options.",
      "Design District clients typically establish a 90-day maintenance cadence that keeps results consistent without overcorrection.",
    ],
    faq: [
      {
        question: "I'm experienced with injectables — can you work with a specific look I have in mind?",
        answer:
          "Yes. We welcome clients who come in with a clear aesthetic goal. Our job is to assess whether that goal is realistic for your anatomy and map the most natural path to get there.",
      },
      {
        question: "Do you work with clients who have had previous filler dissolved?",
        answer:
          "Yes. Starting fresh after dissolving previous work is common and something we manage regularly. We do a thorough assessment before presenting a new plan.",
      },
    ],
  },
  {
    slug: "oak-lawn-dallas",
    name: "Oak Lawn",
    county: "Dallas County",
    latitude: 32.8025,
    longitude: -96.8126,
    summary: "Inclusive, discreet aesthetic and wellness care for Oak Lawn's active, social community.",
    introParagraphs: [
      "Oak Lawn has one of Dallas's most aesthetically engaged communities — clients who care about appearance, know their options, and want a provider who respects both. Summer House serves Oak Lawn with a no-judgment, plan-first approach that welcomes every client equally.",
      "Whether you are new to medical aesthetics or an experienced patient looking for a better experience, Oak Lawn clients receive the same thorough consultation and honest treatment planning.",
    ],
    commonIssues: [
      "Oak Lawn clients frequently request Botox and filler for natural-looking maintenance, skin quality treatments that hold up in social settings, and wellness programs including GLP-1 and peptide therapy.",
      "Discretion and privacy are priorities for many clients. We treat every consultation as confidential and never discuss treatment details outside of care.",
    ],
    neighborhoods: ["Cedar Springs", "Turtle Creek", "Uptown border", "Fairmount", "Lee Park"],
    processParagraphs: [
      "Consultations are private, focused, and free of judgment. We assess your goals and present options without any unsolicited commentary on appearance.",
      "Treatment plans are built around your goals, your timeline, and your comfort level — not upsell targets.",
    ],
    faq: [
      {
        question: "Is Summer House welcoming to all clients?",
        answer:
          "Yes. We serve Oak Lawn's full community and have clients from every background. Inclusion and privacy are non-negotiables in how we practice.",
      },
      {
        question: "Do you treat male clients from Oak Lawn?",
        answer:
          "Yes. We have a significant male client base across Botox, filler, jawline slimming, and wellness programs. Discretion is standard.",
      },
    ],
  },
  {
    slug: "lower-greenville-dallas",
    name: "Lower Greenville",
    county: "Dallas County",
    latitude: 32.8200,
    longitude: -96.7670,
    summary: "Natural aesthetic care for Lower Greenville's community of younger professionals and first-time medspa clients.",
    introParagraphs: [
      "Lower Greenville has a younger, socially active demographic with growing interest in preventative aesthetics and subtle enhancement. Summer House serves this community with an approachable, education-first experience.",
      "Many Lower Greenville clients are in their late 20s or early 30s and are thinking about Botox or filler for the first time. We make that first consultation clear, honest, and pressure-free.",
    ],
    commonIssues: [
      "First-time clients from Lower Greenville most commonly ask about preventative Botox, natural lip filler, and skin care plans that address early sun damage.",
      "Event preparation is also common — clients planning for weddings, social seasons, or career milestones often come in with a specific occasion in mind.",
    ],
    neighborhoods: ["Greenville Avenue", "Belmont", "M Streets edge", "Vickery Meadow", "Ross Avenue"],
    processParagraphs: [
      "We take extra care with first-time clients to explain what treatments do, what realistic outcomes look like, and what the follow-up process involves before any plan is accepted.",
      "Conservative starting doses are standard for new clients, with the option to build over subsequent visits as comfort and confidence grow.",
    ],
    faq: [
      {
        question: "I've never had Botox — where do I start?",
        answer:
          "Start with a consultation. We review your concerns, assess your anatomy, and recommend a conservative starting plan before touching anything. No pressure, no rush.",
      },
      {
        question: "What should I expect after a first Botox appointment?",
        answer:
          "Results appear over 7 to 14 days. We schedule a 2-week follow-up to assess results and make any adjustments. Most clients are very happy after the first cycle.",
      },
    ],
  },
  {
    slug: "lake-highlands-dallas",
    name: "Lake Highlands",
    county: "Dallas County",
    latitude: 32.8708,
    longitude: -96.7070,
    summary: "Family-oriented aesthetic and wellness care for Lake Highlands clients who want practical, natural-looking results.",
    introParagraphs: [
      "Lake Highlands is an established neighborhood with a practical, family-focused client base that values transparency and straightforward care. Summer House serves Lake Highlands with the same plan-first approach we bring to every client.",
      "Most Lake Highlands clients want consistent, natural results without over-complicating their care routine. We build simple, efficient plans that fit real schedules.",
    ],
    commonIssues: [
      "Common Lake Highlands requests include Botox for forehead and eye area, modest filler for lips or under eyes, and skin quality maintenance through laser or microneedling.",
      "Medical weight management is also a frequent request for clients who want a structured, accountable program with consistent provider oversight.",
    ],
    neighborhoods: ["White Rock Valley", "Merriman Park", "Forest Meadow", "Audelia Road", "Lake Highlands Town Center"],
    processParagraphs: [
      "Consultations are efficient and practical. We assess goals, review candidacy, and present a clear plan with transparent pricing before any treatment begins.",
      "Follow-up is built into the plan from the start so results stay consistent without surprise corrections.",
    ],
    faq: [
      {
        question: "Do you see clients from Lake Highlands regularly?",
        answer:
          "Yes. Lake Highlands clients are part of our established patient base and we are familiar with common goals and concerns in this area.",
      },
      {
        question: "Can I combine Botox and a skin treatment in one visit?",
        answer:
          "Often yes, depending on candidacy and treatment sequence. We review this at consultation and structure visits to minimize total appointments.",
      },
    ],
  },
  {
    slug: "bishop-arts-dallas",
    name: "Bishop Arts District",
    county: "Dallas County",
    latitude: 32.7420,
    longitude: -96.8350,
    summary: "Boutique aesthetic care for Bishop Arts clients who appreciate artistry, natural results, and personalized treatment planning.",
    introParagraphs: [
      "Bishop Arts is home to creative, design-aware clients who care deeply about proportion, authenticity, and outcomes that look like themselves — only refreshed. Summer House is built around exactly that sensibility.",
      "Our approach to injectables and skin care is rooted in natural-outcome planning, conservative dosing, and honest assessment of what a given treatment can and cannot achieve.",
    ],
    commonIssues: [
      "Bishop Arts clients frequently request subtle facial balancing, conservative lip enhancement, and skin quality treatments that address texture and tone without dramatic downtime.",
      "Many clients in this neighborhood have strong opinions about authenticity and are specifically looking for a provider who won't over-treat or push unnecessary services.",
    ],
    neighborhoods: ["Bishop Arts District", "North Oak Cliff", "Kessler Park", "Winnetka Heights", "Davis Street"],
    processParagraphs: [
      "We approach each consultation as a creative collaboration — understanding your vision, assessing what is achievable, and mapping a plan that honors both.",
      "Conservative dosing and staged results are our standard. If you want subtle, that is what you will get.",
    ],
    faq: [
      {
        question: "I want to look like myself, not like I had something done. Can you help?",
        answer:
          "That is one of the most common goals we hear — and one of the things we do best. Our natural-outcomes approach is specifically designed for clients who want zero-trace results.",
      },
      {
        question: "Do you serve Bishop Arts clients regularly?",
        answer:
          "Yes. We have clients from Oak Cliff and the Bishop Arts area on established plans. The community's aesthetic sensibility aligns well with our approach.",
      },
    ],
  },
  {
    slug: "downtown-dallas",
    name: "Downtown Dallas",
    county: "Dallas County",
    latitude: 32.7767,
    longitude: -96.7970,
    summary: "Aesthetic and wellness care for Downtown Dallas professionals, residents, and Arts District clients.",
    introParagraphs: [
      "Downtown Dallas has transformed into a residential and professional destination, drawing clients who want high-quality aesthetic care close to where they live and work. Summer House serves Downtown clients with efficient, plan-driven consultations built around busy urban schedules.",
      "From Arts District professionals to residents in new high-rises along the Main Street corridor, we bring the same conservative, natural-outcomes philosophy to every client regardless of how they came to us.",
    ],
    commonIssues: [
      "Downtown clients frequently request neuromodulator maintenance for a polished professional appearance, skin quality improvement to address stress-related dullness, and medical wellness programs that fit demanding schedules.",
      "Event preparation is also common given the density of galas, openings, and corporate functions in the Arts District and surrounding areas.",
    ],
    neighborhoods: ["Arts District", "West End Historic District", "Main Street District", "Klyde Warren Park Area", "Victory Park"],
    processParagraphs: [
      "Consultations are structured for efficiency — we cover goals, candidacy, and a full treatment plan in a focused visit without unnecessary upsell.",
      "Most Downtown clients establish 90-day maintenance cycles that keep results consistent without disrupting work or social schedules.",
    ],
    faq: [
      {
        question: "Do you serve Downtown Dallas residents and workers?",
        answer: "Yes. Clients from the Arts District, Main Street corridor, and adjacent Downtown neighborhoods are part of our regular patient base.",
      },
      {
        question: "What treatments are most popular for Downtown professionals?",
        answer: "Conservative Botox, skin quality maintenance, and IV hydration or wellness programs are most common for clients managing demanding professional lives.",
      },
    ],
  },
  {
    slug: "deep-ellum",
    name: "Deep Ellum",
    county: "Dallas County",
    latitude: 32.7808,
    longitude: -96.7826,
    summary: "Inclusive, creative aesthetic care for Deep Ellum clients who value authenticity and natural, personal results.",
    introParagraphs: [
      "Deep Ellum's creative, independent community includes clients who approach aesthetics from a deeply personal angle — they want results that express their identity rather than conform to a trend. Summer House serves Deep Ellum with the same no-judgment, outcome-first approach we bring to every neighborhood.",
      "Natural-look clients who want to look refreshed without looking treated are particularly well-served by our conservative dosing philosophy.",
    ],
    commonIssues: [
      "Deep Ellum clients frequently request first-timer consultations, natural lip enhancement, skin quality care, and treatments that enhance without erasing personality.",
      "Many clients in this area are new to aesthetic medicine and appreciate a provider who educates without pressure.",
    ],
    neighborhoods: ["Deep Ellum", "Commerce Street", "East End", "Exposition Park", "Cedars"],
    processParagraphs: [
      "We start every consultation with a goals conversation — what the client wants to keep, what they want to change, and what natural means to them specifically.",
      "First-time clients from Deep Ellum rarely commit to treatment on the first visit, and we encourage that. Take time to think and ask questions before starting.",
    ],
    faq: [
      {
        question: "I'm creative and have a specific aesthetic — can you work with that?",
        answer: "Yes. Our job is to enhance your natural appearance in a direction that feels authentic to you, not to apply a standard template.",
      },
      {
        question: "What if I'm nervous about needles or results?",
        answer: "That is a common feeling for first-time clients. We walk through exactly what to expect, what it will look like, and how to evaluate results before committing to anything.",
      },
    ],
  },
  {
    slug: "knox-henderson",
    name: "Knox-Henderson",
    county: "Dallas County",
    latitude: 32.8288,
    longitude: -96.8005,
    summary: "Natural injectables and skin care for Knox-Henderson's socially active, style-conscious community.",
    introParagraphs: [
      "Knox-Henderson is one of Dallas's most socially active neighborhoods — clients here are appearance-aware, well-researched, and looking for a provider who matches their standards for quality and discretion. Summer House serves Knox-Henderson with boutique-level care and a conservative treatment philosophy.",
      "Most clients in this area want to look polished and refreshed without it being obvious they have had anything done. That is our default approach.",
    ],
    commonIssues: [
      "Common Knox-Henderson requests include Botox for subtle maintenance, lip filler for natural proportion, and skin quality treatment for the frequent social occasions this neighborhood generates.",
      "Pre-event preparation is particularly popular — weddings, charity events, and social gatherings are regular treatment motivators in this area.",
    ],
    neighborhoods: ["Knox Street", "Henderson Avenue", "Travis Walk", "Cole Park", "Cityplace"],
    processParagraphs: [
      "Consultation covers the full picture — what you want to address, what you want to avoid, and a realistic timeline for each.",
      "We schedule follow-up visits at the time of treatment so results are monitored and adjusted proactively.",
    ],
    faq: [
      {
        question: "What is the most popular treatment for Knox-Henderson clients?",
        answer: "Conservative Botox and natural lip filler are the most common starting points. Many clients add skin quality treatments over time.",
      },
      {
        question: "How far is Summer House from Knox-Henderson?",
        answer: "Our location on North Central Expressway is a short drive from Knox-Henderson — most clients find it convenient for regular maintenance visits.",
      },
    ],
  },
  {
    slug: "east-dallas",
    name: "East Dallas",
    county: "Dallas County",
    latitude: 32.8100,
    longitude: -96.7500,
    summary: "Neighborhood-focused aesthetic and wellness care for East Dallas families and long-established Dallas residents.",
    introParagraphs: [
      "East Dallas — including the M Streets, Munger Place, and Swiss Avenue historic corridors — has a well-established residential community that approaches aesthetics thoughtfully and values provider relationships over novelty. Summer House serves East Dallas clients with the consistency and transparency they look for.",
      "Most East Dallas clients want natural, age-appropriate results that preserve their character while addressing specific concerns. Our conservative approach is built for exactly this.",
    ],
    commonIssues: [
      "East Dallas clients commonly request Botox for expression lines, filler for volume restoration, and skin quality improvement through laser or microneedling.",
      "Medical weight management is also a frequent request among clients looking for a structured, accountable approach to long-term health goals.",
    ],
    neighborhoods: ["M Streets", "Munger Place", "Junius Heights", "Swiss Avenue Historic District", "Bryan Place", "Old East Dallas"],
    processParagraphs: [
      "We approach East Dallas clients the same way we approach every consultation: goals first, realistic expectations, conservative plan, documented follow-up.",
      "Long-term consistency matters more in this demographic than dramatic short-term results. We plan accordingly.",
    ],
    faq: [
      {
        question: "Do you serve clients from the M Streets and Munger Place areas?",
        answer: "Yes. East Dallas clients are part of our regular patient base and we are familiar with the aesthetic goals common to this community.",
      },
      {
        question: "What is the right age to start preventative Botox?",
        answer: "Most providers recommend starting in the late 20s to early 30s before lines set deeply. The dose at this stage is conservative and the goal is maintenance, not correction.",
      },
    ],
  },
  {
    slug: "mockingbird-station",
    name: "Mockingbird Station",
    county: "Dallas County",
    latitude: 32.8396,
    longitude: -96.7760,
    summary: "Convenient aesthetic and wellness care for Mockingbird Station, Vickery Place, and Hollywood Heights clients.",
    introParagraphs: [
      "The Mockingbird Station corridor attracts younger professionals and established residents who value both quality and convenience. Summer House serves this community with transparent planning and consistent, natural-looking outcomes.",
      "Whether clients are new to aesthetics or experienced and looking for a better provider, the Mockingbird area is well-represented in our patient base.",
    ],
    commonIssues: [
      "Common requests from Mockingbird area clients include preventative Botox, natural filler for lips or under eyes, and skin care plans addressing early sun damage.",
      "Medical wellness including GLP-1 programs and peptide therapy is also a growing request among younger professionals in this corridor.",
    ],
    neighborhoods: ["Mockingbird Station", "Vickery Place", "Hollywood Heights", "Lowest Greenville", "Greenville Avenue"],
    processParagraphs: [
      "Consultation maps the full treatment picture and establishes follow-up expectations before the first session begins.",
      "We schedule maintenance proactively so clients stay on track without reactive same-week appointments.",
    ],
    faq: [
      {
        question: "How often do I need to come in for Botox maintenance?",
        answer: "Most clients return every 3 to 4 months for neuromodulator maintenance. Consistent scheduling produces smoother results than waiting until effects fully wear off.",
      },
      {
        question: "Can I book filler and Botox in the same appointment?",
        answer: "Often yes, depending on candidacy and volume goals. We review this at consultation and sequence treatments appropriately.",
      },
    ],
  },
  {
    slug: "west-village-dallas",
    name: "West Village",
    county: "Dallas County",
    latitude: 32.8120,
    longitude: -96.7970,
    summary: "Natural aesthetic care for West Village and State-Thomas clients who want polished results without the overdone look.",
    introParagraphs: [
      "West Village and the State-Thomas neighborhood attract a style-conscious, appearance-aware clientele who has high expectations for both quality and subtlety. Summer House serves this community with a conservative, plan-driven approach that prioritizes natural outcomes over dramatic changes.",
      "Clients in this corridor often have experience with aesthetics and come to us after outgrowing providers who pushed too much. We build plans around less-is-more principles.",
    ],
    commonIssues: [
      "West Village clients frequently request facial balancing with filler, conservative neuromodulators, and skin quality maintenance that holds up in a high-social-visibility setting.",
      "Many clients specifically ask about correction from previous overdone work — dissolving and starting fresh is a service we manage regularly.",
    ],
    neighborhoods: ["West Village", "State-Thomas", "Uptown", "Routh Street", "Cedar Springs"],
    processParagraphs: [
      "Every plan starts with an honest assessment of the current baseline — what is working, what needs correction, and what a well-calibrated next step looks like.",
      "We document everything from the first visit so results are trackable and adjustments are informed rather than reactive.",
    ],
    faq: [
      {
        question: "Can you correct filler that was overdone elsewhere?",
        answer: "Yes. We assess existing filler, dissolve if appropriate, and create a fresh plan that prioritizes natural proportion. This is a common first visit for many clients.",
      },
      {
        question: "What is the best treatment for someone who wants zero-trace results?",
        answer: "Conservative neuromodulators and micro-filler with thoughtful placement are the best tools for zero-trace outcomes. It requires precise technique and restraint — both of which are built into our standard approach.",
      },
    ],
  },
  {
    slug: "victory-park-dallas",
    name: "Victory Park",
    county: "Dallas County",
    latitude: 32.7900,
    longitude: -96.8100,
    summary: "High-polish aesthetic and wellness care for Victory Park and Harwood District residents and professionals.",
    introParagraphs: [
      "Victory Park and the Harwood District are home to high-visibility professionals and residents who take appearance seriously. Summer House brings the same boutique-level care and natural-outcomes approach to this community.",
      "Clients in this area are typically experienced, informed, and looking for a provider who matches their standards without over-treating.",
    ],
    commonIssues: [
      "Victory Park clients most commonly request polished neuromodulator maintenance, facial balancing, and skin quality treatments that photograph and perform well in high-visibility settings.",
      "Medical wellness including GLP-1 programs and IV hydration is also common among clients managing demanding executive or social schedules.",
    ],
    neighborhoods: ["Victory Park", "American Airlines Center District", "Design District", "Harwood District", "Turtle Creek"],
    processParagraphs: [
      "Consultations are efficient and focused. We build a clear plan in one visit and schedule follow-up before the client leaves.",
      "Most Victory Park clients visit 3 to 4 times per year for aesthetics and wellness combined.",
    ],
    faq: [
      {
        question: "Do you serve Victory Park and Harwood District clients?",
        answer: "Yes. We have clients from this area on established aesthetic and wellness plans and are familiar with the goals common to this community.",
      },
      {
        question: "Can I book wellness and aesthetics in one appointment?",
        answer: "Often yes. Many clients combine IV hydration or wellness consultations with injectable maintenance in a single efficient visit.",
      },
    ],
  },
  {
    slug: "south-side-lamar",
    name: "South Side on Lamar",
    county: "Dallas County",
    latitude: 32.7680,
    longitude: -96.7900,
    summary: "Creative, inclusive aesthetic care for South Side on Lamar and Cedars clients who value authenticity.",
    introParagraphs: [
      "The South Side on Lamar and Cedars area has a vibrant creative community with clients who want aesthetic care that enhances their personal expression rather than standardizing it. Summer House serves this neighborhood with an inclusive, no-judgment approach.",
      "Whether it is a first consultation or a more experienced client looking for a reset, we bring the same honest assessment and conservative planning to every South Side visit.",
    ],
    commonIssues: [
      "South Side clients frequently ask about natural enhancement, first-timer consultation, and treatments with minimal social downtime that won't disrupt their creative or professional routines.",
      "Many clients in this area prioritize authenticity and specifically want to avoid results that look clinic-standard or overdone.",
    ],
    neighborhoods: ["South Side on Lamar", "Cedars", "Exposition Park", "Farmers Market District", "Downtown South"],
    processParagraphs: [
      "We open every consultation by asking what the client wants to keep and what they want to change — a question that shapes every recommendation we make.",
      "Conservative starting doses and staged approaches are particularly important for clients who are new to aesthetics or want to control the pace of change.",
    ],
    faq: [
      {
        question: "I don't want to look like I had anything done. Is that achievable?",
        answer: "Yes — it is the most common goal we hear and the outcome our approach is designed for. Conservative dosing and natural-outcome planning are our defaults.",
      },
      {
        question: "Do you offer consultation-only visits?",
        answer: "Yes. We encourage first-time clients to consult, ask questions, and think before committing to treatment. There is no pressure to start on the same day.",
      },
    ],
  },
  {
    slug: "little-forest-hills",
    name: "Little Forest Hills",
    county: "Dallas County",
    latitude: 32.8353,
    longitude: -96.6986,
    summary: "Neighborhood aesthetic and wellness care for Little Forest Hills, Lochwood, and Casa Linda clients.",
    introParagraphs: [
      "Little Forest Hills and the surrounding east Dallas neighborhoods have a community-first character with clients who prefer relationship-based care over high-volume, transactional medspas. Summer House is built around exactly that expectation.",
      "Most clients in this area want a provider they can rely on for consistent results and honest guidance over the long term.",
    ],
    commonIssues: [
      "Common requests include conservative Botox, natural-looking filler, and skin quality improvement for clients who spend time outdoors in the east Dallas park and lake corridors.",
      "Medical weight management is also a growing request, particularly among clients who want a supervised approach with realistic expectations.",
    ],
    neighborhoods: ["Little Forest Hills", "Lochwood", "Buckner Terrace", "Casa Linda", "Forest Hills"],
    processParagraphs: [
      "Consultations are unhurried and educational. We walk through every treatment option, expected outcome, and realistic timeline before any plan is presented.",
      "Follow-up is built into every plan so clients stay on track without reactive appointments.",
    ],
    faq: [
      {
        question: "Do you see clients from Little Forest Hills and Casa Linda?",
        answer: "Yes. We serve clients from east Dallas neighborhoods regularly and are familiar with the common aesthetic and wellness goals in this community.",
      },
      {
        question: "How do I get started if I have never been to a medspa before?",
        answer: "Book a consultation. We review your goals, answer your questions, and present a conservative plan. No obligation to start treatment on the same visit.",
      },
    ],
  },
  {
    slug: "white-rock-hills",
    name: "White Rock Hills",
    county: "Dallas County",
    latitude: 32.8250,
    longitude: -96.7100,
    summary: "Natural aesthetic care for White Rock Hills, Casa Linda Estates, and the White Rock Lake corridor.",
    introParagraphs: [
      "White Rock Hills and the lake corridor attract active, outdoors-oriented Dallas residents who accumulate sun damage and want effective, low-downtime treatments that fit their lifestyle. Summer House serves this community with laser, injectable, and wellness care designed for real schedules.",
      "Natural outcomes and skin health are the primary goals for most clients in this area. We build plans accordingly.",
    ],
    commonIssues: [
      "White Rock Hills clients frequently request Clarity II laser for sun damage and pigmentation, Botox for expression line maintenance, and skin quality care for clients active in the lake and park corridors.",
      "Many clients in this area are in their late 30s to 50s and are focused on skin health and age-appropriate maintenance rather than dramatic change.",
    ],
    neighborhoods: ["White Rock Hills", "Casa Linda Estates", "Garland Road Corridor", "White Rock Lake", "Lakewood Estates"],
    processParagraphs: [
      "We assess sun exposure history and skin health carefully at consultation and sequence treatments to protect and improve outcomes long-term.",
      "Most White Rock clients establish an annual laser and injectable maintenance cycle that keeps results consistent without excessive time in clinic.",
    ],
    faq: [
      {
        question: "I spend a lot of time outdoors. Are laser treatments safe for me?",
        answer: "With appropriate sun protection protocols and treatment timing, yes. We review sun exposure history at consultation and plan treatments to minimize risk.",
      },
      {
        question: "What is the best treatment for sun damage on the face and chest?",
        answer: "Clarity II laser is highly effective for pigmentation and sun spots. Treatment sequencing depends on area, depth, and skin type — all reviewed at consultation.",
      },
    ],
  },
  {
    slug: "skillman-corridor",
    name: "Skillman Corridor",
    county: "Dallas County",
    latitude: 32.8600,
    longitude: -96.7400,
    summary: "Accessible aesthetic and wellness care for Skillman, Abrams, and Forest Lane corridor clients in northeast Dallas.",
    introParagraphs: [
      "The Skillman-Abrams corridor is a diverse residential area with clients who value practical, results-oriented aesthetic care without the pressure or upsell of high-volume chains. Summer House offers a clear alternative.",
      "Transparent pricing, honest candidacy assessment, and a plan-first approach make us a good fit for the practical, educated clients this area attracts.",
    ],
    commonIssues: [
      "Common requests include conservative neuromodulator maintenance, skin texture improvement, and medical wellness programs with clear pricing and structured follow-up.",
      "Many clients are first-time medspa visitors who want to understand their options before committing — a consultation-first approach that we fully support.",
    ],
    neighborhoods: ["Skillman Street", "Abrams Road", "Audelia Road", "Forest Lane", "Merriman Park"],
    processParagraphs: [
      "Every consultation starts with a plain-language explanation of what treatments do, what they cost, and what realistic outcomes look like.",
      "We never recommend treatments clients did not ask about unless there is a clinical reason to mention them. Plan stays focused on the client's goals.",
    ],
    faq: [
      {
        question: "Is Summer House accessible from the Skillman and Forest Lane area?",
        answer: "Yes. Our Central Expressway location is a short drive from the Skillman corridor and easily accessible from most northeast Dallas neighborhoods.",
      },
      {
        question: "What is the most common first treatment for new clients from this area?",
        answer: "Conservative Botox for forehead or crow's feet is the most frequent starting point. Many clients then expand their plan over subsequent visits.",
      },
    ],
  },
  {
    slug: "greenway-parks",
    name: "Greenway Parks",
    county: "Dallas County",
    latitude: 32.8650,
    longitude: -96.8100,
    summary: "Discreet, natural aesthetic care for Greenway Parks, Bluffview, and Midway Hollow clients.",
    introParagraphs: [
      "Greenway Parks and the surrounding neighborhoods — Bluffview, Midway Hollow, and Briarwood — are established residential communities with clients who value privacy, consistency, and understated results. Summer House is built around all three.",
      "Most clients in this area have been coming to the same provider for years and are looking for that same relationship-based experience at a clinic that actually delivers on it.",
    ],
    commonIssues: [
      "Greenway Parks clients most commonly request natural Botox maintenance, subtle volume restoration with filler, and ongoing skin quality care.",
      "Discretion and same-provider continuity are especially important to clients in this area who have had inconsistent experiences at larger medspas.",
    ],
    neighborhoods: ["Greenway Parks", "Bluffview", "Midway Hollow", "Briarwood", "Lovers Lane"],
    processParagraphs: [
      "We build plans around long-term relationships, not individual transactions. Every client leaves with a documented plan and follow-up scheduled.",
      "Provider consistency is one of our core differentiators — most clients in this area stay with the same provider across every visit.",
    ],
    faq: [
      {
        question: "Do you guarantee I will see the same provider every visit?",
        answer: "We prioritize same-provider continuity and will do our best to schedule you consistently. This is one of the most important things to us and to the clients we attract.",
      },
      {
        question: "What if I want to start very conservatively?",
        answer: "Conservative is our default. We start with the minimum effective dose and adjust at follow-up, never the other way around.",
      },
    ],
  },
  {
    slug: "inwood-lovers-lane",
    name: "Inwood / Lovers Lane",
    county: "Dallas County",
    latitude: 32.8665,
    longitude: -96.8435,
    summary: "Polished, discreet medspa care for Inwood Village, Lovers Lane, and Preston Center clients.",
    introParagraphs: [
      "The Inwood and Lovers Lane corridor runs through some of Dallas's most established residential neighborhoods, with clients who have high expectations and a clear sense of what they want. Summer House serves this community with the consistency and quality they expect.",
      "Preston Center, Snider Plaza, and Inwood Village clients particularly appreciate our transparent planning approach and conservative treatment defaults.",
    ],
    commonIssues: [
      "Most clients in this area request ongoing neuromodulator maintenance, subtle facial balancing, and skin quality treatments to address aging and sun exposure.",
      "Some clients are also interested in medical weight management or peptide wellness as part of a broader health and appearance plan.",
    ],
    neighborhoods: ["Inwood Village", "Lovers Lane", "Royal Lane", "Preston Center", "Snider Plaza"],
    processParagraphs: [
      "We document treatment history, baseline photos, and client goals from the first visit to support consistent outcomes across every subsequent appointment.",
      "Most Inwood area clients visit quarterly for aesthetics and semi-annually for wellness program check-ins.",
    ],
    faq: [
      {
        question: "How does Summer House compare to the medspas near Preston Center?",
        answer: "We offer a more relationship-driven, personalized approach. Provider consistency, conservative planning, and documented long-term plans set us apart from higher-volume options.",
      },
      {
        question: "Can I get a detailed plan at consultation without committing to treatment?",
        answer: "Yes. We present full plans — including sequencing, pricing, and follow-up — at consultation with no obligation to start the same day.",
      },
    ],
  },
  {
    slug: "far-north-dallas",
    name: "Far North Dallas",
    county: "Dallas County",
    latitude: 32.9800,
    longitude: -96.8100,
    summary: "Conservative aesthetic and medical wellness care for Far North Dallas, Prestonwood, and Bent Tree clients.",
    introParagraphs: [
      "Far North Dallas — spanning Prestonwood, Bent Tree, and Northwood Hills — has an established professional and family demographic that places high value on natural results and long-term relationships with their provider. Summer House is built around exactly that.",
      "Clients from this area often come to us after experiencing high-turnover or over-treatment elsewhere. We respond with conservative defaults and thorough planning.",
    ],
    commonIssues: [
      "Far North Dallas clients most frequently request Botox maintenance, facial balancing with filler, and skin quality programs that address accumulated sun exposure.",
      "Medical weight loss and peptide wellness programs are also common, particularly for clients who want a structured, supervised approach with monthly follow-up.",
    ],
    neighborhoods: ["Prestonwood", "Bent Tree", "Northwood Hills", "Lake Highlands North", "Preston Highlands"],
    processParagraphs: [
      "Consultations are thorough, unhurried, and focused on long-term outcome. We map a full plan at the first visit and schedule all follow-up before the client leaves.",
      "Far North Dallas clients typically visit 3 to 4 times per year and maintain consistent results through structured maintenance rather than reactive appointments.",
    ],
    faq: [
      {
        question: "Is the drive from Far North Dallas to Summer House manageable?",
        answer: "Most Far North Dallas clients find Central Expressway straightforward. Once a plan is established, most visit quarterly and find the scheduling efficient.",
      },
      {
        question: "Do you offer membership or maintenance packages?",
        answer: "Yes. Membership pathways are available and designed for clients who maintain both aesthetic and wellness care on regular schedules.",
      },
    ],
  },
  {
    slug: "galleria-dallas",
    name: "Galleria / LBJ Corridor",
    county: "Dallas County",
    latitude: 32.9283,
    longitude: -96.8187,
    summary: "Sophisticated aesthetic and wellness care for Galleria area, LBJ Freeway, and Brookhaven clients.",
    introParagraphs: [
      "The Galleria and LBJ corridor is one of Dallas's busiest professional zones, with clients who need efficient, high-quality aesthetic care that fits demanding corporate and travel schedules. Summer House delivers on that expectation with structured consultations and clear plans.",
      "Brookhaven and the surrounding Tollway neighborhoods have a high concentration of professionals who want natural-looking, maintenance-focused results without excessive downtime.",
    ],
    commonIssues: [
      "Galleria area clients frequently request conservative Botox, skin quality maintenance, and medical wellness programs — particularly GLP-1 and IV hydration — for clients managing high-energy professional lives.",
      "Many clients consolidate aesthetic and wellness appointments to minimize total trips and maximize the value of each visit.",
    ],
    neighborhoods: ["Galleria Area", "LBJ Corridor", "Belt Line Road", "Brookhaven", "North Dallas Tollway"],
    processParagraphs: [
      "We build treatment plans around professional schedules and consolidate services efficiently to minimize client time away from work.",
      "Most Galleria clients establish quarterly maintenance cycles for aesthetics and check in semi-annually for wellness programs.",
    ],
    faq: [
      {
        question: "Do you serve Galleria and Brookhaven area clients regularly?",
        answer: "Yes. The LBJ corridor is well-represented in our patient base and we are familiar with the goals and schedules common to this area.",
      },
      {
        question: "What treatments have the least downtime for corporate clients?",
        answer: "Neuromodulators have minimal visible downtime. Many laser treatments can also be scheduled with predictable recovery. We plan around your schedule at consultation.",
      },
    ],
  },
  {
    slug: "north-oak-cliff",
    name: "North Oak Cliff",
    county: "Dallas County",
    latitude: 32.7620,
    longitude: -96.8300,
    summary: "Inclusive, community-forward aesthetic care for Kessler Park, Winnetka Heights, and North Oak Cliff clients.",
    introParagraphs: [
      "North Oak Cliff — home to Kessler Park, Winnetka Heights, and Stevens Park — has one of Dallas's most distinct residential characters: community-oriented, design-aware, and skeptical of anything that feels corporate or impersonal. Summer House fits naturally into this community because we operate the same way.",
      "We bring the same relationship-based, conservative approach to Oak Cliff clients that we bring to every neighborhood — no upsell, no pressure, no one-size-fits-all plans.",
    ],
    commonIssues: [
      "North Oak Cliff clients frequently request natural-outcome treatments, first-timer consultations, and skin quality care that fits an active, outdoors-oriented lifestyle.",
      "Many clients are making their first medspa visit and specifically chose us because of our conservative reputation.",
    ],
    neighborhoods: ["Kessler Park", "Winnetka Heights", "Stevens Park", "Wynnewood", "Elmwood"],
    processParagraphs: [
      "Consultations start with what the client wants to keep unchanged — an important first question that shapes everything we recommend.",
      "We work at the pace the client is comfortable with. First visits are often consultation-only, and that is perfectly fine.",
    ],
    faq: [
      {
        question: "Is Summer House welcoming to Oak Cliff clients?",
        answer: "Yes. We have clients from Kessler Park, Winnetka Heights, and the broader Oak Cliff area on established plans.",
      },
      {
        question: "What does a first medspa visit look like?",
        answer: "We discuss your goals, review your skin and health history, and present a conservative plan. Most first-time clients leave with a plan and schedule their first treatment on a second visit.",
      },
    ],
  },
  {
    slug: "south-dallas-fair-park",
    name: "Fair Park / South Dallas",
    county: "Dallas County",
    latitude: 32.7800,
    longitude: -96.7500,
    summary: "Accessible aesthetic care for Fair Park and South Dallas clients with transparent pricing and inclusive service.",
    introParagraphs: [
      "Fair Park and South Dallas have a historically underserved client base when it comes to accessible, quality aesthetic care. Summer House welcomes clients from this area with the same transparent, inclusive approach we bring to every neighborhood.",
      "We are committed to clear pricing, honest candidacy assessment, and treatments that address real concerns — not upsell targets.",
    ],
    commonIssues: [
      "Clients from Fair Park and South Dallas frequently ask about first-time injectable services, skin quality treatments, and medical wellness programs with clear, manageable pricing.",
      "Many clients are first-timers who need a provider who takes time to explain options before recommending treatment.",
    ],
    neighborhoods: ["Fair Park", "South Dallas", "Expo Park", "South Boulevard", "Forest District"],
    processParagraphs: [
      "Consultations are educational and unhurried. We explain every option clearly and never present recommendations that exceed what the client asked for.",
      "Financing options are available and reviewed at consultation for clients who want to begin treatment but need flexible payment timing.",
    ],
    faq: [
      {
        question: "Do you offer payment plans for aesthetic treatment?",
        answer: "Yes. Financing options are available and discussed at consultation. We aim to make consistent aesthetic care accessible regardless of budget.",
      },
      {
        question: "I've never been to a medspa — what should I expect?",
        answer: "Expect a conversation, not a sales pitch. We review your goals, explain your options, and present a plan with transparent pricing. No obligation to start the same day.",
      },
    ],
  },
  {
    slug: "trinity-groves",
    name: "Trinity Groves",
    county: "Dallas County",
    latitude: 32.7742,
    longitude: -96.8650,
    summary: "Creative, inclusive aesthetic care for Trinity Groves and West Dallas clients who want authenticity over trends.",
    introParagraphs: [
      "Trinity Groves and West Dallas have developed into a vibrant cultural district with a diverse, design-conscious community that cares about authenticity. Summer House serves Trinity Groves clients with the same no-judgment, natural-outcome approach we bring to every neighborhood.",
      "Results that look intentional and personal — not clinic-standard or trend-driven — are the goal for most clients in this area.",
    ],
    commonIssues: [
      "Trinity Groves clients frequently request natural enhancement, first-timer consultations, and treatments that preserve their personal aesthetic rather than standardizing it.",
      "Skin quality care with minimal visible downtime is also popular, particularly for clients who are active in the restaurant and arts scene this district has grown around.",
    ],
    neighborhoods: ["Trinity Groves", "West Dallas", "Calatrava Bridge Area", "Sylvan | Thirty", "La Bajada"],
    processParagraphs: [
      "We start every consultation by asking what the client wants to feel better about — not what we think they should change.",
      "Conservative dosing and staged plans are standard, particularly for first-time clients in this area.",
    ],
    faq: [
      {
        question: "Do you serve Trinity Groves and West Dallas clients?",
        answer: "Yes. We welcome clients from this area and are familiar with the aesthetic values common to the Trinity Groves community.",
      },
      {
        question: "What treatments are best for someone who wants minimal change?",
        answer: "Conservative Botox and micro-filler applied with restraint produce the most natural, barely-there results. These are our defaults for clients who want subtle outcomes.",
      },
    ],
  },
  {
    slug: "love-field-dallas",
    name: "Love Field / Medical District",
    county: "Dallas County",
    latitude: 32.8468,
    longitude: -96.8518,
    summary: "Aesthetic and wellness care near Love Field and the UT Southwestern Medical District.",
    introParagraphs: [
      "The Love Field and Medical District corridor attracts healthcare professionals, frequent travelers, and Bachman Lake area residents who want efficient, evidence-based aesthetic care. Summer House serves this community with the same clinical rigor and transparent planning our provider community appreciates.",
      "Healthcare professionals in particular come to us because they understand the difference between evidence-based treatment planning and trend-driven selling — and our approach aligns with what they expect.",
    ],
    commonIssues: [
      "Medical District clients frequently request Botox and filler plans with clear clinical rationale, skin quality improvement, and wellness programs including GLP-1 and IV hydration.",
      "Many clients in this area travel frequently and need a provider who can accommodate variable schedules and consolidate services efficiently.",
    ],
    neighborhoods: ["Love Field", "Medical District", "UT Southwestern Area", "Bachman Lake", "Royal Lane"],
    processParagraphs: [
      "We welcome detailed clinical questions and provide clear rationale for every recommendation. Healthcare professional clients appreciate this approach.",
      "Appointment scheduling is flexible and we work to consolidate services for clients with variable travel schedules.",
    ],
    faq: [
      {
        question: "Do you treat healthcare professionals from UT Southwestern?",
        answer: "Yes. We have clients from the UT Southwestern and Medical District community on established aesthetic and wellness plans.",
      },
      {
        question: "What evidence supports the treatments you offer?",
        answer: "We are happy to discuss the clinical evidence behind every treatment we offer. Our approach is grounded in clinical guidelines, not trend-based selling.",
      },
    ],
  },
  {
    slug: "farmers-branch",
    name: "Farmers Branch",
    county: "Dallas County",
    latitude: 32.9268,
    longitude: -96.8836,
    summary: "Natural aesthetic and wellness care for Farmers Branch clients between Addison and Carrollton.",
    introParagraphs: [
      "Farmers Branch sits at the intersection of several strong suburban markets and attracts practical, value-conscious clients who want quality care without the upsell pressure common at larger chains. Summer House is a natural fit.",
      "Most clients from Farmers Branch are looking for a reliable provider relationship — consistent outcomes, honest guidance, and clear pricing — rather than novelty or frequent provider changes.",
    ],
    commonIssues: [
      "Common requests from Farmers Branch include Botox for maintenance, natural filler for subtle volume, and laser or microneedling for skin texture improvement.",
      "Medical weight management is also popular, particularly for clients who want supervised care with structured monthly check-ins.",
    ],
    neighborhoods: ["Farmers Branch", "Mercer Crossing", "Sandy Lake Road", "Valwood", "Promenade"],
    processParagraphs: [
      "Consultations cover goals, candidacy, and a realistic treatment timeline with transparent pricing before any plan begins.",
      "We schedule follow-up at the time of treatment so results are monitored and the plan stays on track.",
    ],
    faq: [
      {
        question: "Is Farmers Branch within your regular service area?",
        answer: "Yes. We see clients from Farmers Branch regularly and are familiar with the goals common to this community.",
      },
      {
        question: "Do you offer financing?",
        answer: "Yes. Financing options are reviewed at consultation for clients who want to begin treatment across multiple services.",
      },
    ],
  },
  {
    slug: "coppell",
    name: "Coppell",
    county: "Dallas County",
    latitude: 32.9543,
    longitude: -97.0151,
    summary: "Boutique aesthetic and wellness care for Coppell's affluent, family-focused community.",
    introParagraphs: [
      "Coppell is one of North Texas's most consistently affluent communities, with residents who have high expectations for quality and a preference for trusted, relationship-based providers. Summer House serves Coppell with the same boutique-level care we bring to every client.",
      "Most Coppell clients want natural, polished results and a provider they can see consistently over time rather than a different face each visit.",
    ],
    commonIssues: [
      "Coppell clients frequently request Botox and filler for natural maintenance, skin quality programs, and medical wellness plans for active, health-conscious households.",
      "Pre-event preparation is also common given the active social and school-event calendar many Coppell families maintain.",
    ],
    neighborhoods: ["Old Town Coppell", "Moore Road Corridor", "Northlake", "Denton Creek", "MacArthur Park"],
    processParagraphs: [
      "We plan around the long-term relationship, not the single visit. Every client leaves with a documented plan and follow-up scheduled.",
      "Coppell clients who combine aesthetic and wellness services see better outcomes because we can coordinate across all their health and appearance goals.",
    ],
    faq: [
      {
        question: "Do you serve Coppell clients regularly?",
        answer: "Yes. We have established clients from Coppell and are familiar with the goals and expectations of this community.",
      },
      {
        question: "What is the most effective treatment for maintaining skin quality year-round?",
        answer: "A combination of laser for pigmentation, neuromodulators for expression lines, and a solid home-care routine produces the most consistent year-round results.",
      },
    ],
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    county: "Dallas County",
    latitude: 32.7668,
    longitude: -96.5992,
    summary: "Accessible, natural aesthetic and wellness care for Mesquite and east Dallas County clients.",
    introParagraphs: [
      "Mesquite is one of Dallas County's largest suburban cities with a diverse client base that values practical, accessible aesthetic care. Summer House serves Mesquite clients with transparent pricing, honest assessment, and a conservative treatment approach.",
      "Many Mesquite clients are first-time medspa visitors who want to understand their options clearly before committing. We welcome that approach.",
    ],
    commonIssues: [
      "Common requests from Mesquite include first-timer Botox consultations, natural filler for subtle enhancement, and skin quality improvement through laser or chemical peels.",
      "Medical weight management programs are also popular for clients who want structured, accountable support for long-term health goals.",
    ],
    neighborhoods: ["Downtown Mesquite", "Mesquite Rodeo District", "Skyline Estates", "Sunridge", "Florence Hill"],
    processParagraphs: [
      "Every consultation starts with education — we explain what treatments do, what realistic outcomes look like, and what the follow-up process involves.",
      "Conservative starting doses are standard for new clients. We build from there over subsequent visits based on results and goals.",
    ],
    faq: [
      {
        question: "Is it worth driving from Mesquite to Summer House?",
        answer: "Many Mesquite clients tell us the care quality justifies the drive. Once a plan is established, most visit quarterly and find the scheduling efficient.",
      },
      {
        question: "What is the most popular first treatment for Mesquite clients?",
        answer: "Conservative Botox for forehead and crow's feet is the most common starting point. Most clients expand their plan after seeing initial results.",
      },
    ],
  },
  {
    slug: "rowlett",
    name: "Rowlett",
    county: "Dallas County",
    latitude: 32.9029,
    longitude: -96.5637,
    summary: "Natural aesthetic and wellness care for Rowlett and Lake Ray Hubbard area clients.",
    introParagraphs: [
      "Rowlett's lakeside community has an active, outdoor-oriented lifestyle that accumulates sun exposure and generates consistent demand for skin quality and injectable maintenance. Summer House serves Rowlett clients with a laser and aesthetics approach calibrated for Texas outdoor living.",
      "Clients from Rowlett and the Heath area who make the drive to our Dallas location consistently cite the provider quality and outcome consistency as worth it.",
    ],
    commonIssues: [
      "Rowlett clients frequently request laser treatment for sun damage and pigmentation, conservative Botox maintenance, and skin quality programs that address outdoor exposure.",
      "Medical weight management and wellness programs are also popular among clients with active lifestyles who want health and aesthetic goals addressed together.",
    ],
    neighborhoods: ["Rowlett Town Center", "Lake Ray Hubbard", "Lakeview", "Springfield", "Waterview"],
    processParagraphs: [
      "We factor sun exposure history into every laser and skin treatment plan and educate clients on protection protocols that extend results.",
      "Rowlett clients typically consolidate services per visit to minimize total trips. Most establish quarterly or semi-annual treatment cycles.",
    ],
    faq: [
      {
        question: "What is the best treatment for skin damaged by Lake Ray Hubbard sun?",
        answer: "Clarity II laser is very effective for sun damage, pigmentation, and vascular concerns. Most clients see meaningful improvement in 2 to 3 sessions.",
      },
      {
        question: "Do you serve Rowlett and Heath clients?",
        answer: "Yes. We have clients from the Rowlett area on established plans. The drive to Central Expressway is manageable for most clients once a schedule is set.",
      },
    ],
  },
  {
    slug: "desoto",
    name: "DeSoto",
    county: "Dallas County",
    latitude: 32.5898,
    longitude: -96.8572,
    summary: "Natural aesthetic and wellness care for DeSoto and south Dallas County clients.",
    introParagraphs: [
      "DeSoto is a growing south Dallas County community with clients who want quality aesthetic care without driving to the Galleria or spending the prices that go with it. Summer House offers genuine quality at a reasonable distance.",
      "Clients from DeSoto and surrounding south Dallas County communities are typically practical, value-conscious, and looking for a provider they can trust consistently.",
    ],
    commonIssues: [
      "DeSoto clients commonly request first-timer consultations, conservative Botox, and natural enhancement that fits a working professional's lifestyle and budget.",
      "Medical weight management with GLP-1 programs is also a frequent request, particularly for clients who want structured monthly support.",
    ],
    neighborhoods: ["DeSoto Town Center", "Pleasant Run Road", "Cockrell Hill Road", "Hampton Road", "Westridge"],
    processParagraphs: [
      "Consultations are educational and pressure-free. We explain every option clearly and present realistic plans with transparent pricing.",
      "Financing options are available for clients who want to start treatment across multiple services.",
    ],
    faq: [
      {
        question: "How far is Summer House from DeSoto?",
        answer: "Our Central Expressway location is approximately 20 to 25 minutes from DeSoto depending on traffic. Most clients find the drive manageable for quarterly visits.",
      },
      {
        question: "What is the most affordable way to start with medspa treatments?",
        answer: "Conservative Botox for one treatment area is typically the most cost-effective starting point. We discuss all options and pricing at consultation.",
      },
    ],
  },
  {
    slug: "cedar-hill",
    name: "Cedar Hill",
    county: "Dallas County",
    latitude: 32.5885,
    longitude: -96.9561,
    summary: "Accessible aesthetic and wellness care for Cedar Hill and southwest Dallas County clients.",
    introParagraphs: [
      "Cedar Hill and Uptown Village draw clients who are increasingly interested in aesthetic medicine but want a provider who takes the time to explain their options rather than push treatment. Summer House is that provider.",
      "We serve Cedar Hill clients with the same transparent, conservative approach we bring to every community — clear goals, honest candidacy assessment, and a plan that fits real life.",
    ],
    commonIssues: [
      "Common requests from Cedar Hill include first-time injectable consultations, skin quality improvement, and medical weight management programs with structured follow-up.",
      "Many clients are bringing aesthetic care into their health routine for the first time and want a provider who teaches, not just treats.",
    ],
    neighborhoods: ["Cedar Hill Town Center", "Cedar Hill State Park Area", "Belt Line Road", "FM 1382", "Uptown Village"],
    processParagraphs: [
      "We welcome first-time clients and focus heavily on education — explaining what treatments do, what realistic outcomes look like, and what the follow-up timeline involves.",
      "Conservative starting doses are our standard. We build confidence over subsequent visits rather than pushing maximum results immediately.",
    ],
    faq: [
      {
        question: "Is Summer House accessible from Cedar Hill?",
        answer: "Yes. Our Dallas location is reachable from Cedar Hill via US-67 or I-35E. Most clients find the drive manageable for quarterly maintenance.",
      },
      {
        question: "Can I just come in for information without booking treatment?",
        answer: "Yes. Consultation-only visits are available and encouraged for clients who want to understand their options before committing to anything.",
      },
    ],
  },
  {
    slug: "duncanville",
    name: "Duncanville",
    county: "Dallas County",
    latitude: 32.6519,
    longitude: -96.9086,
    summary: "Natural aesthetic care and medical wellness programs serving Duncanville and southwest Dallas County.",
    introParagraphs: [
      "Duncanville clients are practical and community-minded, looking for aesthetic care that delivers real results without the pressure tactics common at volume-driven chains. Summer House offers an honest alternative.",
      "We serve Duncanville clients with the same transparent, conservative approach we bring to all communities — every plan starts with goals, not upsell.",
    ],
    commonIssues: [
      "Duncanville clients frequently request conservative Botox, natural filler, and skin care programs that address common Texas aging concerns including sun damage and fine lines.",
      "Medical weight management is also a growing request as GLP-1 programs become more widely known in south Dallas County communities.",
    ],
    neighborhoods: ["Duncanville Town Center", "Camp Wisdom Road", "Main Street", "Wheatland Road", "Lynn Creek"],
    processParagraphs: [
      "Consultations cover goals and history, present a realistic plan with clear pricing, and leave room for the client to make an informed decision at their own pace.",
      "Follow-up is built into every plan from the start so results stay on track without reactive last-minute appointments.",
    ],
    faq: [
      {
        question: "How far is Duncanville from Summer House?",
        answer: "Duncanville is approximately 20 to 30 minutes from our Central Expressway location via US-67 or I-35E, depending on traffic.",
      },
      {
        question: "What is the most popular treatment for new clients from Duncanville?",
        answer: "Conservative Botox for forehead or crow's feet is the most common starting point. Most clients return for additional services after seeing initial results.",
      },
    ],
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    county: "Dallas County",
    latitude: 32.5921,
    longitude: -96.7561,
    summary: "Accessible, inclusive aesthetic and wellness care for Lancaster and south Dallas County clients.",
    introParagraphs: [
      "Lancaster clients want quality aesthetic care that is accessible, honestly priced, and free of the pressure tactics that drive many clients away from medspas entirely. Summer House delivers on all three.",
      "We serve Lancaster and the broader south Dallas County area with a transparent, education-first approach that welcomes first-time clients.",
    ],
    commonIssues: [
      "Common requests from Lancaster include first-time injectable consultations, skin quality improvement, and medical weight management programs with realistic pricing.",
      "Many clients are looking for a provider who explains their options clearly and does not add services they did not ask about.",
    ],
    neighborhoods: ["Lancaster Town Center", "Historic Square", "Belt Line Road", "Pleasant Run", "Lake Ridge"],
    processParagraphs: [
      "Every consultation is educational and pressure-free. We explain candidacy, treatment options, and pricing honestly before any plan is presented.",
      "Financing options are available for clients who want to begin treatment and need flexible payment timing.",
    ],
    faq: [
      {
        question: "Is Summer House accessible from Lancaster?",
        answer: "Our Central Expressway location is accessible from Lancaster via I-35E. The drive is manageable for clients who establish a quarterly maintenance schedule.",
      },
      {
        question: "What should I expect at my first consultation?",
        answer: "A conversation about your goals, an honest assessment, and a clear plan with pricing. No obligation to start treatment on the same visit.",
      },
    ],
  },
  {
    slug: "sachse",
    name: "Sachse",
    county: "Collin County",
    latitude: 32.9760,
    longitude: -96.5690,
    summary: "Natural aesthetic and wellness care for Sachse and east Collin County families.",
    introParagraphs: [
      "Sachse is a growing east Collin County community with a family-focused, practical client base that values transparency and a provider they can rely on consistently. Summer House serves Sachse with the same conservative, relationship-based approach we bring to every community.",
      "Many Sachse clients are new to aesthetic medicine and appreciate a provider who explains their options rather than simply recommending the most expensive treatment.",
    ],
    commonIssues: [
      "Sachse clients commonly request first-time injectable consultations, conservative Botox for maintenance, and natural lip or under-eye enhancement.",
      "Medical weight management and wellness programs are also popular among Sachse families looking for comprehensive health and appearance support.",
    ],
    neighborhoods: ["Sachse Town Center", "Bunker Hill Road", "Ranch Road", "Liberty Grove", "Woodbridge"],
    processParagraphs: [
      "Consultations are educational and focused on what the client actually wants — not what maximizes the treatment bill.",
      "Conservative starting doses and staged plans are standard, especially for first-time clients in this area.",
    ],
    faq: [
      {
        question: "How far is Sachse from Summer House?",
        answer: "Sachse is approximately 25 to 35 minutes from our Central Expressway location, depending on traffic on I-30 or US-75.",
      },
      {
        question: "Is this a good area for first-time Botox clients?",
        answer: "Yes. Many of our Sachse clients are first-timers. We start conservatively, explain everything, and build the plan at your pace.",
      },
    ],
  },
  {
    slug: "wylie",
    name: "Wylie",
    county: "Collin County",
    latitude: 33.0151,
    longitude: -96.5389,
    summary: "Natural aesthetic and wellness care for Wylie and east Collin County clients near Lake Lavon.",
    introParagraphs: [
      "Wylie is a fast-growing east Collin County city with a family-oriented, community-minded client base. Summer House serves Wylie with accessible, transparent aesthetic care that welcomes both first-time and experienced clients.",
      "Most Wylie clients are looking for a provider who is honest about candidacy, realistic about results, and committed to long-term consistency rather than one-time treatment.",
    ],
    commonIssues: [
      "Wylie clients frequently request conservative Botox, natural filler for lips or under eyes, and skin quality treatment for clients active outdoors near Lake Lavon.",
      "Medical weight management is a growing category in Wylie, particularly for clients who want structured medical oversight for GLP-1 programs.",
    ],
    neighborhoods: ["Wylie Town Center", "Brown Street", "FM 544", "Ballard Avenue", "Lake Lavon"],
    processParagraphs: [
      "We start every consultation with a clear goals conversation and candidacy review before presenting any treatment option or pricing.",
      "Conservative starting doses are our default for first-time clients. We build from there based on results and goals.",
    ],
    faq: [
      {
        question: "Do you serve Wylie clients?",
        answer: "Yes. We have clients from Wylie and east Collin County on established plans. Most find the drive to our Dallas location manageable for quarterly visits.",
      },
      {
        question: "What are the best treatments for someone new to aesthetics?",
        answer: "Conservative Botox for one or two areas is the most common starting point. A consultation helps identify the right first step based on your specific goals.",
      },
    ],
  },
  {
    slug: "murphy",
    name: "Murphy",
    county: "Collin County",
    latitude: 33.0151,
    longitude: -96.6109,
    summary: "Family-focused aesthetic and wellness care for Murphy, Texas between Sachse and Plano.",
    introParagraphs: [
      "Murphy is a small but growing Collin County city with a tight-knit, family-focused community. Clients from Murphy typically want aesthetic care that is natural, practical, and from a provider they can trust repeatedly.",
      "Summer House serves Murphy with the same conservative, transparent approach that makes us a natural fit for communities that value relationships over volume.",
    ],
    commonIssues: [
      "Murphy clients most commonly request conservative Botox, natural filler, and skin quality improvement through laser or chemical peels.",
      "Medical wellness programs including GLP-1 and peptide therapy are also increasingly popular among Murphy's health-conscious families.",
    ],
    neighborhoods: ["Murphy Town Center", "FM 544", "Spring Meadow", "Creekside", "Maxwell Creek"],
    processParagraphs: [
      "Consultations cover goals, candidacy, and a realistic plan with transparent pricing. We do not add recommendations beyond what the client asked about.",
      "Most Murphy clients visit quarterly for maintenance and schedule their next appointment before leaving each visit.",
    ],
    faq: [
      {
        question: "Is Summer House a good fit for Murphy residents?",
        answer: "Yes. Our conservative, relationship-based approach is well-suited to the community-oriented clients Murphy tends to attract.",
      },
      {
        question: "How often do I need to come in for maintenance?",
        answer: "Most clients return every 3 to 4 months for Botox and twice a year for laser or skin treatments. We schedule everything at consultation.",
      },
    ],
  },
  {
    slug: "parker-texas",
    name: "Parker",
    county: "Collin County",
    latitude: 33.0490,
    longitude: -96.6269,
    summary: "Boutique aesthetic care for Parker's affluent, privacy-conscious community in Collin County.",
    introParagraphs: [
      "Parker is one of Collin County's most affluent and private communities, with residents who place a high value on discretion, quality, and a provider relationship they can maintain over years rather than shopping around. Summer House serves Parker with exactly that kind of care.",
      "Most Parker clients want results that look natural and personal — not clinical or trend-driven. Our conservative approach and same-provider continuity are exactly what this community looks for.",
    ],
    commonIssues: [
      "Parker clients most commonly request natural Botox maintenance, subtle filler for facial balancing, and skin quality care through laser or PRP treatments.",
      "Medical wellness including peptide therapy and structured wellness programs are also popular among Parker's health-conscious, active households.",
    ],
    neighborhoods: ["Parker", "McMillen Farm", "Castlegate", "Spring Hill", "Hunters Glen"],
    processParagraphs: [
      "Consultations are private, thorough, and focused on the long-term plan rather than the individual treatment session.",
      "Parker clients typically visit 3 to 4 times per year and value the same-provider continuity that Summer House prioritizes.",
    ],
    faq: [
      {
        question: "Do you serve Parker, Texas clients?",
        answer: "Yes. We have clients from Parker on established plans. The drive to our Dallas location is manageable from most Parker neighborhoods.",
      },
      {
        question: "How do you handle client privacy?",
        answer: "All consultations and treatment records are strictly confidential. We do not discuss patient information or acknowledge client relationships outside of care.",
      },
    ],
  },
  {
    slug: "bedford-euless-hurst",
    name: "Bedford / Euless / Hurst",
    county: "Tarrant County",
    latitude: 32.8440,
    longitude: -97.1431,
    summary: "Natural aesthetic and wellness care for the HEB mid-cities area between Fort Worth and DFW Airport.",
    introParagraphs: [
      "The Bedford-Euless-Hurst corridor — known as the HEB area — is a dense mid-cities market with a diverse, practical client base that values quality care at fair prices. Summer House serves HEB clients with transparent pricing, honest candidacy assessment, and conservative treatment planning.",
      "Many HEB clients are balancing busy family and work schedules and need a provider who plans efficiently and respects their time.",
    ],
    commonIssues: [
      "HEB clients commonly request Botox for forehead and eye area maintenance, natural lip filler, and skin quality improvement through laser or microneedling.",
      "Medical weight management and wellness programs are also popular among the area's health-conscious working professionals.",
    ],
    neighborhoods: ["Bedford", "Euless", "Hurst", "Mid-Cities", "Central Park"],
    processParagraphs: [
      "We build treatment plans that consolidate services and minimize total visits without sacrificing outcome quality.",
      "Most HEB clients establish 3 to 4 appointment cycles per year across aesthetics and wellness.",
    ],
    faq: [
      {
        question: "How far is the HEB area from Summer House?",
        answer: "Our Dallas location is approximately 30 to 40 minutes from the HEB area via I-35E or the DFW connector depending on traffic.",
      },
      {
        question: "What treatments work best for clients who can only come in a few times per year?",
        answer: "We can plan for clients who visit 3 to 4 times per year. We consolidate services efficiently and schedule maintenance proactively.",
      },
    ],
  },
  {
    slug: "colleyville",
    name: "Colleyville",
    county: "Tarrant County",
    latitude: 32.8882,
    longitude: -97.1502,
    summary: "High-quality aesthetic and wellness care for Colleyville's affluent, appearance-conscious community.",
    introParagraphs: [
      "Colleyville is one of North Texas's most consistently affluent communities, with clients who expect high-quality, discreet aesthetic care from a provider they trust over time. Summer House serves Colleyville with boutique-level care and a natural-outcomes philosophy that matches the community's expectations.",
      "Southlake and Grapevine are neighbors, and Colleyville clients share their peers' expectation for polished, understated results. Our conservative approach is built for exactly this.",
    ],
    commonIssues: [
      "Colleyville clients most often request Botox and filler for natural maintenance, skin quality programs, and medical wellness plans that support both appearance and overall health.",
      "Pre-event preparation for charity events, weddings, and school functions is also a frequent driver of treatment timing in this community.",
    ],
    neighborhoods: ["Colleyville Centre", "Glade Road", "Cheek-Sparger", "Precinct Line Road", "Heritage"],
    processParagraphs: [
      "Consultations are thorough and unhurried. We build the full plan at the first visit and schedule follow-up before the client leaves.",
      "Most Colleyville clients visit 3 to 4 times per year and appreciate the same-provider consistency we prioritize.",
    ],
    faq: [
      {
        question: "Do you serve Colleyville clients?",
        answer: "Yes. We have clients from Colleyville on established aesthetic and wellness plans and are familiar with the goals and expectations of this community.",
      },
      {
        question: "What is the best treatment for someone who wants discreet, polished results?",
        answer: "Conservative neuromodulators and micro-filler with thoughtful placement produce the most discreet, polished outcomes. These are our defaults.",
      },
    ],
  },
  {
    slug: "keller-texas",
    name: "Keller",
    county: "Tarrant County",
    latitude: 32.9343,
    longitude: -97.2290,
    summary: "Natural aesthetic and wellness care for Keller and north Tarrant County clients.",
    introParagraphs: [
      "Keller is a growing north Tarrant County community with a strong family culture and a client base that values natural results, honest providers, and efficient scheduling. Summer House serves Keller clients with the same transparent, conservative philosophy we bring to every market.",
      "Most Keller clients are looking for a provider they can see consistently over time rather than rotating through whoever is most convenient in the moment.",
    ],
    commonIssues: [
      "Keller clients frequently request conservative Botox, natural filler, and skin quality improvement through laser or chemical peel treatments.",
      "Medical wellness including GLP-1 programs and peptide therapy is a growing request among Keller's health-focused families.",
    ],
    neighborhoods: ["Keller Town Center", "Bear Creek", "Rufe Snow Drive", "Indian Knoll", "Highland Oaks"],
    processParagraphs: [
      "We plan for long-term relationships from the first consultation — documenting goals, establishing follow-up cadence, and building a plan that grows over time.",
      "Keller clients who combine aesthetic and wellness care appreciate having one provider coordinate across all their health and appearance goals.",
    ],
    faq: [
      {
        question: "How far is Keller from Summer House?",
        answer: "Keller is approximately 35 to 45 minutes from our Central Expressway location depending on traffic. Most clients find the drive manageable once a maintenance schedule is established.",
      },
      {
        question: "What is the most popular starting treatment for Keller clients?",
        answer: "Conservative Botox for forehead and crow's feet is the most common first treatment. Most clients expand their plan over subsequent visits.",
      },
    ],
  },
  {
    slug: "mansfield-texas",
    name: "Mansfield",
    county: "Tarrant County",
    latitude: 32.5632,
    longitude: -97.1417,
    summary: "Natural aesthetic and wellness care for Mansfield and south Tarrant County families.",
    introParagraphs: [
      "Mansfield is a growing south Tarrant County community with a family-focused, practical client base that values honest aesthetic care and transparent pricing. Summer House serves Mansfield with the same approach we bring to every community — conservative, plan-driven, and focused on long-term consistency.",
      "Many Mansfield clients are new to aesthetic medicine and appreciate a provider who explains their options clearly before recommending any treatment.",
    ],
    commonIssues: [
      "Mansfield clients commonly request first-time injectable consultations, conservative Botox, and natural enhancement for lips or under eyes.",
      "Medical weight management programs are also a growing request as GLP-1 options become more widely known in south Tarrant County.",
    ],
    neighborhoods: ["Mansfield Town Center", "Heritage Business Park", "Broad Street", "Walnut Creek", "South Pointe"],
    processParagraphs: [
      "Consultations are educational and focused on the client's actual goals. We explain every recommendation in plain language before any plan is accepted.",
      "Conservative starting doses and staged approaches are standard for first-time clients who want to control the pace of change.",
    ],
    faq: [
      {
        question: "Is Summer House worth the drive from Mansfield?",
        answer: "Many Mansfield clients tell us the quality and care philosophy justifies the drive. Once a plan is established, most visit 3 to 4 times per year.",
      },
      {
        question: "What should I expect at my first visit?",
        answer: "An honest conversation about your goals, a realistic assessment, and a clear plan with transparent pricing. No commitment required on the same day.",
      },
    ],
  },
];
export const faqItems = [
  {
    question: "What makes Summer House different from chain medspas?",
    answer:
      "We prioritize continuity, conservative treatment planning, and relationship-based care. Most clients see the same provider and follow a documented long-term plan.",
  },
  {
    question: "Do you offer medical weight loss with semaglutide and tirzepatide?",
    answer:
      "Yes. We offer physician-supervised programs with structured follow-up, candidacy review, and transparent monthly plan discussions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a consultation through the form or call directly. We review goals, history, candidacy, and then map a personalized treatment sequence.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. Financing availability depends on qualification and selected treatments. Options are reviewed during consultation.",
  },
];
