import VerticalPage, { type VerticalConfig } from "@/components/VerticalPage";
import { MessageCircle, Mic, Search, Workflow, Bot } from "lucide-react";

const config: VerticalConfig = {
  vertical: "Education",
  hero: {
    headlineLead: "Help every student find",
    headlineEmphasis: "what campus offers",
    sub: "One assistant across the LMS, registrar, departments and PDFs — so students get answers, and staff get their day back.",
  },
  problem: {
    heading: "The answers exist. Finding them doesn't.",
    body: "Course info, financial aid, forms and policies are spread across the LMS, the registrar, dozens of department sites and hundreds of PDFs. Students bounce between tabs, and staff field the same questions all term.",
  },
  diagram: {
    sources: ["Website", "Course catalog", "LMS", "Student portal", "Handbooks & PDFs", "Department sites", "Library system"],
    surfaces: ["Chat", "Voice", "Search", "Agents", "Workflows"],
  },
  proof: [
    { value: 67, suffix: "%", label: "More completed applications" },
    { value: 4.2, decimals: 1, suffix: "×", label: "Campus visit requests" },
    { value: 85, suffix: "%", label: "Faster response time" },
  ],
  caseStudy: {
    company: "State Community College",
    problem: "8,000 pages of content spread across the LMS, registrar, and department sites. Prospective students couldn't find application requirements or deadlines.",
    implementation: "Nexus² trained on programs, admission criteria, financial aid, and campus resources. Wired into the registrar for live deadline data.",
    result: "Completed applications rose 67%, campus visit requests 4.2×, and the admissions team cut average response time by 85%.",
  },
  connectors: {
    groups: [
      { label: "Learning platforms", items: ["Canvas", "Blackboard", "Banner", "Workday Student"] },
      { label: "Productivity", items: ["Google Workspace for Education", "Microsoft 365"] },
      { label: "Content", items: ["Website crawl", "PDFs & handbooks"] },
    ],
  },
  surfaces: [
    { icon: MessageCircle, title: "Student assistant chat", body: "An always-on assistant for courses, deadlines, aid, forms and policies." },
    { icon: Search, title: "Search", body: "Semantic search across handbooks, department sites and the catalog." },
    { icon: Mic, title: "Voice", body: "Speak naturally — same brain, hands-free for kiosks and phones." },
    { icon: Bot, title: "Agents", body: "Register for a course or start an application without leaving the chat." },
    { icon: Workflow, title: "Workflows", body: "Route advanced questions to the right human, with context attached." },
  ],
  api: {
    body: "Embed Nexus² inside your student portal, mobile app or campus website. Query across every source you've connected and render the answer your way.",
    code: `import { nexus } from "@nexus2/sdk";

const res = await nexus.query({
  question: "When does spring registration open?",
  sources: ["catalog", "registrar", "handbooks"],
  audience: "student",
});

console.log(res.answer, res.citations);`,
  },
  useCases: [
    { audience: "Students", questions: ["What courses run this spring?", "How do I apply for financial aid?", "Library hours this week?"] },
    { audience: "Faculty", questions: ["Where's the syllabus template?", "Room-booking policy?", "How do I submit final grades?"] },
    { audience: "Administrators", questions: ["Enrollment this term?", "Pull the FERPA compliance doc", "Which programs have the most inquiries?"] },
  ],
  compliance: [
    "FERPA-aligned",
    "Per-tenant data isolation",
    "Role-based access control",
    "SOC-2 aligned",
    "Encrypted credential vault",
    "Configurable data retention",
  ],
};

const ProductEducation = () => <VerticalPage config={config} />;
export default ProductEducation;
