import { ShoppingBag, Monitor, Heart, DollarSign, GraduationCap, Home, Plane, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Verticals = () => {
  const verticals = [
    {
      icon: ShoppingBag,
      name: "E-commerce",
      gradient: "from-purple-500 to-pink-500",
      tagline: "Turn browsers into buyers",
      challenge: "45% of visitors leave e-commerce sites because they can't find what they're looking for. Complex product catalogs overwhelm shoppers.",
      solution: "Nexus² guides customers to the right products instantly. Ask 'Show me wireless headphones under $100' and get relevant results immediately.",
      results: [
        { metric: "35%", label: "Lower cart abandonment" },
        { metric: "3.2x", label: "Higher conversion rate" },
        { metric: "58%", label: "Fewer support tickets" }
      ],
      caseStudy: {
        company: "LuxeHome Furnishings",
        problem: "7,000+ products, 65% bounce rate, customers couldn't navigate categories.",
        implementation: "Added Nexus² widget trained on product catalog, dimensions, materials, and styles.",
        outcome: "Bounce rate dropped to 38%. Average order value increased 42%. Support tickets about 'where to find' items down 71%."
      }
    },
    {
      icon: Monitor,
      name: "SaaS",
      gradient: "from-blue-500 to-cyan-500",
      tagline: "Get users to 'aha' faster",
      challenge: "SaaS sites have complex features, multiple pricing tiers, and technical documentation that confuses prospects.",
      solution: "Nexus² answers 'How does your API work?' or 'What's included in Pro?' instantly, routing users to docs, pricing, or demo signup.",
      results: [
        { metric: "4x", label: "More demo bookings" },
        { metric: "62%", label: "Faster time-to-signup" },
        { metric: "41%", label: "Lower support costs" }
      ],
      caseStudy: {
        company: "DataSync Analytics",
        problem: "Users confused by 12+ features, unclear pricing, 80% never reached signup.",
        implementation: "Deployed Nexus² with feature comparisons, pricing calculator, and API docs integrated.",
        outcome: "Trial signups increased 4.1x. Sales calls reduced by half as questions answered upfront. Expansion revenue up 28%."
      }
    },
    {
      icon: Heart,
      name: "Healthcare",
      gradient: "from-green-500 to-emerald-500",
      tagline: "Help patients find care, fast",
      challenge: "Medical websites are hard to navigate. Patients can't find providers, services, or appointment booking.",
      solution: "Nexus² helps patients find 'pediatricians near me taking new patients' or 'urgent care hours' without clicking through 8 pages.",
      results: [
        { metric: "5x", label: "More online appointments" },
        { metric: "73%", label: "Reduced phone inquiries" },
        { metric: "89%", label: "Patient satisfaction" }
      ],
      caseStudy: {
        company: "CityHealth Medical Group",
        problem: "12 locations, 140+ providers, phone lines overwhelmed with 'where do I go' questions.",
        implementation: "Nexus² integrated with provider directory, insurance verification, and online scheduling.",
        outcome: "Phone volume dropped 68%. Online bookings increased 487%. Staff saved 35 hours/week on basic inquiries."
      }
    },
    {
      icon: DollarSign,
      name: "Finance",
      gradient: "from-yellow-500 to-orange-500",
      tagline: "Build trust through clarity",
      challenge: "Financial services sites are dense with jargon. Visitors leave confused about rates, terms, and eligibility.",
      solution: "Nexus² explains 'What's your mortgage rate for 20% down?' or 'Am I eligible for this card?' in plain language.",
      results: [
        { metric: "3.8x", label: "Application starts" },
        { metric: "52%", label: "Higher completion rate" },
        { metric: "91%", label: "Compliance maintained" }
      ],
      caseStudy: {
        company: "Meridian Credit Union",
        problem: "Complex loan products, compliance restrictions, 5% application completion rate.",
        implementation: "Nexus² widget with pre-approved messaging, rate calculators, and eligibility guidance.",
        outcome: "Applications up 281%. Completion rate jumped to 23%. Zero compliance issues. Members rate experience 4.7/5."
      }
    },
    {
      icon: GraduationCap,
      name: "Education",
      gradient: "from-indigo-500 to-purple-500",
      tagline: "Guide students to enrollment",
      challenge: "Education sites have programs, admissions, financial aid, and campus info buried in menus. Prospective students give up.",
      solution: "Nexus² answers 'What scholarships are available?' or 'How do I apply?' and guides to the right forms and deadlines.",
      results: [
        { metric: "67%", label: "More completed applications" },
        { metric: "4.2x", label: "Campus visit requests" },
        { metric: "85%", label: "Faster response time" }
      ],
      caseStudy: {
        company: "Riverside Community College",
        problem: "8,000 pages of content, prospective students couldn't find application requirements or deadlines.",
        implementation: "Nexus² trained on programs, admission criteria, financial aid, and campus resources.",
        outcome: "Applications increased 67%. Admissions staff inquiries down 54%. Tour bookings up 312%. Students find answers in under 30 seconds."
      }
    },
    {
      icon: Home,
      name: "Real Estate",
      gradient: "from-red-500 to-pink-500",
      tagline: "Connect buyers with properties",
      challenge: "Real estate sites have hundreds of listings. Buyers can't filter by their specific needs and give up.",
      solution: "Nexus² handles 'Show me 3-bedroom homes under $500k near good schools' and surfaces relevant properties instantly.",
      results: [
        { metric: "5.1x", label: "Property inquiries" },
        { metric: "78%", label: "More showing requests" },
        { metric: "43%", label: "Faster sales cycle" }
      ],
      caseStudy: {
        company: "Metro Realty Partners",
        problem: "450+ active listings, buyers overwhelmed by search filters, 12% inquiry rate.",
        implementation: "Nexus² connected to MLS data, neighborhood info, school ratings, and agent calendars.",
        outcome: "Inquiries jumped to 61%. Showing requests up 8x. Agents close deals 43% faster. Average commission increased 18%."
      }
    },
    {
      icon: Plane,
      name: "Travel",
      gradient: "from-cyan-500 to-blue-500",
      tagline: "Turn lookers into bookers",
      challenge: "Travel sites have packages, destinations, dates, and policies. Visitors get overwhelmed and book elsewhere.",
      solution: "Nexus² answers 'What's included in the Hawaii package?' or 'What's your cancellation policy?' before users bounce.",
      results: [
        { metric: "4.6x", label: "Booking completion" },
        { metric: "68%", label: "Fewer abandoned carts" },
        { metric: "91%", label: "Customer satisfaction" }
      ],
      caseStudy: {
        company: "Wanderlust Escapes",
        problem: "200+ tour packages, complex pricing, 89% cart abandonment, users confused about what's included.",
        implementation: "Nexus² widget with package details, availability calendar, payment plans, and booking assistance.",
        outcome: "Cart abandonment dropped to 21%. Bookings increased 4.6x. Upsells (insurance, upgrades) up 156%. Revenue +$2.1M annually."
      }
    },
    {
      icon: Scale,
      name: "Legal",
      gradient: "from-slate-500 to-gray-600",
      tagline: "Make legal services accessible",
      challenge: "Law firm sites are intimidating. Potential clients don't know if they have the right type of lawyer or how to start.",
      solution: "Nexus² guides with 'I need help with a contract dispute' and connects them to the right attorney and consultation booking.",
      results: [
        { metric: "6.2x", label: "Consultation requests" },
        { metric: "83%", label: "Qualified lead rate" },
        { metric: "71%", label: "Higher retention" }
      ],
      caseStudy: {
        company: "Harrison & Associates Law",
        problem: "8 practice areas, visitors couldn't identify right attorney, 4% consultation conversion rate.",
        implementation: "Nexus² with practice area guidance, attorney bios, case types, and online scheduling.",
        outcome: "Consultations up 6.2x. Intake calls down 60% (widget pre-qualifies). Client retention +71%. Partner revenue increased $400k/year."
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mb-6">
            Built for your <span className="text-gradient-accent">industry</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real case studies from businesses using Nexus² to transform their website experience
          </p>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {verticals.map((vertical, i) => (
            <div key={i} className="space-y-12">
              {/* Vertical Header */}
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${vertical.gradient} flex items-center justify-center shadow-sm border border-white/10`}>
                  <vertical.icon className="w-12 h-12 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-foreground mb-2">{vertical.name}</h2>
                  <p className="text-xl text-muted-foreground">{vertical.tagline}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 text-sm font-black">!</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{vertical.challenge}</p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 text-sm font-black">✓</span>
                    How Nexus² Helps
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{vertical.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-6">
                {vertical.results.map((result, j) => (
                  <div key={j} className="bg-card p-6 rounded-2xl border border-border text-center hover-lift">
                    <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${vertical.gradient} bg-clip-text text-transparent`}>
                      {result.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-br from-accent/5 to-cyan-400/5 p-8 lg:p-12 rounded-2xl border border-accent/20">
                <div className="flex items-start gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
                    Case Study
                  </span>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-6">{vertical.caseStudy.company}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">The Problem:</h4>
                    <p className="text-muted-foreground leading-relaxed">{vertical.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">The Implementation:</h4>
                    <p className="text-muted-foreground leading-relaxed">{vertical.caseStudy.implementation}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">The Outcome:</h4>
                    <p className="text-muted-foreground leading-relaxed">{vertical.caseStudy.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            Ready to transform your industry?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Join thousands of businesses using Nexus² to help visitors find what they need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-bold group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verticals;
