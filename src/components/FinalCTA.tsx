import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight mb-6">
          Ready to transform your{" "}
          <span className="italic">website experience?</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-sans">
          Join thousands of teams using Nexus² to help visitors navigate their websites with AI-powered assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-medium">
            Request a demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="font-medium">
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;