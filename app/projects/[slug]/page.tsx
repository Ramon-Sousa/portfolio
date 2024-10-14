import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Função para carregar os dados do case com base no slug
export default async function Page({ params }: { params: { slug: string } }) {
  const casesDirectory = path.join(process.cwd(), "public/cases");
  const filenames = fs.readdirSync(casesDirectory);

  // Carregar todos os arquivos JSON e procurar pelo slug no conteúdo do arquivo
  const caseFile = filenames.find((filename) => {
    const filePath = path.join(casesDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const caseData = JSON.parse(fileContent);

    // Comparar o slug do arquivo com o slug passado na URL
    return caseData.slug === params.slug;
  });

  if (!caseFile) {
    return <div className="text-center m-auto">Case não encontrado.</div>; // Renderiza um erro se o case não for encontrado
  }

  // Se o arquivo com o slug correspondente for encontrado, ler o conteúdo
  const caseFilePath = path.join(casesDirectory, caseFile);
  const caseContent = fs.readFileSync(caseFilePath, "utf-8");
  const project = JSON.parse(caseContent);

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
          <div className="flex flex-col gap-1">
            <div className="flex sm:flex-row flex-col-reverse sm:justify-between items-center gap-4">
              <h1 className="text-gray-100 align-middle text-3xl font-black">
                {project.title}
              </h1>
              <span className="whitespace-nowrap rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2 text-base text-gray-300 uppercase tracking-wide">
                {project.publishedAt}
              </span>
            </div>
            <h2 className="text-gray-300 text-center sm:text-justify text-lg pb-4">
              {project.subtitle}
            </h2>
          </div>
          <div className="">
            <img
              src={project.banner}
              alt="Banner de capa para case"
              className="my-4 rounded-lg sm:rounded-2xl object-cover w-full"
            />
          </div>

          <hr className="my-4 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="grid grid-cols-5">
            <div className="hidden sm:flex mx-12 sticky top-0 z-10">
              <ul className="list-disc max-h-fit" id="index">
                {Object.keys(project.description).map((key, idx) => {
                  const paragraph = project.description[key];
                  return (
                    <a href={`#${(paragraph?.descTitle ?? "secao")}`}><li key={idx}>{paragraph?.descTitle ?? "Título não disponível"}</li></a>
                  );
                })}
              </ul>
            </div>
            {/* Renderizando dinamicamente todos os parágrafos de description */}
            <div className="col-span-4">
              {Object.keys(project.description).map((key, idx) => {
                const paragraph = project.description[key];
                return (
                  <div key={idx} className="my-16 w-full ml-8" id={paragraph?.descTitle}>
                    <h3 className="text-gray-100 text-xl font-bold pb-2">
                      {paragraph?.descTitle ?? "Título não disponível"}
                    </h3>
                    <p className="text-gray-300 text-justify text-lg pb-8">
                      {paragraph?.descText ?? "Texto não disponível"}
                    </p>
                    <div className="">
                      {paragraph?.descImage && (
                        <img
                          src={paragraph.descImage}
                          alt={`Descrição Imagem ${idx}`}
                          className="rounded-lg sm:rounded-2xl mb-2"
                        />
                      )}
                      <p className="text-xs italic text-gray-400">
                        {paragraph?.imageCaption ?? ""}
                      </p>
                    </div>
                  </div>
                );
              })}

              <h4 className="text-xl font-medium text-gray-100">Metas:</h4>
              <ul className="text-gray-300 list-disc ml-5 mt-2">
                {project.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
              <h4 className="text-xl font-medium text-gray-100 mt-4">
                Resultados:
              </h4>
              <ul className="text-gray-300 list-disc ml-5 mt-2">
                <li>
                  Aumento de Tráfego: {String(project.results.trafficIncrease)}
                </li>
                <li>
                  Taxa de Conversão: {String(project.results.conversionRate)}
                </li>
                <li>
                  Crescimento nas Redes Sociais:{" "}
                  {String(project.results.socialGrowth)}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
