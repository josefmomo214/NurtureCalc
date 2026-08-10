export interface WeekPage {
  slug: string;
  weekNumber: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  physicalRecovery: { heading: string; body: string }[];
  emotionalWellbeing: string;
  whatsNormal: string[];
  warningSigns: string[];
  calculatorHighlight: {
    calculatorName: string;
    calculatorUrl: string;
    reason: string;
  };
  faqs: { q: string; a: string }[];
  breadcrumbLabel: string;
}

export const weekPages: WeekPage[] = [
  {
    slug: "postpartum-week-1",
    weekNumber: 1,
    metaTitle: "1 Week Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "Your first week postpartum explained — bleeding, uterus healing, breast changes, and what's normal versus what needs a doctor. Evidence-based guide.",
    h1: "1 Week Postpartum: What to Expect",
    intro:
      "The first week postpartum is the most physically intense stretch of the entire recovery period, regardless of how you gave birth. Your body is doing an enormous amount of work — the uterus is rapidly shrinking, hormone levels are dropping sharply, and your breasts are transitioning to full milk production. This week sets the tone for the weeks that follow, and knowing what's normal helps you tell the difference between expected discomfort and something that needs medical attention.",
    physicalRecovery: [
      {
        heading: "Bleeding (lochia)",
        body: "Bleeding is heaviest in the first 3–4 days, similar to or heavier than a period, often with small clots. It should gradually lighten in color from bright red toward pink or brown by the end of the week.",
      },
      {
        heading: "Uterus contraction",
        body: "Afterpains — cramping as the uterus contracts back toward its pre-pregnancy size — are common, especially while breastfeeding, which releases oxytocin. These are usually strongest in the first 2–3 days.",
      },
      {
        heading: "Perineal or incision pain",
        body: "Vaginal birth mothers commonly experience soreness, swelling, and pain sitting, especially with tearing or an episiotomy. C-section mothers have incision pain that is sharpest in the first few days and requires support when moving, coughing, or laughing.",
      },
      {
        heading: "Breast changes",
        body: "Milk typically 'comes in' around day 2–4, causing fullness, tenderness, and sometimes engorgement. Nipple soreness during the first week of breastfeeding is common as you and your baby learn together.",
      },
    ],
    emotionalWellbeing:
      "The 'baby blues' — tearfulness, mood swings, and feeling overwhelmed — affect up to 80% of new mothers and typically peak around day 3–5 as hormone levels drop sharply. This is different from postpartum depression: baby blues resolve on their own within about two weeks. If low mood feels severe, doesn't lift, or comes with thoughts of harming yourself or your baby, contact your doctor immediately — this needs support, not just time.",
    whatsNormal: [
      "Heavy bleeding that gradually lightens over the week",
      "Cramping, especially while breastfeeding",
      "Swelling in the perineal area or around a C-section incision",
      "Breast fullness, tenderness, or engorgement",
      "Exhaustion, tearfulness, and mood swings",
      "Sweating heavily, especially at night, as your body sheds retained fluid",
    ],
    warningSigns: [
      "Bleeding that soaks through a pad in an hour or less",
      "A fever of 100.4°F (38°C) or higher",
      "Severe headache that doesn't improve with usual pain relief, or vision changes",
      "A red, warm, swollen area on your leg (possible blood clot)",
      "Incision or perineal area that is increasingly painful, red, or has discharge",
      "Thoughts of harming yourself or your baby",
    ],
    calculatorHighlight: {
      calculatorName: "Breastfeeding Calorie Calculator",
      calculatorUrl: "/breastfeeding-calories/",
      reason:
        "As your milk comes in this week, your calorie needs increase significantly. Find your personalised daily target to support both healing and milk production.",
    },
    faqs: [
      {
        q: "Is it normal to bleed heavily 1 week postpartum?",
        a: "Yes, bleeding is typically heaviest in the first 3–4 days and gradually lightens by the end of week 1. It should be lightening, not getting heavier — soaking a pad in an hour or less warrants a call to your provider.",
      },
      {
        q: "Why do I have cramping while breastfeeding in the first week?",
        a: "Breastfeeding releases oxytocin, the same hormone that caused labor contractions. This triggers your uterus to contract as it shrinks back to its pre-pregnancy size, causing afterpains that are often strongest in the first few days.",
      },
      {
        q: "When should I call my doctor in the first week postpartum?",
        a: "Call immediately for a fever of 100.4°F or higher, bleeding that soaks a pad within an hour, severe headache with vision changes, or any red, warm, swollen area on your leg. These can indicate infection, hemorrhage, or blood clot and need urgent assessment.",
      },
    ],
    breadcrumbLabel: "Week 1 Postpartum",
  },
  {
    slug: "postpartum-week-2",
    weekNumber: 2,
    metaTitle: "2 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "2 weeks postpartum — bleeding changes, incision healing, sleep deprivation, and milk supply. What's normal and what needs medical attention.",
    h1: "2 Weeks Postpartum: What to Expect",
    intro:
      "By the second week, the most acute physical intensity of week one starts to ease for most mothers, though this is also when accumulated sleep deprivation begins to hit hardest. Bleeding continues but should be visibly lighter than week one. This is a good week to start paying attention to your emotional state specifically — the baby blues should be resolving now, and if they aren't, that's meaningful information.",
    physicalRecovery: [
      {
        heading: "Bleeding transitions to pink or brown",
        body: "Lochia should now be lighter in flow and change from red to a pink or brownish color. A return to bright red, heavier bleeding is a sign you may be doing too much physically and should rest more.",
      },
      {
        heading: "C-section incision continues healing",
        body: "The incision should look less angry — reduced redness and swelling. Numbness around the scar is normal and can persist for months as nerves regenerate slowly.",
      },
      {
        heading: "Perineal healing progresses",
        body: "Stitches from tearing or an episiotomy typically dissolve within 1–2 weeks. Sitting should be gradually more comfortable, though a cushion may still help.",
      },
      {
        heading: "Milk supply regulates",
        body: "Engorgement from week 1 usually settles as your supply adjusts to your baby's actual demand. Breasts feel less rock-hard and more comfortable between feeds.",
      },
    ],
    emotionalWellbeing:
      "The baby blues should be lifting by now. If you are still experiencing intense sadness, anxiety, or feeling unable to cope by the end of week 2 — or if these feelings are getting worse rather than better — this crosses from baby blues into territory that warrants talking to your doctor about postpartum depression or anxiety. Early support significantly improves outcomes, and there is no reason to wait until a scheduled appointment if you're struggling now.",
    whatsNormal: [
      "Bleeding lighter than week 1, pink or brown in color",
      "Persistent fatigue, compounded by cumulative sleep loss",
      "Improving but still present incision or perineal discomfort",
      "Milk supply settling into a more predictable rhythm",
      "Hair that seems unusually thick still (shedding hasn't started yet)",
      "Some residual swelling in feet and ankles",
    ],
    warningSigns: [
      "Bleeding that turns bright red and heavier again after lightening",
      "Fever, chills, or flu-like symptoms (possible mastitis or infection)",
      "A hard, red, painful area on the breast (possible mastitis)",
      "Incision that opens, weeps fluid, or has increasing redness",
      "Persistent low mood, anxiety, or feeling unable to cope that isn't improving",
      "Calf pain, swelling, or redness on one leg",
    ],
    calculatorHighlight: {
      calculatorName: "Baby Weight Percentile Calculator",
      calculatorUrl: "/baby-weight-percentile/",
      reason:
        "Many babies have their first weight check around 2 weeks. See how their weight compares using WHO growth standards, and understand what the result actually means.",
    },
    faqs: [
      {
        q: "Is it normal for bleeding to get lighter then heavier again at 2 weeks?",
        a: "A brief increase after overexertion (standing or walking more than usual) can happen and usually settles with rest. A sustained return to heavy, bright red bleeding is not expected at this stage and should be discussed with your provider.",
      },
      {
        q: "Why am I more tired at 2 weeks than I was in the first days?",
        a: "The adrenaline and acute focus of the first days after birth often masks exhaustion. By week 2, accumulated sleep deprivation catches up, which is why fatigue can feel worse rather than better even as physical healing progresses.",
      },
      {
        q: "Should the baby blues be gone by 2 weeks?",
        a: "Yes, typically. Baby blues usually resolve within the first two weeks. If low mood, anxiety, or feeling overwhelmed persists past this point or is worsening, talk to your doctor — this may be postpartum depression or anxiety, which responds well to treatment.",
      },
    ],
    breadcrumbLabel: "Week 2 Postpartum",
  },
  {
    slug: "postpartum-week-3",
    weekNumber: 3,
    metaTitle: "3 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "3 weeks postpartum — physical healing progress, return of energy, breastfeeding rhythm, and early signs it might be time to talk to your doctor.",
    h1: "3 Weeks Postpartum: What to Expect",
    intro:
      "Week three often brings a noticeable shift — many mothers start to feel more like themselves physically, even while still deep in newborn sleep deprivation. Bleeding is typically much lighter now. This is also roughly the point where some light movement and gentle activity becomes appropriate for mothers who had an uncomplicated birth, though this varies significantly by individual and delivery type.",
    physicalRecovery: [
      {
        heading: "Bleeding continues to taper",
        body: "Lochia is usually light and brownish or yellowish by now, sometimes stopping intermittently. Some mothers still have occasional spotting, which is normal.",
      },
      {
        heading: "Energy begins to return, gradually",
        body: "Many mothers report feeling a bit more physically capable this week, though this varies enormously and is not a signal to resume normal activity levels — rest remains the priority.",
      },
      {
        heading: "C-section scar continues to fade",
        body: "Redness should be visibly reducing. Some pulling or tightness sensation, especially with certain movements, is common as internal healing continues beneath the visible scar.",
      },
      {
        heading: "Pelvic floor awareness",
        body: "This is a good week to begin very gentle pelvic floor reconnection exercises if you haven't already — focusing on breath and light activation rather than intensity.",
      },
    ],
    emotionalWellbeing:
      "Many mothers describe week 3 as when the reality of the new routine starts to settle in — the initial flurry of support and visitors often tapers off around now, which can feel isolating even as physical recovery improves. It's a good week to be intentional about support — whether that's a partner, family, or a postpartum doula — rather than assuming you should be managing entirely independently.",
    whatsNormal: [
      "Light, intermittent bleeding or spotting",
      "Gradually improving energy, though still well below baseline",
      "Reduced but present incision or perineal tenderness",
      "A settling breastfeeding or feeding routine",
      "Feeling more capable physically but still needing significant rest",
      "Occasional loneliness as visitor support tapers off",
    ],
    warningSigns: [
      "Any return of heavy, bright red bleeding",
      "Fever or feeling generally unwell",
      "Persistent, worsening pain anywhere",
      "Signs of a breast infection: redness, heat, flu-like symptoms",
      "Ongoing sadness, anxiety, or intrusive thoughts",
      "Any leaking of urine or stool that concerns you",
    ],
    calculatorHighlight: {
      calculatorName: "Pelvic Floor Recovery Estimator",
      calculatorUrl: "/pelvic-floor-recovery/",
      reason:
        "Week 3 is a reasonable time to start gentle pelvic floor reconnection. Get a personalised assessment of your current stage and appropriate next steps.",
    },
    faqs: [
      {
        q: "Can I start exercising at 3 weeks postpartum?",
        a: "Gentle walking and pelvic floor breathing work can typically begin now if you feel ready and have no complications. Structured exercise should still wait until at least 6 weeks, and longer after a C-section — always confirm with your provider first.",
      },
      {
        q: "Why do I feel more emotional at 3 weeks even though I'm physically recovering?",
        a: "The early support and adrenaline of the first two weeks often fades around this point, while sleep deprivation accumulates. Feeling more emotionally raw at 3 weeks is common and doesn't necessarily indicate a problem — but persistent low mood is worth mentioning to your doctor.",
      },
      {
        q: "Is it normal for bleeding to stop and start again at 3 weeks?",
        a: "Yes, intermittent light spotting that stops and starts is common as the uterine lining finishes healing. A sustained return to heavy, bright red bleeding is different and should be checked by your provider.",
      },
    ],
    breadcrumbLabel: "Week 3 Postpartum",
  },
  {
    slug: "postpartum-week-4",
    weekNumber: 4,
    metaTitle: "4 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "4 weeks postpartum — nearing the 6-week checkup, hair changes beginning, mood check-ins, and what your body still needs to heal.",
    h1: "4 Weeks Postpartum: What to Expect",
    intro:
      "At four weeks, you're approaching the traditional six-week postnatal checkup, and many mothers feel a mix of relief and impatience — relief that the most acute recovery phase has passed, impatience to feel fully 'back to normal.' It's worth resisting that impatience: internal healing, especially for pelvic floor and abdominal tissue, is nowhere near complete at this stage regardless of how you feel.",
    physicalRecovery: [
      {
        heading: "Bleeding should be resolving",
        body: "Most mothers find bleeding has stopped or is down to very occasional light spotting by week 4. If bleeding is still consistently present and not tapering, mention it at your upcoming checkup.",
      },
      {
        heading: "Incision and perineal healing largely complete externally",
        body: "The visible wound — whether C-section or perineal — should look well healed on the surface. Internal healing of deeper tissue layers continues for months beyond this.",
      },
      {
        heading: "Core awareness",
        body: "This is a good week to check for diastasis recti (abdominal separation) if you haven't already, gently, as a baseline before considering any core-strengthening work.",
      },
      {
        heading: "Sleep debt is cumulative",
        body: "Four weeks of fragmented sleep has a real physiological cost. Fatigue at this stage is not just 'tiredness' — it affects mood, healing, and milk supply, and remains a priority to address however possible.",
      },
    ],
    emotionalWellbeing:
      "Postpartum depression and anxiety can emerge or become more apparent around this timeframe, distinct from the earlier baby blues. Signs include persistent sadness, excessive worry, difficulty bonding, changes in appetite or sleep beyond what's explained by newborn care, or intrusive thoughts. These are common and highly treatable — mention any of these openly at your upcoming checkup, or sooner if you're struggling now.",
    whatsNormal: [
      "Bleeding mostly or fully resolved",
      "Well-healed external incision or perineal area",
      "Persistent fatigue from accumulated sleep loss",
      "Hair that still seems thick (shedding typically starts around 2–4 months)",
      "A more established feeding and sleep rhythm with baby",
      "Continued emotional ups and downs",
    ],
    warningSigns: [
      "Bleeding that hasn't tapered by week 4",
      "Any fever or signs of infection at incision sites",
      "Persistent pelvic pain, pressure, or heaviness",
      "Symptoms of depression or anxiety that are affecting daily function or bonding",
      "Any leaking of urine or stool",
      "Pain during urination (possible infection)",
    ],
    calculatorHighlight: {
      calculatorName: "Safe Postpartum Weight Loss Calculator",
      calculatorUrl: "/safe-weight-loss/",
      reason:
        "While intentional weight loss should generally wait until after your 6-week checkup, understanding safe rates now helps you plan appropriately once cleared.",
    },
    faqs: [
      {
        q: "Should bleeding have completely stopped by 4 weeks postpartum?",
        a: "For most mothers, yes — bleeding is usually resolved or down to occasional very light spotting by 4 weeks. Continued moderate bleeding at this point is worth mentioning at your upcoming postnatal checkup.",
      },
      {
        q: "When does postpartum hair loss start?",
        a: "Most mothers notice increased hair shedding starting around 2–4 months postpartum, not immediately. If you're losing significant hair at 4 weeks, this is earlier than typical and worth mentioning to your doctor, though it's not necessarily concerning.",
      },
      {
        q: "Is it normal to still feel exhausted at 4 weeks postpartum?",
        a: "Yes, this is extremely common. Four weeks of fragmented newborn sleep creates real, cumulative sleep debt that doesn't resolve quickly. Prioritising rest wherever possible remains important, and persistent extreme fatigue is worth mentioning to your doctor to rule out anemia or thyroid issues.",
      },
    ],
    breadcrumbLabel: "Week 4 Postpartum",
  },
  {
    slug: "postpartum-week-5",
    weekNumber: 5,
    metaTitle: "5 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "5 weeks postpartum — preparing for your 6-week checkup, what questions to ask, and realistic expectations for where your recovery should be.",
    h1: "5 Weeks Postpartum: What to Expect",
    intro:
      "Week five is largely a preparation week — for your six-week postnatal checkup, and for an honest self-assessment of how recovery is actually going versus how you feel it 'should' be going by now. This is a good week to write down questions and concerns rather than relying on memory during a checkup that often moves quickly.",
    physicalRecovery: [
      {
        heading: "Physical healing continues quietly",
        body: "Most external healing is complete by now, but internal tissue — particularly pelvic floor and abdominal fascia — is still actively remodeling and will continue to do so for months.",
      },
      {
        heading: "Preparing for your checkup",
        body: "Your six-week visit (or comprehensive postpartum visit, per current ACOG guidance which recommends comprehensive care within 12 weeks) should cover physical recovery, mood, feeding, contraception, and any chronic conditions. Write down anything you want addressed.",
      },
      {
        heading: "Pelvic floor and core check-in",
        body: "If you haven't already, this is a good time to notice any symptoms — leaking, heaviness, or abdominal doming — to specifically raise with your provider or request a pelvic floor physiotherapy referral.",
      },
      {
        heading: "Sex and intimacy timeline",
        body: "Most providers advise waiting until after the 6-week check before resuming penetrative intercourse, to allow for full assessment of healing. Readiness is also emotional, not just physical — there's no fixed timeline that applies to everyone.",
      },
    ],
    emotionalWellbeing:
      "If you've been quietly managing low mood, anxiety, or overwhelming feelings and telling yourself you'll 'mention it at the checkup' — this is a good week to actually write those feelings down honestly, in specific terms, so you don't minimize them in the moment. Postpartum mood concerns are common, and specific, honest reporting gets you better support than a general 'I'm fine, just tired.'",
    whatsNormal: [
      "Feeling physically much improved from the first weeks",
      "Still-present fatigue and disrupted sleep",
      "Some uncertainty about what's 'normal' at this stage",
      "Mixed feelings about the upcoming checkup — reassurance-seeking or anxiety",
      "A settling but still evolving feeding routine",
      "Continued absence of periods if breastfeeding (variable if not)",
    ],
    warningSigns: [
      "Any new or worsening bleeding",
      "Pelvic pain, pressure, or heaviness that concerns you",
      "Any leaking of urine or stool",
      "Persistent low mood, anxiety, or lack of interest in things you used to enjoy",
      "Fever or signs of infection anywhere",
      "Any symptom that has been present since birth and doesn't seem to be improving",
    ],
    calculatorHighlight: {
      calculatorName: "Return-to-Exercise Timeline Tool",
      calculatorUrl: "/exercise-timeline/",
      reason:
        "Once you have your 6-week checkup scheduled, it helps to know what a realistic, phase-by-phase return to exercise actually looks like based on your delivery type.",
    },
    faqs: [
      {
        q: "What should I ask at my 6-week postpartum checkup?",
        a: "Good questions include: how is my incision or perineal healing progressing, is my pelvic floor function normal, when can I resume exercise and intercourse, how is my mood being assessed, and what contraception is appropriate. Write your specific concerns down beforehand.",
      },
      {
        q: "Is it normal to still not feel like myself at 5 weeks postpartum?",
        a: "Yes, this is very common. Full physical and emotional recovery from childbirth takes months, not weeks. Feeling different from your pre-pregnancy self at 5 weeks is expected, not a sign that something is wrong.",
      },
      {
        q: "Should I mention mood concerns even if they feel minor?",
        a: "Yes. Postpartum mood symptoms exist on a spectrum, and what feels 'minor' can still benefit from support, and can also be an early sign of something that responds much better to early treatment. Providers would rather hear about it than have you wait.",
      },
    ],
    breadcrumbLabel: "Week 5 Postpartum",
  },
  {
    slug: "postpartum-week-6",
    weekNumber: 6,
    metaTitle: "6 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "6 weeks postpartum — your checkup, what clearance actually means, and the truth about what your body is and isn't ready for.",
    h1: "6 Weeks Postpartum: What to Expect",
    intro:
      "Six weeks is a symbolic milestone — the traditional postnatal checkup, and the point many people assume marks 'full recovery.' The honest truth is more nuanced: this checkup typically clears you from acute medical complications, not from the deeper, slower healing processes still underway in your pelvic floor, abdominal wall, and hormonal system. Understanding this distinction protects you from returning to full activity too quickly.",
    physicalRecovery: [
      {
        heading: "What your checkup actually confirms",
        body: "Your provider will typically check that your uterus has returned to size, any incision or tearing has healed well externally, and screen for postpartum depression and anxiety. This confirms freedom from acute complications — it does not mean full musculoskeletal recovery.",
      },
      {
        heading: "The fascia is still healing",
        body: "If you had a C-section, the abdominal fascia — cut during surgery — takes 6–12 months to regain full tensile strength, regardless of how the external wound looks. This affects when heavy lifting and high-impact exercise are truly safe.",
      },
      {
        heading: "Pelvic floor function, not just 'clearance'",
        body: "Being medically cleared does not mean your pelvic floor is functioning optimally. If you have any leaking, heaviness, or pain, ask specifically for a referral to a pelvic floor physiotherapist rather than assuming these will resolve on their own.",
      },
      {
        heading: "Periods and fertility",
        body: "If not breastfeeding, your period may return around now, though timing varies widely. If breastfeeding, especially exclusively, your period may be delayed for months — but ovulation can occur before your first period, so contraception matters even without a period.",
      },
    ],
    emotionalWellbeing:
      "The six-week checkup typically includes a formal depression screening — take it seriously and answer honestly, even if some answers feel uncomfortable. If you weren't screened, or want a more thorough conversation, it's entirely appropriate to ask for one. Six weeks in, most support networks have significantly quieted down, which can make this an isolating stretch even as you're expected to be 'back to normal.'",
    whatsNormal: [
      "Feeling physically much improved but not fully 'yourself'",
      "Receiving medical clearance while still having pelvic floor or core symptoms",
      "A wide range of feelings about returning to normal activities, work, or intimacy",
      "Continued fatigue, though usually less acute than earlier weeks",
      "Uncertainty about exactly what you're 'allowed' to do now",
    ],
    warningSigns: [
      "Any leaking of urine or stool that wasn't addressed at your checkup",
      "Pelvic heaviness, pressure, or a bulging sensation",
      "Persistent pain anywhere that hasn't improved",
      "A depression or anxiety screening result that concerns you, or that you disagreed with",
      "Any bleeding that resumes after having stopped",
      "Doming or coning of your abdomen during any activity",
    ],
    calculatorHighlight: {
      calculatorName: "Return-to-Exercise Timeline Tool",
      calculatorUrl: "/exercise-timeline/",
      reason:
        "Medical clearance at 6 weeks is the start of a gradual return to exercise, not a green light for your pre-pregnancy routine. Get a realistic, phase-by-phase timeline based on your delivery type.",
    },
    faqs: [
      {
        q: "Does being cleared at 6 weeks mean I can exercise normally again?",
        a: "No. The 6-week clearance typically confirms freedom from acute complications, not full readiness for high-impact exercise. Pelvic floor and core function, along with fascial healing after a C-section, continue for months beyond this point.",
      },
      {
        q: "Is it normal to still have pelvic floor symptoms after being cleared at 6 weeks?",
        a: "It's common but not something to simply accept. If you have leaking, heaviness, or pain after your 6-week clearance, ask your provider specifically for a referral to a pelvic floor physiotherapist rather than assuming it will resolve without support.",
      },
      {
        q: "When will my period return after having a baby?",
        a: "If you're not breastfeeding, your period may return within 6–8 weeks. If exclusively breastfeeding, it can be delayed for months. Importantly, ovulation can occur before your first period returns, so contraception is relevant even without a period.",
      },
    ],
    breadcrumbLabel: "Week 6 Postpartum",
  },
  {
    slug: "postpartum-week-7",
    weekNumber: 7,
    metaTitle: "7 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "7 weeks postpartum — life after your checkup, easing back into light activity, and realistic expectations for energy and mood.",
    h1: "7 Weeks Postpartum: What to Expect",
    intro:
      "With your six-week checkup behind you, week seven often feels like the start of a new phase — less defined by acute medical milestones and more by the slower work of rebuilding strength, stamina, and a sense of normalcy. It's common to feel pressure, internal or external, to be 'back' by now. The more useful frame is that you're at the beginning of a longer rebuilding phase, not the end of recovery.",
    physicalRecovery: [
      {
        heading: "Light activity becomes appropriate",
        body: "If you received clearance at your checkup and have no complications, gentle walking, light stretching, and pelvic floor-safe movement are generally appropriate now. This is not the same as returning to pre-pregnancy exercise intensity.",
      },
      {
        heading: "Core awareness matters more now",
        body: "If you haven't checked for diastasis recti (abdominal separation), now is a good time. Understanding your starting point prevents jumping into core exercises that could worsen an existing gap.",
      },
      {
        heading: "C-section fascia is still early in healing",
        body: "Even with a well-healed external scar, the fascia is only about 7 weeks into a 6–12 month healing process. This is why heavy lifting and high-impact exercise remain restricted regardless of how capable you feel.",
      },
      {
        heading: "Hormone levels are shifting again",
        body: "If not breastfeeding, oestrogen is returning toward baseline, which can affect mood, joint stability, and vaginal dryness. If breastfeeding, these changes are more gradual and tied to nursing frequency.",
      },
    ],
    emotionalWellbeing:
      "The gap between 'medically cleared' and 'feeling like yourself' can be genuinely disorienting at this stage. It's common to feel frustrated by a body that doesn't yet do what it used to, while also processing an identity shift that has nothing to do with physical recovery. Both are normal. If persistent low mood, anxiety, or intrusive thoughts are present, these don't need to wait for a future appointment — reach out to your provider now.",
    whatsNormal: [
      "Feeling capable of light activity but tiring quickly",
      "Ongoing uncertainty about what's actually safe to do",
      "Some vaginal dryness, especially if breastfeeding",
      "Continued adjustment to sleep and routine",
      "A mix of confidence and frustration about your body",
      "Joint or ligament looseness, especially if breastfeeding (relaxin remains elevated)",
    ],
    warningSigns: [
      "New or worsening pelvic pain, pressure, or heaviness",
      "Any leaking of urine or stool",
      "Pain during light activity that doesn't resolve with rest",
      "Persistent low mood, anxiety, or difficulty bonding",
      "Signs of infection anywhere: fever, redness, unusual discharge",
      "Abdominal doming or coning during any movement",
    ],
    calculatorHighlight: {
      calculatorName: "Return-to-Exercise Timeline Tool",
      calculatorUrl: "/exercise-timeline/",
      reason:
        "Now that you're past your 6-week checkup, get a clear, phase-by-phase plan for rebuilding activity safely based on your specific delivery type.",
    },
    faqs: [
      {
        q: "Why do I still feel weak at 7 weeks postpartum even though I was cleared?",
        a: "Medical clearance confirms you're free of acute complications, not that your strength and endurance have returned. Muscles, including the pelvic floor and core, take months of gradual rebuilding after the deconditioning of pregnancy and early postpartum recovery.",
      },
      {
        q: "Can I check for diastasis recti myself?",
        a: "A basic self-check involves lying on your back, knees bent, and feeling along your midline above and below your belly button while lifting your head slightly, checking for a gap and its depth. This gives a general sense, but a physical therapist can assess more precisely and guide appropriate exercises.",
      },
      {
        q: "Is it normal to have vaginal dryness at 7 weeks postpartum?",
        a: "Yes, especially if breastfeeding. Lower oestrogen levels during lactation commonly cause vaginal dryness, which can affect comfort during intimacy. This is a normal hormonal effect and improves as breastfeeding frequency decreases, and can be managed with lubricant in the meantime.",
      },
    ],
    breadcrumbLabel: "Week 7 Postpartum",
  },
  {
    slug: "postpartum-week-8",
    weekNumber: 8,
    metaTitle: "8 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "8 weeks postpartum — pelvic floor progress, scar healing, breastfeeding rhythm, and honest expectations for how far along you should be.",
    h1: "8 Weeks Postpartum: What to Expect",
    intro:
      "Two months in, many mothers start comparing themselves to a vague, often unrealistic idea of where they 'should' be. Actual recovery timelines vary enormously based on delivery type, complications, age, and overall health — there is no universal week-8 benchmark that applies to everyone. This week is a good point to focus on trends rather than comparisons: is your pain decreasing over time, is your energy trending upward, even if slowly.",
    physicalRecovery: [
      {
        heading: "Scar tissue can now be massaged",
        body: "If you had a C-section or significant perineal tearing, and the wound is fully closed with no scabbing, scar massage can typically begin around now. This helps prevent adhesions that can restrict movement and cause pain later.",
      },
      {
        heading: "Pelvic floor rehabilitation should be active, not passive",
        body: "If you haven't already sought a pelvic floor physiotherapy assessment, especially with any symptoms, 8 weeks is a reasonable point to actively pursue this rather than waiting to see if things improve on their own.",
      },
      {
        heading: "Breastfeeding is typically well-established",
        body: "Milk supply and feeding patterns are usually more predictable by now. If you're still struggling with supply, latch, or pain, ongoing support from a lactation consultant remains valuable — this doesn't have to resolve alone.",
      },
      {
        heading: "Low-impact exercise may be appropriate",
        body: "Swimming, once any wounds are fully healed, and stationary cycling are often reasonable low-impact options around this stage for mothers progressing well, though individual clearance always takes priority over general timelines.",
      },
    ],
    emotionalWellbeing:
      "By 8 weeks, the initial surge of support has usually faded significantly, and many mothers describe this stretch as quietly harder than the first weeks, precisely because the acute crisis energy has passed but full capacity hasn't returned. This mismatch between reduced support and ongoing significant needs is a common and under-discussed part of postpartum life. Naming it can help — both to yourself and to people around you who may assume you're 'through the hard part.'",
    whatsNormal: [
      "Uneven progress — some days feeling stronger, others not",
      "Scar tissue that feels tight or numb",
      "A more predictable but still demanding feeding routine",
      "Reduced but present fatigue",
      "Comparing your recovery to others' and feeling behind",
      "Renewed interest in some pre-pregnancy activities, tempered by capacity",
    ],
    warningSigns: [
      "Pelvic floor symptoms that haven't improved or are worsening",
      "Persistent pain during light activity",
      "Scar pain that is worsening rather than improving",
      "Signs of postpartum depression or anxiety",
      "Ongoing breastfeeding pain that hasn't resolved with support",
      "Any new bleeding after it had stopped",
    ],
    calculatorHighlight: {
      calculatorName: "Pelvic Floor Recovery Estimator",
      calculatorUrl: "/pelvic-floor-recovery/",
      reason:
        "If you haven't checked in on your pelvic floor recovery stage yet, 8 weeks is a good point to get a clear picture and understand whether a specialist referral makes sense.",
    },
    faqs: [
      {
        q: "Is it normal to still have scar pain at 8 weeks postpartum?",
        a: "Some tightness, numbness, or occasional discomfort at a C-section or perineal scar is common at this stage, and scar massage can help. Worsening pain, or pain that limits daily activity, should be discussed with your provider or a pelvic floor physiotherapist.",
      },
      {
        q: "When should I see a pelvic floor physiotherapist?",
        a: "If you have any leaking, heaviness, pain, or uncertainty about your pelvic floor function, seeking an assessment around 8 weeks — rather than waiting to see if symptoms resolve alone — generally leads to better outcomes. Many countries offer this on public healthcare; ask your provider about access.",
      },
      {
        q: "Why do I feel like I'm not progressing at 8 weeks postpartum?",
        a: "Recovery is rarely linear — plateaus and even temporary setbacks are common, often linked to activity level, sleep, and stress rather than a lack of actual healing. Focus on the broader trend over weeks rather than day-to-day comparisons, and raise any specific concerns with your provider.",
      },
    ],
    breadcrumbLabel: "Week 8 Postpartum",
  },
  {
    slug: "postpartum-week-9",
    weekNumber: 9,
    metaTitle: "9 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "9 weeks postpartum — building activity gradually, breastfeeding calorie needs, and navigating the return of energy and routine.",
    h1: "9 Weeks Postpartum: What to Expect",
    intro:
      "By nine weeks, many mothers are settling into a more established rhythm — not necessarily easier, but more predictable. This is often a good stretch to start thinking more intentionally about nutrition, gradual activity building, and longer-term wellbeing, rather than just getting through each day, if your circumstances allow for that shift in focus.",
    physicalRecovery: [
      {
        heading: "Gradual activity progression",
        body: "If you've been walking and doing gentle movement without symptoms, this is often an appropriate stage to slightly increase duration or introduce very light resistance work, provided you remain symptom-free — no leaking, heaviness, or pain.",
      },
      {
        heading: "Core rehabilitation continues",
        body: "If diastasis recti was identified earlier, targeted exercises — typically starting with deep core activation and progressing slowly — are appropriate now under guidance from a physical therapist or a well-designed postpartum program.",
      },
      {
        heading: "Nutrition needs remain elevated if breastfeeding",
        body: "Calorie and nutrient needs stay significantly above pre-pregnancy baseline while breastfeeding. It's easy to under-eat during this busy stretch, which can affect both energy and milk supply.",
      },
      {
        heading: "Sleep patterns may be shifting",
        body: "Some babies begin longer stretches of nighttime sleep around this age, which can meaningfully affect maternal energy levels, though every baby's pattern varies significantly.",
      },
    ],
    emotionalWellbeing:
      "As routines become more established, some mothers notice more mental space to reflect on the birth experience itself, which can bring up unprocessed emotions, even after a straightforward delivery. This is common and doesn't necessarily indicate a problem, but if thoughts about the birth are distressing, intrusive, or interfering with daily life, this can be a sign of postpartum PTSD or ongoing anxiety worth discussing with your provider.",
    whatsNormal: [
      "A more predictable, though still demanding, daily rhythm",
      "Gradually increasing physical capacity",
      "Renewed appetite changes as activity increases",
      "Processing birth experience emotions, sometimes unexpectedly",
      "Continued breastfeeding adjustments if applicable",
      "Variable energy depending on baby's sleep patterns",
    ],
    warningSigns: [
      "Symptoms (leaking, pain, heaviness) that appear with increased activity",
      "Persistent under-eating or unintentional rapid weight loss",
      "Distressing or intrusive thoughts about the birth",
      "Any new physical symptom that concerns you",
      "Signs of low milk supply if breastfeeding: reduced wet nappies, poor weight gain",
      "Ongoing sleep issues beyond what's explained by newborn care",
    ],
    calculatorHighlight: {
      calculatorName: "Breastfeeding Calorie Calculator",
      calculatorUrl: "/breastfeeding-calories/",
      reason:
        "As routines settle, it's a good time to check whether you're actually eating enough to support both breastfeeding and your own energy needs.",
    },
    faqs: [
      {
        q: "How much activity is safe at 9 weeks postpartum?",
        a: "If you're symptom-free with current activity, gradual increases in walking duration or introducing light resistance work is often appropriate, but this depends entirely on your individual recovery, delivery type, and any complications. When in doubt, check with your provider or a pelvic floor physiotherapist before progressing.",
      },
      {
        q: "Is it normal to think about my birth experience more at 9 weeks?",
        a: "Yes, as the initial intensity of newborn care settles slightly, some mothers find more mental space to process the birth, which can bring up emotions even after a straightforward delivery. This becomes a concern if thoughts are distressing, intrusive, or interfering with daily functioning — that warrants talking to your provider.",
      },
      {
        q: "Why is my milk supply lower some days at 9 weeks?",
        a: "Milk supply can fluctuate with stress, hydration, sleep, and calorie intake. Occasional fluctuation is normal; a sustained drop alongside reduced wet nappies or poor infant weight gain should be discussed with a lactation consultant or your doctor.",
      },
    ],
    breadcrumbLabel: "Week 9 Postpartum",
  },
  {
    slug: "postpartum-week-10",
    weekNumber: 10,
    metaTitle: "10 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "10 weeks postpartum — return to work considerations, sustained recovery progress, and preparing for the 12-week comprehensive visit.",
    h1: "10 Weeks Postpartum: What to Expect",
    intro:
      "Ten weeks often coincides with practical life decisions coming into focus — for many, the return to work is approaching, whether by choice or circumstance. This adds a layer of planning on top of ongoing physical and emotional recovery. It's a good week to be honest about what support you'll need, rather than assuming you should manage every transition independently.",
    physicalRecovery: [
      {
        heading: "Return-to-work physical considerations",
        body: "If returning to work soon, think through practical needs: pumping schedule and space if breastfeeding, physical demands of your role relative to your current capacity, and realistic expectations for the adjustment period.",
      },
      {
        heading: "Continued strength building",
        body: "If progressing well and symptom-free, this is often a stage where slightly more structured strength work becomes appropriate, always guided by your specific recovery rather than a generic timeline.",
      },
      {
        heading: "Pumping and milk supply logistics",
        body: "If you'll be pumping at work, establishing a pumping routine now — rather than waiting until your first day back — helps identify and address supply or logistics issues with less pressure.",
      },
      {
        heading: "Ongoing pelvic floor and core work",
        body: "Consistency matters more than intensity at this stage. Regular, appropriate pelvic floor and core exercises continue to build function gradually.",
      },
    ],
    emotionalWellbeing:
      "Anticipating a return to work — or any major routine change — can bring up complicated feelings: guilt, relief, anxiety, or grief, sometimes all at once. These reactions are common and don't indicate you're making the wrong choice; they reflect a genuinely significant transition. If anxiety about returning to work feels overwhelming rather than just uncomfortable, it's worth discussing with your provider or a therapist.",
    whatsNormal: [
      "Mixed emotions about upcoming transitions",
      "Increasing physical capacity, with some day-to-day variability",
      "Practical logistics planning taking up mental space",
      "Continued breastfeeding or pumping adjustments",
      "A sense of moving into a new, more established phase",
      "Some anxiety about work-life balance ahead",
    ],
    warningSigns: [
      "Overwhelming anxiety about returning to work that feels unmanageable",
      "Any physical symptom that hasn't improved over recent weeks",
      "Milk supply concerns as you consider pumping logistics",
      "Persistent sadness or difficulty finding enjoyment in things",
      "Physical pain that limits your ability to plan for work demands",
      "Sleep issues significantly beyond typical newborn-related disruption",
    ],
    calculatorHighlight: {
      calculatorName: "Breastfeeding Calorie Calculator",
      calculatorUrl: "/breastfeeding-calories/",
      reason:
        "If you're planning to continue breastfeeding or pumping after returning to work, understanding your calorie needs helps you maintain supply through the transition.",
    },
    faqs: [
      {
        q: "How do I prepare to pump at work?",
        a: "Establish your pumping routine before your first day back, know your workplace's pumping space and break policies, and build a small frozen milk reserve if possible. Many countries have legal protections for pumping breaks and space — it's worth knowing your rights in advance.",
      },
      {
        q: "Is it normal to feel anxious about returning to work at 10 weeks?",
        a: "Yes, this is an extremely common reaction to a major transition, regardless of how you feel about your job itself. If the anxiety feels overwhelming or is affecting your ability to function, talking to your provider or a therapist can help you navigate it.",
      },
      {
        q: "Will my milk supply drop when I go back to work?",
        a: "It can, particularly if pumping is less effective than direct nursing or if stress and schedule changes affect your routine. Establishing a consistent pumping schedule and staying well hydrated and nourished helps protect supply during the transition.",
      },
    ],
    breadcrumbLabel: "Week 10 Postpartum",
  },
  {
    slug: "postpartum-week-11",
    weekNumber: 11,
    metaTitle: "11 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "11 weeks postpartum — nearing the 12-week mark, continued physical progress, and what long-term recovery still looks like ahead.",
    h1: "11 Weeks Postpartum: What to Expect",
    intro:
      "As you approach the twelve-week mark — the outer boundary of ACOG's recommended comprehensive postpartum visit window — it's worth taking stock. Not to rush recovery, but to notice genuine progress that can be hard to see day to day, and to identify anything that still needs attention before your care plan potentially shifts to a lower-frequency follow-up rhythm.",
    physicalRecovery: [
      {
        heading: "Taking stock of recovery so far",
        body: "Compare how you feel now to four or eight weeks ago rather than to a pre-pregnancy baseline. Most mothers find meaningful, if uneven, progress across bleeding resolution, incision healing, energy, and strength when viewed over this longer window.",
      },
      {
        heading: "Identifying unresolved issues",
        body: "If you still have pelvic floor symptoms, persistent pain, unresolved mood concerns, or breastfeeding difficulties, this is an important week to actively seek support rather than assuming these will resolve with more time alone.",
      },
      {
        heading: "Building toward more structured activity",
        body: "For mothers progressing well, this stage often supports a return to more varied exercise — provided pelvic floor function is solid and any core issues are being appropriately addressed.",
      },
      {
        heading: "Longer-term breastfeeding considerations",
        body: "If continuing to breastfeed long-term, this is a natural point to think about sustainable routines, rather than the intensive early establishment phase, and to revisit your nutritional needs accordingly.",
      },
    ],
    emotionalWellbeing:
      "Approaching the three-month mark can bring a mix of pride in how far you've come and frustration about what still feels unresolved. Both can coexist. If you've been managing mood symptoms independently and they haven't meaningfully improved by now, this is a good time to seek support rather than waiting further — postpartum depression and anxiety can persist well beyond the early months without treatment, and improve significantly with it.",
    whatsNormal: [
      "Noticeable cumulative progress alongside lingering issues",
      "A mix of confidence and ongoing uncertainty",
      "Continued fatigue, though usually more manageable",
      "Renewed focus on longer-term routines and goals",
      "Variable feelings about the pace of recovery",
      "Physical capacity that's meaningfully improved from early weeks",
    ],
    warningSigns: [
      "Pelvic floor or core symptoms that haven't improved with appropriate exercise",
      "Persistent mood symptoms that haven't been addressed",
      "Ongoing pain of any kind that limits daily function",
      "Breastfeeding difficulties that haven't resolved with support",
      "Any symptom you've been putting off mentioning to your provider",
      "A sense that something isn't right, even without a specific symptom",
    ],
    calculatorHighlight: {
      calculatorName: "Return-to-Exercise Timeline Tool",
      calculatorUrl: "/exercise-timeline/",
      reason:
        "Approaching 12 weeks is a natural checkpoint to reassess where you are in your return-to-exercise progression and what phase comes next.",
    },
    faqs: [
      {
        q: "What should I have accomplished by 11 weeks postpartum?",
        a: "There's no universal checklist — progress varies enormously by individual circumstances, delivery type, and complications. A more useful marker is whether you're seeing improvement over recent weeks, even if slow, and whether specific symptoms are being actively addressed rather than just endured.",
      },
      {
        q: "Is it too late to get help for postpartum depression at 11 weeks?",
        a: "No. Postpartum depression and anxiety can be effectively treated regardless of when you seek help, whether that's weeks or months after birth. There is no expiration window on getting support, and earlier treatment does tend to lead to faster improvement.",
      },
      {
        q: "Should I still be resting a lot at 11 weeks postpartum?",
        a: "Most mothers have more capacity by this stage than in the early weeks, but full energy restoration, especially while breastfeeding and managing disrupted sleep, often takes longer. Listening to your body's signals remains more useful than a fixed expectation.",
      },
    ],
    breadcrumbLabel: "Week 11 Postpartum",
  },
  {
    slug: "postpartum-week-12",
    weekNumber: 12,
    metaTitle: "12 Weeks Postpartum: What to Expect | Recovery Guide",
    metaDescription:
      "12 weeks postpartum — the fourth trimester milestone, comprehensive checkup guidance, and an honest look at what recovery still involves beyond this point.",
    h1: "12 Weeks Postpartum: What to Expect",
    intro:
      "Twelve weeks marks the end of what's commonly called the 'fourth trimester' and the outer boundary of ACOG's recommended window for a comprehensive postpartum visit. It's a meaningful milestone, but not a finish line. Pelvic floor and core strength, hormonal rebalancing, and emotional adjustment often continue well beyond this point — this week is a good moment to shift from acute recovery mode into a longer-term view of ongoing health.",
    physicalRecovery: [
      {
        heading: "The comprehensive postpartum visit",
        body: "ACOG recommends this visit occur no later than 12 weeks postpartum, covering physical recovery, mood, sleep, feeding, contraception, chronic condition management, and future pregnancy planning if relevant. If you haven't had this visit yet, prioritise scheduling it now.",
      },
      {
        heading: "Where fascia and pelvic floor healing actually stand",
        body: "If you had a C-section, the fascia is roughly a quarter of the way through its full 6–12 month healing timeline. Pelvic floor and core strength, for most mothers, continue improving for 6 months to a year with appropriate rehabilitation.",
      },
      {
        heading: "A realistic view of 'recovered'",
        body: "Many mothers feel largely recovered by 12 weeks, especially with an uncomplicated birth and good support. Others, particularly after complications, C-section, or significant pelvic floor issues, are still in active recovery — both are entirely normal, and neither reflects anything about how well you're doing.",
      },
      {
        heading: "Long-term health beyond the fourth trimester",
        body: "This is a reasonable point to think about longer-term wellbeing: sustainable exercise routines, nutrition that supports your actual life rather than the acute postpartum period, and ongoing mental health support if needed.",
      },
    ],
    emotionalWellbeing:
      "The 'fourth trimester' framework, useful as it is, can create pressure to feel resolved by 12 weeks specifically. There is no biological switch that flips at this point — healing and adjustment continue on their own timeline for each person. If you're not where you expected to be, that's information worth sharing with your provider, not a personal failing. If you are feeling well, that's equally valid and doesn't require justification either.",
    whatsNormal: [
      "A wide range of how 'recovered' you feel, all of it valid",
      "Ongoing pelvic floor or core work continuing for months yet",
      "Ongoing breastfeeding, if applicable, well into an established rhythm",
      "Continued emotional adjustment to your new normal",
      "A mix of relief and uncertainty about what comes next",
      "Physical capacity that's substantially improved but perhaps not fully back to baseline",
    ],
    warningSigns: [
      "Any symptom you've been managing alone without improvement",
      "Persistent mood symptoms that haven't been assessed",
      "Pelvic floor symptoms — leaking, heaviness, pain — that haven't resolved",
      "Not having had a comprehensive postpartum visit yet",
      "Physical pain that's limiting your daily life",
      "A sense that something isn't right, even without being able to name it specifically",
    ],
    calculatorHighlight: {
      calculatorName: "Safe Postpartum Weight Loss Calculator",
      calculatorUrl: "/safe-weight-loss/",
      reason:
        "By 12 weeks, many mothers are cleared to think about weight loss more intentionally. Find a safe, personalised rate that supports both your goals and ongoing recovery.",
    },
    faqs: [
      {
        q: "What happens at the 12-week comprehensive postpartum visit?",
        a: "This visit typically covers a full physical recovery check, mood and mental health screening, sleep and feeding review, contraception planning, management of any chronic conditions, and discussion of future pregnancy plans if relevant. It's more thorough than the earlier 6-week check.",
      },
      {
        q: "Should I feel fully recovered by 12 weeks postpartum?",
        a: "Not necessarily. While many mothers feel substantially recovered by this point, pelvic floor and core strength, hormonal rebalancing, and emotional adjustment commonly continue for 6 months to a year. Feeling not fully recovered at 12 weeks is common and not a cause for concern on its own.",
      },
      {
        q: "Is it normal to still be building strength at 12 weeks postpartum?",
        a: "Yes. Full recovery of pelvic floor and core function typically takes 6 months to a year with appropriate rehabilitation, particularly after a C-section or significant pelvic floor symptoms. Twelve weeks is a meaningful checkpoint, not an endpoint.",
      },
    ],
    breadcrumbLabel: "Week 12 Postpartum",
  },
];
