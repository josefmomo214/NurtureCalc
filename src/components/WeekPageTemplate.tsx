import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WeekPage, weekPages } from "@/data/week-pages";

interface Props {
  data: WeekPage;
}

export default function WeekPageTemplate({ data: d }: Props) {
  const prevPage = weekPages.find((p) => p.weekNumber === d.weekNumber - 1);
  const nextPage = weekPages.find((p) => p.weekNumber === d.weekNumber + 1);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Prev/Next navigation */}
        <nav className="mb-8 flex items-center justify-between gap-4 text-sm">
          {prevPage ? (
            <Link
              href={`/${prevPage.slug}/`}
              className="font-label text-xs font-bold text-[#E8A0A8] hover:underline uppercase tracking-wider"
            >
              ← Week {prevPage.weekNumber}
            </Link>
          ) : (
            <span />
          )}
          {nextPage ? (
            <Link
              href={`/${nextPage.slug}/`}
              className="font-label text-xs font-bold text-[#E8A0A8] hover:underline uppercase tracking-wider"
            >
              Week {nextPage.weekNumber} →
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* Week progress indicator */}
        <div className="mb-12">
          <p className="font-label text-xs font-bold text-[#3D2C2C]/50 uppercase tracking-wider mb-3">
            Week {d.weekNumber} of your postpartum journey
          </p>
          <div className="flex items-center gap-2">
            {weekPages.map((wp) => (
              <div
                key={wp.slug}
                className={
                  wp.weekNumber === d.weekNumber
                    ? "w-3 h-3 rounded-full bg-[#E8A0A8]"
                    : "w-3 h-3 rounded-full bg-[#E8A0A8]/20"
                }
                aria-label={`Week ${wp.weekNumber}`}
              />
            ))}
          </div>
        </div>

        {/* Hero */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3D2C2C] leading-tight mb-6">
            {d.h1}
          </h1>
          <p className="text-lg text-[#3D2C2C]/70 leading-relaxed">{d.intro}</p>
        </header>

        {/* Physical Recovery */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#3D2C2C] mb-8">
            What&apos;s happening in your body
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {d.physicalRecovery.map((pr, i) => (
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
                    {pr.heading}
                  </p>
                  <p className="text-sm text-[#3D2C2C]/70 leading-relaxed">
                    {pr.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emotional Wellbeing */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl font-serif text-[#3D2C2C] mb-4">
            How you might be feeling
          </h2>
          <div className="bg-[#F9E4E8]/40 rounded-2xl p-8">
            <p className="text-[#3D2C2C]/70 leading-relaxed text-lg">
              {d.emotionalWellbeing}
            </p>
          </div>
        </section>

        {/* What's normal vs Warning signs */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-serif text-[#3D2C2C] mb-6">
                What&apos;s normal this week
              </h2>
              <ul className="space-y-3">
                {d.whatsNormal.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 mt-1 text-[#E8A0A8] font-bold">
                      ✓
                    </span>
                    <span className="text-[#3D2C2C]/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-[#3D2C2C] mb-6">
                When to contact your doctor
              </h2>
              <ul className="space-y-3">
                {d.warningSigns.map((item, i) => (
                  <li
                    key={i}
                    className="border-l-4 border-[#E8A0A8] bg-[#F9E4E8]/30 pl-4 py-2 rounded-r-lg"
                  >
                    <span className="text-[#3D2C2C]/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="mb-16 bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-10 md:p-14 text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#3D2C2C] leading-tight">
            {d.calculatorHighlight.calculatorName}
          </h2>
          <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">
            {d.calculatorHighlight.reason}
          </p>
          <Link
            href={d.calculatorHighlight.calculatorUrl}
            className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
          >
            Open {d.calculatorHighlight.calculatorName} →
          </Link>
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

        {/* Bottom navigation */}
        <section className="pt-8 border-t border-[#E8A0A8]/10 flex flex-col items-center gap-6">
          <Link
            href="/postpartum-week-1/"
            className="inline-block bg-[#F9E4E8] hover:bg-[#F0D0D6] text-[#3D2C2C] px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all"
          >
            Browse all weeks
          </Link>
          <div className="flex items-center justify-between w-full max-w-xs text-sm">
            {prevPage ? (
              <Link
                href={`/${prevPage.slug}/`}
                className="font-label text-xs font-bold text-[#E8A0A8] hover:underline uppercase tracking-wider"
              >
                ← Week {prevPage.weekNumber}
              </Link>
            ) : (
              <span />
            )}
            {nextPage ? (
              <Link
                href={`/${nextPage.slug}/`}
                className="font-label text-xs font-bold text-[#E8A0A8] hover:underline uppercase tracking-wider"
              >
                Week {nextPage.weekNumber} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

