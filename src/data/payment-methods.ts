export interface PaymentMethod {
  id: string;
  name: string;
  summary: string;
  hardware: string;
  customerApp: string;
  allPaymentTypes: string;
  bestFor: string;
  featured?: boolean;
  link?: { href: string; label: string };
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "qr-wallet",
    name: "QR code / Apple Wallet payments",
    summary:
      "The customer scans a QR code and pays from Apple Wallet or their phone wallet — no card reader, no hardware, and no app download for them. Designed for fast in-person checkout when you're on-site or mobile.",
    hardware: "None",
    customerApp: "No (uses built-in wallet)",
    allPaymentTypes: "Yes (cards, Apple Pay, and more)",
    bestFor: "In-person & mobile service businesses",
    featured: true,
    link: { href: "https://valetfy.com", label: "Valetfy" },
  },
  {
    id: "payment-links",
    name: "Payment links & invoices",
    summary:
      "Send a link by text or email; the customer pays on their own time. Tools like PayPal and Stripe make this straightforward for remote or after-the-fact billing — but pulling up a link on-site feels clunky compared to a scan-and-pay flow.",
    hardware: "None",
    customerApp: "Browser only",
    allPaymentTypes: "Yes",
    bestFor: "Remote billing, quotes, follow-up invoices",
    link: { href: "https://stripe.com/payments/payment-links", label: "Stripe Payment Links" },
  },
  {
    id: "p2p",
    name: "P2P apps (Venmo, Cash App, Zelle)",
    summary:
      "Customers already know these apps, and setup is quick. The trade-off: they're built for personal transfers, not business workflows — limited receipts, tax reporting, and professional branding. Fine for occasional side gigs; risky as your primary business channel.",
    hardware: "None",
    customerApp: "Yes (their P2P app)",
    allPaymentTypes: "Limited (often bank/card within app)",
    bestFor: "Informal, low-volume personal payments",
    link: { href: "https://venmo.com/business/profiles", label: "Venmo Business" },
  },
  {
    id: "tap-to-pay",
    name: "Tap-to-pay on phone (Square, Stripe Tap to Pay)",
    summary:
      "Turn your phone into a contactless terminal — no separate card reader, but you still run their app and accept their fee structure. You're tied to their ecosystem, and the customer taps their card or phone to your device.",
    hardware: "Phone only (no separate reader)",
    customerApp: "No",
    allPaymentTypes: "Yes",
    bestFor: "Retail-style counter checkout on iPhone/Android",
    link: { href: "https://stripe.com/terminal/tap-to-pay", label: "Stripe Tap to Pay" },
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Show your QR",
    description: "Display your Valetfy QR on your phone, tablet, or printed sign — no terminal to carry or charge.",
  },
  {
    step: 2,
    title: "Customer scans in Apple Wallet",
    description: "They scan with their camera and pay from Apple Wallet. No app download, no account signup on their end.",
  },
  {
    step: 3,
    title: "You're paid",
    description: "Payment is designed to land in your account quickly so you get paid the moment the job is done.",
  },
];

export const whoItsFor = [
  {
    title: "Mobile & solo service pros",
    examples: "Detailers, groomers, home services, cleaners",
  },
  {
    title: "Events & pop-ups",
    examples: "Markets, fairs, food trucks, temporary setups",
  },
  {
    title: "Freelancers on the go",
    examples: "Consultants, trainers, photographers at client sites",
  },
];
