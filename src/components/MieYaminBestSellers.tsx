import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Flame } from "lucide-react";

const bestSellers = [
  {
    name: "Mie Yamin Complete",
    description: "The ultimate favorite with perfect balance of sweet, savory, and spicy.",
    price: "Rp25.000",
    image: "https://images.unsplash.com/photo-1722417055983-58885a9510b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGNoaWNrZW58ZW58MXx8fHwxNzYxNjk1NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Most Popular",
    icon: "⭐",
  },
  {
    name: "Mie Yamin Spicy Level 5",
    description: "For those who dare to try extreme spice!",
    price: "Rp20.000",
    image: "https://images.unsplash.com/photo-1637024698421-533d83c7b883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMG5vb2RsZXMlMjByZWR8ZW58MXx8fHwxNzYxNjU0OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Spicy Champion",
    icon: "🌶️",
  },
  {
    name: "Crispy Fried Dumplings",
    description: "Light, crunchy, and addictive.",
    price: "Rp10.000",
    image: "https://images.unsplash.com/photo-1594225538408-17c56b2ed3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGR1bXBsaW5ncyUyMGZvb2R8ZW58MXx8fHwxNzYxNjk1NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Customer Favorite",
    icon: "😋",
  },
];

export function MieYaminBestSellers() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-gray-100 rounded-full mb-6 shadow-sm">
            <Flame className="text-[#FF8B6A]" size={20} />
            <span className="text-[#2F3542]">Best Sellers</span>
          </div>
          <h2 className="text-[#2F3542] text-4xl lg:text-5xl mb-6">Our Signature Dishes</h2>
          <p className="text-[#6C757D] text-lg">
            These dishes keep our customers coming back for more
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bestSellers.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all border-0 bg-white">
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
                  <span>{item.icon}</span>
                  <span className="text-[#2F3542]">{item.badge}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl mb-2">{item.name}</h3>
                  <div className="text-[#FFD89C] text-xl">{item.price}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-[#6C757D] leading-relaxed">{item.description}</p>
                <button className="mt-4 w-full px-6 py-3 bg-[#FF8B6A] hover:bg-[#FF7A59] text-white rounded-full transition-colors">
                  Order Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
