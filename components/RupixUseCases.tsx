import { Store, GraduationCap, Ticket, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Store,
    title: "Retail & F&B",
    description: "Reduce checkout time by 70%. Customers pay with just their fingerprint — no cash, cards, or phones.",
    gradient: "from-[#3B82F6] to-[#00C2FF]",
  },
  {
    icon: GraduationCap,
    title: "Campus Ecosystem",
    description: "Perfect for university cafeterias and canteens. Students never forget their fingerprint at home.",
    gradient: "from-[#00C2FF] to-[#3B82F6]",
  },
  {
    icon: Ticket,
    title: "Events & Concerts",
    description: "Cashless festival payments. One fingerprint for entry verification and all vendor transactions.",
    gradient: "from-[#3B82F6] to-[#00C2FF]",
  },
  {
    icon: Building2,
    title: "SMEs & Franchises",
    description: "Affordable fingerprint payment scanners starting at just Rp 1 million. Enterprise tech for everyone.",
    gradient: "from-[#00C2FF] to-[#3B82F6]",
  },
];

export function RupixUseCases() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">Use Cases</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Built for Every<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Industry & Business
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all`} />
                  <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 hover:border-[#3B82F6]/50 transition-all group-hover:transform group-hover:scale-[1.02]">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl text-white mb-4">{useCase.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{useCase.description}</p>
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
