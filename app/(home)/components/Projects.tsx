import React from "react";
import { getProjects } from "@/app/_services/notion";
import Link from "next/link";
import { MoveDownLeft } from "lucide-react";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section className="mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-32">
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-6 pt-20 pb-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative flex h-48 items-end overflow-hidden rounded-lg border-2 border-slate-900 md:h-[400px] ${
              index % 4 === 1 || index % 4 === 2 ? "md:col-span-2" : ""
            }`}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-110 saturate-50 hover:saturate-100 duration-700"
              src={project.cover}
              alt={project.title}
            />
          </div>
        ))}
      </div> */}
      <div className="container">
        <div className="flex justify-between">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12">
            Projetos{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-normal italic text-nowrap">
              {" "}
              selecionados
            </span>
          </div>
            <MoveDownLeft size={64} color="#1f2937" strokeWidth={1} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} className="mb-8">
              <div key={project.id}>
                {" "}
                <div className="rounded-md">
                  <img
                    src={`${project.cover}`}
                    alt=""
                    className="rounded-md object-cover w-full h-64 sm:h-96"
                  />
                  <div className="pt-4">
                    <h3 className="text-2xl font-light text-gray-300">{project.title}</h3>

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
              </div>
            </Link>
          ))}
        </div>
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
      </div>
    </section>
  );
}
