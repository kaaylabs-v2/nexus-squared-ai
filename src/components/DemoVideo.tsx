import { FileText, Search, CheckCircle } from "lucide-react";
import demoImage from "@/assets/demo-government-website.png";

const DemoVideo = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            See Nexus² in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI helps citizens navigate complex government websites to find the forms they need—instantly.
          </p>
        </div>

        {/* Demo Image */}
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl max-w-5xl mx-auto mb-16">
          <img 
            src={demoImage} 
            alt="Nexus² AI assistant helping a user find business license renewal forms on a government website"
            className="w-full h-auto"
          />
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
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;