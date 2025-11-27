const About = () => {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-8">
          Built by engineers who get it
        </h2>

        <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-12">
          <p>
            Nexus² was born from frustration. We spent years watching teams drown in disconnected
            tools while "AI" meant another dashboard nobody used.
          </p>
          <p>So we built what we wanted: a single intelligent layer that actually understands your business.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl blur-2xl" />
          <blockquote className="relative bg-card p-8 lg:p-12 rounded-2xl border border-border">
            <p className="text-xl lg:text-2xl text-text-primary font-medium italic mb-4">
              "We're not building another chatbot. We're building the AI infrastructure layer that
              enterprises actually need."
            </p>
            <cite className="text-text-secondary font-semibold not-italic">— Team Nexus²</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
