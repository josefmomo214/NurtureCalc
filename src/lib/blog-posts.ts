export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "postpartum-nutrition-guide",
    title: "Postpartum Nutrition: What to Eat to Heal, Recover and Thrive",
    excerpt: "A complete postpartum nutrition guide covering the key nutrients new mothers need for healing, breastfeeding and sustained energy in the fourth trimester.",
    category: "Nutrition",
    readTime: "15 min read",
    publishedAt: "2026-03-27",
  },
  {
    slug: "how-long-to-lose-baby-weight",
    title: "How Long Does It Take to Lose the Baby Weight? (An Honest Answer)",
    excerpt: "Most mothers wonder how long postpartum weight loss really takes. An honest, science-based answer with realistic timelines for breastfeeding and non-breastfeeding mothers.",
    category: "Recovery",
    readTime: "12 min read",
    publishedAt: "2026-03-27",
  },
  {
    slug: "safe-weight-loss-breastfeeding",
    title: "Is it Safe to Lose Weight While Breastfeeding?",
    excerpt: "Find out whether it's safe to lose weight while breastfeeding, how quickly you can lose weight postpartum, and what affects your milk supply.",
    category: "Nutrition",
    readTime: "5 min read",
    publishedAt: "2026-03-25",
  },
  {
    slug: "breastfeeding-calorie-needs",
    title: "How Many Extra Calories Do You Need When Breastfeeding?",
    excerpt: "Breastfeeding burns hundreds of extra calories a day. Learn how many calories you actually need, what affects your intake, and how to eat well for you and your baby.",
    category: "Nutrition",
    readTime: "4 min read",
    publishedAt: "2026-03-20",
  },
  {
    slug: "returning-to-exercise-after-birth",
    title: "A Gentle Guide to Returning to Exercise After Birth",
    excerpt: "When is it safe to exercise after giving birth? Learn the evidence-based timeline for returning to exercise after a vaginal birth or C-section.",
    category: "Fitness",
    readTime: "6 min read",
    publishedAt: "2026-03-15",
  },
  {
    slug: "pelvic-floor-after-birth",
    title: "What is the Pelvic Floor and Why Does it Matter After Birth?",
    excerpt: "Learn what the pelvic floor is, how birth affects it, and what you can do to support your recovery. Includes signs of pelvic floor dysfunction to watch for.",
    category: "Recovery",
    readTime: "5 min read",
    publishedAt: "2026-03-10",
  },
  {
    slug: "understanding-baby-growth-chart",
    title: "Understanding Your Baby's Growth Chart",
    excerpt: "Growth charts can feel confusing and worrying. Learn what percentiles actually mean, what WHO growth standards are, and when to talk to your doctor.",
    category: "Baby Health",
    readTime: "5 min read",
    publishedAt: "2026-03-05",
  },
];
