import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function RupixHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[#0A0A0A]/80 backdrop-blur-xl z-50 border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
              Rupix
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/70 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/70 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              Request Demo
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] hover:opacity-90 text-white border-0 rounded-full px-6"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  Request Demo
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] hover:opacity-90 text-white border-0 rounded-full"
                >
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
