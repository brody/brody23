import { z } from 'astro:content'

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
	.strict()

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
	.strict()

export const workSchema = z
	.object({
		pubDatetime: z.date(),
		title: z.string(),
		entrySlug: z.string().optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		ogImage: z.string().optional(),
		description: z.string(),
		featuredImage: z.string().optional(),
		tags: z.array(z.string()).default(['others']),
	})
	.strict()

export type BlogFrontmatter = z.infer<typeof journalSchema>
export type GardenFrontmatter = z.infer<typeof gardenSchema>
export type WorkFrontmatter = z.infer<typeof workSchema>
