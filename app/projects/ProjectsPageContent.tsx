"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/_context/LanguageContext";

export function ProjectsPageContent() {
  const { dict } = useLanguage();

  return (
    <>
      <Link
        href="/"
        className="container flex gap-2 pt-8 text-gray-800 dark:text-gray-200"
      >
        <ArrowLeft /> {dict.projects.goBack || "Go back"}
      </Link>
      <div className="container py-8">
        <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
          {dict.projects.selected}
        </div>
      </div>
    </>
  );
}
