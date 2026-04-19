import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { postpartumFitnessContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: "/blog/postpartum-fitness/",
    },
    title: "Postpartum Fitness: How to Rebuild Strength Safely After Birth | NurtureCalc",
    description:
      "Rebuilding fitness after having a baby is not about bouncing back — it is about building forward. Here is the honest, science-based guide to postpartum strength that nobody gives you.",
    openGraph: {
      title: "Postpartum Fitness: How to Rebuild Strength Safely After Birth | NurtureCalc",
      description:
        "Rebuilding fitness after having a baby is not about bouncing back — it is about building forward. Here is the honest, science-based guide to postpartum strength that nobody gives you.",
      url: "https://nurturecalc.com/blog/postpartum-fitness",
      type: "article",
      publishedTime: "2026-04-10T00:00:00Z",
      authors: ["https://nurturecalc.com/author/nurturecalc-team"],
    },
  };
}

export default function BlogPost() {
  const c = postpartumFitnessContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.header.title,
    description:
      "Rebuilding fitness after having a baby is not about bouncing back — it is about building forward. Here is the honest, science-based guide to postpartum strength.",
    author: {
      "@type": "Organization",
      name: "NurtureCalc Editorial Team",
      url: "https://nurturecalc.com/author/nurturecalc-team/",
    },
    publisher: {
      "@type": "Organization",
      name: "NurtureCalc",
      url: "https://nurturecalc.com",
    },
    datePublished: "2026-04-10",
    dateModified: "2026-04-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/postpartum-fitness",
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full py-16 px-6">
        <article className="prose prose-rose lg:prose-xl max-w-none text-[#3D2C2C]/80 font-sans leading-relaxed">

          <header className="mb-16 not-prose border-b border-[#E8A0A8]/20 pb-12 text-center">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F9E4E8] text-[#D58A92] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-label">
                  {c.header.category}
                </span>
                <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide uppercase">
                  {c.header.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight mb-6">
                {c.header.title}
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link
                  href="/author/nurturecalc-team"
                  className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors"
                >
                  {c.header.author}
                </Link>
                <p className="text-xs font-label text-[#3D2C2C]/70">
                  Written by the NurtureCalc Editorial Team · {c.header.reviewNote}
                </p>
              </div>
            </div>
          </header>

          {/* Intro */}
          <section>
            <p>{c.intro.p1}</p>
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] my-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              {c.intro.p2}
            </p>
            <p>{c.intro.p3}</p>
          </section>

          {/* Why Postpartum Fitness Is Different */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.whyDifferent.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: c.whyDifferent.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.whyDifferent.p2 }} />
            <p>{c.whyDifferent.p3}</p>
            <p>{c.whyDifferent.p4}</p>
          </section>

          {/* Four Foundations */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.fourFoundations.title}
            </h2>
            <p>{c.fourFoundations.p1}</p>
            <p>{c.fourFoundations.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.fourFoundations.p3 }} />
            <p>{c.fourFoundations.p4}</p>
            <p>{c.fourFoundations.p5}</p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.timeline.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: c.timeline.p1 }} />

            <div className="my-10 space-y-4 not-prose">
              {[
                { phase: "Weeks 0–6", text: c.timeline.p2 },
                { phase: "Weeks 6–12", text: c.timeline.p3 },
                { phase: "Months 3–6", text: c.timeline.p4 },
                { phase: "Months 6–12", text: c.timeline.p5 },
              ].map(({ phase, text }) => (
                <div
                  key={phase}
                  className="flex gap-5 p-5 bg-white rounded-2xl border border-[#E8A0A8]/20 shadow-sm"
                >
                  <span className="shrink-0 text-xs font-label font-bold uppercase tracking-wider text-[#E8A0A8] pt-1 w-24">
                    {phase}
                  </span>
                  <p
                    className="text-sm text-[#3D2C2C]/70 leading-relaxed m-0"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Exercises */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.exercises.title}
            </h2>
            <p>{c.exercises.p1}</p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              {c.exercises.list.map((ex) => (
                <div
                  key={ex.name}
                  className="p-6 bg-[#F9E4E8]/30 rounded-2xl border border-[#E8A0A8]/10"
                >
                  <h4 className="font-label font-bold text-[#E8A0A8] uppercase tracking-wider text-xs mb-3">
                    {ex.name}
                  </h4>
                  <p className="text-[10px] text-[#3D2C2C]/50 font-label uppercase tracking-wider mb-2">
                    {ex.target}
                  </p>
                  <p className="text-sm text-[#3D2C2C]/70 leading-relaxed mb-3">{ex.why}</p>
                  <p className="text-xs text-[#3D2C2C]/60 italic border-t border-[#E8A0A8]/20 pt-3">
                    <strong className="not-italic text-[#3D2C2C]/80">Cue:</strong> {ex.cue}
                  </p>
                </div>
              ))}
            </div>

            <p>{c.exercises.p2}</p>
          </section>

          {/* Walking */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.walking.title}
            </h2>
            <p>{c.walking.p1}</p>
            <p>{c.walking.p2}</p>
            <p>{c.walking.p3}</p>
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] my-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              {c.walking.p4}
            </p>
          </section>

          {/* Strength Training */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.strengthTraining.title}
            </h2>
            <p>{c.strengthTraining.p1}</p>
            <p>{c.strengthTraining.p2}</p>
            <p>{c.strengthTraining.p3}</p>
          </section>

          {/* Running */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.running.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: c.running.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.running.p2 }} />
            <p>{c.running.p3}</p>
            <p>{c.running.p4}</p>
          </section>

          {/* Diastasis Recti */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.diastasisRecti.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: c.diastasisRecti.p1 }} />
            <p>{c.diastasisRecti.p2}</p>
          </section>

          {/* Nutrition */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.nutrition.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: c.nutrition.p1 }} />
            <p>{c.nutrition.p2}</p>
            <p>{c.nutrition.p3}</p>
          </section>

          {/* Rest Is Training */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.restIsTraining.title}
            </h2>
            <p>{c.restIsTraining.p1}</p>
            <p>{c.restIsTraining.p2}</p>
            <p>{c.restIsTraining.p3}</p>
          </section>

          {/* Signs You Are Doing Too Much */}
          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">
              {c.tooMuchTooSoon.title}
            </h2>
            <p>{c.tooMuchTooSoon.p1}</p>

            <ul className="not-prose space-y-4 my-8">
              {c.tooMuchTooSoon.signs.map((sign) => (
                <li
                  key={sign.label}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-[#E8A0A8]/20 shadow-sm text-sm text-[#3D2C2C]/70"
                >
                  <span className="text-[#E8A0A8] font-bold text-lg leading-none shrink-0">!</span>
                  <div>
                    <strong className="text-[#3D2C2C]">{sign.label}:</strong> {sign.detail}
                  </div>
                </li>
              ))}
            </ul>

            <p dangerouslySetInnerHTML={{ __html: c.tooMuchTooSoon.p2 }} />
          </section>

          {/* FAQ */}
          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-4 text-center">
              {c.faqSection.title}
            </h2>
            <p className="text-[#3D2C2C]/70 text-center mb-10">{c.faqSection.p1}</p>
            <div className="space-y-8">
              {c.faqs.map((faq, idx) => (
                <div key={idx}>
                  <h4 className="font-serif text-[#3D2C2C] text-xl mb-3">{faq.q}</h4>
                  <p className="text-[#3D2C2C]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="not-prose space-y-6 my-20">
            {c.ctas.map((cta, idx) => (
              <div
                key={idx}
                className="bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-10 text-center space-y-5 shadow-sm"
              >
                <h3 className="text-2xl font-serif text-[#3D2C2C] leading-tight">{cta.headline}</h3>
                <p className="text-base text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">
                  {cta.body}
                </p>
                <Link
                  href={cta.link}
                  className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
                >
                  {cta.button}
                </Link>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="not-prose p-6 bg-[#F9E4E8]/50 rounded-xl mt-12 mb-16">
            <p className="text-sm text-[#3D2C2C]/60 italic">
              <strong>Disclaimer:</strong> Always get clearance from your doctor, midwife, or women&apos;s health physiotherapist before returning to or intensifying exercise after birth. Stop immediately if you experience pain, leaking, or pelvic heaviness.
            </p>
          </div>

          {/* Sources */}
          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: {c.sources.join(" ")}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">
              You might also like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.relatedPosts.map((post, idx) => (
                <Link
                  key={idx}
                  href={`/blog/${post.slug}/`}
                  className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
