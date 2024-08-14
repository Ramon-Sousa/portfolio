import React from "react";
import { getProjects } from "@/app/_services/notion";
import Link from "next/link";
import { MoveDownLeft, FolderOpen } from "lucide-react";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-32">
      <div className="container">
        <div className="flex justify-between">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12">
            Projetos{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-normal italic text-nowrap">
              selecionados
            </span>
          </div>
          <MoveDownLeft size={64} color="#1f2937" strokeWidth={1} />
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.slice(0, 4).map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                className="mb-8"
                key={project.id}
              >
                <div className="rounded-md">
                  <img
                    src={`${project.cover}`}
                    alt={project.title}
                    className="rounded-md object-cover w-full h-64 sm:h-[500px]"
                  />
                  <div className="pt-4">
                    <h3 className="text-2xl font-light text-gray-300">
                      {project.title}
                    </h3>
                    <hr className="my-4 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10" />
                    <div className="flex justify-between items-center">
                      <div className="mb-2 flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="whitespace-nowrap rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2 text-xs text-gray-300 uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <time className="block text-lg text-gray-500">
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
            {/* <FolderOpen size={64} color="#1f2937" /> */}
            <img src="/assets/coffee-error.svg" alt="imagem-erro de projetos" className="h-56" />
            <h3 className="mt-4 text-2xl font-light text-gray-300">
              Erro ao listar projetos
            </h3>
            <p className="mt-2 text-lg text-gray-500">
              Pegue um café e dê uma olhada no meu LinkedIn enquanto
              soluciono esse problema.
            </p>
            <div className="flex justify-center mt-6">
            <Link
              className="flex items-center gap-2 rounded-full bg-white px-4 text-xl text-black font-normal py-3 hover:bg-slate-500"
              href="https://www.linkedin.com/in/ramon-sousa-pereira/" target="blank"
            >
              Ir para linkedin
              <div className="p-2 bg-neutral-950 rounded-full flex justify-center items-center">
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
          </div>
        )}

        {projects.length > 0 && (
          <div className="flex justify-center mt-6">
            <Link
              className="flex items-center gap-2 rounded-full bg-white px-4 text-xl text-black font-normal py-3 hover:bg-slate-500"
              href="/projects"
            >
              Ver todos
              <div className="p-2 bg-neutral-950 rounded-full flex justify-center items-center">
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
