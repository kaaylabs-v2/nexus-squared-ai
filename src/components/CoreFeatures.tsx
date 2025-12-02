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
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-6">
          Everything you need for a{" "}
          <span className="italic">perfect experience</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16 font-sans">
          Built for teams who want to help their visitors navigate with confidence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;