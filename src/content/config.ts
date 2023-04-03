import { defineCollection } from 'astro:content';
import { journalSchema } from './_schemas';

const journal = defineCollection({
  schema: journalSchema,
});

export const collections = { journal };
