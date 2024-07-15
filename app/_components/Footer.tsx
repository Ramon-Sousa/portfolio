import React from "react";
const dateYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="w-full bg-slate-50 ">
      {/* <div className=" container py-16 bg-slate-50 gap-8">
        <div className="flex-col justify-start items-start gap-4 inline-flex text-neutral-950 text-xl sm:text-4xl lg:text-5xl font-bold">
          O seu projeto pode ser o próximo!
          <button className=" justify-center items-center gap-2 inline-flex rounded-full bg-black px-4 text-lg sm:text-xl lg:text-xl text-white font-bold py-3">
            Ver todos
            <div className="p-2 sm:p-2 lg:p-4 bg-white rounded-[101px] gap-2">
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
      </div> */}
      <footer className="bg-[#020202] border-t border-gray-900">
        <div className="container py-16 sm:px-6 lg:pt-24">
          <div className="lg:flex lg:items-center lg:justify-center">
            <div>
              {/* <div className=" lg:justify-start">
                <div>
                  <span className="text-slate-50 text-xl font-light">
                    Feito por
                  </span>
                  <span className="text-slate-50 text-xl font-bold">
                    {" "}
                    Ramon Sousa
                  </span>
                </div>
              </div> */}

              <div className="flex flex-col items-center gap-2">
                <div>
                  Desenvolvido por
                  <span className="text-slate-50 text-xl font-bold">
                    {" "}
                    Ramon Sousa
                  </span>
                </div>
                <span className="text-slate-50 text-xl font-light">Copyright ©{" "} {dateYear}</span>
              </div>
            </div>
            {/* <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <div className="flex-col justify-start items-start gap-px inline-flex">
                <div className="text-slate-50 text-xl font-light">E-mail</div>
                <div className="text-slate-50 text-2xl font-semibold">
                  contato@ramonsousa.com
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
