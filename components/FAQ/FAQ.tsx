'use client'
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quem somos",
      answer:
        "Somos uma empresa especializada em serviços de tecnologia, com foco em atendimento a domicílio para proporcionar mais segurança e conforto aos nossos clientes.",
    },
    {
      question: "O que fazemos",
      answer:
        "Oferecemos serviços de manutenção e montagem de computadores, instalação de softwares, remoção de vírus, upgrades de hardware e muito mais, tudo no conforto da sua casa.",
    },
    {
      question: "Por que nos escolher",
      answer:
        "Além da conveniência do atendimento a domicílio, contamos com profissionais qualificados, garantia nos serviços prestados e preços justos, sempre priorizando a segurança e satisfação dos nossos clientes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
          FAQ
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border shadow-md transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-blue-400 bg-[#0f1c3a]"
                  : "border-[#162452] bg-[#0a1428] hover:border-blue-400/50"
              }`}
            >
              {/* Cabeçalho */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-medium text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUpIcon
                    className="flex-shrink-0 text-blue-400 transition-transform duration-300"
                    size={24}
                  />
                ) : (
                  <ChevronDownIcon
                    className="flex-shrink-0 text-blue-400 transition-transform duration-300"
                    size={24}
                  />
                )}
              </button>

              {/* Resposta com animação */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
