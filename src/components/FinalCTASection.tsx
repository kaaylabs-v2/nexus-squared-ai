import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface Props {
  kicker?: string;
  headlineLead: string;
  headlineEmphasis: string;
  headlineTrail?: string;
  sub: string;
}

const FinalCTASection = ({
  kicker = "Get started",
  headlineLead,
  headlineEmphasis,
  headlineTrail = ".",
  sub,
}: Props) => {
  return (
    <section className="py-20 lg:py-28 border-t border-border bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-6 font-sans">
            {kicker}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight mb-6">
            {headlineLead}{" "}
            <em className="text-accent font-serif italic">{headlineEmphasis}</em>
            {headlineTrail}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-sans mb-10">{sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/request-demo">
                Request a demo <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/request-demo">Talk to sales</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
