import type { CollectionEntry } from "astro:content";
const now = Date.now();

const getSortedPosts = (posts: CollectionEntry<"journal">[]) =>
  posts
    .filter(
      ({ data }) =>
        !data.draft &&
        Math.floor(data.pubDatetime.getTime() - 39600000) < Date.now(), // offset by -39600 seconds (11 hours) to account for timezone difference
    )

    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000),
    );

export default getSortedPosts;
