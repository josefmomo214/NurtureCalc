import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Your Baby\'s Growth Chart — NurtureCalc',
  description: 'Growth charts can feel confusing and worrying. Learn what percentiles actually mean, what WHO growth standards are, and when to talk to your doctor.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/blog/understanding-baby-growth-chart',
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-lg max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">
          
          <header className="mb-12 not-prose border-b border-[#E8A0A8]/20 pb-10 text-center">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">Baby Health</span>
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
              Understanding Your Baby's Growth Chart
            </h1>
            <p className="text-xl font-serif italic text-[#E8A0A8]">
              Why growth charts worry parents—and why they usually shouldn't.
            </p>
          </header>

          <p>
            Few things induce as much anxiety in new parents as the pediatrician's growth chart. At every well-baby visit, your infant is weighed, measured, and plotted onto a curving graph, yielding a "percentile" that can feel suspiciously like a grade. A low percentile can trigger fears of underfeeding, while a rapidly jumping percentile can cause unneeded worry about overgrowth. Understanding the actual mathematics and clinical intent behind these charts is the best way to quiet that anxiety and confidently track your child's innate developmental path.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What is a percentile and what does it actually mean?</h2>
          <p>
            A percentile simply represents how your baby's measurements compare to a generalized sample of thousands of other babies of the exact same age and sex. 
          </p>
          <p>
            If your baby boy is in the 25th percentile for weight, it means that out of 100 healthy baby boys of the same age, he weighs more than 24 of them, and 75 of them weigh more than him. It is absolutely vital to understand that the 50th percentile is <i>not</i> an "A+" or a required goal. It is merely the mathematical median. A baby born in the 15th percentile can be just as perfectly healthy and perfectly fed as a baby in the 85th percentile. 
          </p>

          <div className="ad-inline my-8 bg-slate-100 p-4 rounded text-center text-sm text-slate-400 font-label border border-dashed border-slate-300">
            Advertisement Placeholder
          </div>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What are WHO growth standards and why do they matter?</h2>
          <p>
            Not all growth charts are created equal. In the past, many pediatric charts were based entirely on locally formula-fed infants, who tend to gain weight at a slightly heavier and faster rate in the first year. 
          </p>
          <p>
            Today, leading health bodies universally utilize the World Health Organization (WHO) Child Growth Standards for children under two years old. The WHO charts are globally sourced and specifically modeled on infants who were exclusively breastfed for their first six months in optimal environments. They represent a global biological standard for how human babies <i>should</i> grow under ideal conditions, regardless of ethnicity or geography, creating a much more accurate baseline for modern parents.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What is a healthy percentile range for babies?</h2>
          <p>
            Clinically, anywhere between the 2nd (or 5th) and the 98th (or 95th) percentile is classified as within the range of normal, provided the baby is meeting their expected milestones. The metric that doctors truly care about isn't the specific number your child lands on initially, but rather their <i>curve trend</i> over time.
          </p>
          <p>
            Every baby is born with a genetic predisposition to a certain size. A healthy growth pattern is one that roughly follows its established curve. A baby who is born at the 10th percentile and stays beautifully along the 10th percentile month after month is thriving perfectly. 
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">When should a percentile change concern you?</h2>
          <p>
            Doctors look for dramatic shifts across multiple major percentile lines. This is known as "falling off the curve."
          </p>
          <p>
            If a baby drops steeply—for instance, tumbling from the 75th percentile down to the 20th in a short period—it warrants investigation for feeding issues or underlying illness. Conversely, a sudden and massive jump across multiple lines might prompt a pediatrician to ensure there are no metabolic anomalies. However, slight dips and bumps are normal, often corresponding to growth spurts, recent illnesses, or newly acquired mobility (like crawling).
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">What affects your baby's weight and growth?</h2>
          <p>
            Genetics play the most spectacular role; tall, slender parents are highly likely to have a baby who naturally settles into a lower weight percentile while tracking highly on length. Birth weight is another factor, though some babies born small will naturally "catch up" over their first 12 weeks to find their true genetic curve. Feeding methods, frequency, active illnesses, and whether they were born prematurely all significantly weave into their developmental tracking.
          </p>

          <h2 className="text-2xl font-serif text-[#3D2C2C] mt-10 mb-4">Tips for tracking your baby's growth at home</h2>
          <p>
            If tracking provides peace of mind, ensure you use the exact same scale under the exact same conditions (preferably bare-skinned before a feed) each time. But resist the urge to weigh obsessively. Focus instead on the macroscopic signs of thriving: a steady output of wet and dirty diapers, bright and alert periods of wakefulness, outgrowing clothing, and meeting social and motor milestones.
          </p>

          {/* CTA Box */}
          <div className="not-prose my-12 bg-white rounded-3xl p-8 border border-[#E8A0A8]/30 shadow-[0_4px_20px_rgba(232,160,168,0.1)] text-center space-y-4">
            <h3 className="text-xl font-serif text-[#3D2C2C]">Check your baby's current track</h3>
            <p className="text-[#3D2C2C]/70">Easily find your baby's percentile using the global WHO growth standards.</p>
            <Link 
              href="/baby-weight-percentile"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Use our Baby Weight Percentile Calculator →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> Growth charts are one tool among many. Always discuss your baby's growth with your paediatrician or health visitor. The information here does not replace professional medical observation.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-12 pt-8 border-t border-[#E8A0A8]/10">
            <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label">
              Sources: WHO Multicentre Growth Reference Study Group (2006). WHO Child Growth Standards. Geneva: World Health Organization. American Academy of Pediatrics Bright Futures Guidelines.
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
            <Link href="/blog/pelvic-floor-after-birth" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8] hover:shadow-md transition-all">
              <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Recovery</span>
              <h4 className="text-lg font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">What is the Pelvic Floor and Why Does it Matter After Birth?</h4>
            </Link>
          </div>
        </footer>

      </main>

      <Footer />
    </div>
  );
}
