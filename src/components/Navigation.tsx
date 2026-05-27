import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, GraduationCap, Building2, ShoppingBag, Heart, ArrowRight, Newspaper, BookOpen, History, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { posts } from "@/lib/blog";
import { PostThumb } from "@/components/blog/PostCard";

const SOLUTIONS = [
  { label: "Education", to: "/solutions/education", icon: GraduationCap },
  { label: "Enterprise", to: "/solutions/enterprise", icon: Building2 },
  { label: "E-commerce", to: "/solutions/ecommerce", icon: ShoppingBag },
  { label: "Healthcare", to: "/solutions/healthcare", icon: Heart },
];

const EXPLORE = [
  { label: "Solutions overview", to: "/solutions" },
  { label: "How it works", to: "/platform" },
  { label: "Book a demo", to: "/request-demo" },
];

const RESOURCES_READ = [
  { label: "Blog", to: "/blog", icon: Newspaper, soon: false },
  { label: "Docs", to: "#", icon: BookOpen, soon: true },
  { label: "Changelog", to: "#", icon: History, soon: true },
  { label: "Customer stories", to: "#", icon: Users, soon: true },
];

const TOP = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions", mega: "solutions" as const },
  { label: "Resources", href: "/blog", mega: "resources" as const },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-xl font-semibold text-foreground font-sans">Nexus</span>
            <span className="text-lg font-semibold text-accent">²</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {TOP.map((item) => {
              if (item.mega === "solutions") {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans outline-none">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-4 h-[2px] bg-accent rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-popover w-[520px] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">
                            By industry
                          </p>
                          <div className="space-y-1">
                            {SOLUTIONS.map((s) => (
                              <Link
                                key={s.label}
                                to={s.to}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors group"
                              >
                                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                  <s.icon className="w-4 h-4 text-accent" />
                                </span>
                                <span className="text-sm font-medium text-foreground font-sans">{s.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">
                            Explore
                          </p>
                          <div className="space-y-1">
                            {EXPLORE.map((e) => (
                              <Link
                                key={e.label}
                                to={e.to}
                                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary transition-colors group"
                              >
                                <span className="text-sm text-foreground font-sans">{e.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              if (item.mega === "resources") {
                const latest = posts[0];
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans outline-none">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                      {isActive("/blog") && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-4 h-[2px] bg-accent rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-popover w-[560px] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">
                            Read
                          </p>
                          <div className="space-y-1">
                            {RESOURCES_READ.map((r) => {
                              const Inner = (
                                <>
                                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <r.icon className="w-4 h-4 text-accent" />
                                  </span>
                                  <span className="flex-1 text-sm font-medium font-sans">{r.label}</span>
                                  {r.soon && (
                                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground font-sans">
                                      Coming soon
                                    </span>
                                  )}
                                </>
                              );
                              return r.soon ? (
                                <div
                                  key={r.label}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg opacity-50 cursor-not-allowed text-foreground"
                                >
                                  {Inner}
                                </div>
                              ) : (
                                <Link
                                  key={r.label}
                                  to={r.to}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
                                >
                                  {Inner}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                        {latest && (
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3">
                              Latest post
                            </p>
                            <Link
                              to={`/blog/${latest.slug}`}
                              className="block rounded-lg overflow-hidden group"
                            >
                              <div className="rounded-lg overflow-hidden border border-border">
                                <PostThumb slug={latest.slug} hero={latest.hero} aspect="16/9" />
                              </div>
                              <p className="text-sm font-semibold text-foreground font-sans mt-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                                {latest.title}
                              </p>
                              <span className="inline-flex items-center gap-1 text-accent text-xs font-medium font-sans mt-2">
                                Read <ArrowRight className="w-3 h-3" />
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return null;
            }).concat(
              TOP.filter((i) => !i.mega).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" asChild>
              <Link to="/request-demo">Request a demo</Link>
            </Button>
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-l-2 border-l-accent/40 border-border">
            <div className="px-4 py-6 space-y-3">
              <Link to="/platform" className="block text-foreground font-medium py-2 font-sans">
                Platform
              </Link>
              <div className="space-y-1">
                <span className="block text-foreground font-medium py-2 font-sans">Solutions</span>
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.label}
                    to={s.to}
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2 pl-4 font-sans"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link to="/solutions" className="block text-muted-foreground hover:text-foreground transition-colors py-2 pl-4 font-sans text-sm">
                  → Solutions overview
                </Link>
              </div>
              <Link to="/pricing" className="block text-foreground font-medium py-2 font-sans">
                Pricing
              </Link>
              <Link to="/company" className="block text-foreground font-medium py-2 font-sans">
                Company
              </Link>
              <div className="pt-4 border-t border-border">
                <Button className="w-full" asChild>
                  <Link to="/request-demo">Request a demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
