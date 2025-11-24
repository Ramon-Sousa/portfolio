"use client";
import React from "react";
import { useLanguage } from "@/app/_context/LanguageContext";
import { icons, LucideProps } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon {...props} />;
};

export function ProjectContent({ project }: { project: any }) {
  const { language } = useLanguage();

  const getTranslatedText = (textObj: any) => {
    if (typeof textObj === "string") return textObj;
    if (typeof textObj === "object" && textObj !== null) {
      return textObj[language] || textObj["en"] || textObj["pt-br"] || "";
    }
    return textObj;
  };

  // Translation dictionary for UI elements
  const uiTranslations = {
    "en": {
      home: "Home",
      projects: "Projects",
      responsibilities: "Responsibilities",
      teamStructure: "Team Structure",
      timelineAndPlatform: "Timeline and platform",
      tools: "Tools"
    },
    "pt-br": {
      home: "Início",
      projects: "Projetos",
      responsibilities: "Responsabilidades",
      teamStructure: "Estrutura da Equipe",
      timelineAndPlatform: "Linha do tempo e plataforma",
      tools: "Ferramentas"
    }
  };

  const t = (key: string) => {
    return uiTranslations[language as keyof typeof uiTranslations]?.[key as keyof typeof uiTranslations.en] || key;
  };

  const title = getTranslatedText(project.title);
  const subtitle = getTranslatedText(project.subtitle);

  return (
    <>
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
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">{t("projects")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mx-4 sm:mx-10 py-8">
        <div className="flex flex-col gap-6">
          {/* Título e subtítulo */}
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-gray-800 dark:text-gray-200 text-center sm:text-left text-base uppercase tracking-widest leading-4 font-light">
              {project.company}
            </h1>
            <h1 className="text-gray-800 dark:text-gray-200 text-2xl sm:text-4xl sm:text-left">
              {title}
            </h1>
          </div>
          <h2 className="text-gray-500 dark:text-gray-400 font-normal">
            {subtitle}
          </h2>

          {/* Conteúdo em grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 w-full my-8">
            {/* Coluna principal */}
            <div className="col-span-3 flex flex-col gap-6">
              {[
                { title: t("responsibilities"), content: project.myrole },
                {
                  title: t("teamStructure"),
                  content: project.teamStructure,
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
            <div className="col-span-1 flex flex-col gap-6">
              {[
                { title: t("timelineAndPlatform"), content: project.timeFrame },
                { title: t("tools"), content: project.tools },
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
                {project.goals.map((key: string, idx: number) => (
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
                </div>
              );
            })}
            {project?.resultName && (
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
                      .trim();
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
