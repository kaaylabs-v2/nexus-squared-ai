import CoreFeatures from "@/components/CoreFeatures";
import HowItWorks from "@/components/HowItWorks";
import DemoVideo from "@/components/DemoVideo";
import Security from "@/components/Security";

const Product = () => {
  return (
    <div className="pt-20">
      <CoreFeatures />
      <DemoVideo />
      <HowItWorks />
      <Security />
    </div>
  );
};

export default Product;
