import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

export function MieYaminHero() {
  const handleRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-[#FFE5D9] via-white to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side: Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <Sparkles className="text-[#FF8B6A]" size={18} />
              <span className="text-[#2F3542]">Campus Favorite Since 2018</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-[#2F3542] text-5xl lg:text-6xl leading-tight">
                Campus Taste,<br />
                <span className="text-[#FF8B6A]">Endless Flavor</span>
              </h1>
              <p className="text-[#6C757D] text-lg max-w-xl">
                Authentic noodles made with fresh ingredients, generous toppings, 
                and a recipe that never fails. Every bite brings back memories.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleRegister}
                className="bg-[#FF8B6A] hover:bg-[#FF7A59] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#FF8B6A]/30"
                size="lg"
              >
                Join Loyalty Program
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                className="bg-[#6BCB77] hover:bg-[#5BBA67] text-white rounded-full px-8 py-6 text-lg shadow-lg"
                size="lg"
              >
                Order Now
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-[#FF8B6A] text-3xl">10k+</div>
                <div className="text-[#6C757D]">Happy Students</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-[#FF8B6A] text-3xl">4.8⭐</div>
                <div className="text-[#6C757D]">Customer Rating</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-[#FF8B6A] text-3xl">5+</div>
                <div className="text-[#6C757D]">Years Serving</div>
              </div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#FF8B6A]/20 to-[#FFD89C]/20 rounded-[3rem] blur-3xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1597394412452-60ed971d3917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsfGVufDF8fHx8MTc2MTY0MTcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mie Yamin Untar"
                className="relative rounded-[2rem] shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
