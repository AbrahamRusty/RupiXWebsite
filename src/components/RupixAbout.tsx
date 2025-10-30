import { Target, Eye } from "lucide-react";

export function RupixAbout() {
  return (
    <section id="about" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">About Rupix</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-8">
              Your Identity is<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Your Wallet
              </span>
            </h2>
          </div>

          <div className="space-y-8 mb-20">
            <p className="text-xl text-white/70 leading-relaxed">
              Rupix is a next-generation fintech startup focused on building a world where your identity is your wallet.
              Our biometric payment system uses advanced fingerprint recognition to enable seamless, secure, and contactless transactions for merchants — from small cafés to enterprise retailers.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              We believe that payments should be <span className="text-[#00C2FF]">instant, human, and effortless</span>. That's why Rupix combines cutting-edge fingerprint biometric technology with robust financial infrastructure to create a safer, faster, and smarter way for your customers to pay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#00C2FF]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-[#1A1A1A] border border-white/10 rounded-3xl p-10 hover:border-[#3B82F6]/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#00C2FF] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl text-white mb-4">Mission Statement</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  To redefine everyday transactions by making biometric payments the new global standard.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/20 to-[#3B82F6]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-[#1A1A1A] border border-white/10 rounded-3xl p-10 hover:border-[#00C2FF]/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C2FF] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl text-white mb-4">Vision Statement</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  A world where every payment is powered by trust, identity, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
