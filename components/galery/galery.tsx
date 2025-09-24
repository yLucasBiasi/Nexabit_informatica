"use client";

import { Instagram } from "lucide-react";

export default function Gallery() {
  // Imagens de exemplo - substitua pelas reais do Instagram da empresa
  const galleryImages: { id: number; url: string; alt: string }[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
      alt: "Montagem de computador",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=2031&auto=format&fit=crop",
      alt: "Manutenção de hardware",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=2070&auto=format&fit=crop",
      alt: "Limpeza de componentes",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
      alt: "Instalação de software",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop",
      alt: "Suporte técnico",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=2069&auto=format&fit=crop",
      alt: "Atendimento ao cliente",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop",
      alt: "Visita técnica",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?q=80&w=2070&auto=format&fit=crop",
      alt: "Diagnóstico de problemas",
    },
  ];

  return (
    <section className="py-20 bg-[#0a1428]">
      <div className="container mx-auto px-4">
        {/* Título e Instagram */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">
            Nossa Galeria
          </h2>
          <p className="text-gray-300 text-center max-w-2xl">
            Confira alguns momentos do nosso trabalho e acompanhe mais conteúdo
            em nosso Instagram
          </p>
          <a
            href="#"
            className="mt-4 flex items-center text-blue-300 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} className="mr-2" />
            @nexabit
          </a>
        </div>

        {/* Grid da Galeria */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center p-4">
                <p className="text-white text-sm font-medium text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link Instagram */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center text-blue-300 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais no Instagram
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
