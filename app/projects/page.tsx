import React, { useState } from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { Metadata } from "next";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import fs from "fs/promises"; // Usando fs.promises para leitura assíncrona
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
import PasswordForm from "./_components/password-form/password-form";
export default async function Page() {
  const casesDirectory = path.join(process.cwd(), "public/cases");
  let cases = [];

  try {
    const filenames = await fs.readdir(casesDirectory);

    // Filtra apenas arquivos com a extensão .json
    const jsonFilenames = filenames.filter((filename) =>
      filename.endsWith(".json")
    );

    if (jsonFilenames.length > 0) {
      cases = await Promise.all(
        jsonFilenames.map(async (filename) => {
          const filePath = path.join(casesDirectory, filename);
          const fileContent = await fs.readFile(filePath, "utf-8");

          try {
            const caseData = JSON.parse(fileContent);

            // Verificar se o slug existe e se os dados estão bem formatados
            if (caseData.slug && caseData.title) {
              return {
                ...caseData, // Inclui os dados do JSON
                publishedAt: Array.isArray(caseData.publishedAt)
                  ? caseData.publishedAt.join(", ") // Concatena datas se for um array
                  : caseData.publishedAt || "Data não disponível", // Fallback para a data
              };
            }
            return null; // Caso o slug ou título estejam ausentes
          } catch (error) {
            console.error(`Erro ao fazer parse do arquivo: ${filename}`, error);
            return null;
          }
        })
      );

      cases = cases.filter(Boolean); // Filtra casos inválidos
    }
  } catch (error) {
    console.error("Erro ao ler o diretório 'cases':", error);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <Link
          href="/"
          className="container flex gap-2 pt-8 text-gray-800 dark:text-gray-200"
        >
          <ArrowLeft /> Voltar
        </Link>
        <div className="container py-8">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
            Cases{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-normal italic text-nowrap">
              selecionados
            </span>
          </div>
        </div>
        <div className="container pb-16">
          {cases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {cases.map((caseItem, index) =>
                caseItem.privateCase ? (
                  <div key={caseItem.id || index}>
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
                            <h3 className="text-3xl font-normal text-gray-800 dark:text-gray-200">
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
                              Para acessar o projeto, você deve informar a senha
                              do projeto.
                            </DrawerDescription>
                          </DrawerHeader>
                          <DrawerDescription>
                            <div className="p-4 pb-0">
                              {/* <div className="text-lg font-medium text-gray-800 dark:text-gray-200">{caseItem.title}</div> */}
                              {/* <img
                                src={
                                  caseItem.thumbnail ||
                                  "/assets/empty-state-thumb.png"
                                } // Fallback para imagem padrão
                                alt={caseItem.title}
                                className="rounded-2xl object-cover w-full py-4"
                              /> */}
                              <div className="flex items-center justify-center space-x-2">
                                {/* <Input
                                  type="password"
                                  placeholder="Senha do projeto"
                                /> */}
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
                  </div>
                ) : (
                  <Link
                    href={`/projects/${caseItem.slug}`}
                    className="mb-8"
                    key={caseItem.id || index}
                  >
                    <div className="rounded-md">
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
                        <h3 className="text-3xl font-normal text-gray-800 dark:text-gray-200">
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
        <Footer />
      </div>
    </div>
  );
}
