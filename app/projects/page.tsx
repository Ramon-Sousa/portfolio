import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";
import { getProjects } from "../_services/notion";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export const metadata: Metadata = {
  title: "Projetos",
  description: "Apaixonado por resolver problemas",
};

export default async function page() {
  const projects = await getProjects();
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        {/* <div className="container py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projetos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div> */}
        <Link href="/projects" className="container flex gap-2 pt-8">
          <ArrowLeft /> Voltar
        </Link>
        <div className="container py-8">
          <h1 className="text-slate-200 text-justify text-3xl sm:text-5xl">
            Projetos realizados
          </h1>
        </div>
        <div className="container pb-16">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {projects.slice(0, 4).map((project) => (
                <Link
                  href={`/projects/${project.slug}`}
                  className="mb-8"
                  key={project.id}
                >
                  <div className="rounded-md">
                    {project.cover ? (
                      <img
                        src={`${project.cover}`}
                        alt={project.title}
                        className="rounded-md object-cover w-full h-64 sm:h-[500px]"
                      />
                    ) : (
                      // <div className="flex items-center justify-center w-full h-64 sm:h-[500px] bg-gray-800 rounded-md">
                      //   <span className="text-gray-500 text-xl">
                      //     No Image Available
                      //   </span>
                      // </div>
                      <img
                        src='/assets/empty-state-thumb.png'
                        alt='imagem-vazia'
                        className="rounded-md object-cover w-full h-64 sm:h-[500px]"
                      />
                    )}
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
              <img
                src="/assets/coffee-error.svg"
                alt="imagem-erro de projetos"
                className="h-56"
              />
              <h3 className="mt-4 text-2xl font-light text-gray-300">
                Erro ao listar projetos
              </h3>
              <p className="mt-2 text-lg text-gray-500">
                Pegue um café e dê uma olhada no meu LinkedIn enquanto soluciono
                esse problema.
              </p>
              <div className="flex justify-center mt-6">
                <Link
                  className="flex items-center gap-2 rounded-full bg-white px-4 text-xl text-black font-normal py-3 hover:bg-slate-500"
                  href="https://www.linkedin.com/in/ramon-sousa-pereira/"
                  target="blank"
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
        <Footer />
      </div>
    </div>
  );
}
