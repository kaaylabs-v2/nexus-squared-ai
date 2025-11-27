import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-bg-primary to-[#0F1419] overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--color-accent)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--color-accent)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              Enterprise AI Platform
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-text-light leading-[1.1] tracking-tight">
              Help visitors{" "}
              <span className="text-gradient-accent">navigate your site</span>{" "}
              instantly
            </h1>

            <p className="text-lg md:text-xl text-text-muted-light max-w-xl leading-relaxed">
              Add an intelligent navigation assistant to your website in minutes. Guide visitors to the right pages, answer common questions, and reduce bounce rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 font-semibold group text-base px-8"
              >
                Book a Live Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-color-border-dark bg-transparent text-text-light hover:bg-text-light/5 font-medium text-base"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch 2-min Overview
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative w-full max-w-lg">
              {/* Central "brain" node */}
              <div className="relative mx-auto w-48 h-48 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center glow-accent animate-glow-pulse">
                <div className="text-6xl">🧠</div>
              </div>

              {/* Orbiting data source nodes */}
              {[
                { icon: "📊", label: "MySQL", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-12" },
                { icon: "📁", label: "S3", position: "top-1/4 right-0 translate-x-12" },
                { icon: "🌐", label: "Website", position: "bottom-1/4 right-0 translate-x-12" },
                { icon: "📧", label: "Gmail", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-12" },
                { icon: "📝", label: "Docs", position: "bottom-1/4 left-0 -translate-x-12" },
                { icon: "🗂️", label: "Drive", position: "top-1/4 left-0 -translate-x-12" },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`absolute ${node.position} w-20 h-20 rounded-2xl bg-bg-card-dark/60 backdrop-blur-xl border border-color-border-dark flex flex-col items-center justify-center gap-1 animate-fade-up hover:scale-110 transition-transform cursor-pointer`}
                  style={{ animationDelay: `${400 + i * 100}ms` }}
                >
                  <span className="text-2xl">{node.icon}</span>
                  <span className="text-xs text-text-muted-light font-mono">{node.label}</span>
                </div>
              ))}

              {/* Connecting lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ animationDelay: "800ms" }}>
                <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="hsl(var(--color-accent))" strokeWidth="2" strokeDasharray="4 4" className="animate-glow-pulse" />
                <line x1="50%" y1="50%" x2="90%" y2="30%" stroke="hsl(var(--color-accent))" strokeWidth="2" strokeDasharray="4 4" className="animate-glow-pulse" />
                <line x1="50%" y1="50%" x2="90%" y2="70%" stroke="hsl(var(--color-accent))" strokeWidth="2" strokeDasharray="4 4" className="animate-glow-pulse" />
                <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="hsl(var(--color-accent))" strokeWidth="2" strokeDasharray="4 4" className="animate-glow-pulse" />
                <line x1="50%" y1="50%" x2="10%" y2="70%" stroke="hsl(var(--color-accent))" strokeWidth="2" strokeDasharray="4 4" className="animate-glow-pulse" />
                <line x1="50%" y1="50%" x2="10%" y2="30%" stroke="hsl(var(--color-accent))" strokeWidth="2" strokeDasharray="4 4" className="animate-glow-pulse" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
