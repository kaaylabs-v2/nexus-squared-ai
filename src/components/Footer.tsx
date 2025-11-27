import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Use Cases", "Integrations", "Pricing", "Security"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Blog", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Security"],
    },
  ];

  return (
    <footer className="bg-bg-primary border-t border-color-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-1 group mb-4">
              <span className="text-2xl font-black text-text-light">Nexus</span>
              <span className="text-xl font-black text-accent group-hover:scale-110 transition-transform">
                ²
              </span>
            </a>
            <p className="text-text-muted-light text-sm leading-relaxed">
              Your AI layer over every business tool.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-text-light font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-muted-light hover:text-text-light transition-colors text-sm"
                    >
                      {link}
                    </a>
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
