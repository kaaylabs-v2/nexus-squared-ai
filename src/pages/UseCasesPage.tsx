import UseCases from "@/components/UseCases";
import { ShoppingBag, Monitor, Heart, DollarSign, GraduationCap, Home, Plane, Scale } from "lucide-react";

const UseCasesPage = () => {
  return (
    <div className="pt-20">
      <div className="py-24 lg:py-32 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-text-primary tracking-tight mb-6">
            Real businesses, <span className="text-gradient-accent">real results</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-16">
            See how different industries use Nexus² to transform their website experience
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "5,000+", label: "Active Sites" },
              { value: "12M+", label: "Conversations" },
              { value: "40%", label: "Lower Bounce Rate" },
              { value: "3x", label: "More Conversions" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Showcase */}
      <section className="py-16 bg-bg-tertiary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "E-commerce", icon: ShoppingBag, color: "from-purple-500 to-pink-500" },
              { name: "SaaS", icon: Monitor, color: "from-blue-500 to-cyan-500" },
              { name: "Healthcare", icon: Heart, color: "from-green-500 to-emerald-500" },
              { name: "Finance", icon: DollarSign, color: "from-yellow-500 to-orange-500" },
              { name: "Education", icon: GraduationCap, color: "from-indigo-500 to-purple-500" },
              { name: "Real Estate", icon: Home, color: "from-red-500 to-pink-500" },
              { name: "Travel", icon: Plane, color: "from-cyan-500 to-blue-500" },
              { name: "Legal", icon: Scale, color: "from-slate-500 to-gray-600" },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 text-center hover-lift border border-border group"
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UseCases />
      
      {/* Success Stories */}
      <section className="py-24 lg:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-text-primary tracking-tight mb-16">
            What our customers say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Our bounce rate dropped 40% in the first month. Visitors actually find what they need now.",
                author: "Sarah Chen",
                role: "Head of Marketing, TechFlow",
                metric: "40% lower bounce rate"
              },
              {
                quote: "Setup took 3 minutes. The ROI was immediate—support tickets down, conversions up.",
                author: "Marcus Rodriguez",
                role: "Founder, ShopLocal",
                metric: "3x more conversions"
              },
              {
                quote: "We get real insights into what people are looking for. Changed how we structure our content.",
                author: "Emily Watson",
                role: "Content Director, DesignHub",
                metric: "2x engagement time"
              },
              {
                quote: "The customization is perfect. It feels like our brand, not a generic chatbot widget.",
                author: "David Park",
                role: "CEO, Quantum Legal",
                metric: "89% positive feedback"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border hover-lift">
                <div className="mb-6">
                  <div className="text-accent font-black text-3xl mb-4">{testimonial.metric}</div>
                  <p className="text-text-primary text-lg italic mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-text-primary">{testimonial.author}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
