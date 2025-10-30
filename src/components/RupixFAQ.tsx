import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Is my biometric data stored on the cloud?",
    answer: "No, all biometric templates are encrypted and stored locally on the device. We use advanced tokenization, which means your actual biometric data never leaves your device or enters our servers.",
  },
  {
    question: "Can I link multiple payment methods?",
    answer: "Yes, Rupix allows linking multiple accounts or e-wallets. You can add multiple bank accounts, credit cards, and e-wallets, and choose your preferred payment method for each transaction.",
  },
  {
    question: "What happens if the scanner fails?",
    answer: "Our system offers fallback authentication options including PIN code, backup fingerprint registration, or manual verification through the Rupix app. We ensure you always have access to your payment capabilities.",
  },
  {
    question: "How secure is Rupix compared to traditional payment methods?",
    answer: "Rupix is significantly more secure than cards or mobile payments. Biometric data cannot be stolen, copied, or lost. We use multi-layer encryption, hardware-level security, and comply with ISO 27001 and PCI DSS standards.",
  },
  {
    question: "What devices are compatible with Rupix?",
    answer: "Rupix is compatible with most modern POS systems and payment terminals. We provide plug-and-play integration kits for major brands, and our technical team can assist with custom integrations.",
  },
];

export function RupixFAQ() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Frequently Asked<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl px-6 hover:border-[#3B82F6]/50 transition-all"
              >
                <AccordionTrigger className="text-white hover:text-[#00C2FF] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
