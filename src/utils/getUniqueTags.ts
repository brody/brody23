import { slugifyStr } from './slugify';
import type { CollectionEntry } from 'astro:content';

const getUniqueTags = (posts: CollectionEntry<'journal'>[]) => {
  let tags: string[] = [];
  const filteredPosts = entries.filter(({ data }) => !data.draft);
  filteredPosts.forEach((entry) => {
    tags = [...tags, ...entry.data.tags]
      .map((tag) => slugifyStr(tag))
      .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
  });
  return tags;
};

export default getUniqueTags;
