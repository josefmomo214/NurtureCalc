"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculateExerciseTimeline } from "@/utils/calculators";
import Link from "next/link";

const questions = [
  {
    title: "How was your baby delivered?",
    options: [
      { text: "Vaginal Delivery", score: "vaginal" },
      { text: "C-Section Delivery", score: "csection" },
    ]
  },
  {
    title: "How many weeks postpartum are you?",
    options: [
      { text: "0 - 2 weeks", score: "early" },
      { text: "2 - 6 weeks", score: "healing" },
      { text: "6 - 12 weeks", score: "rebuilding" },
      { text: "Over 12 weeks", score: "progressing" },
    ]
  },
  {
    title: "Are you currently experiencing any pelvic heaviness or leaking?",
    options: [
      { text: "Yes, frequently", score: "symptoms" },
      { text: "Occasionally", score: "mild" },
      { text: "No, not at all", score: "none" },
    ]
  }
];

export default function ExerciseTimelineContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<{ stage: string; activities: string[]; message: string } | null>(null);

  const handleSelectOption = (score: string) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Mapping: 0=deliveryType, 1=weeks(text), 2=symptoms(text)
      const weeksText = newAnswers[1];
      let weeksNum = 0;
      if (weeksText === 'early') weeksNum = 1;
      if (weeksText === 'healing') weeksNum = 4;
      if (weeksText === 'rebuilding') weeksNum = 9;
      if (weeksText === 'progressing') weeksNum = 13;

      const resultData = calculateExerciseTimeline(newAnswers[0], weeksNum, newAnswers[2] === 'symptoms');
      setResult({
        stage: resultData.label,
        activities: [resultData.suggestion],
        message: resultData.suggestion
      });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const progressPercentage = ((currentStep) / questions.length) * 100;

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
              Postpartum Exercise <span className="text-[#E8A0A8] italic">Timeline</span>
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              When is it safe to start running or lifting again? This tool provides a science-based timeline based on your delivery method and recovery symptoms.
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
                      <span>{Math.round(progressPercentage)}%</span>
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
                          onClick={() => handleSelectOption(option.score)}
                          className="text-left p-6 rounded-xl border border-[#E8A0A8]/20 bg-[#FFFDF9] hover:bg-[#F9E4E8] hover:border-[#E8A0A8] transition-all group"
                        >
                          <span className="font-label text-sm font-bold text-[#3D2C2C] group-hover:text-[#E8A0A8] transition-colors">
                            {option.text}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center space-y-8 animate-in zoom-in slide-in-from-bottom-4 duration-500 py-12 px-6">
                  <div className="space-y-4 text-center">
                    <span className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Recommended Stage</span>
                    <h3 className="text-5xl font-serif text-[#3D2C2C] leading-tight">{result.stage}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
                    <div className="p-6 bg-[#F9E4E8]/50 rounded-xl space-y-4">
                      <h4 className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Safe Activities</h4>
                      <ul className="space-y-2">
                        {result.activities.map((act, i) => (
                          <li key={i} className="text-sm text-[#3D2C2C]/80 font-medium flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#E8A0A8] rounded-full" /> {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-white border border-[#E8A0A8]/20 rounded-xl space-y-4">
                      <h4 className="font-label text-xs font-black tracking-widest text-[#3D2C2C]/30 uppercase">Guidance</h4>
                      <p className="text-sm text-[#3D2C2C]/70 italic leading-relaxed">
                        {result.message}
                      </p>
                    </div>
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
          <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Building a Safe Foundation</h2>
            <p>
              Returning to activity after birth is not about "getting your body back"—it is about rehabilitating your body after a major physiological event. Whether you had a vaginal birth or a C-section (which is major abdominal surgery), your core and pelvic floor architecture have undergone significant changes.
            </p>
            <p>
              The first 12 weeks postpartum, often called the fourth trimester, should focus on restorative movement rather than high-intensity training. This includes diaphragmatic breathing to reconnect with your deep core and gentle walking to rebuild cardiovascular stamina without overloading your pelvic floor.
            </p>
            <p>
              High-impact activities like running or heavy lifting should generally be avoided until at least 12 weeks postpartum, and only when you are free of symptoms like leaking, pelvic heaviness, or pain. Remember that every woman's recovery timeline is unique. Always listen to your body and consult with a pelvic floor physical therapist for a personalized assessment.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Why your postpartum exercise timeline is not one-size-fits-all</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              The standard "six-week clearance" is one of the most misunderstood pieces of postpartum advice. It refers to the point at which most women are free from acute surgical or obstetric complications — not the point at which the body is ready for high-impact exercise. The pelvic floor, abdominal wall, and connective tissue (particularly the linea alba) undergo significant structural changes during pregnancy and delivery that take 3–6 months to stabilise, regardless of how well you feel. C-section recovery adds an additional layer: the abdominal fascia — which is cut during surgery — takes up to 12 months to regain full tensile strength.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Postpartum exercise timeline by delivery type</h2>
            <div className="overflow-x-auto rounded-2xl">
              <table className="w-full text-sm text-[#3D2C2C] min-w-[520px]">
                <thead>
                  <tr className="bg-[#E8A0A8]/20">
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Activity</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">Vaginal birth</th>
                    <th className="text-left px-5 py-3 font-label text-xs font-bold uppercase tracking-wider">C-section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Gentle walking</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Days 1–7 (as tolerated)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Days 3–7 (short, flat routes)</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Diaphragmatic breathing &amp; pelvic floor reconnection</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 1</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 1–2</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Light stretching &amp; mobility</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 2–4</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 4–6</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Low-impact exercise (swimming, cycling)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 6+ (symptom-free)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 8–10+ (wound healed)</td>
                  </tr>
                  <tr className="bg-[#FFFDF9]">
                    <td className="px-5 py-3 font-medium">Running and jumping</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 12+ (pelvic floor assessed)</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 12–16+</td>
                  </tr>
                  <tr className="bg-[#F9E4E8]/50">
                    <td className="px-5 py-3 font-medium">Heavy lifting / HIIT</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 12–16+</td>
                    <td className="px-5 py-3 text-[#3D2C2C]/70">Week 16+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Warning signs to stop exercising immediately</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              These symptoms mean you are doing too much too soon. Stop the activity and consult your midwife, GP, or pelvic floor physiotherapist before continuing.
            </p>
            <ul className="space-y-5 text-[#3D2C2C]/80 leading-relaxed text-lg">
              <li>
                <strong className="text-[#3D2C2C]">Leaking urine or bowel</strong> — Any involuntary leakage during or after exercise is a sign the pelvic floor is under more load than it can currently manage.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Pelvic heaviness or pressure</strong> — A dragging sensation in the vaginal area during or after activity can indicate pelvic organ prolapse and should be assessed by a specialist.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Pain at the incision site (C-section)</strong> — Sharp, burning, or pulling pain around the scar during movement means the tissue is not ready for that level of load.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Abdominal doming or coning</strong> — A visible ridge or peak running down the centre of your abdomen during exertion is a sign of diastasis recti under pressure.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Increased lochia (postpartum bleeding)</strong> — A return to bright red bleeding or a significant increase in flow after activity is a clear signal to reduce intensity immediately.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Joint pain beyond normal muscle soreness</strong> — Relaxin, the pregnancy hormone that loosens ligaments, remains elevated while breastfeeding. This increases injury risk in the hips, knees, and ankles during high-impact activity.
              </li>
            </ul>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">The correct order to rebuild fitness postpartum</h2>
            <ol className="space-y-6 list-none text-[#3D2C2C]/80 leading-relaxed text-lg">
              <li>
                <strong className="text-[#3D2C2C]">Phase 1 — Breathe and reconnect (weeks 1–6).</strong> Start with diaphragmatic breathing lying down, learning to coordinate your breath with gentle pelvic floor activation. This is not optional preparation — it is the foundation everything else is built on. Walking for 5–10 minutes and gradually increasing is appropriate here.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Phase 2 — Restore stability (weeks 6–12).</strong> Introduce bodyweight movements that challenge your core without creating intra-abdominal pressure: glute bridges, clamshells, side-lying leg raises, and modified bird-dogs. Avoid sit-ups, crunches, and planks in this phase. Use our{" "}
                <Link href="/pelvic-floor-recovery/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">pelvic floor recovery estimator</Link>{" "}
                to track your progress through this stage.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Phase 3 — Rebuild strength (weeks 12–24).</strong> Begin loaded movements with light resistance — squats, deadlifts, and upper body pressing — provided you are symptom-free. This is also the earliest appropriate window for most women to begin a graduated return-to-running programme.
              </li>
              <li>
                <strong className="text-[#3D2C2C]">Phase 4 — Return to full training (6 months+).</strong> High-impact, high-intensity training is appropriate once you can demonstrate pelvic floor control under load, have no symptoms during or after exercise, and have been assessed by a pelvic floor physiotherapist if you had any complications.
              </li>
            </ol>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">A note on returning to exercise after a C-section</h2>
            <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
              A caesarean section is major abdominal surgery, and the recovery timeline for exercise reflects that. The external wound may appear healed within 2–3 weeks, but the internal fascial layers take 6–12 months to regain full strength. This is why heavy lifting — including lifting a toddler — is restricted in the early weeks, not just formal exercise. Scar mobilisation, which can begin around 8–10 weeks once the wound is fully closed, helps prevent internal adhesions that can restrict movement and cause pain during exercise later. For a week-by-week breakdown, see our{" "}
              <Link href="/blog/c-section-recovery-timeline/" className="text-[#E8A0A8] underline underline-offset-2 hover:text-[#D58A92] transition-colors">C-section recovery guide</Link>.
            </p>
          </section>

          <section className="max-w-3xl space-y-4 pb-12">
            <h2 className="text-2xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
            <div className="space-y-3">
              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  When can I start exercising after a vaginal birth?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Gentle walking can begin within the first week provided you are comfortable and have no complications. Structured exercise should wait until at least 6 weeks postpartum, and high-impact activities like running should not begin before 12 weeks, and only when you are symptom-free.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  When can I start exercising after a C-section?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Short gentle walks are appropriate from around day 3–7 post-surgery. Low-impact exercise can begin around 8–10 weeks once the wound is fully healed. Running and high-impact training should wait until at least 12–16 weeks, with guidance from a pelvic floor physiotherapist recommended before returning to intense activity.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Can I do sit-ups or crunches postpartum?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Sit-ups and crunches are not recommended in the early postpartum period. They increase intra-abdominal pressure in a way that stresses the healing linea alba and can worsen diastasis recti. Focus on deep core reconnection through breathing and stability exercises first, progressing to loaded movements only when the deep core is functioning well.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  Is it safe to run while breastfeeding?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  Yes, running while breastfeeding is safe once your body is ready — typically no earlier than 12 weeks postpartum for an uncomplicated vaginal birth. Wear a well-fitted supportive sports bra, stay well hydrated, and be aware that relaxin may still be elevated if you are breastfeeding, which increases joint laxity and injury risk.
                </div>
              </details>

              <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  How do I know if I am returning to exercise too soon?
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  The clearest signs are leaking urine, pelvic heaviness or pressure, pain at the incision site, abdominal doming during exertion, or a return of bright red postpartum bleeding after activity. Any of these symptoms means the current activity level is too high and you should reduce intensity and seek assessment from a pelvic floor physiotherapist.
                </div>
              </details>
            </div>
          </section>
        </div>


      </main>

      <section className="max-w-5xl mx-auto w-full px-6 py-12 border-t border-[#E8A0A8]/10">
        <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/returning-to-exercise-after-birth/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Fitness</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">A Gentle Guide to Returning to Exercise After Birth</p>
          </Link>
          <Link href="/blog/postpartum-fitness/" className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300">
            <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">Fitness</span>
            <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">Postpartum Fitness: How to Rebuild Strength Safely After Birth</p>
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
