import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", to: "/product" },
        { label: "Use Cases", to: "/use-cases" },
        { label: "Pricing", to: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", to: "#" },
        { label: "Blog", to: "#" },
        { label: "Support", to: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", to: "#" },
        { label: "Terms of Service", to: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-bg-primary border-t border-color-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-1 group mb-4">
              <span className="text-2xl font-black text-text-light">Nexus</span>
              <span className="text-xl font-black text-accent group-hover:scale-110 transition-transform">
                ²
              </span>
            </Link>
            <p className="text-text-muted-light text-sm leading-relaxed">
              Your smart website navigation assistant.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-text-light font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.to}
                      className="text-text-muted-light hover:text-text-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-color-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted-light text-sm">
            © 2025 Nexus². All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted-light hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-text-muted-light hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-text-muted-light hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
