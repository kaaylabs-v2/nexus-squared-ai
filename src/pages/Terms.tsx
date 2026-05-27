import LegalPage from "@/components/LegalPage";

const Terms = () => (
  <LegalPage
    headlineLead="Terms &"
    headlineEmphasis="conditions"
    tagline="These Terms & Conditions govern the use of NexusNexus AI. By accessing or using the platform you agree to these terms."
    sections={[
      {
        id: "services",
        heading: "Services",
        body: "NexusNexus AI provides AI powered customer engagement solutions including:",
        bullets: [
          "AI chatbot services",
          "AI voice support",
          "website training",
          "document based AI training",
          "integrations and automation",
        ],
      },
      {
        id: "user-responsibilities",
        heading: "User responsibilities",
        body: "Users agree:",
        bullets: [
          "to provide accurate information",
          "not to misuse the platform",
          "not to use the platform for illegal or harmful activities",
          "to maintain confidentiality of login credentials",
        ],
      },
      {
        id: "subscription-billing",
        heading: "Subscription & billing",
        bullets: [
          "NexusNexus AI operates on subscription based pricing.",
          "Subscription plans may vary based on usage and features.",
          "Additional usage beyond plan limits may incur extra charges.",
          "Payments are processed securely through third party payment gateways.",
        ],
      },
      {
        id: "platform-availability",
        heading: "Platform availability",
        body: "While we aim for uninterrupted service we do not guarantee 100% uptime.",
      },
      {
        id: "limitation-of-liability",
        heading: "Limitation of liability",
        body: "NexusNexus AI and Lemuria Digital shall not be liable for indirect losses damages or business interruptions arising from platform usage.",
      },
      {
        id: "changes-to-services",
        heading: "Changes to services",
        body: "We reserve the right to update features pricing or services at any time.",
      },
    ]}
    contact={{ heading: "Questions about these terms?", email: "hello@nexusnexus.ai" }}
  />
);

export default Terms;
