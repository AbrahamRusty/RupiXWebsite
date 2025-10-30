import { Shield, Lock, FileCheck, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Multi-Layer Encryption",
    description: "Bank-grade encryption protecting every transaction.",
  },
  {
    icon: Lock,
    title: "Biometric Tokenization",
    description: "Your biometric data never leaves your device.",
  },
  {
    icon: FileCheck,
    title: "ISO/IEC 27001 Certified",
    description: "Compliant with global security standards.",
  },
  {
    icon: Server,
    title: "Zero-Knowledge Architecture",
    description: "We never see or store your raw biometric data.",
  },
];

export function RupixSecurity() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full opacity-10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C2FF] rounded-full opacity-10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <Shield className="text-[#00C2FF]" size={16} />
              <span className="text-[#00C2FF]">Security & Compliance</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Your Security is<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Our Priority
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Rupix uses multi-layer encryption, biometric tokenization, and hardware-level security protocols.
              We comply with ISO/IEC 27001, GDPR, and Indonesian PDPA standards to ensure that user data stays private and secure — always.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#00C2FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#3B82F6]/50 transition-all text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/20 to-[#00C2FF]/20 border border-[#3B82F6]/30 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="text-[#00C2FF]" size={24} />
                    </div>
                    <h3 className="text-white mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {["ISO 27001", "GDPR", "PDPA", "PCI DSS"].map((badge, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/70 hover:border-[#3B82F6]/50 transition-all"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
