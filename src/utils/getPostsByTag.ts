import { slugifyAll } from './slugify';
import type { CollectionEntry } from 'astro:content';

const getPostsByTag = (posts: CollectionEntry<'journal'>[], tag: string) =>
  entries.filter((entry) => slugifyAll(entry.data.tags).includes(tag));

export default getPostsByTag;
