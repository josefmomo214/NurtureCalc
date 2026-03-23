"use client";

import { useUnitSystem } from "@/context/UnitContext";

export default function UnitToggle() {
  const { system, setSystem } = useUnitSystem();

  return (
    <div className="w-full md:w-auto bg-[#FFFDF9] rounded-full border border-[#E8A0A8]/20 p-1 flex flex-row items-center shadow-sm">
      <button
        onClick={() => setSystem("metric")}
        className={`flex-1 md:flex-none px-6 py-2 rounded-full text-xs md:text-sm font-label font-bold tracking-wider uppercase transition-all duration-200 ${
          system === "metric"
            ? "bg-[#E8A0A8] text-white shadow-md transform scale-100"
            : "text-[#3D2C2C]/50 hover:text-[#3D2C2C] bg-transparent"
        }`}
      >
        Metric (kg, cm)
      </button>
      <button
        onClick={() => setSystem("imperial")}
        className={`flex-1 md:flex-none px-6 py-2 rounded-full text-xs md:text-sm font-label font-bold tracking-wider uppercase transition-all duration-200 ${
          system === "imperial"
            ? "bg-[#E8A0A8] text-white shadow-md transform scale-100"
            : "text-[#3D2C2C]/50 hover:text-[#3D2C2C] bg-transparent"
        }`}
      >
        Imperial (lbs, ft)
      </button>
    </div>
  );
}
