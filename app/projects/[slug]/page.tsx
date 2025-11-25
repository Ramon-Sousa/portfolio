import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import fs from "fs";
import path from "path";
import ParseError from "@/app/parse-error";
import { ProjectContent } from "./ProjectContent";

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
      return <ParseError />;
    }

    // Lê o conteúdo do case encontrado
    const caseFilePath = path.join(casesDirectory, caseFile);
    const caseContent = fs.readFileSync(caseFilePath, "utf-8");
    const project = JSON.parse(caseContent);

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-screen-7xl mx-auto">
          <Navbar />
          <ProjectContent project={project} />
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    return <ParseError />;
  }
}
