const SocialProof = () => {
  const companies = [
    "Pampered Chef",
    "Barcodes",
    "Mouser",
    "JM Test",
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10 font-sans">
          Trusted by industry leaders and developers worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {companies.map((company, i) => (
            <div
              key={i}
              className="text-muted-foreground/50 font-sans font-semibold text-lg hover:text-foreground transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;