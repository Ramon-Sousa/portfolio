import React from "react";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";

export default function ParseError() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          {/* Ilustração */}
          <div className="mb-8">
            <h4 className="text-2xl md:text-4xl font-thin text-gray-800 dark:text-gray-200 mb-4">
              =(
            </h4>
          </div>

          {/* Texto */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            An error occurred while loading the case.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Grab a coffee and take a look at my LinkedIn while I make the
            necessary adjustments.
          </p>

          {/* Botão */}
          <a href="https://www.linkedin.com/in/ramon-sousa-pereira/">
            <Button className="px-6 py-3 text-lg">Go to LinkedIn</Button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
