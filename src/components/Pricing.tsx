import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Mic } from "lucide-react";
import Reveal from "./Reveal";

const tiers = [
  {
    plan: "Plan 01 · Starter",
    tagline: "Perfect for getting started with all core features and limited access to models.",
    platformFee: "₹5,000 INR",
    usageFee: "₹3,000 INR",
    conversations: "5,000 conversations*",
    perConv: "₹0.60 per conversation",
    details: [
      "Daily Limit: 200 conversations per day",
      "Retraining: Max 1 per day · Max 5 retrain per month",
      "Training Content Size: Max URLs trained: 25",
      "No carry forward of credits.",
    ],
    cta: "Start with Starter",
    variant: "outline" as const,
    pill: null as string | null,
    lift: false,
  },
  {
    plan: "Plan 02 · Growth",
    tagline: "For businesses that need more power, advanced models and higher limits.",
    platformFee: "₹7,000 INR",
    usageFee: "₹7,500 INR",
    conversations: "15,000 conversations*",
    perConv: "₹0.50 per conversation",
    details: [
      "Daily Limit: Uncapped",
      "Retraining: Max 3 per day · No monthly cap · Scheduler for auto retrain",
      "Training Content Size: Max URLs trained: 50",
      "No carry forward of credits.",
    ],
    cta: "Upgrade to Growth",
    variant: "default" as const,
    pill: "Most popular",
    lift: true,
  },
  {
    plan: "Plan 03 · Enterprise",
    tagline: "For businesses that need full control, customization and unlimited scale.",
    platformFee: "₹10,000 INR",
    usageFee: "Customer's own API key",
    conversations: "Everything in Plan 2 (except customer's bring own API key)",
    perConv: "(OpenAI costs around 0.005 USD – 0.02 USD per conversation.)",
    details: [
      "Retraining: Max 3 per day · No monthly cap · Scheduler for auto retrain",
      "Training Content Size: No cap on URLs trained",
      "No carry forward of credits.",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    pill: "Best value",
    lift: false,
  },
];

const starterFeatures = {
  heading: "Plan 01 — Starter features",
  items: [
    { type: "leaf", label: "Chat Assistant" },
    { type: "leaf", label: "API Integration for conversation" },
    { type: "leaf", label: "Custom webform integration to capture leads" },
    { type: "group", label: "Studio" },
    { type: "sub", label: "a) Data Sources (Native and MCP)" },
    { type: "bullet", label: "Web Site" },
    { type: "bullet", label: "PDF and Doc and other File Systems" },
    { type: "bullet", label: "Google Drive Integration (Coming Soon)" },
    { type: "bullet", label: "Shopify" },
    { type: "bullet", label: "LKE" },
    { type: "bullet", label: "AWS S3" },
    { type: "leaf", label: "Action Groups to create Agents" },
    { type: "group", label: "Analytics" },
    { type: "bullet", label: "Basic User Analytics" },
    { type: "bullet", label: "Chat Conversation Analytics" },
  ],
};

const growthFeatures = {
  heading: "Plan 02 — Growth features",
  subheading: "Everything in Starter, plus",
  items: [
    { type: "leaf", label: "Chat Assistant" },
    { type: "leaf", label: "API Integration for conversation" },
    { type: "leaf", label: "Custom webform integration to capture leads" },
    { type: "group", label: "Studio" },
    { type: "sub", label: "a) Data Sources (Native and MCP)" },
    { type: "bullet", label: "Web Site" },
    { type: "bullet", label: "PDF and Doc and other File Systems" },
    { type: "bullet", label: "Google Drive Integration (Coming Soon)" },
    { type: "bullet", label: "Shopify" },
    { type: "bullet", label: "LKE" },
    { type: "bullet", label: "AWS S3" },
    { type: "leaf", label: "Action Groups to create Agents" },
    { type: "group", label: "Analytics" },
    { type: "bullet", label: "Advanced User Analytics" },
    { type: "bullet", label: "Chat Conversation Analytics" },
  ],
};

const enterpriseFeatures = {
  heading: "Plan 03 — Enterprise features",
  subheading: "Everything in Growth, plus",
  items: [
    { type: "leaf", label: "Chat Assistant" },
    { type: "leaf", label: "API Integration for conversation" },
    { type: "leaf", label: "Custom webform integration to capture leads" },
    { type: "group", label: "Studio" },
    { type: "sub", label: "a) Data Sources (Native and MCP)" },
    { type: "bullet", label: "Web Site" },
    { type: "bullet", label: "PDF and Doc and other File Systems" },
    { type: "bullet", label: "Google Drive Integration (Coming Soon)" },
    { type: "bullet", label: "GitHub" },
    { type: "bullet", label: "Jira" },
    { type: "bullet", label: "Shopify" },
    { type: "bullet", label: "LKE" },
    { type: "bullet", label: "MSSQL" },
    { type: "bullet", label: "MYSQL" },
    { type: "bullet", label: "AWS S3" },
    { type: "sub", label: "a) Custom Data Sources" },
    { type: "leaf", label: "Action Groups to create Agents" },
    { type: "group", label: "Analytics" },
    { type: "bullet", label: "Advanced User Analytics" },
    { type: "bullet", label: "Chat Conversation Analytics" },
    { type: "bullet", label: "Heatmap" },
  ],
};

const featureColumns = [starterFeatures, growthFeatures, enterpriseFeatures];

const voicePacks = [
  { minutes: "100 minutes", price: "₹1,000 INR", free: "10 minutes free" },
  { minutes: "200 minutes", price: "₹2,000 INR", free: "25 minutes free" },
  { minutes: "500 minutes", price: "₹5,000 INR", free: "60 minutes free" },
];

const SagePill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium font-sans border border-accent/20">
    {children}
  </span>
);

const FeatureRow = ({ item }: { item: { type: string; label: string } }) => {
  if (item.type === "group") {
    return (
      <div className="pt-3 mt-1 text-sm font-semibold text-foreground font-sans">
        {item.label}
      </div>
    );
  }
  if (item.type === "sub") {
    return (
      <div className="pl-1 text-sm text-foreground/80 font-sans">{item.label}</div>
    );
  }
  if (item.type === "bullet") {
    return (
      <div className="flex items-start gap-2 pl-4 text-sm text-muted-foreground font-sans">
        <span className="text-accent mt-1.5 leading-none">•</span>
        <span>{item.label}</span>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2.5 text-sm font-sans">
      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
      <span className="text-foreground">{item.label}</span>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        {/* Tier cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <Reveal key={tier.plan} delay={i * 0.08}>
              <div
                className={`relative bg-card rounded-[18px] border border-border p-8 flex flex-col h-full shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)] transition-transform duration-200 hover:-translate-y-0.5 ${
                  tier.lift ? "lg:-translate-y-1.5 hover:-translate-y-2.5" : ""
                }`}
              >
                {tier.pill && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium font-sans border border-accent/30">
                    {tier.pill}
                  </span>
                )}

                <div className="mb-4">
                  <SagePill>{tier.plan}</SagePill>
                </div>

                <p className="text-sm text-muted-foreground font-sans mb-6 min-h-[48px]">
                  {tier.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-border space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-2 text-sm font-sans">
                    <span className="text-muted-foreground">Platform Fee:</span>
                    <span className="text-foreground font-semibold">{tier.platformFee}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 text-sm font-sans">
                    <span className="text-muted-foreground">Usage Fee:</span>
                    <span className="text-foreground font-semibold">{tier.usageFee}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-foreground font-sans font-medium">{tier.conversations}</p>
                  <p className="text-sm text-muted-foreground font-sans">{tier.perConv}</p>
                </div>

                <div className="space-y-2.5 flex-1 mb-8">
                  {tier.details.map((d) => (
                    <div key={d} className="flex items-start gap-2.5 text-sm font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{d}</span>
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

        {/* Features Comparison */}
        <div>
          <Reveal>
            <div className="text-center mb-12">
              <div className="mb-5">
                <SagePill>Features</SagePill>
              </div>
              <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight">
                What's included,{" "}
                <span className="font-serif italic text-accent">side by side</span>.
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {featureColumns.map((col, i) => (
              <Reveal key={col.heading} delay={i * 0.08}>
                <div className="bg-card rounded-[18px] border border-border overflow-hidden h-full shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)] transition-transform duration-200 hover:-translate-y-0.5">
                  <div className="px-6 py-5 border-b border-border bg-accent/[0.04]">
                    <p className="text-xs uppercase tracking-widest text-accent font-sans font-medium">
                      {col.heading}
                    </p>
                    {"subheading" in col && (col as { subheading?: string }).subheading && (
                      <p className="text-xs text-muted-foreground font-sans mt-1">
                        {(col as { subheading?: string }).subheading}
                      </p>
                    )}
                  </div>
                  <div className="p-6 space-y-2">
                    {col.items.map((item, idx) => (
                      <FeatureRow key={idx} item={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Who should opt for which plan */}
        <Reveal>
          <div className="bg-card rounded-[18px] border border-border p-8 lg:p-10 shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)]">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight">
                Who should opt for{" "}
                <span className="font-serif italic text-accent">which plan</span>?
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-xl text-foreground mb-4">
                  Opt for <span className="italic text-accent">Growth</span> if you:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Need increased reasoning depth and better model quality.",
                    "Want to use multiple data sources for richer, up-to-date answers.",
                    "Need advanced analytics for deeper insights and tracking.",
                    "Frequently update your dataset or website content.",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xl text-foreground mb-4">
                  Opt for <span className="italic text-accent">Enterprise</span> if you:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Want full personalization and branding control.",
                    "Need unlimited data sources and no training URL limits.",
                    "Have specific security, compliance, or cost management needs.",
                    "Prefer to use your own API key for complete cost transparency.",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Voice band — cream + sage */}
        <Reveal>
          <div className="bg-card rounded-[18px] border border-border p-8 lg:p-10 shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)]">
            <div className="text-center mb-8">
              <div className="mb-4">
                <SagePill>Add-on</SagePill>
              </div>
              <h3 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">
                Nexus <span className="font-serif italic text-accent">Voice Assistant</span>
              </h3>
              <p className="text-muted-foreground font-sans">
                Intelligent multilingual voice assistant with ultimate accuracy.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {voicePacks.map((p) => (
                <div
                  key={p.minutes}
                  className="bg-background rounded-[18px] p-6 flex items-center gap-4 border border-border transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-sans">
                      {p.minutes} – {p.price}
                    </div>
                    <div className="text-sm text-muted-foreground font-sans">{p.free}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="text-center text-sm text-muted-foreground font-sans max-w-2xl mx-auto">
          *Each conversation is 5 Q&amp;A turns (1 user question + 1 model answer = 1 turn). All
          prices are exclusive of taxes.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
