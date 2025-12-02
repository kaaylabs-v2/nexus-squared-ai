import Pricing from "@/components/Pricing";
import { Check, X } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="pt-20">
      <div className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-6">
            Simple, transparent <span className="italic">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-sans">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </div>
      
      <Pricing />
      
      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
            Frequently asked <span className="italic">questions</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Can I try it for free?",
                a: "Yes! The Starter plan is completely free forever. No credit card required. When you're ready to scale, upgrade to Growth or Enterprise."
              },
              {
                q: "What counts as a conversation?",
                a: "A conversation is a complete back-and-forth interaction between a visitor and the widget. A single session with multiple messages counts as one conversation."
              },
              {
                q: "Can I customize the widget appearance?",
                a: "Absolutely. Change colors, fonts, logo, welcome message, and response templates. Growth and Enterprise plans include advanced branding options."
              },
              {
                q: "Does it work on my platform?",
                a: "Yes. Nexus² works on WordPress, Shopify, Webflow, Wix, React, Next.js, or any website with HTML. Just paste one line of code."
              },
              {
                q: "What if I exceed my plan limits?",
                a: "We'll notify you when you're approaching your limit. You can upgrade anytime or purchase additional conversation packs. Your widget won't stop working."
              },
              {
                q: "Is there a long-term contract?",
                a: "No contracts. Pay monthly or annually (save 20%). Cancel anytime. Enterprise plans can include custom terms if needed."
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
      
      {/* Comparison Table */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-center text-foreground tracking-tight mb-16">
            Feature <span className="italic">comparison</span>
          </h2>
          
          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground font-sans">Feature</th>
                    <th className="text-center p-4 font-semibold text-foreground font-sans">Starter</th>
                    <th className="text-center p-4 font-semibold text-foreground font-sans">Growth</th>
                    <th className="text-center p-4 font-semibold text-foreground font-sans">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "Conversations/month", starter: "1,000", growth: "50,000", enterprise: "Unlimited" },
                    { feature: "Workspaces", starter: "1", growth: "10", enterprise: "Unlimited" },
                    { feature: "Custom branding", starter: false, growth: true, enterprise: true },
                    { feature: "Analytics dashboard", starter: "Basic", growth: "Advanced", enterprise: "Advanced" },
                    { feature: "Priority support", starter: false, growth: true, enterprise: true },
                    { feature: "SSO & SAML", starter: false, growth: false, enterprise: true },
                    { feature: "White-label option", starter: false, growth: false, enterprise: true },
                    { feature: "Dedicated CSM", starter: false, growth: false, enterprise: true },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-4 font-medium text-foreground font-sans">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground font-sans">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check className="w-5 h-5 text-accent mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        ) : row.starter}
                      </td>
                      <td className="p-4 text-center text-muted-foreground font-sans">
                        {typeof row.growth === 'boolean' ? (
                          row.growth ? <Check className="w-5 h-5 text-accent mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        ) : row.growth}
                      </td>
                      <td className="p-4 text-center text-muted-foreground font-sans">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="w-5 h-5 text-accent mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        ) : row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;