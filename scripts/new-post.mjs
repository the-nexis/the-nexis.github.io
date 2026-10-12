import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const title = (process.env.TITLE ?? '').trim();
const slug = (process.env.SLUG ?? '').trim() || title
  .normalize('NFKD').replace(/\p{M}/gu, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function main() {
  if (!title) throw new Error('Provide a title: make post TITLE="My first post"');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error('SLUG must contain lowercase letters, numbers, and single hyphens.');
  }
  const date = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Prague', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
  const directory = new URL('../src/content/blog/', import.meta.url);
  const file = new URL(`${slug}.md`, directory);
  const content = `---\ntitle: ${JSON.stringify(title)}\ndescription: ""\ndate: ${date}\ndraft: true\n---\n\nWrite your post here.\n`;
  await mkdir(directory, { recursive: true });
  await writeFile(file, content, { encoding: 'utf8', flag: 'wx' });
  console.log(`Created ${fileURLToPath(file)}`);
  console.log('Add a description and write the post, then set draft: false to publish.');
}

main().catch(error => {
  console.error(error.code === 'EEXIST' ? `A post named ${slug}.md already exists; nothing was overwritten.` : error.message);
  process.exitCode = 1;
});
