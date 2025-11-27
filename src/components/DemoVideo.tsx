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
          {/* Video Placeholder with Play Button */}
          <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-background relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Mock Browser Chrome */}
            <div className="absolute top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 bg-background/80 rounded-lg px-4 py-1.5 text-xs text-text-muted">
                gov-services.example.gov
              </div>
            </div>

            {/* Nexus² Chat Widget Preview */}
            <div className="absolute bottom-6 right-6 bg-card border border-border rounded-2xl shadow-2xl p-4 w-80 animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-lg">²</span>
                </div>
                <div className="text-sm font-semibold text-text-primary">Nexus² Assistant</div>
              </div>
              <div className="space-y-2 text-xs text-text-secondary">
                <div className="bg-background/50 rounded-lg p-2">
                  "I need to renew my business license"
                </div>
                <div className="bg-accent/10 rounded-lg p-2 text-text-primary">
                  I can help you with that! I found the Business License Renewal form...
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
