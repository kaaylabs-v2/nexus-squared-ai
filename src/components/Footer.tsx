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
        { label: "Verticals", to: "/verticals" },
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
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-semibold text-foreground font-sans">Nexus</span>
              <span className="text-lg font-semibold text-accent">²</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans">
              Your smart website navigation assistant.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-foreground font-semibold mb-4 font-sans">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
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
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-sans">
            © 2025 Nexus². All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
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