import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#6BCB77] hover:bg-[#5BBA67] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 group"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 right-0 bg-[#2F3542] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Order via WhatsApp
      </span>
    </button>
  );
}
