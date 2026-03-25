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

export default function SafeWeightLoss() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much weight can I safely lose per week while breastfeeding?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most healthcare providers recommend no more than 0.5kg (1lb) per week while breastfeeding, to protect your milk supply and energy levels." }
              },
              {
                "@type": "Question",
                "name": "When can I start trying to lose weight after having a baby?",
                "acceptedAnswer": { "@type": "Answer", "text": "Medical guidelines recommend waiting at least 6 to 8 weeks postpartum before consciously restricting calories, to allow time to heal and establish milk supply." }
              },
              {
                "@type": "Question",
                "name": "Does breastfeeding help you lose weight?",
                "acceptedAnswer": { "@type": "Answer", "text": "Breastfeeding burns an extra 300 to 500 calories per day, which can support gradual weight loss. However, increased appetite during lactation means results vary between mothers." }
              }
            ]
          })
        }}
      />
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
        </div>

        {/* Global Desktop Ad Sidebar */}
        <aside className="hidden md:block w-72 shrink-0">
          <div className="ad-sidebar sticky top-32 w-full h-[600px] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-label text-sm">
            Ad Placeholder
          </div>
        </aside>

      </main>

      {/* Global Mobile Ad */}
      <div className="md:hidden px-6 py-8">
        <div className="ad-sidebar w-full h-48 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-label text-sm">
          Ad Placeholder
        </div>
      </div>

      <Footer />
    </div>
  );
}
