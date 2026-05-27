// Runs before vite dev/build via predev/prebuild npm scripts.
// Reads blog markdown files and writes public/sitemap.xml + public/blog/rss.xml.

import { writeFileSync, mkdirSync, readdirSync, readFileSync } from "fs";
import { resolve, join } from "path";
import matter from "gray-matter";

const BASE_URL = "https://nexus-squared-ai.lovable.app";
const BLOG_DIR = resolve("src/content/blog");
const PUBLIC_DIR = resolve("public");

interface PostMeta {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  author: string;
}

const staticRoutes: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/platform", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions/education", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/enterprise", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/ecommerce", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/healthcare", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/real-estate", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/service-providers", changefreq: "monthly", priority: "0.7" },
  { path: "/pricing", changefreq: "monthly", priority: "0.8" },
  { path: "/company", changefreq: "monthly", priority: "0.6" },
  { path: "/request-demo", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
  { path: "/legal", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/refund", changefreq: "yearly", priority: "0.3" },
];

function loadPosts(): PostMeta[] {
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  return files
    .map((f) => {
      const raw = readFileSync(join(BLOG_DIR, f), "utf8");
      const { data } = matter(raw);
      return data as PostMeta;
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

function generateSitemap(posts: PostMeta[]) {
  const entries = [
    ...staticRoutes.map((r) => ({ ...r, lastmod: undefined as string | undefined })),
    ...posts.map((p) => ({
      path: `/blog/${p.slug}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: p.publishedAt,
    })),
  ];

  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

function generateRss(posts: PostMeta[]) {
  const items = posts
    .map((p) => {
      const url = `${BASE_URL}/blog/${p.slug}`;
      return [
        `  <item>`,
        `    <title>${escapeXml(p.title)}</title>`,
        `    <link>${url}</link>`,
        `    <guid>${url}</guid>`,
        `    <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>`,
        `    <description>${escapeXml(p.excerpt)}</description>`,
        `    <category>${escapeXml(p.category)}</category>`,
        `  </item>`,
      ].join("\n");
    })
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0">`,
    `<channel>`,
    `  <title>Nexus² Blog</title>`,
    `  <link>${BASE_URL}/blog</link>`,
    `  <description>Perspectives, product deep-dives and customer stories from the team building Nexus².</description>`,
    `  <language>en</language>`,
    `  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    items,
    `</channel>`,
    `</rss>`,
  ].join("\n");
}

const posts = loadPosts();
writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), generateSitemap(posts));
mkdirSync(join(PUBLIC_DIR, "blog"), { recursive: true });
writeFileSync(join(PUBLIC_DIR, "blog", "rss.xml"), generateRss(posts));
console.log(`✓ sitemap.xml (${staticRoutes.length + posts.length} urls)`);
console.log(`✓ blog/rss.xml (${posts.length} items)`);
