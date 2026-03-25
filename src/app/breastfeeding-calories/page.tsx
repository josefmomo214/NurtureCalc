"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculateCalorieNeeds } from "@/utils/calculators";
import Link from "next/link";

import { useUnitSystem } from "@/context/UnitContext";
import UnitToggle from "@/components/UnitToggle";
import { useEffect } from "react";

export default function BreastfeedingCalories() {
  const { system } = useUnitSystem();
  const [prevSystem, setPrevSystem] = useState(system);

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [activity, setActivity] = useState("sedentary");
  const [feeds, setFeeds] = useState("4-6");
  const [result, setResult] = useState<{ base: number; bonus: number; total: number } | null>(null);

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
      
      if (system === "imperial" && height) {
        const cm = parseFloat(height);
        if (!isNaN(cm)) {
          const totalInches = cm / 2.54;
          const ft = Math.floor(totalInches / 12);
          const inc = Math.round(totalInches % 12);
          setHeightFt(ft.toString());
          setHeightIn(inc.toString());
        }
      } else if (system === "metric" && (heightFt || heightIn)) {
        const ft = parseFloat(heightFt || "0");
        const inc = parseFloat(heightIn || "0");
        if (!isNaN(ft) && !isNaN(inc)) {
          const cm = (ft * 30.48) + (inc * 2.54);
          setHeight(Math.round(cm).toString());
        }
      }
      
      setPrevSystem(system);
    }
  }, [system, prevSystem, weight, height, heightFt, heightIn]);

  const handleCalculate = () => {
    const a = parseInt(age);
    let w = parseFloat(weight);
    let h = 0;
    
    if (system === "imperial") {
      w = w / 2.20462;
      const ft = parseFloat(heightFt || "0");
      const inc = parseFloat(heightIn || "0");
      h = (ft * 30.48) + (inc * 2.54);
    } else {
      h = parseFloat(height);
    }

    if (!a || !w || !h) return;
    
    setResult(calculateCalorieNeeds(a, w, h, activity, feeds));
  };

  const handleReset = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setActivity("sedentary");
    setFeeds("4-6");
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
                "name": "How many extra calories do I need while breastfeeding?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most breastfeeding mothers need an extra 300 to 500 calories per day above their pre-pregnancy intake, depending on how frequently they are feeding." }
              },
              {
                "@type": "Question",
                "name": "Will eating more calories increase my milk supply?",
                "acceptedAnswer": { "@type": "Answer", "text": "Eating enough calories is essential to maintaining milk supply, but eating significantly more than your body needs will not increase production beyond your baby's demand." }
              },
              {
                "@type": "Question",
                "name": "What happens if I don't eat enough calories while breastfeeding?",
                "acceptedAnswer": { "@type": "Answer", "text": "Under-eating while breastfeeding can lead to fatigue, dizziness, mood swings and in some cases a reduction in milk supply. Always prioritise adequate nutrition during this period." }
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
              Breastfeeding Calorie Needs <span className="text-[#E8A0A8] italic">Estimator</span>
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              Breastfeeding burns extra calories every day. This tool estimates how many calories you need to support both your recovery and your milk supply.
            </p>
          </header>

          <div className="flex justify-end w-full md:max-w-4xl max-w-2xl border-t-0 p-0 text-right scale-100">
            <UnitToggle />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Card className="space-y-8 bg-white border border-[#E8A0A8]/10 shadow-[0_10px_40px_rgba(232,160,168,0.1)]">
              <div className="space-y-6">
                <Input label="Age (years)" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 30" />
                <Input label={system === "imperial" ? "Current Weight (lbs)" : "Current Weight (kg)"} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={system === "imperial" ? "e.g. 150" : "e.g. 68"} />
                
                {system === "metric" ? (
                  <Input label="Height (cm)" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 165" />
                ) : (
                  <div className="flex gap-4">
                    <Input label="Height (ft)" type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="e.g. 5" />
                    <Input label="Height (in)" type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="e.g. 5" />
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Activity Level</label>
                  <select 
                    className="w-full bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-sm px-4 py-3 text-[#3D2C2C] outline-none focus:border-[#E8A0A8] transition-all"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                  >
                    <option value="sedentary">Sedentary (Little/no exercise)</option>
                    <option value="light">Lightly active (1-3 days/week)</option>
                    <option value="moderate">Moderately active (3-5 days/week)</option>
                    <option value="active">Very active (6-7 days/week)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Number of Daily Breastfeeds</label>
                  <select 
                    className="w-full bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-sm px-4 py-3 text-[#3D2C2C] outline-none focus:border-[#E8A0A8] transition-all"
                    value={feeds}
                    onChange={(e) => setFeeds(e.target.value)}
                  >
                    <option value="1-3">1 - 3 feeds</option>
                    <option value="4-6">4 - 6 feeds</option>
                    <option value="7-9">7 - 9 feeds</option>
                    <option value="10+">10+ feeds</option>
                  </select>
                </div>
              </div>

              {!result && (
                <Button 
                  className="w-full bg-[#E8A0A8] hover:bg-[#D58A92] text-white" 
                  onClick={handleCalculate}
                  disabled={!age || !weight || (system === 'metric' ? !height : (!heightFt && !heightIn))}
                >
                  Calculate Needs
                </Button>
              )}
            </Card>

            <div className="flex flex-col gap-6">
              {result && (
                <Card className="flex-1 space-y-8 bg-[#F9E4E8] border border-[#E8A0A8]/20 animate-in zoom-in duration-500 flex flex-col justify-between">
                  <div>
                    <div className="space-y-2 text-center pb-6">
                      <h3 className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Total Daily Target</h3>
                      <div className="text-6xl font-serif text-[#3D2C2C]">
                        {result.total} <span className="text-xl text-[#E8A0A8] ml-1">kcal</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#E8A0A8]/20">
                      <div className="text-center space-y-1">
                        <p className="text-xs font-label uppercase text-[#3D2C2C]/60">Base Needs</p>
                        <p className="font-serif text-2xl text-[#3D2C2C]">{result.base}</p>
                      </div>
                      <div className="text-center space-y-1">
                        <p className="text-xs font-label uppercase text-[#E8A0A8]">Nursing Bonus</p>
                        <p className="font-serif text-2xl text-[#E8A0A8]">+{result.bonus}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-6 pt-4">
                    <p className="text-sm text-[#3D2C2C]/80 italic leading-relaxed">
                      You are doing an incredible job. Nourish your body with nutrient-dense foods to sustain your energy and milk supply.
                    </p>
                    <Button variant="tertiary" onClick={handleReset} className="text-[#3D2C2C] hover:text-[#E8A0A8]">
                      Calculate another
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
          <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">The Science of Breastfeeding Calorie Needs</h2>
            <p>
              Producing breastmilk is one of the most metabolically demanding processes the human body can undertake. It is estimated that exclusively breastfeeding a baby requires up to 25% of a mother's total energy expenditure. Understanding exactly how many calories you need daily helps ensure that your body can sustain a healthy milk supply without drawing from your own vital nutrient reserves.
            </p>
            <p>
              Our calculator determines your foundational needs using the Mifflin-St Jeor equation. This globally recognized clinical formula accurately estimates your Basal Metabolic Rate (BMR)—the energy your body requires simply to exist at rest. We then multiply this figure by your current daily activity level (often lower in the early postpartum weeks) to find your Total Daily Energy Expenditure (TDEE).
            </p>
            <p>
              Because nursing requires significant energetic output, the World Health Organization and pediatric dietitians recommend adding a substantial "nursing bonus" to your baseline TDEE. For mothers feeding a newborn exclusively (often 8 to 12 times in a 24-hour period), this bonus can easily reach 500 to 600 calories per day. As your baby grows and begins incorporating solid foods, the frequency of nursing sessions naturally decreases, slowly reducing this daily caloric premium.
            </p>
            <p>
              However, it is crucial to understand that not all calories are created equal. The composition of your breastmilk—particularly its micronutrient and fatty acid profile—is heavily influenced by your dietary intake. Prioritizing foods rich in healthy fats, complex carbohydrates, iron, calcium, and vitamin D is essential. Omega-3 fatty acids, found in fatty fish, walnuts, and flaxseeds, are particularly important for your baby's neurological development.
            </p>
            <p>
              Listen closely to your body's hunger and thirst cues. Breastfeeding triggers the release of oxytocin, which can stimulate intense thirst. Keep a large bottle of water nearby during feeds, and focus on nourishing snacks like nuts, yogurt, or oatmeal rather than empty sugars. If you notice a sudden drop in milk supply, extreme fatigue, or unintended weight loss, please consult a lactation consultant (IBCLC) or your healthcare provider to review your nutritional intake.
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
