import Reveal from "./Reveal";
import {
  FileText,
  ShoppingBag,
  Droplets,
  Globe,
  PenTool,
  Layout,
  Briefcase,
  MessageSquare,
  Database,
  Cloud,
  Building2,
  Users2,
} from "lucide-react";

const platforms = [
  { name: "WordPress", icon: FileText },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Webflow", icon: Droplets },
  { name: "Wix", icon: Layout },
  { name: "Framer", icon: PenTool },
  { name: "Squarespace", icon: Briefcase },
  { name: "Custom HTML", icon: Globe },
];

const connectors = [
  { name: "Jira", icon: Briefcase },
  { name: "Confluence", icon: FileText },
  { name: "Google Workspace", icon: Cloud },
  { name: "Slack", icon: MessageSquare },
  { name: "Notion", icon: FileText },
  { name: "SQL", icon: Database },
  { name: "Amazon S3", icon: Cloud },
  { name: "HubSpot", icon: Users2 },
  { name: "Salesforce", icon: Building2 },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Surfaces */}
        <div>
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-5 font-sans">
                Surfaces
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">
                Lives wherever your <span className="font-serif italic text-accent">visitors are</span>
              </h2>
              <p className="text-lg text-muted-foreground font-sans">
                Drop Nexus² into the platforms your site already runs on.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.03}>
                <div className="bg-card border border-border rounded-2xl p-5 hover:border-accent/50 hover:-translate-y-1 transition-all duration-200 text-center group">
                  <p.icon className="w-7 h-7 mx-auto text-muted-foreground group-hover:text-accent transition-colors mb-2" />
                  <p className="text-sm font-medium text-foreground font-sans">{p.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Connectors */}
        <div>
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide uppercase mb-5 font-sans">
                Connectors
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">
                Connects to whatever your team{" "}
                <span className="font-serif italic text-accent">already runs</span>
              </h2>
              <p className="text-lg text-muted-foreground font-sans">
                One brain across every system your business already uses.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {connectors.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.03}>
                <div className="bg-card border border-border rounded-2xl p-5 text-center group hover:border-accent/50 hover:-translate-y-1 transition-all duration-200">
                  <c.icon className="w-7 h-7 mx-auto text-muted-foreground/60 grayscale group-hover:grayscale-0 group-hover:text-accent transition-all mb-2" />
                  <p className="text-xs font-medium text-foreground font-sans">{c.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
