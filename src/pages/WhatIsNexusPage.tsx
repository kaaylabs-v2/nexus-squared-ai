import { 
  Globe, 
  Navigation, 
  Database, 
  Brain, 
  Users, 
  Palette, 
  Shield,
  Search,
  FileText,
  Zap,
  MessageSquare,
  ShoppingCart,
  HelpCircle,
  ClipboardList,
  BarChart3,
  Lock,
  CheckCircle,
  GraduationCap,
  Stethoscope,
  Factory,
  Store
} from "lucide-react";

const WhatIsNexusPage = () => {
  const coreCapabilities = [
    {
      icon: Globe,
      title: "Connects Directly to Your Website",
      subtitle: "Zero Engineering Required",
      description: "Just drop in the Nexus² widget, and it automatically crawls your entire website, detects products, menus, categories, pages & URLs, builds an intelligent index, and updates continuously.",
    },
    {
      icon: Navigation,
      title: "Helps Users Navigate Your Website",
      subtitle: "The #1 Differentiator",
      description: "Take users to any page, highlight specific sections, deep-link to products, filter categories, compare items, and guide users step-by-step.",
    },
    {
      icon: Database,
      title: "Connects All Your Data Sources",
      subtitle: "Beyond Your Website",
      description: "Tie into JIRA, Google Workspace, SQL databases, Amazon S3, PDFs, docs, CRMs & product catalogs. One brain for everything your business knows.",
    },
    {
      icon: Brain,
      title: "Powered by Advanced RAG + Multi-Agent AI",
      subtitle: "Modern AI Engine",
      description: "Hybrid search, intelligent chunking, multi-agent workflows, real-time connectors, automatic citations, and continuous syncing.",
    },
  ];

  const customerUseCases = [
    { icon: Search, text: "Product search" },
    { icon: ShoppingCart, text: "Guided shopping" },
    { icon: HelpCircle, text: "Support questions" },
    { icon: ClipboardList, text: "Order questions" },
    { icon: Users, text: "Account help" },
    { icon: Navigation, text: "Easy site navigation" },
  ];

  const internalUseCases = [
    { icon: Search, text: "Search across JIRA or Sheets" },
    { icon: Database, text: "Query databases" },
    { icon: FileText, text: "Retrieve documents" },
    { icon: Zap, text: "Automate workflows" },
    { icon: MessageSquare, text: "Answer process questions" },
  ];

  const customizationFeatures = [
    "Custom instructions",
    "Model selection (Claude, GPT-4, Llama, Titan)",
    "UI personalization",
    "Access controls",
    "Analytics & insights",
    "Role-based permissions",
  ];

  const enterpriseFeatures = [
    "SOC-2 aligned",
    "Multi-tenant infrastructure",
    "Data isolation for every client",
    "Encrypted credentials (OAuth/API key vault)",
    "On-demand access logs",
  ];

  const exampleQueries = [
    "Show me all the new holiday products under $50",
    "Where can I find my order history?",
    "Take me to the consultant resources page",
    "Compare these two items for me",
  ];

  const industryUseCases = [
    {
      icon: GraduationCap,
      title: "Education",
      examples: [
        "What courses are available for spring semester?",
        "How do I apply for financial aid?",
        "Take me to the course registration page",
        "What are the library hours this week?",
        "Show me scholarship opportunities for STEM majors",
      ],
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      examples: [
        "How do I schedule an appointment?",
        "Where can I find my test results?",
        "What insurance plans do you accept?",
        "Take me to the patient portal login",
        "Find a specialist near me",
      ],
    },
    {
      icon: Factory,
      title: "Industrial",
      examples: [
        "Show me the safety compliance documents",
        "Where can I find equipment manuals?",
        "What's the status of order #45921?",
        "Take me to the parts catalog",
        "How do I submit a maintenance request?",
      ],
    },
    {
      icon: Store,
      title: "E-commerce",
      examples: [
        "Show me dresses under $100 in size medium",
        "Where's my order? Tracking #ABC123",
        "Compare these two laptops for me",
        "What's your return policy?",
        "Find me gifts for a 10-year-old",
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero intro */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight mb-8">
              What is <span className="italic">Nexus²</span>?
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-sans">
              Today's websites are packed with information. Users don't want to click through menus or search bars — they want answers instantly.
            </p>
            
            <p className="text-lg text-foreground font-medium mb-10 font-sans">
              Nexus² turns your website into a conversational experience where customers simply ask:
            </p>

            {/* Example queries */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              {exampleQueries.map((query, i) => (
                <div 
                  key={i}
                  className="bg-card border border-border rounded-2xl p-4 text-left"
                >
                  <span className="text-muted-foreground text-sm italic font-sans">"{query}"</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground font-medium font-sans">
              …and Nexus² does it. It doesn't just respond — it <span className="text-accent">navigates</span>, <span className="text-accent">highlights</span>, <span className="text-accent">deep links</span>, and <span className="text-accent">retrieves structured results</span>.
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground text-center mb-12">
              What Nexus² <span className="italic">Does</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {coreCapabilities.map((capability, i) => (
                <div
                  key={i}
                  className="bg-card p-8 rounded-3xl border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <capability.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 font-sans">{capability.title}</h3>
                      <p className="text-sm text-accent font-medium mb-3 font-sans">{capability.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed font-sans">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Works for Every Department */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground text-center mb-12">
              Works for <span className="italic">Every Department</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* For Customers */}
              <div className="bg-card p-8 rounded-3xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">For Customers</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {customerUseCases.map((useCase, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground">
                      <useCase.icon className="w-4 h-4 text-accent/70" />
                      <span className="text-sm font-sans">{useCase.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Internal Teams */}
              <div className="bg-card p-8 rounded-3xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">For Internal Teams</h3>
                </div>
                <div className="space-y-3">
                  {internalUseCases.map((useCase, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground">
                      <useCase.icon className="w-4 h-4 text-accent/70" />
                      <span className="text-sm font-sans">{useCase.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industry Use Cases */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground text-center mb-4">
              Built for <span className="italic">Every Industry</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-sans">
              See how Nexus² transforms user experiences across different verticals
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {industryUseCases.map((industry, i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-3xl border border-border hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <industry.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground font-sans">{industry.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {industry.examples.map((example, j) => (
                      <div 
                        key={j}
                        className="bg-secondary rounded-xl px-3 py-2 text-sm text-muted-foreground italic font-sans"
                      >
                        "{example}"
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customization & Enterprise */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Customization */}
            <div className="bg-card p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-sans">Fully Customizable</h3>
              </div>
              <p className="text-muted-foreground mb-6 font-sans">Every company gets its own tenant with:</p>
              <div className="space-y-3">
                {customizationFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-foreground text-sm font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Ready */}
            <div className="bg-card p-8 rounded-3xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground font-sans">Enterprise-Ready</h3>
              </div>
              <p className="text-muted-foreground mb-6 font-sans">Built for security and scale:</p>
              <div className="space-y-3">
                {enterpriseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-accent" />
                    <span className="text-foreground text-sm font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsNexusPage;