import { Shield, Lock, FileCheck, Building, Key, Activity } from "lucide-react";

const Security = () => {
  const features = [
    { icon: Shield, title: "Data isolation", subtitle: "per tenant" },
    { icon: Lock, title: "Zero cross-tenant", subtitle: "data leakage" },
    { icon: FileCheck, title: "Granular access", subtitle: "controls" },
    { icon: Activity, title: "Audit logs &", subtitle: "activity tracking" },
    { icon: Building, title: "Enterprise SSO", subtitle: "ready" },
    { icon: Key, title: "API key", subtitle: "per connector" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-bg-primary to-[#0F1419] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--color-accent)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--color-accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-text-light mb-12 tracking-tight">
          Built for security-conscious teams
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl hover:bg-bg-card-dark/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-text-light font-semibold text-sm">{feature.title}</p>
                <p className="text-text-muted-light text-xs">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
