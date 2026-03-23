import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3D2C2C] text-[#FFFDF9] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#FFFDF9]/10 pb-12">
          {/* Logo */}
          <Link href="/" className="font-serif text-3xl hover:opacity-80 transition-opacity">
            NurtureCalc
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["Privacy Policy", "About", "Contact"].map((link) => (
              <Link 
                key={link} 
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="font-label text-xs font-bold tracking-widest uppercase hover:text-[#E8A0A8] transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-center md:text-left">
          <p className="font-label text-xs font-bold tracking-widest opacity-60 uppercase">
            © 2026 NurtureCalc.com — made with care for new mothers
          </p>
        </div>
      </div>
    </footer>
  );
}
