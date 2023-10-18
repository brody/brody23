import { defineCollection } from "astro:content";
import { journalSchema } from "./_schemas";
import { workSchema } from "./_schemas";

import { gardenSchema } from "./_schemas";

const journal = defineCollection({
  schema: journalSchema,
});
const garden = defineCollection({
  schema: gardenSchema,
});
const work = defineCollection({
  schema: workSchema,
});

export const collections = { journal, garden, work };
