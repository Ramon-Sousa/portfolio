"use client";
import React, { useState, useEffect } from "react";
import {Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { Globe } from "lucide-react";
export default function Footer() {
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
    <div className="w-full px-4 pb-14">
      <div className="container flex flex-col sm:flex-row items-center justify-between p-8 bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-800 border border-slate-900 rounded-2xl">
        {/* Logo */}
        <img
          src="/assets/new-logo-2x1.svg"
          className="h-8 sm:h-12 mb-4 sm:mb-0"
          alt="portfolio"
        />

        {/* Redes Sociais e Contato */}
        <div className="flex flex-col sm:flex-row items-center gap-10 justify-between text-base font-normal text-gray-200 dark:text-gray-800">
          <Link
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/ramon-sousa-pereira/"
            target="_blank"
          >
            <Linkedin />
            LinkedIn
          </Link>
          <Link
            className="flex items-center gap-2"
            href="https://github.com/Ramon-Sousa"
            target="_blank"
          >
            <Github />
            GitHub
          </Link>
          <div className="text-center sm:text-left">
            contato@ramondesigner.com
          </div>
        </div>

          {/* Texto Central */}
        {/* <div className="flex text-nowrap text-base font-normal text-gray-200 dark:text-gray-800 text-center sm:text-left mb-4 sm:mb-0 sm:px-6">
          Vamos trabalhar juntos?
        </div> */}
        <div className="hidden lg:inline-flex items-center text-gray-200 dark:text-gray-800 text-xs gap-3 text-center uppercase">
          {/* <Coffee size={32} /> */}
          <div className="p-2 rounded bg-black dark:bg-gray-100">
          <Globe  />
          </div>
         <div className="flex-row justify-items-start">
         <p className="text-green-400 dark:text-green-700">Based in Brazil</p>
         <p className="">{`SP • ${time}`}</p>
         </div>
        </div>

      </div>
    </div>
  );
}
