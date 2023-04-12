import { defineCollection } from 'astro:content';
import { journalSchema } from './_schemas';
import { gardenSchema } from './_schemas';

const journal = defineCollection({
  schema: journalSchema,
});
const garden = defineCollection({
  schema: gardenSchema,
});

export const collections = { journal, garden };
