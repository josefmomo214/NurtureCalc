"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

const CATEGORIES = ["All", "Recovery", "Nutrition", "Fitness", "Baby Health"] as const;
type Category = typeof CATEGORIES[number];

const CATEGORY_LINKS = [
  { label: "Recovery Articles", href: "/blog/recovery/" },
  { label: "Nutrition Articles", href: "/blog/nutrition/" },
  { label: "Fitness Articles", href: "/blog/fitness/" },
  { label: "Baby Health Articles", href: "/blog/baby-health/" },
];

export default function BlogIndexContent() {
  const [selected, setSelected] = useState<Category>("All");

  const filtered = selected === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === selected);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase font-label transition-all ${
              selected === cat
                ? "bg-[#E8A0A8] text-white shadow-sm"
                : "border border-[#E8A0A8] text-[#E8A0A8] bg-transparent hover:bg-[#F9E4E8]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 mb-12">
        <span className="text-xs text-[#3D2C2C]/50 font-label tracking-wide">Browse by topic:</span>
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase font-label border border-[#E8A0A8] text-[#E8A0A8] bg-transparent hover:bg-[#F9E4E8] transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {filtered.map((post) => (
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
                href={`/blog/${post.slug}/`}
                className="inline-flex font-label uppercase tracking-widest text-[#E8A0A8] hover:text-[#D58A92] font-bold text-sm transition-colors mt-auto"
              >
                Read more →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
