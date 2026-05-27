import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import PostCard, { AuthorAvatar, CategoryPill, PostThumb } from "@/components/blog/PostCard";
import { getPostBySlug, getRelatedPosts, categoryLabel } from "@/lib/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60]"
    />
  );
};

const CopyLinkButton = () => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="inline-flex items-center gap-2 text-sm text-accent hover:opacity-80 transition-opacity font-sans"
    >
      {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      {copied ? "Copied" : "Copy link"}
    </button>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.hero ? [post.hero] : undefined,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.authorData.name },
    publisher: {
      "@type": "Organization",
      name: "Nexus²",
    },
  };

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>{`${post.title} · Nexus²`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`/blog/${post.slug}`} />
        {post.hero && <meta property="og:image" content={post.hero} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <ReadingProgress />

      {/* Breadcrumb */}
      <div className="pt-28 px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto">
          <nav className="text-sm text-muted-foreground font-sans">
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span>{categoryLabel[post.category]}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
        className="px-6 lg:px-8 pt-8 pb-10"
      >
        <div className="max-w-[720px] mx-auto text-center">
          <CategoryPill category={post.category} />
          <h1 className="font-sans font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.1] mt-5">
            {post.title}
          </h1>
          <p className="font-serif italic text-muted-foreground text-xl md:text-2xl leading-relaxed mt-6">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm text-muted-foreground font-sans">
            <AuthorAvatar author={post.authorData} size={40} />
            <span className="text-foreground font-semibold">{post.authorData.name}</span>
            <span className="opacity-60">·</span>
            <span>{post.authorData.role}</span>
            <span className="opacity-60">·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="opacity-60">·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </motion.header>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
        className="px-6 lg:px-8"
      >
        <div className="max-w-[960px] mx-auto rounded-[18px] overflow-hidden shadow-sm">
          <PostThumb slug={post.slug} hero={post.hero} aspect="16/9" />
        </div>
      </motion.div>

      {/* Body */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.28, delay: 0.08 }}
        className="px-6 lg:px-8 py-16"
      >
        <div className="max-w-[720px] mx-auto prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="font-sans font-bold text-foreground text-[28px] leading-tight mt-14 pt-6 border-t border-accent/25">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-sans font-bold text-foreground text-[22px] leading-snug mt-10">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-foreground/90 text-[18px] leading-[1.8] font-sans mt-6">{children}</p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-all"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="font-serif italic text-[22px] text-foreground/85 leading-relaxed border-l-2 border-accent pl-6 my-8">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => <ul className="mt-6 space-y-3 font-sans text-[18px] leading-[1.7]">{children}</ul>,
              ol: ({ children }) => (
                <ol className="mt-6 space-y-3 list-decimal pl-6 font-sans text-[18px] leading-[1.7]">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-foreground/90 pl-6 relative before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-2 before:rounded-full before:bg-accent">
                  {children}
                </li>
              ),
              code: ({ className, children, ...props }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <pre className="bg-foreground text-background rounded-[14px] p-5 overflow-x-auto my-6 text-sm leading-relaxed">
                      <code className="font-mono" {...props}>
                        {children}
                      </code>
                    </pre>
                  );
                }
                return (
                  <code className="bg-secondary text-foreground rounded-md px-1.5 py-0.5 text-[0.95em] font-mono" {...props}>
                    {children}
                  </code>
                );
              },
              img: ({ src, alt }) => (
                <figure className="my-10">
                  <img src={src} alt={alt} className="w-full rounded-[18px] shadow-sm" />
                  {alt && (
                    <figcaption className="text-center text-sm italic text-muted-foreground font-serif mt-3">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
              hr: () => <hr className="my-12 border-border" />,
            }}
          >
            {post.body}
          </ReactMarkdown>

          {/* Tags + Share */}
          <div className="mt-14 pt-8 border-t border-border">
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-accent/40 text-accent text-xs font-medium font-sans"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-5 mt-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans">Share</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:opacity-80"
                aria-label="Share on X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:opacity-80"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <CopyLinkButton />
            </div>
          </div>

          {/* Author card */}
          <div className="mt-10 bg-card border border-border rounded-[18px] p-6 flex gap-5 items-start">
            <AuthorAvatar author={post.authorData} size={56} />
            <div className="flex-1">
              <p className="font-sans font-semibold text-foreground">
                {post.authorData.name} · <span className="text-muted-foreground font-normal">{post.authorData.role}</span>
              </p>
              <p className="text-sm text-muted-foreground font-sans mt-1 leading-relaxed">{post.authorData.bio}</p>
              <a
                href={post.authorData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent text-sm font-medium font-sans underline underline-offset-4 mt-3"
              >
                LinkedIn <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-sans">
              <ArrowLeft className="w-4 h-4" /> All posts
            </Link>
          </div>
        </div>
      </motion.article>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase font-sans">
                More from Nexus²
              </span>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <PostCard post={p} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-12 lg:p-16 text-center">
          <Reveal>
            <h2 className="font-sans font-bold text-foreground text-3xl md:text-5xl leading-tight">
              Want to see Nexus²{" "}
              <span className="font-serif italic text-accent">in action?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <Button size="lg" asChild>
                <Link to="/request-demo">Request a demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/platform">Explore the platform</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
