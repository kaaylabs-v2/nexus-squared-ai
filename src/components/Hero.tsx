import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1] tracking-tight">
            <span className="text-accent">AI-powered platform</span> that transforms website experiences
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
            Nexus² is an intelligent AI platform that makes websites more accessible and user-friendly. From voice interactions to smart navigation, we help every user find what they need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="font-medium" asChild>
              <Link to="/request-demo">
                Request a demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="link" className="underline underline-offset-4" asChild>
              <Link to="/products">Explore products</Link>
            </Button>
          </div>
        </div>

        {/* Visual Cards Section */}
        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
          {/* Left Card - Product Demo */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-600/80 via-orange-400/80 to-purple-300/80 p-8 min-h-[400px] flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="relative bg-card rounded-2xl p-6 shadow-xl max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">
                  N
                </div>
                <span className="text-foreground font-medium">Navigation Agent</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  READY
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  READY
                </span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-xl p-3">
                <span className="text-muted-foreground text-sm">Find the pricing page...</span>
                <span className="ml-auto text-muted-foreground">↵</span>
              </div>
            </div>
          </div>

          {/* Right Card - Testimonial/Image */}
          <div className="relative rounded-3xl overflow-hidden bg-secondary min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <p className="text-xl text-foreground font-serif italic max-w-sm">
                  "Nexus² transformed how our visitors navigate our complex documentation."
                </p>
                <p className="text-sm text-muted-foreground mt-4 font-sans">
                  — Product Team Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;