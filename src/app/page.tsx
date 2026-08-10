import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CalculatorGrid from "@/components/CalculatorGrid";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { weekPages } from "@/data/week-pages";

export const metadata: Metadata = {
  title: "Free Postpartum Health Calculators for New Mothers | NurtureCalc",
  description: "Free science-based postpartum calculators for new mothers. Safe weight loss, breastfeeding calories, exercise timelines, pelvic floor recovery & baby growth charts.",
  keywords: "postpartum calculator, breastfeeding calories, return to exercise after birth, pelvic floor recovery, baby weight percentile",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Postpartum Health Calculators for New Mothers | NurtureCalc",
    description: "Free science-based postpartum calculators for new mothers. Safe weight loss, breastfeeding calories, exercise timelines, pelvic floor recovery & baby growth charts.",
    url: 'https://nurturecalc.com/',
    type: 'website',
  },
  other: {
    'p:domain_verify': '5d2451dd5084122edf83c5f4b9260b2e',
  },
};

const faqs = [
  {
    q: "Are these calculators free?",
    a: "Yes, all NurtureCalc tools are completely free to use with no sign-up or account required.",
  },
  {
    q: "How accurate are the calculators?",
    a: "NurtureCalc tools use established clinical formulas and WHO growth standards. Results are estimates — always discuss your specific situation with your midwife or doctor.",
  },
  {
    q: "When can I start using these tools after birth?",
    a: "You can use most tools from day one postpartum. The Safe Weight Loss and Exercise Timeline tools include guidance specific to your weeks postpartum.",
  },
  {
    q: "Are the tools suitable for C-section mothers?",
    a: "Yes. The Exercise Timeline and Pelvic Floor tools both account for C-section delivery and provide adjusted timelines.",
  },
  {
    q: "Can I use the breastfeeding calculator if I am mix-feeding?",
    a: "Yes. The Breastfeeding Calorie Calculator includes a partial nursing option for mothers who combine breast and formula feeding.",
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NurtureCalc",
            "url": "https://nurturecalc.com",
            "description": "Free science-based postpartum health calculators for new mothers.",
            "logo": "https://nurturecalc.com/og-image.jpg",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61573471182996",
              "https://www.pinterest.com/NurtureCalc/",
              "https://www.linkedin.com/company/nurturecalc/"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": a,
              },
            })),
          }),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <CalculatorGrid />

        <section className="bg-[#FFFDF9] py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-5 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-[#3D2C2C]">Where Are You in Your Recovery?</h2>
              <p className="text-base md:text-lg text-[#3D2C2C]/80 leading-relaxed">
                Every week postpartum brings different physical and emotional changes. Explore our week-by-week guide to know what&apos;s normal, what to expect next, and when to reach out for support.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {[1, 4, 8, 12].map((weekNumber) => {
                const week = weekPages.find((wp) => wp.weekNumber === weekNumber)!;
                return (
                  <Link
                    key={week.slug}
                    href={`/${week.slug}/`}
                    className="block bg-[#F9E4E8] rounded-2xl p-6 shadow-[0_10px_40px_rgba(232,160,168,0.15)] hover:shadow-[0_10px_40px_rgba(232,160,168,0.3)] hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <span className="font-label uppercase tracking-wider text-xs text-[#E8A0A8] font-bold block mb-2">
                      Week {week.weekNumber}
                    </span>
                    <span className="font-serif text-lg text-[#3D2C2C] leading-snug block">
                      {week.h1}
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/postpartum-week-by-week/"
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              Browse all weeks →
            </Link>
          </div>
        </section>

        <section className="bg-[#F9E4E8] py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-16">

            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif text-[#3D2C2C]">What is NurtureCalc?</h2>
              <p className="text-base md:text-lg text-[#3D2C2C]/80 leading-relaxed">
                NurtureCalc is a free postpartum health calculator platform built for new mothers. Every tool is grounded in clinical guidelines — including WHO growth charts for baby tracking and the Mifflin-St Jeor formula for calorie estimation. The calculators are designed to support the full fourth trimester: recovery, nutrition, breastfeeding, and your baby&apos;s growth. No account, no sign-up, no fee.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-[#3D2C2C]">Why use a postpartum calculator?</h2>
              <ul className="space-y-5">
                {[
                  "Generic advice doesn't account for your body. A personalised number — based on your height, weight, age, and activity level — is always more useful than a one-size-fits-all guide.",
                  "Breastfeeding calorie needs vary widely by body size and nursing frequency. Eating too little can affect milk supply; a calculator helps you stay in the right range.",
                  "Safe postpartum weight loss depends on how many weeks you are postpartum, not a fixed target date. Starting too soon carries real risks.",
                  "Baby growth charts provide context — turning a worrying number into a normal one, or flagging something worth raising with your health visitor.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#3D2C2C]/80 leading-relaxed text-base">
                    <span className="text-[#E8A0A8] mt-0.5 shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-[#3D2C2C]">Frequently asked questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group bg-[#FFFDF9] rounded-2xl shadow-[0_4px_20px_rgba(232,160,168,0.12)]">
                    <summary className="flex items-center justify-between gap-6 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#3D2C2C] font-medium text-base leading-snug">
                      {q}
                      <span className="text-[#E8A0A8] shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="px-6 pb-6 pt-1 text-[#3D2C2C]/70 leading-relaxed text-sm md:text-base">
                      {a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
