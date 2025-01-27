import React from "react";
export default async function Experience() {
  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-24 sm:py-12 lg:py-36 gap-8 lg:gap-20">
      <div className="items-center lg:items-start text-center lg:text-left w-full col-span-1">
        <div className="text-4xl lg:text-6xl font-light pb-4 text-gray-800 dark:text-gray-200">
          Experience{" "}
          {/* <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-black italic text-nowrap">
              {" "}
              profissional
            </span> */}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-base font-light pb-8">
          Product Designer with a strong technical background in front-end
          development, enabling me to craft efficient solutions and foster
          seamless integration between design and development. I have experience
          leading discovery processes, creating high-fidelity prototypes, and
          optimizing products with a focus on business metrics and user
          experience.
        </div>
        <div className="flex justify-start gap-2 text-sm font-light text-gray-800 dark:text-gray-200 ">
          <span className="rounded-full  bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2">
            {" "}
            4+ years of experience{" "}
          </span>
          {/* <span className="rounded-full  bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2">
            {" "}
            16+{" "}
          </span> */}
          <span className="rounded-full  bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2">
            {" "}
            2000+ Coffee cups consumed (This month){" "}
          </span>
        </div>
      </div>
      <div className="gap-4 w-full col-span-4">
        <div>
          {/* Suflex */}
          <div className="h-28 px-4 py-2 border-b border-gray-200 dark:border-gray-900 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-gray-700 dark:text-gray-200 text-3xl font-light">
                Suflex
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base font-light">
              Sept. 2023 - Present | Product Designer
              </div>
            </div>
          </div>
          {/* Diwe */}
          <div className="h-28 px-4 py-2 border-b border-gray-200 dark:border-gray-900 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-gray-700 dark:text-gray-200 text-3xl font-light">
                Diwe
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base font-light">
              July 2021 – July 2023 | UX/UI Designer → Product Designer
              </div>
            </div>
          </div>
          {/* ibSystem */}
          <div className="h-28 px-4 py-2 border-b border-gray-200 dark:border-gray-900 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-gray-700 dark:text-gray-200 text-3xl font-light">
                ibSystem
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base font-light">
              July 2020 – April 2021 | Web Developer → Front-End Developer / UI Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
