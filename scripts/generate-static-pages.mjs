import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const outputDirectory = path.join(projectRoot, 'dist');
const siteUrl = 'https://janu23.github.io';

const projects = JSON.parse(
  await fs.readFile(path.join(projectRoot, 'src/data/projects.json'), 'utf8'),
);
const template = await fs.readFile(path.join(outputDirectory, 'index.html'), 'utf8');

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const replaceMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${key}["'][^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
};

const replacePageMetadata = (html, project) => {
  const localized = project.en;
  const title = `${localized.title} | Victor Januário`;
  const canonicalUrl = `${siteUrl}/project/${project.id}/`;
  const imageUrl = `${siteUrl}/${project.detailImage}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: localized.title,
    description: localized.summary,
    url: canonicalUrl,
    image: imageUrl,
    creator: {
      '@type': 'Person',
      name: 'Victor Januário',
      url: `${siteUrl}/`,
    },
    dateCreated: project.year,
  };

  let page = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  page = page.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  page = replaceMeta(page, 'name', 'description', localized.summary);
  page = replaceMeta(page, 'property', 'og:title', title);
  page = replaceMeta(page, 'property', 'og:description', localized.summary);
  page = replaceMeta(page, 'property', 'og:type', 'article');
  page = replaceMeta(page, 'property', 'og:url', canonicalUrl);
  page = replaceMeta(page, 'property', 'og:image', imageUrl);
  page = replaceMeta(page, 'name', 'twitter:title', title);
  page = replaceMeta(page, 'name', 'twitter:description', localized.summary);
  page = replaceMeta(page, 'name', 'twitter:image', imageUrl);
  page = page.replace(
    /\s*<!-- Preload LCP image for faster rendering -->\s*<link\s+rel=["']preload["']\s+as=["']image["'][^>]*>/i,
    `\n    <link rel="preload" as="image" href="/${project.detailImage}" fetchpriority="high" type="image/avif">`,
  );
  page = page.replace(
    '</head>',
    `    <script type="application/ld+json" data-page-schema>${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>\n  </head>`,
  );
  return page;
};

for (const project of projects) {
  const routeDirectory = path.join(outputDirectory, 'project', project.id);
  await fs.mkdir(routeDirectory, { recursive: true });
  await fs.writeFile(
    path.join(routeDirectory, 'index.html'),
    replacePageMetadata(template, project),
  );
}

const sitemapRoutes = [
  '/',
  ...projects.map((project) => `/project/${project.id}/`),
  '/psicologia/',
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')}
</urlset>
`;
await fs.writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap);

console.log(`Generated ${projects.length} static project pages and sitemap.xml`);
