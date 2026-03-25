import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is the Pelvic Floor and Why Does it Matter After Birth? — NurtureCalc',
  description: 'Learn what the pelvic floor is, how birth affects it, and what you can do to support your recovery. Includes signs of pelvic floor dysfunction to watch for.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/blog/pelvic-floor-after-birth',
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is the Pelvic Floor and Why Does it Matter After Birth?",
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
    "description": "The pelvic floor endures massive strain during pregnancy. Learn how to identify symptoms of dysfunction and steps you can take to heal effectively.",
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
                <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">Recovery</span>
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
                <span className="block text-xs text-[#3D2C2C]/50 font-label tracking-wide">5 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-snug mb-6">
              What is the Pelvic Floor and Why Does it Matter After Birth?
            </h1>
            <p className="text-xl font-serif italic text-[#E8A0A8]">
              It's the hammock holding everything up—here is how to care for it after delivery.
            </p>
          </header>

          <p>
            It is one of the most hardworking muscle groups in the human body, yet many women don't truly think about their pelvic floor until after they have a baby. During postpartum recovery, discussions around torn ligaments and muscle fatigue usually focus on the visible body. But the deep, invisible architecture supporting your core is often what dictates your quality of life, comfort, and confidence in the months and years following childbirth.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What is the pelvic floor and what does it do?</h2>
          <p>
            Imagine a thick, muscular hammock stretching across the base of your pelvis, attaching from your tailbone at the back to your pubic bone at the front. This is your pelvic floor. 
          </p>
          <p>
            These muscles have three critical jobs: they support your pelvic organs (bladder, uterus, and bowel) against gravity; they control your sphincter muscles to prevent you from leaking urine, gas, or feces; and they play a vital role in sexual sensation and function. They also form the foundation of your "deep core," working continually with your diaphragm to manage the pressure inside your abdomen every time you cough, lift, laugh, or jump.
          </p>

          <div className="ad-inline my-8 bg-slate-100 p-4 rounded text-center text-sm text-slate-400 font-label border border-dashed border-slate-300">
            Advertisement Placeholder
          </div>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">How pregnancy and birth affect the pelvic floor</h2>
          <p>
            Pregnancy alone applies immense downward pressure on this muscular hammock for nine long months. The increasing weight of the baby, combined with the relaxing effect of pregnancy hormones, stretches the pelvic tissues deeply. 
          </p>
          <p>
            If you give birth vaginally, those muscles must stretch up to three times their normal length to allow the baby's head to pass. Just like an overstretched rubber band, it takes time for the tissues to regain their tension. Even if you deliver via cesarean section, the nine months of pregnancy load and the severing of the abdominal fascia (which works synergistically with the pelvic floor) can still lead to significant pelvic floor weakness.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Common signs of pelvic floor dysfunction after birth</h2>
          <p>
            Because we normalize postpartum suffering, many women assume certain symptoms are just "part of being a mom." While common, these symptoms indicate dysfunction and deserve treatment:
          </p>
          <ul>
            <li><strong>Incontinence:</strong> Leaking urine when sneezing, coughing, running, or laughing.</li>
            <li><strong>Prolapse symptoms:</strong> A sensation of heaviness, dragging, or a literal bulge at the vaginal opening indicating an organ is descending.</li>
            <li><strong>Pain:</strong> Pain during intercourse, pain near episiotomy scars, or relentless lower back and pelvic pain.</li>
            <li><strong>Urgency:</strong> Struggling to reach the bathroom in time or feeling unable to empty your bladder completely.</li>
          </ul>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">How to do pelvic floor exercises correctly</h2>
          <p>
            The standard advice is often just "do your Kegels," but poorly performed Kegels can actually make things worse. A true pelvic floor contraction involves both a tightening (like stopping the flow of urine) AND a lifting sensation (pulling up towards your belly button). 
          </p>
          <p>
            Crucially, the <i>release</i> is just as important as the contraction. If you constantly clench your pelvic floor without relaxing it fully, the muscles become hypertonic (too tight), which can cause pain and ironically lead to leaking because the muscle is too exhausted to contract when you need it to.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">When to see a pelvic floor physiotherapist</h2>
          <p>
            Every postpartum woman should see a pelvic floor physical therapist at least once, roughly 6 weeks after delivery. However, it becomes urgent if you are experiencing any signs of dysfunction (leaking, heaviness, pain) entirely. A PT can assess internally whether your muscles are too weak, too tight, or uncoordinated, giving you a customized recovery plan rather than a generic internet pamphlet.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">How long does pelvic floor recovery take?</h2>
          <p>
            Tissues take time to heal. Most women find that with dedicated, gradual rehabilitation, significant healing occurs between 3 and 6 months postpartum. However, for more severe tearing or prolapse, the recovery timeline can stretch to a year or more. Patience, consistency, and professional guidance are key.
          </p>

          {/* CTA Box */}
          <div className="not-prose my-12 bg-white rounded-3xl p-8 border border-[#E8A0A8]/30 shadow-[0_4px_20px_rgba(232,160,168,0.1)] text-center space-y-4">
            <h3 className="text-xl font-serif text-[#3D2C2C]">Check your recovery stage</h3>
            <p className="text-[#3D2C2C]/70">Take our gentle diagnostic quiz to understand your current pelvic floor status.</p>
            <Link 
              href="/pelvic-floor-recovery"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Take our Pelvic Floor Recovery Estimator →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> If you are experiencing pain, leaking, or prolapse symptoms, please seek support from a qualified pelvic floor physiotherapist.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-12 pt-8 border-t border-[#E8A0A8]/10">
            <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label">
              Sources: Pelvic, Obstetric and Gynaecological Physiotherapy (POGP) guidelines. Bø K et al. Evidence-based Physical Therapy for the Pelvic Floor, 2nd edition.
            </p>
          </div>

        </article>

        {/* You Might Also Like */}
        <footer className="border-t border-[#E8A0A8]/20 pt-12">
          <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8">You might also like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/returning-to-exercise-after-birth" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Fitness</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">A Gentle Guide to Returning to Exercise After Birth</h4>
            </Link>
            <Link href="/blog/safe-weight-loss-breastfeeding" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">Is it Safe to Lose Weight While Breastfeeding?</h4>
            </Link>
          </div>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
