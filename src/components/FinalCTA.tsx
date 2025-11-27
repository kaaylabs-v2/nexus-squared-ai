import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-bg-primary via-[#0F1419] to-bg-primary relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-light tracking-tight">
          Ready to help your visitors <br className="hidden sm:block" />
          <span className="text-gradient-accent">find what they need?</span>
        </h2>

        <p className="text-xl text-text-muted-light max-w-2xl mx-auto leading-relaxed">
          Start your free trial today. Add the widget to your site in under 5 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90 font-bold text-lg px-10 glow-accent group"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <p className="text-text-muted-light text-sm pt-4">
          or contact{" "}
          <a
            href="mailto:sales@nexussquared.ai"
            className="text-accent hover:underline font-medium"
          >
            sales@nexussquared.ai
          </a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
