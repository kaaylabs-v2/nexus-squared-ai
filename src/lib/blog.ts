import { authors, type AuthorId, type Author } from "@/content/authors";

export type Category = "perspective" | "product" | "case-study";

export interface PostFrontmatter {
  title: string;
  slug: string;
  category: Category;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  author: AuthorId;
  tags: string[];
  hero?: string;
  featured?: boolean;
}

export interface Post extends PostFrontmatter {
  body: string;
  authorData: Author;
}

export const categoryLabel: Record<Category, string> = {
  perspective: "Perspective",
  product: "Product",
  "case-study": "Case studies",
};

// Eagerly import all markdown blog posts as raw strings.
const modules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

// Minimal YAML frontmatter parser tailored to our controlled blog files.
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const [, yaml, body] = match;
  const data: Record<string, unknown> = {};
  const lines = yaml.split("\n");
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val: string = m[2].trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if (val === "true" || val === "false") {
      data[key] = val === "true";
    } else if (/^-?\d+$/.test(val)) {
      data[key] = parseInt(val, 10);
    } else {
      data[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: body.trim() };
}

function loadPosts(): Post[] {
  const out: Post[] = [];
  for (const raw of Object.values(modules)) {
    const { data, body } = parseFrontmatter(raw);
    const fm = data as unknown as PostFrontmatter;
    out.push({
      ...fm,
      tags: fm.tags ?? [],
      body,
      authorData: authors[fm.author],
    });
  }
  return out.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export const posts: Post[] = loadPosts();

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const getFeaturedPost = () =>
  posts.find((p) => p.featured) ?? posts[0];

export const getRelatedPosts = (post: Post, limit = 3): Post[] => {
  const sameCat = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = posts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCat, ...rest].slice(0, limit);
};
