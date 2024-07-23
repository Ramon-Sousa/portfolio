import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { getProjects } from "@/app/_services/notion";
import Link from "next/link";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="bg-transparent">
      <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-24 sm:py-12 lg:py-40 gap-8 lg:gap-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* <div className="text-slate-500 text-sm font-semibold uppercase">
          Portfolio
        </div> */}
          <div className="text-4xl sm:text-4xl lg:text-6xl font-normal pb-4">
            Projetos{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-black italic">
              {" "}
              selecionados
            </span>
          </div>
          <div className="text-slate-400 text-base font-normal pb-8">
            Melhores projetos realizados ao longo de minha jornada profissional.
          </div>
          <a
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
          </a>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[504px]">
          {projects.slice(-3).map((project) => (
            <div>
            <Link
              className="h-28 px-4 py-2 bg-[url('/assets/dot-grid.png')] rounded-2xl border border-gray-800 flex justify-between items-center hover:bg-[#20252A]"
              href={`/projects/${project.slug}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="text-neutral-50 text-xl font-semibold">
                    {project.title}
                  </div>
                  <div className="text-slate-500 text-sm font-bold">
                    {project.publishedAt}
                  </div>
                </div>
              </div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
                  fill="#A0B1BD"
                />
              </svg>
            </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-stretch py-3 bg-neutral-50 w-full overflow-hidden">
        <div className="flex justify-between items-center w-full overflow-hidden mx-auto px-4 flex-nowrap">
          {/* <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div> */}
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            +15 projetos
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            Experiência em desenvolvimento
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            +10 clientes atendidos
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            Experiência mobile first
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            4 anos de epxperiência
          </div>
        </div>
      </div>
    </div>
  );
}
