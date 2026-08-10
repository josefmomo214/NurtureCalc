"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculateSafeWeightLoss } from "@/utils/calculators";
import Link from "next/link";

import { useUnitSystem } from "@/context/UnitContext";
import UnitToggle from "@/components/UnitToggle";
import { useEffect } from "react";

export default function SafeWeightLossContent() {
  const { system } = useUnitSystem();
  const [prevSystem, setPrevSystem] = useState(system);

  const [weight, setWeight] = useState("");
  const [weeks, setWeeks] = useState("");
  const [isBreastfeeding, setIsBreastfeeding] = useState<boolean | null>(null);
  const [result, setResult] = useState<{ maxRate: number; message: string } | null>(null);

  useEffect(() => {
    if (prevSystem !== system) {
      if (weight) {
        const num = parseFloat(weight);
        if (!isNaN(num)) {
          if (system === "imperial") {
            setWeight((num * 2.20462).toFixed(2).replace(/\.00$/, ""));
          } else {
            setWeight((num / 2.20462).toFixed(2).replace(/\.00$/, ""));
          }
        }
      }
      setPrevSystem(system);
    }
  }, [system, prevSystem, weight]);

  const handleCalculate = () => {
    let w = parseFloat(weight);
    const wk = parseInt(weeks);
    if (!w || !wk || isBreastfeeding === null) return;
    
    if (system === "imperial") {
      w = w / 2.20462;
    }
    
    setResult(calculateSafeWeightLoss(wk, isBreastfeeding));
  };

  const handleReset = () => {
    setWeight("");
    setWeeks("");
    setIsBreastfeeding(null);
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
              Safe Weight Loss Rate <span className="text-[#E8A0A8] italic">Calculator</span>
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              This calculator helps you find a safe weekly weight loss rate based on your postpartum stage and whether you are breastfeeding. Losing weight too quickly after birth can affect your milk supply and energy levels.
            </p>
          </header>

          <div className="flex justify-end w-full max-w-2xl">
            <UnitToggle />
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-2xl">
            <Card className="space-y-8 bg-white border border-[#E8A0A8]/10 shadow-[0_10px_40px_rgba(232,160,168,0.1)]">
              <div className="space-y-6">
                <Input 
                  label={system === "imperial" ? "Current Weight (lbs)" : "Current Weight (kg)"} 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  placeholder={system === "imperial" ? "e.g. 154" : "e.g. 70"}
                />
                
                <Input 
                  label="Weeks Postpartum" 
                  type="number" 
                  min="1" max="52"
                  value={weeks} 
                  onChange={(e) => setWeeks(e.target.value)} 
                  placeholder="1 - 52"
                />

                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">
                    Are you currently breastfeeding?
                  </label>
                  <div className="flex gap-4">
                    <button 
                      className={`flex-1 py-3 px-4 rounded-md font-label text-sm font-bold transition-all border ${isBreastfeeding === true ? 'bg-[#E8A0A8] text-white border-[#E8A0A8]' : 'bg-[#FFFDF9] text-[#3D2C2C] border-[#E8A0A8]/20 hover:border-[#E8A0A8]'}`}
                      onClick={() => setIsBreastfeeding(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className={`flex-1 py-3 px-4 rounded-md font-label text-sm font-bold transition-all border ${isBreastfeeding === false ? 'bg-[#E8A0A8] text-white border-[#E8A0A8]' : 'bg-[#FFFDF9] text-[#3D2C2C] border-[#E8A0A8]/20 hover:border-[#E8A0A8]'}`}
                      onClick={() => setIsBreastfeeding(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              {!result ? (
                <Button 
                  className="w-full bg-[#E8A0A8] hover:bg-[#D58A92] text-white" 
                  onClick={handleCalculate}
                  disabled={!weight || !weeks || isBreastfeeding === null}
                >
                  Calculate Rate
                </Button>
              ) : null}
            </Card>

            {result && (
              <Card className="space-y-6 bg-[#F9E4E8] border border-[#E8A0A8]/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2 text-center py-4">
                  <h3 className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Recommended Weekly Loss Rate</h3>
                  {result.maxRate === 0 ? (
                    <div className="text-3xl font-serif text-[#3D2C2C]">Maintenance Only</div>
                  ) : (
                    <div className="text-5xl font-serif text-[#3D2C2C]">
                      Max {system === "imperial" ? (result.maxRate * 2.20462).toFixed(2).replace(/\.00$/, "") : result.maxRate} <span className="text-2xl text-[#E8A0A8] ml-1">{system === "imperial" ? "lbs/week" : "kg/week"}</span>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white/60 rounded-lg text-[#3D2C2C]/80 text-sm leading-relaxed text-center">
                  {result.message}
                </div>
                
                <p className="text-xs text-[#3D2C2C]/50 italic text-center px-4">
                  Disclaimer: Always consult your doctor or midwife before starting any weight loss plan.
                </p>

                <div className="pt-4 flex justify-center">
                  <Button variant="tertiary" onClick={handleReset} className="text-[#3D2C2C] hover:text-[#E8A0A8]">
                    Calculate another
                  </Button>
                </div>
              </Card>
            )}
          </div>
          <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Understanding Safe Postpartum Weight Loss</h2>
            <p>
              The postpartum period, often referred to as the fourth trimester, is a time of immense physical and emotional adjustment. Your body has just undergone the monumental task of growing and birthing a human being. During this time, prioritizing healing and nourishment is far more important than rushing to return to a pre-pregnancy weight.
            </p>
            <p>
              If you are breastfeeding, your body requires significant additional energy to produce milk. A drastic caloric deficit can quickly compromise your milk supply and leave you feeling depleted. The hormone prolactin, which stimulates milk production, can also naturally make your body hold onto fat stores as an evolutionary protective mechanism to ensure your baby is fed.
            </p>
            <p>
              For mothers who are actively nursing, clinical guidelines suggest waiting until breastfeeding is well established (usually around the 8 to 12-week mark) before attempting intentional weight loss. Even then, a gentle reduction prioritizing nutrient-dense foods over restrictive dieting is paramount. A safe rate of loss is generally considered to be no more than 0.25 to 0.5 kilograms (about 0.5 to 1 pound) per week. Losing weight faster than this releases toxins stored in body fat into your bloodstream, which can then pass into your breastmilk.
            </p>
            <p>
              If you are not breastfeeding, your body still needs adequate fuel to recover from childbirth, particularly if you had a cesarean section or experienced complications. While a slightly faster rate of weight loss (up to 0.75 kilograms per week) may be safe after the initial six-week recovery period, drastic measures often backfire, leading to fatigue and muscle loss rather than sustainable fat loss. 
            </p>
            <p>
              Always remember that the numbers on the scale do not reflect your worth or your success as a mother. Sustainable changes, gentle movement, and prioritizing your mental health should always form the foundation of your postpartum wellness journey. Please consult with your registered dietitian, midwife, or doctor to create a plan that honors your unique physiological needs.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What is a safe rate of postpartum weight loss?</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              Clinical guidelines define safe postpartum weight loss as 0.25–0.5 kg (0.5–1 lb) per week for breastfeeding mothers, and up to 0.75 kg per week for non-breastfeeding mothers after the initial 6-week recovery period. Losing weight faster than this can deplete nutrient stores, reduce milk supply, and impair tissue healing. The postpartum body is recovering from a major physiological event regardless of delivery method. Weight loss should only be intentional after the 8–12 week mark for breastfeeding mothers and after 6 weeks for non-breastfeeding mothers.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">How the calculator works</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              The calculator takes your current weight, weeks postpartum, and breastfeeding status as inputs. It applies the safe rate thresholds above — adjusted for your specific stage — and returns a maximum recommended weekly loss rate.
            </p>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              It does not create a calorie deficit plan. For calorie guidance, see the{" "}
              <Link href="/breastfeeding-calories/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">Breastfeeding Calorie Calculator</Link>.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Safe weight loss rate by postpartum stage</h2>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-[#3D2C2C] min-w-[480px]">
                <thead>
                  <tr className="bg-[#E8A0A8]/20">
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Postpartum stage</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Breastfeeding</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Not breastfeeding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">0–6 weeks</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Not recommended</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Not recommended</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">6–12 weeks</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">0–0.25 kg/week (body still establishing supply)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">0–0.5 kg/week</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">12–26 weeks</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">0.25–0.5 kg/week</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">0.5–0.75 kg/week</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">6+ months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">0.25–0.5 kg/week</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Up to 0.75 kg/week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What affects how quickly you lose weight postpartum?</h2>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg">
              <li>
                <strong className="text-[#3D2C2C]">Breastfeeding status</strong> — Prolactin suppresses fat metabolism as an evolutionary mechanism to protect milk supply. Exclusively breastfeeding mothers often lose weight more slowly in the first 3 months, then see faster loss as the baby's intake increases.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Sleep deprivation</strong> — Chronic sleep loss elevates cortisol, which promotes fat retention and increases hunger hormones. This is unavoidable in early newborn care, which is one reason aggressive calorie restriction backfires postpartum.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Delivery method</strong> — C-section recovery requires more energy for tissue repair in the first 6–8 weeks, making aggressive weight loss counterproductive and potentially harmful to healing.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Pre-pregnancy weight and gestational gain</strong> — Mothers who gained within recommended ranges typically return to their baseline more predictably than those who gained significantly above guidelines.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Thyroid function</strong> — Postpartum thyroiditis affects up to 10% of mothers and can cause unexpected weight changes in either direction. Persistent difficulty losing weight despite reasonable effort warrants a thyroid check.
              </li>
            </ul>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">When to talk to your doctor about postpartum weight</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              Mention concerns to your doctor or midwife if you are losing more than 1 kg per week without trying, if your weight has not changed at all by 6 months postpartum despite reasonable effort, or if you are experiencing extreme fatigue, hair loss, or mood changes alongside unexpected weight shifts — these can indicate thyroid issues, anaemia, or nutritional deficiency. For broader guidance on eating well after birth, see our{" "}
              <Link href="/blog/postpartum-nutrition-guide/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">postpartum nutrition guide</Link>.
            </p>
          </section>

          <section className="max-w-3xl space-y-4 pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
            <div className="space-y-3">
              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  How much weight do you lose immediately after giving birth?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Most mothers lose 5–6 kg immediately after delivery — the baby's weight, placenta, and amniotic fluid. An additional 2–3 kg of fluid is typically lost in the first week through sweat and increased urination as the body sheds retained pregnancy water.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Is it normal not to lose weight while breastfeeding?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Yes. Prolactin, the hormone that drives milk production, can cause the body to retain fat stores as a protective mechanism. Some mothers find weight loss stalls or slows significantly during exclusive breastfeeding and then accelerates naturally after introducing solids or weaning.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Why am I gaining weight postpartum instead of losing?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Common causes include high cortisol from sleep deprivation, under-eating which slows metabolism, postpartum thyroiditis, and fluid retention. If unexplained weight gain persists beyond 3 months, discuss it with your doctor to rule out thyroid dysfunction.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Does breastfeeding help you lose weight?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  It can, but not immediately and not for everyone. Breastfeeding burns approximately 400–500 extra calories per day, but prolactin simultaneously promotes fat retention in many women. Most breastfeeding mothers see more noticeable weight loss after 3–6 months.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  What is the fastest safe way to lose weight after having a baby?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  There is no shortcut that is both fast and safe in the postpartum period. The most effective approach is a moderate calorie reduction of 250–500 kcal below your TDEE after the 12-week mark, combined with gradual return to exercise. Dropping below 1,500 kcal/day is not recommended while breastfeeding.
                </div>
              </details>
            </div>
          </section>

          <section className="max-w-3xl bg-[#F9E4E8] rounded-2xl p-6 space-y-3">
            <span className="font-label text-xs font-bold text-[#E8A0A8] uppercase tracking-widest">Free Printable Guide</span>
            <h3 className="text-2xl font-serif text-[#3D2C2C]">The Breastfeeding Weight Loss Truth</h3>
            <p className="text-[#3D2C2C]/80 leading-relaxed">
              Get the 4-page printable guide — the safe weight loss rate by stage, real breastfeeding calorie needs, and the signs you&apos;re eating enough, all in one place.
            </p>
            <div className="pt-2">
              <a
                href="/guides/breastfeeding-weight-loss-truth.pdf"
                download
                className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md"
              >
                Download Free PDF →
              </a>
            </div>
          </section>
        </div>


      </main>

      <section className="max-w-5xl mx-auto w-full px-6 py-12 border-t border-[#E8A0A8]/10">
        <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/safe-weight-loss-breastfeeding/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Is it Safe to Lose Weight While Breastfeeding?</p>
          </Link>
          <Link href="/blog/how-long-to-lose-baby-weight/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Recovery</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">How Long Does It Take to Lose the Baby Weight? (An Honest Answer)</p>
          </Link>
          <Link href="/blog/postpartum-nutrition-guide/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Postpartum Nutrition: What to Eat to Heal, Recover and Thrive</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
