import type { CollectionEntry } from 'astro:content';

const getAlphaSortedPosts = (posts: CollectionEntry<'garden'>[]) =>
  posts.filter(({ data }) => !data.draft).sort((a, b) => 0 - (b.data.title > a.data.title ? 1 : -1));

export default getAlphaSortedPosts;
