import LegalPage from "@/components/LegalPage";

const Privacy = () => (
  <LegalPage
    headlineLead="Privacy"
    headlineEmphasis="policy"
    tagline="NexusNexus AI is a product operated by Lemuria Digital. We value your privacy and are committed to protecting your personal information."
    glance={{
      lines: [
        "We never sell your personal information.",
        "Your data stays isolated to your workspace.",
        "You can contact us to request access, correction or deletion.",
      ],
      footnote: "The full policy below is authoritative.",
    }}
    sections={[
      {
        id: "information-we-collect",
        heading: "Information we collect",
        body: "We may collect the following information:",
        bullets: [
          "Name",
          "Email address",
          "Phone number",
          "Company details",
          "Website information",
          "Usage and interaction data",
          "Payment related details through third party payment providers",
        ],
      },
      {
        id: "how-we-use",
        heading: "How we use your information",
        body: "We use the information to:",
        bullets: [
          "provide NexusNexus AI services",
          "improve platform performance",
          "communicate with users",
          "provide onboarding and support",
          "process subscriptions and payments",
          "improve customer experience",
        ],
      },
      {
        id: "data-protection",
        heading: "Data protection",
        body: "We implement reasonable security measures to protect user information.",
      },
      {
        id: "third-party-services",
        heading: "Third party services",
        body: "We may use third party platforms including:",
        bullets: ["Cashfree", "PayPal", "OpenAI", "Analytics tools", "Hosting providers"],
        bulletsAfter:
          "These services may process information based on their own privacy policies.",
      },
      {
        id: "cookies",
        heading: "Cookies",
        body: "Our website may use cookies and analytics tools to improve website experience.",
      },
    ]}
    contact={{ heading: "Questions about your data?", email: "support@nexusnexus.ai" }}
  />
);

export default Privacy;
