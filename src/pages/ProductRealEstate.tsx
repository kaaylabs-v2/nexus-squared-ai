import VerticalPage, { type VerticalConfig } from "@/components/VerticalPage";
import { MessageCircle, Mic, Search, Workflow, Bot, CalendarCheck } from "lucide-react";

const config: VerticalConfig = {
  vertical: "Real Estate",
  hero: {
    headlineLead: "From browsing to booking —",
    headlineEmphasis: "one assistant for every buyer",
    sub: "Nexus² gives every buyer a private agent that knows your projects, your pricing and your approvals — across chat, voice and your CRM. Serious buyers reach the right unit faster, and your team focuses on the ones ready to close.",
  },
  problem: {
    heading: "Buyers leave because the website can't actually talk to them.",
    body: "Real estate is the highest-friction purchase most people will ever make. Buyers compare four projects across six websites, dig through PDFs for RERA details, and bounce when they can't get a quick yield estimate or a site-visit slot. Your sales agents end up repeating the same answers all day instead of closing the warm leads.",
  },
  diagram: {
    sources: [
      "Project catalog",
      "Floor plans & brochures",
      "RERA documents",
      "Price lists",
      "Inventory database",
      "Locality & amenity data",
      "CRM",
      "WhatsApp",
      "Sitemaps",
    ],
    surfaces: [
      "Property assistant",
      "Voice agent",
      "Semantic search",
      "Site-visit agent",
      "Lead-routing workflows",
      "API",
    ],
  },
  proof: [
    { value: 47, suffix: "%", label: "Faster site-visit booking" },
    { value: 2.4, decimals: 1, suffix: "×", label: "More qualified leads to sales handover" },
    { value: 38, suffix: "%", label: "Fewer \"where's the brochure\" tickets" },
  ],
  caseStudy: {
    company: "Meridian Habitat — a South India developer at scale.",
    problem:
      "42 active communities across 4 cities and 18 Mn sq ft delivered. But every new prospect started with the same five questions — and 64% bounced before any human contact, especially after hours.",
    implementation:
      "Connected the project catalog, all RERA documents, the inventory database, brochures, and the CRM. Deployed Nexus² in chat and voice on every project microsite, with site-visit booking handled by an agent that qualifies first.",
    result:
      "Qualified site-visit bookings up 2.4×. Sales handover conversations up 38%. Brochure-request tickets effectively eliminated. Sales team time freed for the buyers ready to close.",
  },
  connectors: {
    groups: [
      {
        label: "Property data",
        items: [
          "Project catalog",
          "Inventory DB",
          "RERA documents",
          "Floor plans",
          "Brochure PDFs",
          "Locality & amenity data",
        ],
      },
      { label: "Sales & CRM", items: ["Salesforce", "Zoho CRM", "HubSpot", "LeadSquared"] },
      { label: "Communications", items: ["WhatsApp Business", "Email", "SMS gateways"] },
      { label: "Operations", items: ["Scheduling (Calendly / in-house)", "Lead-routing systems"] },
    ],
  },
  surfaces: [
    {
      icon: MessageCircle,
      title: "Property Assistant",
      body: "Chat on every project microsite. Buyers ask, Nexi finds, compares, books.",
    },
    {
      icon: Mic,
      title: "Voice Agent",
      body: "Handles inbound calls and missed-call follow-ups on real project context.",
    },
    {
      icon: Search,
      title: "Semantic Search",
      body: "Natural-language property finder (\"3BHK Whitefield under 2 Cr, ready to move\").",
    },
    {
      icon: CalendarCheck,
      title: "Site-Visit Agent",
      body: "Qualifies the buyer, books the slot, sends the confirmation.",
    },
    {
      icon: Workflow,
      title: "Lead-Routing Workflows",
      body: "Hot leads land in your CRM and your RM's WhatsApp with full context.",
    },
    { icon: Bot, title: "API", body: "Embed Nexus² into your existing property portal." },
  ],
  api: {
    body: "Embed Nexus² in your project microsites, sales portals, and broker tooling. Query across catalog, RERA, inventory and locality data in a single call.",
    code: `import { nexus } from "@nexus2/sdk";

const res = await nexus.query({
  prompt: "Compare yield on Meridian Crest vs Vertex One for a 3BHK.",
  sources: ["catalog", "rera", "inventory", "locality"]
});

console.log(res.answer, res.recommendations);`,
  },
  useCases: [
    {
      audience: "Buyers",
      questions: [
        "Show me 3BHK apartments in Whitefield under ₹2 Cr.",
        "Compare yield on these two projects.",
        "What's the RERA approval number for Meridian Crest?",
      ],
    },
    {
      audience: "Sales / RMs",
      questions: [
        "Which leads this week showed interest in waterfront properties?",
        "Send the latest price list for Marina One.",
        "Pull the legal pack for Vertex One.",
      ],
    },
    {
      audience: "Marketing",
      questions: [
        "What are visitors asking about that we don't have content for?",
        "Which projects get the most enquiries — and what's the conversion?",
      ],
    },
  ],
  compliance: [
    "RERA-aware content rendering",
    "Per-tenant data isolation",
    "Encrypted credential vault (CRM keys, WhatsApp keys)",
    "Audit logs",
    "Role-based access for sales/marketing/RM roles",
    "India data residency option",
    "SOC-2 aligned",
  ],
  impactLine: "Faster site visits · More qualified leads · Fewer brochure tickets · Sales focused on closers",
};

const ProductRealEstate = () => <VerticalPage config={config} />;
export default ProductRealEstate;
