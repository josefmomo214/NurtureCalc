"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9] border-b border-[#E8A0A8] py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-serif text-3xl text-[#3D2C2C] hover:opacity-80 transition-opacity">
          NurtureCalc
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-label font-bold tracking-wider text-[#3D2C2C]">
          <Link href="/" className="hover:text-[#E8A0A8] transition-colors">HOME</Link>
          <Link href="/#calculators" className="hover:text-[#E8A0A8] transition-colors">CALCULATORS</Link>
          <Link href="/blog" className="hover:text-[#E8A0A8] transition-colors">BLOG</Link>
          <Link href="/about" className="hover:text-[#E8A0A8] transition-colors">ABOUT</Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-[#3D2C2C]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          {[
            { name: "Home", href: "/" },
            { name: "Weight Loss", href: "/weight-loss" },
            { name: "Calorie Needs", href: "/calorie-needs" },
            { name: "Exercise Timeline", href: "/exercise-timeline" },
            { name: "Pelvic Floor", href: "/pelvic-floor" },
            { name: "Baby Weight", href: "/baby-weight" },
            { name: "Blog", href: "/blog" },
            { name: "About", href: "/about" }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-label text-sm font-bold text-[#3D2C2C] px-2 py-2 hover:bg-[#F9E4E8] rounded transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
