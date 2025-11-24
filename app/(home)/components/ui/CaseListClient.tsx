"use client";
import React from "react";
import { Lock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import PasswordForm from "@/app/(home)/components/ui/password-form";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { useLanguage } from "@/app/_context/LanguageContext";

interface CaseItemProps {
  id: string;
  privateCase: boolean;
  caseType: string;
  slug: string;
  title: {
    en: string;
    "pt-br": string;
  };
  subtitle: {
    en: string;
    "pt-br": string;
  };
  thumbnail: string;
  tags: string[];
  publishedAt: string;
}

export function CaseListClient({ cases }: { cases: CaseItemProps[] }) {
  const { language, dict } = useLanguage();

  const getTranslatedText = (textObj: { en: string; "pt-br": string }) => {
    return textObj[language] || textObj["en"];
  };

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
                        <div className="absolute z-10 p-3 bg-gray-200 dark:bg-gray-800 rounded-full mt-4 ml-4">
                          <Lock size={16} />
                        </div>
                        <div className="rounded-md content-end overflow-clip bg-gray-100 dark:bg-gray-900 hover:bg-gray-800 hover:dark:bg-gray-200 w-full h-64 sm:h-[500px] duration-500">
                          <img
                            src={
                              caseItem.thumbnail ||
                              "/assets/empty-state-thumb.png"
                            }
                            alt={getTranslatedText(caseItem.title)}
                            className="rounded-md object-center w-full hover:scale-110 duration-500"
                          />
                        </div>
                        <div className="pt-4">
                          <h3 className="text-xl sm:text-2xl lg:text-2xl font-normal text-gray-800 dark:text-gray-200">
                            {getTranslatedText(caseItem.title)}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify text-base font-light line-clamp-3 mb-4">
                            {getTranslatedText(caseItem.subtitle)}
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
                            {language === "pt-br" ? "Digite a senha" : "Enter the password"}
                          </DrawerTitle>
                          <DrawerDescription className="text-pretty text-gray-500 dark:text-gray-400">
                            {language === "pt-br" 
                              ? "Para acessar o projeto, você deve digitar a senha." 
                              : "To access project, you must enter the password."}
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
                            <Button variant="outline">
                              {language === "pt-br" ? "Cancelar" : "Cancel"}
                            </Button>
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
                    {caseItem.caseType === "link" ? (
                      <div className="absolute z-10 p-3 bg-gray-200 dark:bg-gray-800 rounded-full mt-4 ml-4">
                        <ExternalLink size={16} />
                      </div>
                    ) : null}
                    <div className="rounded-md content-end overflow-clip bg-gray-100 dark:bg-gray-900 hover:bg-gray-800 hover:dark:bg-gray-200 w-full h-64 sm:h-[500px] duration-500">
                      <img
                        src={
                          caseItem.thumbnail ||
                          "/assets/empty-state-thumb.png"
                        }
                        alt={getTranslatedText(caseItem.title)}
                        className="rounded-md object-center w-full hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl sm:text-2xl lg:text-2xl font-normal text-gray-800 dark:text-gray-200">
                        {getTranslatedText(caseItem.title)}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify text-base font-light line-clamp-3 mb-4">
                        {getTranslatedText(caseItem.subtitle)}
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
                        alt={getTranslatedText(caseItem.title)}
                        className="rounded-md object-center w-full hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl sm:text-2xl lg:text-2xl font-normal text-gray-800 dark:text-gray-200">
                        {getTranslatedText(caseItem.title)}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2 text-justify text-base font-light line-clamp-3 mb-4">
                        {getTranslatedText(caseItem.subtitle)}
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
        <div className="text-center text-gray-500 dark:text-gray-400">
          {language === "pt-br" ? "Nenhum projeto encontrado" : "No projects found"}
        </div>
      )}
    </div>
  );
}
