import { Link } from "react-router-dom";
import { Shield, FileText, RefreshCw, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const cards = [
  {
    title: "Privacy Policy",
    to: "/privacy",
    icon: Shield,
    desc: "How we collect, use and protect your information.",
  },
  {
    title: "Terms & Conditions",
    to: "/terms",
    icon: FileText,
    desc: "The rules of using NexusNexus AI.",
  },
  {
    title: "Refund & Cancellation",
    to: "/refund",
    icon: RefreshCw,
    desc: "How subscriptions, cancellations and refunds work.",
  },
];

const Legal = () => {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="pt-16 lg:pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium font-sans border border-accent/20 mb-6">
              Legal
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-5">
              Policies &{" "}
              <span className="font-serif italic text-accent">terms</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground font-sans max-w-xl mx-auto">
              Everything that governs your use of NexusNexus AI, in plain pages.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <Reveal key={c.to} delay={i * 0.08}>
                <Link
                  to={c.to}
                  className="group block bg-card rounded-[18px] border border-border p-7 h-full shadow-[0_1px_2px_hsl(var(--foreground)/0.04),0_8px_24px_-12px_hsl(var(--foreground)/0.08)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground font-sans mb-2">
                    {c.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mb-6 leading-relaxed">
                    {c.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-accent font-sans group-hover:gap-2.5 transition-all">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
