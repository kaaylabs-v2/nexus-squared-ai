import { Plug, MessageSquare, Layers, Users, UserCog, Lock } from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversational interface",
      description: "Natural chat experience that feels helpful, not robotic.",
    },
    {
      icon: Layers,
      title: "Smart page suggestions",
      description: "Understands intent and guides visitors to the right content.",
    },
    {
      icon: Plug,
      title: "One-line embed",
      description: "Drop a single script tag into your site. Works everywhere.",
    },
    {
      icon: Users,
      title: "Custom branding",
      description: "Colors, logo, welcome message—make it yours.",
    },
    {
      icon: UserCog,
      title: "Conversation insights",
      description: "See what visitors are looking for. Improve your content.",
    },
    {
      icon: Lock,
      title: "Privacy-first",
      description: "No data tracking. No cookies. Just helpful navigation.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-16">
          Everything you need for a <br className="hidden sm:block" />
          perfect navigation experience
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
