import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConditionPage, conditionPages } from "@/data/condition-pages";

interface Props {
  data: ConditionPage;
}

export default function ConditionPageTemplate({ data: d }: Props) {
  const relatedPages = d.relatedSlugs
    .map((s) => conditionPages.find((p) => p.slug === s))
    .filter(Boolean) as ConditionPage[];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Breadcrumb */}
        <nav className="mb-10">
          <Link
            href={d.calculatorUrl}
            className="font-label text-xs font-bold text-[#E8A0A8] flex items-center gap-2 hover:underline uppercase tracking-wider"
          >
            ← {d.calculatorName}
          </Link>
        </nav>

        {/* Hero */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-tight mb-6">
            {d.h1}
          </h1>
          <p className="text-lg text-[#3D2C2C]/70 leading-relaxed">{d.intro}</p>
        </header>

        {/* Key Points */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">
            What you need to know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {d.keyPoints.map((kp, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-[#F9E4E8]/40 rounded-2xl"
              >
                <div className="shrink-0 w-9 h-9 bg-[#E8A0A8]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#E8A0A8] font-bold font-label text-sm">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-[#3D2C2C] font-semibold mb-2 leading-snug">
                    {kp.heading}
                  </p>
                  <p className="text-sm text-[#3D2C2C]/70 leading-relaxed">
                    {kp.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="mb-16 bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-10 md:p-14 text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#3D2C2C] leading-tight">
            {d.ctaHeading}
          </h2>
          <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">
            {d.ctaBody}
          </p>
          <Link
            href={d.calculatorUrl}
            className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
          >
            {d.ctaButton}
          </Link>
        </section>

        {/* When to use */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-serif text-[#3D2C2C] mb-4">
            How to use {d.calculatorName.toLowerCase().replace("calculator", "the calculator").replace("estimator", "the estimator").replace("tool", "the tool")}
          </h2>
          <p className="text-[#3D2C2C]/70 leading-relaxed text-lg">
            {d.whenToUseCalculator}
          </p>
        </section>

        {/* Medical disclaimer */}
        <div className="mb-16 bg-[#F5F5F0] border border-[#E0E0D8] rounded-3xl p-8 max-w-3xl">
          <p className="text-xs font-label font-bold tracking-widest uppercase text-[#3D2C2C]/50 mb-3">
            Medical Disclaimer
          </p>
          <p className="text-sm text-[#3D2C2C]/70 leading-relaxed">
            This page is for informational purposes only and does not constitute
            medical advice, diagnosis, or treatment. Always consult a qualified
            healthcare professional before making decisions about your health or
            recovery. If you are experiencing a medical emergency, contact your
            local emergency services immediately.
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-serif text-[#3D2C2C] mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {d.faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-[#F9E4E8]/50 rounded-2xl overflow-hidden group"
              >
                <summary className="cursor-pointer px-6 py-4 font-serif text-[#3D2C2C] text-lg flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-[#E8A0A8] ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-5 text-[#3D2C2C]/80 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Related pages */}
      {relatedPages.length > 0 && (
        <section className="max-w-5xl mx-auto w-full px-6 py-12 border-t border-[#E8A0A8]/10">
          <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPages.map((rp) => (
              <Link
                key={rp.slug}
                href={`/${rp.slug}/`}
                className="group block p-6 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-2">
                  {rp.calculatorName}
                </span>
                <p className="font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug transition-colors">
                  {rp.h1}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
