import { Target, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MieYaminAbout() {
  const missions = [
    "Serve high-quality, halal ingredients",
    "Offer fast, friendly, and professional service",
    "Build a loyal customer community with exclusive benefits",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 bg-[#FFE5D9] text-[#FF8B6A] rounded-full mb-6">
            Our Story
          </div>
          <h2 className="text-[#2F3542] text-4xl lg:text-5xl mb-6">About Mie Yamin Untar</h2>
          <p className="text-[#6C757D] text-lg">
            From a humble food cart to a beloved campus brand
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20 max-w-7xl mx-auto">
          {/* Image - taking 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FF8B6A]/20 to-[#FFD89C]/20 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub29kbGUlMjByZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmd8ZW58MXx8fHwxNzYxNjk2MjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Kitchen"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - taking 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <p className="text-[#2F3542] text-xl leading-relaxed">
                Since opening near Tarumanagara University, Mie Yamin Untar has been a 
                favorite for students and locals looking for warm, comforting flavors.
              </p>
              <p className="text-[#6C757D] text-lg leading-relaxed">
                Starting from a small food cart, we've grown into a modern brand combining 
                traditional recipes and digital convenience. Our commitment to quality and 
                taste remains unchanged.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-[#FF8B6A] text-4xl mb-2">5+</div>
                <div className="text-[#6C757D]">Years</div>
              </div>
              <div className="text-center">
                <div className="text-[#FF8B6A] text-4xl mb-2">50+</div>
                <div className="text-[#6C757D]">Daily Orders</div>
              </div>
              <div className="text-center">
                <div className="text-[#FF8B6A] text-4xl mb-2">100%</div>
                <div className="text-[#6C757D]">Halal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-[#FF8B6A] to-[#FF7A59] text-white p-10 rounded-3xl hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="text-white text-2xl mb-4">Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To become the top campus noodle brand combining taste and technology.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative overflow-hidden bg-[#F8F9FA] border-2 border-gray-100 text-[#2F3542] p-10 rounded-3xl hover:shadow-2xl hover:border-[#FFE5D9] transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE5D9]/50 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD89C]/30 rounded-full -ml-12 -mb-12" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#FFE5D9] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="text-[#FF8B6A]" size={28} />
              </div>
              <h3 className="text-[#2F3542] text-2xl mb-4">Mission</h3>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#6C757D] text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#FF8B6A] mt-2 flex-shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
