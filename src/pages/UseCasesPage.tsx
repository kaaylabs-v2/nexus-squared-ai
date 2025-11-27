import UseCases from "@/components/UseCases";

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
              { name: "E-commerce", icon: "🛍️", color: "from-purple-400 to-pink-400" },
              { name: "SaaS", icon: "💻", color: "from-blue-400 to-cyan-400" },
              { name: "Healthcare", icon: "🏥", color: "from-green-400 to-emerald-400" },
              { name: "Finance", icon: "💰", color: "from-yellow-400 to-orange-400" },
              { name: "Education", icon: "📚", color: "from-indigo-400 to-purple-400" },
              { name: "Real Estate", icon: "🏠", color: "from-red-400 to-pink-400" },
              { name: "Travel", icon: "✈️", color: "from-cyan-400 to-blue-400" },
              { name: "Legal", icon: "⚖️", color: "from-gray-400 to-slate-400" },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 text-center hover-lift border border-border group"
              >
                <div className={`text-4xl mb-3 inline-block p-4 rounded-xl bg-gradient-to-br ${industry.color} bg-opacity-10`}>
                  {industry.icon}
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
