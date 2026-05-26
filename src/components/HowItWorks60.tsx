import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorks60 = () => {
  const steps = [
    {
      n: "01",
      title: "Connect",
      body: "Plug in your site, docs, databases and tools. Nexus² indexes what matters and respects your permissions.",
    },
    {
      n: "02",
      title: "Shape",
      body: "Pick your tone, surfaces and guardrails. Chat, voice, search or API — one brain, many places.",
    },
    {
      n: "03",
      title: "Go live",
      body: "Ship in days, not quarters. Watch real questions, real answers, real deflection — measured from day one.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-sans uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              How it works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight leading-[1.1] mb-4 max-w-3xl">
            From your tools to a working assistant in{" "}
            <em className="font-serif italic text-accent">about sixty seconds</em>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-sans mb-16">
            Three steps. No rebuild. Nexus² sits over what you already run.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-card p-8 lg:p-10 h-full flex flex-col">
                <span className="font-serif italic text-accent text-2xl mb-6">{s.n}</span>
                <h3 className="text-2xl font-normal text-foreground mb-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-sans font-medium underline underline-offset-4"
            >
              See the platform in detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks60;
