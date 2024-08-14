import React from "react";

export default function HeroSection() {
  return (
    <section
      className="h-auto py-20 sm:py-32 lg:py-40 w-screen flex items-center justify-center"
      id="HeroSection"
    >
      <div className="container mx-auto">
        <div className="flex-col justify-end inline-flex">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light">
          Construindo produtos,
          </h1>
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-light">
          interações & <span className="text-4xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-normal italic"> experiências</span>
          </h2>
        </div>
        <div className="pt-10">
        <div className="w-full flex-col justify-end items-end inline-flex">
            <div className="text-white text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">Ramon Sousa</div>
            <div className="text-slate-500 text-lg sm:text-xl lg:text-2xl font-light tracking-wide">Designer de produtos</div>
        </div>
          </div>
        {/* <img src="/assets/stamp.png" className="w-40 right-96 top-40 absolute"/> */}
      </div>
    </section>
  );
}
