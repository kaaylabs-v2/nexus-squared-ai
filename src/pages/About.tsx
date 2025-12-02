import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-6">
            We believe the web should be{" "}
            <span className="italic">easy to navigate</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-sans">
            That's why we built Nexus²—to help every visitor find exactly what they're looking for, instantly.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-6">
              Our <span className="italic">mission</span>
            </h2>
          </div>

          <div className="bg-card p-8 lg:p-12 rounded-3xl border border-border space-y-6">
            <p className="text-xl text-foreground leading-relaxed font-sans">
              We're on a mission to eliminate frustration from the web browsing experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              Every day, millions of people land on websites and can't find what they need. They bounce. 
              Businesses lose customers. Visitors lose time. Everyone loses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              We believe this is a solvable problem. With the right technology, every website can be 
              intuitive, every visitor can be guided, and every business can convert more browsers into customers.
            </p>
            <p className="text-lg font-medium text-foreground leading-relaxed font-sans">
              Nexus² exists to make navigation invisible—so visitors focus on what matters: 
              finding what they need, making decisions, and taking action.
            </p>
          </div>
        </div>
      </section>

      {/* The Story Behind It */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
            Why we <span className="italic">built this</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-sans">The frustration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                We've all been there: you land on a website looking for something specific—pricing, 
                a feature comparison, contact info—and you can't find it. You click through four 
                pages. Check the footer. Use the search bar that returns nothing useful. Give up.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                As developers and designers, we watched this happen over and over. We saw analytics 
                showing 70% bounce rates. We read support emails asking "Where do I find...?" 
                We knew there had to be a better way.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-sans">The breakthrough</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                What if every website had a helpful guide? Not a chatbot that pretends to be human. 
                Not a complex AI that tries to do everything. Just a simple, intelligent assistant 
                that knows your site and helps people find things.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                We prototyped it in a weekend. Deployed it on a client's e-commerce site. 
                Within a week, their bounce rate dropped 35%. Support tickets about "where to find" 
                dropped 60%. Sales went up.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-sans">The commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                We decided to build it properly. No bloated features. No complexity. 
                Just one thing, done exceptionally well: helping visitors navigate websites.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Six months of obsessive refinement later, Nexus² was born. Fast, beautiful, 
                customizable, and ridiculously easy to deploy. Everything we wished existed 
                when we were building websites for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
            What <span className="italic">drives us</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "User-first thinking",
                description: "Every decision starts with: 'Does this help the visitor find what they need faster?' If not, we don't build it."
              },
              {
                icon: Zap,
                title: "Speed matters",
                description: "Nobody waits. Our widget loads in milliseconds. Responses are instant. Setup takes minutes, not days."
              },
              {
                icon: Target,
                title: "Simplicity is hard work",
                description: "Making something simple takes more effort than making it complex. We obsess over removing friction, not adding features."
              },
              {
                icon: Users,
                title: "Real businesses, real impact",
                description: "We're not building for metrics or funding rounds. We're building for the store owner who needs more sales and the agency that needs better client results."
              },
            ].map((value, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl border border-border hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-sans">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-8">
            We're just <span className="italic">getting started</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-sans">
            Nexus² is live on thousands of websites, helping millions of visitors every month. 
            But we're nowhere near done.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-sans">
            We're building smarter responses, deeper integrations, better analytics, and more ways 
            to help businesses understand what their visitors really want. The goal hasn't changed: 
            make the web easier to navigate, one website at a time.
          </p>
          <div className="inline-block">
            <a
              href="mailto:hello@nexussquared.ai"
              className="text-accent hover:text-accent/80 font-medium text-lg transition-colors font-sans underline underline-offset-4"
            >
              Want to join us? We're hiring →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;