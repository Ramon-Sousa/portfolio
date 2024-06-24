import { link } from "fs";
import { Link } from "lucide-react";
import React from "react";

export default function Navbar() {
  const socials = [
    {
      link: "/texts",
      label: "Textos",
    },
    {
      link: "/projects",
      label: "Projetos",
    },
    {
      link: "/about",
      label: "Sobre mim",
    },
  ];

  return (
    <nav className="py-4 flex justify-between bg-transparent border border-transparent border-b-gray-600" id="Nav">
      <div className="container flex justify-between">
        <div className="gap-3 flex justify-between">
          <img src="/assets/1x1-Logo.png" className="h-8" alt="portfolio" />
          <h1 className="text-2xl font-bold">Ramon Sousa</h1>
        </div>
        <div className="flex intems-center gap-5">
          {socials.map((social, index) => {
            return (
              <a href={social.link} key={index} aria-label={social.label}>
                <h2 className=" hover:scale-125 transition-all">
                  {social.label}
                </h2>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
