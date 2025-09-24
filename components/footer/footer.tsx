"use client";

import React from "react";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">NexaBit</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Especialistas em montagem e manutenção de computadores.
              Oferecendo soluções sob medida para atender às suas
              necessidades.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#162452] hover:bg-blue-800 p-2 rounded-full transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="bg-[#162452] hover:bg-blue-800 p-2 rounded-full transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-[#162452] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NexaBit. Todos os direitos
            reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm"
                >
                  Termos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm"
                >
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
