import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Gentle Guide to Returning to Exercise After Birth — NurtureCalc',
  description: 'When is it safe to exercise after giving birth? Learn the evidence-based timeline for returning to exercise after a vaginal birth or C-section.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/blog/returning-to-exercise-after-birth',
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
              <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">Fitness</span>
              <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide">6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-snug mb-6">
              A Gentle Guide to Returning to Exercise After Birth
            </h1>
            <p className="text-xl font-serif italic text-[#E8A0A8]">
              Why taking your time is the most powerful thing you can do for your long-term fitness.
            </p>
          </header>

          <p>
            In a culture obsessed with the "snap back," the pressure to resume intense workouts immediately after birth can be overwhelming. Yet, returning to high-impact exercise before your core and pelvic architecture have adequately healed is one of the leading causes of chronic postpartum injuries. Proper rehabilitation isn't about laziness; it's about treating childbirth with the same biomechanical respect we would give any major sports injury or abdominal surgery.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What your body goes through during and after birth</h2>
          <p>
            For nine months, your abdominal muscles stretched to their absolute limits, separating down the midline to accommodate your growing baby (diastasis recti). Your pelvic floor bore the increasing weight of a human being, placenta, and amniotic fluid.
          </p>
          <p>
            During delivery—whether vaginal or cesarean—these tissues underwent extreme trauma. Furthermore, your body remains flooded with relaxin, a hormone that loosens ligaments to allow the pelvis to open for birth. Relaxin can stay in your system for up to six months postpartum (and longer if you are breastfeeding), leaving your joints highly unstable and prone to injury if loaded incorrectly.
          </p>

          <div className="ad-inline my-8 bg-slate-100 p-4 rounded text-center text-sm text-slate-400 font-label border border-dashed border-slate-300">
            Advertisement Placeholder
          </div>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">The evidence-based timeline for vaginal birth recovery</h2>
          <p>
            A six-week clearance from your doctor simply means your cervix has closed and immediate bleeding has resolved; it does <i>not</i> mean your connective tissues have regained tensile strength. 
          </p>
          <p>
            Current clinical guidelines recommend zero high-impact exercise (running, jumping, heavy lifting) for the first 12 weeks. Instead, the first 6 weeks should focus intensely on rest, diaphragmatic breathing, and short, gentle walks. From weeks 6 to 12, the focus shifts to low-impact rebuilding: bodyweight squats, gentle core engagements, and restoring the mind-muscle connection with your pelvic floor.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">The evidence-based timeline for C-section recovery</h2>
          <p>
            If you had a cesarean section, you are recovering from a major abdominal surgery where multiple layers of tissue and muscle fascia were severed. The timeline here must be even more conservative.
          </p>
          <p>
            For the first 6 to 8 weeks, you should not lift anything heavier than your baby. Your primary "exercise" is moving without aggravating your incision. Around 8 weeks, with medical clearance, you can begin incredibly gentle core restoration, strictly avoiding direct abdominal crunches or heavy downward pressure, steadily building strength over 4 to 6 months before returning to prior fitness baselines.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Warning signs to stop exercising immediately</h2>
          <p>
            Your body will tell you exactly when an exercise is too much. You must stop whatever movement you are doing immediately if you experience:
          </p>
          <ul>
            <li>Leaking urine or feces (this is common, but it is <i>not</i> normal or acceptable)</li>
            <li>A sensation of heaviness, dragging, or a bulge in your vagina (signs of prolapse)</li>
            <li>Doming or coning down the center of your stomach (indicating poor pressure management with diastasis recti)</li>
            <li>Any pain at your pubic bone, lower back, or incision site</li>
            <li>A sudden return or increase in bright red lochia (postpartum bleeding)</li>
          </ul>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">The best exercises to start with — and what to avoid</h2>
          <p>
            Avoid crunches, sit-ups, heavy deadlifts, running, and jumping jacks in the early months. These create massive intra-abdominal pressure that your healing core cannot yet manage. 
          </p>
          <p>
            Instead, start with 360-degree diaphragmatic breathing, pelvic tilts, glute bridges, and side-lying clam shells. These exercises safely reconstruct the deep core cylinder from the inside out.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Why seeing a pelvic floor physiotherapist changes everything</h2>
          <p>
            In many countries, vascular rehabilitation is standard after a heart attack, yet pelvic rehabilitation is rarely prescribed after birth. A pelvic floor physiotherapist is the single most valuable investment you can make in your postpartum recovery. They can assess exactly how your muscles are firing, identify early signs of prolapse, and prescribe a highly personalized roadmap to get you back to the sports you love—safely.
          </p>

          {/* CTA Box */}
          <div className="not-prose my-12 bg-white rounded-3xl p-8 border border-[#E8A0A8]/30 shadow-[0_4px_20px_rgba(232,160,168,0.1)] text-center space-y-4">
            <h3 className="text-xl font-serif text-[#3D2C2C]">When are you ready to progress?</h3>
            <p className="text-[#3D2C2C]/70">Find out where you are on the clinical timeline based on your specific delivery and symptoms.</p>
            <Link 
              href="/exercise-timeline"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Use our Return-to-Exercise Timeline Tool →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> Always get clearance from your doctor or midwife before returning to exercise after birth. Stop immediately if you feel pain or discomfort.
            </p>
          </div>

        </article>

        {/* You Might Also Like */}
        <footer className="border-t border-[#E8A0A8]/20 pt-12">
          <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8">You might also like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/pelvic-floor-after-birth" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Recovery</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">What is the Pelvic Floor and Why Does it Matter After Birth?</h4>
            </Link>
            <Link href="/blog/breastfeeding-calorie-needs" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">How Many Extra Calories Do You Need When Breastfeeding?</h4>
            </Link>
          </div>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
