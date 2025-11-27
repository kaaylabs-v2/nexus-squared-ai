const ProductShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-bg-tertiary to-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-8">
          See it in action
        </h2>
        
        <p className="text-center text-text-secondary text-lg mb-20 max-w-2xl mx-auto">
          Try the live widget in the bottom-right corner →<br />
          Or check out the dashboard preview below
        </p>

        {/* Main Dashboard Mockup */}
        <div className="bg-card rounded-3xl border border-border shadow-2xl overflow-hidden hover-lift max-w-5xl mx-auto mb-12">
          {/* Browser chrome */}
          <div className="bg-bg-tertiary px-4 py-3 border-b border-border flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 text-center">
              <div className="inline-block px-4 py-1 bg-background/50 rounded-lg text-xs text-text-secondary font-mono">
                nexussquared.ai/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-8 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-text-secondary font-medium">Total Conversations</p>
                <p className="text-3xl font-black text-text-primary">1,847</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-text-secondary font-medium">This Week</p>
                <p className="text-3xl font-black text-text-primary">342</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-text-secondary font-medium">Avg Resolution</p>
                <p className="text-3xl font-black text-accent">45s</p>
              </div>
            </div>

            {/* Top Questions */}
            <div>
              <p className="text-sm text-text-secondary font-medium mb-3">Most Asked</p>
              <div className="flex flex-wrap gap-2">
                {["Pricing", "Features", "How to start", "Demo"].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Chat example */}
            <div className="bg-bg-secondary rounded-2xl p-6 space-y-4 border border-border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">👤</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text-secondary mb-1 font-medium">Visitor:</p>
                  <p className="text-text-primary">How much does the Growth plan cost?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🤖</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-accent mb-2 font-medium">Assistant:</p>
                  <p className="text-text-primary text-sm mb-3">
                    The Growth plan is $299/month and includes:
                  </p>
                  <div className="bg-card rounded-lg border border-border p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-text-primary">10 workspaces</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-text-primary">All connectors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-text-primary">50k queries/month</span>
                    </div>
                  </div>
                  <p className="text-text-primary text-sm mt-3">
                    Would you like to start a free trial?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting UI elements */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Custom Responses", desc: "Tailor answers to your brand" },
            { title: "Conversation History", desc: "Track every interaction" },
            { title: "Analytics Dashboard", desc: "Visitor insights & trends" },
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl border border-border hover-lift">
              <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
