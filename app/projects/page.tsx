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
        <div className="container py-8">
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
        </div>

        <Link href="/projects" className="container flex gap-2">
          <ArrowLeft /> Voltar
        </Link>
        <div className="container py-8">
          <h1 className="text-slate-200 text-justify text-3xl font-black">
            Projetos
          </h1>
        </div>

        <div className="container pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id}>
                {" "}
                <Link href={`/projects/${project.slug}`}>
                  <div className="rounded-md">
                    <img
                      src={`${project.cover}`}
                      alt=""
                      className="rounded-md object-cover w-full h-40 sm:h-72"
                    />
                    <div className="pt-4">
                      <div className="mb-2 flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="whitespace-nowrap rounded-md bg-[#090A0C] px-2.5 py-0.5 text-xs text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-medium text-gray-300">
                        {project.title}
                      </h3>
                      {/* <time className="block text-xs text-gray-500">
                        {project.publishedAt}
                      </time> */}

                      <div className="py-4">
                        <Link
                          className={buttonVariants({ variant: "outline" })}
                          href={`/projects/${project.slug}`}
                        >
                          Ver projeto
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
