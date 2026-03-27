import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Postpartum Nutrition: What to Eat to Heal, Recover and Thrive | NurtureCalc",
    description: "A complete postpartum nutrition guide covering the key nutrients new mothers need for healing, breastfeeding and sustained energy in the fourth trimester.",
  };
}

export default function BlogPost() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Postpartum Nutrition: What to Eat to Heal, Recover and Thrive",
    "description": "A comprehensive guide to postpartum nutrition, focusing on essential nutrients, practical meal ideas for new mothers, and science-based recovery advice.",
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com/author/nurturecalc-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nurturecalc.com/logo.png"
      }
    },
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/postpartum-nutrition-guide"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How soon after birth should I start eating normally again?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can begin eating normally as soon as you feel ready, often within hours of delivery. Focus on easily digestible, nutrient-dense foods initially to help your digestive system restart and provide immediate energy for recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Can my diet affect the taste of my breast milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, flavors from foods like garlic, spices, and certain vegetables can subtly pass into breast milk. This is actually beneficial as it introduces your baby to a variety of flavors, which may help them accept different foods later during weaning."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to eat more if I am formula feeding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While you don't need the extra 500 calories required for milk production, you still need adequate nutrition to heal from birth and manage the physical demands of newborn care. Focus on high-quality proteins and complex carbohydrates for sustained energy."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to diet while breastfeeding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extreme dieting is not recommended while breastfeeding as it can compromise your energy and potentially your milk supply. A gentle, nutrient-dense approach targeting about 0.5kg of weight loss per week is generally considered safe after the initial 6-8 week recovery period."
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
                <span className="bg-[#F9E4E8] text-[#D58A92] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-label">Postpartum Nutrition</span>
                <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide uppercase">15 min read</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight mb-6">
                Postpartum Nutrition: What to Eat to <span className="text-[#E8A0A8] italic">Heal, Recover and Thrive</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  BY THE NURTURECALC TEAM
                </Link>
                <p className="text-[10px] text-[#3D2C2C]/50 font-label tracking-wide uppercase max-w-xs mx-auto">
                  Reviewed by NurtureCalc Dietitians — Grounded in evidence-based maternal health.
                </p>
              </div>
            </div>
          </header>

          <section>
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] mb-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              The "Fourth Trimester" is a time of incredible transition. While much of the world focuses on the new life you've brought home, your body is quietly performing its own miracle: the work of healing, restoring, and sustaining another human being.
            </p>

            <p>
              In the weeks following childbirth, it is common for the mother's needs to fade into the background. Your schedule is dictated by feedings, diaper changes, and snatched moments of sleep. Yet, at no other time in your adult life is your nutritional status more critical. You are recovering from a major medical event—childbirth—while simultaneously producing food for another person and managing extreme sleep deprivation.
            </p>
            <p>
              Postpartum nutrition is not about "getting your body back." It is about giving your body the raw materials it needs to repair tissues, balance hormones that have just plummeted, and maintain the energy required to care for a newborn. It is an act of self-care and medical necessity. This guide is designed to simplify the science and provide a practical, honest roadmap for those first few months.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-10">Key Nutrients for Postpartum Healing</h2>
            <p className="mb-10">
              During pregnancy, your baby was a "perfect parasite," effectively taking whatever nutrients it needed from your stores. Postpartum is the time to replenish those stores and ensure you aren't running on empty. Here are the non-negotiables:
            </p>

            <div className="space-y-12">
              <div className="border-l-2 border-[#E8A0A8]/20 pl-8">
                <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">Iron: Replenishing What Was Lost</h3>
                <p>Childbirth involves significant blood loss, and your iron stores are often at their lowest point on delivery day. Low iron is a leading cause of the bone-crushing fatigue that many new mothers feel, and it can even impact mood and milk supply. <strong>Best Sources:</strong> Red meat, lentils, spinach (paired with Vitamin C for absorption), and fortified cereals. Look for symptoms like pale skin, shortness of breath, or an inability to regulate temperature as signs you might need to check your levels.</p>
              </div>

              <div className="border-l-2 border-[#E8A0A8]/20 pl-8">
                <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">Calcium: Protecting Your Skeleton</h3>
                <p>If you are breastfeeding, your body will prioritize the calcium content of your milk, even if it means pulling it from your own bones. To protect your long-term bone density, you need about 1,000mg a day. <strong>Best Sources:</strong> Beyond dairy products like yogurt and cheese, look to sardines (with bones), tofu, almonds, and dark leafy greens like kale and bok choy.</p>
              </div>

              <div className="border-l-2 border-[#E8A0A8]/20 pl-8">
                <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">Omega-3 Fatty Acids: The Brain Builders</h3>
                <p>DHA and EPA are critical for your baby's brain development, but they are equally important for <em>your</em> brain. There is strong evidence suggesting that adequate Omega-3 intake can help regulate mood and potentially reduce the risk of postpartum depression. <strong>Best Sources:</strong> Fatty fish like salmon and mackerel, walnuts, chia seeds, and high-quality fish oil or algae-based supplements.</p>
              </div>

              <div className="border-l-2 border-[#E8A0A8]/20 pl-8">
                <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">Vitamin D: The Immune Booster</h3>
                <p>Deficiency is incredibly common, especially if you spent the end of your pregnancy and early postpartum indoors. Vitamin D is essential for calcium absorption and immune function. <strong>Best Sources:</strong> Sun exposure is primary, but food sources include egg yolks and fortified milks. Most experts recommend a supplement of at least 1,000 to 2,000 IU daily as a baseline during the fourth trimester.</p>
              </div>

              <div className="border-l-2 border-[#E8A0A8]/20 pl-8">
                <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">Iodine: Sustaining the Thyroid</h3>
                <p>Your thyroid works overtime in the postpartum period, and iodine is its fuel. It is also critical for your baby's cognitive development through breast milk. <strong>Best Sources:</strong> Iodized salt, seaweed, eggs, and dairy. If you use specialty sea salts or pink salts, you may not be getting enough iodine from your seasonings alone.</p>
              </div>

              <div className="border-l-2 border-[#E8A0A8]/20 pl-8">
                <h3 className="text-2xl font-serif text-[#3D2C2C] mb-4">Choline: The Forgotten Nutrient</h3>
                <p>Choline is essential for brain health and cognitive development, and its demand increases significantly during lactation. Most women do not meet the recommended daily intake. <strong>Best Sources:</strong> Eggs (specifically the yolk), beef, chicken, and broccoli. Eggs are often called "nature's prenatal" because they are one of the most concentrated sources of this vital nutrient.</p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-[#E8A0A8]/10 rounded-3xl p-10 my-20 shadow-sm">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8">8 Practical One-Handed Meals and Snacks</h2>
            <p className="mb-8 italic">Because you will likely be holding a baby, a breast pump, or a toddler while you eat.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">1. Greek Yogurt Parfait</strong>
                <p>A tub of full-fat Greek yogurt topped with pumpkin seeds and berries. High protein, high zinc.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">2. The "Everything" Toast</strong>
                <p>Whole grain bread with sliced avocado and a hard-boiled egg. Healthy fats and choline.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">3. Nut Butter & Apple</strong>
                <p>Simple, crunchy, and provides immediate energy without a sugar crash.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">4. Cottage Cheese Bowl</strong>
                <p>Cottage cheese with sliced cucumbers and black pepper. A massive protein punch.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">5. Overnight Oats</strong>
                <p>Make them with chia seeds and oat milk for a fiber-rich breakfast ready in the morning.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">6. Deli Roll-ups</strong>
                <p>Sliced turkey or ham rolled around a piece of cheese. Pure, one-handed protein.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">7. Trail Mix</strong>
                <p>Walnuts, almonds, and a few dark chocolate chips. Keep a jar by your nursing or feeding station.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#E8A0A8] uppercase tracking-wide block">8. Smoothies</strong>
                <p>Spinach, frozen banana, and a scoop of protein powder. The ultimate nutrient-dense drink.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-16 mb-8">Foods and Drinks to Be Mindful Of</h2>
            <p>
              The goal of postpartum nutrition is to add nourishing foods, not to create a list of "forbidden" ones. However, certain substances interact with your recovery and breastfeeding in ways that are worth noting.
            </p>
            <p>
              <strong>Caffeine:</strong> Most breastfeeding mothers can safely consume up to 200-300mg of caffeine (about 2-3 cups of coffee) per day. However, every baby is different; if your little one seems unusually jittery or has trouble sleeping, consider shifting your coffee to earlier in the day.
            </p>
            <p>
              <strong>Alcohol:</strong> The modern consensus is that "if you're sober enough to drive, you're sober enough to nurse." However, peak alcohol levels in breast milk occur 30-60 minutes after drinking. Waiting 2 hours after a single drink before nursing is the safest approach to ensure minimal transfer.
            </p>
            <p>
              <strong>Ultra-processed Foods:</strong> While a croissant or a bag of chips is a fine "survival snack," rely on them too heavily and you'll experience energy crashes. The blood sugar spikes from refined sugars can make postpartum mood swings and fatigue feel significantly worse.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">Hydration: The Secret Weapon</h2>
            <p>
              Water is the most overlooked part of postpartum recovery. If you are breastfeeding, your body requires an extra 700ml to 1000ml of fluid per day just to produce milk. Dehydration can lead to headaches, dizziness, and a noticeable drop in milk supply.
            </p>
            <p>
              Signs of dehydration specifically common in new mothers include dark-colored urine, a dry mouth that persists after drinking, and extreme constipation. To stay on top of it, try the <strong>"Glass with Every Feed"</strong> rule: every time you sit down to feed your baby, you must also drink a glass of water. Adding electrolytes (like a pinch of sea salt and a squeeze of lemon) to your water can also help with absorption and energy levels.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">Should You Take a Postnatal Supplement?</h2>
            <p>
              The short answer for most women is yes. Pregnancy and delivery deplete your reserves so thoroughly that it is difficult to restore them through food alone, especially while managing the restricted cooking time of early motherhood.
            </p>
            <p>
              The NHS and other global health bodies recommend continuing your prenatal vitamin for at least six months postpartum, or for as long as you are breastfeeding. A good postnatal supplement should contain Vitamin D, Iron, DHA, and Iodine. We are currently reviewing several leading formulations and will be adding our [PRODUCT PLACEHOLDER] recommendation here shortly. Always consult with your GP or midwife before starting a new supplement regimen to ensure it doesn't interfere with any postpartum medications.
            </p>
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-8 text-center">Postpartum Nutrition FAQ</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">How soon after birth should I start eating normally again?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">You can eat as soon as you feel a return of appetite. Many cultures favor warm, soft foods like soups and stews for the first 48 hours to be gentle on the digestive system as it restarts after birth.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">Can my diet affect the taste of my breast milk?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">Yes, and that's a good thing! Subtle flavors of what you eat pass into the milk, which helps prime your baby's palate for solid foods later. There is no need to avoid spicy food unless it clearly causes your baby distress.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">Do I need to eat more if I am formula feeding?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">You don't need the extra calorie surplus required for milk production, but you still need high-quality nutrition to repair tissue and manage the stress of newborn care. Focus on high-protein snacks to maintain energy levels.</p>
              </div>
              <div>
                <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">Is it safe to diet while breastfeeding?</h4>
                <p className="text-[#3D2C2C]/70 leading-relaxed">Restrictive dieting is best avoided for the first 8 weeks. Once your supply is established, a moderate approach that focuses on whole foods can help you lose weight safely without impacting your energy or milk volume.</p>
              </div>
            </div>
          </section>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            <div className="bg-white rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-sm text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Check your needs</h3>
              <p className="text-[#3D2C2C]/70">Find out exactly how many calories your body needs right now with our free Breastfeeding Calorie Calculator.</p>
              <Link 
                href="/breastfeeding-calories"
                className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all"
              >
                Calculate Now →
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-[#E8A0A8]/30 shadow-sm text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#3D2C2C]">Safe Progress</h3>
              <p className="text-[#3D2C2C]/70">Wondering about safe weight loss while nursing? Our free calculator has you covered.</p>
              <Link 
                href="/safe-weight-loss"
                className="inline-block border-2 border-[#E8A0A8] text-[#E8A0A8] hover:bg-[#F9E4E8] px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all"
              >
                View Target →
              </Link>
            </div>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: Academy of Nutrition and Dietetics: Nutrition during Lactation. Academy of Breastfeeding Medicine Clinical Protocol #29. NHS — Vitamins and nutrition in pregnancy and after birth.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">Read This Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/breastfeeding-calorie-needs" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Nutrition</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">How Many Extra Calories Do You Need When Breastfeeding?</h4>
              </Link>
              <Link href="/blog/safe-weight-loss-breastfeeding" className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">Weight Loss</span>
                <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Is it Safe to Lose Weight While Breastfeeding?</h4>
              </Link>
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
