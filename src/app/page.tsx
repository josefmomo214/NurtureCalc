import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CalculatorGrid from "@/components/CalculatorGrid";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Postpartum Health Calculators for New Mothers | NurtureCalc",
  description: "Free, science-based postpartum calculators. Safe weight loss, breastfeeding calorie needs, exercise timelines, pelvic floor recovery & baby growth charts. No sign-up required.",
  keywords: "postpartum calculator, breastfeeding calories, return to exercise after birth, pelvic floor recovery, baby weight percentile",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NurtureCalc",
            "url": "https://nurturecalc.com",
            "description": "Free postpartum health calculators for new mothers.",
            "inLanguage": "en",
          }),
        }}
      />
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
