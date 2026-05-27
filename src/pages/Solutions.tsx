import { Link } from "react-router-dom";
import { GraduationCap, Building2, ShoppingBag, Heart, Building, Briefcase, ArrowRight } from "lucide-react";
import FlowMap from "@/components/FlowMap";
import Reveal from "@/components/Reveal";
import FinalCTASection from "@/components/FinalCTASection";

const Solutions = () => {
  const verticals = [
    {
      icon: GraduationCap,
      title: "Nexus for Education",
      blurb: "Campus answers for students, faculty, and admins — in one assistant.",
      href: "/solutions/education",
    },
    {
      icon: Building2,
      title: "Nexus for Enterprise",
      blurb: "Internal knowledge, unblocked — policies, tools, and people, instantly.",
      href: "/solutions/enterprise",
    },
    {
      icon: ShoppingBag,
      title: "Nexus for E-commerce",
      blurb: "Product discovery, order help, and checkout assist that actually converts.",
      href: "/solutions/ecommerce",
    },
    {
      icon: Heart,
      title: "Nexus for Healthcare",
      blurb: "Appointments, insurance, facility wayfinding — guided with care.",
      href: "/solutions/healthcare",
    },
    {
      icon: Building,
      title: "Nexus for Real Estate",
      blurb: "From browsing to booking — one assistant for every buyer.",
      href: "/solutions/real-estate",
    },
    {
      icon: Briefcase,
      title: "Nexus for Service Providers",
      blurb: "Always answering. Never on call.",
      href: "/solutions/service-providers",
    },
  ];

  return (
    <div className="pt-20 bg-background">
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-8 font-sans">
              Solutions
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
              Nexus² for <em className="text-accent font-serif italic">your industry</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
              The same orchestration layer, shaped for how each industry actually works —
              one brain, your tools, your language.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.06}>
                <Link
                  to={p.href}
                  className="group block bg-card p-8 lg:p-10 rounded-2xl border border-border hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.2)] transition-all duration-300 h-full"
                >
                  <div className="flex flex-col gap-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <p.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-foreground mb-3 tracking-tight">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed font-sans">{p.blurb}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-accent font-medium text-sm font-sans group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-sans mb-6">
              One layer, many shapes
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight mb-4">
              Different industries, one{" "}
              <em className="text-accent font-serif italic">orchestration layer</em> underneath.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans mb-8">
              Every vertical sits on the same reasoning, retrieval, and action engine — only the
              vocabulary, sources, and workflows change.
            </p>
          </Reveal>
          <FlowMap />
        </div>
      </section>

      <FinalCTASection
        kicker="Get started"
        headlineLead="See Nexus² shaped for"
        headlineEmphasis="your world"
        headlineTrail="."
        sub="Bring your sources, your tools, your tone. We'll show you the same brain — fluent in your domain."
      />
    </div>
  );
};

export default Solutions;
