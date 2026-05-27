import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const columns = [
    {
      title: "Platform",
      links: [
        { label: "Overview", to: "/platform" },
        { label: "Architecture", to: "/platform" },
        { label: "Connectors", to: "/platform" },
        { label: "Surfaces", to: "/platform" },
        { label: "API", to: "/platform" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Education", to: "/solutions/education" },
        { label: "Enterprise", to: "/solutions/enterprise" },
        { label: "E-commerce", to: "/solutions/ecommerce" },
        { label: "Healthcare", to: "/solutions/healthcare" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", to: "/blog" },
        { label: "Newsletter", to: "/blog#newsletter" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/company" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request a demo", to: "/request-demo" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-semibold text-foreground font-sans">Nexus</span>
              <span className="text-lg font-semibold text-accent">²</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-5 max-w-xs">
              The AI layer between your data and every surface.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-sans mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Nexi is online
            </div>
            <p className="text-xs text-muted-foreground font-sans">
              1,200+ businesses · 4 industries · always learning.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-foreground font-semibold mb-4 font-sans">{c.title}</h3>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-3 font-sans">
                Stay in the loop
              </span>
              <p className="font-serif text-2xl text-foreground leading-snug">
                Monthly notes on building AI-native businesses. No spam.
              </p>
            </div>
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-background flex-1"
                  aria-label="Email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground font-sans mt-3">
                We'll only email you what's relevant. See our{" "}
                <Link to="/privacy" className="text-accent underline underline-offset-2 hover:opacity-80">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-sans text-center md:text-left">
              © 2026 Nexus² · A product of Lemuria Digital ·{" "}
              <Link to="/privacy" className="hover:text-foreground">Privacy</Link> ·{" "}
              <Link to="/terms" className="hover:text-foreground">Terms</Link> ·{" "}
              <Link to="/refund" className="hover:text-foreground">Refund</Link> ·{" "}
              <a href="mailto:support@nexusnexus.ai" className="hover:text-foreground">Contact</a> ·{" "}
              <Link to="/legal" className="hover:text-foreground italic">All policies →</Link>
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/nexusnexus-ai/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nexusnexus.ai/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-sans text-center md:text-left">
            Payments processed securely by Lemuria Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
