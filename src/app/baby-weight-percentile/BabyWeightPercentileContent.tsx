"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BabyWeightPercentileContent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6 space-y-12">
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
            Information and guidance on baby growth standards and weight tracking.
          </p>
        </header>

        {/* Temporary Unavailability Notice */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-serif text-[#3D2C2C]">Calculator Temporarily Unavailable</h2>
          <p className="text-[#3D2C2C]/80 leading-relaxed text-base">
            This calculator is temporarily unavailable while we verify its reference data and calculations. You can still read the growth-chart information below.
          </p>
          <p className="text-sm text-[#3D2C2C]/70">
            For official reference growth charts, please visit the <a href="https://www.who.int/tools/child-growth-standards/standards/weight-for-age" target="_blank" rel="noopener noreferrer" className="text-[#E8A0A8] underline hover:text-[#D58A92]">WHO Child Growth Standards — Weight-for-Age</a> resource.
          </p>
        </div>

        <section className="mt-12 max-w-3xl space-y-4 bg-amber-50/50 p-6 rounded-2xl border border-amber-200/60">
          <h2 className="text-xl font-serif text-[#3D2C2C]">Important Note on Prematurity</h2>
          <p className="text-[#3D2C2C]/80 leading-relaxed text-sm">
            Growth assessment for premature babies requires corrected age (subtracting weeks early from actual age) or consultation with your paediatrician.
          </p>
        </section>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-serif text-[#3D2C2C]">What does a baby weight percentile actually mean?</h2>
          <p className="text-[#3D2C2C]/80 leading-relaxed text-lg">
            A weight percentile shows how a baby&apos;s weight compares to a reference population of healthy babies of the same age and sex based on standard growth reference studies. The 50th percentile is not a target — healthy babies naturally distribute across the full range.
          </p>
        </section>

        <section className="max-w-3xl space-y-4 pb-12">
          <h2 className="text-2xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
          <div className="space-y-3">
            <details className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group">
              <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                What is a healthy weight percentile for a baby?
                <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">▾</span>
              </summary>
              <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                Any percentile from the 3rd to the 97th can be healthy for an individual baby. There is no single ideal percentile. What matters most is that your baby follows a consistent curve over time and is feeding well.
              </div>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
