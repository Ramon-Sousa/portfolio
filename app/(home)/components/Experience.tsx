import React from "react";
export default async function Experience() {
  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-24 sm:py-12 lg:py-20 gap-8 lg:gap-20">
      <div className="items-center lg:items-start text-center lg:text-left w-full col-span-1">
        <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-4">
          Experiência{" "}
          {/* <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-black italic text-nowrap">
              {" "}
              profissional
            </span> */}
        </div>
        <div className="text-gray-400 text-xl font-light pb-8">
          Como Product Designer, trago uma combinação de habilidades em design e
          desenvolvimento, adquiridas ao longo de minha experiência. Minha
          experiência como Desenvolvedor Front-End e Web me proporciona uma
          compreensão das competências técnicas necessárias para desenvolver
          soluções eficazes e proporcionar um handoff eficiente entre design e
          desenvolvimento.
        </div>
        <div className="flex justify-start gap-2 text-sm font-light text-gray-200 ">
          <span className="rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2">
            {" "}
            +4 anos de experiência{" "}
          </span>
          <span className="rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2">
            {" "}
            Product Designer{" "}
          </span>
          <span className="rounded-full bg-[#090A0C] border border-slate-900 px-4 py-2">
            {" "}
            Programador Front End{" "}
          </span>
        </div>
      </div>
      <div className="gap-4 w-full col-span-4">
        <div>
          {/* Suflex */}
          <div className="h-28 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-neutral-50 text-3xl font-light">Suflex</div>
              <div className="text-slate-500 text-sm font-medium">
                Set. 2023 - Atual | Product Designer
              </div>
            </div>
          </div>
          {/* Diwe */}
          <div className="h-28 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-neutral-50 text-3xl font-light">Diwe</div>
              <div className="text-slate-500 text-sm font-medium">
                Jul. 2021 - Jul. 2023 | UX/UI Designer → Product Designer
              </div>
            </div>
          </div>
          {/* ibSystem */}
          <div className="h-28 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-neutral-50 text-3xl font-light">
                ibSystem
              </div>
              <div className="text-slate-500 text-sm font-medium">
                Jul. 2020 - Abr. 2021 | Programador Web → Front end Dev/UI
                Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
