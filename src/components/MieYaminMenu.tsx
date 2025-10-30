import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    name: "Mie Yamin Original",
    description: "Classic noodle with sweet soy chicken",
    price: "Rp18.000",
    image: "https://images.unsplash.com/photo-1597394412452-60ed971d3917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsfGVufDF8fHx8MTc2MTY0MTcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Mie Yamin Spicy Level 5",
    description: "Fiery and flavorful for spice lovers",
    price: "Rp20.000",
    image: "https://images.unsplash.com/photo-1637024698421-533d83c7b883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMG5vb2RsZXMlMjByZWR8ZW58MXx8fHwxNzYxNjU0OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Mie Yamin Complete",
    description: "Includes chicken, dumplings, meatballs, and sambal",
    price: "Rp25.000",
    image: "https://images.unsplash.com/photo-1722417055983-58885a9510b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGNoaWNrZW58ZW58MXx8fHwxNzYxNjk1NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Fried Dumplings (5 pcs)",
    description: "Crispy and savory",
    price: "Rp10.000",
    image: "https://images.unsplash.com/photo-1594225538408-17c56b2ed3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGR1bXBsaW5ncyUyMGZvb2R8ZW58MXx8fHwxNzYxNjk1NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Iced Tea / Orange Juice",
    description: "The perfect drink companion",
    price: "Rp5.000",
    image: "https://images.unsplash.com/photo-1597394412452-60ed971d3917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsfGVufDF8fHx8MTc2MTY0MTcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function MieYaminMenu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 bg-[#FFE5D9] text-[#FF8B6A] rounded-full mb-6">
            Full Menu
          </div>
          <h2 className="text-[#2F3542] text-4xl lg:text-5xl mb-6">Complete Menu Selection</h2>
          <p className="text-[#6C757D] text-lg">
            Freshly made noodles, generous toppings, and pocket-friendly prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all border-0 bg-[#F8F9FA]">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-[#2F3542] text-xl mb-2">{item.name}</h3>
                  <p className="text-[#6C757D]">{item.description}</p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#FF8B6A] text-2xl">{item.price}</span>
                  <button className="px-5 py-2 bg-[#6BCB77] hover:bg-[#5BBA67] text-white rounded-full transition-colors">
                    Order
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
