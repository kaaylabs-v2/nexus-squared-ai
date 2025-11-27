import UseCases from "@/components/UseCases";

const UseCasesPage = () => {
  return (
    <div className="pt-20">
      <div className="py-24 lg:py-32 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-text-primary tracking-tight mb-6">
            Real businesses, <span className="text-gradient-accent">real results</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            See how different industries use Nexus² to transform their website experience
          </p>
        </div>
      </div>
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
