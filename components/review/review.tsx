import React from "react";
import { StarIcon } from "lucide-react";
import image1 from "../../assets/filipe-marques.jpg";
import image2 from "../../assets/victor-viscatela.jpg"
import image3 from "../../assets/wesley-ruas.jpg"
import image4 from "../../assets/murilo-aguair.jpg"

export function Reviews() {
  const reviews = [
    {
      name: "Felipe Marques",
      rating: 5,
      comment: "Excelente trabalho meu mano, o melhor",
      image: image1, 
    },
    {
      name: "Victor Viscatela",
      rating: 5,
      comment:
        "Montagem rápida, deu vídeo de primeira e deixou tudo atualizado",
      image: image2, 
    },
    {
      name: "Wesley",
      rating: 5,
      comment:
        "Obrigado pela atenção desde o primeiro contato, tirou dúvidas sobre algumas peças que eu precisava comprar ainda e compareceu no dia e hora marcados. Recomendo demais.",
      image: image3,
    },
    {
      name: "Murilo Aguiar",
      rating: 5,
      comment: "Sem palavras, serviço muito profissional em cada detalhe, sucesso sempre 🙌🔥",
      image: image4,
    },
  ];

  return (
    <section className="py-20 bg-[#0a1428]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
          Feedbacks
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
                {/* Lógica para usar 'src' se for objeto (imagem local) ou o valor direto (URL externa) */}
                <img
                  src={
                    typeof review.image === 'object' && review.image.src
                      ? review.image.src
                      : review.image
                  }
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
                          i < review.rating ? "text-yellow-400" : "text-gray-600"
                        } fill-current`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comentário */}
              <p className="text-gray-300 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}