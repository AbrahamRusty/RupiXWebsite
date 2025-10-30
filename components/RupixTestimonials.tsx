import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah T.",
    role: "Café Owner, Jakarta",
    content: "After installing Rupix scanners, our payment time dropped by 60%! Students love paying with their fingerprint. Best investment for my café.",
    rating: 5,
  },
  {
    name: "Andre P.",
    role: "University Canteen Manager",
    content: "No more lost cards or forgotten wallets. Students just tap their finger and go. The Rupix scanner paid for itself in 3 months through faster service.",
    rating: 5,
  },
  {
    name: "Lina K.",
    role: "Retail Chain Owner",
    content: "We bought 8 Rupix scanners for our stores. Queue times are down 70% and customers feel like they're living in the future. Amazing ROI!",
    rating: 5,
  },
];

export function RupixTestimonials() {
  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Trusted by<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-white/10 hover:border-[#3B82F6]/50 transition-all group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="text-[#00C2FF] fill-[#00C2FF]" size={18} />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-[#3B82F6]/20" size={32} />
                    <p className="text-white/70 leading-relaxed pl-6">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-white/40 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
