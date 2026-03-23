import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — NurtureCalc",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
        <div className="space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl tracking-tight text-[#3D2C2C] font-serif">
              Oops — <span className="text-[#E8A0A8] italic">page not found</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#3D2C2C]/60 font-serif leading-relaxed">
              The page you're looking for doesn't exist or has moved.
            </p>
          </div>
          
          <div className="pt-8">
            <Link 
              href="/"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Go back to NurtureCalc Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
