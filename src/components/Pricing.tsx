import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      popular: false,
      features: [
        "1 workspace",
        "3 connectors",
        "1,000 queries/month",
        "Community support",
      ],
      cta: "Get Started",
      variant: "outline" as const,
    },
    {
      name: "Growth",
      price: "$299",
      period: "/mo",
      popular: true,
      features: [
        "10 workspaces",
        "All connectors",
        "50k queries/month",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
      ],
      cta: "Start Trial",
      variant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited workspaces",
        "SSO & SAML",
        "Custom SLAs",
        "White-label option",
        "Dedicated CSM",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            Pricing that scales with you
          </h2>
          <p className="text-xl text-muted-foreground">Start free. Upgrade when ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl border p-8 hover-lift ${
                tier.popular
                  ? "border-accent shadow-xl relative ring-2 ring-accent/20"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-accent text-primary text-sm font-bold rounded-full">
                    POPULAR ★
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground text-lg">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.variant}
                className={`w-full ${
                  tier.popular
                    ? "bg-accent text-primary hover:bg-accent/90 font-semibold"
                    : "border-border text-foreground hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
