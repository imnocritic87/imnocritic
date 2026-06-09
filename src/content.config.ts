import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ base: './reviews', pattern: '**/*.{md,mdx}' })
});

export const collections = { reviews };
