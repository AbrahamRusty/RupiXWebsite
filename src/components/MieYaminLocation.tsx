import { MapPin, Clock, Phone, Instagram } from "lucide-react";

export function MieYaminLocation() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 bg-[#FFE5D9] text-[#FF8B6A] rounded-full mb-6">
            Visit Us
          </div>
          <h2 className="text-[#2F3542] text-4xl lg:text-5xl mb-6">Find Us Here</h2>
          <p className="text-[#6C757D] text-lg">
            Visit our convenient campus location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-[#F8F9FA] p-8 rounded-3xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#FF8B6A] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-[#2F3542] text-xl mb-3">Address</h3>
                  <p className="text-[#6C757D] text-lg leading-relaxed">
                    Jl. Letjen S. Parman No. 1<br />
                    Kampus Untar, Jakarta Barat
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-8 rounded-3xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#FFD89C] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#2F3542]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#2F3542] text-xl mb-3">Open Hours</h3>
                  <p className="text-[#6C757D] text-lg leading-relaxed">
                    Monday – Saturday<br />
                    09.00 – 21.00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6BCB77] to-[#5BBA67] p-8 rounded-3xl text-white">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-3">Contact</h3>
                  <p className="text-white/90 text-lg mb-4">
                    WhatsApp: 0812-3456-7890
                  </p>
                  <button 
                    onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                    className="px-6 py-3 bg-white text-[#6BCB77] rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-3xl text-white">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-3">Social Media</h3>
                  <a 
                    href="https://instagram.com/mieyaminuntar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 text-lg hover:underline"
                  >
                    @mieyaminuntar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-[#F8F9FA] p-4 rounded-3xl">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8675309308385!2d106.79269731476896!3d-6.168618095527524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f771b0aa8bc1%3A0x8c85f4a2e4a8aee!2sUniversitas%20Tarumanagara!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mie Yamin Untar Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
