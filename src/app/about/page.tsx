import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: "About NurtureCalc — Our Mission & How Our Tools Work",
  description: "Learn how NurtureCalc's free postpartum calculators are built, what medical guidelines they use, and the team behind them.",
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://www.nurturecalc.com",
      "logo": "https://www.nurturecalc.com/logo.png",
      "description": "Free, science-based postpartum health tools for new mothers.",
    }
  };

  const calculators = [
    { name: "Safe Weight Loss Calculator", standard: "ACOG Postpartum Guidelines", href: "/safe-weight-loss" },
    { name: "Breastfeeding Calorie Calculator", standard: "Mifflin-St Jeor formula + Academy of Breastfeeding Medicine data", href: "/breastfeeding-calories" },
    { name: "Exercise Timeline", standard: "ACOG Committee Opinion 804 + POGP return-to-exercise guidelines", href: "/exercise-timeline" },
    { name: "Pelvic Floor Estimator", standard: "POGP pelvic floor dysfunction criteria", href: "/pelvic-floor-recovery" },
    { name: "Baby Weight Percentile", standard: "WHO Multicentre Growth Reference Study", href: "/baby-weight-percentile" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Header />
      
      <main className="flex-1">
        {/* SECTION 1 — Hero */}
        <section className="py-20 px-6 md:px-12 text-center bg-white border-b border-[#E8A0A8]/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight">
              Built for the Moments When You Need <span className="text-[#E8A0A8] italic">Answers, Not Another App</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#3D2C2C]/60 font-serif italic max-w-2xl mx-auto">
              Free, science-based tools. No sign-up. No noise. Just answers.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto py-20 px-6 md:px-12 space-y-32">
          
          {/* SECTION 2 — Our Story */}
          <section className="space-y-10">
            <h2 className="text-3xl font-serif text-[#3D2C2C] text-center mb-16 underline decoration-[#E8A0A8]/20 underline-offset-8">Our Story</h2>
            <div className="space-y-6 text-lg text-[#3D2C2C]/80 leading-relaxed max-w-3xl mx-auto">
              <p>
                The postpartum period is overwhelming. New mothers are flooded with advice, apps, and conflicting information at the exact moment they have the least energy to filter it. Between diaper changes and fragmented sleep, trying to figure out if you're eating enough while breastfeeding or if it's safe to go for a run shouldn't require a deep dive into medical journals.
              </p>
              <p>
                What already exists online is often scattered, paywalled, or generic. Most calculators are built for general weight loss or fitness enthusiasts, rather than the specific, delicate needs of a healing, breastfeeding mother. None of it felt right — it was either too commercial or too impersonal.
              </p>
              <p className="font-serif text-[#3D2C2C] text-xl italic py-6 border-l-4 border-[#E8A0A8]/30 pl-8">
                "So we built NurtureCalc — a single, free place where every answer is grounded in real medical guidelines and presented in plain, human language. No agenda. No upsell. Just the information your body deserves."
              </p>
            </div>
          </section>

          {/* SECTION 3 — How Our Tools Work */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-serif text-[#3D2C2C]">How Our Tools Work</h2>
              <p className="text-[#E8A0A8] font-label font-bold tracking-widest uppercase text-sm">Every calculator is built on a named medical standard</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculators.map((calc, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-[#E8A0A8]/10 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif text-[#3D2C2C] mb-3">{calc.name}</h3>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#E8A0A8] font-bold">→</span>
                    <p className="text-sm text-[#3D2C2C]/60 italic">{calc.standard}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 — Our Editorial Standards */}
          <section className="bg-white p-12 rounded-[3rem] border border-[#E8A0A8]/10 text-center space-y-6">
            <h2 className="text-3xl font-serif text-[#3D2C2C]">Our Editorial Standards</h2>
            <p className="text-[#E8A0A8] font-label font-bold tracking-widest uppercase text-sm">We hold ourselves to a simple standard: cite it or don't say it.</p>
            <p className="text-[#3D2C2C]/70 leading-relaxed max-w-2xl mx-auto text-base">
              All tools and articles on NurtureCalc are based on published medical guidelines. We periodically review our content to ensure it reflects current guidance. NurtureCalc is an informational resource and is not a substitute for advice from your doctor, midwife or health visitor. When in doubt, always consult a qualified healthcare professional.
            </p>
          </section>

          {/* SECTION 5 — Meet the Team */}
          <section className="space-y-12">
            <h2 className="text-3xl font-serif text-[#3D2C2C] text-center">Meet the Team</h2>
            <div className="bg-[#F9E4E8]/30 p-10 md:p-16 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 max-w-3xl mx-auto">
              <div className="w-24 h-24 rounded-full bg-[#F9E4E8] flex-shrink-0 flex items-center justify-center text-[#E8A0A8] font-serif text-2xl">
                NC
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-serif text-[#3D2C2C]">NurtureCalc Team</h3>
                  <p className="text-xs text-[#E8A0A8] font-label font-bold tracking-widest uppercase mt-1">Founder of NurtureCalc | Passionate about evidence-based postpartum care</p>
                </div>
                <p className="text-[#3D2C2C]/80 leading-relaxed">
                  NurtureCalc was built out of a simple belief — that every new mother deserves clear, trustworthy answers about her own recovery. We created these free tools so you never have to piece together conflicting advice from unreliable sources again. Every calculator on this site is grounded in published medical guidelines and presented in plain, human language.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6 — Get in Touch */}
          <section className="text-center py-20 border-t border-[#E8A0A8]/20 space-y-8">
            <h2 className="text-3xl font-serif text-[#3D2C2C]">Get in Touch</h2>
            <p className="text-lg text-[#3D2C2C]/70 max-w-xl mx-auto leading-relaxed">
              We read every message. Whether you have a suggestion, found an error, or just want to say hello — we would love to hear from you.
            </p>
            <a 
              href="mailto:hello@nurturecalc.com" 
              className="inline-block bg-[#E8A0A8] text-white px-10 py-4 rounded-full font-label font-bold tracking-widest uppercase text-sm hover:bg-[#D58A92] transition-colors shadow-lg shadow-[#E8A0A8]/20"
            >
              hello@nurturecalc.com
            </a>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
