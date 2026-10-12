import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../data/blog';
import { profile } from '../data/portfolio';

const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]!);

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('RSS requires a site URL in astro.config.mjs.');
  const posts = await getPosts();
  return rss({
    title: `${profile.nickname} — Blog`,
    description: profile.description,
    site,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en</language><image>
      <url>${escapeXml(new URL('/favicon.png', site).href)}</url>
      <title>${escapeXml(`${profile.nickname} — Blog`)}</title>
      <link>${escapeXml(site.href)}</link>
      <width>64</width><height>64</height>
    </image>`,
  });
};
