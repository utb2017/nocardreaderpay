export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Can I take card payments without a card reader?",
    answer:
      "Yes. Several methods let you accept card payments without a dedicated card reader: QR code payments through Apple Wallet, payment links sent by text or email, tap-to-pay on your phone (Square or Stripe), and P2P apps like Venmo or Cash App for business. Each has trade-offs around hardware, customer experience, and business features. For in-person work with no hardware and no customer app download, QR-based wallet payments — like those Valetfy is designed for — are among the simplest options.",
  },
  {
    question: "Do I need a terminal to accept payments?",
    answer:
      "No — a traditional countertop terminal is not required. Payment links work for remote billing, tap-to-pay turns your phone into a contactless reader, and QR wallet payments let customers pay by scanning without any terminal on your side. Terminals still make sense for high-volume retail counters, but mobile service businesses, events, and freelancers often skip them entirely.",
  },
  {
    question: "How do QR-code payments work?",
    answer:
      "You display a QR code linked to a secure checkout. The customer opens their phone camera, scans the code, and completes payment through Apple Wallet or their phone's wallet — using a card or Apple Pay already on their device. No card reader touches the transaction, and the customer typically does not need to download a separate app.",
  },
  {
    question: "Is QR payment safe for business?",
    answer:
      "QR payments routed through established payment processors use the same encryption and fraud protections as other card-not-present methods. Best practices: use a reputable provider, display your QR in person (not only via unsolicited messages), and confirm payment before handing over goods or completing service. Check your provider's security documentation — see valetfy.com for Valetfy's approach.",
  },
  {
    question: "Can I use Venmo or Cash App for business?",
    answer:
      "You can, and many small operators do for convenience. Venmo and Cash App offer business profiles, but they're primarily built for peer-to-peer transfers — not full point-of-sale workflows. Expect limited invoicing, tax reporting, and professional branding compared to purpose-built business payment tools. For a business-grade alternative without hardware, QR wallet solutions like Valetfy are designed to bridge that gap.",
  },
];
