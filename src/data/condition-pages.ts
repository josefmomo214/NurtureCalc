export interface ConditionPage {
  slug: string;
  calculatorUrl: string;
  calculatorName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keyPoints: { heading: string; body: string }[];
  whenToUseCalculator: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  breadcrumbLabel: string;
}

export const conditionPages: ConditionPage[] = [
  {
    slug: "safe-weight-loss-c-section",
    calculatorUrl: "/safe-weight-loss/",
    calculatorName: "Safe Postpartum Weight Loss Calculator",
    metaTitle: "Safe Weight Loss After C-Section | Postpartum Rate Calculator",
    metaDescription:
      "Find your safe weekly weight loss rate after a c-section. Accounts for surgical recovery, breastfeeding status, and weeks postpartum. Free, no sign-up.",
    h1: "Safe Weight Loss After a C-Section",
    intro:
      "Losing weight after a caesarean section requires a different timeline than after a vaginal birth. Your body is recovering from major abdominal surgery — the skin may close within weeks, but the internal fascial layers take 6–12 months to regain full strength. Aggressive calorie restriction during this window diverts resources away from tissue repair and can increase the risk of complications including wound breakdown and infection. This page explains what a safe rate looks like specifically after a c-section, and the calculator below will give you a personalised weekly target based on your exact stage and breastfeeding status.",
    keyPoints: [
      {
        heading: "Wait until at least 8 weeks postpartum",
        body: "Most c-section mothers should not pursue intentional weight loss before 8 weeks. The body needs adequate protein and calories to repair the uterine wall, fascia, and abdominal muscle layers during this window.",
      },
      {
        heading: "Breastfeeding changes the equation",
        body: "If you are breastfeeding after a c-section, your body is simultaneously healing surgical wounds and producing milk. The safe rate of loss is 0.25–0.5 kg per week maximum — losing faster than this risks both milk supply and wound healing.",
      },
      {
        heading: "C-section bloating is not fat",
        body: "The swelling and bloating common after a c-section is caused by trapped surgical gas, fluid retention from IV fluids, and internal inflammation — not fat gain. This resolves on its own and does not respond to calorie restriction.",
      },
      {
        heading: "Core engagement affects healing",
        body: "Avoiding exercises that increase intra-abdominal pressure in the first 12 weeks protects the healing incision. High-impact exercise and heavy lifting should wait until the fascia has had adequate time to knit — this is separate from weight loss but affects your overall recovery approach.",
      },
    ],
    whenToUseCalculator:
      "Use the calculator once you are at least 6 weeks postpartum and have been cleared at your postnatal check. Enter your current weight, your exact weeks postpartum, and your breastfeeding status to get a safe maximum weekly loss rate tailored to your stage.",
    ctaHeading: "Find your safe rate after your c-section",
    ctaBody:
      "Enter your current weight, weeks postpartum, and breastfeeding status. The calculator returns a personalised maximum weekly loss rate based on clinical guidelines for surgical postpartum recovery.",
    ctaButton: "Open Safe Weight Loss Calculator →",
    faqs: [
      {
        q: "When can I start trying to lose weight after a c-section?",
        a: "Most guidelines recommend waiting until at least 8–12 weeks postpartum after a c-section before pursuing intentional weight loss. Your body needs adequate nutrition for wound healing during this period.",
      },
      {
        q: "Why is my weight loss slower after a c-section than after a vaginal birth?",
        a: "C-section recovery requires more energy for tissue repair. Breastfeeding while recovering from surgery places additional demands on your body. A slower rate of loss during the first 3 months is normal and protective.",
      },
      {
        q: "Is the c-section 'pouch' permanent?",
        a: "The overhang above the c-section scar is caused partly by scar adhesions pulling the skin downward and partly by swelling. Scar massage from week 8–10 can significantly reduce it. Some change in the lower abdominal contour is normal and permanent for many women.",
      },
    ],
    relatedSlugs: [
      "safe-weight-loss-formula-feeding",
      "exercise-timeline-c-section",
      "pelvic-floor-recovery-c-section",
    ],
    breadcrumbLabel: "Safe Weight Loss After C-Section",
  },
  {
    slug: "safe-weight-loss-twins",
    calculatorUrl: "/safe-weight-loss/",
    calculatorName: "Safe Postpartum Weight Loss Calculator",
    metaTitle: "Postpartum Weight Loss After Twins | Safe Rate Calculator",
    metaDescription:
      "Find a safe weekly weight loss rate after a twin pregnancy. Accounts for higher gestational weight gain, breastfeeding twins, and extended recovery needs.",
    h1: "Postpartum Weight Loss After a Twin Pregnancy",
    intro:
      "Twin pregnancies involve higher recommended gestational weight gain, greater physical strain on the body, and often a longer recovery period — particularly if the birth was via c-section, which is more common with multiples. If you are breastfeeding twins, your calorie needs are significantly higher than singleton nursing mothers. This combination means that the timeline and safe rate for postpartum weight loss after twins looks different from standard postpartum guidance, and generic calculators that do not account for your specific situation can give you misleading targets.",
    keyPoints: [
      {
        heading: "Higher starting weight is expected and normal",
        body: "Recommended gestational weight gain for a twin pregnancy is 17–25 kg for a normal BMI — significantly more than the 11–16 kg recommended for singletons. The return to pre-pregnancy weight naturally takes longer.",
      },
      {
        heading: "Breastfeeding twins doubles the calorie demand",
        body: "Exclusively breastfeeding two babies requires approximately 800–1,000 extra calories per day above your baseline. Attempting weight loss while breastfeeding twins without accounting for this dramatically increases the risk of supply issues and maternal depletion.",
      },
      {
        heading: "Pelvic floor and core recovery takes longer",
        body: "The additional weight and pressure of a twin pregnancy places greater strain on the pelvic floor and abdominal wall. Clearance for exercise, which supports sustainable weight loss, may take longer than after a singleton pregnancy.",
      },
      {
        heading: "The same safe rate still applies",
        body: "Despite higher total weight to lose, the safe maximum weekly rate of 0.25–0.5 kg remains the same for breastfeeding mothers. Faster loss is not safer just because there is more to lose — it still risks milk supply and recovery.",
      },
    ],
    whenToUseCalculator:
      "Use the calculator from 8–12 weeks postpartum. If you are breastfeeding both babies, select the exclusive breastfeeding option — the calculator will add the appropriate nursing calorie buffer to protect your supply.",
    ctaHeading: "Get a safe weight loss rate for your twin recovery",
    ctaBody:
      "The calculator uses your current weight, weeks postpartum, and breastfeeding status to return a safe maximum weekly loss rate — personalised to where you are right now.",
    ctaButton: "Open Safe Weight Loss Calculator →",
    faqs: [
      {
        q: "How long does it take to lose the baby weight after twins?",
        a: "Most mothers who carried twins take 12–18 months to return to their pre-pregnancy weight, compared to 6–12 months after a singleton. This is a normal timeline — the body gained more and needs more time to recover.",
      },
      {
        q: "Can I breastfeed twins and still lose weight?",
        a: "Yes, but the timeline is slower. Breastfeeding twins burns significant additional calories but prolactin also promotes fat retention. Most twin-nursing mothers see more noticeable weight loss after 4–6 months postpartum.",
      },
      {
        q: "Should I use a different calorie target when breastfeeding twins?",
        a: "Yes. Use our Breastfeeding Calorie Calculator and note that it adds 500 kcal for exclusive breastfeeding. If you are nursing two babies, your actual needs may be closer to 800–1,000 kcal above baseline — discuss this with your dietitian.",
      },
    ],
    relatedSlugs: [
      "safe-weight-loss-c-section",
      "breastfeeding-calories-twins",
      "safe-weight-loss-formula-feeding",
    ],
    breadcrumbLabel: "Weight Loss After Twins",
  },
  {
    slug: "safe-weight-loss-formula-feeding",
    calculatorUrl: "/safe-weight-loss/",
    calculatorName: "Safe Postpartum Weight Loss Calculator",
    metaTitle:
      "Postpartum Weight Loss When Formula Feeding | Safe Rate Calculator",
    metaDescription:
      "Find your safe weekly weight loss rate when formula feeding. Without breastfeeding demands, the timeline and targets differ. Free postpartum calculator.",
    h1: "Postpartum Weight Loss When Formula Feeding",
    intro:
      "If you are formula feeding, you do not have the breastfeeding calorie demands or prolactin-driven fat retention that affects nursing mothers — but your body still needs adequate nutrition to recover from childbirth. The absence of breastfeeding means a slightly faster safe rate of loss is possible after the initial recovery window, but it does not mean aggressive dieting is appropriate or safe in the early postpartum months.",
    keyPoints: [
      {
        heading: "Recovery still comes first",
        body: "Whether breastfeeding or not, the first 6 weeks postpartum should focus on healing rather than weight loss. Childbirth — vaginal or surgical — is a major physiological event that requires protein, micronutrients, and adequate calories to recover from properly.",
      },
      {
        heading: "The safe rate is slightly higher without breastfeeding",
        body: "For non-breastfeeding mothers after the 6-week mark, a safe rate of loss is generally up to 0.75 kg per week. This is still a modest rate — crash dieting and very low calorie approaches are counterproductive, causing muscle loss and compounding postpartum fatigue.",
      },
      {
        heading: "Hormonal changes still affect weight",
        body: "Without the hormonal environment of breastfeeding, oestrogen levels return to baseline more quickly. This can actually make weight loss somewhat more predictable for formula-feeding mothers, but cortisol from sleep deprivation continues to promote fat retention regardless of feeding method.",
      },
      {
        heading: "Thyroid function is worth monitoring",
        body: "Postpartum thyroiditis affects up to 10% of mothers and can cause unexpected weight gain or difficulty losing weight. If your weight is not responding to reasonable effort by 3–4 months postpartum, ask your doctor to check your thyroid function.",
      },
    ],
    whenToUseCalculator:
      "Select 'Not breastfeeding' in the calculator. Enter your current weight and weeks postpartum to get a personalised safe maximum weekly rate. The calculator accounts for the different threshold that applies when you are not nursing.",
    ctaHeading: "Find your personalised weight loss rate",
    ctaBody:
      "Select your feeding status, enter your current weight and weeks postpartum. The calculator returns a safe maximum weekly loss rate adjusted for non-breastfeeding recovery.",
    ctaButton: "Open Safe Weight Loss Calculator →",
    faqs: [
      {
        q: "Is it easier to lose weight postpartum if you are not breastfeeding?",
        a: "Potentially slightly faster in some cases — formula feeding mothers do not have prolactin promoting fat retention. However, sleep deprivation, cortisol, and postpartum hormonal shifts affect weight in all new mothers regardless of feeding method.",
      },
      {
        q: "How soon can I diet after giving birth if I am not breastfeeding?",
        a: "Most guidelines suggest waiting until at least 6 weeks postpartum before pursuing intentional weight loss, even without breastfeeding. Your body needs adequate nutrition for tissue repair and hormonal rebalancing during this initial recovery window.",
      },
      {
        q: "What is the minimum safe calorie intake postpartum when not breastfeeding?",
        a: "Most guidelines recommend a minimum of 1,500–1,800 kcal per day postpartum even without breastfeeding demands. Dropping significantly below this impairs healing, worsens fatigue, and tends to cause muscle loss rather than fat loss.",
      },
    ],
    relatedSlugs: [
      "safe-weight-loss-c-section",
      "safe-weight-loss-twins",
      "exercise-timeline-c-section",
    ],
    breadcrumbLabel: "Weight Loss When Formula Feeding",
  },
  {
    slug: "breastfeeding-calories-twins",
    calculatorUrl: "/breastfeeding-calories/",
    calculatorName: "Breastfeeding Calorie Calculator",
    metaTitle:
      "Breastfeeding Calories for Twins | How Many Extra Calories Do You Need?",
    metaDescription:
      "Breastfeeding twins burns significantly more calories than nursing one baby. Find out how many extra calories you need daily when nursing two. Free calculator.",
    h1: "Breastfeeding Calorie Needs When Nursing Twins",
    intro:
      "Breastfeeding one baby burns approximately 400–500 extra calories per day. Breastfeeding two babies simultaneously or in sequence can increase that figure to 800–1,000 extra calories per day — equivalent to running 8–10 kilometres every single day while sleep deprived and recovering from birth. Understanding your actual calorie needs when nursing twins is not a wellness nicety — it is essential for protecting your milk supply, your recovery, and your mental health.",
    keyPoints: [
      {
        heading: "Your needs scale with total milk output, not number of babies",
        body: "The calorie cost of breastfeeding is approximately 70 kcal per 100ml of milk produced. If you are producing 1,200–1,600ml per day to feed two babies, your nursing calorie cost is proportionally higher than a singleton nursing mother producing 750–800ml.",
      },
      {
        heading: "Prolactin demand is higher with two babies",
        body: "Nursing two babies, whether tandem or in sequence, keeps prolactin elevated for longer periods throughout the day. This drives a higher ongoing metabolic demand and also means the hormonal suppression of weight loss is more pronounced in the early months.",
      },
      {
        heading: "Under-eating is a leading cause of supply issues in twin nursing",
        body: "Many twin-nursing mothers experience supply problems not because their bodies cannot produce enough milk, but because they are not consuming enough calories and fluids to sustain the demand. Prioritising your own nutrition directly protects your babies' feeding.",
      },
      {
        heading: "The calculator uses singleton nursing rates — adjust upward",
        body: "Our breastfeeding calorie calculator adds 500 kcal for exclusive breastfeeding based on singleton production averages. If you are exclusively nursing twins, your real needs may be 300–500 kcal higher than the result shown. Treat the calculator output as a floor, not a ceiling.",
      },
    ],
    whenToUseCalculator:
      "Select Exclusive breastfeeding in the nursing status field. Add approximately 300–500 kcal to the result if you are nursing two babies with minimal or no formula supplementation. Use the result as your minimum daily calorie target.",
    ctaHeading: "Calculate your baseline calorie needs",
    ctaBody:
      "Start with the calculator to find your TDEE and baseline nursing needs. Then add 300–500 kcal to account for twin nursing production above the singleton baseline.",
    ctaButton: "Open Breastfeeding Calorie Calculator →",
    faqs: [
      {
        q: "How many extra calories do you need when breastfeeding twins?",
        a: "Approximately 800–1,000 extra calories per day above your baseline TDEE if you are exclusively nursing two babies. This is roughly double the 400–500 kcal added for singleton breastfeeding.",
      },
      {
        q: "How do I know if I am eating enough when breastfeeding twins?",
        a: "Key signals: both babies are producing adequate wet nappies and gaining weight consistently, you are not experiencing extreme fatigue beyond normal newborn tiredness, and your milk supply feels consistent. Persistent supply dips despite frequent nursing often indicate under-eating.",
      },
      {
        q: "Can I lose weight while breastfeeding twins?",
        a: "A very modest calorie deficit is possible after 12 weeks, but it is not advisable to pursue weight loss aggressively while nursing two babies. Your priority during this period is sustaining supply and your own recovery.",
      },
    ],
    relatedSlugs: [
      "safe-weight-loss-twins",
      "breastfeeding-calories-pumping",
      "breastfeeding-calories-toddler",
    ],
    breadcrumbLabel: "Breastfeeding Calories for Twins",
  },
  {
    slug: "breastfeeding-calories-pumping",
    calculatorUrl: "/breastfeeding-calories/",
    calculatorName: "Breastfeeding Calorie Calculator",
    metaTitle:
      "Calories Burned Pumping Breast Milk | How Many Extra Do You Need?",
    metaDescription:
      "Pumping breast milk burns similar calories to direct nursing. Find out exactly how many extra calories you need when exclusively pumping. Free calculator.",
    h1: "Calorie Needs When Exclusively Pumping",
    intro:
      "Exclusively pumping — providing breast milk entirely through a pump rather than direct nursing — carries similar calorie demands to direct breastfeeding, since the metabolic cost is determined by total milk output rather than delivery method. However, exclusively pumping mothers often underestimate their nutritional needs because the physical act of pumping feels less demanding than nursing. If your total daily output is equivalent to a nursing mother's, your calorie needs are equivalent too.",
    keyPoints: [
      {
        heading: "Calorie cost is determined by output volume",
        body: "The body uses approximately 70 kcal to produce 100ml of breast milk regardless of how that milk is delivered. An exclusively pumping mother producing 750–800ml per day has the same calorie demand as a directly nursing mother of the same output.",
      },
      {
        heading: "Pumping may not trigger prolactin as strongly as direct nursing",
        body: "The physical act of a baby nursing stimulates prolactin more powerfully than a pump in many women. This can mean exclusively pumping mothers see their periods return slightly earlier and may experience a more modest prolactin-driven fat retention effect.",
      },
      {
        heading: "Hydration is critical for pumping output",
        body: "Adequate fluid intake is essential for maintaining milk volume when pumping. Aim for at least 2.5–3 litres of fluid per day. Dehydration reduces output faster than calorie restriction and is a common overlooked cause of supply dips in pumping mothers.",
      },
      {
        heading: "Session frequency affects total output and therefore calorie demand",
        body: "Mothers pumping 8–12 times per day to establish full supply have a higher daily calorie need than those pumping 4–6 times as supply begins to consolidate. Your calorie needs will naturally decrease as you reduce pumping sessions during weaning.",
      },
    ],
    whenToUseCalculator:
      "Select Exclusive breastfeeding if your total daily output is equivalent to full breastfeeding volume (750ml+). Select Partial if your output is lower or you are supplementing significantly with formula.",
    ctaHeading: "Find your pumping calorie needs",
    ctaBody:
      "The calculator estimates your total daily calorie needs based on your body stats, activity level, and nursing status. Select exclusive or partial breastfeeding depending on your total daily output.",
    ctaButton: "Open Breastfeeding Calorie Calculator →",
    faqs: [
      {
        q: "Does pumping burn as many calories as breastfeeding directly?",
        a: "Yes, if your total milk output is equivalent. The calorie cost of lactation is determined by volume produced, not delivery method. An exclusively pumping mother producing 800ml per day uses the same energy as a directly nursing mother of the same output.",
      },
      {
        q: "Why am I losing weight faster pumping than I did when nursing directly?",
        a: "Pumping may trigger less prolactin-driven fat retention than direct nursing in some women. You may also be more accurately tracking your output and therefore your calorie needs. A modest faster rate of loss is normal when pumping if supply is maintained.",
      },
      {
        q: "How do I maintain my milk supply while pumping and trying to lose weight?",
        a: "Do not drop below 1,500 kcal per day and prioritise protein and hydration. A deficit of 250–300 kcal below your TDEE is the maximum advisable while maintaining full pumping output. Monitor output closely — a significant drop is a signal to increase intake.",
      },
    ],
    relatedSlugs: [
      "breastfeeding-calories-twins",
      "breastfeeding-calories-toddler",
      "safe-weight-loss-formula-feeding",
    ],
    breadcrumbLabel: "Calories When Pumping",
  },
  {
    slug: "breastfeeding-calories-toddler",
    calculatorUrl: "/breastfeeding-calories/",
    calculatorName: "Breastfeeding Calorie Calculator",
    metaTitle:
      "Breastfeeding Calorie Needs at 12+ Months | Nursing a Toddler Calculator",
    metaDescription:
      "Calorie needs when breastfeeding a toddler are lower than in the newborn stage but still significant. Find your personalised daily target. Free calculator.",
    h1: "Breastfeeding Calorie Needs When Nursing a Toddler",
    intro:
      "Breastfeeding calorie needs change significantly as your baby grows and begins eating solid foods. By 12 months, most toddlers are getting a substantial proportion of their nutrition from food, which means your total daily milk production — and therefore your nursing calorie demand — is lower than in the newborn stage. However, many mothers nursing toddlers still significantly underestimate how much energy breastfeeding continues to require, particularly if nursing is frequent or includes overnight feeds.",
    keyPoints: [
      {
        heading: "Calorie needs decrease as nursing frequency decreases",
        body: "The nursing calorie bonus scales with milk output. A mother nursing a toddler 3–4 times per day may need an extra 150–250 kcal above baseline, compared to the 500 kcal added for exclusive newborn nursing. The change is gradual, not sudden.",
      },
      {
        heading: "Overnight nursing maintains higher demand",
        body: "If your toddler still nurses frequently overnight, your prolactin levels remain elevated and your milk output stays higher than in mothers whose toddlers sleep through. This keeps your calorie needs closer to the early nursing stage.",
      },
      {
        heading: "Nutritional density matters more at this stage",
        body: "As total food intake approaches a more normal baseline, the quality of what you eat becomes proportionally more important. Iron, calcium, and omega-3 intake in particular warrant attention when nursing is the only remaining source of certain nutrients for your toddler.",
      },
      {
        heading: "Weaning affects hunger cues",
        body: "Many mothers notice their appetite decreases as nursing frequency reduces. This is the body naturally downregulating the nursing calorie signal. Follow your hunger cues downward as you wean — do not maintain early postpartum calorie intake indefinitely.",
      },
    ],
    whenToUseCalculator:
      "Select Partial breastfeeding if your toddler nurses 2–4 times per day alongside a full solid food diet. Select Not breastfeeding if feeds have reduced to once daily or less. The calculator will add 300 kcal for partial nursing above your TDEE.",
    ctaHeading: "Find your calorie needs at this nursing stage",
    ctaBody:
      "Your needs have changed since the early weeks. Enter your current stats and nursing status to get an updated daily calorie target that reflects where you are now — not where you were at 6 weeks postpartum.",
    ctaButton: "Open Breastfeeding Calorie Calculator →",
    faqs: [
      {
        q: "Do I still need extra calories when breastfeeding a 12-month-old?",
        a: "Yes, but fewer than in the newborn stage. If nursing 3–4 times per day, you likely need an extra 150–300 kcal above your non-nursing baseline. The exact amount depends on your total daily milk output at this stage.",
      },
      {
        q: "Will my appetite naturally decrease as I wean my toddler?",
        a: "Yes, for most mothers. As nursing frequency reduces, prolactin falls and the hunger drive associated with lactation decreases. This is normal and healthy — you do not need to maintain early postpartum calorie intake once nursing reduces significantly.",
      },
      {
        q: "Can I lose the remaining baby weight while still nursing a toddler?",
        a: "Yes. By 12 months, most breastfeeding mothers can pursue a modest calorie deficit without impacting toddler nursing significantly. A reduction of 250–300 kcal below TDEE is generally safe at this stage.",
      },
    ],
    relatedSlugs: [
      "breastfeeding-calories-pumping",
      "breastfeeding-calories-twins",
      "safe-weight-loss-formula-feeding",
    ],
    breadcrumbLabel: "Breastfeeding a Toddler — Calories",
  },
  {
    slug: "pelvic-floor-recovery-episiotomy",
    calculatorUrl: "/pelvic-floor-recovery/",
    calculatorName: "Pelvic Floor Recovery Estimator",
    metaTitle:
      "Pelvic Floor Recovery After Episiotomy | What to Expect and When",
    metaDescription:
      "Episiotomy affects pelvic floor recovery significantly. Learn what to expect, how long healing takes, and get a personalised recovery stage assessment.",
    h1: "Pelvic Floor Recovery After an Episiotomy",
    intro:
      "An episiotomy — a surgical cut to the perineum made during delivery — affects pelvic floor recovery in ways that are distinct from a natural tear or an uncomplicated vaginal birth. The surgical incision cuts through perineal tissue and sometimes into the pelvic floor muscle itself, creating a wound that requires careful healing before rehabilitation can begin. Recovery timelines and the type of pelvic floor dysfunction that can follow an episiotomy differ from other birth types, and generic postpartum pelvic floor advice does not always account for this.",
    keyPoints: [
      {
        heading: "Tissue healing takes 4–6 weeks before rehabilitation begins",
        body: "The stitches from an episiotomy typically dissolve within 2–4 weeks, but the underlying tissue continues to heal for 4–6 weeks. Active pelvic floor exercises should be very gentle during this period — focus on relaxation and circulation rather than contraction.",
      },
      {
        heading: "Scar tissue can cause long-term problems if not addressed",
        body: "An episiotomy scar can become tight, restrict movement, or adhere to surrounding tissue. Scar massage, which can begin once the wound is fully closed (usually 6–8 weeks), helps keep the tissue mobile and reduces the risk of painful intercourse and restricted movement.",
      },
      {
        heading: "Hypertonic (tight) pelvic floor is common after episiotomy",
        body: "Counter-intuitively, episiotomy can result in a pelvic floor that is too tight rather than too weak. The body's protective response to pain and trauma can cause muscles to guard and tighten. Doing Kegels on a hypertonic pelvic floor worsens symptoms — assessment by a pelvic floor physiotherapist is essential before starting any exercise programme.",
      },
      {
        heading: "Pain with intercourse is common and treatable",
        body: "Dyspareunia — painful intercourse — is one of the most common long-term effects of episiotomy. It is caused by scar tissue tightness, muscle guarding, and sometimes low oestrogen from breastfeeding. It is treatable with targeted pelvic floor physiotherapy and does not have to be permanent.",
      },
    ],
    whenToUseCalculator:
      "Use the estimator from 6 weeks postpartum. Answer the symptom questions honestly — if you are experiencing pain or tightness, the tool will reflect a recovery stage that recommends professional assessment rather than self-directed exercise.",
    ctaHeading: "Assess your recovery stage after episiotomy",
    ctaBody:
      "The Pelvic Floor Recovery Estimator uses your weeks postpartum and current symptoms to give you a personalised stage assessment and next steps — specific to where you are in your recovery right now.",
    ctaButton: "Open Pelvic Floor Estimator →",
    faqs: [
      {
        q: "How long does pelvic floor recovery take after an episiotomy?",
        a: "The external wound typically heals within 4–6 weeks. Pelvic floor function usually improves significantly over 3–6 months with appropriate rehabilitation. Scar-related symptoms like pain or tightness can persist longer and benefit from specialist physiotherapy.",
      },
      {
        q: "When can I start pelvic floor exercises after an episiotomy?",
        a: "Gentle activation exercises can begin within the first 1–2 weeks as pain allows, focusing on releasing and relaxing as much as contracting. More structured rehabilitation should wait until 6 weeks and ideally follow assessment by a pelvic floor physiotherapist.",
      },
      {
        q: "Is it normal to have pain during sex months after an episiotomy?",
        a: "Common yes — normal in the sense of something you must accept, no. Painful intercourse months after episiotomy is a sign of scar tissue restriction or pelvic floor tension that responds well to targeted treatment. Seek assessment from a pelvic floor physiotherapist rather than waiting for it to resolve on its own.",
      },
    ],
    relatedSlugs: [
      "pelvic-floor-recovery-c-section",
      "exercise-timeline-episiotomy",
      "exercise-timeline-c-section",
    ],
    breadcrumbLabel: "Pelvic Floor After Episiotomy",
  },
  {
    slug: "pelvic-floor-recovery-c-section",
    calculatorUrl: "/pelvic-floor-recovery/",
    calculatorName: "Pelvic Floor Recovery Estimator",
    metaTitle:
      "Pelvic Floor Recovery After C-Section | What to Expect and When",
    metaDescription:
      "C-section affects pelvic floor recovery indirectly but significantly. Learn what symptoms to expect and get a personalised recovery stage assessment.",
    h1: "Pelvic Floor Recovery After a C-Section",
    intro:
      "Many c-section mothers assume their pelvic floor was unaffected by their birth because they did not deliver vaginally. This is not accurate. The pelvic floor supported the weight of the baby, uterus, and placenta throughout pregnancy — the months of loading, pressure, and hormonal changes affect pelvic floor function regardless of how birth occurs. Additionally, the abdominal surgery itself disrupts the deep core system that the pelvic floor works in coordination with, creating its own set of recovery challenges.",
    keyPoints: [
      {
        heading: "Pregnancy loads the pelvic floor regardless of delivery method",
        body: "By the third trimester, the pelvic floor is bearing the equivalent of a bowling ball of sustained downward pressure. This progressive loading weakens and stretches the pelvic floor structures in all pregnant women, not only those who deliver vaginally.",
      },
      {
        heading: "Abdominal surgery disrupts core coordination",
        body: "The transverse abdominis — the deep abdominal corset muscle — works in direct coordination with the pelvic floor. The c-section incision cuts through abdominal layers and disrupts nerve function in the area, impairing the brain's ability to engage the deep core effectively. This indirectly affects pelvic floor function and stability.",
      },
      {
        heading: "Common symptoms after c-section include urgency and frequency",
        body: "Urinary urgency, increased frequency, and stress leakage are reported by a significant proportion of c-section mothers despite not having delivered vaginally. These symptoms are often related to deep core dysfunction rather than direct pelvic floor trauma.",
      },
      {
        heading: "Scar adhesions can restrict pelvic floor movement",
        body: "Internal scar tissue from the c-section can adhere to surrounding structures including the bladder. This can restrict the natural movement of the pelvic organs and pelvic floor, contributing to symptoms months or years after birth. Scar mobilisation and pelvic floor physiotherapy address both issues together.",
      },
    ],
    whenToUseCalculator:
      "Use the estimator from 6 weeks postpartum. Select your weeks postpartum accurately — the tool provides stage-appropriate guidance that accounts for surgical recovery timelines distinct from vaginal birth.",
    ctaHeading: "Assess your pelvic floor recovery after your c-section",
    ctaBody:
      "The estimator uses your weeks postpartum and current symptoms to give you a personalised recovery stage assessment — with next steps appropriate for post-surgical recovery.",
    ctaButton: "Open Pelvic Floor Estimator →",
    faqs: [
      {
        q: "Does a c-section protect your pelvic floor?",
        a: "It reduces certain risks — particularly direct trauma from pushing and perineal tearing. However, pregnancy itself places significant load on the pelvic floor, and abdominal surgery disrupts the deep core coordination system. C-section mothers commonly experience pelvic floor symptoms and benefit from the same specialist assessment as vaginal birth mothers.",
      },
      {
        q: "When should I start pelvic floor exercises after a c-section?",
        a: "Gentle pelvic floor activation can begin around week 2–3 post-surgery, once acute pain has settled. Focus on gentle releases and activations rather than sustained holds. More structured rehabilitation should follow assessment by a pelvic floor physiotherapist from around 6 weeks.",
      },
      {
        q: "Why do I leak urine after a c-section if I did not push?",
        a: "Leakage after c-section is typically related to the disruption of deep core coordination caused by the surgery rather than direct pelvic floor trauma. The pelvic floor and transverse abdominis work together — when surgery impairs one, the other is affected. Targeted rehabilitation addresses this effectively.",
      },
    ],
    relatedSlugs: [
      "pelvic-floor-recovery-episiotomy",
      "exercise-timeline-c-section",
      "safe-weight-loss-c-section",
    ],
    breadcrumbLabel: "Pelvic Floor After C-Section",
  },
  {
    slug: "exercise-timeline-c-section",
    calculatorUrl: "/exercise-timeline/",
    calculatorName: "Return-to-Exercise Timeline Tool",
    metaTitle:
      "When to Exercise After a C-Section | Week-by-Week Return Timeline",
    metaDescription:
      "Get a personalised week-by-week exercise timeline after your c-section. Based on surgical recovery stages, not the generic 6-week clearance myth.",
    h1: "Returning to Exercise After a C-Section",
    intro:
      "The six-week postnatal check is frequently misunderstood as the point at which c-section mothers are cleared for all exercise. In reality, it marks the point of freedom from acute surgical complications — not the point at which the abdominal fascia has healed sufficiently for load-bearing exercise. The fascia — the tough connective tissue layer cut during a caesarean — takes 6–12 months to regain full tensile strength. Understanding this distinction protects you from injuries, incisional hernias, and long-term pelvic floor problems that result from returning to high-impact exercise too early.",
    keyPoints: [
      {
        heading: "The external wound closes weeks before internal healing is complete",
        body: "The skin incision typically heals within 2–3 weeks. The internal fascial layer takes 6–12 months. These are two completely different healing timelines and the external appearance of the wound is not a reliable indicator of internal readiness for exercise.",
      },
      {
        heading: "Core rehabilitation must come before fitness training",
        body: "Before returning to running, cycling, or strength training, the deep core system — transverse abdominis and pelvic floor working together — must be functioning effectively. This requires specific rehabilitation work that starts with breathing and progresses very gradually.",
      },
      {
        heading: "High-impact exercise before 12 weeks carries significant risk",
        body: "Running, jumping, and high-intensity training before the 12-week mark after a c-section significantly increases the risk of incisional hernia, abdominal wall separation, and pelvic floor prolapse. The risk is greatest for mothers who feel well and are tempted to return to their pre-pregnancy fitness level quickly.",
      },
      {
        heading: "Swimming is the recommended first return for c-section mothers",
        body: "Swimming is low-impact, non-weight-bearing, and does not stress the abdominal wall. It can typically begin at 6–8 weeks once the wound is completely healed — no open areas, scabbing, or discharge. It is the safest first step toward formal exercise after a c-section.",
      },
    ],
    whenToUseCalculator:
      "Select C-Section Delivery in the first step of the tool. The timeline will give you phase-by-phase guidance specific to surgical recovery — from first walks through to return to running and lifting.",
    ctaHeading: "Get your week-by-week exercise timeline",
    ctaBody:
      "Select your delivery type and answer the symptom questions. The tool returns a personalised phase-by-phase exercise progression based on your exact stage and recovery symptoms.",
    ctaButton: "Open Exercise Timeline Tool →",
    faqs: [
      {
        q: "When can I start exercising after a c-section?",
        a: "Gentle walking can begin from around day 3–7 post-surgery. Low-impact exercise like swimming can start at 6–8 weeks once the wound is fully healed. Running and strength training should wait until at least 12 weeks, with core rehabilitation completed first.",
      },
      {
        q: "Can I do sit-ups after a c-section?",
        a: "Sit-ups and crunches are not recommended for at least 12 weeks after a c-section and should only return after the deep core is functioning well. They increase intra-abdominal pressure in a way that stresses the healing incision and can worsen diastasis recti.",
      },
      {
        q: "When can I lift weights after a c-section?",
        a: "Light resistance training can begin around 12 weeks provided core rehabilitation has been completed and you are symptom-free. Return to heavy lifting should wait until at least 16 weeks and follow clearance from your GP and ideally a women's health physiotherapist.",
      },
    ],
    relatedSlugs: [
      "exercise-timeline-episiotomy",
      "pelvic-floor-recovery-c-section",
      "safe-weight-loss-c-section",
    ],
    breadcrumbLabel: "Exercise After C-Section",
  },
  {
    slug: "exercise-timeline-episiotomy",
    calculatorUrl: "/exercise-timeline/",
    calculatorName: "Return-to-Exercise Timeline Tool",
    metaTitle:
      "Returning to Exercise After Episiotomy | Safe Timeline and Guidance",
    metaDescription:
      "Episiotomy affects your return-to-exercise timeline. Get personalised week-by-week guidance based on your healing stage and symptoms. Free tool.",
    h1: "Returning to Exercise After an Episiotomy",
    intro:
      "An episiotomy creates a surgical wound in the perineum that must heal before the pelvic floor can begin progressive rehabilitation, and before any impact or loading exercise is safe. The recovery timeline differs from an uncomplicated vaginal birth because the wound is deeper, involves muscle tissue, and creates scar tissue that can restrict movement and load tolerance. Returning to exercise at the standard six-week mark without accounting for episiotomy healing is one of the most common causes of long-term pelvic floor problems in postpartum mothers.",
    keyPoints: [
      {
        heading: "The wound site must be fully healed before any impact",
        body: "Until the episiotomy wound is completely closed and the scar has begun to mature, any high-impact activity risks wound disruption and introduces infection risk. This typically takes 4–6 weeks minimum, with some women taking longer depending on tear grade and healing response.",
      },
      {
        heading: "Pelvic floor assessment before return to sport is essential",
        body: "Because episiotomy can result in either weakness or hypertonicity in the pelvic floor muscles, a professional assessment before returning to impact exercise is strongly recommended. Returning to running on a hypertonic pelvic floor without assessment significantly increases injury risk.",
      },
      {
        heading: "Low-impact exercise is appropriate from 6–8 weeks",
        body: "Walking, swimming, and cycling can typically begin around 6–8 weeks provided the wound is healed and you are symptom-free. These activities do not create the downward pelvic floor load of impact exercise and are safe entry points for rebuilding fitness.",
      },
      {
        heading: "Running should wait until at least 12 weeks",
        body: "The Royal College of Obstetricians and Gynaecologists and leading women's health physiotherapy guidelines recommend waiting until at least 12 weeks before returning to running after any perineal trauma, including episiotomy. This timeline assumes symptom-free recovery and completed pelvic floor rehabilitation.",
      },
    ],
    whenToUseCalculator:
      "Select Vaginal Delivery in the first step of the tool. Answer the symptom questions accurately — if you experienced significant perineal trauma, the tool will reflect a more conservative timeline appropriate for your healing stage.",
    ctaHeading: "Get your personalised return-to-exercise timeline",
    ctaBody:
      "Answer questions about your delivery and current symptoms. The tool returns a phase-by-phase exercise progression based on your exact recovery stage.",
    ctaButton: "Open Exercise Timeline Tool →",
    faqs: [
      {
        q: "When can I run after an episiotomy?",
        a: "Most women's health physiotherapy guidelines recommend waiting until at least 12 weeks postpartum before returning to running after an episiotomy, and only after completing pelvic floor rehabilitation and confirming you are symptom-free during lower-impact activity.",
      },
      {
        q: "Can I swim after an episiotomy?",
        a: "Swimming can typically begin at 6–8 weeks once the wound is completely healed — no open areas, stitches visible, or discharge. Do not swim while any part of the wound is still healing, as this introduces infection risk.",
      },
      {
        q: "How do I know if my pelvic floor is ready for exercise after an episiotomy?",
        a: "Signs that you are ready include: no leaking during daily activities, no heaviness or pressure in the pelvic area, comfortable sitting and walking, and no pain at the wound site. A pelvic floor physiotherapist assessment before returning to impact exercise gives you a clear, objective baseline.",
      },
    ],
    relatedSlugs: [
      "exercise-timeline-c-section",
      "pelvic-floor-recovery-episiotomy",
      "pelvic-floor-recovery-c-section",
    ],
    breadcrumbLabel: "Exercise After Episiotomy",
  },
  {
    slug: "baby-weight-percentile-premature",
    calculatorUrl: "/baby-weight-percentile/",
    calculatorName: "Baby Weight Percentile Calculator",
    metaTitle:
      "Baby Weight Percentile for Premature Babies | Corrected Age Calculator Guide",
    metaDescription:
      "Premature babies must be plotted using corrected age, not actual age. Learn how to use the baby weight percentile calculator correctly for your premature baby.",
    h1: "Baby Weight Percentiles for Premature Babies",
    intro:
      "Using a standard baby weight percentile calculator with your premature baby's actual age will produce results that look alarming but are meaningless — a baby born 8 weeks early will appear to be significantly underweight when compared to full-term babies of the same actual age, when in reality they may be growing perfectly for their developmental stage. Understanding corrected age and how to apply it to growth charts is essential for accurately interpreting your premature baby's growth and avoiding unnecessary anxiety.",
    keyPoints: [
      {
        heading: "Always use corrected age, not actual age",
        body: "Corrected age is calculated by subtracting the number of weeks premature from your baby's actual age. A baby born 10 weeks early who is now 6 months old has a corrected age of approximately 3.5 months. This is the age to use when plotting on growth charts.",
      },
      {
        heading: "Most clinicians use corrected age until 2 years",
        body: "Growth charts should be plotted using corrected age for premature babies until at least 24 months. Beyond 2 years, most premature children have caught up to their peers and corrected age becomes less relevant.",
      },
      {
        heading: "Catch-up growth is normal and expected",
        body: "Most premature babies experience a period of accelerated catch-up growth in the first 2 years, moving up percentile lines rather than tracking steadily. This upward crossing of percentile lines is healthy and expected — it is downward crossing that warrants concern.",
      },
      {
        heading: "Specialist growth charts exist for very premature babies",
        body: "Babies born before 32 weeks are sometimes tracked on specialist premature growth charts rather than standard WHO charts in the early weeks and months. Your neonatal team will advise which chart is most appropriate for your baby's gestational age at birth.",
      },
    ],
    whenToUseCalculator:
      "Enter your baby's corrected age in weeks — not their actual age. To calculate corrected age: take your baby's actual age in weeks and subtract the number of weeks they were born early. Use the result as the age input in the calculator.",
    ctaHeading: "Check your premature baby's growth percentile",
    ctaBody:
      "Enter your baby's corrected age — actual age minus weeks premature — along with their current weight. The calculator uses WHO growth standards to show where they sit on the growth curve.",
    ctaButton: "Open Baby Weight Percentile Calculator →",
    faqs: [
      {
        q: "How do I calculate corrected age for a premature baby?",
        a: "Subtract the number of weeks your baby was born early from their actual age. For example, a baby born 8 weeks early who is now 20 weeks old has a corrected age of 12 weeks. Use this corrected age when entering their details into the growth chart calculator.",
      },
      {
        q: "When do premature babies catch up on growth charts?",
        a: "Most premature babies catch up to their peers by 2 years of age, though very premature babies (born before 28 weeks) may take slightly longer. Catch-up growth typically shows as upward movement across percentile lines in the first 12–18 months.",
      },
      {
        q: "Should I be worried if my premature baby is below the 10th percentile?",
        a: "Not necessarily, if they are growing consistently and moving upward on their own curve using corrected age. What matters is the trend over time, not a single reading. Always discuss growth chart results for premature babies with your paediatrician or neonatal follow-up team who know your baby's full history.",
      },
    ],
    relatedSlugs: [
      "baby-weight-percentile-breastfed",
      "exercise-timeline-c-section",
      "safe-weight-loss-c-section",
    ],
    breadcrumbLabel: "Premature Baby Growth Percentiles",
  },
  {
    slug: "baby-weight-percentile-breastfed",
    calculatorUrl: "/baby-weight-percentile/",
    calculatorName: "Baby Weight Percentile Calculator",
    metaTitle:
      "Baby Weight Percentile for Breastfed Babies | WHO Chart Guide",
    metaDescription:
      "Breastfed babies grow differently after 3 months. Learn why WHO charts are designed for breastfed babies and how to read your baby's percentile accurately.",
    h1: "Baby Weight Percentiles for Breastfed Babies",
    intro:
      "Breastfed babies and formula-fed babies grow at different rates, particularly after the 3-month mark. Older growth charts were based on formula-fed infant populations and caused widespread unnecessary anxiety in parents of healthy breastfed babies who appeared to be 'dropping' on those charts. The WHO Child Growth Standards used by our calculator were specifically developed using data from optimally breastfed babies in six countries, making them the appropriate standard for tracking breastfed infant growth.",
    keyPoints: [
      {
        heading: "WHO charts are calibrated for breastfed babies",
        body: "The WHO growth standards were developed from a study of healthy, optimally breastfed babies. This means the growth curves reflect what breastfed growth actually looks like — including the natural slowdown between 3–6 months that older charts incorrectly flagged as faltering growth.",
      },
      {
        heading: "Breastfed babies often slow in weight gain after 3 months",
        body: "It is entirely normal for breastfed babies to gain weight more slowly between 3–6 months compared to formula-fed peers. This is physiologically normal breastfed growth, not a feeding problem. Parents using older CDC charts often received unnecessary supplementation advice during this period.",
      },
      {
        heading: "Frequent nursing does not always mean inadequate intake",
        body: "Breastfed babies nurse more frequently than formula-fed babies by design — breast milk digests faster than formula. A baby nursing every 1.5–2 hours is not necessarily under-fed. Wet nappy output and developmental progress are more reliable indicators of adequate intake than nursing frequency alone.",
      },
      {
        heading: "Supply and demand regulates itself naturally",
        body: "Breast milk production is driven by removal — the more frequently and effectively the breast is emptied, the more milk is produced. A breastfed baby who appears to be gaining slowly but has adequate nappy output and normal developmental milestones is almost always getting enough.",
      },
    ],
    whenToUseCalculator:
      "Use the calculator with your baby's actual age in weeks. The WHO standards it uses are already calibrated for breastfed growth — no adjustment is needed. Compare results over multiple measurements to assess your baby's individual growth trend.",
    ctaHeading: "Check your breastfed baby's growth percentile",
    ctaBody:
      "Enter your baby's age in weeks and current weight. The calculator uses WHO growth standards — calibrated for breastfed babies — to show where your baby sits and what the result means.",
    ctaButton: "Open Baby Weight Percentile Calculator →",
    faqs: [
      {
        q: "Why does my breastfed baby seem to drop percentiles after 3 months?",
        a: "This is a well-documented pattern in breastfed babies and reflects normal physiological growth, not a feeding problem. The WHO charts used in our calculator account for this natural slowdown. If your baby is alert, producing adequate wet nappies, and meeting milestones, the slowdown in weight gain is almost always normal.",
      },
      {
        q: "Are breastfed babies lighter than formula-fed babies?",
        a: "From around 3–6 months, breastfed babies do tend to be slightly lighter on average than formula-fed peers. This is normal and not a cause for concern. The WHO charts reflect this difference — they were built from breastfed baby data.",
      },
      {
        q: "How do I know if my breastfed baby is getting enough milk?",
        a: "The most reliable indicators are adequate wet nappies (6+ per day from day 5 onwards), consistent weight gain on their own curve, alert and settled behaviour between feeds, and meeting developmental milestones. If you have concerns, speak to your midwife or health visitor before adding formula supplementation.",
      },
    ],
    relatedSlugs: [
      "baby-weight-percentile-premature",
      "breastfeeding-calories-toddler",
      "breastfeeding-calories-twins",
    ],
    breadcrumbLabel: "Breastfed Baby Growth Percentiles",
  },
];
