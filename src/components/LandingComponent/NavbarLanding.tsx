import React from "react";
import Image from "next/image";

const NavbarLanding: React.FC = () => {
  return (
    <div id="landing" className="bg-white w-full px-4 md:px-8">
      <div className="w-full max-w-8xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center">
        
        {/* Logo + nombre */}
        <div className="flex flex-col items-center md:flex-col md:items-center lg:flex-row lg:items-center lg:justify-start">
          <Image
            src="/iconoKasapp.png"
            alt="Logo"
            width={100}
            height={98}
            className="h-[100px] w-auto mt-2 md:h-[80px] md:w-auto md:mt-0 lg:h-[100px] lg:w-auto lg:ml-5"
          />
          <span className="text-2xl font-bold text-[#4A0E1B] mt-2 md:mt-0 lg:mt-0 lg:ml-2">
            KasApp
          </span>
        </div>

        {/* Menú MOBILE */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 mb-4 md:hidden">
          <a
            href="#sección0"
            rel="noopener noreferrer"
            className="w-[45%] text-center text-white bg-[#833444] p-2 rounded text-base font-semibold"
          >
            Sobre Nosotros
          </a>
          <a
            href="#sección1"
            rel="noopener noreferrer"
            className="w-[45%] text-center text-white bg-[#833444] p-2 rounded text-base font-semibold"
          >
            Cómo Funciona
          </a>
          <a
            href="#sección2"
            rel="noopener noreferrer"
            className="w-[45%] text-center text-white bg-[#833444] p-2 rounded text-base font-semibold"
          >
            Qué Ofrecemos
          </a>
          <a
            href="#sección3"
            rel="noopener noreferrer"
            className="w-[45%] text-center text-white bg-[#833444] p-2 rounded text-base font-semibold"
          >
            Preguntas Frecuentes
          </a>
        </div>

        {/* Menú DESKTOP */}
        <nav className="hidden md:flex w-full max-w-[900px] items-center justify-between space-x-4 mr-5">
          <a
            href="#sección0"
            rel="noopener noreferrer"
            className="text-white bg-[#833444] p-1.5 px-4 rounded-sm text-lg font-semibold hover:bg-[#a04f60] transition"
          >
            Sobre Nosotros
          </a>
          <a
            href="#sección1"
            rel="noopener noreferrer"
            className="text-white bg-[#833444] p-1.5 px-4 rounded text-lg font-semibold hover:bg-[#a04f60] transition"
          >
            Cómo Funciona
          </a>
          <a
            href="#sección2"
            rel="noopener noreferrer"
            className="text-white bg-[#833444] p-1.5 px-4 rounded text-lg font-semibold hover:bg-[#a04f60] transition"
          >
            Qué Ofrecemos
          </a>
          <a
            href="#sección3"
            rel="noopener noreferrer"
            className="text-white bg-[#833444] p-1.5 px-4 rounded text-lg font-semibold hover:bg-[#a04f60] transition"
          >
            Preguntas Frecuentes
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavbarLanding;