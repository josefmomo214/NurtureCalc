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
];
