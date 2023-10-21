import type { CollectionEntry } from "astro:content";
const now = Date.now();

const getSortedPosts = (posts: CollectionEntry<"journal">[]) =>
  posts
    .filter(
      ({ data }) => !data.draft && data.pubDatetime.getTime() <= Date.now(),
    )

    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000),
    );

export default getSortedPosts;
