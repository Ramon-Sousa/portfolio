"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function About() {
  return (
    <div className="flex flex-col overflow-hidden" id="about">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl text-slate-500 font-semibold">
              Sobre mim <br />
              <span className="text-slate-200 text-[80px] font-black leading-snug  bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text">
                Minha jornada até aqui
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/assets/test-cover.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    
  );
}
