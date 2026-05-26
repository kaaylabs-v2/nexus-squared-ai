import VerticalPage, { type VerticalConfig } from "@/components/VerticalPage";
import { MessageCircle, Mic, Search, Workflow, Bot, Code } from "lucide-react";

const config: VerticalConfig = {
  vertical: "Enterprise",
  hero: {
    headlineLead: "Your company already knows the answer.",
    headlineEmphasis: "Help everyone reach it",
    sub: "One assistant across Jira, Drive, wikis, Slack and your databases — so internal knowledge actually moves.",
  },
  problem: {
    heading: "Internal knowledge is everywhere except where you need it.",
    body: "It's siloed across Jira, Drive, wikis, databases and a dozen tools. Onboarding is slow, the same questions repeat in Slack every week, and answers hide in documents nobody can locate. Bolting a separate bot onto each tool only makes more silos.",
  },
  diagram: {
    sources: ["Jira", "Confluence", "Google Workspace", "Slack", "SharePoint", "SQL databases", "Amazon S3", "CRM", "Internal wikis", "PDFs"],
    surfaces: ["Internal Chat", "Search", "Voice", "Agents", "Workflows", "API"],
  },
  proof: [
    { value: 4, suffix: "×", label: "Faster internal answers" },
    { value: 62, suffix: "%", label: "Faster employee onboarding" },
    { value: 41, suffix: "%", label: "Lower internal support load" },
  ],
  caseStudy: {
    company: "B2B Analytics Platform",
    problem: "Teams asked the same questions across Slack, Jira and Confluence every week. New hires took weeks to find the right docs. Critical answers lived in one person's head.",
    implementation: "Deployed Nexus² across the company's Confluence, Jira, Slack and SharePoint — with SSO and per-team permissions respected end-to-end.",
    result: "Repeat questions dropped sharply, onboarding ramped 62% faster, and the support team handled 41% fewer 'where do I find…' requests.",
  },
  connectors: {
    groups: [
      { label: "Work & docs", items: ["Jira", "Confluence", "Google Workspace", "SharePoint", "Notion", "Slack"] },
      { label: "Data & storage", items: ["MySQL", "Postgres", "SQL Server", "Snowflake", "Amazon S3"] },
      { label: "Business systems", items: ["Salesforce", "HubSpot", "Zendesk", "ServiceNow"] },
      { label: "Files", items: ["PDFs", "Docs", "CSVs", "Wikis"] },
    ],
  },
  surfaces: [
    { icon: MessageCircle, title: "Internal chat assistant", body: "Embedded in Slack, Teams or your portal — answers in the flow of work." },
    { icon: Search, title: "Enterprise search", body: "One query, every system. Permissions respected, citations included." },
    { icon: Mic, title: "Voice", body: "Ask Nexus² out loud — desk, mobile or meeting room." },
    { icon: Bot, title: "Agents", body: "Multi-step actions across systems: file the ticket, update the record, notify the owner." },
    { icon: Workflow, title: "Workflows", body: "Automate routine internal processes end-to-end." },
    { icon: Code, title: "API", body: "Build internal copilots and embed Nexus² inside your own apps." },
  ],
  api: {
    body: "Build internal copilots and embed Nexus² directly into the intranet, employee portals and your own internal apps. One API across every connected system.",
    code: `import { nexus } from "@nexus2/sdk";

const res = await nexus.query({
  question: "What's blocking the 4.2 release?",
  sources: ["jira", "confluence", "slack"],
  audience: "engineering",
  permissions: currentUser.scopes,
});

console.log(res.answer, res.citations);`,
  },
  useCases: [
    { audience: "Engineering", questions: ["What's blocking the 4.2 release?", "Who owns the auth service?", "Show recent incidents on payments"] },
    { audience: "People & HR", questions: ["How many leave days do I have left?", "What's the parental leave policy?", "How do I expense a flight?"] },
    { audience: "Sales", questions: ["Which deals are stuck in legal?", "Find the latest pricing deck", "Summarise this account's history"] },
    { audience: "Support", questions: ["What's the workaround for ticket #4821?", "Has anyone seen this error before?", "Pull our latest SLA"] },
    { audience: "Legal & Ops", questions: ["Where's the MSA template?", "Which contracts renew this quarter?", "Find vendor security reviews"] },
  ],
  compliance: [
    "SSO & SAML",
    "Per-tenant data isolation",
    "Zero cross-tenant leakage",
    "Role-based access control",
    "Audit logs",
    "Encrypted credential vault",
    "On-prem / VPC deployment",
    "SOC-2 aligned",
  ],
};

const ProductEnterprise = () => <VerticalPage config={config} />;
export default ProductEnterprise;
