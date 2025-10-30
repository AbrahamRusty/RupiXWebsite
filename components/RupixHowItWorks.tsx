import { Fingerprint, Link2, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register Fingerprint",
    description: "Customers register their fingerprint securely through the Rupix App in seconds.",
    icon: Fingerprint,
  },
  {
    number: "02",
    title: "Link Payment Method",
    description: "Customers link their preferred bank account or e-wallet to their fingerprint.",
    icon: Link2,
  },
  {
    number: "03",
    title: "Pay with One Touch",
    description: "Complete transactions with a single fingerprint scan — fast, secure, and contactless.",
    icon: CheckCircle,
  },
];

export function RupixHowItWorks() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Three Simple Steps to<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Seamless Payments
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group flex">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#3B82F6] to-transparent" />
                  )}
                  
                  <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-[#3B82F6]/50 transition-all group-hover:transform group-hover:scale-105 flex flex-col w-full">
                    {/* Step Number */}
                    <div className="text-6xl font-bold bg-gradient-to-br from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent mb-6 opacity-30">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6]/20 to-[#00C2FF]/20 border border-[#3B82F6]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-[#00C2FF]" size={32} />
                    </div>
                    
                    <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed flex-grow">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
