import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CalculatorGrid from "@/components/CalculatorGrid";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NurtureCalc — Free Postpartum Health Calculators for New Mothers",
  description: "Free science-based postpartum calculators for new mothers. Calculate safe weight loss rates, breastfeeding calorie needs, return-to-exercise timelines, and more.",
  keywords: "postpartum calculator, breastfeeding calories, return to exercise after birth, pelvic floor recovery, baby weight percentile",
  alternates: {
    canonical: "https://www.nurturecalc.com/",
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CalculatorGrid />
      </main>
      <Footer />
    </div>
  );
}
