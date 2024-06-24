"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function About() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Sobre mim <br />
              <span className="md:text-[6rem] text-9xl font-black mt-1 leading-none">
                LoremIpsum
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
