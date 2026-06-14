"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculatePelvicFloor } from "@/utils/calculators";
import Link from "next/link";

const questions = [
  {
    title: "How many weeks postpartum are you?",
    options: [
      { text: "Under 6 weeks", score: 1 },
      { text: "6 - 12 weeks", score: 2 },
      { text: "12 - 24 weeks", score: 3 },
      { text: "Over 24 weeks", score: 4 },
    ]
  },
  {
    title: "Do you leak urine when you sneeze, cough or exercise?",
    options: [
      { text: "Always", score: 1 },
      { text: "Often", score: 2 },
      { text: "Occasionally", score: 3 },
      { text: "Never", score: 4 },
    ]
  },
  {
    title: "Can you feel your pelvic floor when you try to squeeze it?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "Barely", score: 2 },
      { text: "Somewhat", score: 3 },
      { text: "Yes clearly", score: 4 },
    ]
  },
  {
    title: "Do you feel pressure or heaviness in your pelvis?",
    options: [
      { text: "Always", score: 1 },
      { text: "Often", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Never", score: 4 },
    ]
  }
];

export default function PelvicFloorRecoveryContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<{ stage: string; message: string } | null>(null);

  const handleSelectOption = (index: number) => {
    setSelectedOptionIndex(index);
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;

    const score = questions[currentStep].options[selectedOptionIndex].score;
    const newScores = [...scores, score];
    setScores(newScores);
    setSelectedOptionIndex(null);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const totalScore = newScores.reduce((a, b) => a + b, 0);
      setResult(calculatePelvicFloor(totalScore));
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOptionIndex(null);
    setScores([]);
    setResult(null);
  };

  const progressPercentage = ((currentStep) / questions.length) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full py-12 px-6">
        <div className="space-y-12">
          <nav>
            <Link href="/#calculators" className="font-label text-xs font-bold text-[#E8A0A8] flex items-center gap-2 hover:underline">
              ← BACK TO CALCULATORS
            </Link>
          </nav>

          <header className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
              Pelvic Floor Recovery <span className="text-[#E8A0A8] italic">Estimator</span>
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              Your pelvic floor supports your bladder, bowel and uterus. After birth it needs time and gentle exercise to recover. This quiz estimates your current recovery stage.
            </p>
          </header>

          <div className="max-w-3xl">
            <Card className="bg-white border border-[#E8A0A8]/10 shadow-[0_10px_40px_rgba(232,160,168,0.1)] min-h-[400px] flex flex-col">
              {!result ? (
                <div className="flex-1 flex flex-col space-y-8 animate-in fade-in duration-300 px-6 py-8">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between font-label text-xs font-bold text-[#3D2C2C]/50 uppercase tracking-widest">
                      <span>Question {currentStep + 1} of {questions.length}</span>
                    </div>
                    <div className="w-full h-1 bg-[#F9E4E8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#E8A0A8] transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="flex-1 space-y-8">
                    <h3 className="text-2xl font-serif text-[#3D2C2C] leading-tight">
                      {questions[currentStep].title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {questions[currentStep].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          className={`text-left p-6 rounded-xl border transition-all group ${
                            selectedOptionIndex === idx
                              ? 'bg-[#E8A0A8]/10 border-[#E8A0A8]'
                              : 'bg-[#FFFDF9] border-[#E8A0A8]/20 hover:bg-[#F9E4E8] hover:border-[#E8A0A8]'
                          }`}
                        >
                          <span className={`font-label text-sm font-bold transition-colors ${
                            selectedOptionIndex === idx ? 'text-[#E8A0A8]' : 'text-[#3D2C2C] group-hover:text-[#E8A0A8]'
                          }`}>
                            {option.text}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button
                        onClick={handleNext}
                        disabled={selectedOptionIndex === null}
                        className="bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-8"
                      >
                        {currentStep === questions.length - 1 ? 'See Results' : 'Next Question'}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center space-y-8 animate-in zoom-in slide-in-from-bottom-4 duration-500 py-12 px-6">
                  <div className="space-y-4 text-center">
                    <span className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Recovery Stage</span>
                    <h3 className="text-5xl font-serif text-[#3D2C2C] leading-tight">{result.stage}</h3>
                  </div>

                  <div className="max-w-lg mx-auto p-6 bg-[#F9E4E8]/50 rounded-xl space-y-4">
                    <p className="text-lg text-[#3D2C2C]/80 italic leading-relaxed text-center">
                      &ldquo;{result.message}&rdquo;
                    </p>
                  </div>

                  <div className="pt-8 flex justify-center">
                    <Button variant="tertiary" onClick={handleReset} className="text-[#3D2C2C] hover:text-[#E8A0A8]">
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Section 1 */}
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What is the pelvic floor and why does birth affect it?</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              The pelvic floor is a layered group of muscles, ligaments, and connective tissues spanning from the pubic bone to the tailbone. It supports the bladder, bowel, and uterus; maintains continence; and works in coordination with the diaphragm and deep abdominal muscles to stabilise the spine. During pregnancy, these structures bear the increasing weight of the growing baby for months. During a vaginal delivery, they stretch to several times their resting length — and sometimes tear or are cut (episiotomy). Even a C-section affects the pelvic floor indirectly, as the structures support a heavy uterus throughout pregnancy regardless of how birth occurs.
            </p>
          </section>

          {/* Section 2 */}
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">How long does pelvic floor recovery take?</h2>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-[#3D2C2C] min-w-[520px]">
                <thead>
                  <tr className="bg-[#E8A0A8]/20">
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Recovery stage</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Vaginal birth</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">C-section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Initial healing (tissue repair)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Weeks 1–6</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Weeks 1–6</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Early rehabilitation (reconnection)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Weeks 2–8</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Weeks 3–8</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Functional strength returns</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">3–6 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">3–6 months</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Full load tolerance (running, HIIT)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">6–12 months</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">6–12 months</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Resolution of symptoms (if any)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Highly variable</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Highly variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#3D2C2C]/60 leading-relaxed">
              These are general estimates. Recovery depends heavily on birth complications, tear severity, individual tissue quality, and whether rehabilitation is guided by a pelvic floor physiotherapist.
            </p>
          </section>

          {/* Section 3 */}
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Common signs of pelvic floor dysfunction after birth</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              Pelvic floor dysfunction is extremely common postpartum — estimates suggest up to 50% of mothers experience some form of it. Many symptoms are normalised as &ldquo;just part of having a baby.&rdquo; They are not. They are treatable.
            </p>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg list-none">
              <li>
                <strong className="text-[#3D2C2C]">Stress urinary incontinence</strong> — Leaking urine when you cough, sneeze, laugh, or exercise is the most common symptom. It indicates the pelvic floor cannot generate enough pressure quickly enough to counter the sudden increase in abdominal load.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Urgency incontinence</strong> — A sudden, overwhelming urge to urinate that is difficult to defer, sometimes resulting in leakage before reaching the toilet. This is a coordination issue between the bladder and pelvic floor muscles.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Pelvic organ prolapse</strong> — A feeling of heaviness, pressure, or &ldquo;something coming down&rdquo; in the vaginal area. This occurs when the pelvic floor structures no longer adequately support one or more pelvic organs.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Painful intercourse (dyspareunia)</strong> — Pain during or after sex postpartum can stem from scar tissue, dryness caused by low oestrogen while breastfeeding, or pelvic floor muscles that are too tight rather than too weak.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Pelvic girdle pain</strong> — Persistent pain in the hips, sacrum, or pubic symphysis that was not present before pregnancy. This is often related to pelvic floor imbalance and ligament laxity from relaxin.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Difficulty emptying the bladder or bowel</strong> — Feeling like you cannot fully empty despite effort can indicate hypertonic (overly tight) pelvic floor muscles, which is as problematic as weakness but often overlooked.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">The difference between a weak and a tight pelvic floor</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              Most postpartum advice focuses on strengthening the pelvic floor through Kegel exercises. This is appropriate for hypotonic (weak or underactive) muscles — but it is actively counterproductive for hypertonic (tight or overactive) muscles. A tight pelvic floor cannot relax properly, which causes its own set of problems including pelvic pain, painful intercourse, urgency, and difficulty emptying the bladder or bowel.
            </p>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              You cannot accurately assess whether your pelvic floor is weak or tight without an internal examination by a qualified pelvic floor physiotherapist. Symptoms like leaking can appear in both presentations — doing Kegels on a hypertonic pelvic floor will make symptoms worse, not better. This is why a professional assessment is the single most valuable investment you can make in your postpartum recovery. If you are unsure where to start, your{" "}
              <Link href="/exercise-timeline/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">return-to-exercise timeline</Link>{" "}
              can help you understand what activity levels are appropriate at each stage.
            </p>
          </section>

          {/* Section 5 */}
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">What actually helps pelvic floor recovery</h2>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg list-none">
              <li>
                <strong className="text-[#3D2C2C]">Diaphragmatic breathing.</strong> The diaphragm and pelvic floor move together as a unit. Learning to breathe fully into the lower ribcage, allowing the pelvic floor to gently lengthen on the inhale and recoil on the exhale, is the starting point for all pelvic floor rehabilitation — before any Kegel exercise.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Pelvic floor physiotherapy.</strong> A specialist can perform an internal assessment, identify whether muscles are weak, tight, uncoordinated, or damaged, and build a bespoke programme. This is available on the NHS in the UK and through most healthcare systems. Do not wait until symptoms become severe to seek it.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Load management.</strong> Avoid activities that provoke symptoms — leaking, heaviness, or pain — and build up gradually. High-impact activities like running should wait until the pelvic floor can manage lower-impact load without symptoms. For a full breakdown, read our{" "}
                <Link href="/blog/postpartum-pelvic-floor-dysfunction/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">postpartum pelvic floor dysfunction guide</Link>.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Avoiding constipation.</strong> Straining at the bowel dramatically increases downward pressure on the pelvic floor. Prioritise hydration, fibre intake, and do not ignore the urge to go — straining after birth can worsen prolapse and perineal tears.
              </li>
            </ul>
          </section>

          {/* Section 6 - FAQ accordion */}
          <section className="max-w-3xl space-y-4 pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
            <div className="space-y-3">
              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  How do I know if my pelvic floor is recovering well?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Signs of good recovery include no leaking during daily activities, no heaviness or pressure in the pelvic area, comfortable return to intercourse when ready, and no pain during normal movement. If you are unsure, a pelvic floor physiotherapist can give you a clear baseline assessment.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Is it normal to leak urine after having a baby?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Leaking is common but it is not normal in the sense of being something you must accept permanently. Stress urinary incontinence affects a large proportion of postpartum women but responds well to targeted rehabilitation. If leaking persists beyond 3 months postpartum, seek assessment from a pelvic floor physiotherapist rather than waiting for it to resolve on its own.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  When should I start Kegel exercises after birth?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Gentle pelvic floor activation can begin within the first few days after a vaginal birth, once acute pain has settled. After a C-section, most physiotherapists recommend starting around week 2–3. The key is to start gently, focusing on the sensation of releasing and relaxing the muscles as much as contracting them.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Can pelvic floor problems resolve on their own without treatment?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Mild symptoms often improve significantly in the first 3–6 months as swelling resolves and nerve function returns. However, moderate to severe symptoms — prolapse, significant incontinence, or persistent pain — rarely resolve completely without guided rehabilitation. Early intervention produces better long-term outcomes than waiting.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  What is a pelvic floor physiotherapist and do I need one?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  A pelvic floor physiotherapist is a specialist trained in the assessment and treatment of pelvic floor dysfunction. They perform internal examinations to assess muscle function accurately. Most postpartum women benefit from at least one assessment, even without obvious symptoms, to establish a clear rehabilitation baseline and prevent long-term problems.
                </div>
              </details>
            </div>
          </section>
        </div>
      </main>

      <section className="max-w-5xl mx-auto w-full px-6 py-12 border-t border-[#E8A0A8]/10">
        <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/postpartum-pelvic-floor-dysfunction/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Recovery</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Signs of Postpartum Pelvic Floor Dysfunction</p>
          </Link>
          <Link href="/blog/pelvic-floor-after-birth/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Recovery</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">What is the Pelvic Floor and Why Does it Matter After Birth?</p>
          </Link>
          <Link href="/blog/c-section-recovery-timeline/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Recovery</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">C-Section Recovery: What to Expect Week by Week</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
