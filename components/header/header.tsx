"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Nexabit logo monitor azul.png";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-black/50 shadow-md"
          : "bg-gradient-to-r from-[#000000] to-[#162452]"
      } text-white`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-18" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-blue-300 transition-colors">
            Início
          </a>
          <a href="#services" className="hover:text-blue-300 transition-colors">
            Serviços
          </a>
          <a href="#faq" className="hover:text-blue-300 transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#162452]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#faq"
              className="text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
