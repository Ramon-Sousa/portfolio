import React from "react";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          {/* Ilustração */}
          <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-thin text-gray-800 dark:text-gray-200 mb-4">
            404
          </h1>
          </div>

          {/* Texto */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Página não encontrada
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>

          {/* Botão */}
          <a href="/">
            <Button className="px-6 py-3 text-lg">Voltar para o início</Button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}