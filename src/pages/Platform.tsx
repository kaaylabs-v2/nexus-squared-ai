import {
  Globe,
  Navigation,
  Database,
  Brain,
  Users,
  Palette,
  Shield,
  Lock,
  CheckCircle,
  GraduationCap,
  Stethoscope,
  Factory,
  Store,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reveal from "@/components/Reveal";
import FinalCTASection from "@/components/FinalCTASection";

const Platform = () => {
  const coreCapabilities = [
    { icon: Globe, title: "Connects to every surface", subtitle: "Zero engineering required", description: "Drop in Nexus² and it crawls your sites, indexes your tools, watches for changes, and keeps everything in sync." },
    { icon: Navigation, title: "Reasons, retrieves, acts", subtitle: "More than a Q&A bot", description: "Nexus² navigates, deep-links, highlights, and runs multi-step actions across your systems — with citations." },
    { icon: Database, title: "Connects every data source", subtitle: "Beyond the website", description: "Jira, Google Workspace, SQL, S3, PDFs, CRMs, product catalogs. One brain for everything your business knows." },
    { icon: Brain, title: "Advanced RAG + multi-agent AI", subtitle: "Modern AI engine", description: "Hybrid search, intelligent chunking, multi-agent workflows, real-time connectors, automatic citations." },
  ];

  const industries = [
    { id: "education", icon: GraduationCap, title: "Education", examples: ["What courses are available for spring semester?", "How do I apply for financial aid?", "Take me to the course registration page", "What are the library hours this week?", "Show me scholarship opportunities for STEM majors"] },
    { id: "healthcare", icon: Stethoscope, title: "Healthcare", examples: ["How do I schedule an appointment?", "Where can I find my test results?", "What insurance plans do you accept?", "Take me to the patient portal login", "Find a specialist near me"] },
    { id: "industrial", icon: Factory, title: "Industrial", examples: ["Show me the safety compliance documents", "Where can I find equipment manuals?", "What's the status of order #45921?", "Take me to the parts catalog", "How do I submit a maintenance request?"] },
    { id: "ecommerce", icon: Store, title: "E-commerce", examples: ["Show me dresses under $100 in size medium", "Where's my order? Tracking #ABC123", "Compare these two laptops for me", "What's your return policy?", "Find me gifts for a 10-year-old"] },
  ];

  const customizationFeatures = ["Custom instructions", "Model selection (Claude, GPT-4, Llama, Titan)", "UI personalization", "Access controls", "Analytics & insights", "Role-based permissions"];
  const enterpriseFeatures = ["SOC-2 aligned", "Multi-tenant infrastructure", "Data isolation for every client", "Encrypted credentials (OAuth/API key vault)", "On-demand access logs"];

  const exampleQueries = [
    "Show me the return policy for opened items.",
    "Pull the Q3 sales summary from the warehouse.",
    "Compare these two laptops for me.",
    "Where's order #ABC123?",
  ];

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-6 font-sans">
                Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight mb-8">
                The AI layer for <span className="font-serif italic text-accent">your whole business</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-sans">
                Customers and employees don't want to click through menus or open ten tabs.
                They want answers. Nexus² turns every part of your business into a conversation.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
                {exampleQueries.map((q) => (
                  <div key={q} className="bg-card border border-border rounded-2xl p-4 text-left">
                    <span className="text-muted-foreground text-sm italic font-sans">"{q}"</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-foreground font-medium font-sans">
                …and Nexus² does it. It doesn't just respond — it{" "}
                <span className="text-accent">reasons</span>,{" "}
                <span className="text-accent">retrieves</span>,{" "}
                <span className="text-accent">cites</span>, and{" "}
                <span className="text-accent">acts</span>.
              </p>
            </div>
          </Reveal>

          <div className="mb-24">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-normal text-foreground text-center mb-12">
                What Nexus² <span className="font-serif italic text-accent">does</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {coreCapabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.05}>
                  <div className="bg-card p-8 rounded-3xl border border-border hover:border-accent/30 transition-all group h-full">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <c.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1 font-sans">{c.title}</h3>
                        <p className="text-sm text-accent font-medium mb-3 font-sans">{c.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed font-sans">{c.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Industry tabbed switcher */}
          <div className="mb-24">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-normal text-foreground text-center mb-4">
                Built for <span className="font-serif italic text-accent">every industry</span>
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
                See how Nexus² shapes the same brain to fit each industry's vocabulary.
              </p>
            </Reveal>

            <Tabs defaultValue="education" className="w-full max-w-4xl mx-auto">
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-secondary/60 p-2 rounded-2xl">
                {industries.map((ind) => (
                  <TabsTrigger
                    key={ind.id}
                    value={ind.id}
                    className="rounded-xl px-5 py-2 font-sans data-[state=active]:bg-card data-[state=active]:shadow-sm flex items-center gap-2"
                  >
                    <ind.icon className="w-4 h-4" /> {ind.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {industries.map((ind) => (
                <TabsContent key={ind.id} value={ind.id} className="mt-10">
                  <Reveal>
                    <div className="bg-card p-8 rounded-3xl border border-border">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <ind.icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground font-sans">{ind.title}</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {ind.examples.map((e) => (
                          <div key={e} className="bg-secondary rounded-xl px-3 py-2 text-sm text-muted-foreground italic font-sans">
                            "{e}"
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-card p-8 rounded-3xl border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">Fully customizable</h3>
                </div>
                <p className="text-muted-foreground mb-6 font-sans">Every company gets its own tenant with:</p>
                <div className="space-y-3">
                  {customizationFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-foreground text-sm font-sans">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="bg-card p-8 rounded-3xl border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">Enterprise-ready</h3>
                </div>
                <p className="text-muted-foreground mb-6 font-sans">Built for security and scale:</p>
                <div className="space-y-3">
                  {enterpriseFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <Lock className="w-4 h-4 text-accent" />
                      <span className="text-foreground text-sm font-sans">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTASection
        kicker="Get started"
        headlineLead="Ready to give your business"
        headlineEmphasis="one helpful brain"
        headlineTrail="?"
        sub="Connect your sources, choose your surfaces, ship in days."
      />
    </div>
  );
};

export default Platform;
