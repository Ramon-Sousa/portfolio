import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Apaixonado por resolver problemas",
};

export default function page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <div className="container py-16">
          <h1 className="text-5xl lg:text-6xl font-black leading-snug bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text mb-8">
            Projetos
          </h1>
          <p className="text-gray-300 text-lg my-8">
            Como Product Designer, tenho tido o privilégio de trabalhar em
            diversos projetos desafiadores que combinam criatividade, tecnologia
            e usabilidade. Ao longo dos anos, meu foco tem sido criar
            experiências digitais significativas que não apenas atendem às
            necessidades dos usuários, mas também superam suas expectativas.
            Desde a concepção inicial até a entrega final, cada projeto
            representa um esforço conjunto para inovar, simplificar processos e
            impactar positivamente a vida das pessoas. Minha abordagem incorpora
            metodologias ágeis, pesquisa de usuário aprofundada e um compromisso
            contínuo com a excelência visual e funcional. Estou sempre buscando
            novos desafios que me permitam explorar novas tecnologias e expandir
            minhas habilidades como designer e desenvolvedor de produtos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="hover:animate-background rounded-[32px] bg-zinc-950 border border-gray-900 p-4 sm:p-4 shadow-xl">
              <img
                src="/assets/test-cover.webp"
                alt=""
                className="mx-auto rounded-2xl object-cover w-full h-64 sm:h-auto"
              />
              <div className="py-4">
                <time className="block text-xs text-gray-500">
                  10th Oct 2022
                </time>
                <a href="/cases">
                  <h3 className="mt-0.5 text-xl font-medium text-gray-300">
                    How to center an element using JavaScript and jQuery
                  </h3>
                </a>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Label Badge
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Double Diamond
                  </span>
                </div>
              </div>
            </div>
            {/* Outros itens de projeto aqui */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
