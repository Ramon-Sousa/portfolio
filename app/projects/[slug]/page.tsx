import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { getProject } from "../../_services/notion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import ReactMarkdown from "react-markdown";

export default async function page({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
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
                <BreadcrumbLink href="/projects">Projetos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Link href="/projects" className="container flex gap-2">
          <ArrowLeft /> Voltar
        </Link>

        <div className="container py-8">
          <div className="">
            <h1 className="text-slate-200 text-justify text-3xl font-black pb-4">
              {project.title}
            </h1>
          </div>
          <ReactMarkdown
          components={{
            strong: ({ node, ...props }) => (
              <strong className="text-gray-500 text-xl sm:text-text-xl leading-6 sm:leading-8 py-8" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl sm:text-2xl" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-xl sm:text-2xl" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="py-4 text-gray-500 text-justify text-xl sm:text-2xl leading-8 sm:leading-8 flex mx-auto" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="p-4 rounded-lg border-2 bg-zinc-950 border-gray-900 my-8 flex" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a target="blank" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img className="mb-8 rounded-xl" {...props} />
            ),
          }}
          >{project.content}</ReactMarkdown>
        </div>
        <Footer />
      </div>
    </div>
  );
}
