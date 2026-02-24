import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.martiotokurtarma.com', // Gerçek alan adınızla değiştirmeyi unutmayın
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}