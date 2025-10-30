import { Button } from "./ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Single Scanner",
    price: "1.000.000",
    period: "",
    description: "Perfect for small businesses",
    features: [
      "1 Rupix fingerprint scanner",
      "Unlimited transactions",
      "Real-time transaction dashboard",
      "Free software updates",
      "Email & chat support",
      "Transaction fee: 1.5%",
    ],
    highlighted: false,
  },
  {
    name: "Business Package",
    price: "4.500.000",
    period: "",
    description: "For growing businesses",
    features: [
      "5 Rupix fingerprint scanners",
      "Unlimited transactions",
      "Advanced analytics dashboard",
      "Priority support (24/7)",
      "Free installation & training",
      "Transaction fee: 1.2%",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For retail chains",
    features: [
      "10+ scanners with volume discount",
      "Custom integrations & API access",
      "White-label solutions available",
      "Dedicated account manager",
      "On-site training & support",
      "Transaction fee: Negotiable",
    ],
    highlighted: false,
  },
];

export function RupixPricing() {
  return (
    <section id="pricing" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Affordable Hardware,<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Unlimited Potential
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Own your Rupix fingerprint scanner. Pay once, use forever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${plan.highlighted ? 'md:-mt-4' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] rounded-full text-white text-sm">
                    Most Popular
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.highlighted ? 'from-[#3B82F6]/20 to-[#00C2FF]/20' : 'from-[#3B82F6]/10 to-[#00C2FF]/10'} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all`} />
                <div className={`relative bg-[#1A1A1A] border ${plan.highlighted ? 'border-[#3B82F6]' : 'border-white/10'} rounded-3xl p-8 hover:border-[#3B82F6]/50 transition-all h-full flex flex-col`}>
                  <div className="mb-8">
                    <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                    <p className="text-white/50">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-col">
                      {plan.price === "Custom" ? (
                        <span className="text-4xl text-white">Custom Pricing</span>
                      ) : (
                        <>
                          <span className="text-white/50 text-sm mb-2">One-time payment</span>
                          <div className="flex items-baseline">
                            <span className="text-white/50 mr-2">Rp</span>
                            <span className="text-4xl bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                              {plan.price}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="text-[#00C2FF] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 rounded-full ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] hover:opacity-90 text-white'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Order Now"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
