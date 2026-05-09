import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { breastfeedingPostpartumContent } from "./content";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: '/blog/breastfeeding-postpartum/',
    },
    title: "Breastfeeding Postpartum: The Complete Guide | NurtureCalc",
    description: "Everything you need to know about breastfeeding postpartum — from the first latch to weaning. What to expect, what's normal, and how to protect your body while nursing.",
    openGraph: {
      title: "Breastfeeding Postpartum: The Complete Guide | NurtureCalc",
      description: "Everything you need to know about breastfeeding postpartum — from the first latch to weaning. What to expect, what's normal, and how to protect your body while nursing.",
      url: 'https://nurturecalc.com/blog/breastfeeding-postpartum/',
      type: 'article',
      publishedTime: '2026-05-02T00:00:00Z',
      authors: ['https://nurturecalc.com/author/nurturecalc-team'],
    },
  };
}

export default function BlogPost() {
  const c = breastfeedingPostpartumContent;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Breastfeeding Postpartum: What to Expect, What's Normal, and How to Protect Your Body",
    "description": "Everything you need to know about breastfeeding postpartum — from the first latch to weaning. What to expect, what's normal, and how to protect your body while nursing.",
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
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://nurturecalc.com/blog/breastfeeding-postpartum/"
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

          <div className="not-prose my-12 rounded-3xl overflow-hidden">
            <img src="/images/breastfeeding-postpartum-hero.webp" alt="Mother breastfeeding newborn baby in soft morning light" width={800} height={450} className="w-full object-cover" />
          </div>

          <section>
            <p>{c.intro.p1}</p>
            <p>{c.intro.p2}</p>
            <p>{c.intro.p3}</p>
          </section>

          <div className="bg-[#F9E4E8]/30 rounded-3xl p-10 my-20 not-prose">
            <p className="text-xs font-label font-bold tracking-widest uppercase text-[#E8A0A8] mb-4">{c.featuredSnippet.title}</p>
            <p className="text-[#3D2C2C]/80 leading-relaxed">{c.featuredSnippet.content}</p>
          </div>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.firstHours.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.firstHours.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.firstHours.p2 }} />
            <p>{c.firstHours.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.milkComing.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.milkComing.p1 }} />
            <p>{c.milkComing.p2}</p>
            <p>{c.milkComing.p3}</p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.establishingSupply.title}</h2>
            <p>{c.establishingSupply.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.establishingSupply.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.establishingSupply.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: c.establishingSupply.p4 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.challenges.title}</h2>
            <p>{c.challenges.intro}</p>
            {c.challenges.items.map((item, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: `<strong>${item.name}:</strong> ${item.text}` }} />
            ))}
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.bodyEffects.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.bodyEffects.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.bodyEffects.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.bodyEffects.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: c.bodyEffects.p4 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.mentalHealth.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.mentalHealth.p1 }} />
            <p>{c.mentalHealth.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.mentalHealth.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.returningToWork.title}</h2>
            <p>{c.returningToWork.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.returningToWork.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.returningToWork.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.howLong.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.howLong.p1 }} />
            <p>{c.howLong.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.howLong.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.weaning.title}</h2>
            <p>{c.weaning.p1}</p>
            <p>{c.weaning.p2}</p>
            <p dangerouslySetInnerHTML={{ __html: c.weaning.p3 }} />
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3D2C2C] mt-20 mb-8">{c.formulaMixed.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: c.formulaMixed.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: c.formulaMixed.p2 }} />

            <div className="not-prose my-10 overflow-x-auto">
              <p className="font-serif text-[#3D2C2C] text-xl font-semibold mb-4">{c.glanceTable.title}</p>
              <table className="w-full text-left border-collapse min-w-[500px] shadow-sm rounded-xl overflow-hidden border border-[#E8A0A8]/20">
                <thead className="bg-[#F9E4E8]/50">
                  <tr>
                    {c.glanceTable.headers.map((h, idx) => (
                      <th key={idx} className="py-4 px-6 font-serif text-[#3D2C2C] text-base font-bold border-b border-[#E8A0A8]/20">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white text-[#3D2C2C]/80 text-sm">
                  {c.glanceTable.rows.map((row, idx) => (
                    <tr key={idx} className={`border-b border-[#E8A0A8]/10 hover:bg-[#F9E4E8]/10 transition-colors${idx % 2 === 1 ? ' bg-[#FFFDF9]' : ''}`}>
                      <td className="py-4 px-6 font-semibold text-[#3D2C2C]">{row[0]}</td>
                      <td className="py-4 px-6">{row[1]}</td>
                      <td className="py-4 px-6">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-[#F5F0EB] border border-[#3D2C2C]/10 rounded-3xl p-8 my-12 not-prose">
            <p className="text-xs font-label font-bold tracking-widest uppercase text-[#3D2C2C]/50 mb-3">Medical Disclaimer</p>
            <p className="text-sm text-[#3D2C2C]/70 leading-relaxed">{c.disclaimer.content}</p>
          </div>

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
                <Link key={idx} href={`/blog/${post.slug}/`} className="group block p-8 bg-white rounded-2xl border border-[#E8A0A8]/10 hover:border-[#E8A0A8]/30 hover:shadow-xl transition-all duration-300">
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
