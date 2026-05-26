import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Database, Sparkles, MessageCircle, Plug, Shield, Workflow, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

type Stat = { value: number; decimals?: number; suffix?: string; label: string };

export type VerticalConfig = {
  vertical: string;
  hero: {
    headlineLead: string;
    headlineEmphasis: string;
    headlineTrail?: string;
    sub: string;
  };
  scopeNote?: string;
  problem: {
    heading: string;
    body: string;
  };
  diagram: {
    sources: string[];
    surfaces: string[];
  };
  captions?: { title: string; body: string }[];
  proof?: Stat[];
  caseStudy?: {
    company: string;
    problem: string;
    implementation: string;
    result: string;
  };
  connectors: {
    note?: string;
    groups: { label?: string; items: string[] }[];
  };
  surfaces: { icon?: LucideIcon; title: string; body: string }[];
  api: {
    body: string;
    code: string;
  };
  useCases: { audience: string; questions: string[] }[];
  compliance: string[];
  impactLine?: string;
};

const SectionKicker = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-6 font-sans">
    {children}
  </span>
);

const VerticalPage = ({ config }: { config: VerticalConfig }) => {
  const c = config;
  return (
    <div className="pt-20 bg-background">
      {/* 1. HERO */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <SectionKicker>Nexus for {c.vertical}</SectionKicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
              {c.hero.headlineLead}{" "}
              <em className="text-accent font-serif italic">{c.hero.headlineEmphasis}</em>
              {c.hero.headlineTrail || "."}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans mb-10">
              {c.hero.sub}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-demo">
                  Request a demo <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/request-demo">Talk to sales</Link>
              </Button>
            </div>
          </Reveal>

          {c.scopeNote && (
            <Reveal delay={0.2}>
              <div className="mt-12 max-w-3xl mx-auto text-left bg-card border border-border rounded-2xl p-6 lg:p-8">
                <p className="text-sm uppercase tracking-widest text-accent font-sans mb-3">Scope</p>
                <p className="text-muted-foreground leading-relaxed font-sans">{c.scopeNote}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal><SectionKicker>Why {c.vertical}</SectionKicker></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight mb-6">
              {c.problem.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">{c.problem.body}</p>
          </Reveal>
        </div>
      </section>

      {/* 3. ORCHESTRATION LAYER */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <SectionKicker>One layer</SectionKicker>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                One orchestration layer for {c.vertical.toLowerCase()}.
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center mb-16">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-4 text-center lg:text-right">Sources</p>
              {c.diagram.sources.map((s, i) => (
                <Reveal key={s} delay={i * 0.04}>
                  <div className="bg-card border border-border rounded-xl px-4 py-3 text-sm font-sans text-foreground text-center lg:text-right">{s}</div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="hidden lg:block w-20 h-px bg-gradient-to-r from-transparent to-accent/40 mb-4" />
              <div className="bg-accent/10 border-2 border-accent/40 rounded-2xl p-8 text-center w-44">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-serif text-xl text-foreground">Nexus²</p>
                <p className="text-xs text-muted-foreground font-sans mt-1">Orchestration</p>
              </div>
              <div className="hidden lg:block w-20 h-px bg-gradient-to-l from-transparent to-accent/40 mt-4" />
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-4 text-center lg:text-left">Surfaces</p>
              {c.diagram.surfaces.map((s, i) => (
                <Reveal key={s} delay={i * 0.04}>
                  <div className="bg-card border border-border rounded-xl px-4 py-3 text-sm font-sans text-foreground text-center lg:text-left">{s}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(c.captions || [
              { title: "Connect", body: "Pull from every source you already use." },
              { title: "Understand", body: "Reason across them as one knowledge graph." },
              { title: "Answer", body: "Reply, act, route — in your tone, your tools." },
            ]).map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.06}>
                <div className="bg-card p-6 rounded-2xl border border-border h-full">
                  <h3 className="font-serif text-xl text-foreground mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROOF (stat cards) */}
      {c.proof && c.proof.length > 0 && (
        <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-14">
                <SectionKicker>Proof</SectionKicker>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                  Real numbers from real{" "}
                  <em className="text-accent font-serif italic">{c.vertical.toLowerCase()} businesses</em>.
                </h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {c.proof.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-3xl p-10 text-center h-full">
                    <div className="font-serif italic text-accent text-6xl leading-none mb-4">
                      <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
                    </div>
                    <p className="text-muted-foreground font-sans">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CASE STUDY */}
      {c.caseStudy && (
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12">
                <SectionKicker>Case study</SectionKicker>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                  {c.caseStudy.company}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 space-y-8">
                {[
                  { label: "The Problem", body: c.caseStudy.problem },
                  { label: "The Implementation", body: c.caseStudy.implementation },
                  { label: "The Result", body: c.caseStudy.result },
                ].map((sec) => (
                  <div key={sec.label}>
                    <div className="h-px w-12 bg-accent mb-3" />
                    <h3 className="text-sm uppercase tracking-widest text-accent font-sans mb-3">{sec.label}</h3>
                    <p className="text-lg text-foreground leading-relaxed font-sans">{sec.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 6. CONNECTORS */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <SectionKicker>Connects with</SectionKicker>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                The tools your {c.vertical.toLowerCase()} team already runs on.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-10">
            {c.connectors.groups.map((g, gi) => (
              <Reveal key={gi} delay={gi * 0.05}>
                <div>
                  {g.label && (
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-4">{g.label}</p>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {g.items.map((it) => (
                      <div key={it} className="bg-card border border-border rounded-xl px-4 py-3 text-sm font-sans text-foreground text-center hover:border-accent/40 transition-colors flex items-center justify-center gap-2">
                        <Plug className="w-3.5 h-3.5 text-accent shrink-0" />
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-muted-foreground font-sans">
            <span className="text-foreground font-medium">Custom Data Sources</span> — if it has an API, Nexus² can learn from it.
          </p>
          {c.connectors.note && (
            <p className="mt-3 text-center text-sm text-muted-foreground font-sans italic">{c.connectors.note}</p>
          )}
        </div>
      </section>

      {/* 7. SURFACES */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <SectionKicker>Ways to help</SectionKicker>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                Meet people where they already are.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.surfaces.map((s, i) => {
              const Icon = s.icon || MessageCircle;
              return (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="bg-card p-8 rounded-2xl border border-border hover:border-accent/40 hover:-translate-y-1 transition-all h-full">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans text-sm">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BUILD ON THE API */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="bg-foreground text-background rounded-3xl p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-medium tracking-wide uppercase mb-6 font-sans">
                    For developers
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                    Build on the {c.vertical} API.
                  </h2>
                  <p className="opacity-80 leading-relaxed font-sans mb-8">{c.api.body}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-accent font-medium font-sans hover:gap-3 transition-all">
                    Explore the docs <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-background/5 border border-background/10 rounded-2xl p-6 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-background/90 whitespace-pre">{c.api.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. USE CASES */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <SectionKicker>Who it helps</SectionKicker>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                Real questions, real answers.
              </h2>
            </div>
          </Reveal>
          <Tabs defaultValue={c.useCases[0].audience} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-secondary/60 p-2 rounded-2xl">
              {c.useCases.map((u) => (
                <TabsTrigger key={u.audience} value={u.audience} className="rounded-xl px-5 py-2 font-sans data-[state=active]:bg-card data-[state=active]:shadow-sm">
                  {u.audience}
                </TabsTrigger>
              ))}
            </TabsList>
            {c.useCases.map((u) => (
              <TabsContent key={u.audience} value={u.audience} className="mt-10">
                <div className="grid md:grid-cols-3 gap-5">
                  {u.questions.map((q) => (
                    <div key={q} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors">
                      <MessageCircle className="w-5 h-5 text-accent mb-3" />
                      <p className="font-serif text-lg text-foreground leading-snug">"{q}"</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 10. SECURITY */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <SectionKicker>{c.vertical}-ready</SectionKicker>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                Security and compliance, built in.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.compliance.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3 h-full">
                  <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-foreground font-sans text-sm leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. THREE STEPS */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <SectionKicker>Go live</SectionKicker>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
                Three steps from sources to assistant.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Connect Sources", body: "Plug in your tools, sites, and documents. Nexus² indexes and understands them.", icon: Database },
              { n: "02", title: "Configure Workspace", body: "Set tone, permissions, surfaces, and the workflows you want available.", icon: Workflow },
              { n: "03", title: "Deploy & Monitor", body: "Launch to chat, voice, search, or API. Watch the analytics, refine in place.", icon: Check },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif italic text-4xl text-accent">{s.n}</span>
                    <s.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans text-sm">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CLOSING CTA */}
      <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {c.impactLine && (
            <Reveal>
              <p className="text-sm uppercase tracking-widest text-accent font-sans mb-6">{c.impactLine}</p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight mb-6">
              See Nexus² for <em className="text-accent font-serif italic">{c.vertical}</em> in action.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-sans mb-10">
              Bring your sources, your tools, your tone. We'll show you the same brain — fluent in your domain.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-demo">
                  Request a demo <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/request-demo">Talk to sales</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default VerticalPage;
