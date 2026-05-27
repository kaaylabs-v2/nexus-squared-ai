import { Link } from "react-router-dom";
import { type Post, categoryLabel } from "@/lib/blog";

interface PostCardProps {
  post: Post;
  variant?: "default" | "compact";
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const GradientThumb = ({ slug }: { slug: string }) => {
  // Deterministic gentle gradient based on slug
  const palettes = [
    "from-orange-200 via-rose-200 to-accent/40",
    "from-amber-200 via-orange-200 to-rose-200",
    "from-accent/40 via-emerald-200 to-sky-200",
    "from-rose-200 via-pink-200 to-accent/30",
    "from-sky-200 via-accent/40 to-emerald-200",
  ];
  const i = Math.abs(slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % palettes.length;
  return <div className={`absolute inset-0 bg-gradient-to-br ${palettes[i]}`} />;
};

export const PostThumb = ({ slug, hero, aspect = "16/9" }: { slug: string; hero?: string; aspect?: string }) => (
  <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
    {hero ? (
      <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
    ) : (
      <GradientThumb slug={slug} />
    )}
  </div>
);

export const CategoryPill = ({ category }: { category: Post["category"] }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide font-sans">
    {categoryLabel[category]}
  </span>
);

export const AuthorAvatar = ({ author, size = 28 }: { author: Post["authorData"]; size?: number }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${author.gradient} text-white font-semibold font-sans flex-shrink-0`}
    style={{ width: size, height: size, fontSize: size * 0.4 }}
  >
    {author.initials}
  </span>
);

const PostCard = ({ post, variant = "default" }: PostCardProps) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-card border border-border rounded-[18px] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_hsl(var(--accent)/0.35)]"
    >
      <PostThumb slug={post.slug} hero={post.hero} />
      <div className="p-6">
        <CategoryPill category={post.category} />
        <h3 className="font-sans font-bold text-foreground text-[20px] leading-snug mt-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        {variant === "default" && (
          <p className="text-muted-foreground font-sans text-sm mt-2 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 mt-5 text-xs text-muted-foreground font-sans">
          <AuthorAvatar author={post.authorData} size={24} />
          <span className="text-foreground font-medium">{post.authorData.name.split(" ")[0]}</span>
          <span>·</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
