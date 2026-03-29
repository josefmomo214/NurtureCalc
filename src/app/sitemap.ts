import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://nurturecalc.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: 'https://nurturecalc.com/safe-weight-loss', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://nurturecalc.com/breastfeeding-calories', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://nurturecalc.com/exercise-timeline', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://nurturecalc.com/pelvic-floor-recovery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://nurturecalc.com/baby-weight-percentile', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://nurturecalc.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/safe-weight-loss-breastfeeding', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/breastfeeding-calorie-needs', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/returning-to-exercise-after-birth', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/pelvic-floor-after-birth', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/understanding-baby-growth-chart', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/how-long-to-lose-baby-weight', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/postpartum-nutrition-guide', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/c-section-recovery-timeline', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/postpartum-pelvic-floor-dysfunction', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/baby-growth-spurts', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/blog/best-postnatal-vitamins', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://nurturecalc.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://nurturecalc.com/author/nurturecalc-team', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://nurturecalc.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://nurturecalc.com/affiliate-disclosure', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ]
}
