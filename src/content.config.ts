import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const albums = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    releaseDate: z.coerce.date(),
    coverArt: z.string().optional(),
    tracks: z
      .array(
        z
          .union([
            z.string(),
            z
              .object({
                title: z.string(),
                initiated: z.string().optional(),
                written: z.string().optional(),
                lyrics: z.string().optional(),
                lyricsBy: z.string().optional(),
              })
              .refine((t) => !(t.initiated && t.written), {
                message: 'A track takes either `initiated` or `written`, not both',
              }),
          ])
          .transform((t) => (typeof t === 'string' ? { title: t } : t)),
      )
      .default([]),
    engineering: z.string().optional(),
    lineup: z.array(z.string()).default([]),
    bandcampEmbed: z.string().optional(),
    ampwallUrl: z.string().url().optional(),
  }),
});

export const collections = { albums };
