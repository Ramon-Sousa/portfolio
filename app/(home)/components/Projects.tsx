import React from "react";
import { MoveDownLeft } from "lucide-react";
import CaseList from "./ui/CaseList"; 

export default async function Projects() {

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
        <CaseList/>
      </div>
    </section>
  );
}
