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
          <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Making Sense of Baby Weight Percentiles</h2>
            <p>
              Navigating your baby's growth and development can be both exciting and anxiety-inducing for new parents. One of the most common metrics used by pediatricians worldwide to track infant health is the weight percentile. However, without proper context, a percentile number can easily cause unnecessary worry or confusion.
            </p>
            <p>
              A weight percentile simply indicates how your baby's weight compares to a large, standardized population of healthy babies of the exact same age and sex. For example, if your daughter is in the 65th percentile for weight, it means she weighs more than 65% of healthy girls her age, and less than the remaining 35%. Our calculator utilizes the internationally recognized World Health Organization (WHO) growth standards, which are considered the gold standard for tracking infant growth, especially for breastfed babies.
            </p>
            <p>
              It is a widespread misconception that the 50th percentile is the "goal" or the "perfect" weight. In reality, healthy, thriving infants come in a wide variety of shapes and sizes. A baby whose weight hovers naturally around the 15th percentile can be just as healthy and well-nourished as a baby consistently tracking along the 85th percentile. Genetics, feeding methods, and overall metabolic differences all play significant roles in determining an infant's natural size.
            </p>
            <p>
              What healthcare providers look for is not specific high numbers, but rather consistency over time. They want to see your baby roughly following their own personal growth curve. If a baby has always been in the 20th percentile and continues to track there steadily, that pattern is entirely reassuring. Conversely, a sudden, significant drop across multiple major percentile lines (for example, falling from the 75th down to the 25th percentile) is what might prompt a pediatrician to investigate feeding efficiency, illness, or other potential underlying issues.
            </p>
            <p>
              Remember that weight is just one small piece of the puzzle. A healthy baby is also achieving developmental milestones, producing plenty of wet and dirty diapers, and showing signs of alertness and contentment. Never use a single percentile reading in isolation to make changes to your baby's feeding routine. Always discuss growth charts and any concerns you may have with your pediatrician or family doctor, who can interpret these numbers within the broader, holistic context of your child's overall health and vitality.
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
      <div className="md:hidden px-6 py-8 border-t border-[#E8A0A8]/10">
        <div className="ad-sidebar w-full h-48 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-label text-sm">
          Ad Placeholder
        </div>
      </div>

      <Footer />
    </div>
  );
}
