import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('post', ({ data }) => !data.draft);
  const index = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map(p => ({
      title: p.data.title,
      description: p.data.description ?? '',
      slug: p.slug,
      url: `/post/${p.slug}/`,
      tags: p.data.tags ?? [],
    }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
