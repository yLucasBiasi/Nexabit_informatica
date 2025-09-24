"use client";

import { Home, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#000000] to-[#162452] text-white py-24 h-screen">
      <div className="container mx-auto px-4 flex justify-center items-center h-full">
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
