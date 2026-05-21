import Pricing from "@/components/Pricing";

const PricingPage = () => {
  return (
    <div className="pt-20">
      <div className="py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-6">
            Simple, transparent <span className="italic">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-sans">
            Flexible plans to power your AI chatbot with the right balance of control, performance, and scalability.
          </p>
        </div>
      </div>

      <Pricing />

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
            Frequently asked <span className="italic">questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What counts as a conversation?",
                a: "Each conversation is 5 Q&A turns, where one turn is one user question plus one model answer. Your monthly conversation allowance is based on this definition.",
              },
              {
                q: "Do unused conversations carry forward?",
                a: "No. Credits reset each billing cycle and do not carry forward across months on any plan.",
              },
              {
                q: "Can I bring my own API key?",
                a: "Yes — the Enterprise plan lets you use your own OpenAI API key for complete cost transparency. OpenAI costs are typically around 0.005 USD – 0.02 USD per conversation.",
              },
              {
                q: "Can I customize the widget appearance?",
                a: "Absolutely. Change colors, fonts, logo, welcome message, and response templates. Growth and Enterprise plans include advanced branding options.",
              },
              {
                q: "What is the Nexus Voice Assistant?",
                a: "An intelligent multilingual voice assistant available as add-on packs (100, 200, or 500 minutes). Each pack includes a generous block of free minutes to get started.",
              },
              {
                q: "Are prices inclusive of taxes?",
                a: "All listed prices are exclusive of taxes. Applicable taxes are added at checkout based on your billing location.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-sans">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
