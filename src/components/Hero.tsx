import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import RotatingPrompts from "./RotatingPrompts";

const Hero = () => {
  const reduce = useReducedMotion();
  const lead = "The AI layer that turns".split(" ");
  const trail = "into answers.".split(" ");

  return (
    <section className="relative min-h-[88vh] flex items-center bg-background overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1] tracking-tight">
            {lead.map((w, i) => (
              <motion.span
                key={`l-${i}`}
                className="inline-block mr-[0.25em]"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.em
              className="font-serif italic text-accent inline-block mr-[0.25em]"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 + lead.length * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              every part of your business
            </motion.em>
            {trail.map((w, i) => (
              <motion.span
                key={`t-${i}`}
                className="inline-block mr-[0.25em]"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.32,
                  delay: 0.36 + lead.length * 0.04 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Nexus² connects every source your business already runs on — your site, docs,
            tools and data — and serves that knowledge through chat, voice, search and API.
            One brain. Everywhere people need it.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <Button size="lg" className="font-medium" asChild>
              <Link to="/request-demo">
                Request a demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="link" className="underline underline-offset-4" asChild>
              <Link to="/solutions">Explore solutions</Link>
            </Button>
          </motion.div>
        </div>

        {/* Visual cards */}
        <motion.div
          className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-6"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/70 via-amber-300/60 to-rose-200/60 p-8 min-h-[400px] flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="relative bg-card rounded-2xl p-6 shadow-xl max-w-sm w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent font-bold">
                  N
                </div>
                <span className="text-foreground font-medium font-sans">Nexus² Assistant</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-sans">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                  </span>
                  Live
                </span>
              </div>
              <RotatingPrompts />
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-secondary min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-accent/15 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <p className="text-xl text-foreground font-serif italic max-w-sm">
                  "Nexus² became the one place our whole team — and our customers — can ask
                  anything."
                </p>
                <p className="text-sm text-muted-foreground mt-4 font-sans">— Product Team Lead</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
