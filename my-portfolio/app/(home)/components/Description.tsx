import React from "react";

export default function Description() {
  return (
    <section className="mx-auto px-4 pb-2 sm:px-6 sm:pb-4 lg:px-8 lg:pb-40">
      <div className="mx-auto sm:pb-12 lg:pb-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* <div className="text-slate-200 text-[80px] font-black ">
            Sobre mim
          </div> */}
          <div className="text-center text-gray-300 text-3xl leading-10 ">
            Atuei com equipes multifuncionais, criando recursos e documentações
            para otimizar processos de Discovery e Delivery. Apaixonado por
            resolver problemas, utilizo design e programação para colocar em
            prática minhas ideias e ajudar pessoas. Hoje atuo como Product
            Designer, porém tive experiência como Desenvolvedor Front-End e
            Web. Nasci e cresci em Franca, uma cidade no interior de São Paulo,
            com um sotaque extremamente mineiro. 
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[479.29px] h-[104px] p-8 ] rounded-2xl border bg-zinc-950 border-gray-800 backdrop-blur-[14px] justify-center items-center gap-8 inline-flex">
          <div className="text-neutral-100 text-base font-semibold  leading-relaxed">
            Acompanhe minhas redes
          </div>
          <svg
            width="4"
            height="44"
            viewBox="0 0 4 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.04688 2L2.04687 42"
              stroke="#20252A"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

          <div className="justify-center items-center gap-6 flex">
          <a
              className="p-3 border-2 rounded-lg border-slate-100 relative"
              href="https://www.linkedin.com/in/ramon-sousa-pereira/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                fill="#EFF4F6"
                viewBox="0 0 50 50"
              >
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
              </svg>
            </a>
            
            <a
              className="p-3 border-2 rounded-lg border-slate-100 relative"
              href="https://github.com/Ramon-Sousa"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                fill="#EFF4F6"
                viewBox="0 0 50 50"
              >
                <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
              </svg>
            </a>
            
            {/* <a className="p-3 border-2 rounded-lg border-slate-100 relative" href="https://github.com/Ramon-Sousa" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                fill="#EFF4F6"
                viewBox="0 0 30 30"
              >
                <path d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
