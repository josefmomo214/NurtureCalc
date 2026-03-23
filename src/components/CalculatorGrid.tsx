import Link from "next/link";

const calculators = [
  {
    name: "Safe Weight Loss Rate Calculator",
    description: "Plan your postpartum weight journey with safety and milk supply in mind.",
    href: "/safe-weight-loss",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "Breastfeeding Calorie Needs Estimator",
    description: "Discover the additional calories your body needs while nursing.",
    href: "/breastfeeding-calories",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Return-to-Exercise Timeline Tool",
    description: "A week-by-week guide to safely reintroducing physical activity.",
    href: "/exercise-timeline",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Pelvic Floor Recovery Estimator",
    description: "Assess your recovery stage and find gentle restoration steps.",
    href: "/pelvic-floor-recovery",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Baby Weight Percentile Calculator",
    description: "Track your baby's growth using global health standards.",
    href: "/baby-weight-percentile",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function CalculatorGrid() {
  return (
    <section id="calculators" className="py-24 px-6 md:px-12 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc) => (
            <div 
              key={calc.name} 
              className="bg-[#FFFDF9] rounded-2xl p-8 shadow-[0_10px_40px_rgba(232,160,168,0.15)] flex flex-col justify-between group hover:translate-y-[-4px] transition-all duration-300 border border-[#E8A0A8]/10"
            >
              <div className="space-y-6">
                <div className="text-[#E8A0A8] bg-[#F9E4E8] w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {calc.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-[#3D2C2C] leading-tight">
                    {calc.name}
                  </h3>
                  <p className="text-[#3D2C2C]/70 leading-relaxed text-sm">
                    {calc.description}
                  </p>
                </div>
              </div>
              
              <Link 
                href={calc.href}
                className="mt-8 inline-flex items-center text-[#E8A0A8] font-label font-bold text-sm tracking-widest hover:gap-3 transition-all uppercase"
              >
                Open Calculator <span className="text-xl ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
