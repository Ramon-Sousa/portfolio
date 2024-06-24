import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-slate-50 ">
      <div className=" container py-16 bg-slate-50 gap-8">
        <div className="flex-col justify-start items-start gap-4 inline-flex text-neutral-950 text-[56px] font-bold">
          O seu projeto pode ser o próximo!
          <button className=" justify-center items-center gap-2 inline-flex rounded-full bg-black px-4 text-2xl text-white font-bold py-3">
            Ver todos
            <div className="p-4 bg-white rounded-[101px] gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <footer className="bg-[#090A0C]">
        <div className="container py-16 sm:px-6 lg:pt-24">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <div>
                  <span className="text-slate-50 text-xl font-normal">
                    Feito por
                  </span>
                  <span className="text-slate-50 text-xl font-semibold">
                    {" "}
                    Ramon Sousa
                  </span>
                </div>
              </div>

              <div className="flex justify-center text-teal-600 lg:justify-start">
                <div>
                  <span className="text-slate-50 text-xl font-normal">
                    Copyright ©{" "}
                  </span>
                  <span className="text-slate-50 text-xl font-semibold">
                    2022
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <div className="flex-col justify-start items-start gap-px inline-flex">
            <div className="text-slate-50 text-xl font-normal">E-mail</div>
            <div className="text-slate-50 text-2xl font-semibold">contato@ramonsousa.com</div>
          </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
