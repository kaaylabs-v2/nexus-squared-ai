import { BarChart3, MessageCircle, Wrench, TrendingUp } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: BarChart3,
      title: "AI agent for analytics",
      description: "Let teams query MySQL and databases in plain English.",
    },
    {
      icon: MessageCircle,
      title: "Support & docs assistant",
      description: "Answer questions using internal knowledge bases.",
    },
    {
      icon: Wrench,
      title: "Ops & engineering copilot",
      description: "AI layer on Jira, logs, and runbooks for devs.",
    },
    {
      icon: TrendingUp,
      title: "Data room for leadership",
      description: "Executives ask questions across all company data.",
    },
  ];

  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-16">
          What teams build with Nexus²
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-2xl border border-border hover-lift group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{useCase.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
