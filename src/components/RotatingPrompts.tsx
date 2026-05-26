import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const PROMPTS = [
  "Show me the return policy for opened items.",
  "Pull the Q3 sales summary from the warehouse.",
  "Compare these two laptops for me.",
  "Where's order #ABC123?",
];

const TYPE_MS = 35;
const HOLD_MS = 2000;

const RotatingPrompts = () => {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduce) {
      setText(PROMPTS[0]);
      return;
    }
    const full = PROMPTS[idx];
    let i = 0;
    let cancelled = false;
    const type = () => {
      if (cancelled) return;
      if (i <= full.length) {
        setText(full.slice(0, i));
        i++;
        setTimeout(type, TYPE_MS);
      } else {
        setTimeout(() => {
          if (!cancelled) setIdx((p) => (p + 1) % PROMPTS.length);
        }, HOLD_MS);
      }
    };
    type();
    return () => {
      cancelled = true;
    };
  }, [idx, reduce]);

  return (
    <div className="flex items-center gap-2 bg-secondary rounded-xl p-3 min-h-[44px]">
      <span className="text-muted-foreground text-sm font-sans flex-1 truncate">
        {text}
        <span className="inline-block w-[2px] h-4 bg-accent ml-0.5 align-middle animate-pulse" />
      </span>
      <span className="text-muted-foreground">↵</span>
    </div>
  );
};

export default RotatingPrompts;
