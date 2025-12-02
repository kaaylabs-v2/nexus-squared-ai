import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Trial",
      price: "Free",
      period: " — Limited Time",
      popular: false,
      features: [
        "Website scraping",
        "Flat-file uploads (PDFs, Docs, CSVs, etc.)",
        "Up to 2 basic connectors (optional / non-API)",
        "1,000 queries/month",
        "Full access to the Studio (admin panel)",
        "Valid for 14 days",
      ],
      cta: "Start Free Trial",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$100",
      period: "/mo",
      popular: true,
      features: [
        "Up to 5 integrations (JIRA, Google Workspace, SQL, S3, HubSpot, etc.)",
        "Website scraping + flat files",
        "50k queries/month",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Access to Superadmin dashboard",
      ],
      cta: "Upgrade to Pro",
      variant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited integrations",
        "SSO & SAML",
        "Custom SLAs",
        "White-label option",
        "Dedicated Customer Success Manager",
        "On-premise / VPC deployment",
        "Compliance + advanced governance",
        "Premium support",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">
            Pricing that <span className="italic">scales with you</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans">Start free. Upgrade when ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-card rounded-3xl border p-8 ${
                tier.popular
                  ? "border-accent relative ring-2 ring-accent/20"
                  : "border-border hover:border-accent/30 transition-colors"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full font-sans">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 font-sans">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-semibold text-foreground font-sans">{tier.price}</span>
                  <span className="text-muted-foreground font-sans">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-sans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
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