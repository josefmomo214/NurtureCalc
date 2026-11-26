import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import { conditionPages } from '@/data/condition-pages';
import { weekPages } from '@/data/week-pages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nurturecalc.com';

  const staticRoutes = [
    '',
    '/breastfeeding-calories',
    '/safe-weight-loss',
    '/exercise-timeline',
    '/pelvic-floor-recovery',
    '/baby-weight-percentile',
    '/about',
    '/contact',
    '/editorial-standards',
    '/affiliate-disclosure',
    '/privacy-policy',
    '/author/nurturecalc-team',
    '/blog',
    '/guides',
    '/postpartum-week-by-week',
    '/blog/baby-health',
    '/blog/fitness',
    '/blog/nutrition',
    '/blog/recovery',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/blog/') || route.startsWith('/guides') || route.includes('week') ? 0.8 : 0.9,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const conditionRoutes = conditionPages.map((page) => ({
    url: `${baseUrl}/${page.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const weekRoutes = weekPages.map((page) => ({
    url: `${baseUrl}/${page.slug}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Combine and deduplicate by URL
  const allRoutesMap = new Map<string, MetadataRoute.Sitemap[0]>();

  for (const r of [...staticRoutes, ...blogRoutes, ...conditionRoutes, ...weekRoutes]) {
    allRoutesMap.set(r.url, r);
  }

  return Array.from(allRoutesMap.values());
}
