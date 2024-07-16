"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const socials = [
    // { link: "/projects", label: "Projetos" },
    { link: "/#about", label: "Sobre mim" },
    // { link: "#", label: "contato@ramondesigner.com" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 bg-transparent border-b border-gray-900 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Desktop and Mobile) */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/logo-1x1-new.png"
            className="h-10 sm:h-12"
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
        <div className="hidden sm:w-full sm:justify-center lg:flex lg:items-center lg:space-x-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-100 hover:text-gray-400 text-md font-medium"
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Ícones github e linkedin*/}
        <div className="hidden sm:flex gap-6">
          <a
            className="p-2"
            href="https://www.linkedin.com/in/ramon-sousa-pereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              fill="#EFF4F6"
              viewBox="0 0 50 50"
            >
              <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
            </svg>
          </a>
          <a
            className="p-2"
            href="https://github.com/Ramon-Sousa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              fill="#EFF4F6"
              viewBox="0 0 50 50"
            >
              <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
