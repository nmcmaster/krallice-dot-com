import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const albums = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    releaseDate: z.coerce.date(),
    coverArt: z.string().optional(),
    tracks: z.array(z.string()).default([]),
    engineering: z.string().optional(),
    bandcampEmbed: z.string().optional(),
    ampwallEmbed: z.string().optional(),
  }),
});

export const collections = { albums };
