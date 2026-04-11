import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nurturecalc.com/blog/breastfeeding-and-periods/',
  },
  title: "Breastfeeding and Periods: When Will Your Cycle Return? | NurtureCalc",
  description: "Wondering when your period will return while breastfeeding? Learn exactly how prolactin delays your cycle, what your first period will feel like, and when to see a doctor.",
  openGraph: {
    title: "Breastfeeding and Periods: When Will Your Cycle Return?",
    description: "Wondering when your period will return while breastfeeding? Learn exactly how prolactin delays your cycle, what your first period will feel like, and when to see a doctor.",
    url: 'https://nurturecalc.com/blog/breastfeeding-and-periods/',
    type: 'article',
    publishedTime: '2026-03-31T00:00:00Z',
    authors: ['https://nurturecalc.com/author/nurturecalc-team'],
  },
};

export default function BlogPost() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Breastfeeding and Periods: When Will Your Cycle Return?",
    "description": "Wondering when your period will return while breastfeeding? Learn exactly how prolactin delays your cycle, what your first period will feel like, and when to see a doctor.",
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc Editorial Team",
      "url": "https://nurturecalc.com/author/nurturecalc-team/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com"
    },
    "datePublished": "2026-03-31",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/breastfeeding-and-periods/"
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When does your period return when breastfeeding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your period can return anywhere from a few months to over a year postpartum. If you are exclusively breastfeeding with no formula top-ups, it often stays away for six to twelve months. If you combination feed or strictly formula feed, your cycle will likely return much sooner."
        }
      },
      {
        "@type": "Question",
        "name": "Is it normal to have a period while breastfeeding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is entirely normal to have a period while breastfeeding. Some mothers experience a return of their menstrual cycle while still nursing frequently. Every body responds differently to the hormone prolactin, and your period returning does not mean you have to stop breastfeeding."
        }
      },
      {
        "@type": "Question",
        "name": "Can breastfeeding delay your period for over a year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many mothers do not see a return of their periods for over a year if they continue to nurse. Extended lactational amenorrhea is exceptionally common for those who feed on demand through the night. If you reach eighteen months without a period, it is wise to consult your doctor just to be safe."
        }
      },
      {
        "@type": "Question",
        "name": "Does your period affect breast milk supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You may notice a slight, temporary dip in your breast milk supply just before or during your period. This happens because blood calcium levels drop slightly as your hormones suddenly shift. Keep nursing on demand, and your supply will typically bounce right back within a few days."
        }
      },
      {
        "@type": "Question",
        "name": "Can you get pregnant while breastfeeding before your period returns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can absolutely get pregnant before you see your first postpartum period. Your ovaries will release an egg about two weeks before your period starts. Because you have no warning that ovulation has occurred, you must use contraception if you are not ready for another baby."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-xl max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          
          <header className="mb-16 not-prose border-b border-[#E8A0A8]/20 pb-12 text-center">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F9E4E8] text-[#D58A92] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-label">Recovery</span>
                <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide uppercase">12 min read</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight mb-6">
                Breastfeeding and Periods: When Will Your Cycle Return?
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  BY THE NURTURECALC TEAM
                </Link>
                <p className="text-xs font-label text-[#3D2C2C]/70">
                  Written by the NurtureCalc Editorial Team · Reviewed against WHO & NHS <Link href="/editorial-standards" className="text-[#E8A0A8] hover:underline">guidelines</Link>
                </p>
              </div>
            </div>
          </header>

          <section>
            <p>You are wide awake at two in the morning, nursing your baby in the quiet dark, and a sudden thought crosses your mind. You have been breastfeeding for months now, and there is still absolutely no sign of your period returning. Is this normal, or is there something wrong with your recovery? The uncertainty can feel incredibly heavy when you are already navigating the profound exhaustion of early motherhood, especially when you have no clear benchmark to measure your own body against.</p>

            <p>It is completely normal to feel confused about the return of your menstrual cycle while breastfeeding. For some mothers, their cycle bounces back almost immediately, while for others, it stays away for over a year or even longer. Your body is doing exactly what it is designed to do right now, putting its immense energy into sustaining your little one rather than preparing for another immediate pregnancy. This delay is a biological masterclass in prioritising the child you hold in your arms.</p>

            <p>This definitive guide will tell you everything you need to know about the timeline of your returning cycle. We will explain exactly how your hormones are working behind the scenes, what your first cycle might feel like, and the clear signs that mean you should book an appointment with your doctor. You will leave feeling reassured, deeply informed, and entirely confident about what your remarkable body is experiencing right now.</p>
          </section>

          <div className="bg-[#F9E4E8] rounded-2xl p-8 my-10 border border-[#E8A0A8]/30 not-prose">
            <h3 className="font-serif text-[#3D2C2C] text-xl mb-3 font-bold">The short answer:</h3>
            <p className="text-[#3D2C2C]/80 m-0 leading-relaxed">If you are exclusively breastfeeding, your period will likely return between 6 and 12 months postpartum — sometimes later. If you are formula feeding or mixed feeding, expect it within 6 to 10 weeks. The hormone prolactin, which drives milk production, suppresses ovulation and delays menstruation for as long as you nurse frequently.</p>
          </div>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">Why Does Breastfeeding Delay Your Period?</h2>
            
            <p>The medical term for your missing period is <strong>lactational amenorrhea</strong>. This simply means you are experiencing a temporary absence of menstruation because you are producing milk for your baby. Your body is a deeply intelligent system, and it recognises that sustaining a newborn requires an immense amount of energy and metabolic resources. Therefore, it deliberately presses pause on your reproductive cycle to protect your own nutrient stores and focus completely on your current infant.</p>

            <p>The main driver behind this entire process is a powerful hormone called <strong>prolactin</strong>. This hormone has a brilliant dual role in your postpartum body that acts as an evolutionary safeguard. First and foremost, it sits at the steering wheel of your milk production, commanding your body to produce the nourishment your baby desperately needs. At the very same time, it actively suppresses the specific reproductive hormones that trigger ovulation, keeping your cycle entirely dormant.</p>

            <p>The level of your prolactin is not static; it rises and falls depending on how often your baby feeds. Nursing frequency is the absolute key variable here, especially those long night feeds when your prolactin levels naturally reach their absolute highest peak. This intense hormonal demand requires a great deal of energy, which fundamentally explains <Link href="/blog/breastfeeding-calorie-needs/" className="text-[#E8A0A8] hover:underline underline-offset-4 font-semibold">how many calories breastfeeding burns</Link>. The more frequently you bring your baby to your breast, the stronger the hormonal suppression of your cycle remains.</p>

            <p>If your baby starts sleeping through the night or you begin replacing feeds with a bottle, your prolactin levels will start to gradually decline. Once they dip below a certain biological threshold, your brain receives the definitive signal to wake your reproductive system back up. This delicate hormonal balance is exactly why some mothers see their periods return the very week their baby starts sleeping for slightly longer stretches.</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">When Does Your Period Return While Breastfeeding? A Timeline</h2>

            <div className="overflow-x-auto my-12 not-prose">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-[#E8A0A8]/30">
                    <th className="py-4 px-2 font-serif text-[#3D2C2C] text-lg">Feeding Method</th>
                    <th className="py-4 px-2 font-serif text-[#3D2C2C] text-lg">Typical Return</th>
                    <th className="py-4 px-2 font-serif text-[#3D2C2C] text-lg">Range</th>
                  </tr>
                </thead>
                <tbody className="text-[#3D2C2C]/80">
                  <tr className="border-b border-[#E8A0A8]/10">
                    <td className="py-5 px-2 font-semibold">Exclusive breastfeeding</td>
                    <td className="py-5 px-2">6–12 months</td>
                    <td className="py-5 px-2">Sometimes beyond 12 months</td>
                  </tr>
                  <tr className="border-b border-[#E8A0A8]/10 bg-[#FFFDF9]">
                    <td className="py-5 px-2 font-semibold">Mixed feeding</td>
                    <td className="py-5 px-2">3–6 months</td>
                    <td className="py-5 px-2">Varies widely</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-2 font-semibold">Formula feeding only</td>
                    <td className="py-5 px-2">6–10 weeks</td>
                    <td className="py-5 px-2">As early as 4 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The timeline above highlights just how much sweeping variance exists from mother to mother. The main driver of this variance is practically tied to your individual nursing frequency, especially night feeds, and how your unique biology ultimately responds to those circulating prolactin levels. A mother who nurses every two hours around the clock will typically experience a much longer cycle delay than a mother who introduces a pacifier or infant formula early on in her journey.</p>

            <p>We also cannot underestimate the impact of introducing solid foods into your baby's daily diet. Around the six-month mark, as your baby begins exploring purees and table foods, they naturally begin to draw slightly less milk during the day. This subtle but profound shift is often enough to lower the hormonal suppression just enough to trigger ovulation, bringing your cycle roaring back to life regardless of your initial expectations.</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">What Counts as "Exclusive" Breastfeeding?</h2>
            
            <p>Many mothers genuinely assume they are exclusively breastfeeding, but they do not realise that the clinical criteria for lactational amenorrhea are incredibly rigorous. Simply feeding your baby only breast milk is not actually enough to guarantee the sustained suppression of your menstrual cycle. Hormonally speaking, exclusive breastfeeding means your baby is constantly communicating with your body via the breast, without any interruptions, delays, or artificial substitutes.</p>

            <p>This means absolutely no pacifiers acting as a substitute for comfort feeds, no long stretches of sleep where the baby goes hours without nursing, and certainly no formula top-ups. If you pump a separate bottle so your partner can take the night shift, your breasts unfortunately miss out on that direct physical stimulation during the critical night hours when prolactin naturally peaks. Once solid foods are introduced around six months, that strict hormonal suppression can lift incredibly quickly, even if you are still constantly nursing.</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">Can You Get Pregnant Before Your Period Returns?</h2>

            <p>Yes, you absolutely can get pregnant before you ever see your first drop of postpartum menstrual blood. This is perhaps one of the most critical facts to fully understand about your recovering body. Far too many mothers find themselves staring down a completely unexpected positive pregnancy test simply because they relied on breastfeeding to prevent conception, wrongly assuming that a lack of bleeding guaranteed a lack of fertility.</p>

            <p>The biological reality is that ovulation happens approximately fourteen days before your first postpartum bleed. Your body will silently mature and release an egg, completely unannounced, two full weeks before your period arrives to tell you what happened. You will have absolutely no clear warning that your fundamental fertility has returned. If you are intimate during that window without protection, conception is highly possible, which can certainly complicate your plans if you were researching <Link href="/blog/safe-weight-loss-breastfeeding/" className="text-[#E8A0A8] hover:underline underline-offset-4 font-semibold">safe weight loss while breastfeeding</Link>.</p>

            <p>Some mothers attempt to use the <strong>Lactational Amenorrhea Method (LAM)</strong> as a reliable form of contraception, but its criteria are staggeringly strict. For LAM to work, your baby must be under six months old, you must exclusively breastfeed on demand throughout the day and night without exception, and you must not have seen any return of your menses. Make absolutely clear that it is not a reliable method for most modern mothers; if just one criterion slips, your protection drops to near zero.</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">What Will Your First Postpartum Period Feel Like?</h2>

            <p>When your cycle finally does come back, try not to expect the tidy, predictable periods you knew before you were pregnant. Your first postpartum period will often announce its return quite dramatically. Many mothers experience a significantly heavier flow than they were previously used to, simply because the uterine lining has had months to build up undisturbed and their hormonal baseline is still wildly finding its new equilibrium.</p>

            <p>You should also brace yourself for significantly more intense cramping during those first few uncharted cycles. Your uterus has undergone an unbelievable transformation over the last year, stretching thin to accommodate a human being and then slowly shrinking back down. This intense wave of cramping can feel particularly challenging if you are still actively working on and focusing closely on your <Link href="/blog/pelvic-floor-after-birth/" className="text-[#E8A0A8] hover:underline underline-offset-4 font-semibold">pelvic floor recovery</Link>.</p>

            <p>Irregular cycles are almost guaranteed for the first few unpredictable months. You might have a cycle that lasts an uncomfortably short twenty days, only to be seamlessly followed by one that stretches out to thirty-five days. Your premenstrual symptoms might also change completely; you may suddenly experience severe breast tenderness, heavy fatigue, or unusual mood swings that you never dealt with before having a child.</p>

            <p>Rest assured that this entirely chaotic hormonal phase does normally settle down. As your body gradually flushes out the remaining pregnancy and early postpartum signals, your reproductive system will slowly fall back into a much more predictable and manageable rhythm. It typically takes about three to six full cycles for everything to fully normalise and feel familiar again.</p>

            <div className="bg-[#FFFDF9] border border-[#E8A0A8]/30 rounded-2xl p-8 my-10 not-prose">
              <h3 className="font-serif text-[#3D2C2C] text-xl mb-4 border-b border-[#E8A0A8]/20 pb-2">What is normal:</h3>
              <ul className="text-[#3D2C2C]/80 space-y-3 mb-8">
                <li className="flex items-start"><span className="text-[#E8A0A8] font-bold mr-3 mt-0.5">•</span>Heavier bleeding for the first few cycles</li>
                <li className="flex items-start"><span className="text-[#E8A0A8] font-bold mr-3 mt-0.5">•</span>Different or more intense cramping</li>
                <li className="flex items-start"><span className="text-[#E8A0A8] font-bold mr-3 mt-0.5">•</span>Irregular cycle lengths</li>
                <li className="flex items-start"><span className="text-[#E8A0A8] font-bold mr-3 mt-0.5">•</span>Changes to your usual PMS symptoms</li>
              </ul>
              <h3 className="font-serif text-[#3D2C2C] text-xl mb-4 border-b border-[#E8A0A8]/20 pb-2">What is NOT normal:</h3>
              <ul className="text-[#3D2C2C]/80 space-y-3">
                <li className="flex items-start"><span className="text-red-400 font-bold mr-3 mt-0.5">•</span>Soaking through a heavy pad in under an hour for 2+ hours</li>
                <li className="flex items-start"><span className="text-red-400 font-bold mr-3 mt-0.5">•</span>Passing blood clots larger than a 50p coin</li>
                <li className="flex items-start"><span className="text-red-400 font-bold mr-3 mt-0.5">•</span>Severe pain preventing daily function</li>
                <li className="flex items-start"><span className="text-red-400 font-bold mr-3 mt-0.5">•</span>Period returned then disappeared again for months</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">Does Your Period Affect Your Breast Milk Supply?</h2>

            <p>This is a deeply common worry among nursing mothers, and it is best to face the reality of it directly. Yes, your milk supply can experience a slight but noticeable dip in the days leading up to your period and during the first day of bleeding. This happens because of entirely natural hormonal fluctuations, quite specifically a sudden drop in progesterone and a shift in oestrogen, which subtly changes the calcium levels in your blood stream.</p>

            <p>Please hear this loud and clear: this is a completely temporary situation, not the abrupt end of your hard-earned breastfeeding journey. Your supply will almost always return to its usual robust volume the moment your period clears. Your baby might act slightly fussier at the breast for a short day or two, but if you simply continue to consistently nurse them through their frustration, your body will get the immediate message to keep producing milk.</p>

            <p>You can actively help your precious body through this monthly physical dip by staying exceptionally well-nourished and thoroughly hydrated. Focus on eating nutrient-dense whole foods to fuel your recovery, staying highly hydrated throughout the day and checking our <Link href="/blog/postpartum-nutrition-guide/" className="text-[#E8A0A8] hover:underline underline-offset-4 font-semibold">postpartum nutrition guide</Link> to ensure you are not running on empty. Staying well-nourished fundamentally helps your body manage the demands of lactating while simultaneously bleeding.</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">How to Support Your Body During This Transition</h2>

            <div className="space-y-6">
              <p><strong>1. Keep nursing on demand:</strong> Do not force an early or unwanted weaning process just to purposefully get your period back. Simply let your body find its own natural hormonal timeline.</p>
              <p><strong>2. Nourish your body:</strong> Your energy requirements vastly shift as your hormones dynamically change. Explore our <Link href="/blog/postpartum-nutrition-guide/" className="text-[#E8A0A8] hover:underline">postpartum nutrition guide</Link> to ensure you are eating enough.</p>
              <p><strong>3. Track your cycle once it returns:</strong> Try to thoughtfully use a dedicated app to closely note your cycle lengths and any new irregularity. This simple habit brings peace of mind.</p>
              <p><strong>4. Discuss contraception with your doctor before your period returns:</strong> Because you absolutely can ovulate without a shred of warning, you must have a solid, dependable plan in place.</p>
              <p><strong>5. Don't panic about supply dips:</strong> These stressful drops in milk volume are entirely manageable, incredibly short-lived, and will rapidly clear themselves up within a few standard days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">When Should You See a Doctor?</h2>

            <p>While postpartum recovery is famously and wonderfully unpredictable, there are specific, undeniable warning signs that mean you need a professional medical evaluation without massive delay. Please book an urgent appointment with your healthcare provider or midwife if you distinctly experience any of the following concerning red flags:</p>

            <ul className="text-[#3D2C2C]/80 space-y-4 my-8 p-8 bg-[#F9E4E8]/50 rounded-2xl border-l-4 border-[#E8A0A8] not-prose list-none">
              <li className="flex items-start">
                <span className="text-[#E8A0A8] mr-3 mt-1 block h-2 w-2 rounded-full bg-[#E8A0A8] shrink-0"></span>
                <span>Not breastfeeding and no period by 3 months postpartum</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E8A0A8] mr-3 mt-1 block h-2 w-2 rounded-full bg-[#E8A0A8] shrink-0"></span>
                <span>Breastfeeding and no period by 18 months postpartum</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E8A0A8] mr-3 mt-1 block h-2 w-2 rounded-full bg-[#E8A0A8] shrink-0"></span>
                <span>Extremely heavy bleeding (soaking a pad per hour for 2+ hours)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E8A0A8] mr-3 mt-1 block h-2 w-2 rounded-full bg-[#E8A0A8] shrink-0"></span>
                <span>Clots larger than a 50p coin</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E8A0A8] mr-3 mt-1 block h-2 w-2 rounded-full bg-[#E8A0A8] shrink-0"></span>
                <span>Severe pain preventing daily function</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E8A0A8] mr-3 mt-1 block h-2 w-2 rounded-full bg-[#E8A0A8] shrink-0"></span>
                <span>Period returned then disappeared again for months</span>
              </li>
            </ul>

            <p>It is also profoundly important to briefly mention that hidden thyroid issues can radically cause unexplained menstrual delays. It is sadly not uncommon to suffer from undiagnosed postpartum thyroiditis in silence. This can trigger a host of secondary issues; just as you might research <Link href="/blog/postpartum-hair-loss/" className="text-[#E8A0A8] hover:underline underline-offset-4 font-semibold">postpartum hair loss</Link>, you should know that both missing periods and sudden severe hair thinning can be triggered by thyroid issues postpartum. Always speak up if something intuitively feels wrong.</p>
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-16 not-prose shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 font-semibold">When does your period return when breastfeeding?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">Your period can broadly return anywhere from a few months to well over a year postpartum. If you are exclusively breastfeeding with absolutely no formula top-ups, it often completely stays away for six to twelve full months. If you combination feed or strictly formula feed your baby, your cycle will likely return much sooner.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 font-semibold">Is it normal to have a period while breastfeeding?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">Yes, it is entirely and unequivocally normal to have a period while you are still breastfeeding. Some mothers rapidly experience a return of their menstrual cycle while still nursing frequently throughout the day. Every body responds completely differently to the hormone prolactin, and your period returning absolutely does not mean you must stop nursing.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 font-semibold">Can breastfeeding delay your period for over a year?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">Yes, many fiercely dedicated mothers do not predictably see a return of their periods for over a year if they continue to nurse. This extended lactational amenorrhea is common and entirely biological for those who constantly feed on demand through the night. If you somehow reach eighteen months without a cycle, it is wise to consult your doctor.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 font-semibold">Does your period affect breast milk supply?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">You may undoubtedly notice a slight, highly temporary dip in your breast milk supply just before or firmly during your period. This happens because vital blood calcium levels drop slightly as your hormones fundamentally shift. Keep consistently nursing on demand, and your vital supply will typically bounce right back within a few short days.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3 font-semibold">Can you get pregnant while breastfeeding before your period returns?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">Yes, you can absolutely and undeniably get pregnant long before you clearly see your first postpartum period. Your ovaries will silently release a functional egg about two weeks before your actual period begins. Because you genuinely have no warning that this ovulation has spontaneously occurred, you absolutely must use contraception if you do not desire pregnancy.</p>
              </div>
            </div>
          </section>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="bg-[#F9E4E8] rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-sm text-center space-y-4 md:col-span-2 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Know How Much to Eat While Nursing</h3>
              <p className="text-[#3D2C2C]/80">Your calorie needs change throughout your breastfeeding journey — especially when your cycle returns and your hormones shift. Use our Breastfeeding Calorie Needs Estimator to stay nourished.</p>
              <Link 
                href="/breastfeeding-calories"
                className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all mt-4"
              >
                Open the Calculator →
              </Link>
            </div>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/50 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: World Health Organization — Infant and young child feeding. The Lancet — Lactational amenorrhea. NHS — Your body after birth. American College of Obstetricians and Gynecologists — Postpartum contraception.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/breastfeeding-calorie-needs" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Nutrition</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Breastfeeding Calorie Needs: How Much Extra Do You Actually Need?</h4>
              </Link>
              <Link href="/blog/postpartum-hair-loss" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Recovery</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Postpartum Hair Loss: Why It Happens and When It Stops</h4>
              </Link>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
