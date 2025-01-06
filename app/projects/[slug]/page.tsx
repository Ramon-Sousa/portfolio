import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { ArrowLeft, icons } from "lucide-react"; // Importa todos os ícones como objetos
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

  try {
    // Lê todos os arquivos no diretório
    const filenames = fs.readdirSync(casesDirectory);

    // Filtra apenas arquivos com a extensão .json
    const jsonFilenames = filenames.filter((filename) =>
      filename.endsWith(".json")
    );

    // Carrega os arquivos JSON e verifica o slug
    const caseFile = jsonFilenames.find((filename) => {
      const filePath = path.join(casesDirectory, filename);
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const caseData = JSON.parse(fileContent);
        return caseData.slug === params.slug; // Verifica se o slug corresponde
      } catch (error) {
        console.error(`Erro ao fazer parse do arquivo: ${filename}`, error);
        return false; // Ignora arquivos que não puderam ser parseados
      }
    });

    if (!caseFile) {
      // Exibe estado vazio caso o arquivo com o slug não seja encontrado
      return (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            src="/assets/coffee-error.svg"
            alt="imagem-erro de cases"
            className="h-56"
          />
          <h3 className="mt-4 text-2xl font-light text-gray-800 dark:text-gray-200">
            Nenhum case disponível
          </h3>
          <p className="mt-2 font-normal text-gray-500 dark:text-gray-400">
            Pegue um café e dê uma olhada no meu Linkedin enquanto faço as
            melhorias no portfólio.
          </p>
        </div>
      );
    }

    // Lê o conteúdo do case encontrado
    const caseFilePath = path.join(casesDirectory, caseFile);
    const caseContent = fs.readFileSync(caseFilePath, "utf-8");
    const project = JSON.parse(caseContent);

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-screen-7xl mx-auto">
          <Navbar />
          <div className="">
            <img
              src={project.banner}
              alt="Banner de capa para case"
              className="object-cover w-full sm:h-[540px]"
            />
          </div>
          <div className="mx-4 sm:mx-10 py-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/projects">Cases</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
          </div>
          {/* <Link
              href="/"
              className="container flex gap-2 pt-8 text-gray-800 dark:text-gray-200"
            >
              <ArrowLeft /> Voltar
            </Link> */}
          <div className="mx-4 sm:mx-10 py-8">
            <div className="flex flex-col gap-6">
              {/* Título e subtítulo */}
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-gray-800 dark:text-gray-200 text-center sm:text-left text-base uppercase tracking-widest leading-4 font-light">
                  {project.company}
                </h1>
                <h1 className="text-gray-800 dark:text-gray-200 text-2xl sm:text-4xl sm:text-left">
                  {project.title}
                </h1>
              </div>
              <h2 className="text-gray-500 dark:text-gray-400 font-normal">
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
                      <h4 className="text-gray-800 dark:text-gray-200 font-semibold pb-2">
                        {section.title}
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 font-normal pb-4 sm:pb-8">
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
                      <h4 className="text-gray-800 dark:text-gray-200 font-semibold pb-2">
                        {section.title}
                      </h4>
                      <span className="text-gray-500 dark:text-gray-400 font-normal pb-4 sm:pb-8">
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

            <div className="flex gap-8 w-full my-8">
              <div className="hidden sm:block w-1/5">
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

              <div className="flex-1 sm:ml-8 mb-4 sm:mb-8">
                <div className="gap-6 mb-10" id={project.problemName}>
                  <h4 className="text-gray-800 dark:text-gray-200 font-semibold pb-4">
                    {project.problemName}
                  </h4>
                  <div className="flex flex-col gap-4">
                    {project.goals.map((key: string, idx: string) => (
                      <div
                        key={idx}
                        className="flex align-middle gap-2 w-full bg-gray-100 dark:bg-gray-900 py-6 px-7 rounded-xl"
                      >
                        <h4 className="text-gray-800 dark:text-gray-200 text-xl font-medium">
                          {idx + 1}
                        </h4>
                        <span className="text-gray-800 dark:text-gray-200 font-normal pt-1">
                          {key}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="my-6 w-full bg-gray-900 dark:bg-gray-100 rounded-xl text-lg font-normal italic text-gray-200 dark:text-gray-800 py-10 px-8">
                    {project.problemCaption}
                  </p>
                </div>

                {Object.keys(project.description).map((key, idx) => {
                  const paragraph = project.description[key];
                  return (
                    <div
                      key={idx}
                      className="w-full my-40"
                      id={paragraph?.descTitle}
                    >
                      <h3 className="text-gray-800 dark:text-gray-200 font-semibold pb-2">
                        {paragraph.descTitle}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-normal pb-8">
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
                        <p className="text-xs italic text-gray-500 dark:text-gray-400 my-4">
                          {paragraph?.imageCaption ?? ""}
                        </p>
                      </div>
                      {/* <hr className="my-10 h-[1px] border-t-0 bg-gray-200 dark:bg-gray-900" /> */}
                    </div>
                  );
                })}

                <div className="gap-6 my-10" id={project.resultName}>
                  <h4 className="text-gray-800 dark:text-gray-200 font-semibold pb-4">
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
                          className="flex flex-col gap-2 w-full bg-gray-100 dark:bg-gray-900 py-6 px-6 rounded-xl"
                          key={idx}
                        >
                          <h2 className="text-gray-800 dark:text-gray-200 text-2xl pb-2 gap-2 flex items-center">
                            <Icon
                              size={32}
                              color="#6366f1"
                              name={iconName as keyof typeof icons}
                            />
                            {results.resultTitle}
                          </h2>
                          <span className="text-gray-500 dark:text-gray-400 font-normal">
                            {results.resultDesc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xs italic text-gray-500 dark:text-gray-400 my-4">
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
  } catch (error) {
    // Exibe estado vazio caso ocorra erro ao ler ou parsear o arquivo JSON
    console.error("Erro ao carregar case:", error);
    return (
      <div className="flex flex-col items-center justify-center mt-16">
        <img
          src="/assets/coffee-error.svg"
          alt="imagem-erro de cases"
          className="h-56"
        />
        <h3 className="mt-4 text-2xl font-light text-gray-500 dark:text-gray-400">
          Nenhum case disponível
        </h3>
        <p className="mt-2 font-normal text-gray-500">
          Pegue um café e dê uma olhada no meu Linkedin enquanto faço as
          melhorias no portfólio.
        </p>
      </div>
    );
  }
}
