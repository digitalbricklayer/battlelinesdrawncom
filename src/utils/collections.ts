import { getCollection } from 'astro:content';

/** Returns all published posts sorted newest-first. */
export async function getPublishedPosts() {
  const posts = await getCollection('post', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Returns all tags across all collections, sorted by frequency (desc). */
export async function getAllTags(): Promise<string[]> {
  const [posts, armies, projects, rulesets, suppliers] = await Promise.all([
    getCollection('post'),
    getCollection('army'),
    getCollection('project'),
    getCollection('ruleset'),
    getCollection('supplier'),
  ]);

  const counts = new Map<string, number>();
  const add = (tags: string[]) => {
    for (const t of tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  };

  for (const c of [...posts, ...armies, ...projects, ...rulesets, ...suppliers]) {
    add(c.data.tags ?? []);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
}
