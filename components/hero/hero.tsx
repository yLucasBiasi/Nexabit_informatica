"use client";

import { useEffect, useState } from "react";
import { Home, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Image1 from "../../assets/hero-bg-1.jpg";
import Image2 from "../../assets/hero-bg-2.jpg";
import Image3 from "../../assets/hero-bg-3.jpg";
import Image4 from "../../assets/hero-bg-4.jpg";
import Image5 from "../../assets/hero-bg-5.jpg";
import Image6 from "../../assets/hero-bg-6.jpg";
import Image7 from "../../assets/hero-bg-7.jpg";

export default function Hero() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 3s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#162452] text-white py-24 h-screen overflow-hidden">
      {/* Fundo animado para desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index}`}
            fill
            quality={100}
            priority={index === 0}
            className={`object-cover blur-sm transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 flex justify-center items-center h-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">NexaBit</h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            Montagem e manutenção no conforto da sua casa
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Oferecemos serviços de tecnologia de qualidade, indo até você para
            garantir sua segurança e conforto.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
            <div className="flex items-center bg-black bg-opacity-40 p-5 rounded-lg">
              <Home className="mr-3 text-blue-300" size={24} />
              <p>Atendimento a domicílio em toda região</p>
            </div>
            <div className="flex items-center bg-black bg-opacity-40 p-5 rounded-lg">
              <ShieldCheck className="mr-3 text-blue-300" size={24} />
              <p>Segurança e confiabilidade garantidas</p>
            </div>
          </div>

          {/* Botão CTA */}
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block text-lg"
          >
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
}
