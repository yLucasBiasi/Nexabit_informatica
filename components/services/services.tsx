"use client";

import { Monitor, Cpu, Home } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-[#0a1428] to-[#000000] rounded-lg overflow-hidden shadow-lg border border-[#162452] hover:border-blue-500 transition-all">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-[#162452] p-3 rounded-full">
                  <Monitor className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">
                Manutenção de Computadores
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Reparos e upgrades para seu computador, sempre feitos pela nossa
                equipe diretamente na sua casa
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Limpeza de
                  computador
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Troca de peças
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Instalação
                  Windows
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-[#0a1428] to-[#000000] rounded-lg overflow-hidden shadow-lg border border-[#162452] hover:border-blue-500 transition-all">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-[#162452] p-3 rounded-full">
                  <Cpu className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">
                Manutenção de Computadores
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Diagnóstico e soluções completas para problemas de hardware e
                software na sua casa
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Limpeza de
                  computador
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Troca de peças
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Instalação
                  Windows
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-[#0a1428] to-[#000000] rounded-lg overflow-hidden shadow-lg border border-[#162452] hover:border-blue-500 transition-all">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-[#162452] p-3 rounded-full">
                  <Home className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">
                Atendimento a Domicílio
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Serviços de qualidade com a conveniência de não precisar sair de
                casa, nossa equipe vai até você
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Limpeza de
                  computador
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Troca de peças
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span> Instalação
                  Windows
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
