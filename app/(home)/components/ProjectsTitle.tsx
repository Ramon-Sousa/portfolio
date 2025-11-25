"use client";
import React from "react";
import { useLanguage } from "@/app/_context/LanguageContext";

export function ProjectsTitle() {
  const { dict } = useLanguage();
  return (
    <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
      {dict.projects.selected}
    </div>
  );
}
