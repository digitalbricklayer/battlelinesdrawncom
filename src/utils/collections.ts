import { getCollection } from 'astro:content';

/** Returns all published blog posts sorted newest-first. */
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf());
}

/** Returns all tags across all collections, sorted by frequency (desc). */
export async function getAllTags(): Promise<string[]> {
  const [posts] = await Promise.all([
    getCollection('blog'),
  ]);

  const counts = new Map<string, number>();
  const add = (tags: string[]) => {
    for (const t of tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  };

  for (const c of [...posts]) {
    add(c.data.tags ?? []);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}
