import VerticalPage, { type VerticalConfig } from "@/components/VerticalPage";
import { MessageCircle, Mic, Search, Workflow, Bot } from "lucide-react";

const config: VerticalConfig = {
  vertical: "E-commerce",
  hero: {
    headlineLead: "Turn your storefront into",
    headlineEmphasis: "a conversation that sells",
    sub: "Guided discovery, instant order help, fewer bounces — on every page of your store.",
  },
  problem: {
    heading: "Shoppers have questions. Your store has tabs.",
    body: "Shoppers can't find the right product and bounce. They ask about sizing, shipping and returns — and leave. Site search returns nothing useful, and \"where's my order?\" tickets pile up.",
  },
  diagram: {
    sources: ["Product catalog", "Store (Shopify)", "Inventory database", "Order system", "Shipping & returns policy", "Reviews", "Blog / CMS"],
    surfaces: ["Shopping assistant", "Voice", "Search", "Agents", "Workflows"],
  },
  proof: [
    { value: 35, suffix: "%", label: "Lower cart abandonment" },
    { value: 3.2, decimals: 1, suffix: "×", label: "Higher conversion rate" },
    { value: 58, suffix: "%", label: "Fewer support tickets" },
  ],
  caseStudy: {
    company: "Leading Home Furnishings Retailer",
    problem: "7,000+ products and a 65% bounce rate — customers couldn't navigate categories or filter by what actually mattered to them (room size, material, style).",
    implementation: "Added the Nexus² assistant trained on the full product catalog, dimensions, materials, finishes and style tags. Wired into order and shipping data for post-purchase queries.",
    result: "Cart abandonment dropped 35%, conversion lifted 3.2×, and support tickets about sizing, shipping and returns fell by more than half within the first quarter.",
  },
  connectors: {
    groups: [
      { label: "Stores", items: ["Shopify", "WooCommerce", "BigCommerce", "Magento"] },
      { label: "Catalog & inventory", items: ["Product catalogs", "Inventory DB"] },
      { label: "Orders & shipping", items: ["Stripe", "Shippo", "ShipStation"] },
      { label: "Marketing & reviews", items: ["Klaviyo", "Yotpo", "Okendo"] },
    ],
  },
  surfaces: [
    { icon: MessageCircle, title: "Shopping assistant", body: "Help shoppers find the right product, in their words." },
    { icon: Search, title: "Semantic product search", body: "Search that understands intent — not just keywords." },
    { icon: Mic, title: "Voice", body: "Hands-free shopping for mobile and in-store kiosks." },
    { icon: Bot, title: "Agents", body: "Add to cart, track an order, start a return — right inside the chat." },
    { icon: Workflow, title: "Workflows", body: "Automate post-purchase flows, returns, and recovery." },
  ],
  api: {
    body: "Embed Nexus² in your storefront theme, PDPs, or mobile app. Query across catalog, inventory, orders and policy in a single call.",
    code: `import { nexus } from "@nexus2/sdk";

const res = await nexus.query({
  question: "Do these jeans run small?",
  sources: ["catalog", "reviews", "policy"],
  audience: "shopper",
});

console.log(res.answer, res.recommendations);`,
  },
  useCases: [
    { audience: "Shoppers", questions: ["A gift for my mom under $50", "Do these run small?", "Compare these two items"] },
    { audience: "Orders & support", questions: ["Where's my order #ABC123?", "Start a return", "What's your return policy?"] },
    { audience: "Merchandising", questions: ["What are shoppers asking for that we don't stock?", "Which products get the most sizing questions?", "Top reasons for returns this month"] },
  ],
  compliance: [
    "Privacy-first — no creepy tracking, no cookies",
    "Never handles card data — PCI-safe by design",
    "Per-tenant data isolation",
    "Role-based access control",
    "Encrypted credential vault",
    "SOC-2 aligned",
  ],
  impactLine: "Reduce bounce · Lift conversion · Deflect tickets · Raise AOV",
};

const ProductEcommerce = () => <VerticalPage config={config} />;
export default ProductEcommerce;
