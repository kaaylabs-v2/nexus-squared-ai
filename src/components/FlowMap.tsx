import { GraduationCap, Building2, ShoppingBag, Heart, Brain } from "lucide-react";

const nodes = [
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Enterprise" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Heart, label: "Healthcare" },
];

const FlowMap = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Industry nodes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
        {nodes.map((n, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <n.icon className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-medium text-foreground font-sans">{n.label}</span>
          </div>
        ))}
      </div>

      {/* Connecting lines (SVG) */}
      <svg
        className="absolute left-0 right-0 mx-auto top-[140px] hidden md:block"
        height="80"
        width="100%"
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M100 0 Q400 60 400 80"
          fill="none"
          stroke="hsl(var(--accent) / 0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M300 0 Q400 40 400 80"
          fill="none"
          stroke="hsl(var(--accent) / 0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M500 0 Q400 40 400 80"
          fill="none"
          stroke="hsl(var(--accent) / 0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M700 0 Q400 60 400 80"
          fill="none"
          stroke="hsl(var(--accent) / 0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Central orchestration node */}
      <div className="flex justify-center">
        <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-foreground text-background shadow-lg">
          <Brain className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium font-sans">Nexus² Orchestration Layer</span>
        </div>
      </div>
    </div>
  );
};

export default FlowMap;
