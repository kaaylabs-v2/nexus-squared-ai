import { Play, FileText, Search, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const DemoVideo = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-6">
            See Nexus² in action
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Watch how our AI helps citizens navigate complex government websites to find the forms they need—instantly.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl max-w-5xl mx-auto mb-16">
          {/* Mock Government Website Interface */}
          <div className="aspect-video bg-background relative group cursor-pointer">
            {/* Mock Browser Chrome */}
            <div className="absolute top-0 left-0 right-0 bg-card border-b border-border p-3 flex items-center gap-2 z-20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 bg-background rounded-lg px-4 py-1.5 text-xs text-text-muted flex items-center gap-2">
                <span className="text-text-secondary">🔒</span>
                gov-services.example.gov/business-services
              </div>
            </div>

            {/* Mock Government Website Content */}
            <div className="pt-14 p-8 h-full overflow-hidden">
              {/* Header */}
              <div className="border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">City Government Portal</h3>
                </div>
                <nav className="flex gap-6 text-xs text-text-secondary">
                  <span>Home</span>
                  <span className="text-primary font-medium">Business Services</span>
                  <span>Permits</span>
                  <span>Forms</span>
                  <span>Contact</span>
                </nav>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-3">
                  <div className="h-3 bg-text-primary/80 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-text-secondary/40 rounded" />
                    <div className="h-2 bg-text-secondary/40 rounded w-5/6" />
                    <div className="h-2 bg-text-secondary/40 rounded w-4/6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-text-primary/80 rounded w-2/3" />
                  <div className="space-y-2">
                    <div className="h-2 bg-text-secondary/40 rounded w-5/6" />
                    <div className="h-2 bg-text-secondary/40 rounded" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-text-primary/80 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-text-secondary/40 rounded w-4/6" />
                    <div className="h-2 bg-text-secondary/40 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px] z-10">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Nexus² Chat Widget - Interactive */}
            <div className="absolute bottom-6 right-6 bg-card border border-border rounded-2xl shadow-2xl p-4 w-80 z-30 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-accent/30">
                  <span className="text-lg font-black text-accent">²</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">Nexus²</div>
                  <div className="text-xs text-text-secondary">AI Assistant</div>
                </div>
              </div>
              
              {/* Conversation */}
              <div className="space-y-3 text-sm">
                <div className="bg-background rounded-xl p-3 text-text-primary">
                  I need to renew my business license
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 rounded-xl p-3">
                  <p className="text-text-primary mb-2">I found the form you need!</p>
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Business License Renewal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Shown in Demo */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Search,
              title: "Natural language search",
              description: "Users describe what they need in plain English"
            },
            {
              icon: FileText,
              title: "Instant form discovery",
              description: "AI finds the exact form or page needed"
            },
            {
              icon: CheckCircle,
              title: "Guided navigation",
              description: "Step-by-step guidance through complex processes"
            }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
