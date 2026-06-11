import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './posts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => {
    return z.object({
      type: z.enum(['review', 'news']),
      medium: z.enum(['videogame', 'comic']),
      title: z.string(),
      pubDate: z.date(),
      hero: image()
    });
  },
});

export const collections = { posts };
