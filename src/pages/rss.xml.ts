import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('post', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Battle Lines Drawn',
    description: 'The Battle Lines Drawn is a tabletop wargaming blog specialising in World War 2 gaming.',
    site: context.site!,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/post/${p.slug}/`,
    })),
  });
}
