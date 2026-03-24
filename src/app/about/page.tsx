import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NurtureCalc — Our Mission & How Our Tools Work',
  description: 'Learn how NurtureCalc\'s free postpartum calculators are built, what medical guidelines they use, and the team behind them.',
  alternates: {
    canonical: 'https://www.nurturecalc.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="space-y-16">
          <header className="space-y-6 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl tracking-tight text-[#3D2C2C] font-serif">
              About NurtureCalc
            </h1>
            <p className="text-[#E8A0A8] text-xl md:text-2xl font-serif italic">
              Free, science-based tools made with care for new mothers
            </p>
          </header>

          <div className="space-y-12 text-[#3D2C2C]/80 text-lg leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">Why we built this</h2>
              <p>
                The postpartum period is one of the most physically demanding times in a woman's life — yet most online tools aren't designed with new mothers in mind. NurtureCalc was created to fill that gap: a quiet, judgment-free space where you can get clear, science-based answers to the questions you're actually asking.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">How our calculators work</h2>
              <p>
                Every calculator on NurtureCalc uses established clinical formulas — including WHO growth standards, the Mifflin-St Jeor equation, and evidence-based postpartum recovery guidelines. We keep the science accurate and the language human.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-[#3D2C2C]">A note from us</h2>
              <p>
                NurtureCalc is a free tool, not a medical service. Always discuss your health and your baby's health with your doctor, midwife, or healthcare provider. Our calculators are here to inform and support — not to replace professional care.
              </p>
            </section>
          </div>

          <div className="bg-[#F9E4E8] p-8 md:p-12 rounded-3xl text-center space-y-4">
            <p className="text-[#3D2C2C] text-lg md:text-xl font-serif italic">
              Have a question or suggestion? Reach us at <a href="mailto:hello@nurturecalc.com" className="text-[#E8A0A8] hover:underline font-medium">hello@nurturecalc.com</a>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
