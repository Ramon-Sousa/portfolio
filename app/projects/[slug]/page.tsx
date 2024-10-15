import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { icons } from "lucide-react"; // Importa todos os ícones como objetos
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
import { LucideProps } from "lucide-react";

// Componente para renderizar ícones dinamicamente
interface IconProps extends LucideProps {
  name: keyof typeof icons; // Define o nome com base nos ícones disponíveis
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name]; // Obtém o ícone dinamicamente
  if (!LucideIcon) {
    return null; // Renderiza nada se o ícone não for encontrado
  }
  return <LucideIcon {...props} />;
};
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
    <div className="min-h-screen bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <div className="">
          <img
            src={project.banner}
            alt="Banner de capa para case"
            className="object-cover w-full sm:h-[540px]"
          />
        </div>
        <div className="container pt-8 pb-4py-8">
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
        {/* <Link href="/projects" className="container flex gap-2 py-8">
          <ArrowLeft /> Voltar
        </Link> */}
        <div className="container py-8">
          <div className="flex flex-col gap-6">
            {/* Título e subtítulo */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-gray-100 text-center sm:text-left text-base uppercase tracking-widest leading-4 font-light">
                {project.company}
              </h1>
              <h1 className="text-gray-100 text-4xl sm:text-5xl text-center sm:text-left">
                {project.title}
              </h1>
            </div>
            <h2 className="text-gray-300 text-justify text-lg">
              {project.subtitle}
            </h2>

            {/* Conteúdo em grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 w-full my-8">
              {/* Coluna principal */}
              <div className="col-span-3 flex flex-col gap-6">
                {[
                  { title: "Responsabilidades", content: project.myrole },
                  {
                    title: "Estrutura do time",
                    content: project.teamStructure,
                  },
                  {
                    title: "Métodos de pesquisa",
                    content: project.researchMethods,
                  },
                ].map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h4 className="text-gray-100 text-xl font-bold pb-2">
                      {section.title}
                    </h4>
                    <span className="text-gray-300 text-justify text-lg pb-4 sm:pb-8">
                      {section.content}
                    </span>
                  </div>
                ))}
              </div>

              {/* Coluna secundária */}
              <div className="col-span-1 flex flex-col gap-6 ">
                {[
                  { title: "Cronograma", content: project.timeFrame },
                  { title: "Ferramentas", content: project.tools },
                  { title: "Plataforma", content: project.plataform },
                ].map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h4 className="text-gray-100 text-xl font-bold pb-2">
                      {section.title}
                    </h4>
                    <span className="text-gray-300 text-justify text-lg pb-4 sm:pb-8">
                      {section.content}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem com lazy-loading */}
            <div className="">
              <img
                src={project.bannerHighlight}
                alt="Destaque do projeto com banner de capa"
                className="mt-4 mb-10 rounded-lg sm:rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* <hr className="my-4 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10" /> */}
          {/* Layout flex principal */}
          <div className="flex gap-8 w-full my-8">
            {/* Índice sticky à esquerda */}
            <div className="hidden sm:block w-1/4">
              <div className="sticky top-16">
                <ul className="space-y-2">
                  <a href={`#${project.problemName}`} className="block">
                    <li
                      className="py-2 cursor-pointer hover:text-gray-400"
                      key={project.problemName}
                    >
                      {project.problemName}
                    </li>
                  </a>
                  {/* Descrição dinâmica */}
                  {Object.keys(project.description).map((key, idx) => {
                    const paragraph = project.description[key];
                    return (
                      <a
                        href={`#${paragraph.descTitle}`}
                        className="block"
                        key={idx}
                      >
                        <li className="py-2 cursor-pointer hover:text-gray-400">
                          {paragraph.descTitle}
                        </li>
                      </a>
                    );
                  })}
                  {/* Resultados */}
                  <a href={`#${project.resultName}`} className="block">
                    <li
                      className="py-2 cursor-pointer hover:text-gray-400"
                      key={project.resultName}
                    >
                      {project.resultName}
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            {/* Conteúdo principal à direita */}
            <div className="flex-1 sm:ml-8 mb-4 sm:mb-8">
              {/* Renderizando dinamicamente todos os parágrafos de goals */}
              <div className="gap-6 mb-10" id={project.problemName}>
                <h4 className="text-gray-100 text-xl font-bold pb-4">
                  {project.problemName}
                </h4>
                <div className="flex flex-col gap-4">
                  {project.goals.map((key, idx) => (
                    <div
                      key={idx}
                      className="flex align-middle gap-2 w-full bg-gray-800 py-6 px-7 rounded-xl"
                    >
                      <h4 className="text-gray-100 text-2xl font-medium font-[Piazolla]">
                        {idx + 1}
                      </h4>
                      <span className="text-gray-300 text-justify text-lg pt-1">
                        {key}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-2xl text-center justify-center italic text-gray-400 underline decoration-indigo-500 py-10">
                  {project.resultCaption}
                </p>
              </div>

              {/* Renderizando dinamicamente todos os parágrafos de description */}
              {Object.keys(project.description).map((key, idx) => {
                const paragraph = project.description[key];
                return (
                  <div
                    key={idx}
                    className="w-full my-10"
                    id={paragraph?.descTitle}
                  >
                    <h3 className="text-gray-100 text-xl font-bold pb-2">
                      {paragraph.descTitle}
                    </h3>
                    <p className="text-gray-300 text-justify text-lg pb-8">
                      {paragraph?.descText ?? "Texto não disponível"}
                    </p>
                    <div>
                      {paragraph?.descImage && (
                        <img
                          src={paragraph.descImage}
                          alt={`Descrição Imagem ${idx}`}
                          className="rounded-lg sm:rounded-2xl mb-2"
                        />
                      )}
                      <p className="text-xs italic text-gray-400 my-4">
                        {paragraph?.imageCaption ?? ""}
                      </p>
                    </div>
                    <hr className="my-10 h-[1px] border-dashed border-1 border-gray-700 dark:bg-white/10" />
                  </div>
                );
              })}

              {/* Renderizando dinamicamente todos os parágrafos de results */}
              <div className="gap-6 my-10" id={project.resultName}>
                <h4 className="text-gray-100 text-xl font-bold pb-4">
                  {project.resultName}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {Object.keys(project.results).map((key, idx) => {
                    const results = project.results[key];
                    const iconName = results.resultIcon
                      .replace("<", "")
                      .replace("/>", "")
                      .trim(); // Extrair o nome do ícone
                    return (
                      <div
                        className="flex flex-col gap-2 w-full bg-gray-800 py-6 px-6 rounded-xl"
                        key={idx}
                      >
                        <h2 className="text-gray-100 text-2xl pb-2 gap-2 flex items-center">
                          <Icon size={32} color="#6366f1" name={iconName as keyof typeof icons} />
                          {results.resultTitle}
                        </h2>
                        <span className="text-gray-300 text-base">
                          {results.resultDesc}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs italic text-gray-400 my-4">
                  {project.resultCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
