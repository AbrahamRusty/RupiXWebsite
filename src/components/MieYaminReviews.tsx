import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const reviews = [
  {
    name: "Sarah Wijaya",
    role: "Mahasiswa Untar",
    rating: 5,
    review: "Mie yamin terenak di sekitar kampus! Porsinya banyak, harganya ramah kantong mahasiswa. Pantesan selalu rame, rasanya emang juara!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Budi Santoso",
    role: "Alumni Untar",
    rating: 5,
    review: "Udah langganan dari jaman kuliah sampe sekarang kerja masih sering balik kesini. Rasanya konsisten, pelayanannya cepat, dan tempatnya nyaman.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Dina Rahma",
    role: "Food Blogger",
    rating: 5,
    review: "Level pedasnya beneran nggak main-main! Cocok buat yang suka tantangan. Tapi yang original juga enak kok, bumbu kecapnya pas banget.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export function MieYaminReviews() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-gray-100 rounded-full mb-6 shadow-sm">
            <Star className="text-[#FFD89C] fill-[#FFD89C]" size={20} />
            <span className="text-[#2F3542]">Customer Reviews</span>
          </div>
          <h2 className="text-[#2F3542] text-4xl lg:text-5xl mb-6">What Our Customers Say</h2>
          <p className="text-[#6C757D] text-lg">
            Real reviews from our beloved customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="text-[#FFD89C] fill-[#FFD89C]" size={20} />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-[#FFE5D9]" size={32} />
                  <p className="text-[#2F3542] leading-relaxed pl-6">
                    {review.review}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-[#FFE5D9] text-[#FF8B6A]">
                      {review.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#2F3542]">{review.name}</div>
                    <div className="text-[#6C757D] text-sm">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-[#6C757D]">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-[#FFD89C] fill-[#FFD89C]" size={24} />
              ))}
            </div>
            <span className="text-xl">4.8 average rating from 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
