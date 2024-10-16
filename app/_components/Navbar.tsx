"use client";
import React, { useState, useEffect } from "react";
import { Github, Menu, X, Linkedin } from "lucide-react";
import { ModeToggle } from "../_components/Toggle";

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
    <nav className="py-2 border-b border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo (Desktop and Mobile) */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/new-logo-2x1.svg"
            className="h-10 sm:h-11"
            alt="portfolio"
          />
        </a>

        {/* Hamburger Menu (Desktop and Mobile) */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none lg:hidden" // Only show on mobile
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links (Shown when open on mobile) */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute right-0 top-full mt-2 border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded shadow-md z-20 w-[240px]`}
          >
            <ul className="py-2">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    className="px-4 py-2 text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <div className="lg:inline-flex items-center gap-3 px-4 py-2">
          <ModeToggle />
        </div>
            </ul>
          </div>
        </div>

        {/* Navigation Links (Shown on desktop) */}
        <div className="hidden sm:w-full sm:justify-end lg:flex lg:items-center lg:space-x-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 text-md font-light"
            >
              {social.label}
            </a>
          ))}
          <p>·</p>
          <a
            href="https://www.linkedin.com/in/ramon-sousa-pereira/"
            target="blank"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 text-sm"
          >
            <Linkedin className="w-5" strokeWidth={1} />
          </a>
          <a
            href="https://github.com/Ramon-Sousa"
            target="blank"
            className="text-gray-800 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 text-md"
          >
            <Github className="w-5" strokeWidth={1} />
          </a>
        </div>

        {/* Horário de Brasília */}
        {/* <div className="hidden lg:inline-flex items-center text-gray-500 dark:text-gray-400 text-xs ml-8 gap-3 border-l border-gray-600 pl-8">
          <Coffee size={32} />
          <p className="text-ce">{`FRANCA • BR ${time}`}</p>
        </div> */}

        {/* Toggle para troca de Tema */}
        <div className="hidden lg:inline-flex items-center  ml-8 gap-3 border-l border-gray-600 pl-8">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
