
import React from "react";
import Footer from "../(home)/components/Footer";
import Navbar from "../(home)/components/Navbar";

export default function page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <div className="container py-16">
        <span className="text-slate-200 text-[80px] font-black leading-snug  bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text">
                Projetos
              </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="grid grid-cols-3 py-10 gap-4">
          {/* const MovieList = ({ page, results }: MoviesType) => {
  return (
          {results.map((case) => (
          <div className="hover:animate-background rounded-[32px] bg-zinc-950 border-gray-900 p-4 sm:p-4 shadow-xl border">
                <img src={`/assets/${case.backdrop_path}`} alt={movie.original_title} className="mx-auto rounded-2xl object-cover w-full object-left-top"/>
                

                <div className="py-4">
                <time className="block text-xs text-gray-500">
                  {" "}
                  10th Oct 2022{" "}
                </time>
                <a href="/cases">
                  <h3 className="mt-0.5 text-xl font-medium text-gray-300">
                  {case.original_title}
                  </h3>
                </a>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Label Badge
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Double Diamond
                  </span>
                </div>
                </div>
            </div>
            ))}
                </>
  )
} */}
            <div className="hover:animate-background rounded-[32px] bg-zinc-950 border-gray-900 p-4 sm:p-4 shadow-xl border">
                <img src="/assets/test-cover.webp" alt="" className="mx-auto rounded-2xl object-cover w-full object-left-top"/>
                <div className="py-4">
                <time className="block text-xs text-gray-500">
                  {" "}
                  10th Oct 2022{" "}
                </time>
                <a href="/cases">
                  <h3 className="mt-0.5 text-xl font-medium text-gray-300">
                    How to center an element using JavaScript and jQuery
                  </h3>
                </a>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Label Badge
                  </span>

                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Double Diamond
                  </span>
                </div>
                </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
