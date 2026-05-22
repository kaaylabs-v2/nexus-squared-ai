import VerticalPage, { type VerticalConfig } from "@/components/VerticalPage";
import { MessageCircle, Mic, Search, Workflow, Bot } from "lucide-react";

const config: VerticalConfig = {
  vertical: "Healthcare",
  hero: {
    headlineLead: "Help patients find care —",
    headlineEmphasis: "without the phone tree",
    sub: "Scheduling, insurance, wayfinding and portal help — answered instantly, with clinical questions routed to your staff.",
  },
  scopeNote:
    "Nexus² for Healthcare handles informational, administrative and navigational tasks — scheduling, insurance and coverage info, facility wayfinding, portal help, pre-visit instructions. It does not provide medical advice, diagnosis or clinical guidance; clinical questions are handed off to your staff.",
  problem: {
    heading: "Care starts with finding it.",
    body: "Patients struggle to book appointments, understand insurance, find the right specialist and navigate the portal. Front-desk staff field the same calls all day, and the answers are buried across the site, the portal and PDFs.",
  },
  diagram: {
    sources: ["Website", "Scheduling system", "Patient portal docs", "Insurance & coverage info", "Provider directory", "Facility & department info", "FAQs & policy docs"],
    surfaces: ["Patient assistant", "Voice", "Search", "Agents", "Workflows"],
  },
  connectors: {
    note: "Administrative and informational sources only — no PHI/EHR ingestion required.",
    groups: [
      { label: "Scheduling & access", items: ["Scheduling systems", "Patient-portal CMS", "Provider directory"] },
      { label: "Information", items: ["Insurance & coverage docs", "Policy & FAQ repositories", "Facility & department info"] },
    ],
  },
  surfaces: [
    { icon: MessageCircle, title: "Patient assistant chat", body: "Answers on appointments, insurance, providers and portal help — 24/7." },
    { icon: Mic, title: "Voice", body: "A friendlier alternative to the phone tree, available around the clock." },
    { icon: Search, title: "Search", body: "Semantic search across the site, FAQs and policy docs." },
    { icon: Bot, title: "Agents", body: "Book an appointment or find the right specialist without picking up the phone." },
    { icon: Workflow, title: "Workflows", body: "Route clinical questions to staff — with context, calmly, every time." },
  ],
  api: {
    body: "Embed Nexus² in your patient portal, mobile app or website. Administrative and informational queries only — clinical handoff is built in.",
    code: `import { nexus } from "@nexus2/sdk";

const res = await nexus.query({
  question: "What insurance do you accept?",
  sources: ["coverage", "providers", "faq"],
  audience: "patient",
  clinicalHandoff: true,
});

console.log(res.answer, res.handoff);`,
  },
  useCases: [
    { audience: "Patients", questions: ["How do I book an appointment?", "What insurance do you accept?", "Find a cardiologist near me"] },
    { audience: "Front desk & staff", questions: ["Deflect routine appointment calls", "Surface pre-visit instructions", "Direct patients to the right portal page"] },
    { audience: "Administrators", questions: ["What are patients asking about most?", "Which pages drive the most questions?", "Where are patients dropping off?"] },
  ],
  compliance: [
    "HIPAA-aligned",
    "Business Associate Agreement (BAA) available",
    "PHI safeguards & configurable data handling",
    "Per-tenant data isolation",
    "Encrypted credential vault",
    "Role-based access control",
    "Audit logs",
    "SOC-2 aligned",
  ],
};

const ProductHealthcare = () => <VerticalPage config={config} />;
export default ProductHealthcare;
