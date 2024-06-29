import React from "react";

export default function Projects() {
  return (
    <div className="bg-transparent">
      <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto px-4 py-24 sm:px-6 sm:py-12 lg:px-8 lg:py-40 gap-8 lg:gap-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* <div className="text-slate-500 text-sm font-semibold uppercase">
          Portfolio
        </div> */}
          <div className="text-4xl sm:text-4xl lg:text-6xl font-normal pb-4">
          Projetos{" "}
          <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text font-[Piazolla] font-black italic">
            {" "}
            realizados
          </span>
        </div>
          <div className="text-slate-400 text-base font-normal pb-8">
            I craft amazing digital experiences through a selection of sought
            after services and offerings.
          </div>
          <a
            className="flex items-center gap-2 rounded-full bg-white px-4 text-xl text-black font-normal py-3 hover:bg-slate-500"
            href="/projects"
          >
            Ver todos
            <div className="p-2 bg-neutral-950 rounded-full flex justify-center items-center">
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
          </a>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[504px]">
          <a
            className="h-28 px-4 py-2 bg-[url('/assets/dot-grid.png')] rounded-2xl border border-gray-800 flex justify-between items-center hover:bg-[#20252A]"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <svg
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1979 4.95099C25.666 4.70834 25.0881 4.58276 24.5034 4.58276C23.9187 4.58276 23.3408 4.70834 22.8088 4.95099L5.3117 12.9135C4.9494 13.0732 4.64138 13.3349 4.42513 13.6666C4.20888 13.9983 4.09375 14.3857 4.09375 14.7816C4.09375 15.1776 4.20888 15.565 4.42513 15.8967C4.64138 16.2283 4.9494 16.49 5.3117 16.6497L22.8292 24.6327C23.3612 24.8753 23.9391 25.0009 24.5238 25.0009C25.1085 25.0009 25.6864 24.8753 26.2184 24.6327L43.7359 16.6702C44.0982 16.5104 44.4062 16.2488 44.6224 15.9171C44.8387 15.5854 44.9538 15.198 44.9538 14.802C44.9538 14.4061 44.8387 14.0187 44.6224 13.687C44.4062 13.3553 44.0982 13.0937 43.7359 12.9339L26.1979 4.95099Z"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.9193 36.5352L26.1972 45.0285C25.6652 45.2711 25.0873 45.3967 24.5026 45.3967C23.9179 45.3967 23.34 45.2711 22.808 45.0285L4.08594 36.5352"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.9193 26.3269L26.1972 34.8202C25.6652 35.0629 25.0873 35.1885 24.5026 35.1885C23.9179 35.1885 23.34 35.0629 22.808 34.8202L4.08594 26.3269"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <div className="text-neutral-50 text-2xl font-semibold">
                  Suflex
                </div>
                <div className="text-slate-500 text-sm font-bold">2024</div>
              </div>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
                fill="#A0B1BD"
              />
            </svg>
          </a>
          <a
            className="h-28 px-4 py-2 bg-[url('/assets/dot-grid.png')] rounded-2xl border border-gray-800 flex justify-between items-center hover:bg-[#20252A]"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <svg
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1979 4.95099C25.666 4.70834 25.0881 4.58276 24.5034 4.58276C23.9187 4.58276 23.3408 4.70834 22.8088 4.95099L5.3117 12.9135C4.9494 13.0732 4.64138 13.3349 4.42513 13.6666C4.20888 13.9983 4.09375 14.3857 4.09375 14.7816C4.09375 15.1776 4.20888 15.565 4.42513 15.8967C4.64138 16.2283 4.9494 16.49 5.3117 16.6497L22.8292 24.6327C23.3612 24.8753 23.9391 25.0009 24.5238 25.0009C25.1085 25.0009 25.6864 24.8753 26.2184 24.6327L43.7359 16.6702C44.0982 16.5104 44.4062 16.2488 44.6224 15.9171C44.8387 15.5854 44.9538 15.198 44.9538 14.802C44.9538 14.4061 44.8387 14.0187 44.6224 13.687C44.4062 13.3553 44.0982 13.0937 43.7359 12.9339L26.1979 4.95099Z"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.9193 36.5352L26.1972 45.0285C25.6652 45.2711 25.0873 45.3967 24.5026 45.3967C23.9179 45.3967 23.34 45.2711 22.808 45.0285L4.08594 36.5352"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.9193 26.3269L26.1972 34.8202C25.6652 35.0629 25.0873 35.1885 24.5026 35.1885C23.9179 35.1885 23.34 35.0629 22.808 34.8202L4.08594 26.3269"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <div className="text-neutral-50 text-2xl font-semibold">
                  Lorem Ipsum
                </div>
                <div className="text-slate-500 text-sm font-bold">2024</div>
              </div>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
                fill="#A0B1BD"
              />
            </svg>
          </a>
          <a
            className="h-28 px-4 py-2 bg-[url('/assets/dot-grid.png')] rounded-2xl border border-gray-800 flex justify-between items-center hover:bg-[#20252A]"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <svg
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1979 4.95099C25.666 4.70834 25.0881 4.58276 24.5034 4.58276C23.9187 4.58276 23.3408 4.70834 22.8088 4.95099L5.3117 12.9135C4.9494 13.0732 4.64138 13.3349 4.42513 13.6666C4.20888 13.9983 4.09375 14.3857 4.09375 14.7816C4.09375 15.1776 4.20888 15.565 4.42513 15.8967C4.64138 16.2283 4.9494 16.49 5.3117 16.6497L22.8292 24.6327C23.3612 24.8753 23.9391 25.0009 24.5238 25.0009C25.1085 25.0009 25.6864 24.8753 26.2184 24.6327L43.7359 16.6702C44.0982 16.5104 44.4062 16.2488 44.6224 15.9171C44.8387 15.5854 44.9538 15.198 44.9538 14.802C44.9538 14.4061 44.8387 14.0187 44.6224 13.687C44.4062 13.3553 44.0982 13.0937 43.7359 12.9339L26.1979 4.95099Z"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.9193 36.5352L26.1972 45.0285C25.6652 45.2711 25.0873 45.3967 24.5026 45.3967C23.9179 45.3967 23.34 45.2711 22.808 45.0285L4.08594 36.5352"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44.9193 26.3269L26.1972 34.8202C25.6652 35.0629 25.0873 35.1885 24.5026 35.1885C23.9179 35.1885 23.34 35.0629 22.808 34.8202L4.08594 26.3269"
                  stroke="#F7FAFC"
                  strokeWidth="4.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <div className="text-neutral-50 text-2xl font-semibold">
                  Project 3
                </div>
                <div className="text-slate-500 text-sm font-bold">2024</div>
              </div>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
                fill="#A0B1BD"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-stretch py-3 bg-neutral-50 w-full overflow-hidden">
        <div className="flex justify-between items-center w-full overflow-hidden mx-auto px-4 flex-nowrap">
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            +15 projetos
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            Experiência em desenvolvimento
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            +10 clientes atendidos
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            4 anos de epxperiência
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            <svg
              className="ml-2"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 0.5L13.6207 10.8793L24 12.5L13.6207 14.1207L12 24.5L10.3793 14.1207L0 12.5L10.3793 10.8793L12 0.5Z"
                fill="#A0B1BD"
              />
            </svg>
          </div>
          <div className="text-gray-800 text-lg sm:text-2xl font-medium uppercase flex items-center px-2">
            Experiência mobile first
          </div>
          
        </div>
      </div>
    </div>
  );
}

