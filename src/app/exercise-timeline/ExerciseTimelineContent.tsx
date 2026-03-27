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
