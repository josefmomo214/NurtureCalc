"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculateBabyWeightPercentile } from "@/utils/calculators";
import Link from "next/link";

import { useUnitSystem } from "@/context/UnitContext";
import UnitToggle from "@/components/UnitToggle";
import { useEffect } from "react";

export default function BabyWeightPercentileContent() {
  const { system } = useUnitSystem();
  const [prevSystem, setPrevSystem] = useState(system);

  const [sex, setSex] = useState<string | null>(null);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ percentile: number; color: string; message: string } | null>(null);

  useEffect(() => {
    if (prevSystem !== system) {
      if (weight) {
        const num = parseFloat(weight);
        if (!isNaN(num)) {
          setWeight(system === "imperial" 
            ? (num * 2.20462).toFixed(2).replace(/\.00$/, "") 
            : (num / 2.20462).toFixed(2).replace(/\.00$/, ""));
        }
      }
      setPrevSystem(system);
    }
  }, [system, prevSystem, weight]);

  const handleCalculate = () => {
    const a = parseInt(age);
    let w = parseFloat(weight);
    
    if (system === "imperial") {
      w = w / 2.20462;
    }
    
    if (age === "" || isNaN(a) || w <= 0 || !sex) return;
    
    // Bounds check for our simplified 0-52 week table
    const safeAge = Math.max(0, Math.min(52, a));
    
    setResult(calculateBabyWeightPercentile(sex, safeAge, w));
  };

  const handleReset = () => {
    setSex(null);
    setAge("");
    setWeight("");
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full py-12 px-6 gap-12">
        <div className="flex-1 space-y-12">
          <nav>
            <Link href="/#calculators" className="font-label text-xs font-bold text-[#E8A0A8] flex items-center gap-2 hover:underline">
              ← BACK TO CALCULATORS
            </Link>
          </nav>

          <header className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
              Baby Weight Percentile <span className="text-[#E8A0A8] italic">Calculator</span>
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              This calculator uses WHO growth standards to show where your baby's weight falls compared to other babies of the same age and sex. Remember — healthy babies come in all sizes.
            </p>
          </header>

          <div className="flex justify-end w-full md:max-w-4xl max-w-2xl border-t-0 p-0 text-right scale-100">
            <UnitToggle />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Card className="space-y-8 bg-white border border-[#E8A0A8]/10 shadow-[0_10px_40px_rgba(232,160,168,0.1)]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Baby's Sex</label>
                  <div className="flex gap-4">
                    <button 
                      className={`flex-1 py-3 px-4 rounded-md font-label text-xs font-bold transition-all border ${sex === 'girl' ? 'bg-[#E8A0A8] text-white border-[#E8A0A8]' : 'bg-[#FFFDF9] text-[#3D2C2C] border-[#E8A0A8]/20 hover:border-[#E8A0A8]'}`}
                      onClick={() => setSex('girl')}
                    >
                      Girl
                    </button>
                    <button 
                      className={`flex-1 py-3 px-4 rounded-md font-label text-xs font-bold transition-all border ${sex === 'boy' ? 'bg-[#E8A0A8] text-white border-[#E8A0A8]' : 'bg-[#FFFDF9] text-[#3D2C2C] border-[#E8A0A8]/20 hover:border-[#E8A0A8]'}`}
                      onClick={() => setSex('boy')}
                    >
                      Boy
                    </button>
                  </div>
                </div>

                <Input label="Age in weeks (0 - 52)" type="number" min="0" max="52" value={age} onChange={(e) => setAge(e.target.value)} placeholder="0 for birth" />
                <Input label={system === "imperial" ? "Weight (lbs)" : "Weight (kg)"} type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={system === "imperial" ? "e.g. 11.5" : "e.g. 5.2"} />
              </div>

              {!result && (
                <Button 
                  className="w-full bg-[#E8A0A8] hover:bg-[#D58A92] text-white" 
                  onClick={handleCalculate}
                  disabled={age === "" || !weight || !sex}
                >
                  Calculate Percentile
                </Button>
              )}
            </Card>

            <div className="flex flex-col gap-6">
              {result && (
                <Card className={`flex-1 space-y-8 border ${result.color.split(" ")[2]} ${result.color.split(" ")[0]} animate-in slide-in-from-right-4 duration-500 shadow-xl flex flex-col justify-center`}>
                  <div className="space-y-4 text-center">
                    <span className="font-label text-xs font-black tracking-widest uppercase opacity-70 block">Your Baby's Percentile</span>
                    <div className="text-7xl font-serif leading-none">
                      {result.percentile}<span className="text-3xl ml-1">th</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl space-y-4">
                    <p className={`text-sm italic leading-relaxed text-center font-medium ${result.color.split(" ")[1]}`}>
                      {result.message}
                    </p>
                  </div>

                  <p className="text-xs opacity-60 italic text-center px-4 leading-relaxed">
                    Disclaimer: Always discuss your baby's growth and percentile readings with your pediatrician or healthcare provider.
                  </p>

                  <div className="pt-4 flex justify-center">
                    <Button variant="tertiary" onClick={handleReset} className="opacity-80 hover:opacity-100">
                      Calculate another
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
          <section className="mt-16 max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What does a baby weight percentile actually mean?</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              A weight percentile shows how your baby&apos;s weight compares to a large reference population of healthy babies of the same age and sex. If your baby is at the 40th percentile, it means they weigh more than 40% of babies their age and less than the remaining 60% — nothing more and nothing less. The calculator uses the World Health Organization (WHO) Child Growth Standards, which were developed from data collected across six countries and are considered the international gold standard for infant growth tracking, particularly for breastfed babies. The 50th percentile is not a target — healthy babies naturally distribute across the full range, and a baby consistently tracking at the 15th percentile is just as healthy as one at the 85th, provided their curve is stable.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">WHO weight percentiles by age — reference ranges</h2>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-[#3D2C2C] min-w-[560px]">
                <thead>
                  <tr className="bg-[#E8A0A8]/20">
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Age</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Girls 10th–90th</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Girls 50th</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Boys 10th–90th</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Boys 50th</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Birth</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">2.8–3.9 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">3.2 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">2.9–4.0 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">3.3 kg</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">1 month</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">3.4–4.8 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">4.1 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">3.6–5.1 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">4.3 kg</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">2 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">4.2–5.9 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">5.0 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">4.4–6.2 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">5.3 kg</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">4 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">5.4–7.3 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">6.3 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">5.6–7.7 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">6.6 kg</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">6 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">6.1–8.2 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">7.1 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">6.4–8.6 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">7.4 kg</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">9 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">7.0–9.4 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">8.1 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">7.1–9.7 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">8.3 kg</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">12 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">7.8–10.5 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">9.0 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">7.8–10.8 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">9.2 kg</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">24 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">9.8–13.2 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">11.3 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">10.0–13.6 kg</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">11.7 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#3D2C2C]/60 italic">
              These are approximate ranges derived from WHO growth standards. Individual variation is normal. Always discuss your baby&apos;s growth pattern with your paediatrician or health visitor.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What your baby&apos;s percentile result means</h2>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg">
              <li>
                <strong className="text-[#3D2C2C]">Consistently low percentile (below 10th).</strong> A baby who has always tracked around the 5th–9th percentile may simply be naturally small — especially if parents are small-framed. What matters is that the curve is stable. A consistent low percentile with normal feeding, wet nappies, and developmental milestones is reassuring. Bring it up at your next health visitor or paediatrician appointment for context.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Consistently high percentile (above 90th).</strong> A baby tracking above the 90th percentile is not automatically overweight. Large babies are common in families with larger parents, and breastfed babies naturally regulate their own intake. Your health visitor will flag any clinical concern — a single high percentile reading is not cause for alarm.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Stable percentile — any level.</strong> The most reassuring pattern is a baby who follows their own curve consistently over time. A baby at the 25th percentile at 2 months who is still at the 25th percentile at 6 months is growing exactly as expected for their individual trajectory.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Crossing two or more major percentile lines downward.</strong> A significant drop — for example from the 75th percentile to below the 25th — over two or more measurements is the pattern that warrants investigation. This is called faltering growth and your paediatrician will want to assess feeding efficiency, absorption, and overall health.
              </li>
            </ul>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Factors that influence where your baby sits on the chart</h2>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg">
              <li>
                <strong className="text-[#3D2C2C]">Genetics.</strong> The single strongest predictor of a baby&apos;s natural size is parental size. Two smaller parents will typically have a smaller baby — and that baby&apos;s natural percentile may sit in the lower ranges throughout infancy without any clinical significance.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Feeding method and frequency.</strong> Breastfed and formula-fed babies grow at slightly different rates, particularly after 3 months. The WHO charts are calibrated for breastfed babies and reflect a natural slowdown in weight gain between 3–6 months that can look alarming on older chart systems.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Gestational age at birth.</strong> Premature babies are typically plotted on corrected age — their age adjusted for how early they were born — until at least 2 years. Using uncorrected age for a premature baby produces artificially low percentiles that do not reflect true growth.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Birth weight.</strong> Very high or very low birth weight can affect early percentile placement before the baby settles onto their natural growth curve, which typically happens around 3–4 months.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Illness or feeding disruption.</strong> A significant illness or feeding difficulty can cause a temporary drop in percentile. Once the issue resolves, most babies return to their established curve within a few weeks.
              </li>
            </ul>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">When to contact your health visitor or paediatrician</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              Contact your health visitor or paediatrician if your baby drops across two or more major percentile lines between measurements, if they are consistently producing fewer wet nappies than expected for their age, or if they seem uninterested in feeding, excessively sleepy, or are not meeting developmental milestones alongside the weight concern. A single low or high reading on its own is rarely a reason for urgent concern. Growth is a pattern, not a single data point — for a fuller picture, read our guide to{" "}
              <Link href="/blog/understanding-baby-growth-chart/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">understanding baby growth charts</Link>.
            </p>
          </section>

          <section className="max-w-3xl space-y-4 pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
            <div className="space-y-3">
              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  What is a healthy weight percentile for a baby?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Any percentile from the 3rd to the 97th can be healthy for an individual baby. There is no single ideal percentile. What matters most is that your baby follows a consistent curve over time and is feeding well, producing adequate wet nappies, and meeting developmental milestones.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  My baby dropped from the 60th to the 30th percentile. Should I be worried?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  A drop of this size over one or two measurements warrants a conversation with your health visitor or paediatrician, but it does not automatically indicate a problem. Some percentile movement in the first few months is normal as babies settle onto their natural growth curve. Your health professional will assess feeding, output, and overall development in context.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Do breastfed babies weigh less than formula-fed babies?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Breastfed babies tend to gain weight more quickly in the first 3 months and then slightly more slowly from 3–6 months compared to formula-fed babies. The WHO charts used in this calculator are based on breastfed baby data and account for this pattern. Older chart systems were based on formula-fed babies and can make breastfed babies appear to be growing too slowly after 3 months.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  How often should I weigh my baby?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  In the UK, health visitors typically recommend weighing no more than once a month after the first few weeks, once initial weight loss after birth has been regained. Frequent weighing can increase parental anxiety without providing clinically useful additional information. Follow your health visitor&apos;s guidance on timing.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  My baby was premature. How do I use this calculator?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  For premature babies, use their corrected age rather than their actual age. Corrected age is calculated by subtracting the number of weeks early from their current age. For example, a 4-month-old baby born 8 weeks early should be plotted as a 2-month-old. Most clinicians use corrected age until the child is 2 years old.
                </div>
              </details>
            </div>
          </section>
        </div>


      </main>

      <section className="max-w-5xl mx-auto w-full px-6 py-12 border-t border-[#E8A0A8]/10">
        <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/understanding-baby-growth-chart/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Baby Health</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Understanding Your Baby&apos;s Growth Chart</p>
          </Link>
          <Link href="/blog/baby-growth-spurts/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Baby Health</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Baby Growth Spurts: What They Are and When They Happen</p>
          </Link>
          <Link href="/blog/newborn-sleep-schedule/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Baby Health</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Newborn Sleep Schedule: What to Really Expect</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
