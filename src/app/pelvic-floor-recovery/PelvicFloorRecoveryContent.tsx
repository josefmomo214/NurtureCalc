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
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<{ stage: string; message: string } | null>(null);

  const handleSelectOption = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const totalScore = newScores.reduce((a, b) => a + b, 0);
      setResult(calculatePelvicFloor(totalScore));
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores([]);
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
                    <span className="font-label text-xs font-black tracking-widest text-[#E8A0A8] uppercase">Recovery Stage</span>
                    <h3 className="text-5xl font-serif text-[#3D2C2C] leading-tight">{result.stage}</h3>
                  </div>

                  <div className="max-w-lg mx-auto p-6 bg-[#F9E4E8]/50 rounded-xl space-y-4">
                    <p className="text-lg text-[#3D2C2C]/80 italic leading-relaxed text-center">
                      "{result.message}"
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
        </div>

        {/* Global Desktop Ad Sidebar */}
        <aside className="hidden md:block w-72 shrink-0">
          <div className="ad-sidebar sticky top-32 w-full h-[600px] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-label text-sm">
            Ad Placeholder
          </div>
        </aside>

        <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12">
          <h2 className="text-2xl font-serif text-[#3D2C2C]">Understanding Pelvic Floor Recovery</h2>
          <p>
            The pelvic floor is a complex hammock of muscles, ligaments, and connective tissues that stretch from your pubic bone to your tailbone. It plays a foundational role in supporting your pelvic organs (the bladder, bowel, and uterus), maintaining continence, and stabilizing your core and spine. During pregnancy, these structures bear the increasing weight of your growing baby, and during a vaginal delivery, they undergo extraordinary stretching and sometimes tearing or medical intervention.
          </p>
          <p>
            Postpartum pelvic floor dysfunction is incredibly common, yet it is rarely discussed openly. Symptoms such as leaking urine when you laugh, cough, sneeze, or exercise (stress urinary incontinence) are frequently normalized as "just part of being a mom." Similarly, a feeling of heaviness, pressure, or a lingering ache in the vaginal or rectal area can be a sign of pelvic organ prolapse—a condition where the pelvic organs lose their support and descend into the vaginal canal. While common, these symptoms are never something you simply have to live with.
          </p>
          <p>
            Recovery is not a linear process, and it requires intentional rehabilitation. In the early postpartum days, the focus should be purely on rest and restorative breathing to help the stretched tissues heal and coordinate with your diaphragm. As weeks turn into months, you can begin to gently reintroduce load, practicing mindful contractions (Kegels) integrated with full-body movements.
          </p>
          <p>
            However, it's vital to note that a "tight" pelvic floor is not necessarily a "strong" one. Many women experience hypertonicity (overly tight muscles) following birth trauma or as a compensation strategy for a weak core. In these cases, doing traditional Kegels can actually worsen symptoms like pelvic pain, painful intercourse, or urgency.
          </p>
          <p>
            Because the pelvic floor is hidden and complex, guesswork often leads to frustration. If you are experiencing persistent symptoms, pain, or uncertainty, the absolute best step you can take for your long-term health is to schedule an assessment with a specialized pelvic floor physical therapist. They can perform an internal exam to determine if your muscles are weak, tight, uncoordinated, or damaged, and provide you with a bespoke treatment plan to restore full function and confidence in your body.
          </p>
        </section>

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
