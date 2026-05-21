import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Check,
  Star,
  Crown,
  MessageSquare,
  Calendar,
  RefreshCw,
  Database,
  Share2,
  Globe,
  BarChart3,
  Workflow,
  Mic,
  Info,
  Target,
  TrendingUp,
  User,
} from "lucide-react";

const tiers = [
  {
    name: "Starter",
    planLabel: "PLAN 1",
    planColor: "bg-blue-600 text-white",
    accentText: "text-blue-600",
    badge: null,
    description:
      "Perfect for getting started with all core features and limited access to models.",
    platformFee: "₹5,000",
    usageFee: "₹3,000",
    usageFeeNote: null,
    conversations: "5,000 conversations*",
    conversationsNote: "(Each conversation is Q&A turns)",
    perConversation: "₹0.60 per conversation",
    details: [
      { icon: Calendar, label: "Daily Limit:", value: "200 conversations per day" },
      { icon: RefreshCw, label: "Retraining:", value: "Max 1 per day · Max 5 retrain per month" },
      { icon: Database, label: "Training Content Size", value: "Max URLs trained: 25" },
    ],
    footer: "No carry forward of credits.",
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    planLabel: "PLAN 2",
    planColor: "bg-emerald-600 text-white",
    accentText: "text-emerald-600",
    badge: { label: "Most Popular", icon: Star, color: "bg-emerald-600 text-white" },
    description:
      "For businesses that need more power, advanced models and higher limits.",
    platformFee: "₹7,000",
    usageFee: "₹7,500",
    usageFeeNote: null,
    conversations: "15,000 conversations*",
    conversationsNote: "(Each conversation is Q&A turns)",
    perConversation: "₹0.50 per conversation",
    details: [
      { icon: Calendar, label: "Daily Limit:", value: "Uncapped" },
      {
        icon: RefreshCw,
        label: "Retraining:",
        value: "Max 3 per day · No monthly cap · Scheduler for auto retrain",
      },
      { icon: Database, label: "Training Content Size", value: "Max URLs trained: 50" },
    ],
    footer: "No carry forward of credits.",
    cta: "Upgrade to Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    planLabel: "PLAN 3",
    planColor: "bg-violet-600 text-white",
    accentText: "text-violet-600",
    badge: { label: "Best Value", icon: Crown, color: "bg-violet-600 text-white" },
    description:
      "For businesses that need full control, customization and unlimited scale.",
    platformFee: "₹10,000",
    usageFee: "Customer's own API key",
    usageFeeNote: "OpenAI costs around 0.005 USD – 0.02 USD per conversation.",
    conversations: "Everything in Plan 2",
    conversationsNote: "(except customer's bring own API key)",
    perConversation: null,
    details: [
      {
        icon: RefreshCw,
        label: "Retraining:",
        value: "Max 3 per day · No monthly cap · Scheduler for auto retrain",
      },
      { icon: Database, label: "Training Content Size", value: "No cap on URLs trained" },
    ],
    footer: "No carry forward of credits.",
    cta: "Contact Sales",
  },
];

const featureGroups = [
  {
    name: "Starter Features",
    planLabel: "PLAN 1 — STARTER FEATURES",
    planColor: "bg-blue-600 text-white",
    columns: [
      {
        items: [
          { icon: MessageSquare, title: "Chat Assistant" },
          { icon: Share2, title: "API Integration for conversation" },
          { icon: Database, title: "Custom webform integration to capture leads" },
          {
            icon: Database,
            title: "Studio",
            sub: [
              {
                heading: "Data Sources (Native and MCP)",
                items: ["Web Site", "PDF and Doc and other File Systems", "Google Drive Integration (Coming Soon)", "Shopify", "LKE", "AWS S3"],
              },
            ],
          },
          { icon: Workflow, title: "Action Groups to create Agents" },
          {
            icon: BarChart3,
            title: "Analytics",
            sub: [{ items: ["Basic User Analytics", "Chat Conversation Analytics"] }],
          },
        ],
      },
    ],
  },
  {
    name: "Growth Features",
    planLabel: "PLAN 2 — GROWTH FEATURES (Everything in Starter, plus)",
    planColor: "bg-emerald-600 text-white",
    columns: [
      {
        items: [
          { icon: MessageSquare, title: "Chat Assistant" },
          { icon: Share2, title: "API Integration for conversation" },
          { icon: Database, title: "Custom webform integration to capture leads" },
          {
            icon: Database,
            title: "Studio",
            sub: [
              {
                heading: "Data Sources (Native and MCP)",
                items: ["Web Site", "PDF and Doc and other File Systems", "Google Drive Integration (Coming Soon)", "Shopify", "LKE", "AWS S3"],
              },
            ],
          },
          { icon: Workflow, title: "Action Groups to create Agents" },
        ],
      },
      {
        items: [
          {
            icon: BarChart3,
            title: "Analytics",
            sub: [{ items: ["Advanced User Analytics", "Chat Conversation Analytics"] }],
          },
        ],
      },
    ],
  },
  {
    name: "Enterprise Features",
    planLabel: "PLAN 3 — ENTERPRISE FEATURES (Everything in Growth, plus)",
    planColor: "bg-violet-600 text-white",
    columns: [
      {
        items: [
          { icon: MessageSquare, title: "Chat Assistant" },
          { icon: Share2, title: "API Integration for conversation" },
          { icon: Database, title: "Custom webform integration to capture leads" },
          {
            icon: Database,
            title: "Studio",
            sub: [
              {
                heading: "Data Sources (Native and MCP)",
                items: [
                  "Web Site",
                  "PDF and Doc and other File Systems",
                  "Google Drive Integration (Coming Soon)",
                  "GitHub",
                  "Jira",
                  "Shopify",
                  "LKE",
                  "MSSQL",
                  "MYSQL",
                  "AWS S3",
                ],
              },
              { heading: "Custom Data Sources" },
            ],
          },
          { icon: Workflow, title: "Action Groups to create Agents" },
        ],
      },
      {
        items: [
          {
            icon: BarChart3,
            title: "Analytics",
            sub: [{ items: ["Advanced User Analytics", "Chat Conversation Analytics", "Heatmap"] }],
          },
        ],
      },
    ],
  },
];

const whoShouldOpt = [
  {
    icon: TrendingUp,
    title: "Opt for Growth if you:",
    color: "text-emerald-600 bg-emerald-600/10",
    points: [
      "Need increased reasoning depth and better model quality.",
      "Want to use multiple data sources for richer, up-to-date answers.",
      "Need advanced analytics for deeper insights and tracking.",
      "Frequently update your dataset or website content.",
    ],
  },
  {
    icon: Target,
    title: "Opt for Enterprise if you:",
    color: "text-violet-600 bg-violet-600/10",
    points: [
      "Want full personalization and branding control.",
      "Need unlimited data sources and no training URL limits.",
      "Have specific security, compliance, or cost management needs.",
      "Prefer to use your own API key for complete cost transparency.",
    ],
  },
];

const voicePacks = [
  { minutes: "100 minutes", price: "₹1,000", free: "10 minutes free" },
  { minutes: "200 minutes", price: "₹2,000", free: "25 minutes free" },
  { minutes: "500 minutes", price: "₹5,000", free: "60 minutes free" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">
            Choose the right plan for <span className="italic">your business</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Flexible plans to power your AI chatbot with the right balance of control, performance, and scalability.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card rounded-3xl border p-7 flex flex-col ${
                tier.highlighted ? "border-accent ring-2 ring-accent/20" : "border-border"
              }`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${tier.planColor} font-sans`}>
                    {tier.planLabel}
                  </span>
                  <span className={`text-xl font-semibold font-sans ${tier.accentText}`}>{tier.name}</span>
                </div>
                {tier.badge && (
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded font-sans ${tier.badge.color}`}>
                    <tier.badge.icon className="w-3.5 h-3.5" />
                    {tier.badge.label}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground font-sans mb-6 min-h-[40px]">{tier.description}</p>

              {/* Fees */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <div className="text-xs font-medium text-muted-foreground font-sans mb-1">Platform Fee</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-foreground font-sans">{tier.platformFee}</span>
                    <span className="text-xs text-muted-foreground font-sans">INR</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground font-sans mb-1">Usage Fee</div>
                  {tier.usageFee.startsWith("₹") ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-foreground font-sans">{tier.usageFee}</span>
                      <span className="text-xs text-muted-foreground font-sans">INR</span>
                    </div>
                  ) : (
                    <div className={`text-base font-semibold font-sans ${tier.accentText}`}>{tier.usageFee}</div>
                  )}
                  {tier.usageFeeNote && (
                    <p className="text-xs text-muted-foreground font-sans mt-1">{tier.usageFeeNote}</p>
                  )}
                </div>
              </div>

              {/* Details box */}
              <div className="bg-secondary/60 rounded-2xl p-5 space-y-4 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <MessageSquare className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.accentText}`} />
                  <div>
                    <div className={`font-semibold font-sans text-sm ${tier.accentText}`}>{tier.conversations}</div>
                    <div className="text-xs text-muted-foreground font-sans">{tier.conversationsNote}</div>
                    {tier.perConversation && (
                      <div className="text-sm text-foreground font-sans mt-2">{tier.perConversation}</div>
                    )}
                  </div>
                </div>
                {tier.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <d.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.accentText}`} />
                    <div className="text-sm font-sans">
                      <span className="font-medium text-foreground">{d.label}</span>{" "}
                      <span className="text-muted-foreground">{d.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans mb-5">
                <Info className={`w-4 h-4 ${tier.accentText}`} />
                {tier.footer}
              </div>

              <Button asChild variant={tier.highlighted ? "default" : "outline"} className="w-full">
                <Link to="/request-demo">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div>
          <div className="flex justify-center mb-8">
            <span className="bg-foreground text-background px-6 py-2 rounded-md text-sm font-semibold tracking-wide font-sans">
              FEATURES COMPARISON
            </span>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {featureGroups.map((group) => (
              <div key={group.name} className="bg-card rounded-3xl border border-border overflow-hidden">
                <div className={`${group.planColor} px-5 py-3 text-sm font-semibold font-sans`}>
                  {group.planLabel}
                </div>
                <div className="p-6 grid sm:grid-cols-2 gap-x-4 gap-y-4">
                  {group.columns.map((col, ci) => (
                    <div key={ci} className="space-y-4">
                      {col.items.map((item, ii) => (
                        <div key={ii} className="text-sm font-sans">
                          <div className="flex items-center gap-2 font-medium text-foreground">
                            <item.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          {item.sub && (
                            <div className="ml-6 mt-2 space-y-2">
                              {item.sub.map((s: any, si: number) => (
                                <div key={si}>
                                  {s.heading && (
                                    <div className="text-sm text-foreground font-sans mb-1">
                                      <span className="text-muted-foreground">a)</span> {s.heading}
                                    </div>
                                  )}
                                  {s.items && (
                                    <ul className="ml-4 space-y-1">
                                      {s.items.map((sub: string) => (
                                        <li key={sub} className="text-sm text-muted-foreground font-sans list-disc list-inside">
                                          {sub}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Opt */}
        <div className="bg-card rounded-3xl border border-border p-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-normal text-foreground tracking-tight">
                Who should opt <span className="italic">for which plan?</span>
              </h3>
            </div>
            {whoShouldOpt.map((g) => (
              <div key={g.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${g.color}`}>
                    <g.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground font-sans">{g.title}</h4>
                </div>
                <ul className="space-y-2">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Voice Assistant */}
        <div className="bg-card rounded-3xl border border-violet-500/30 p-8">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-4">
              <Mic className="w-10 h-10 text-violet-600" />
              <div>
                <h3 className="text-xl font-semibold text-foreground font-sans">Nexus Voice Assistant</h3>
                <p className="text-sm text-muted-foreground font-sans">Intelligent multilingual voice assistant with ultimate accuracy.</p>
              </div>
            </div>
            {voicePacks.map((p) => (
              <div key={p.minutes} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                  <Mic className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <div className="font-semibold text-foreground font-sans">
                    {p.minutes} – {p.price} <span className="text-xs text-muted-foreground">INR</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-sans">{p.free}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground font-sans">
          *Each conversation is 5 Q&A turns (1 user question + 1 model answer = 1 turn). All prices are exclusive of taxes.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
