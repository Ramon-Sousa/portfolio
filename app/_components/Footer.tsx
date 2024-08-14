import React from "react";
import {Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full px-4 pb-14">
      <div className="container flex flex-col sm:flex-row items-center justify-between p-8 bg-[#090A0C] rounded-2xl">
        {/* Logo */}
        <img
          src="/assets/new-logo-2x1.svg"
          className="h-8 sm:h-12 mb-4 sm:mb-0"
          alt="portfolio"
        />

        {/* Texto Central */}
        <div className="flex text-nowrap text-base font-normal text-gray-300 text-center sm:text-left mb-4 sm:mb-0 sm:px-6">
          Vamos trabalhar juntos?
        </div>

        {/* Redes Sociais e Contato */}
        <div className="flex flex-col sm:flex-row items-center gap-10 justify-between text-base font-normal text-gray-300">
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
      </div>
    </div>
  );
}
