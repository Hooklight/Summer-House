export type Condition = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  symptomSummary: string; // 1-sentence definition for LLM/AI search
  introParagraphs: string[]; // 2 paragraphs explaining the condition
  whatYouNotice: string[]; // 4-6 bullet symptoms/signs
  treatments: Array<{
    name: string;
    slug: string; // maps to /services/[slug]
    description: string;
  }>;
  howItHelpsParagraphs: string[]; // 2 paragraphs on treatment approach
  faq: Array<{ question: string; answer: string }>;
  cta: string;
};

export const conditions: Condition[] = [
  {
    slug: "always-look-tired",
    title: "Always Look Tired",
    metaTitle: "Always Look Tired? Treatments That Fix It | Summer House Medspa Dallas",
    metaDescription:
      "Looking tired even after a full night's sleep is a real, fixable problem. Discover what causes it and which medspa treatments in Dallas help restore a rested, bright appearance.",
    symptomSummary:
      "Looking perpetually tired despite adequate rest is typically caused by under-eye hollowing, dark circles, skin laxity, or downturned facial features — all of which respond well to aesthetic treatments.",
    introParagraphs: [
      "\"You look tired\" is one of the most common things people hear — and one of the most frustrating, especially when they feel perfectly fine. The culprit isn't fatigue. It's anatomy. As we age, volume shifts in the mid-face cause under-eye hollowing, the skin loses its elasticity, and features that once sat upright begin to descend. The result is a face that reads as exhausted even when you're at your best.",
      "This is one of the most treatable concerns in modern medical aesthetics. At Summer House Medspa in Dallas, we address the structural causes — not just the surface — so results look natural and last. The goal is a face that matches how you actually feel: refreshed, present, awake.",
    ],
    whatYouNotice: [
      "Dark or hollow appearance under the eyes, even with good sleep",
      "A \"sunken\" look in the under-eye area or cheeks",
      "Downturned corners of the mouth that create a resting sad expression",
      "Skin that looks dull or grayish despite being well-hydrated",
      "The inner corner of the eye appears shadowed or purple-toned",
      "Others ask if you're tired or unwell when you feel fine",
    ],
    treatments: [
      {
        name: "Under-Eye Filler (Tear Trough)",
        slug: "dallas-filler",
        description:
          "Hyaluronic acid filler placed precisely in the tear trough restores lost volume under the eye, eliminating shadows and hollow appearance. One of the most effective treatments for a tired appearance.",
      },
      {
        name: "Cheek Filler",
        slug: "dallas-filler",
        description:
          "Restoring volume to the mid-face lifts the under-eye area indirectly, reducing the shadow effect caused by descended cheek fat pads — a common but underrecognized driver of the tired appearance.",
      },
      {
        name: "Skin Brightening & Resurfacing",
        slug: "laser-treatment-dallas",
        description:
          "BBL photofacial and laser treatments improve overall skin tone, reduce pigmentation and dullness, and restore radiance — addressing the surface component of a tired appearance.",
      },
      {
        name: "Botox for Brow Lift",
        slug: "botox-dallas",
        description:
          "Strategic Botox placement can lift the tail of the brow and open up the eye area, creating a more alert and awake appearance without surgery.",
      },
    ],
    howItHelpsParagraphs: [
      "Treatment starts with an assessment of what's actually driving the tired look for you specifically. For most clients, it's a combination of under-eye hollowing and mid-face volume loss — addressed with precise filler placement. For others, skin dullness or brow position is the primary issue, which responds better to resurfacing or Botox.",
      "We don't use a one-size approach. Tear trough filler is technically demanding and requires an experienced injector — overfilling creates a puffy look, underfilling leaves the problem unchanged. Our providers have treated hundreds of clients with this concern and understand the nuance of placing filler where it creates the most natural, rested result.",
    ],
    faq: [
      {
        question: "Will under-eye filler make me look overdone or puffy?",
        answer:
          "Not when placed correctly. The most common cause of a puffy result is using the wrong product or placing too much volume. We use light, reversible hyaluronic acid fillers placed conservatively — results should look like you slept better, not like you had work done. Results are also fully reversible with hyaluronidase if needed.",
      },
      {
        question: "How long will it take to stop looking tired after treatment?",
        answer:
          "Most clients see an immediate improvement with filler, though mild swelling in the first 24–48 hours is normal. Final results settle in about 2 weeks. Skin brightening treatments show progressive improvement over 4–6 weeks as the skin renews itself.",
      },
    ],
    cta: "Book a consultation to discuss what's causing your tired appearance and which treatments make the most sense for you.",
  },
  {
    slug: "uneven-skin-tone",
    title: "Uneven Skin Tone & Discoloration",
    metaTitle: "Uneven Skin Tone Treatments Dallas | Summer House Medspa",
    metaDescription:
      "Dark spots, redness, sun damage, and uneven skin tone are common in Dallas — and very treatable. See which medspa treatments restore even, clear skin.",
    symptomSummary:
      "Uneven skin tone refers to irregular pigmentation including dark spots, sun damage, post-inflammatory hyperpigmentation, redness, and melasma — all of which respond to targeted energy-based or chemical treatments.",
    introParagraphs: [
      "Dallas gets more than 230 sunny days per year. That's exceptional for outdoor living — and exceptionally hard on skin. UV exposure over time leads to sunspots, uneven coloring, and a loss of the clear, even tone that reads as healthy and youthful. Add in hormonal shifts, acne scarring, and the natural effects of aging, and most adults deal with at least one form of discoloration.",
      "Modern aesthetic technology has made uneven skin tone one of the most reliably treatable concerns we see. Whether the driver is sun damage, post-acne marks, melasma, or redness from rosacea, there are highly effective options — and the right one depends on which type of discoloration you have. At Summer House Medspa, we match the treatment to the cause.",
    ],
    whatYouNotice: [
      "Brown spots or sunspots, especially on cheeks, forehead, and temples",
      "Skin tone that looks \"patchy\" or inconsistent in photos",
      "Redness or flushing concentrated on cheeks or nose",
      "Dark marks left behind by acne breakouts",
      "Skin that looks dull, yellowish, or lacks vitality",
      "Tan that fades unevenly, leaving mottled coloring",
    ],
    treatments: [
      {
        name: "BBL Photofacial",
        slug: "bbl-photofacial-dallas",
        description:
          "Broadband light targets pigment and vascular irregularities specifically, treating sunspots and redness at the source. Often called the gold standard for uneven tone from sun damage — produces clear, measurable results in 1–3 sessions.",
      },
      {
        name: "Chemical Peel",
        slug: "chemical-peel-dallas",
        description:
          "Medical-grade peels accelerate cell turnover, shedding damaged outer layers and revealing fresher, more even skin underneath. Particularly effective for post-acne marks and general dullness.",
      },
      {
        name: "Laser Skin Resurfacing",
        slug: "laser-treatment-dallas",
        description:
          "Fractional laser treatments address deeper pigmentation concerns and stimulate collagen production simultaneously — improving tone while also improving texture.",
      },
      {
        name: "Medical-Grade Skincare",
        slug: "medical-grade-skincare-dallas",
        description:
          "A regimen including retinoids, vitamin C, and prescription brighteners maintains results between treatments and continues improving tone over time — essential for melasma management.",
      },
    ],
    howItHelpsParagraphs: [
      "The approach depends entirely on what type of discoloration you have. Sunspots respond dramatically to BBL photofacial — the pigment darkens and flakes off within 7–10 days, leaving clear skin. Redness from rosacea also responds to BBL. Post-acne marks (often pink or brown depending on skin tone) respond best to a combination of chemical peels and topical prescription brighteners.",
      "Melasma is the most complex to treat because it's hormonally driven — aggressive laser can actually worsen it. We approach melasma conservatively with chemical peels, medical skincare, and sun protection protocols. Whatever the cause, we'll identify the right treatment path in your consultation and set realistic expectations for timeline and results.",
    ],
    faq: [
      {
        question: "How many BBL photofacial treatments will I need for sun damage?",
        answer:
          "Most clients see significant improvement after 1–2 sessions. A full series of 3 sessions spaced 4 weeks apart produces the best results for moderate-to-significant sun damage. Annual maintenance treatments are recommended to address new damage from ongoing sun exposure.",
      },
      {
        question: "Can uneven skin tone be treated on darker skin tones?",
        answer:
          "Yes, but the approach differs. Some energy-based treatments carry higher risk of post-inflammatory hyperpigmentation on deeper skin tones. We tailor the treatment plan based on your Fitzpatrick skin type — chemical peels and targeted topical protocols are often the safer, more effective starting point for Fitzpatrick IV–VI skin tones.",
      },
    ],
    cta: "Schedule a skin assessment to identify the cause of your discoloration and get a personalized treatment plan.",
  },
  {
    slug: "facial-asymmetry",
    title: "Facial Asymmetry",
    metaTitle: "Facial Asymmetry Treatment Dallas | Filler & Botox | Summer House Medspa",
    metaDescription:
      "No face is perfectly symmetrical, but significant differences in facial proportions are highly treatable. Learn how filler and Botox can balance facial features in Dallas.",
    symptomSummary:
      "Facial asymmetry — uneven features, one side fuller or droopier than the other — can result from natural variation, volume loss, muscle imbalance, or aging, and is effectively addressed with targeted filler and neuromodulator treatments.",
    introParagraphs: [
      "No face is perfectly symmetrical — and that's normal. But when one side of the face looks noticeably fuller, higher, or more drooped than the other, it can affect how you see yourself in photos and in the mirror. Facial asymmetry has many causes: natural anatomical variation, volume loss that progresses differently on each side, muscle imbalances that develop over time, or previous treatments that need balancing.",
      "What makes modern injectable treatments powerful is their precision. We can add small, targeted amounts of volume to a hollow side, relax an overactive muscle pulling one side down, or lift a corner of the mouth that has descended more than the other. The result isn't perfection — it's balance, a face where both sides feel like they belong to the same person.",
    ],
    whatYouNotice: [
      "One cheek appears flatter or lower than the other",
      "One corner of the mouth sits lower or turns down more than the other",
      "One brow sits noticeably lower than the other",
      "Photos from straight-on look uneven or lopsided",
      "One eye appears smaller or more hooded than the other",
      "The chin or jawline appears off-center",
    ],
    treatments: [
      {
        name: "Dermal Filler",
        slug: "dallas-filler",
        description:
          "Precise filler placement on the flatter side restores volume balance — commonly used to even out cheeks, jawline, or chin projection asymmetry. Hyaluronic acid fillers allow for gradual, adjustable correction.",
      },
      {
        name: "Botox & Neuromodulators",
        slug: "botox-dallas",
        description:
          "Relaxing overactive muscles that are pulling features down on one side can restore symmetry — particularly effective for brow asymmetry, uneven lip corners, and jaw asymmetry from uneven masseter development.",
      },
      {
        name: "Lip Filler",
        slug: "lip-filler-dallas",
        description:
          "When one side of the lip is thinner or positioned differently, lip filler can address the asymmetry while maintaining natural proportions and movement.",
      },
    ],
    howItHelpsParagraphs: [
      "Treating asymmetry requires careful assessment before any injection. We evaluate how each side differs, what's causing the asymmetry, and what a realistic correction looks like. For most clients, full symmetry isn't achievable or even the goal — the aim is to reduce the difference enough that the face reads as balanced and harmonious.",
      "Treatment is usually conservative, starting with small corrections on the deficient side and reassessing. We can always add — and with hyaluronic acid fillers, we can adjust or dissolve if needed. Most asymmetry concerns can be meaningfully improved in a single session, with a follow-up 2–4 weeks later to assess and refine.",
    ],
    faq: [
      {
        question: "Will filler for asymmetry look natural?",
        answer:
          "Yes, when placed conservatively. The key is using just enough product on the deficient side to create balance — not overfilling both sides to create volume you didn't have before. We use a before-and-after photo protocol to guide placement and confirm results look natural from multiple angles.",
      },
      {
        question: "Can Botox fix one brow being higher than the other?",
        answer:
          "Often yes. Brow asymmetry is frequently caused by unequal muscle activity on each side. Carefully placed Botox can relax the side pulling the brow down, or allow the depressed side to lift. It's one of the more gratifying corrections we perform — clients often see a significant difference within 2 weeks.",
      },
    ],
    cta: "Book a facial assessment consultation to map your asymmetry and discuss a targeted correction plan.",
  },
  {
    slug: "post-weight-loss-skin",
    title: "Post-Weight-Loss Skin Laxity",
    metaTitle: "Post-Weight Loss Skin Tightening Dallas | Ozempic Skin | Summer House Medspa",
    metaDescription:
      "Significant weight loss — including from GLP-1 medications like Ozempic — can leave loose skin on the face and body. Discover non-surgical treatments that restore firmness in Dallas.",
    symptomSummary:
      "Post-weight-loss skin laxity occurs when rapid fat reduction outpaces the skin's ability to contract, leaving loose, sagging, or crepey skin on the face, neck, arms, and abdomen — addressable with skin-tightening and volume-restoration treatments.",
    introParagraphs: [
      "Weight loss is a health achievement — but it comes with an aesthetic side effect that nobody warns you about. When fat is lost quickly, especially with GLP-1 medications like Ozempic or Wegovy, the skin doesn't always contract fast enough to match the new facial and body contours. The result can be a gaunt, hollow face, crepey skin on the arms or abdomen, and a loss of firmness that makes people feel older than they did before losing the weight.",
      "This is a growing concern in Dallas, where GLP-1 prescriptions have increased substantially. The good news: the aesthetic medicine toolkit has effective responses for post-weight-loss skin laxity — from collagen-stimulating treatments that help the skin contract, to strategic volume restoration that rebuilds facial structure without the \"overfilled\" look.",
    ],
    whatYouNotice: [
      "Face looks gaunt, hollow, or aged after significant weight loss",
      "Skin on the neck, arms, or abdomen feels loose or crepey",
      "Jowls or lower face drooping more than expected for your age",
      "Under-eye and cheek area looks sunken or shadowed",
      "Body contouring reveals loose overlying skin after fat reduction",
      "Overall appearance looks older or more tired post-weight-loss",
    ],
    treatments: [
      {
        name: "Morpheus8 Skin Tightening",
        slug: "morpheus8-dallas",
        description:
          "Radiofrequency microneedling delivers energy deep into the dermis, triggering deep collagen and elastin production that firms loose skin. Effective on the face, neck, and body — often the best non-surgical option for post-weight-loss laxity.",
      },
      {
        name: "Dermal Filler for Facial Restoration",
        slug: "dallas-filler",
        description:
          "Restoring facial volume lost with weight loss rebuilds structural support that prevents drooping. Strategic filler in the cheeks, temples, and jawline recreates the lifted contours that fat once provided.",
      },
      {
        name: "Sculptra Collagen Stimulator",
        slug: "sculptra-dallas",
        description:
          "Sculptra stimulates your own collagen production gradually over 3–6 months, adding foundational support and thickness to thinned skin. Ideal for facial volume loss from GLP-1 medications — produces natural results that improve progressively.",
      },
      {
        name: "Skin Tightening & Body Contouring",
        slug: "body-contouring-dallas",
        description:
          "For loose skin on the arms, abdomen, and thighs after weight loss, energy-based body contouring treatments tighten overlying skin and improve texture — addressing both the cosmetic and tactile changes of post-weight-loss bodies.",
      },
    ],
    howItHelpsParagraphs: [
      "Post-weight-loss skin requires a combined approach for most clients. The face typically needs both volume restoration (to replace structural fat that was lost) and skin-tightening treatment (to improve firmness and texture). We assess each client individually to determine the right balance and sequence of treatments.",
      "For clients on GLP-1 medications, timing matters. We typically recommend beginning proactive skin-quality treatments early — before significant volume loss occurs — and using collagen stimulators like Sculptra to build a reservoir of structural support. For clients who have already lost significant weight, a combination of Morpheus8 for tightening and conservative filler for structural restoration often produces the most natural result.",
    ],
    faq: [
      {
        question: "I lost weight with Ozempic and now my face looks hollow and older. What helps?",
        answer:
          "This is extremely common with GLP-1 medications — often called \"Ozempic face.\" The treatment approach combines Sculptra or Radiesse (collagen stimulators) with conservative filler for cheeks and temples, plus skin quality treatments to restore firmness. Most clients see meaningful improvement in 3–6 months. We recommend a dedicated consultation to build a personalized protocol.",
      },
      {
        question: "Is there a non-surgical option for loose skin after major weight loss?",
        answer:
          "Yes, though the degree of improvement depends on how much laxity is present. Significant loose skin on the body after large weight losses (50+ lbs) may ultimately benefit from surgical intervention. For moderate laxity — loose neck skin, early jowling, crepey arms and abdomen — Morpheus8 combined with a series of radiofrequency treatments can produce substantial tightening without surgery or downtime.",
      },
    ],
    cta: "Schedule a consultation to discuss your post-weight-loss skin concerns and get a tailored treatment plan.",
  },
  {
    slug: "hormonal-acne-scars",
    title: "Hormonal Acne & Acne Scars",
    metaTitle: "Hormonal Acne & Scar Treatment Dallas | Summer House Medspa",
    metaDescription:
      "Hormonal acne and the scars it leaves behind are frustrating but very treatable. Discover medical-grade medspa solutions that clear breakouts and resurface scarred skin in Dallas.",
    symptomSummary:
      "Hormonal acne — breakouts triggered by androgen and estrogen fluctuations — causes deep, painful blemishes primarily on the lower face and jaw, and often leaves behind rolling, boxcar, or icepick scars that require professional treatment to improve.",
    introParagraphs: [
      "Hormonal acne doesn't follow the same rules as teenage acne. It tends to appear on the lower face and jawline, flares predictably around the menstrual cycle or during hormonal transitions (perimenopause, post-pregnancy, stress), and produces the kind of deep, cystic blemishes that leave lasting marks. Adults dealing with hormonal breakouts often feel frustrated because standard skincare doesn't address the root cause.",
      "At Summer House Medspa, we address hormonal acne from multiple angles: controlling active breakouts, reducing inflammation, and treating the textural scarring that previous breakouts have left behind. Acne scars are among the most studied concerns in aesthetic medicine — modern treatments can achieve significant improvement in scar depth and texture, with results that continue building for months after treatment.",
    ],
    whatYouNotice: [
      "Deep, cystic blemishes along the jaw and lower cheeks",
      "Breakouts that track with your hormonal cycle",
      "Dark marks (post-inflammatory hyperpigmentation) left after blemishes clear",
      "Textural scarring — indented, pitted, or uneven skin surface",
      "Skin that feels rough or bumpy in the lower face even without active breakouts",
      "Acne that responds poorly to standard OTC treatments",
    ],
    treatments: [
      {
        name: "Microneedling with PRP",
        slug: "microneedling-dallas",
        description:
          "Microneedling creates controlled micro-injuries that trigger deep collagen remodeling, improving the depth and appearance of rolling and boxcar scars. Combined with PRP (platelet-rich plasma), healing is accelerated and skin quality improves more dramatically.",
      },
      {
        name: "Chemical Peel",
        slug: "chemical-peel-dallas",
        description:
          "Medical-grade peels reduce post-inflammatory hyperpigmentation from healed acne, smooth early textural changes, and help control active breakouts by regulating cell turnover. A series of mild-to-medium peels is often used alongside other treatments.",
      },
      {
        name: "Laser Resurfacing for Acne Scars",
        slug: "laser-treatment-dallas",
        description:
          "Fractional laser treatment ablates the top layer of scarred skin while stimulating deep collagen production — one of the most effective tools for significant acne scarring, particularly icepick and deep boxcar scars.",
      },
      {
        name: "Medical-Grade Skincare & Prescription Topicals",
        slug: "medical-grade-skincare-dallas",
        description:
          "A physician-directed skincare regimen including retinoids, prescription brighteners, and targeted anti-inflammatory ingredients provides the ongoing management layer that makes in-office treatments work better and last longer.",
      },
    ],
    howItHelpsParagraphs: [
      "We treat active acne and scarring in parallel when possible. Controlling breakouts prevents new scars from forming while existing scars are being treated — creating a clear trajectory toward better skin. For clients with both concerns, we often start with a chemical peel series to manage active acne and surface pigmentation while planning a microneedling or laser protocol for deeper scar revision.",
      "Acne scar improvement is a process, not an event. Scars that have been present for years typically take 3–6 sessions and 6–12 months to show their best results. We'll give you a realistic timeline based on your scar type and depth, and track progress with photos so you can see the improvements accumulating over time.",
    ],
    faq: [
      {
        question: "Can acne scars actually be improved, or just made less noticeable?",
        answer:
          "Many scars can see genuine structural improvement — not just visual masking. Rolling and boxcar scars respond particularly well to microneedling and fractional laser, with 40–70% improvement in scar depth being a realistic outcome after a full treatment series. Ice pick scars are the most resistant to non-surgical treatment. We'll assess your scar types in consultation and give you honest expectations.",
      },
      {
        question: "I'm still breaking out. Should I wait until my skin clears to treat scars?",
        answer:
          "Not necessarily. Many of our treatments — chemical peels and medical skincare — help control active acne while also beginning to improve scarring and hyperpigmentation. We can work on both simultaneously. Microneedling and laser are typically reserved for when breakouts are reasonably controlled, but that doesn't mean waiting a year to start treatment.",
      },
    ],
    cta: "Book a skin assessment to evaluate your acne and scarring and develop a clear treatment plan.",
  },
  {
    slug: "sun-damage-texas",
    title: "Sun Damage & Premature Aging",
    metaTitle: "Sun Damage Treatment Dallas TX | Sunspots, Photoaging | Summer House Medspa",
    metaDescription:
      "Texas sun causes more skin aging than any other factor. Discover the most effective medspa treatments for sunspots, photoaging, and UV damage in Dallas.",
    symptomSummary:
      "Photoaging from cumulative UV exposure is the leading cause of skin aging, causing brown spots, broken capillaries, rough texture, loss of elasticity, and fine lines — all treatable with targeted energy-based and collagen-stimulating treatments.",
    introParagraphs: [
      "Texas doesn't just have summers — it has UV radiation year-round. Dallas averages more than 230 sunny days annually, and much of that UV exposure doesn't come from deliberate sunbathing. It comes from driving, walking to your car, outdoor dining, sports, and everything else that makes up life here. Over decades, this cumulative UV exposure becomes the single biggest driver of visible skin aging — far outpacing genetics.",
      "The good news is that photoaged skin responds exceptionally well to modern treatment. Sunspots can be eliminated. Broken capillaries can be erased. Skin texture can be resurfaced. Collagen that UV exposure has degraded can be rebuilt. At Summer House Medspa in Dallas, treating sun damage is one of our specialties — because it's one of the most common concerns we see in a Texas climate.",
    ],
    whatYouNotice: [
      "Brown spots or sunspots on cheeks, forehead, nose, hands, and décolletage",
      "Skin texture that feels rough or looks leathery",
      "Fine lines and wrinkles, particularly around eyes and mouth",
      "Red or broken capillaries on the nose and cheeks",
      "Skin tone that looks mottled, uneven, or has lost its clarity",
      "Loss of firmness and skin laxity from collagen degradation",
    ],
    treatments: [
      {
        name: "BBL Photofacial",
        slug: "bbl-photofacial-dallas",
        description:
          "Broadband light is the most targeted tool for sun damage — it specifically addresses pigmented spots and vascular changes caused by UV exposure. Dark spots visibly peel off within 7–10 days, leaving significantly clearer skin. Redness and broken capillaries also respond dramatically.",
      },
      {
        name: "Laser Resurfacing",
        slug: "laser-treatment-dallas",
        description:
          "Fractional laser treats deeper photoaging — surface texture, fine lines, and the loss of skin density caused by collagen degradation. Produces more significant results for advanced sun damage than light-based treatments alone.",
      },
      {
        name: "Microneedling & Collagen Stimulation",
        slug: "microneedling-dallas",
        description:
          "Microneedling triggers deep collagen production to rebuild the structural foundation that UV exposure has weakened — improving firmness, texture, and overall skin quality over a series of treatments.",
      },
      {
        name: "Chemical Peel",
        slug: "chemical-peel-dallas",
        description:
          "Medical peels remove the outermost layer of photodamaged skin, immediately improving tone, clarity, and the appearance of early sunspots. A series of peels maintains results between more intensive treatments.",
      },
    ],
    howItHelpsParagraphs: [
      "For most Dallas clients, addressing sun damage is a two-phase process: treating existing damage and preventing new damage from undoing the results. The treatment phase typically combines BBL photofacial for pigment and vascular issues with resurfacing (laser or microneedling) for texture and collagen. Spacing treatments allows the skin to heal and remodel fully between sessions.",
      "The prevention phase is equally important. Sun protection isn't optional in Texas — it's maintenance. We recommend medical-grade SPF and pair it with a daily antioxidant (vitamin C serum) to neutralize UV-induced free radical damage. Clients who are diligent about protection see their results last significantly longer and require less frequent maintenance treatment.",
    ],
    faq: [
      {
        question: "How many BBL treatments do I need for significant sunspot removal?",
        answer:
          "Most clients see 70–90% improvement in sunspot coverage after 1–2 BBL sessions. A full series of 3 sessions produces the most comprehensive results and addresses not just existing spots but the overall tonal irregularity from years of cumulative sun exposure. Annual maintenance sessions (typically 1–2 per year) prevent new damage from accumulating.",
      },
      {
        question: "My skin looks aged from years in the Texas sun. Is it too late to treat?",
        answer:
          "It's never too late — and photoaged skin often responds more dramatically to treatment than skin that simply shows genetic aging. We've treated clients in their 60s and 70s who achieved significant improvements in clarity, tone, and firmness. The skin's ability to remodel and produce new collagen doesn't disappear with age; it just slows down. Modern treatments compensate for that.",
      },
    ],
    cta: "Schedule a skin assessment to evaluate your sun damage and create a treatment plan built for Texas skin.",
  },
  {
    slug: "tech-neck",
    title: "Tech Neck & Neck Aging",
    metaTitle: "Tech Neck Treatment Dallas | Neck Wrinkles & Laxity | Summer House Medspa",
    metaDescription:
      "Horizontal neck lines, loose neck skin, and neck banding are accelerating due to constant device use. Non-surgical treatments at Summer House Medspa in Dallas can significantly improve neck aging.",
    symptomSummary:
      "Tech neck refers to premature neck aging — including horizontal creases, vertical bands, skin laxity, and textural changes — accelerated by the downward head position of prolonged device use, causing mechanical skin stress beyond normal aging.",
    introParagraphs: [
      "The average American looks down at their phone more than 1,400 times per day. That repeated mechanical stress — skin being folded and compressed in the same position hundreds of times daily — accelerates neck aging in a way that previous generations didn't experience. The result: horizontal neck lines appearing in people's 30s, neck banding becoming pronounced earlier, and overall neck skin laxity that looks inconsistent with the face above it.",
      "Neck aging is one of the most underaddressed concerns in aesthetic medicine, partly because it can feel less \"fixable\" than facial concerns. It is fixable — non-surgically. At Summer House Medspa, we treat tech neck and neck aging with a combination of approaches that address skin quality, underlying muscle activity, and structural laxity.",
    ],
    whatYouNotice: [
      "Horizontal lines across the neck that deepen with downward head tilt",
      "Vertical bands or cords running down the neck (platysmal bands)",
      "Skin on the neck that looks crepey, loose, or \"draped\"",
      "A defined line of aging difference between face and neck",
      "Neck texture that looks rough or shows more prominent lines than expected",
      "Double chin or fullness under the jaw that disrupts the neck-face transition",
    ],
    treatments: [
      {
        name: "Botox for Neck Bands (Nefertiti Lift)",
        slug: "botox-dallas",
        description:
          "Botox injected into the platysmal bands relaxes the downward-pulling neck muscles, reducing the appearance of vertical bands and creating an upward lift effect on the jawline. Called the \"Nefertiti lift\" — one of the most effective non-surgical neck treatments available.",
      },
      {
        name: "Neck Skin Tightening (Morpheus8)",
        slug: "morpheus8-dallas",
        description:
          "Radiofrequency microneedling applied to the neck stimulates deep collagen production, tightening loose or crepey neck skin over 3–6 months. Produces significant improvement in skin quality and firmness without surgery or extended downtime.",
      },
      {
        name: "Laser Resurfacing for Neck Lines",
        slug: "laser-treatment-dallas",
        description:
          "Fractional laser addresses the horizontal creases and surface texture of tech neck by resurfacing the outer skin layer and triggering deep collagen remodeling in the dermis.",
      },
      {
        name: "Kybella / Chin Fat Reduction",
        slug: "kybella-chin-fat-dallas",
        description:
          "When submental (under-chin) fullness is part of the neck aging picture, Kybella or body contouring treatments address the fat component — improving the definition between chin and neck.",
      },
    ],
    howItHelpsParagraphs: [
      "Neck treatment typically requires layering approaches. For the horizontal lines of tech neck, laser resurfacing or microneedling addresses the skin quality component. For vertical bands and the downward pull of platysmal muscles, Botox (the Nefertiti lift technique) provides the most immediate visible improvement. For overall laxity, Morpheus8 delivers the most significant structural tightening available without surgery.",
      "We're honest about what non-surgical treatment can and can't achieve for the neck. Mild to moderate tech neck and neck laxity responds very well to the treatments above — most clients see significant improvement with a combination protocol. Severe neck laxity with extensive skin excess may ultimately benefit from surgical intervention, and we'll give you that honest assessment during consultation.",
    ],
    faq: [
      {
        question: "Can Botox really lift the neck without surgery?",
        answer:
          "The Nefertiti lift is a legitimate technique that produces measurable improvement in neck definition and jaw clarity — but it works best as part of a combination approach. Botox relaxes the muscles pulling the lower face and neck downward, allowing the upward-pulling muscles of the face to create a lifting effect. Results typically last 3–4 months and can be combined with skin-tightening treatments for more comprehensive improvement.",
      },
      {
        question: "What can I do about deep horizontal lines on my neck from looking at my phone?",
        answer:
          "Horizontal neck lines respond to a combination of resurfacing (laser or chemical peel) and hydration-building treatments like Profhilo or skin boosters that plump the skin from within. Completely eliminating deep mechanical creases is difficult without surgery, but significant improvement in depth, texture, and appearance is achievable with a consistent treatment plan.",
      },
    ],
    cta: "Book a neck assessment to discuss your tech neck concerns and find out which combination of treatments will work best for you.",
  },
];
