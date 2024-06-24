import React from "react";

export default function HeroSection() {
  return (
    <section className="h-auto py-40 w-screen flex items-center justify-center" id="HeroSection">
      <div className="container">
        <div className=" text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-9xl font-black lg:text-8xl sm:text-5xl">Ramon Sousa</h1>
            <button className="justify-center items-center gap-2 inline-flex rounded-full bg-white text-2xl text-black font-bold sm:text-base py-3 px-4  sm:px-3 sm:py-2">
              Fazer proposta
              <div className="bg-neutral-950 rounded-[101px] justify-center items-center gap-2 flex p-4 lg:p3 sm:p2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </div>
            </button>
          </div>
          <h1 className="text-9xl lg:text-8xl sm:text-5xl font-black text-gray-500">
            Product designer
          </h1>

          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  );
}
