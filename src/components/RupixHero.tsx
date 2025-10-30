import { Button } from "./ui/button";
import { Fingerprint, Zap } from "lucide-react";

export function RupixHero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#3B82F6] rounded-full opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00C2FF] rounded-full opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3B82F6]/10 to-[#00C2FF]/10 rounded-full blur-3xl" />
      </div>

      {/* Fingerprint Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <Fingerprint key={i} className="text-[#00C2FF]" size={40} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Zap className="text-[#00C2FF]" size={16} />
            <span className="text-white/70 text-sm">The Future of Payment</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white">
            Pay with Your Touch —<br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#00C2FF] to-[#3B82F6] bg-clip-text text-transparent animate-pulse">
              The Future Starts with You
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Revolutionary fingerprint payment system for merchants. Fast, secure, and cardless transactions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] hover:opacity-90 text-white border-0 rounded-full px-10 py-7 text-lg shadow-lg shadow-[#3B82F6]/50"
            >
              Order Now
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white border-0 rounded-full px-10 py-7 text-lg"
            >
              Request Demo
            </Button>
          </div>

          {/* Animated Fingerprint Icon */}
          <div className="pt-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] rounded-full blur-2xl opacity-50 animate-pulse" />
              <Fingerprint className="relative text-[#00C2FF]" size={120} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
