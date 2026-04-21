import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { postpartumMealPrepContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/blog/postpartum-meal-prep',
    },
    title: "Postpartum Meal Prep: Eating Well After Birth | NurtureCalc",
    description: "Eating well after having a baby feels impossible when you can barely make a cup of tea. This practical, realistic guide to postpartum meal prep will change that — one batch cook at a time.",
    openGraph: {
      title: "Postpartum Meal Prep: Eating Well After Birth | NurtureCalc",
      description: "Eating well after having a baby feels impossible when you can barely make a cup of tea. This practical, realistic guide to postpartum meal prep will change that — one batch cook at a time.",
      url: 'https://nurturecalc.com/blog/postpartum-meal-prep',
      type: 'article',
      publishedTime: '2026-04-11T00:00:00Z',
      authors: ['https://nurturecalc.com/author/nurturecalc-team'],
    },
  };
}

export default function BlogPost() {
  const c = postpartumMealPrepContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Eating well after having a baby feels impossible when you can barely make a cup of tea. This practical, realistic guide to postpartum meal prep will change that — one batch cook at a time.",
    "author": {
      "@type": "Organization",
      "name": "NurtureCalc Editorial Team",
      "url": "https://nurturecalc.com/author/nurturecalc-team/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NurtureCalc",
      "url": "https://nurturecalc.com"
    },
    "datePublished": "2026-04-11",
    "dateModified": "2026-04-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/postpartum-meal-prep"
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
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
                <span className="bg-[#F9E4E8] text-[#D58A92] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-label">{c.header.category}</span>
                <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide uppercase">{c.header.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-[#3D2C2C] leading-tight mb-6">
                {c.header.title}
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Link href="/author/nurturecalc-team" className="text-sm font-label font-bold tracking-wide text-[#3D2C2C] hover:text-[#E8A0A8] transition-colors">
                  {c.header.author}
                </Link>
                <p className="text-xs font-label text-[#3D2C2C]/70">
                  Written by the NurtureCalc Editorial Team · {c.header.reviewNote}
                </p>
              </div>
            </div>
          </header>

          <section>
            <p>{c.intro.p1}</p>
            <p>{c.intro.p2}</p>
            <p className="text-xl md:text-2xl font-serif italic text-[#3D2C2C] my-12 leading-relaxed border-l-4 border-[#E8A0A8]/30 pl-8 py-2">
              {c.intro.p3}
            </p>
          </section>

          <div className="bg-[#F9E4E8]/30 rounded-3xl p-10 my-20 not-prose">
            <p className="text-xs font-label font-bold tracking-widest uppercase text-[#E8A0A8] mb-4">{c.featuredSnippet.title}</p>
            <p className="text-[#3D2C2C]/80 leading-relaxed">{c.featuredSnippet.content}</p>
          </div>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.whyMatters.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.whyMatters.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.whyMatters.p2 }} />
            <p>{c.whyMatters.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.lowerTheBar.title}</h2>
            <p>{c.lowerTheBar.p1}</p>
            <p>{c.lowerTheBar.p2}</p>
            <p>{c.lowerTheBar.p3}</p>
            <p>{c.lowerTheBar.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.kitchenEssentials.title}</h2>
            <p>{c.kitchenEssentials.p1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 not-prose">
              {c.kitchenEssentials.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#E8A0A8]/10">
                  <div className="shrink-0 w-10 h-10 bg-[#F9E4E8] rounded-full flex items-center justify-center">
                    <span className="text-[#E8A0A8] font-bold font-label text-sm">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="font-serif text-[#3D2C2C] font-semibold mb-1">{item.name}</p>
                    <p className="text-sm text-[#3D2C2C]/70 leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>{c.kitchenEssentials.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.oneHandedMeals.title}</h2>
            <p>{c.oneHandedMeals.p1}</p>
            <ul className="my-8 space-y-3 not-prose">
              {c.oneHandedMeals.meals.map((meal, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="shrink-0 text-[#E8A0A8] font-bold mt-0.5">→</span>
                  <span className="text-[#3D2C2C]/80 leading-relaxed">{meal}</span>
                </li>
              ))}
            </ul>
            <p>{c.oneHandedMeals.p2}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.batchCook.title}</h2>
            <p>{c.batchCook.p1}</p>
            <p>{c.batchCook.p2}</p>
            <p>{c.batchCook.p3}</p>
            <p>{c.batchCook.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.freezerMeals.title}</h2>
            <p>{c.freezerMeals.p1}</p>
            <p>{c.freezerMeals.p2}</p>
            <p>{c.freezerMeals.p3}</p>
            <p>{c.freezerMeals.p4}</p>
            <p>{c.freezerMeals.p5}</p>
            <p>{c.freezerMeals.p6}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.recoverySnacks.title}</h2>
            <p>{c.recoverySnacks.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.recoverySnacks.p2 }} />
            <p>{c.recoverySnacks.p3}</p>
            <p>{c.recoverySnacks.p4}</p>
            <p>{c.recoverySnacks.p5}</p>
            <p>{c.recoverySnacks.p6}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.hydration.title}</h2>
            <p>{c.hydration.p1}</p>
            <p>{c.hydration.p2}</p>
            <p>{c.hydration.p3}</p>
            <p>{c.hydration.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.askForHelp.title}</h2>
            <p>{c.askForHelp.p1}</p>
            <p>{c.askForHelp.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.askForHelp.p3 }} />
            <p>{c.askForHelp.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.breastfeedingSection.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.breastfeedingSection.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.breastfeedingSection.p2 }} />
            <p>{c.breastfeedingSection.p3}</p>
            <p dangerouslySetInnerHTML={{ __html: c.breastfeedingSection.p4 }} />
          </section>

          <section className="bg-[#FFFDF9] border border-[#E8A0A8]/20 rounded-3xl p-10 my-20 not-prose">
            <h2 className="text-3xl font-serif text-[#3D2C2C] mb-4 text-center">{c.faqSection.title}</h2>
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

          <div className="bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-12 my-20 not-prose text-center space-y-8 shadow-sm">
            <h3 className="text-3xl font-serif text-[#3D2C2C] leading-tight">{c.ctaBox2.headline}</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">{c.ctaBox2.body}</p>
            <Link
              href={c.ctaBox2.buttonHref}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              {c.ctaBox2.buttonText}
            </Link>
          </div>

          <div className="bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-12 my-20 not-prose text-center space-y-8 shadow-sm">
            <h3 className="text-3xl font-serif text-[#3D2C2C] leading-tight">{c.cta.headline}</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">{c.cta.body}</p>
            <Link
              href={c.cta.link}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              {c.cta.button}
            </Link>
          </div>

          <footer className="not-prose border-t border-[#E8A0A8]/20 pt-16">
            <div className="mb-16">
              <p className="text-[10px] text-[#3D2C2C]/40 leading-relaxed uppercase tracking-wider font-label max-w-2xl">
                Sources: {c.sources.join(" ")}
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#3D2C2C] mb-8 uppercase tracking-tight">You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.relatedPosts.map((post, idx) => (
                <Link key={idx} href={`/blog/${post.slug}`} className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
                  <span className="text-xs text-[#E8A0A8] font-bold uppercase tracking-wider font-label block mb-3">{post.category}</span>
                  <h4 className="text-xl font-serif text-[#3D2C2C] group-hover:text-[#E8A0A8] leading-snug">{post.title}</h4>
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
