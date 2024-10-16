import React from "react";
import Link from "next/link";
import { MoveDownLeft } from "lucide-react";
import fs from "fs";
import path from "path";

export default async function Projects() {
  // Caminho para o diretório dos arquivos JSON
  const casesDirectory = path.join(process.cwd(), "public/cases");
  let projects = [];

  try {
    // Verificar se o diretório existe
    if (fs.existsSync(casesDirectory)) {
      // Ler todos os arquivos .json na pasta 'public/cases'
      const filenames = fs.readdirSync(casesDirectory);

      // Verificar se existem arquivos no diretório
      if (filenames.length > 0) {
        // Carregar o conteúdo de cada arquivo e transformá-lo em JSON
        projects = filenames.map((filename) => {
          const filePath = path.join(casesDirectory, filename);
          const fileContent = fs.readFileSync(filePath, "utf-8");

          // Tentar fazer o parse do conteúdo do arquivo JSON
          try {
            const projectData = JSON.parse(fileContent);
            return {
              ...projectData, // Inclui os dados do JSON, incluindo title, description, slug, etc.
            };
          } catch (error) {
            console.error(`Erro ao fazer parse do arquivo: ${filename}`, error);
            return null; // Ignorar arquivos com erros
          }
        }).filter(Boolean); // Filtrar qualquer null retornado por arquivos inválidos
      }
    } else {
      console.warn("O diretório 'cases' não existe.");
    }
  } catch (error) {
    console.error("Erro ao ler o diretório 'cases':", error);
  }

  return (
    <section className="mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-32">
      <div className="container">
        <div className="flex justify-between">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
            Projetos{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-normal italic text-nowrap">
              selecionados
            </span>
          </div>
          <MoveDownLeft size={64} color="#1f2937" strokeWidth={1} />
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.slice(0, 4).map((project, index) => (
              <Link
                href={`/projects/${project.slug}`}
                className="mb-8"
                key={project.id || index}
              >
                <div className="rounded-md">
                  <img
                    src={project.thumbnail || "/assets/empty-state-thumb.png"} // Fallback para imagem padrão
                    alt={project.title}
                    className="rounded-md object-cover w-full h-64 sm:h-[500px]"
                  />
                  <div className="pt-4">
                    <h3 className="text-3xl font-medium text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify">{project.subtitle}</p>
                    <hr className="my-6 h-[1px] border-t-0 bg-gray-200 dark:bg-gray-900" />
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-1 items-center">
                        {project.tags?.length > 0 ? (
                          project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="whitespace-nowrap rounded-full px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 uppercase tracking-wide"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-800 dark:text-gray-200">
                            Sem tags disponíveis
                          </span>
                        )}
                      </div>
                      <time className="text-lg text-gray-800 dark:text-gray-200">
                        {project.publishedAt}
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
              alt="Erro ao carregar projetos"
              className="h-56"
            />
            <h3 className="mt-4 text-2xl font-light text-gray-800 dark:text-gray-200">
              Nenhum projeto disponível
            </h3>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              Pegue um café e dê uma olhada no meu Linkedin enquanto faço as melhorias no portfólio.
            </p>
          </div>
        )}

        {projects.length > 0 && (
          <div className="flex justify-center mt-6">
            <Link
              className="flex items-center gap-2 rounded-full bg-gray-100 px-4 text-xl text-gray-800 font-normal py-3 hover:bg-gray-200 duration-300"
              href="/projects"
            >
              Ver todos
              <div className="p-2 bg-gray-950 rounded-full flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
