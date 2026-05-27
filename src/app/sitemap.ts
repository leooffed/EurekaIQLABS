import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studio.scribel.cm';

  // Pages statiques de ton site
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/mention-legal`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  // Si tu as des projets dynamiques (ex. dans un dossier /portfolio/[slug])
  // Remplace par un appel à ton API ou à une fonction qui liste les slugs.
  // const projets = await getProjets(); // ex: [{ slug: 'hotel-xxx' }]
  // const dynamicPages = projets.map((p) => ({
  //   url: `${baseUrl}/portfolio/${p.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.8,
  // }));

  return [...staticPages];
}