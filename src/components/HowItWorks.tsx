import { Link2, Settings, RocketIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Connect Sources",
      description: "Link Jira, MySQL, S3, and more",
    },
    {
      number: "02",
      icon: Settings,
      title: "Configure Workspace",
      description: "Choose models, set permissions",
    },
    {
      number: "03",
      icon: RocketIcon,
      title: "Deploy & Monitor",
      description: "Embed, share, and track ROI",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-20">
          Go live in three steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />

          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-card p-8 rounded-2xl border border-border hover-lift text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent font-black text-2xl mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>

              {/* Mobile connector arrow */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-accent/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
