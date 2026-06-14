import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/Card";
import { blogPosts } from "@/lib/blog-posts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Postpartum Fitness Articles — Safe Return to Exercise After Birth | NurtureCalc",
    description:
      "Evidence-based guides to rebuilding fitness safely after birth — return-to-exercise timelines, strength training, and postpartum core rehabilitation.",
    alternates: {
      canonical: "/blog/fitness",
    },
    openGraph: {
      url: "https://nurturecalc.com/blog/fitness",
      type: "article",
      title:
        "Postpartum Fitness Articles — Safe Return to Exercise After Birth | NurtureCalc",
      description:
        "Evidence-based guides to rebuilding fitness safely after birth — return-to-exercise timelines, strength training, and postpartum core rehabilitation.",
    },
  };
}

const filtered = blogPosts.filter((p) => p.category === "Fitness");

export default function FitnessCategory() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nurturecalc.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://nurturecalc.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Postpartum Fitness",
                item: "https://nurturecalc.com/blog/fitness",
              },
            ],
          }),
        }}
      />

      <main className="flex-1 max-w-5xl mx-auto w-full py-16 px-6">
        <header className="space-y-4 border-b border-[#E8A0A8]/20 pb-12 mb-12">
          <Link
            href="/blog/"
            className="inline-flex items-center font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-sm transition-colors"
          >
            ← All articles
          </Link>
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
            Postpartum Fitness
          </h1>
          <p className="text-[#E8A0A8] text-xl font-serif italic">
            Safe, progressive guides to rebuilding strength and fitness after birth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filtered.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#F9E4E8] text-[#D58A92] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-label">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-serif text-[#3D2C2C] mb-4 leading-snug">
                  {post.title}
                </h2>

                <p className="text-[#3D2C2C]/70 mb-8 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-sm transition-colors mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-[#3D2C2C]/60 italic text-center">
          More postpartum fitness guides are on the way. In the meantime, the tool below gives
          you a personalised week-by-week return-to-exercise plan.
        </p>

        <div className="mt-6 bg-[#FFFDF9] rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-serif text-[#3D2C2C] mb-3">
            When is it safe to start exercising again?
          </h3>
          <p className="text-[#3D2C2C]/70 leading-relaxed mb-6">
            The Return-to-Exercise Timeline tool gives you a week-by-week plan based on your
            delivery type and recovery symptoms — from first walks to running and lifting.
          </p>
          <Link
            href="/exercise-timeline/"
            className="inline-block bg-gradient-to-r from-[#E8A0A8] to-[#D58A92] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            Open Exercise Timeline →
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-sm transition-colors"
          >
            → Browse all articles
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-[#E8A0A8]/20 text-center">
          <p className="text-sm text-[#3D2C2C]/50 font-label tracking-wide uppercase mb-4">More from NurtureCalc</p>
          <div className="flex flex-wrap justify-center items-center">
            <Link href="/blog/recovery/" className="text-[#E8A0A8] hover:text-[#D58A92] font-label text-sm font-bold uppercase tracking-wider transition-colors">Recovery</Link>
            <span className="mx-3 text-[#3D2C2C]/20"> | </span>
            <Link href="/blog/nutrition/" className="text-[#E8A0A8] hover:text-[#D58A92] font-label text-sm font-bold uppercase tracking-wider transition-colors">Nutrition</Link>
            <span className="mx-3 text-[#3D2C2C]/20"> | </span>
            <span className="text-[#3D2C2C]/30 font-label text-sm font-bold uppercase tracking-wider cursor-default">Fitness</span>
            <span className="mx-3 text-[#3D2C2C]/20"> | </span>
            <Link href="/blog/baby-health/" className="text-[#E8A0A8] hover:text-[#D58A92] font-label text-sm font-bold uppercase tracking-wider transition-colors">Baby Health</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
