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
        company: "Leading Home Furnishings Retailer",
        problem: "7,000+ products, 65% bounce rate, customers couldn't navigate categories.",
        implementation: "Added Nexus² widget trained on product catalog, dimensions, materials, and styles.",
        sampleQuestions: [
          "Show me leather sofas under $2,000",
          "What dining tables fit a 10x12 room?",
          "Do you have mid-century modern nightstands in walnut?"
        ]
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
        company: "B2B Analytics Platform",
        problem: "Users confused by 12+ features, unclear pricing, 80% never reached signup.",
        implementation: "Deployed Nexus² with feature comparisons, pricing calculator, and API docs integrated.",
        sampleQuestions: [
          "What's the difference between Pro and Enterprise?",
          "How do I connect your API to Salesforce?",
          "Can I export data to CSV?"
        ]
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
        company: "Regional Medical Group",
        problem: "12 locations, 140+ providers, phone lines overwhelmed with 'where do I go' questions.",
        implementation: "Nexus² integrated with provider directory, insurance verification, and online scheduling.",
        sampleQuestions: [
          "Which location has the shortest wait time for urgent care?",
          "Do you have any pediatricians accepting new patients?",
          "What insurance plans do you accept?"
        ]
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
        company: "Mid-Size Credit Union",
        problem: "Complex loan products, compliance restrictions, 5% application completion rate.",
        implementation: "Nexus² widget with pre-approved messaging, rate calculators, and eligibility guidance.",
        sampleQuestions: [
          "What's the current mortgage rate for a 30-year fixed?",
          "Am I eligible for a personal loan with a 680 credit score?",
          "How do I set up automatic payments?"
        ]
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
        company: "State Community College",
        problem: "8,000 pages of content, prospective students couldn't find application requirements or deadlines.",
        implementation: "Nexus² trained on programs, admission criteria, financial aid, and campus resources.",
        sampleQuestions: [
          "What are the prerequisites for the nursing program?",
          "When is the deadline for fall semester applications?",
          "How do I apply for financial aid?"
        ]
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
        company: "Regional Real Estate Brokerage",
        problem: "450+ active listings, buyers overwhelmed by search filters, 12% inquiry rate.",
        implementation: "Nexus² connected to MLS data, neighborhood info, school ratings, and agent calendars.",
        sampleQuestions: [
          "Show me 3-bedroom homes under $500k near good schools",
          "What's the average price per square foot in downtown?",
          "Are there any open houses this weekend?"
        ]
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
        company: "Boutique Travel Agency",
        problem: "200+ tour packages, complex pricing, 89% cart abandonment, users confused about what's included.",
        implementation: "Nexus² widget with package details, availability calendar, payment plans, and booking assistance.",
        sampleQuestions: [
          "What's included in the 7-day Hawaii package?",
          "Can I pay in installments?",
          "What's your cancellation policy for international trips?"
        ]
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
        company: "Multi-Practice Law Firm",
        problem: "8 practice areas, visitors couldn't identify right attorney, 4% consultation conversion rate.",
        implementation: "Nexus² with practice area guidance, attorney bios, case types, and online scheduling.",
        sampleQuestions: [
          "I need help with a contract dispute—who should I talk to?",
          "Do you offer free consultations for personal injury cases?",
          "What documents do I need to bring for an estate planning meeting?"
        ]
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-6">
            Built for your <span className="italic">industry</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-sans">
            Real case studies from businesses using Nexus² to transform their website experience
          </p>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {verticals.map((vertical, i) => (
            <div key={i} className="space-y-12">
              {/* Vertical Header */}
              <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${vertical.gradient} flex items-center justify-center shadow-sm`}>
                  <vertical.icon className="w-10 h-10 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h2 className="text-3xl font-normal text-foreground mb-1">{vertical.name}</h2>
                  <p className="text-lg text-muted-foreground font-sans">{vertical.tagline}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-3xl border border-border">
                  <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2 font-sans">
                    <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 text-sm font-semibold">!</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{vertical.challenge}</p>
                </div>
                <div className="bg-card p-8 rounded-3xl border border-border">
                  <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2 font-sans">
                    <span className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 text-sm font-semibold">✓</span>
                    How Nexus² Helps
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{vertical.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-6">
                {vertical.results.map((result, j) => (
                  <div key={j} className="bg-card p-6 rounded-2xl border border-border text-center">
                    <div className={`text-3xl font-semibold mb-2 bg-gradient-to-r ${vertical.gradient} bg-clip-text text-transparent font-sans`}>
                      {result.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-sans">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Case Study */}
              <div className="bg-card p-8 lg:p-12 rounded-3xl border border-accent/20">
                <div className="flex items-start gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 font-sans">
                    Case Study
                  </span>
                </div>
                <h3 className="text-2xl font-normal text-foreground mb-6">{vertical.caseStudy.company}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-sans">The Problem:</h4>
                    <p className="text-muted-foreground leading-relaxed font-sans">{vertical.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-sans">The Implementation:</h4>
                    <p className="text-muted-foreground leading-relaxed font-sans">{vertical.caseStudy.implementation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-sans">Sample Questions:</h4>
                    <ul className="space-y-2">
                      {vertical.caseStudy.sampleQuestions.map((question, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed font-sans flex items-start gap-2">
                          <span className="text-accent mt-1">→</span>
                          <span>"{question}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-6">
            Ready to transform your <span className="italic">industry?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-sans">
            Join thousands of businesses using Nexus² to help visitors find what they need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="font-medium">
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