import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { weekPages } from "@/data/week-pages";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: "/postpartum-week-by-week",
    },
    title: "Postpartum Week by Week: Your Complete Recovery Guide | NurtureCalc",
    description:
      "A week-by-week guide to postpartum recovery, weeks 1 through 12. What's normal, what to watch for, and what your body needs at each stage.",
    openGraph: {
      title: "Postpartum Week by Week: Your Complete Recovery Guide | NurtureCalc",
      description:
        "A week-by-week guide to postpartum recovery, weeks 1 through 12. What's normal, what to watch for, and what your body needs at each stage.",
      url: "https://nurturecalc.com/postpartum-week-by-week",
      type: "article",
    },
  };
}

function truncate(text: string, length: number) {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}...`;
}

export default function PostpartumWeekByWeek() {
  const sortedWeeks = [...weekPages].sort((a, b) => a.weekNumber - b.weekNumber);

  const breadcrumbJsonLd = {
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
        name: "Postpartum Week by Week",
        item: "https://nurturecalc.com/postpartum-week-by-week",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full py-16 px-6">
        <header className="space-y-4 text-center border-b border-[#E8A0A8]/20 pb-12 mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
            Postpartum Week by Week
          </h1>
          <p className="text-[#E8A0A8] text-xl font-serif italic">
            A complete guide to what&apos;s happening in your body and mind, week by week, from birth through 12 weeks.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedWeeks.map((week) => (
            <div
              key={week.slug}
              className="bg-[#FFFDF9] rounded-2xl p-6 shadow-[0_10px_40px_rgba(232,160,168,0.15)] hover:shadow-[0_10px_40px_rgba(232,160,168,0.3)] transition-shadow duration-300 flex flex-col"
            >
              <span className="font-label uppercase tracking-wider text-xs text-[#E8A0A8] font-bold mb-2">
                Week {week.weekNumber}
              </span>
              <h2 className="font-serif text-xl text-[#3D2C2C] mb-3 leading-snug">
                {week.h1}
              </h2>
              <p className="text-[#3D2C2C]/70 text-sm leading-relaxed mb-6 flex-1">
                {truncate(week.intro, 120)}
              </p>
              <Link
                href={`/${week.slug}/`}
                className="inline-flex font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-sm transition-colors mt-auto"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
