import React from "react";
export default function Services() {
  return (
    <div className=" grid grid-cols-3 sm:grid-cols-6 text-center align-middle text-gray-800 dark:text-gray-300 font-normal text-sm sm:text-base">
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900 border-l-0">
        Interaction Design
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        User Research
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        Stakeholder Management
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        Data-Driven Design
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900">
        Accessibility Specs (WCAG)
      </span>
      <span className="py-6 px-6 border w-full border-gray-200 dark:border-gray-900 border-r-0">
        Design System
      </span> 
    </div>
  );
}
