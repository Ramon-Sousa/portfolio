import React from "react";
import { getProjects } from "@/app/_services/notion";

export default async function Description() {
  const projects = await getProjects();
  return (
   <section className="mx-auto px-4 pb-8 sm:px-6 lg:px-8 lg:pb-40" id="about">
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-6 pt-20 pb-16">
    {projects.map((project, index) => (
      <div key={project.id}
        className={`group relative flex h-48 items-end overflow-hidden rounded-lg border-2 border-slate-900 md:h-[400px] ${
          index % 4 === 1 || index % 4 === 2 ? 'md:col-span-2' : ''
        }`}  >
        <img
          className="absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-110 saturate-50 hover:saturate-100 duration-700"
          src={project.cover}
          alt={project.title}
        />
      </div>
    ))}
  </div>
</section>

  );
}
