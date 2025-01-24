import React from "react";
import { Lock } from "lucide-react";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import PasswordForm from "@/app/(home)/components/ui/password-form";
import ParseError from "@/app/parse-error";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default async function CaseList() {
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
                ...caseData, 
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
    <div className="">
          {cases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {cases.map((caseItem, index) =>
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
                              }
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
                            <div className="flex justify-between items-center">
                              <div className="flex flex-wrap gap-1 items-center">
                                {caseItem.tags?.length > 0 ? (
                                  caseItem.tags.map((tag: string) => (
                                    <span
                                      key={tag}
                                      className="whitespace-nowrap rounded-full px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 tracking-wide"
                                    >
                                      {tag}
                                    </span>
                                  ))
                                ) : (
                                  <span className="text-xs text-gray-800 dark:text-gray-200">
                                    No tags available
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
                              Enter the password
                            </DrawerTitle>
                            <DrawerDescription className="text-pretty text-gray-500 dark:text-gray-400">
                              To access project, you must enter the password.
                            </DrawerDescription>
                          </DrawerHeader>
                          <DrawerDescription>
                            <div className="p-4 pb-0">
                              <div className="flex items-center justify-center space-x-2">
                                <PasswordForm caseSlug={caseItem.slug} />
                              </div>
                            </div>
                          </DrawerDescription>
                          <DrawerFooter className="pt-2">
                            <DrawerClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </div>
                      </DrawerContent>
                    </Drawer>
                    </FollowerPointerCard>
                  </div>
                ) : caseItem.caseType === "link" ? (
                  <a
                    href={caseItem.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-8"
                    key={caseItem.id || index}
                  >
                    <FollowerPointerCard>
                    <div className="rounded-md">
                      <div className="rounded-md content-end overflow-clip bg-gray-100 dark:bg-gray-900 hover:bg-gray-800 hover:dark:bg-gray-200 w-full h-64 sm:h-[500px] duration-500">
                        <img
                          src={
                            caseItem.thumbnail ||
                            "/assets/empty-state-thumb.png"
                          }
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
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-1 items-center">
                            {caseItem.tags?.length > 0 ? (
                              caseItem.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="whitespace-nowrap rounded-full px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 tracking-wide"
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-gray-800 dark:text-gray-200">
                                No tags available
                              </span>
                            )}
                          </div>
                          <time className="text-base text-gray-800 dark:text-gray-200">
                            {caseItem.publishedAt}
                          </time>
                        </div>
                      </div>
                    </div>
                    </FollowerPointerCard>
                  </a>
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
                          }
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
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-1 items-center">
                            {caseItem.tags?.length > 0 ? (
                              caseItem.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="whitespace-nowrap rounded-full px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 tracking-wide"
                                >
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-gray-800 dark:text-gray-200">
                                No tags available
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
            <ParseError />
          )}
        </div>
  )
}
