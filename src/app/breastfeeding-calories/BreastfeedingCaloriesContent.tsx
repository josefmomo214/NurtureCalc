"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculateTDEE } from "@/utils/calculators";
import Link from "next/link";

import { useUnitSystem } from "@/context/UnitContext";
import UnitToggle from "@/components/UnitToggle";
import { useEffect } from "react";

export default function BreastfeedingCaloriesContent() {
  const { system } = useUnitSystem();
  const [prevSystem, setPrevSystem] = useState(system);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [breastfeedingStatus, setBreastfeedingStatus] = useState("exclusive");
  const [result, setResult] = useState<number | null>(null);

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
      if (height) {
        const num = parseFloat(height);
        if (!isNaN(num)) {
          setHeight(system === "imperial" 
            ? (num / 2.54).toFixed(2).replace(/\.00$/, "") 
            : (num * 2.54).toFixed(2).replace(/\.00$/, ""));
        }
      }
      setPrevSystem(system);
    }
  }, [system, prevSystem, weight, height]);

  const handleCalculate = () => {
    let w = parseFloat(weight);
    let h = parseFloat(height);
    const a = parseInt(age);
    const act = parseFloat(activity);

    if (system === "imperial") {
      w = w / 2.20462;
      h = h * 2.54;
    }

    if (isNaN(w) || isNaN(h) || isNaN(a)) return;

    const tdee = calculateTDEE(w, h, a, act, breastfeedingStatus);
    setResult(Math.round(tdee));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
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
              Breastfeeding Calorie <span className="text-[#E8A0A8] italic">Calculator</span>
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              Producing milk is hard work. This calculator uses the Mifflin-St Jeor equation plus a nursing bonus to estimate how many calories you need each day.
            </p>
          </header>

          <div className="flex justify-end w-full max-w-4xl">
            <UnitToggle />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Card className="space-y-8 bg-white border border-[#E8A0A8]/10 shadow-[0_10px_40px_rgba(232,160,168,0.1)]">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 28" />
                  <Input label={system === "imperial" ? "Weight (lbs)" : "Weight (kg)"} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={system === "imperial" ? "154" : "70"} />
                </div>
                
                <Input label={system === "imperial" ? "Height (inches)" : "Height (cm)"} type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={system === "imperial" ? "65" : "165"} />

                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Activity Level</label>
                  <select 
                    className="w-full bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-md py-3 px-4 font-label text-sm text-[#3D2C2C] focus:outline-none focus:border-[#E8A0A8] transition-colors"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                  >
                    <option value="1.2">Sedentary (Little/no exercise)</option>
                    <option value="1.375">Light (1-3 days/week)</option>
                    <option value="1.55">Moderate (3-5 days/week)</option>
                    <option value="1.725">Active (6-7 days/week)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Nursing Status</label>
                  <select 
                    className="w-full bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-md py-3 px-4 font-label text-sm text-[#3D2C2C] focus:outline-none focus:border-[#E8A0A8] transition-colors"
                    value={breastfeedingStatus}
                    onChange={(e) => setBreastfeedingStatus(e.target.value)}
                  >
                    <option value="none">Not currently breastfeeding</option>
                    <option value="partial">Partial (Mixed feeding)</option>
                    <option value="exclusive">Exclusive (0-6 months)</option>
                  </select>
                </div>
              </div>

              {!result && (
                <Button 
                  className="w-full bg-[#E8A0A8] hover:bg-[#D58A92] text-white" 
                  onClick={handleCalculate}
                  disabled={!weight || !height || !age}
                >
                  Calculate Daily Calories
                </Button>
              )}
            </Card>

            <div className="flex flex-col gap-6">
              {result && (
                <Card className="flex-1 space-y-8 bg-[#F9E4E8] border border-[#E8A0A8]/20 animate-in slide-in-from-right-4 duration-500 shadow-xl flex flex-col justify-center">
                  <div className="space-y-4 text-center">
                    <span className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Your Estimated Daily Needs</span>
                    <div className="text-7xl font-serif text-[#3D2C2C] leading-none">
                      {result}<span className="text-2xl ml-1 text-[#E8A0A8]">kcal</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white/60 rounded-xl space-y-4">
                    <p className="text-sm italic leading-relaxed text-[#3D2C2C]/80 text-center">
                      To maintain your current weight while {breastfeedingStatus === 'exclusive' ? 'exclusively nursing' : breastfeedingStatus === 'partial' ? 'partially nursing' : 'not nursing'}, aim for this daily target.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <Button variant="tertiary" onClick={handleReset} className="text-[#3D2C2C] hover:text-[#E8A0A8]">
                      Calculate another
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
          <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">How Breastfeeding Affects Your Calorie Needs</h2>
            <p>
              Producing human milk is one of the most energetically expensive things a body can do. It’s often compared to running a daily marathon. On average, a woman exclusively breastfeeding a newborn requires an additional 500 calories per day on top of her baseline needs. 
            </p>
            <p>
              Our calculator first determines your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation—a clinically recognized standard—and then adjusts for your activity level to find your Total Daily Energy Expenditure (TDEE). If you are nursing, we add a specific "nursing bonus" (500 kcal for exclusive, 300 kcal for partial) to ensure you aren't under-fueling during this critical time.
            </p>
            <p>
              Remember that these numbers are estimates. Factors like sleep quality, stress levels, and individual metabolic efficiency all play a role in how many calories your body actually processes. Listen to your hunger cues; they are your body's primary way of signaling a need for more fuel to sustain both you and your baby. Always discuss your nutritional needs with your doctor or a registered dietitian.
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
