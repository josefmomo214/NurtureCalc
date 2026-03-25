"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { calculateExerciseTimeline } from "@/utils/calculators";
import Link from "next/link";

export default function ExerciseTimeline() {
  const faqJsonLd = {
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
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, breastfeeding burns approximately 500 extra calories per day, which can assist with postpartum weight loss, provided you are eating a balanced diet." }
      }
    ]
  };

  const [weeks, setWeeks] = useState("");
  const [delivery, setDelivery] = useState<string | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<{ label: string; suggestion: string; color: string } | null>(null);

  const symptomList = [
    "I experience leaking when I cough, sneeze or exercise",
    "I feel heaviness or pressure in my pelvis",
    "I have pain at my scar or perineum"
  ];

  const toggleSymptom = (s: string) => {
    setSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleCalculate = () => {
    const wk = parseInt(weeks);
    if (!wk || !delivery) return;
    setResult(calculateExerciseTimeline(delivery, wk, symptoms.length > 0));
  };

  const handleReset = () => {
    setWeeks("");
    setDelivery(null);
    setSymptoms([]);
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              Return-to-Exercise <span className="text-[#E8A0A8] italic">Timeline</span> Tool
            </h1>
            <p className="text-[#3D2C2C]/70 text-lg leading-relaxed">
              Returning to exercise too soon after birth can cause long-term pelvic floor problems. This tool gives you a personalised timeline based on your delivery type and current symptoms.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="space-y-8 bg-white border border-[#E8A0A8]/10 shadow-[0_10px_40px_rgba(232,160,168,0.1)]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Delivery Type</label>
                  <div className="flex gap-4">
                    <button 
                      className={`flex-1 py-3 px-4 rounded-md font-label text-xs font-bold transition-all border ${delivery === 'vaginal' ? 'bg-[#E8A0A8] text-white border-[#E8A0A8]' : 'bg-[#FFFDF9] text-[#3D2C2C] border-[#E8A0A8]/20 hover:border-[#E8A0A8]'}`}
                      onClick={() => setDelivery('vaginal')}
                    >
                      Vaginal Birth
                    </button>
                    <button 
                      className={`flex-1 py-3 px-4 rounded-md font-label text-xs font-bold transition-all border ${delivery === 'csection' ? 'bg-[#E8A0A8] text-white border-[#E8A0A8]' : 'bg-[#FFFDF9] text-[#3D2C2C] border-[#E8A0A8]/20 hover:border-[#E8A0A8]'}`}
                      onClick={() => setDelivery('csection')}
                    >
                      C-Section
                    </button>
                  </div>
                </div>

                <Input label="Weeks Postpartum" type="number" min="1" max="52" value={weeks} onChange={(e) => setWeeks(e.target.value)} placeholder="1 - 52" />
                
                <div className="space-y-3 border-t border-[#E8A0A8]/10 pt-6">
                  <label className="font-label text-xs font-bold text-[#3D2C2C]/80 ml-1 uppercase block">Symptom Check</label>
                  <p className="text-xs text-[#3D2C2C]/60 italic ml-1 mb-2">Select any that apply to you currently:</p>
                  <div className="space-y-2">
                    {symptomList.map((s, i) => (
                      <label key={i} className={`flex items-start gap-3 p-3 rounded border cursor-pointer transition-colors ${symptoms.includes(s) ? 'bg-[#F9E4E8] border-[#E8A0A8]/50' : 'bg-[#FFFDF9] border-[#E8A0A8]/20 hover:border-[#E8A0A8]/50'}`}>
                        <input type="checkbox" className="mt-1" checked={symptoms.includes(s)} onChange={() => toggleSymptom(s)} />
                        <span className="text-sm text-[#3D2C2C]/80 leading-snug">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {!result && (
                <Button 
                  className="w-full bg-[#E8A0A8] hover:bg-[#D58A92] text-white" 
                  onClick={handleCalculate}
                  disabled={!weeks || !delivery}
                >
                  Assess Readiness
                </Button>
              )}
            </Card>

            <div className="flex flex-col gap-6">
              {result && (
                <Card className="flex-1 space-y-8 bg-[#FFFDF9] border border-[#E8A0A8]/20 animate-in fade-in slide-in-from-right-4 duration-500 shadow-xl flex flex-col justify-center">
                  <div className="space-y-6 text-center">
                    <span className="font-label text-xs font-black tracking-widest text-[#3D2C2C]/50 uppercase block">Your Stage</span>
                    <h3 className={`text-5xl font-serif ${result.color} leading-tight`}>{result.label}</h3>
                  </div>

                  <div className="p-6 bg-[#F9E4E8]/50 rounded-xl text-center space-y-4">
                    <h4 className="font-label text-sm font-bold text-[#3D2C2C]">Suggested Activity:</h4>
                    <p className="text-lg text-[#3D2C2C]/80 italic font-serif">"{result.suggestion}"</p>
                  </div>

                  {symptoms.length > 0 && (
                    <div className="p-4 bg-[#FFFDF9] border-l-4 border-[#E8A0A8] shadow-sm text-sm text-[#3D2C2C]/80 leading-relaxed italic">
                      <strong>Note:</strong> Because you checked one or more symptoms, we strongly recommend evaluating your core and pelvic floor with a qualified physiotherapist before returning to standard exercise routines.
                    </div>
                  )}

                  <div className="pt-4 flex justify-center">
                    <Button variant="tertiary" onClick={handleReset} className="text-[#3D2C2C] hover:text-[#E8A0A8]">
                      Calculate another
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Global Desktop Ad Sidebar */}
        <aside className="hidden md:block w-72 shrink-0">
          <div className="ad-sidebar sticky top-32 w-full h-[600px] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-label text-sm">
            Ad Placeholder
          </div>
        </aside>

        <section className="mt-16 max-w-3xl space-y-6 text-[#3D2C2C]/80 leading-relaxed text-lg pb-12 w-full px-6 md:px-0">
          <h2 className="text-2xl font-serif text-[#3D2C2C]">Safely Returning to Exercise Postpartum</h2>
          <p>
            The journey back to exercise after giving birth is highly individual and deeply influenced by your specific delivery experience, genetics, and current physical symptoms. Unlike returning from a typical sports injury, postpartum recovery involves the healing of the abdominal wall, the re-stabilization of the pelvis, and the rehabilitation of the pelvic floor muscles—all while managing the sleep deprivation and physical demands of caring for a newborn.
          </p>
          <p>
            The standard "six-week clearance" provided by many doctors is often misinterpreted as a green light to return to all pre-pregnancy activities. In reality, six weeks marks only the initial phase of soft tissue healing. Ligaments remain lax due to the hormone relaxin, which can stay in your system for several months (especially if you are breastfeeding), increasing the risk of joint instability and injury.
          </p>
          <p>
            For mothers who experienced a vaginal delivery, the pelvic floor underwent significant stretching and potential trauma. Returning to high-impact activities like running or jumping too soon can lead to pelvic organ prolapse or stress urinary incontinence. Clinical guidelines strongly recommend focusing on breathwork, gentle core connection, and walking for the first six weeks, gradually introducing low-impact strength training before attempting any high-impact movements around the 12-week mark at the earliest.
          </p>
          <p>
            If you delivered via cesarean section, you are recovering from major abdominal surgery. The incision site requires complete healing, and the severed fascial layers need time to regain tensile strength. Heavy lifting (anything heavier than your baby) and direct core exercises should be strictly avoided in the early weeks. Movement should be introduced very gradually, focusing on posture and restorative breathing to safely re-engage the deep core.
          </p>
          <p>
            Regardless of your delivery type, symptoms such as leaking urine, pelvic heaviness, doming/coning of the abdomen, or pain at physical scars are crucial warning signs. These indicate that your body's pressure management system is not yet ready for the load you are placing on it. In these cases, consulting a specialized pelvic floor physiotherapist is the gold standard for creating a safe, personalized rehabilitation roadmap.
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
