import Reveal from "./Reveal";

const TrustedBy = () => {
  const companies = ["Pampered Chef", "Barcodes", "Mouser", "JM Test", "Nexus Health", "Acme Edu"];

  return (
    <section className="py-16 lg:py-20 bg-background border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-muted-foreground text-xs uppercase tracking-[0.18em] mb-10 font-sans">
            Trusted by teams shaping <em className="font-serif italic text-foreground/80">customer-facing AI</em>
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 lg:gap-x-16">
          {companies.map((company, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="text-muted-foreground/60 font-sans font-medium text-base lg:text-lg hover:text-foreground/80 transition-colors">
                {company}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
