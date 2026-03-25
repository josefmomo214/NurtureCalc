import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Many Extra Calories Do You Need When Breastfeeding? — NurtureCalc',
  description: 'Breastfeeding burns hundreds of extra calories a day. Learn how many calories you actually need, what affects your intake, and how to eat well for you and your baby.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/blog/breastfeeding-calorie-needs',
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Many Extra Calories Do You Need When Breastfeeding?",
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com/author/nurturecalc-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com"
    },
    "datePublished": "2026-03-25",
    "description": "Producing milk is hard work. Ensure you are properly fuelling your body by understanding exactly how many extra calories your body burns each day.",
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-lg max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          
          <header className="mb-12 not-prose border-b border-[#E8A0A8]/20 pb-10 text-center">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">Nutrition</span>
              </div>
              <div className="space-y-1">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  NurtureCalc Team
                </Link>
                <p className="text-[10px] text-[#3D2C2C]/50 font-label tracking-wide uppercase">
                  Fact-checked against published medical guidelines —{" "}
                  <Link href="/author/nurturecalc-team#sources" className="underline hover:text-[#E8A0A8]">
                    see our sources
                  </Link>
                </p>
                <span className="block text-xs text-[#3D2C2C]/50 font-label tracking-wide">4 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-snug mb-6">
              How Many Extra Calories Do You Need When Breastfeeding?
            </h1>
            <p className="text-xl font-serif italic text-[#E8A0A8]">
              Why nutrition matters so much in the postpartum period—and how to ensure you're getting enough.
            </p>
          </header>

          <p>
            Nourishing a newborn through breastmilk is nothing short of a biological superpower. However, it's a superpower that demands immense physiological fuel. If you've ever experienced the intense, ravenous hunger that strikes at 3:00 AM while nursing, you've felt this metabolic drain firsthand. Understanding exactly *why* your body is demanding more food—and precisely how much more it needs—is critical to sustaining both a healthy milk supply and your own physical recovery postpartum.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">How breastfeeding affects your metabolism</h2>
          <p>
            When you breastfeed, your body effectively goes into overdrive. Producing human milk is one of the most energetically expensive things a body can do, consuming more metabolic energy than maintaining the pregnancy itself. Your body must draw upon your dietary intake and fat stores to synthesize complex sugars, lipids, proteins, and immune-boosting antibodies out of thin air to meet your baby's rapid growth needs.
          </p>

          <div className="ad-inline my-8 bg-slate-100 p-4 rounded text-center text-sm text-slate-400 font-label border border-dashed border-slate-300">
            Advertisement Placeholder
          </div>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">The science behind breastfeeding calorie needs</h2>
          <p>
            The foundation of understanding your caloric needs lies in your Basal Metabolic Rate (BMR)—the energy your body uses just to stay alive at rest. Dietitians frequently use the Mifflin-St Jeor equation to calculate this baseline. We then account for your physical activity level to determine your Total Daily Energy Expenditure (TDEE).
          </p>
          <p>
            Once you have your baseline TDEE, the World Health Organization (WHO) and major pediatric bodies recommend adding a substantial "nursing bonus." For a mother exclusively breastfeeding an infant in the first six months, this biological surcharge requires an additional 500 to 600 calories per day on average to prevent depletion of her own bodily reserves.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">How the number of feeds changes your calorie requirements</h2>
          <p>
            It is a common misconception that the 500-calorie rule is static. The reality is that your caloric need fluctuates in direct proportion to how much milk your baby is consuming. 
          </p>
          <p>
            A mother actively nursing a newborn 8 to 12 times a day requires max caloric support. However, as your baby grows, begins sleeping longer stretches, and starts experimenting with solid foods around six months of age, your milk production naturally tapers to match their slightly reduced dependence. As the frequency of daily nursing sessions falls to three or four times, that heavy +500 cal "nursing bonus" scales down proportionally to perhaps +200 or +300 calories.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What to eat — quality vs quantity</h2>
          <p>
            While the sheer *number* of calories matters, the *composition* of those calories profoundly impacts both your energy levels and your milk's nutritional profile. Rather than relying on empty sugars to quench nursing hunger, focus on nutrient density.
          </p>
          <p>
            Complex carbohydrates like oatmeal combat fatigue and support milk volume. Healthy fats from avocados, olive oil, and salmon directly influence the quality of lipids in your breastmilk, supporting your baby's brain development. Furthermore, ensure you stay adequately hydrated; water isn't a macronutrient, but inadequate fluid consumption is a primary culprit for plummeting milk supplies.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Signs you are not eating enough while breastfeeding</h2>
          <p>
            Your body will not quietly tolerate starvation while nursing. Warning signs of an inadequate caloric intake include a noticeable drop in milk volume, feeling dizzy or lightheaded upon standing, profound exhaustion, and sudden mood swings. Remember: feeding your baby requires you to feed yourself first.
          </p>

          {/* CTA Box */}
          <div className="not-prose my-12 bg-white rounded-3xl p-8 border border-[#E8A0A8]/30 shadow-[0_4px_20px_rgba(232,160,168,0.1)] text-center space-y-4">
            <h3 className="text-xl font-serif text-[#3D2C2C]">Calculate Your Exact Daily Needs</h3>
            <p className="text-[#3D2C2C]/70">Stop guessing and find your clinical daily caloric target based on your activity level and feeding frequency.</p>
            <Link 
              href="/breastfeeding-calories"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Use our Breastfeeding Calorie Needs Estimator →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> This article is for informational purposes only. Speak to a registered dietitian or your midwife for personalised nutrition advice.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-12 pt-8 border-t border-[#E8A0A8]/10">
            <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label">
              Sources: Institute of Medicine. Dietary Reference Intakes for Energy. Mifflin MD et al. A new predictive equation for resting energy expenditure. Journal of the American Dietetic Association, 1990.
            </p>
          </div>

        </article>

        {/* You Might Also Like */}
        <footer className="border-t border-[#E8A0A8]/20 pt-12">
          <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8">You might also like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/safe-weight-loss-breastfeeding" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Is it Safe to Lose Weight While Breastfeeding?</h4>
            </Link>
            <Link href="/blog/understanding-baby-growth-chart" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Baby Health</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Understanding Your Baby's Growth Chart</h4>
            </Link>
          </div>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
