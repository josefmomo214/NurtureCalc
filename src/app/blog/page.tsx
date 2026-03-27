import { Card } from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postpartum Health Blog — Science-Based Advice | NurtureCalc',
  description: 'Science-based articles on postpartum recovery, breastfeeding nutrition, safe exercise and pelvic floor health. Written for new mothers, grounded in medical guidelines.',
};

const blogPosts = [
  {
    title: "Postpartum Nutrition: What to Eat to Heal, Recover and Thrive",
    excerpt: "A complete postpartum nutrition guide covering the key nutrients new mothers need for healing, breastfeeding and sustained energy in the fourth trimester.",
    slug: "postpartum-nutrition-guide",
    category: "Nutrition",
    readTime: "15 min read",
  },
  {
    title: "How Long Does It Take to Lose the Baby Weight? (An Honest Answer)",
    excerpt: "Most mothers wonder how long postpartum weight loss really takes. An honest, science-based answer with realistic timelines for breastfeeding and non-breastfeeding mothers.",
    slug: "how-long-to-lose-baby-weight",
    category: "Recovery",
    readTime: "12 min read",
  },
  {
    title: "Is it Safe to Lose Weight While Breastfeeding?",
    excerpt: "Find out whether it's safe to lose weight while breastfeeding, how quickly you can lose weight postpartum, and what affects your milk supply.",
    slug: "safe-weight-loss-breastfeeding",
    category: "Nutrition",
    readTime: "5 min read",
  },
  {
    title: "How Many Extra Calories Do You Need When Breastfeeding?",
    excerpt: "Breastfeeding burns hundreds of extra calories a day. Learn how many calories you actually need, what affects your intake, and how to eat well for you and your baby.",
    slug: "breastfeeding-calorie-needs",
    category: "Nutrition",
    readTime: "4 min read",
  },
  {
    title: "A Gentle Guide to Returning to Exercise After Birth",
    excerpt: "When is it safe to exercise after giving birth? Learn the evidence-based timeline for returning to exercise after a vaginal birth or C-section.",
    slug: "returning-to-exercise-after-birth",
    category: "Fitness",
    readTime: "6 min read",
  },
  {
    title: "What is the Pelvic Floor and Why Does it Matter After Birth?",
    excerpt: "Learn what the pelvic floor is, how birth affects it, and what you can do to support your recovery. Includes signs of pelvic floor dysfunction to watch for.",
    slug: "pelvic-floor-after-birth",
    category: "Recovery",
    readTime: "5 min read",
  },
  {
    title: "Understanding Your Baby's Growth Chart",
    excerpt: "Growth charts can feel confusing and worrying. Learn what percentiles actually mean, what WHO growth standards are, and when to talk to your doctor.",
    slug: "understanding-baby-growth-chart",
    category: "Baby Health",
    readTime: "5 min read",
  },
];

export default function BlogIndex() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      <Header />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-16 px-6">
        <header className="space-y-4 text-center border-b border-[#E8A0A8]/20 pb-12 mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#3D2C2C] font-serif">
            The NurtureCalc Blog
          </h1>
          <p className="text-[#E8A0A8] text-xl font-serif italic">
            Gentle, science-based reading for new mothers
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300">
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
                  href={`/blog/${post.slug}`}
                  className="inline-flex font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-sm transition-colors mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
