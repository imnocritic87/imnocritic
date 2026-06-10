import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ base: './reviews', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => {
    return z.object({
      title: z.string(),
      hero: image()
    });
  },
});

export const collections = { reviews };
