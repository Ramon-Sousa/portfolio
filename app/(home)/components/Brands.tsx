import React from "react";

export default function Brands() {
  return (
    //justify-center items-center mx-auto px-4 py-24 sm:py-12
    <section className="mx-auto w-full pb-24 sm:py-12 lg:pb-40">
      {/* <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="mx-auto  text-center">
        <div className="text-4xl sm:text-4xl lg:text-6xl font-normal pb-4">
          Experiência{" "}
          <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-black italic">
            {" "}
            profissional
          </span>
        </div>
          <div className="text-slate-400 text-base font-normal pb-8">
            Empresas que confiaram em meu trabalho para realizar projetos.
          </div>
        </div>
      </div> */}
      <div className="px-0 mx-0 w-full sm:justify-between sm:mt-0 sm:grid auto-cols-max grid-cols-9 grid-rows-2">
        <div className="col-span-1 hidden sm:inline border border-l-0 border-gray-900"></div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img
            src="/assets/company/company-06.png"
            alt="suflex-logo"
            className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img
            src="/assets/company/company-05.png"
            alt="achei-terapia-logo"
            className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img
            src="/assets/company/company-03.png"
            alt="saint-gobain-logo"
            className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"
          />
        </div>
        <div className="col-span-2 hidden sm:inline border border-r-0 border-gray-900 text-gray-300"></div>

        <div className="col-span-2 hidden sm:inline border border-l-0 border-gray-900"></div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img
            src="/assets/company/company-04.png"
            alt="parceiro-da-construcao-logo"
            className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img
            src="/assets/company/company-02.png"
            alt="branco-motores-logo"
            className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center py-6 border border-gray-900">
          <img
            src="/assets/company/company-01.png"
            alt="ib-system-logo"
            className="saturate-0 hover:saturate-150 hover:scale-125 duration-700"
          />
        </div>
        <div className="col-span-1 hidden sm:inline border border-r-0 border-gray-900"></div>
      </div>
    </section>
  );
}
