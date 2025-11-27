const Integrations = () => {
  const integrations = [
    { name: "WordPress", category: "CMS" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Webflow", category: "Website Builder" },
    { name: "Wix", category: "Website Builder" },
    { name: "Squarespace", category: "Website Builder" },
    { name: "React", category: "Framework" },
    { name: "Next.js", category: "Framework" },
    { name: "HTML/CSS", category: "Static Sites" },
    { name: "Custom CMS", category: "Enterprise" },
    { name: "Any Website", category: "Universal" },
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
            Works on any platform
          </h2>
          <p className="text-xl text-text-muted-light">
            WordPress, Shopify, Webflow, custom sites—if it has HTML, it works.
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
                  {integration.name === "WordPress" && "📝"}
                  {integration.name === "Shopify" && "🛍️"}
                  {integration.name === "Webflow" && "💧"}
                  {integration.name === "Wix" && "🎨"}
                  {integration.name === "Squarespace" && "⬜"}
                  {integration.name === "React" && "⚛️"}
                  {integration.name === "Next.js" && "▲"}
                  {integration.name === "HTML/CSS" && "🌐"}
                  {integration.name === "Custom CMS" && "🔧"}
                  {integration.name === "Any Website" && "✨"}
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
