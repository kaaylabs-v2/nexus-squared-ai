const Integrations = () => {
  const integrations = [
    { name: "Jira", category: "Project Management" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "MySQL", category: "Database" },
    { name: "Amazon S3", category: "Storage" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Flat Files", category: "Data" },
    { name: "Websites", category: "Web" },
    { name: "Notion", category: "Productivity" },
    { name: "Salesforce", category: "CRM" },
    { name: "+ 40 More", category: "Coming Soon" },
  ];

  return (
    <section id="integrations" className="py-24 lg:py-32 bg-gradient-to-b from-bg-primary to-[#0F1419] relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--color-accent)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--color-accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-light tracking-tight mb-4">
            Works with your stack
          </h2>
          <p className="text-xl text-text-muted-light">
            No migrations. No disruptions. Just connect.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="bg-bg-card-dark/40 backdrop-blur-xl border border-color-border-dark rounded-2xl p-6 hover:border-accent/50 hover:bg-bg-card-dark/60 transition-all duration-300 hover-lift group"
            >
              <div className="text-center space-y-3">
                <div className="text-3xl">
                  {integration.name === "Jira" && "✅"}
                  {integration.name === "Google Workspace" && "📧"}
                  {integration.name === "MySQL" && "📊"}
                  {integration.name === "Amazon S3" && "📁"}
                  {integration.name === "PostgreSQL" && "🐘"}
                  {integration.name === "Flat Files" && "📄"}
                  {integration.name === "Websites" && "🌐"}
                  {integration.name === "Notion" && "📝"}
                  {integration.name === "Salesforce" && "☁️"}
                  {integration.name === "+ 40 More" && "➕"}
                </div>
                <div>
                  <h3 className="font-bold text-text-light mb-1 group-hover:text-accent transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-text-muted-light font-mono">{integration.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
