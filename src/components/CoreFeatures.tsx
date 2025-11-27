import { Plug, MessageSquare, Layers, Users, UserCog, Lock } from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      icon: Plug,
      title: "Connect all your data",
      description: "Plug into Jira, Google Workspace, MySQL, S3, flat files, websites.",
    },
    {
      icon: MessageSquare,
      title: "Chat with your data",
      description: "Natural language queries with precise, cited answers.",
    },
    {
      icon: Layers,
      title: "Enterprise RAG engine",
      description: "Hybrid retrieval across structured & unstructured data with references.",
    },
    {
      icon: Users,
      title: "Multi-tenant control",
      description: "Isolated workspaces for each client, BU, or environment.",
    },
    {
      icon: UserCog,
      title: "Admin & superadmin",
      description: "Per-tenant dashboards plus global oversight for usage & health.",
    },
    {
      icon: Lock,
      title: "Secure architecture",
      description: "Fine-grained access, least-privilege design, audit logging.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-16">
          Everything you need to ship <br className="hidden sm:block" />
          intelligent AI assistants
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-2xl border border-border hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
