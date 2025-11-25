import React from "react";
import fs from "fs/promises";
import path from "path";
import ParseError from "@/app/parse-error";
import { CaseListClient } from "./CaseListClient";

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

  if (cases.length === 0) {
    return <ParseError />;
  }

  return <CaseListClient cases={cases} />;
}
