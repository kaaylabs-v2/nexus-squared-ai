import CoreFeatures from "@/components/CoreFeatures";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import Security from "@/components/Security";

const Product = () => {
  return (
    <div className="pt-20">
      <CoreFeatures />
      <HowItWorks />
      <ProductShowcase />
      <Security />
    </div>
  );
};

export default Product;
