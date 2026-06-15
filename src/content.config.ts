import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './posts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => {
    return z.discriminatedUnion('type', [
      z.object({
        type: z.literal('review'),
        medium: z.enum(['videogames', 'comics']),
        title: z.string(),
        pubDate: z.date(),
        hero: image(),
        heroBig: image(),
        score: z.number().min(0).max(100)
      }),
      z.object({
        type: z.enum('news'),
        medium: z.enum(['videogames', 'comics']),
        title: z.string(),
        pubDate: z.date(),
        hero: image(),
        heroBig: image(),
      })
    ]);
  }
});

export const collections = { posts };
