import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Hobbies from "../(home)/components/Hobbies";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-40 text-gray-800 dark:text-gray-200" id="about">
          {/* <Link href="/" className="container flex gap-2 pt-8">
            <ArrowLeft /> Voltar
          </Link> */}

          <div className="sm:container mx-auto text-center gap-4">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
            Sobre{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-normal italic text-nowrap">
              mim
            </span>
          </div>
            <p className="text-gray-500 dark:text-gray-400 text-xl font-light pb-8 sm:text-3xl leading-8 sm:leading-10">
              Product Designer apaixonado por solucionar problemas utilizando soluções
              digitais. Atuei em equipes multidisciplinares, usando pesquisa e dados para criar produtos
              intuitivos e impactantes.
              <br />
              <br /> Minha experiência em desenvolvimento front-end e web design
              me permite unir o útil ao agradável, garantindo que minhas ideias
              sejam visualmente atraentes e tecnicamente viável. Nasci e cresci
              em Franca, uma cidade no interior de São Paulo, com um sotaque
              extremamente mineiro.
            </p>
          </div>
          <div className="sm:container grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-6 pt-20 pb-16">
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-900 md:h-80">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-110 saturate-50 hover:saturate-100 duration-700"
                src="/assets/img-portfolio-02.png"
                alt=""
              />
            </div>
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-900 md:col-span-2 md:h-80">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-110 saturate-50 hover:saturate-100 duration-700"
                src="/assets/img-portfolio-04.png"
                alt=""
              />
            </div>
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-900 md:col-span-2 md:h-80">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-110 saturate-50 hover:saturate-100 duration-700"
                src="/assets/img-portfolio-03.png"
                alt=""
              />
            </div>
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-900 md:h-80">
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition group-hover:scale-110 saturate-50 hover:saturate-100 duration-700"
                src="/assets/img-portfolio-01.png"
                alt=""
              />
            </div>
          </div>

          {/* <div className="flex justify-center mt-8">
        <div className="w-full sm:w-[479.29px] h-[104px] p-8 rounded-2xl border bg-zinc-950 border-gray-900 backdrop-blur-[14px] flex justify-center items-center gap-8">
          <div className="text-neutral-100 text-base font-semibold leading-relaxed">
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
              d="M2.04688 2L2.04687 40"
              stroke="#111827"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex gap-6">
            <a
              className="p-3 border-2 rounded-lg border-slate-100"
              href="https://www.linkedin.com/in/ramon-sousa-pereira/"
              target="_blank"
              rel="noopener noreferrer"
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
              className="p-3 border-2 rounded-lg border-slate-100"
              href="https://github.com/Ramon-Sousa"
              target="_blank"
              rel="noopener noreferrer"
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
          </div>
        </div>
      </div> */}
        </div>
      <Hobbies/>
      </div>
      <Footer />
    </div>
  );
}
