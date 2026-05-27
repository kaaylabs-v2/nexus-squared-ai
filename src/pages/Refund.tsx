import LegalPage from "@/components/LegalPage";

const Refund = () => (
  <LegalPage
    headlineLead="Refund & cancellation"
    headlineEmphasis="policy"
    sections={[
      {
        id: "subscription-cancellation",
        heading: "Subscription cancellation",
        body: "Users may request cancellation of their subscription before the next billing cycle.",
      },
      {
        id: "refund-policy",
        heading: "Refund policy",
        body: "Payments made for subscription plans are generally non refundable once services have been activated or onboarding has started. Refund requests if applicable will be reviewed on a case by case basis.",
      },
      {
        id: "failed-payments",
        heading: "Failed payments",
        body: "If subscription renewal payments fail account access or usage limits may be temporarily restricted until payment is completed.",
      },
    ]}
    contact={{
      heading: "Questions about billing or cancellation?",
      email: "hello@nexusnexus.ai",
    }}
  />
);

export default Refund;
