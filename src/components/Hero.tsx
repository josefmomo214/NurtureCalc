"use client";

import { Button } from "./Button";

export default function Hero() {
  const scrollToCalculators = () => {
    document.getElementById("calculators")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#F9E4E8] relative overflow-hidden py-24 md:py-40 px-6 md:px-12">
      {/* Decorative Bloom SVG - Top Right */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 text-[#E8A0A8] opacity-30 select-none pointer-events-none">
        <svg width="240" height="240" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 20 80 30 100 30 C80 35 60 45 50 65 C40 45 20 35 0 30 C20 30 40 20 50 0" />
          <path d="M50 100 C60 80 80 70 100 70 C80 65 60 55 50 35 C40 55 20 65 0 70 C20 70 40 80 50 100" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
        <h1 className="text-5xl md:text-8xl font-serif text-[#3D2C2C] leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Your gentle guide to postpartum recovery
        </h1>
        
        <p className="text-xl md:text-2xl text-[#3D2C2C]/70 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          Free, science-based calculators designed for new mothers
        </p>

        <div className="pt-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Button 
            size="lg" 
            className="bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-5 text-xl font-label font-bold"
            onClick={scrollToCalculators}
          >
            Explore the Calculators
          </Button>
        </div>
      </div>
    </section>
  );
}
