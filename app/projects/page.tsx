import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Cases de Sucesso",
  description: "Exemplos de cases de sucesso",
};

// Função principal do componente da página
export default async function Page() {
  // Caminho para o diretório dos arquivos JSON
  const casesDirectory = path.join(process.cwd(), "public/cases");

  // Ler todos os arquivos .json na pasta 'public/cases'
  const filenames = fs.readdirSync(casesDirectory);

  // Carregar o conteúdo de cada arquivo e transformá-lo em JSON
  const cases = filenames.map((filename) => {
    const filePath = path.join(casesDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const caseData = JSON.parse(fileContent);

    // Retorna o conteúdo do arquivo com o slug e outras informações
    return {
      ...caseData, // Inclui os dados do JSON, incluindo title, description, slug, etc.
    };
  });

  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <Link href="/" className="container flex gap-2 pt-8">
          <ArrowLeft /> Voltar
        </Link>
        <div className="container py-8">
          <h1 className="text-slate-200 text-justify text-3xl sm:text-5xl">
            Cases de Sucesso
          </h1>
        </div>
        <div className="container pb-16">
          {cases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {cases.map((caseItem, index) => (
                <Link
                  href={`/projects/${caseItem.slug}`} // Usando o slug diretamente do JSON
                  className="mb-8"
                  key={caseItem.id}
                >
                  <div key={index} className="mb-8">
                    <div className="rounded-md">
                      <img
                        src={`${caseItem.thumbnail}`} // Substitua pelo caminho correto da imagem se aplicável
                        alt={caseItem.title}
                        className="rounded-md object-cover w-full h-64 sm:h-[500px]"
                      />
                      <div className="pt-4">
                        <h3 className="text-2xl font-light text-gray-300">
                          {caseItem.title}
                        </h3>
                        <p className="text-gray-400 mt-2">
                          {caseItem.subtitle}
                        </p>
                        <hr className="my-4 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10" />
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-1 items-center">
                            {caseItem.tags.map((tag) => (
                              <span
                                key={tag}
                                className="whitespace-nowrap rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2 text-xs text-gray-300 uppercase tracking-wide"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <time className="text-lg text-gray-500">
                            {caseItem.publishedAt}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-16">
              <img
                src="/assets/coffee-error.svg"
                alt="imagem-erro de cases"
                className="h-56"
              />
              <h3 className="mt-4 text-2xl font-light text-gray-300">
                Nenhum case disponível
              </h3>
              <p className="mt-2 text-lg text-gray-500">
                Volte mais tarde para ver os cases de sucesso.
              </p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
