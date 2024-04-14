import React from "react";

export default function HeroSection() {
  return (
    <section className="h-auto py-40 w-screen flex items-center justify-center">
      <div className="container">
        <div className=" text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-9xl font-black">Ramon Sousa</h1> 
            <button className="h-full rounded-full ml-4 bg-white px-8  text-black font-bold py-4 ">
              Fazer proposta
            </button>
          </div>
          <h1 className="text-9xl font-black text-gray-500">Product designer</h1>

          <div className="mt-8">
          </div>
        </div>
      </div>
    </section>
  );
}
