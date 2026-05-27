import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Reveal from "@/components/Reveal";
import PostCard, { AuthorAvatar, CategoryPill, PostThumb } from "@/components/blog/PostCard";
import { posts, getFeaturedPost, categoryLabel, type Category } from "@/lib/blog";

const FILTERS: Array<{ key: "all" | Category; label: string }> = [
  { key: "all", label: "All" },
  { key: "perspective", label: "Perspective" },
  { key: "product", label: "Product" },
  { key: "case-study", label: "Case studies" },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const Blog = () => {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const featured = getFeaturedPost();

  const visible = useMemo(() => {
    const rest = posts.filter((p) => p.slug !== featured?.slug);
    return filter === "all" ? rest : rest.filter((p) => p.category === filter);
  }, [filter, featured]);

  const showFeatured = filter === "all" && featured;

  return (
    <div className="bg-background min-h-screen">
      <Helmet>
        <title>Blog · Nexus²</title>
        <meta
          name="description"
          content="Perspectives, product deep-dives and customer stories from the team building Nexus² — the AI layer between your data and every surface."
        />
        <link rel="canonical" href="/blog" />
        <meta property="og:title" content="Blog · Nexus²" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blog" />
        <link rel="alternate" type="application/rss+xml" title="Nexus² Blog" href="/blog/rss.xml" />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase font-sans">
              Blog
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-sans font-bold text-foreground text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-5">
              Notes on building{" "}
              <span className="font-serif italic text-accent">AI-native businesses.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground font-sans text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              Perspectives, product deep-dives and customer stories from the team building Nexus².
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 pb-10">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-sans transition-all duration-200 border ${
                  active
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured */}
      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.section
            key="featured"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-6 lg:px-8 pb-12"
          >
            <div className="max-w-7xl mx-auto">
              <Reveal>
                <Link
                  to={`/blog/${featured!.slug}`}
                  className="group grid md:grid-cols-2 gap-0 bg-card border border-border rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0_24px_50px_-24px_hsl(var(--accent)/0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative">
                    <PostThumb slug={featured!.slug} hero={featured!.hero} aspect="4/3" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <CategoryPill category={featured!.category} />
                    <h2 className="font-sans font-bold text-foreground text-3xl lg:text-4xl leading-tight mt-4 group-hover:text-accent transition-colors">
                      {featured!.title}
                    </h2>
                    <p className="text-muted-foreground font-sans mt-4 leading-relaxed line-clamp-2">
                      {featured!.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-xs text-muted-foreground font-sans">
                      <AuthorAvatar author={featured!.authorData} size={28} />
                      <span className="text-foreground font-medium">{featured!.authorData.name}</span>
                      <span>·</span>
                      <span>{formatDate(featured!.publishedAt)}</span>
                      <span>·</span>
                      <span>{featured!.readTime} min read</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium font-sans mt-6 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {visible.length > 0 ? (
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visible.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 0.06}>
                    <PostCard post={post} />
                  </Reveal>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-md mx-auto text-center bg-card border border-border rounded-[18px] p-10"
              >
                <span className="inline-flex w-12 h-12 rounded-full bg-accent/10 items-center justify-center">
                  <Inbox className="w-6 h-6 text-accent" />
                </span>
                <h3 className="font-sans font-bold text-foreground text-xl mt-4">Nothing here yet.</h3>
                <p className="text-muted-foreground font-sans text-sm mt-2">
                  No posts in <strong>{categoryLabel[filter as Category]}</strong> right now.
                </p>
                <button
                  onClick={() => setFilter("all")}
                  className="text-accent text-sm font-medium font-sans mt-4 hover:underline underline-offset-4"
                >
                  ← Show all posts
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-10 lg:p-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase font-sans">
                Stay in the loop
              </span>
              <h2 className="font-sans font-bold text-foreground text-3xl md:text-4xl leading-tight mt-4">
                One short post a week.{" "}
                <span className="font-serif italic text-accent">No spam.</span>
              </h2>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="you@company.com" className="bg-background flex-1" aria-label="Email" />
                <Button type="submit" variant="accent">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground font-sans mt-3">
                Used only for the newsletter. See our{" "}
                <Link to="/privacy" className="text-accent underline underline-offset-2 hover:opacity-80">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
