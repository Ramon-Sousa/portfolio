import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function HeroSection() {
  const words = ["experiences", "journeys", "emotions", "conections"];
  return (
    <section
      className="h-auto py-20 sm:py-32 lg:py-40 flex items-center justify-center"
      id="HeroSection"
    >
      <div className="container mx-auto">
        <div className="flex-col justify-end inline-flex">
          <h1 className="text-2xl sm:text-6xl lg:text-8xl font-light text-gray-800 dark:text-gray-200">
            Building products,
          </h1>
          <h2 className="text-2xl sm:text-6xl lg:text-8xl font-light text-gray-800 dark:text-gray-200">
            interactions & <span className="text-2xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-light italic"> <FlipWords words={words} /></span>
          </h2>
        </div>
        {/* <div className="flex-col justify-end inline-flex w-1/2">
          <h1 className="text-xl sm:text-4xl lg:text-4xl font-normal text-gray-800 dark:text-gray-200">
            Apaixonado por solucionar problemas utilizando{" "}
            <span className="text-xl sm:text-4xl lg:text-4xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-bold italic">
              {" "}
              soluções digitais
            </span>
          </h1>
        </div> */}
        <div className="pt-10">
          <div className="w-full flex-col justify-end items-end inline-flex">
            <div className="text-gray-900 dark:text-gray-100 text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
              Ramon Sousa
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-base font-light tracking-wide">
              Product Designer & Front-End Developer
            </div>
          </div>
        </div>
        {/* <img src="/assets/stamp.png" className="w-40 right-96 top-40 absolute"/> */}
      </div>
    </section>
  );
}
