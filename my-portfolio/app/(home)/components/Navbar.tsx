import { link } from "fs";
import { Link } from "lucide-react";
import React from "react";

export default function Navbar() {
  const socials = [
    {
      link: "/projects",
      label: "Projetos",
    },
    {
      link: "/#about",
      label: "Sobre mim",
    },
    {
      link: "#",
      label: "contato@ramondesigner.com",
    },
  ];

  return (
    <nav className="py-4 flex justify-between bg-transparent border border-transparent border-b-gray-900" id="Nav">
      <div className="container flex justify-between">
        <a href="/" className="gap-3 flex justify-between align-center items-center">
          <img src="/assets/1x1-Logo.png" className="h-8" alt="portfolio" />
          <h1 className="text-xl font-normal">Ramon Sousa</h1>
        </a>
        <div className="flex intems-center gap-10">
          {socials.map((social, index) => {
            return (
              <a href={social.link} key={index} aria-label={social.label}>
                <h3 className="font-light hover:scale-110 transition-all">
                  {social.label}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
