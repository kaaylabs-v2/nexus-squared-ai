import Pricing from "@/components/Pricing";
import Reveal from "@/components/Reveal";

const PricingPage = () => {
  return (
    <div className="pt-20 bg-background">
      <div className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-6">
              Choose the right plan for{" "}
              <span className="font-serif italic text-accent">your business</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-xl text-muted-foreground leading-relaxed font-sans">
              Flexible plans to power your AI chatbot with the right balance of control,
              performance, and scalability.
            </p>
          </Reveal>
        </div>
      </div>

      <Pricing />
    </div>
  );
};

export default PricingPage;
