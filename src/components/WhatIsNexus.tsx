import { Shield, Zap, Database, Rocket } from "lucide-react";

const WhatIsNexus = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-tenant by design",
      description: "Isolated client environments",
    },
    {
      icon: Shield,
      title: "Secure by default",
      description: "Zero cross-tenant leakage",
    },
    {
      icon: Database,
      title: "Chat with everything",
      description: "SQL, docs, tickets, files",
    },
    {
      icon: Rocket,
      title: "Deploy in minutes",
      description: "Not weeks or months",
    },
  ];

  return (
    <section id="product" className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-text-primary tracking-tight mb-6">
          The platform that makes AI <br className="hidden sm:block" />
          <span className="text-gradient-accent">actually useful</span> for your team
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-16">
          {/* Left: Description */}
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Nexus² is a <strong className="text-text-primary font-semibold">multi-tenant AI assistant platform</strong> designed
              for enterprises.
            </p>
            <p>
              Connect your internal data sources, configure AI behavior per workspace, and deploy
              copilots that know your business inside out.
            </p>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-2xl border border-border hover-lift group"
              >
                <feature.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNexus;
