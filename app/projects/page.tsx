import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "fs/promises"; // Usando fs.promises para leitura assíncrona
import path from "path";

export const metadata: Metadata = {
  title: "Cases de Sucesso",
  description: "Exemplos de cases de sucesso",
};

// Função principal do componente da página
export default async function Page() {
  const casesDirectory = path.join(process.cwd(), "public/cases");
  let cases = [];

  try {
    const filenames = await fs.readdir(casesDirectory);

    // Filtra apenas arquivos com a extensão .json
    const jsonFilenames = filenames.filter((filename) => filename.endsWith(".json"));

    if (jsonFilenames.length > 0) {
      cases = await Promise.all(
        jsonFilenames.map(async (filename) => {
          const filePath = path.join(casesDirectory, filename);
          const fileContent = await fs.readFile(filePath, "utf-8");

          try {
            const caseData = JSON.parse(fileContent);
            
            // Verificar se o slug existe e se os dados estão bem formatados
            if (caseData.slug && caseData.title) {
              return {
                ...caseData, // Inclui os dados do JSON
                publishedAt: Array.isArray(caseData.publishedAt)
                  ? caseData.publishedAt.join(", ") // Concatena datas se for um array
                  : caseData.publishedAt || "Data não disponível", // Fallback para a data
              };
            }
            return null; // Caso o slug ou título estejam ausentes
          } catch (error) {
            console.error(`Erro ao fazer parse do arquivo: ${filename}`, error);
            return null;
          }
        })
      );

      cases = cases.filter(Boolean); // Filtra casos inválidos
    }
  } catch (error) {
    console.error("Erro ao ler o diretório 'cases':", error);
  }
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
                  key={caseItem.id || index}
                >
                  <div className="rounded-md mb-8">
                    <img
                      src={caseItem.thumbnail || "/assets/default-thumbnail.png"} // Fallback para uma imagem padrão
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
                          {caseItem.tags?.length > 0 ? (
                            caseItem.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="whitespace-nowrap rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2 text-xs text-gray-300 uppercase tracking-wide"
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs text-gray-400">Sem tags</span>
                          )}
                        </div>
                        <time className="text-lg text-gray-500">
                          {caseItem.publishedAt}
                        </time>
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
                Pegue um café e dê uma olhada no meu Linkedin enquanto faço as melhorias no portfólio.
              </p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
