import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, MessageSquare, Mic, Info } from "lucide-react";
import Reveal from "./Reveal";

const tiers = [
  {
    plan: "Plan 01 · Starter",
    name: "Starter",
    price: "₹8,000",
    period: "/month",
    description: "Everything you need to launch the assistant.",
    features: [
      "Chat assistant",
      "API integration for conversations",
      "Custom webform integration to capture leads",
      "Native + MCP data sources (Web, PDFs, Docs, Shopify, S3)",
      "Action groups to create agents",
      "Basic user analytics",
      "Chat conversation analytics",
    ],
    cta: "Start free",
    variant: "outline" as const,
    highlight: false,
  },
  {
    plan: "Plan 02 · Growth",
    name: "Growth",
    price: "₹14,500",
    period: "/month",
    description: "More power, advanced analytics, higher limits.",
    features: [
      "Everything in Starter",
      "Advanced user analytics",
      "Higher daily limits — uncapped",
      "Scheduler for auto retrain",
      "Max URLs trained: 50",
    ],
    cta: "Choose Growth",
    variant: "default" as const,
    highlight: true,
  },
  {
    plan: "Plan 03 · Enterprise",
    name: "Enterprise",
    price: "₹10,000",
    period: "/month + BYO API key",
    description: "Full control, your API key, unlimited scale.",
    features: [
      "Everything in Growth",
      "GitHub, Jira, MSSQL, MySQL data sources",
      "Custom data sources",
      "Heatmap analytics",
      "No cap on URLs trained",
      "Bring your own OpenAI API key",
    ],
    cta: "Talk to sales",
    variant: "outline" as const,
    highlight: false,
  },
];

const inheritedStarter = [
  "Chat assistant",
  "API integration for conversations",
  "Custom webform integration",
  "Native + MCP data sources",
  "Action groups for agents",
  "Chat conversation analytics",
];

const voicePacks = [
  { minutes: "100 minutes", price: "₹1,000", free: "10 minutes free" },
  { minutes: "200 minutes", price: "₹2,000", free: "25 minutes free" },
  { minutes: "500 minutes", price: "₹5,000", free: "60 minutes free" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Tier cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative bg-card rounded-3xl border p-8 flex flex-col h-full ${
                  tier.highlight
                    ? "border-accent shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.25)] lg:-translate-y-1"
                    : "border-border"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium font-sans border border-accent/30">
                    Most popular
                  </span>
                )}

                <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide font-sans mb-4">
                  {tier.plan}
                </span>

                <p className="text-sm text-muted-foreground font-sans mb-6 min-h-[40px]">
                  {tier.description}
                </p>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-foreground font-sans">{tier.price}</span>
                    <span className="text-sm text-muted-foreground font-sans">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-sans">5,000 conversations / mo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mic className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-sans">150 voice minutes / mo</span>
                  </div>
                </div>

                <div className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-sans">{f}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant={tier.variant} className="w-full">
                  <Link to="/request-demo">{tier.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto">
            <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground font-sans">
              Unused conversations and voice minutes roll over 30 days. Maximum carry-over is
              one month's allowance.
            </p>
          </div>
        </Reveal>

        {/* Features Comparison */}
        <div>
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-5 font-sans">
                Features
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight">
                What's included, <span className="font-serif italic text-accent">side by side</span>.
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Starter — full list */}
            <Reveal>
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full">
                <div className="px-6 py-4 bg-accent/5 border-b border-border">
                  <p className="text-xs uppercase tracking-widest text-accent font-sans">Plan 01</p>
                  <h3 className="font-serif text-xl text-foreground">Starter</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {tiers[0].features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Growth delta */}
            <Reveal delay={0.05}>
              <div className="bg-card rounded-3xl border border-accent/40 overflow-hidden h-full">
                <div className="px-6 py-4 bg-accent/10 border-b border-border">
                  <p className="text-xs uppercase tracking-widest text-accent font-sans">Plan 02</p>
                  <h3 className="font-serif text-xl text-foreground">Growth</h3>
                  <p className="text-xs text-muted-foreground font-sans mt-1">Everything in Starter, plus</p>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-sm font-sans">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Advanced user analytics{" "}
                      <span className="text-muted-foreground line-through ml-1">Basic user analytics</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm font-sans">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Uncapped daily limits</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm font-sans">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Scheduler for auto retrain</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm font-sans">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Max URLs trained: 50</span>
                  </div>
                  <details className="pt-3 border-t border-border mt-3">
                    <summary className="text-xs text-muted-foreground font-sans cursor-pointer hover:text-foreground">
                      See inherited features
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {inheritedStarter.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs font-sans text-muted-foreground">
                          <Check className="w-3 h-3 text-accent/60 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </Reveal>

            {/* Enterprise delta */}
            <Reveal delay={0.1}>
              <div className="bg-card rounded-3xl border border-border overflow-hidden h-full">
                <div className="px-6 py-4 bg-accent/5 border-b border-border">
                  <p className="text-xs uppercase tracking-widest text-accent font-sans">Plan 03</p>
                  <h3 className="font-serif text-xl text-foreground">Enterprise</h3>
                  <p className="text-xs text-muted-foreground font-sans mt-1">Everything in Growth, plus</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "GitHub data source",
                    "Jira data source",
                    "MSSQL data source",
                    "MySQL data source",
                    "Custom data sources",
                    "Heatmap analytics",
                    "Bring your own API key",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </div>
                  ))}
                  <details className="pt-3 border-t border-border mt-3">
                    <summary className="text-xs text-muted-foreground font-sans cursor-pointer hover:text-foreground">
                      See inherited features
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {[...inheritedStarter, "Advanced user analytics", "Uncapped daily limits", "Scheduler for auto retrain"].map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs font-sans text-muted-foreground">
                          <Check className="w-3 h-3 text-accent/60 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Voice band — cream + sage */}
        <Reveal>
          <div className="bg-card rounded-3xl border border-border p-8 lg:p-10">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-4 font-sans">
                Add-on
              </span>
              <h3 className="font-serif text-3xl text-foreground mb-2">
                Nexus <span className="italic text-accent">Voice Assistant</span>
              </h3>
              <p className="text-muted-foreground font-sans">
                Intelligent multilingual voice — add minutes as you grow.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {voicePacks.map((p) => (
                <div
                  key={p.minutes}
                  className="bg-secondary/60 rounded-2xl p-6 flex items-center gap-4 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-sans">
                      {p.minutes} · {p.price}
                    </div>
                    <div className="text-sm text-muted-foreground font-sans">{p.free}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="text-center text-sm text-muted-foreground font-sans">
          *Each conversation is 5 Q&A turns (1 user question + 1 model answer = 1 turn). All
          prices exclusive of taxes.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
