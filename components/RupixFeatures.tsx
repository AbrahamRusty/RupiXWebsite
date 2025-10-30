import { Fingerprint, Zap, Shield, Plug, WifiOff } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Fingerprint Precision",
    description: "Advanced fingerprint recognition technology with industry-leading 99.9% accuracy rate.",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Customers pay in under 2 seconds. No wallets, no cards, no phones needed.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Encrypted fingerprint data with end-to-end protection. Biometric data never leaves the device.",
  },
  {
    icon: Plug,
    title: "Easy Integration",
    description: "Plug-and-play setup with your existing systems. Start accepting fingerprint payments in minutes.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "Continue accepting payments even during network outages. Full offline transaction support.",
  },
];

export function RupixFeatures() {
  return (
    <section id="features" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">Key Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Built for the<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Future of Commerce
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-[#00C2FF]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 hover:border-[#3B82F6]/50 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6]/20 to-[#00C2FF]/20 border border-[#3B82F6]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-[#00C2FF]" size={28} />
                    </div>
                    <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
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
