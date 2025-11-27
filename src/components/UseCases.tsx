import { BarChart3, MessageCircle, Wrench, TrendingUp } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: BarChart3,
      title: "E-commerce sites",
      description: "Help shoppers find products, check shipping, and navigate categories instantly.",
    },
    {
      icon: MessageCircle,
      title: "SaaS product sites",
      description: "Guide visitors to pricing, features, docs—reduce support tickets.",
    },
    {
      icon: Wrench,
      title: "Corporate websites",
      description: "Navigate services, case studies, contact forms without the maze.",
    },
    {
      icon: TrendingUp,
      title: "Portfolio & agency sites",
      description: "Showcase projects, answer FAQs, book consultations—all in chat.",
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
