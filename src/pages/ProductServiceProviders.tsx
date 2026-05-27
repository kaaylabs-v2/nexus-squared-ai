import VerticalPage, { type VerticalConfig } from "@/components/VerticalPage";
import { MessageCircle, Mic, Search, Workflow, Bot, CalendarCheck } from "lucide-react";

const config: VerticalConfig = {
  vertical: "Service Providers",
  hero: {
    headlineLead: "Be open 24/7 —",
    headlineEmphasis: "without being on call 24/7",
    sub: "Nexus² answers every visitor question, qualifies the serious ones, and books them in — across chat, voice and your calendar. So you stop losing the leads that come in at 11 pm.",
  },
  problem: {
    heading: "Service businesses live or die on responsiveness.",
    body: "A prospect lands on your site at 11 pm with a question, doesn't get an answer, and books your competitor at 9 am. Your team spends half the day answering the same five questions over email — services, pricing, timelines, portfolio. The work that actually grows the business waits.",
  },
  diagram: {
    sources: [
      "Website",
      "Services & pricing pages",
      "Portfolio / case studies",
      "FAQ documents",
      "Calendar (Calendly, Google)",
      "CRM",
      "Intake forms",
      "Email",
    ],
    surfaces: [
      "Intake assistant",
      "Voice agent",
      "Search",
      "Booking agent",
      "Lead-qualification workflows",
      "API",
    ],
  },
  proof: [
    { value: 3.1, decimals: 1, suffix: "×", label: "More after-hours leads captured" },
    { value: 60, suffix: "%", label: "First-touch response-time reduction" },
    { value: 42, suffix: "%", label: "Fewer \"what do you charge for\" emails" },
  ],
  caseStudy: {
    company: "A 12-person creative agency that stopped writing \"thanks for reaching out\" emails.",
    problem:
      "Inbound enquiries came at all hours. Half asked the same things — services, pricing, timelines, portfolio. The team answered the same email five times a week, and 40% of after-hours leads went cold by morning.",
    implementation:
      "Nexus² connected to their services pages, the portfolio, the FAQ, and Calendly. It now answers questions in chat, books qualifying calls into the team's calendar, and routes hot leads to the right person on Slack with full context.",
    result:
      "After-hours lead capture up 3.1×. Booked discovery calls per week up from 4 to 13. The team stopped writing the \"here's our pricing\" email entirely.",
  },
  connectors: {
    groups: [
      {
        label: "Services & content",
        items: [
          "Website",
          "Services & pricing pages",
          "Portfolio",
          "FAQ documents",
          "Case studies",
        ],
      },
      { label: "Scheduling", items: ["Calendly", "Acuity", "Google Calendar", "Outlook"] },
      { label: "Sales & CRM", items: ["HubSpot", "Pipedrive", "Salesforce", "Copper"] },
      { label: "Communications", items: ["Slack", "Email", "WhatsApp Business"] },
    ],
  },
  surfaces: [
    {
      icon: MessageCircle,
      title: "Intake Assistant",
      body: "Chat on every page. Answers services, pricing, portfolio, scheduling.",
    },
    {
      icon: Mic,
      title: "Voice Agent",
      body: "Handles after-hours calls so leads don't go to voicemail.",
    },
    {
      icon: Search,
      title: "Semantic Search",
      body: "Clients find the right service or case study in plain language.",
    },
    {
      icon: CalendarCheck,
      title: "Booking Agent",
      body: "Qualifies the prospect, asks the right intake questions, books a call in your calendar.",
    },
    {
      icon: Workflow,
      title: "Lead-Qualification Workflows",
      body: "Hot leads land in Slack or your CRM with a one-line summary of context.",
    },
    {
      icon: Bot,
      title: "API",
      body: "Embed Nexus² into your client portal or proposal flow.",
    },
  ],
  api: {
    body: "Embed Nexus² in your site, client portal, or proposal flow. Query across services, portfolio, FAQ and calendar in a single call.",
    code: `import { nexus } from "@nexus2/sdk";

const res = await nexus.query({
  prompt: "Book a 30-min discovery call next Tuesday for a commercial photography enquiry.",
  sources: ["services", "calendar", "portfolio"]
});

console.log(res.answer, res.booking);`,
  },
  useCases: [
    {
      audience: "Prospects",
      questions: [
        "Do you handle commercial photography for restaurants?",
        "What's your starting rate for tax consulting?",
        "Can I book a discovery call for next Tuesday?",
      ],
    },
    {
      audience: "Team",
      questions: [
        "Pull every enquiry that mentioned \"compliance\" this month.",
        "Summarise the lead context before my 10 am call.",
        "What questions are we losing leads on?",
      ],
    },
    {
      audience: "Operations",
      questions: [
        "Which services drive the most enquiries?",
        "Is there content visitors keep asking for that we don't have?",
      ],
    },
  ],
  compliance: [
    "Privacy-first (no creepy tracking)",
    "Per-tenant data isolation",
    "Encrypted credential vault (calendar, CRM, Slack tokens)",
    "Role-based access",
    "Audit logs",
    "SOC-2 aligned",
  ],
  impactLine: "Capture after-hours leads · Cut response times · Book more calls · Spend less time on email",
};

const ProductServiceProviders = () => <VerticalPage config={config} />;
export default ProductServiceProviders;
