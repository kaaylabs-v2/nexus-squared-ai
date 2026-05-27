import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

export type LegalSection = {
  id: string;
  heading: string;
  body?: string;
  bullets?: string[];
  bulletsAfter?: string;
};

interface LegalPageProps {
  headlineLead: string;
  headlineEmphasis: string;
  headlineTrail?: string;
  tagline?: string;
  glance?: { lines: string[]; footnote?: string };
  sections: LegalSection[];
  contact: { heading: string; email: string };
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const LegalPage = ({
  headlineLead,
  headlineEmphasis,
  headlineTrail = ".",
  tagline,
  glance,
  sections,
  contact,
}: LegalPageProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium font-sans border border-accent/20 mb-6">
              Legal
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-5">
              {headlineLead}{" "}
              <span className="font-serif italic text-accent">{headlineEmphasis}</span>
              {headlineTrail}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-muted-foreground font-sans">Last updated: May 2026.</p>
          </Reveal>
          {tagline && (
            <Reveal delay={0.15}>
              <p className="mt-6 text-base text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
                {tagline}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <p className="mt-3 text-xs text-muted-foreground font-sans">
              NexusNexus AI is a product of Lemuria Digital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* At a glance */}
      {glance && (
        <section className="pb-8">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Reveal>
              <div className="bg-card rounded-[18px] border border-border p-7 lg:p-8 shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)]">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium font-sans border border-accent/20 mb-5">
                  At a glance
                </span>
                <ul className="space-y-3">
                  {glance.lines.map((l) => (
                    <li key={l} className="flex items-start gap-2.5 text-base font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1.5" />
                      <span className="text-foreground">{l}</span>
                    </li>
                  ))}
                </ul>
                {glance.footnote && (
                  <p className="mt-5 text-xs text-muted-foreground font-sans italic">
                    {glance.footnote}
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* TOC + Body */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 bg-card rounded-[18px] border border-border p-5 shadow-[0_1px_2px_hsl(var(--foreground)/0.04)]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-medium mb-4">
                On this page
              </p>
              <nav className="space-y-1">
                {sections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => handleAnchor(e, s.id)}
                      className={`block pl-3 py-1.5 text-sm font-sans border-l-2 transition-colors ${
                        active
                          ? "border-accent text-accent underline underline-offset-4"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.heading}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Mobile TOC */}
          <details className="lg:hidden mb-8 bg-card rounded-[18px] border border-border p-5">
            <summary className="text-sm font-medium text-foreground font-sans cursor-pointer">
              On this page
            </summary>
            <nav className="mt-4 space-y-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => handleAnchor(e, s.id)}
                  className="block text-sm text-muted-foreground hover:text-accent font-sans py-1"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </details>

          {/* Body */}
          <article className="max-w-[720px]">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={Math.min(i * 0.04, 0.16)}>
                <section
                  id={s.id}
                  className="py-8 border-b border-accent/25 last:border-b-0"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-4 font-sans">
                    {s.heading}
                  </h2>
                  {s.body && (
                    <p className="text-[17px] leading-[1.8] text-foreground/85 font-sans mb-4">
                      {s.body}
                    </p>
                  )}
                  {s.bullets && (
                    <ul className="space-y-2.5 mb-2">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[17px] leading-[1.7] text-foreground/85 font-sans"
                        >
                          <span className="text-accent mt-2.5 leading-none">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.bulletsAfter && (
                    <p className="text-[17px] leading-[1.8] text-foreground/85 font-sans mt-4">
                      {s.bulletsAfter}
                    </p>
                  )}
                </section>
              </Reveal>
            ))}

            {/* Contact card */}
            <Reveal delay={0.1}>
              <div className="mt-12 bg-card rounded-[18px] border border-border p-7 shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)] transition-transform duration-200 hover:-translate-y-0.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium font-sans border border-accent/20 mb-3">
                  Questions?
                </span>
                <p className="text-lg text-foreground font-sans mb-2">{contact.heading}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent underline underline-offset-4 hover:opacity-80 font-sans"
                >
                  Email {contact.email}
                </a>
              </div>
            </Reveal>

            <p className="mt-10 text-xs text-muted-foreground font-sans">
              See also:{" "}
              <Link to="/privacy" className="text-accent underline underline-offset-2">
                Privacy
              </Link>{" "}
              ·{" "}
              <Link to="/terms" className="text-accent underline underline-offset-2">
                Terms
              </Link>{" "}
              ·{" "}
              <Link to="/refund" className="text-accent underline underline-offset-2">
                Refund
              </Link>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export { slugify };
export default LegalPage;
