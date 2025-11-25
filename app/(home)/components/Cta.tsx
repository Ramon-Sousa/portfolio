"use client";
import React from "react";
import { useLanguage } from "@/app/_context/LanguageContext";

export default function Cta() {
  const { dict } = useLanguage();
  return (
    <div className="text-center px-4 py-2 bg-gray-900 dark:bg-gray-200 w-full text-gray-200 dark:text-gray-800 gap-2">
      {dict.cta.explore}{" "}
      <a
        href="https://github.com/Ramon-Sousa/portfolio"
        className="underline font-bold"
        target="blank"
      >
        {dict.cta.go}
      </a>
    </div>
  );
}
