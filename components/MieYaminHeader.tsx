import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MieYaminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-[#FF8B6A] text-2xl">Mie Yamin Untar</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("register")}
              className="bg-[#FF8B6A] hover:bg-[#FF7A59] text-white rounded-full px-8"
            >
              Join Loyalty
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2F3542]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-[#2F3542] hover:text-[#FF8B6A] transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("register")}
                className="bg-[#FF8B6A] hover:bg-[#FF7A59] text-white rounded-full"
              >
                Join Loyalty
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
