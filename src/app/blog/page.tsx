import { Card } from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from 'next';
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: 'Postpartum Health Blog — Science-Based Advice | NurtureCalc',
  description: 'Science-based articles on postpartum recovery, breastfeeding nutrition, safe exercise and pelvic floor health. Written for new mothers, grounded in medical guidelines.',
};

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
