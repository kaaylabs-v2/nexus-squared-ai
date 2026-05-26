import { Heart, Target, Users, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import FinalCTASection from "@/components/FinalCTASection";

const NUMERALS = ["I", "II", "III"];

const Company = () => {
  const story = [
    {
      title: "The frustration",
      p1: "We've all been there: you land on a website or open an internal tool looking for something specific — a policy, a price, a status, a contact — and you can't find it. You click through four pages. Check the footer. Ping someone on Slack. Give up.",
      p2: "As builders, we watched this happen over and over. Customers bouncing. Teams answering the same Slack questions for the tenth time. Answers buried in docs nobody can locate. There had to be a better way.",
    },
    {
      title: "The breakthrough",
      p1: "What if every business had one brain it could talk through? Not a chatbot pretending to be human. Not a separate copilot bolted onto each tool. One reasoning layer that connects every source the business already runs on — and answers through whatever surface people are already in.",
      p2: "We prototyped it. Deployed it. Within a week, the patterns were unmistakable: turning scattered business knowledge into instant, cited answers — through any surface — changes how a company moves.",
    },
    {
      title: "The commitment",
      p1: "We decided to build it properly. No bloated features. No complexity. One orchestration layer, done exceptionally well — for customers, for teams, for everyone in between.",
      p2: "Six months of obsessive refinement later, Nexus² was born. Fast, beautiful, customizable, and ridiculously easy to deploy. Everything we wished existed.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-6">
              We believe every business should be{" "}
              <span className="font-serif italic text-accent">easy to talk to</span>
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-xl text-muted-foreground leading-relaxed font-sans">
              That's why we built Nexus² — so customers, teams, and partners can ask anything and
              get a real answer, in seconds.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-6">
                Our <span className="font-serif italic text-accent">mission</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="bg-card p-8 lg:p-12 rounded-3xl border border-border border-l-2 border-l-accent space-y-6">
              <p className="text-xl text-foreground leading-relaxed font-sans">
                We're on a mission to make every business as easy to talk to as a great colleague.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Every day, millions of people — customers and employees alike — get stuck because
                the answer they need is locked inside someone else's tool, doc, or department.
                Businesses lose customers. Teams lose hours. Everyone loses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                We believe this is solvable. With the right orchestration layer, every business
                can be conversational — every visitor guided, every employee unblocked, every
                answer one question away.
              </p>
              <p className="text-lg font-medium text-foreground leading-relaxed font-sans">
                Nexus² exists to make business knowledge instant — so people focus on what
                matters: making decisions and taking action.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
              Why we <span className="font-serif italic text-accent">built this</span>
            </h2>
          </Reveal>

          <div className="space-y-8">
            {story.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative bg-card p-8 lg:p-10 rounded-3xl border border-border border-l-2 border-l-accent">
                  <div className="font-serif italic text-accent text-5xl leading-none mb-4 select-none">
                    {NUMERALS[i]}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-sans">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 font-sans">{s.p1}</p>
                  <p className="text-muted-foreground leading-relaxed font-sans">{s.p2}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
              What <span className="font-serif italic text-accent">drives us</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Heart, title: "User-first thinking", description: "Every decision starts with: does this help the person on the other end get to an answer faster? If not, we don't build it." },
              { icon: Zap, title: "Speed matters", description: "Nobody waits. Our orchestration is millisecond-fast. Setup is minutes, not days." },
              { icon: Target, title: "Simplicity is hard work", description: "Making something simple takes more effort than making it complex. We obsess over removing friction, not adding features." },
              { icon: Users, title: "Real businesses, real impact", description: "We're not building for metrics or funding rounds. We're building for the operator who needs answers and the team that needs them now." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="bg-card p-8 rounded-3xl border border-border hover:border-accent/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <v.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-sans">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection
        kicker="Join us"
        headlineLead="Build a business that's"
        headlineEmphasis="easy to talk to"
        headlineTrail="."
        sub="See what one orchestration layer can do for your customers, your team, and everyone in between."
      />
    </div>
  );
};

export default Company;
