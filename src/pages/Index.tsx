import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhatIsNexus from "@/components/WhatIsNexus";
import CoreFeatures from "@/components/CoreFeatures";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <WhatIsNexus />
      <CoreFeatures />
      <HowItWorks />
      <Integrations />
      <UseCases />
      <ProductShowcase />
      <Pricing />
      <Security />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
