import { 
  FileText, 
  ShoppingBag, 
  Droplets, 
  Newspaper, 
  Tag, 
  BookOpen, 
  Target, 
  Globe, 
  HelpCircle, 
  Sparkles 
} from "lucide-react";

const Integrations = () => {
  const integrations = [
    { name: "WordPress", category: "CMS", icon: FileText },
    { name: "Shopify", category: "E-commerce", icon: ShoppingBag },
    { name: "Webflow", category: "Website Builder", icon: Droplets },
    { name: "Blog Posts", category: "Content", icon: Newspaper },
    { name: "Product Pages", category: "E-commerce", icon: Tag },
    { name: "Documentation", category: "Knowledge Base", icon: BookOpen },
    { name: "Landing Pages", category: "Marketing", icon: Target },
    { name: "HTML/CSS", category: "Static Sites", icon: Globe },
    { name: "FAQs", category: "Support", icon: HelpCircle },
    { name: "Any Website", category: "Universal", icon: Sparkles },
  ];

  return (
    <section id="integrations" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">
            Works on <span className="italic">any platform</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            WordPress, Shopify, Webflow, custom sites—if it has HTML, it works.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration, i) => {
            const Icon = integration.icon;
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors font-sans">
                      {integration.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans">{integration.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
