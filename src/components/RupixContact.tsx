import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

export function RupixContact() {
  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full opacity-20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2FF] rounded-full opacity-20 blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <span className="text-[#00C2FF]">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Ready to Upgrade Your<br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] bg-clip-text text-transparent">
                Payment System?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Order your Rupix fingerprint scanner today. Own it for life, starting at Rp 1 million.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-[#00C2FF]/10 rounded-3xl blur-xl" />
              <div className="relative bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 hover:border-[#3B82F6]/50 transition-all">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business needs..."
                      rows={4}
                      className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] rounded-xl resize-none"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 h-12 bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] hover:opacity-90 text-white rounded-full">
                      <Mail className="mr-2" size={18} />
                      Order Scanner
                    </Button>
                    <Button className="flex-1 h-12 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full">
                      <MessageSquare className="mr-2" size={18} />
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#3B82F6]/50 transition-all">
                  <h3 className="text-white text-xl mb-3">Bulk Orders</h3>
                  <p className="text-white/60 mb-4">
                    Order 10+ scanners and get special pricing. Perfect for retail chains with multiple locations.
                  </p>
                  <Button variant="link" className="text-[#00C2FF] hover:text-[#3B82F6] p-0">
                    Get volume discount →
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/10 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#00C2FF]/50 transition-all">
                  <h3 className="text-white text-xl mb-3">Reseller Program</h3>
                  <p className="text-white/60 mb-4">
                    Become a Rupix reseller and earn 20% commission on every scanner sold. Full training provided.
                  </p>
                  <Button variant="link" className="text-[#00C2FF] hover:text-[#3B82F6] p-0">
                    Join as reseller →
                  </Button>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#3B82F6]/50 transition-all">
                  <h3 className="text-white text-xl mb-3">Free Installation</h3>
                  <p className="text-white/60 mb-4">
                    Order 5+ scanners and get free on-site installation and staff training at your location.
                  </p>
                  <Button variant="link" className="text-[#00C2FF] hover:text-[#3B82F6] p-0">
                    Learn more →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
