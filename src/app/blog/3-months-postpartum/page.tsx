import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { threeMonthsPostpartumContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/blog/3-months-postpartum',
    },
    title: "3 Months Postpartum: What to Expect for Your Body, Baby and Mind | NurtureCalc",
    description: "Three months postpartum is a turning point — but it does not always feel like one. Here is an honest guide to what is normal at 3 months for your body, your baby and your mental health.",
    openGraph: {
      title: "3 Months Postpartum: What to Expect for Your Body, Baby and Mind | NurtureCalc",
      description: "Three months postpartum is a turning point — but it does not always feel like one. Here is an honest guide to what is normal at 3 months for your body, your baby and your mental health.",
      url: 'https://nurturecalc.com/blog/3-months-postpartum',
      type: 'article',
      publishedTime: '2026-04-13T00:00:00Z',
      authors: ['https://nurturecalc.com/author/nurturecalc-team'],
    },
  };
}

export default function BlogPost() {
  const c = threeMonthsPostpartumContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "3 Months Postpartum: What to Expect for Your Body, Baby and Mind",
    "description": "Three months postpartum is a turning point — but it does not always feel like one. Here is an honest guide to what is normal at 3 months for your body, your baby and your mental health.",
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
    "datePublished": "2026-04-13",
    "dateModified": "2026-04-26",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/3-months-postpartum"
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
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.bodyAtThreeMonths.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.bodyAtThreeMonths.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.bodyAtThreeMonths.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.bodyAtThreeMonths.p3 }} />
            <p>{c.bodyAtThreeMonths.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.weightLoss.title}</h2>
            <p>{c.weightLoss.p1}</p>
            <p>{c.weightLoss.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.weightLoss.p3 }} />
            <p>{c.weightLoss.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.hairLoss.title}</h2>
            <p>{c.hairLoss.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.hairLoss.p2 }} />
            <p>{c.hairLoss.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.hormones.title}</h2>
            <p>{c.hormones.p1}</p>
            <p>{c.hormones.p2}</p>
            <p>{c.hormones.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.mentalHealth.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.mentalHealth.p1 }} />
            <p>{c.mentalHealth.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.mentalHealth.p3 }} />
            <p>{c.mentalHealth.p4}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.notYourself.title}</h2>
            <p>{c.notYourself.p1}</p>
            <p>{c.notYourself.p2}</p>
            <p>{c.notYourself.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.exercise.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.exercise.p1 }} />
            <p>{c.exercise.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.exercise.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: c.exercise.p4 }} />
          </section>

          <div className="bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-12 my-20 not-prose text-center space-y-8 shadow-sm">
            <h3 className="text-3xl font-serif text-[#3D2C2C] leading-tight">{c.cta2.headline}</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">{c.cta2.body}</p>
            <Link
              href={c.cta2.link}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              {c.cta2.button}
            </Link>
          </div>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.breastfeeding.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.breastfeeding.p1 }} />
            <p>{c.breastfeeding.p2}</p>
            <p>{c.breastfeeding.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.babyDevelopment.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.babyDevelopment.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.babyDevelopment.p2 }} />
            <p>{c.babyDevelopment.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.relationship.title}</h2>
            <p>{c.relationship.p1}</p>
            <p>{c.relationship.p2}</p>
            <p>{c.relationship.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.whatToFocus.title}</h2>
            <p>{c.whatToFocus.p1}</p>
            <div className="space-y-4 my-10 not-prose">
              {c.whatToFocus.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#E8A0A8]/10">
                  <div className="shrink-0 w-10 h-10 bg-[#F9E4E8] rounded-full flex items-center justify-center">
                    <span className="text-[#E8A0A8] font-bold font-label text-sm">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="font-serif text-[#3D2C2C] font-semibold mb-1">{item.priority}</p>
                    <p className="text-sm text-[#3D2C2C]/70 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>{c.whatToFocus.p2}</p>
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
            <h3 className="text-3xl font-serif text-[#3D2C2C] leading-tight">{c.cta1.headline}</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">{c.cta1.body}</p>
            <Link
              href={c.cta1.link}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              {c.cta1.button}
            </Link>
          </div>

          <div className="bg-[#E8A0A8]/10 border-2 border-[#E8A0A8]/20 rounded-[3rem] p-12 my-20 not-prose text-center space-y-8 shadow-sm">
            <h3 className="text-3xl font-serif text-[#3D2C2C] leading-tight">{c.cta3.headline}</h3>
            <p className="text-lg text-[#3D2C2C]/70 max-w-2xl mx-auto leading-relaxed">{c.cta3.body}</p>
            <Link
              href={c.cta3.link}
              className="inline-block bg-[#E8A0A8] hover:bg-[#D58A92] text-white px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-[#E8A0A8]/20"
            >
              {c.cta3.button}
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
