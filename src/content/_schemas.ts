import { z } from 'astro:content';

export const journalSchema = z
  .object({
    pubDatetime: z.date(),
    title: z.string(),
    entrySlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export const gardenSchema = z
  .object({
    pubDatetime: z.date(),
    title: z.string(),
    entrySlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string().optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof journalSchema>;
export type GardenFrontmatter = z.infer<typeof gardenSchema>;
