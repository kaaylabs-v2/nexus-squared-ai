import { GraduationCap, Building2, ShoppingBag, Heart, Building, Briefcase, Brain } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Enterprise" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Heart, label: "Healthcare" },
  { icon: Building, label: "Real Estate" },
  { icon: Briefcase, label: "Service Providers" },
];

// Six tiles laid out in a 3-col grid (two rows). x positions in viewBox 800:
// col centers at 133, 400, 667. All paths converge to the central Nexus² pill at (400, 80).
const PATHS = [
  "M133 0 Q260 50 400 80",
  "M400 0 Q400 40 400 80",
  "M667 0 Q540 50 400 80",
  "M133 0 Q260 60 400 80",
  "M400 0 Q400 40 400 80",
  "M667 0 Q540 60 400 80",
];

const FlowMap = () => {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 relative z-10">
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.32, delay: i * 0.07 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border transition-shadow hover:shadow-lg cursor-default"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <n.icon className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-foreground font-sans text-center">{n.label}</span>
          </motion.div>
        ))}
      </div>

      <svg
        className="absolute left-0 right-0 mx-auto -bottom-2 hidden md:block pointer-events-none"
        height="80"
        width="100%"
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ top: "calc(50% - 10px)" }}
      >
        {PATHS.map((d, i) => {
          const active = hover === null || hover === i;
          return (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: "easeOut" }}
              animate={{ opacity: active ? 0.9 : 0.3 }}
            />
          );
        })}
      </svg>

      <div className="flex justify-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex items-center gap-3 px-6 py-4 rounded-full bg-foreground text-background shadow-lg"
        >
          <Brain className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium font-sans">Nexus² Orchestration Layer</span>
        </motion.div>
      </div>
    </div>
  );
};

export default FlowMap;
