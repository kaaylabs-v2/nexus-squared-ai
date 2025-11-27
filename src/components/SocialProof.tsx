const SocialProof = () => {
  const companies = [
    "Meridian Analytics",
    "Northstar Group",
    "Axiom Systems",
    "Brightpath",
    "Quantum Retail",
    "Stratos",
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-text-muted-light text-sm font-medium mb-8 tracking-wide uppercase">
          Trusted by data-driven teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, i) => (
            <div
              key={i}
              className="text-text-muted-light/60 font-satoshi font-bold text-lg hover:text-text-light transition-colors cursor-pointer"
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
