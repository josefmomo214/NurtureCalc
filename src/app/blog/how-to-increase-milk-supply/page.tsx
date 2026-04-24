import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { howToIncreaseMilkSupplyContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/blog/how-to-increase-milk-supply',
    },
    title: "How to Increase Milk Supply: What Actually Works (and What Doesn't) | NurtureCalc",
    description: "Worried your milk supply is dropping? This evidence-based guide covers every proven method to increase breast milk production — from feeding techniques to foods, supplements and pumping strategies.",
    openGraph: {
      title: "How to Increase Milk Supply: What Actually Works (and What Doesn't) | NurtureCalc",
      description: "Worried your milk supply is dropping? This evidence-based guide covers every proven method to increase breast milk production — from feeding techniques to foods, supplements and pumping strategies.",
      url: 'https://nurturecalc.com/blog/how-to-increase-milk-supply',
      type: 'article',
      publishedTime: '2026-04-12T00:00:00Z',
      authors: ['https://nurturecalc.com/author/nurturecalc-team'],
    },
  };
}

export default function BlogPost() {
  const c = howToIncreaseMilkSupplyContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.header.title,
    "description": "Worried your milk supply is dropping? This evidence-based guide covers every proven method to increase breast milk production — from feeding techniques to foods, supplements and pumping strategies.",
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
    "datePublished": "2026-04-12",
    "dateModified": "2026-04-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/how-to-increase-milk-supply"
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
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.howItWorks.title}</h2>
            <p>{c.howItWorks.p1}</p>
            <p>{c.howItWorks.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.howItWorks.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.enoughMilk.title}</h2>
            <p>{c.enoughMilk.p1}</p>
            <p>{c.enoughMilk.p2}</p>
            <p>{c.enoughMilk.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.lowSupplySigns.title}</h2>
            <p>{c.lowSupplySigns.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.lowSupplySigns.p2 }} />
            <p>{c.lowSupplySigns.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.causes.title}</h2>
            <p>{c.causes.p1}</p>
            <p>{c.causes.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.causes.p3 }} />
            <p>{c.causes.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.increaseSupply.title}</h2>
            <p>{c.increaseSupply.p1}</p>
            <p>{c.increaseSupply.p2}</p>
            <p>{c.increaseSupply.p3}</p>
            <p>{c.increaseSupply.p4}</p>
            <p>{c.increaseSupply.p5}</p>
            <p>{c.increaseSupply.p6}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.foods.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.foods.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.foods.p2 }} />
            <p>{c.foods.p3}</p>
            <p dangerouslySetInnerHTML={{ __html: c.foods.p4 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.pumping.title}</h2>
            <p>{c.pumping.p1}</p>
            <p>{c.pumping.p2}</p>
            <p>{c.pumping.p3}</p>
            <p>{c.pumping.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.supplements.title}</h2>
            <p>{c.supplements.p1}</p>
            <p>{c.supplements.p2}</p>
            <p>{c.supplements.p3}</p>
            <p>{c.supplements.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.returningToWork.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.returningToWork.p1 }} />
            <p>{c.returningToWork.p2}</p>
            <p>{c.returningToWork.p3}</p>
            <p>{c.returningToWork.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.reducesSupply.title}</h2>
            <p>{c.reducesSupply.p1}</p>
            <p>{c.reducesSupply.p2}</p>
            <p>{c.reducesSupply.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.lactationConsultant.title}</h2>
            <p>{c.lactationConsultant.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.lactationConsultant.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.lactationConsultant.p3 }} />
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
