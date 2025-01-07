import React from "react";
import Link from "next/link";
import { MoveDownLeft, Lock } from "lucide-react";
import fs from "fs";
import path from "path";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import PasswordForm from "../../projects/_components/password-form/password-form";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default async function Projects() {
  // Caminho para o diretório dos arquivos JSON
  const casesDirectory = path.join(process.cwd(), "public/cases");
  let projects = [];

  try {
    // Verificar se o diretório existe
    if (fs.existsSync(casesDirectory)) {
      // Ler todos os arquivos .json na pasta 'public/cases'
      const filenames = fs.readdirSync(casesDirectory);

      // Verificar se existem arquivos no diretório
      if (filenames.length > 0) {
        // Carregar o conteúdo de cada arquivo e transformá-lo em JSON
        projects = filenames
          .map((filename) => {
            const filePath = path.join(casesDirectory, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");

            // Tentar fazer o parse do conteúdo do arquivo JSON
            try {
              const projectData = JSON.parse(fileContent);
              return {
                ...projectData, // Inclui os dados do JSON, incluindo title, description, slug, etc.
              };
            } catch (error) {
              console.error(
                `Erro ao fazer parse do arquivo: ${filename}`,
                error
              );
              return null; // Ignorar arquivos com erros
            }
          })
          .filter(Boolean); // Filtrar qualquer null retornado por arquivos inválidos
      }
    } else {
      console.warn("O diretório 'cases' não existe.");
    }
  } catch (error) {
    console.error("Erro ao ler o diretório 'cases':", error);
  }

  return (
    <section className=" py-8 sm:px-8 lg:py-32">
      <div className="container">
        <div className="flex justify-between pb-6 sm:pb-14">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
            Cases{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-normal italic text-nowrap">
              selecionados
            </span>
          </div>
          <MoveDownLeft size={64} color="#1f2937" strokeWidth={1} />
        </div>

        <div className="">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {projects.map((caseItem, index) =>
                caseItem.privateCase ? (
                  <div key={caseItem.id || index}>
                    <FollowerPointerCard>
                      <Drawer>
                        <DrawerTrigger asChild>
                          <div className="rounded-md cursor-pointer ">
                            <div className="absolute z-10 p-3 bg-gray-200 dark:bg-gray-900 rounded-full mt-4 ml-4">
                              <Lock size={16} />
                            </div>
                            <div className="rounded-md content-end overflow-clip bg-gray-100 dark:bg-gray-900 hover:bg-gray-800 hover:dark:bg-gray-200 w-full h-64 sm:h-[500px] duration-500">
                              <img
                                src={
                                  caseItem.thumbnail ||
                                  "/assets/empty-state-thumb.png"
                                } // Fallback para imagem padrão
                                alt={caseItem.title}
                                className="rounded-md object-center w-full hover:scale-110 duration-500"
                              />
                            </div>
                            <div className="pt-4">
                              <h3 className="text-xl sm:text-3xl lg:text-3xl font-normal text-gray-800 dark:text-gray-200">
                                {caseItem.title}
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify text-base font-light line-clamp-3 mb-4">
                                {caseItem.subtitle}
                              </p>
                              {/* <hr className="my-10 h-[1px] border-t-0 bg-gray-200 dark:bg-gray-900" /> */}
                              <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-1 items-center">
                                  {caseItem.tags?.length > 0 ? (
                                    caseItem.tags.map((tag: string) => (
                                      <span
                                        key={tag}
                                        className="whitespace-nowrap rounded-full px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200  tracking-wide"
                                      >
                                        {tag}
                                      </span>
                                    ))
                                  ) : (
                                    <span className="text-xs text-gray-800 dark:text-gray-200">
                                      Sem tags disponíveis
                                    </span>
                                  )}
                                </div>
                                <time className="text-base text-gray-800 dark:text-gray-200">
                                  {caseItem.publishedAt}
                                </time>
                              </div>
                            </div>
                          </div>
                        </DrawerTrigger>
                        <DrawerContent>
                          <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                              <DrawerTitle className="text-3xl font-medium text-gray-800 dark:text-gray-200">
                                Informe a senha
                              </DrawerTitle>
                              <DrawerDescription className="text-pretty text-gray-500 dark:text-gray-400">
                                Para acessar o projeto, você deve informar a
                                senha do projeto.
                              </DrawerDescription>
                            </DrawerHeader>
                            <DrawerDescription>
                              <div className="p-4 pb-0">
                                {/* <div className="text-lg font-medium text-gray-800 dark:text-gray-200">{caseItem.title}</div> */}
                                <div className="flex items-center justify-center space-x-2">
                                  <PasswordForm caseSlug={caseItem.slug} />
                                </div>
                              </div>
                            </DrawerDescription>
                            <DrawerFooter className="pt-2">
                              {/* <Button>Salvar</Button> */}
                              <DrawerClose asChild>
                                <Button variant="outline">Cancelar</Button>
                              </DrawerClose>
                            </DrawerFooter>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </FollowerPointerCard>
                  </div>
                ) : (
                  <Link
                  href={`/projects/${caseItem.slug}`}
                  className="mb-8"
                  key={caseItem.id || index}
                  >
                      <div className="rounded-md">
                    <FollowerPointerCard>
                        <div className="rounded-md content-end overflow-clip bg-gray-100 dark:bg-gray-900 hover:bg-gray-800 hover:dark:bg-gray-200 w-full h-64 sm:h-[500px] duration-500">
                          <img
                            src={
                              caseItem.thumbnail ||
                              "/assets/empty-state-thumb.png"
                            } // Fallback para imagem padrão
                            alt={caseItem.title}
                            className="rounded-md object-center w-full hover:scale-110 duration-500"
                          />
                        </div>
                        <div className="pt-4">
                          <h3 className="text-xl sm:text-3xl lg:text-3xl font-normal text-gray-800 dark:text-gray-200">
                            {caseItem.title}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify text-base font-light line-clamp-3 mb-4">
                            {caseItem.subtitle}
                          </p>
                          {/* <hr className="my-10 h-[1px] border-t-0 bg-gray-200 dark:bg-gray-900" /> */}
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-1 items-center">
                              {caseItem.tags?.length > 0 ? (
                                caseItem.tags.map((tag: string) => (
                                  <span
                                    key={tag}
                                    className="whitespace-nowrap rounded-full px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200  tracking-wide"
                                  >
                                    {tag}
                                  </span>
                                ))
                              ) : (
                                <span className="text-xs text-gray-800 dark:text-gray-200">
                                  Sem tags disponíveis
                                </span>
                              )}
                            </div>
                            <time className="text-base text-gray-800 dark:text-gray-200">
                              {caseItem.publishedAt}
                            </time>
                          </div>
                        </div>
                    </FollowerPointerCard>
                      </div>
                  </Link>
                )
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-16">
              <img
                src="/assets/coffee-error.svg"
                alt="imagem-erro de cases"
                className="h-56"
              />
              <h3 className="mt-4 text-2xl font-light text-gray-300">
                Nenhum case disponível
              </h3>
              <p className="mt-2 text-lg text-gray-500">
                Pegue um café e dê uma olhada no meu Linkedin enquanto faço as
                melhorias no portfólio.
              </p>
            </div>
          )}
        </div>

        {projects.length > 0 && (
          <div className="flex justify-center mt-6">
            <Link
              className="flex items-center gap-2 rounded-full bg-gray-100 px-4 text-xl text-gray-800 font-normal py-3 hover:bg-gray-200 duration-300"
              href="/projects"
            >
              Ver todos
              <div className="p-2 bg-gray-950 rounded-full flex justify-center items-center">
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
    </section>
  );
}
