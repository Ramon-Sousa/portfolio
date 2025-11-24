"use client";
import React from "react";
import { useLanguage } from "@/app/_context/LanguageContext";

export default function Services() {
  const { dict } = useLanguage();
  return (
    <div className="hidden sm:grid grid-cols-3 sm:grid-cols-6 text-center align-middle text-gray-800 dark:text-gray-300 font-light text-sm sm:text-base">
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900 border-l-0">
        {dict.services.interaction}
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        {dict.services.research}
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        {dict.services.stakeholder}
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        {dict.services.data}
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        {dict.services.accessibility}
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900 border-r-0">
        {dict.services.system}
      </span> 
    </div>
  );
}
