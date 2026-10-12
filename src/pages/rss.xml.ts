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
  const thumbnailUrl = escapeXml(new URL('/favicon.png', site).href);
  return rss({
    title: `${profile.nickname} — Blog`,
    description: profile.description,
    site,
    xmlns: { media: 'http://search.yahoo.com/mrss/' },
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      customData: `<media:thumbnail url="${thumbnailUrl}" width="64" height="64" />`,
    })),
    customData: `<language>en</language><image>
      <url>${thumbnailUrl}</url>
      <title>${escapeXml(`${profile.nickname} — Blog`)}</title>
      <link>${escapeXml(site.href)}</link>
      <width>64</width><height>64</height>
    </image>`,
  });
};
