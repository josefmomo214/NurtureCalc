export default function TrustBar() {
  const signals = [
    { icon: "🌸", text: "Science-based formulas" },
    { icon: "🤱", text: "Designed for new mothers" },
    { icon: "🔒", text: "No sign-up required" },
  ];

  return (
    <section className="py-12 bg-[#FFFDF9] border-t border-[#E8A0A8]/10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {signals.map((signal) => (
            <div key={signal.text} className="flex items-center gap-3">
              <span className="text-2xl">{signal.icon}</span>
              <span className="font-label text-sm font-bold text-[#3D2C2C]/60 tracking-wider uppercase">
                {signal.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
