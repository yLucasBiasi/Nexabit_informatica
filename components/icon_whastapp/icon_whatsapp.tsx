"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5511989243605"; // troque pelo seu número

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}
