import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

export function RupixFooter() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent mb-6">
              Rupix
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Next-generation biometric payment platform. Your identity is your wallet.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#00C2FF] hover:border-[#00C2FF] transition-all"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/20 transition-all"
              >
                <Github size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#00C2FF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00C2FF] mt-1 flex-shrink-0" />
                <span className="text-white/60">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#00C2FF]" />
                <span className="text-white/60">hello@rupix.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#00C2FF]" />
                <span className="text-white/60">+62 21 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Rupix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
