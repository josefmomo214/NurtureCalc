import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';
import BlogIndexContent from "./BlogIndexContent";

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog',
  },
  title: 'Postpartum Health Blog — Science-Based Advice | NurtureCalc',
  description: 'Science-based articles on postpartum recovery, breastfeeding nutrition, safe exercise and pelvic floor health. Written for new mothers, grounded in medical guidelines.',
  openGraph: {
    title: 'Postpartum Health Blog — Science-Based Advice | NurtureCalc',
    description: 'Science-based articles on postpartum recovery, breastfeeding nutrition, safe exercise and pelvic floor health.',
    url: 'https://nurturecalc.com/blog',
    type: 'website',
  },
};

export default function BlogIndex() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full py-16 px-6">
        <header className="space-y-4 text-center border-b border-[#E8A0A8]/20 pb-12 mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
            The NurtureCalc Blog
          </h1>
          <p className="text-[#E8A0A8] text-xl font-serif italic">
            Gentle, science-based reading for new mothers
          </p>
        </header>

        <BlogIndexContent />
      </main>

      <Footer />
    </div>
  );
}
