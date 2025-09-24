import React from "react";
import { StarIcon } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Carlos Silva",
      rating: 5,
      comment:
        "Excelente serviço! Vieram até minha casa e resolveram o problema do meu computador rapidamente.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ana Oliveira",
      rating: 5,
      comment:
        "Muito profissionais e atenciosos. Gostei muito do atendimento a domicílio, super prático!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Roberto Santos",
      rating: 4,
      comment:
        "Ótimo serviço de manutenção. Meu computador voltou a funcionar perfeitamente.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      name: "Mariana Costa",
      rating: 5,
      comment: "Super recomendo! Atendimento em casa rápido e eficiente.",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#0a1428]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
          Avaliações do Google
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-[#162452] hover:border-blue-400 transition-all duration-300"
            >
              {/* Cabeçalho */}
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-blue-400/30"
                />
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={16}
                        className={`${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        } fill-current`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comentário */}
              <p className="text-gray-300 leading-relaxed">{review.comment}</p>

              {/* Rodapé Google */}
              <div className="mt-4 flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-xs text-gray-400">
                  Avaliação verificada no Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
