const ProductShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-bg-tertiary to-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-20">
          See it in action
        </h2>

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
                <p className="text-sm text-text-secondary font-medium">Active Workspaces</p>
                <p className="text-3xl font-black text-text-primary">12</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-text-secondary font-medium">Queries This Week</p>
                <p className="text-3xl font-black text-text-primary">2,847</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-text-secondary font-medium">Avg Response Time</p>
                <p className="text-3xl font-black text-accent">1.2s</p>
              </div>
            </div>

            {/* Top Sources */}
            <div>
              <p className="text-sm text-text-secondary font-medium mb-3">Top Sources</p>
              <div className="flex gap-2">
                {["Jira", "MySQL", "Google Drive"].map((source) => (
                  <span
                    key={source}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                  >
                    {source}
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
                  <p className="text-sm text-text-secondary mb-1 font-medium">User:</p>
                  <p className="text-text-primary">Show open Jira issues by priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🤖</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-accent mb-2 font-medium">AI:</p>
                  <p className="text-text-primary text-sm mb-3">
                    Here are 23 open issues from your Jira workspace:
                  </p>
                  <div className="bg-card rounded-lg border border-border p-4 space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">High Priority</span>
                      <span className="text-red-500 font-bold">12 issues</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Medium Priority</span>
                      <span className="text-yellow-500 font-bold">8 issues</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Low Priority</span>
                      <span className="text-green-500 font-bold">3 issues</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting UI elements */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Connectors", desc: "42 active integrations" },
            { title: "Permissions", desc: "Role-based access" },
            { title: "Analytics", desc: "Real-time insights" },
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
