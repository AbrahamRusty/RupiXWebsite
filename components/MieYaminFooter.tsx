import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function MieYaminFooter() {
  return (
    <footer className="bg-[#2F3542] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white text-xl mb-6">Mie Yamin Untar</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Campus taste, endless flavor. Serving authentic noodles with love since 2018.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/mieyaminuntar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8B6A] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8B6A] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8B6A] transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#FF8B6A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FF8B6A] transition-colors">About</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-[#FF8B6A] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-[#FF8B6A] transition-colors">Loyalty Program</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#FF8B6A]" />
                <span className="text-gray-400">Jl. Letjen S. Parman No. 1, Jakarta Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#FF8B6A]" />
                <span className="text-gray-400">0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FF8B6A]" />
                <span className="text-gray-400">info@mieyaminuntar.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white mb-6">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span className="text-[#FFD89C]">09:00 - 21:00</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span className="text-[#FFD89C]">09:00 - 21:00</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Mie Yamin Untar. All rights reserved. Made with ❤️ for students.
          </p>
        </div>
      </div>
    </footer>
  );
}
