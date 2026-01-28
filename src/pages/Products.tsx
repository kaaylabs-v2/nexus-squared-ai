import { Link } from "react-router-dom";
import { GraduationCap, Building2, ShoppingBag, Heart, ArrowRight } from "lucide-react";
import CoreFeatures from "@/components/CoreFeatures";
import HowItWorks from "@/components/HowItWorks";
import DemoVideo from "@/components/DemoVideo";
import Security from "@/components/Security";

const Products = () => {
  const productVerticals = [
    {
      icon: GraduationCap,
      title: "Nexus for Education",
      description: "Transform campus experience with AI-powered navigation for students, faculty, and administrators.",
      href: "/products/education",
      available: true,
    },
    {
      icon: Building2,
      title: "Nexus for Enterprise",
      description: "Streamline internal communications and help employees find information instantly.",
      href: "/products/enterprise",
      available: false,
    },
    {
      icon: ShoppingBag,
      title: "Nexus for E-commerce",
      description: "Help shoppers find products, check shipping, and navigate categories with ease.",
      href: "/products/ecommerce",
      available: false,
    },
    {
      icon: Heart,
      title: "Nexus for Healthcare",
      description: "Assist patients with appointments, insurance queries, and facility navigation.",
      href: "/products/healthcare",
      available: false,
    },
  ];

  return (
    <div className="pt-20">
      {/* Products Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight mb-6">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nexus² adapts to your industry with specialized solutions designed for specific use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {productVerticals.map((product, i) => (
              <div
                key={i}
                className={`bg-card p-8 rounded-2xl border border-border transition-all duration-300 ${
                  product.available ? "hover:border-accent/30 hover:shadow-lg" : "opacity-60"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                    {product.available ? (
                      <Link
                        to={product.href}
                        className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-sm text-muted-foreground italic">Coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreFeatures />
      <DemoVideo />
      <HowItWorks />
      <Security />
    </div>
  );
};

export default Products;
