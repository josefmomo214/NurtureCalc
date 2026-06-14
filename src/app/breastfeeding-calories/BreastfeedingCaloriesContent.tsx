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
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">How many extra calories does breastfeeding burn?</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              Exclusive breastfeeding burns approximately 400&ndash;500 extra calories per day above your baseline metabolic needs &mdash; roughly equivalent to an hour of moderate exercise, every single day. This figure comes from the energy cost of producing roughly 750&ndash;800ml of breast milk, which requires about 70 calories per 100ml produced. The calculator uses the Mifflin-St Jeor equation to find your Basal Metabolic Rate, adjusts for your activity level to get your Total Daily Energy Expenditure (TDEE), then adds the appropriate nursing bonus on top. Partial or mixed feeding adds approximately 300 extra calories per day, since you are producing less total milk volume.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">How the calculator works</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              The calculator takes your age, weight, height, activity level, and nursing status as inputs. It applies the Mifflin-St Jeor formula to calculate your BMR, multiplies by your activity factor to get TDEE, and adds 500 kcal for exclusive breastfeeding or 300 kcal for partial breastfeeding.
            </p>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              The result is your estimated total daily calorie need &mdash; not a weight loss target. To understand safe weight loss alongside breastfeeding, see the{" "}
              <Link href="/safe-weight-loss/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">Safe Postpartum Weight Loss Calculator</Link>.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Breastfeeding calorie needs by nursing stage</h2>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-[#3D2C2C] min-w-[480px]">
                <thead>
                  <tr className="bg-[#E8A0A8]/20">
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Nursing stage</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Extra calories needed</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Exclusive (0&ndash;6 months)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">+500 kcal/day</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Highest demand period</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Exclusive (6&ndash;12 months)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">+400&ndash;500 kcal/day</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Baby begins solids, milk volume may decrease</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Partial / mixed feeding</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">+300 kcal/day</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Estimate &mdash; varies by ratio of breast to formula</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Pumping only</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">+400&ndash;500 kcal/day</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Similar to direct nursing if output is equivalent</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Weaning (reducing feeds)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">+100&ndash;200 kcal/day</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Taper gradually as feeds reduce</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What happens if you don&apos;t eat enough while breastfeeding?</h2>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg">
              <li>
                <strong className="text-[#3D2C2C]">Milk supply drops</strong> &mdash; Your body treats milk production as optional when calorie intake falls too low. Dropping below approximately 1,500 kcal/day is the threshold most commonly associated with supply reduction.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Extreme fatigue</strong> &mdash; Breastfeeding already draws on your energy reserves. A calorie deficit compounds postpartum fatigue significantly and impairs cognitive function, making newborn care harder.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Nutrient depletion</strong> &mdash; Your body will prioritise the nutritional content of your milk over your own stores. Calcium, iodine, and vitamin D are particularly vulnerable &mdash; your bones and thyroid pay the cost of under-eating.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Slower postpartum recovery</strong> &mdash; Tissue repair after birth requires protein and micronutrients. Restricting calories too early diverts resources away from healing and toward basic metabolic survival.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Mood and mental health impact</strong> &mdash; Calorie restriction affects serotonin and dopamine regulation. Combined with postpartum hormonal shifts and sleep deprivation, under-eating increases the risk of postpartum anxiety and depression.
              </li>
            </ul>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Practical tips for hitting your calorie target</h2>
            <ol className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg list-decimal list-outside pl-5">
              <li>
                <strong className="text-[#3D2C2C]">Eat to hunger, not to a number.</strong> Postpartum hunger cues are your body&apos;s most accurate signal. Use the calculator result as a reference floor, not a ceiling to avoid.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Prioritise calorie density over volume.</strong> Full-fat dairy, nuts, avocado, eggs, and oily fish deliver significant calories in small amounts &mdash; practical when you&apos;re eating one-handed.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Hydrate first.</strong> Dehydration is frequently mistaken for hunger postpartum. Drink a large glass of water at every feed, then eat if you are still hungry.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Do not skip meals to compensate for snacks.</strong> Irregular eating patterns destabilise blood sugar, which worsens fatigue and mood swings &mdash; two things that are already difficult postpartum.
              </li>
            </ol>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              For broader guidance on eating well after birth, see our{" "}
              <Link href="/blog/postpartum-nutrition-guide/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">postpartum nutrition guide</Link>.
            </p>
          </section>

          <section className="max-w-3xl space-y-4 pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
            <div className="space-y-3">
              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  How many calories should I eat per day while breastfeeding?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Most breastfeeding mothers need 2,200&ndash;2,500 calories per day, depending on their size and activity level. Exclusively breastfeeding adds roughly 500 calories above your pre-pregnancy maintenance needs. Use the calculator above for a figure personalised to your body.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Can I diet while breastfeeding?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  A moderate calorie reduction is possible after breastfeeding is well established, usually around 8&ndash;12 weeks postpartum. Most guidelines recommend not going below 1,500 kcal per day while breastfeeding. Aggressive dieting before this point risks reducing milk supply and slowing recovery.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Does eating more actually increase milk supply?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Eating enough protects your supply &mdash; it does not increase it beyond your baby&apos;s demand. Milk supply is driven primarily by how frequently the breast is emptied. Under-eating can reduce supply, but eating above your needs will not produce more milk than your baby requires.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Do I need to eat differently when pumping compared to direct nursing?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Calorie needs are similar whether you nurse directly or pump, provided your total milk output is equivalent. The key variable is your total daily milk production volume, not the method of delivery.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  When do breastfeeding calorie needs decrease?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Calorie needs begin to reduce gradually as your baby introduces solid foods around 6 months and draws less milk from you. By 12 months, if you are nursing less frequently, your extra calorie requirement may be closer to 200&ndash;300 kcal above baseline rather than 500.
                </div>
              </details>
            </div>
          </section>
        </div>


      </main>

      <section className="max-w-5xl mx-auto w-full px-6 py-12 border-t border-[#E8A0A8]/10">
        <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/breastfeeding-calorie-needs/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">How Many Extra Calories Do You Need When Breastfeeding?</p>
          </Link>
          <Link href="/blog/breastfeeding-postpartum/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Breastfeeding Postpartum: What to Expect, What&apos;s Normal, and How to Protect Your Body</p>
          </Link>
          <Link href="/blog/how-to-increase-milk-supply/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Nutrition</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">How to Increase Milk Supply: What Actually Works (and What Doesn&apos;t)</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
