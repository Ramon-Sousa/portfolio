"use client";
import React, { useState, useEffect } from "react";
import { Github, Menu, X, Linkedin } from "lucide-react";
import { Coffee } from "lucide-react";

function Navbar() {
  const socials = [
    { link: "/projects", label: "Projetos" },
    { link: "/about", label: "Sobre mim" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<string>("");

  // Função para obter a hora atual no fuso horário de Brasília
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const currentTime = new Intl.DateTimeFormat("pt-BR", options).format(
        new Date()
      );
      setTime(currentTime);
    };

    updateTime(); // Atualiza imediatamente
    const intervalId = setInterval(updateTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <nav className="py-3 bg-transparent border-b border-gray-900 sticky top-0 z-10">
      <div className=" mx-auto flex justify-between items-center px-8">
        {/* Logo (Desktop and Mobile) */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/new-logo-2x1.svg"
            className="h-14 sm:h-14"
            alt="portfolio"
          />
        </a>

        {/* Hamburger Menu (Desktop and Mobile) */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-gray-900 focus:outline-none lg:hidden" // Only show on mobile
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links (Shown when open on mobile) */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute right-0 top-full mt-2 border bg-zinc-950 border-gray-900 rounded shadow-md z-20 w-[240px]`}
          >
            <ul className="py-2">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    className="px-4 py-2 text-gray-100 hover:bg-zinc-800 inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Links (Shown on desktop) */}
        <div className="hidden sm:w-full sm:justify-end lg:flex lg:items-center lg:space-x-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-300 hover:text-gray-400 text-md"
            >
              {social.label}
            </a>
          ))}
          <p>·</p>
          <a
            href="https://www.linkedin.com/in/ramon-sousa-pereira/"
            target="blank"
            className="text-gray-300 hover:text-gray-400 text-sm"
          >
            <Linkedin className="w-5" strokeWidth={1} />
          </a>
          <a
            href="https://github.com/Ramon-Sousa"
            target="blank"
            className="text-gray-100 hover:text-gray-400 text-md"
          >
            <Github className="w-5" strokeWidth={1} />
          </a>
        </div>
        {/* Horário de Brasília */}
        <div className="hidden lg:inline-flex items-center text-gray-500 text-xs ml-8 gap-3 border-l border-gray-600 pl-8">
  <Coffee size={24} />
  <p className="w-[80px]">{`FRC • BRAZIL ${time}`}</p>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
