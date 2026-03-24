"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("nurturecalc_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("nurturecalc_cookie_consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-12 duration-500">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-[#E8A0A8]/20 shadow-[0_-10px_40px_rgba(232,160,168,0.15)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[#3D2C2C]">
        <div className="flex-1 space-y-2 text-center md:text-left">
          <p className="text-sm md:text-base leading-relaxed">
            We use cookies to serve relevant ads and improve your experience. By continuing to use NurtureCalc you accept our use of cookies.
          </p>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/privacy-policy" className="text-xs font-label uppercase tracking-wider font-bold text-[#3D2C2C]/50 hover:text-[#E8A0A8] transition-colors">
            Read our Privacy Policy
          </Link>
          <Button 
            onClick={handleAccept}
            className="bg-[#E8A0A8] hover:bg-[#D58A92] text-white whitespace-nowrap"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
