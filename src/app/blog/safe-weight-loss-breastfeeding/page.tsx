import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is it Safe to Lose Weight While Breastfeeding? — NurtureCalc',
  description: 'Find out whether it\'s safe to lose weight while breastfeeding, how quickly you can lose weight postpartum, and what affects your milk supply.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/blog/safe-weight-loss-breastfeeding',
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-lg max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          
          <header className="mb-12 not-prose border-b border-[#E8A0A8]/20 pb-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">Nutrition</span>
              <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-snug mb-6">
              Is it Safe to Lose Weight While Breastfeeding?
            </h1>
            <p className="text-xl font-serif italic text-[#E8A0A8]">
              Why so many new mothers ask this question—and the science behind the answer.
            </p>
          </header>

          <p>
            The moment you give birth, society often begins whispering (or shouting) about "bouncing back." It's no wonder that one of the most common questions new mothers ask is exactly when and how they can safely begin losing weight. This pressure is uniquely intense, yet it fundamentally conflicts with the profound physiological healing your body requires in the fourth trimester, particularly if you are also responsible for producing total nourishment for an entirely new human being.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What happens to your body in the first 12 weeks postpartum</h2>
          <p>
            Before even considering intentional weight loss, it's vital to unpack what your body has just achieved. During the first six to twelve weeks postpartum, your uterus is laboriously shrinking back to its pre-pregnancy size (involution). You are shedding excess blood and fluid volume built up over nine months. If you endured a cesarean section or vaginal tearing, your body is directing immense energy towards cellular repair and wound healing. 
          </p>
          <p>
            Attempting to force weight loss during this acute recovery window through severe caloric restriction actively starves the cellular healing process. It strips you of the energy required to recover from childbirth trauma while simultaneously managing profound sleep deprivation. Healing requires calories; it requires dense, comprehensive nutrition.
          </p>

          <div className="ad-inline my-8 bg-slate-100 p-4 rounded text-center text-sm text-slate-400 font-label border border-dashed border-slate-300">
            Advertisement Placeholder
          </div>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">How breastfeeding affects your calorie needs and weight loss</h2>
          <p>
            Breastfeeding is a metabolic marathon. Producing milk demands a staggering amount of energy. On average, a mother exclusively breastfeeding a newborn requires an additional 500 to 600 calories per day on top of her baseline needs. 
          </p>
          <p>
            Because of this high energy demand, some women find that the pregnancy weight naturally "melts off" as their bodies tap into stored fat to fuel milk production. However, this is not a universal experience. For many women, the hormone prolactin—which is essential for milk synthesis—actually signals the body to stubbornly hold onto fat stores, an evolutionary adaptation designed to ensure you can continue feeding your baby even during a theoretical famine. If you are not seeing the scale drop while nursing, your biology is doing exactly what it was designed to do: protecting your baby's food source.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What is a safe rate of weight loss while breastfeeding?</h2>
          <p>
            If you feel physically recovered, are past the initial six-week mark, and have established a robust, steady milk supply, you may consider gentle, intentional weight loss. However, the keyword must be <i>gentle</i>.
          </p>
          <p>
            Clinical guidelines from the CDC and major pediatric associations suggest a maximum safe rate of weight loss of 0.25 to 0.5 kilograms (about 0.5 to 1 pound) per week for nursing mothers. Dropping weight any faster requires a severe caloric deficit that will almost certainly compromise your milk output. Furthermore, rapid weight loss triggers the release of toxins stored deeply within fat cells directly into your bloodstream, which can then cross into your breastmilk. 
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Signs you may be losing weight too quickly</h2>
          <p>
            Your body is remarkably adept at communicating distress. If your caloric deficit is too steep, you may notice a sudden, noticeable drop in your milk supply. Your baby might seem fussy or unsatisfied after feeds, or have fewer wet diapers.
          </p>
          <p>
            You might also experience symptoms such as persistent, crushing fatigue that goes beyond normal newborn exhaustion, dizziness, hair loss, or intense, uncontrollable cravings for sugar and carbohydrates. These are physiological SOS signals indicating that your body is cannibalizing its own vital energy reserves.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Practical tips for gentle, sustainable postpartum weight loss</h2>
          <p>
            Rather than focusing on restrictive diets or cutting entire food groups, shift your focus to the <i>quality</i> of your fuel. Prioritize nutrient density: complex carbohydrates like oats (which can actually help boost milk supply), healthy fats like avocados and walnuts, and robust sources of protein. 
          </p>
          <p>
            Drink to thirst, and then drink a little more, as hydration is heavily tied to both milk production and metabolic function. Incorporate gentle, restorative movement like walking and deep core breathing before progressing to high-intensity workouts. Most importantly, practice radical self-compassion. The body that grew, birthed, and is feeding your baby is a marvel of biology, not a project to be endlessly fixed.
          </p>

          {/* CTA Box */}
          <div className="not-prose my-12 bg-white rounded-3xl p-8 border border-[#E8A0A8]/30 shadow-[0_4px_20px_rgba(232,160,168,0.1)] text-center space-y-4">
            <h3 className="text-xl font-serif text-[#3D2C2C]">Ready to find your safe clinical baseline?</h3>
            <p className="text-[#3D2C2C]/70">Take the guesswork out of your postpartum recovery journey.</p>
            <Link 
              href="/safe-weight-loss"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Use our Safe Weight Loss Rate Calculator →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> Always speak to your doctor or midwife before making changes to your diet after birth. This article provides general educational information and is not a substitute for medical advice.
            </p>
          </div>

        </article>

        {/* You Might Also Like */}
        <footer className="border-t border-[#E8A0A8]/20 pt-12">
          <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8">You might also like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/breastfeeding-calorie-needs" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">How Many Extra Calories Do You Need When Breastfeeding?</h4>
            </Link>
            <Link href="/blog/returning-to-exercise-after-birth" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Fitness</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">A Gentle Guide to Returning to Exercise After Birth</h4>
            </Link>
          </div>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
