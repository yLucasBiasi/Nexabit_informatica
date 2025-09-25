"use client";

import React, { useState } from "react";
import { PhoneIcon, ClockIcon } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Texto mais natural para o WhatsApp
    const text = `Olá, meu nome é ${name} e gostaria de falar sobre ${message}`;
    const url = `https://api.whatsapp.com/send?phone=5511989243605&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); // abre no WhatsApp Web ou app
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#000000] to-[#162452] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Entre em contato</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <p className="mb-8 text-blue-200">
              Estamos prontos para atender você e resolver seus problemas tecnológicos no conforto da sua casa.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-blue-200">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#0a1428] border border-[#162452] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-blue-200">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#0a1428] border border-[#162452] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Escreva sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="bg-[#162452] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="lg:w-1/2">
            <div className="bg-[#0a1428] rounded-lg p-8 h-full border border-[#162452]">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="text-blue-300 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold">Telefone</p>
                    <p className="text-blue-200">(11) 98924-3605</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="text-blue-300 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold">Horário</p>
                    <p className="text-blue-200">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Área de Atendimento</h4>
                <p className="text-blue-200">
                  Atendemos em toda a região metropolitana. Entre em contato para verificarmos a disponibilidade para a sua localidade.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
