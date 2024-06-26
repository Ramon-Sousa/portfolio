import React from "react";

export default function Services() {
  return (
    <div>
      <div className="sm:items-center min-h-40 paddin sm:justify-between">
        <div className="mt-4 sm:justify-between sm:mt-0 flex justify-stretch text-center">
          <div className="py-6 px-6 border w-full border-gray-900 border-l-0 text-gray-300">UI Design</div>
          <div className="py-6 px-6 border w-full border-gray-900 text-gray-300">Research</div>
          <div className="py-6 px-6 border w-full border-gray-900 text-gray-300">Web Design</div>
          <div className="py-6 px-6 border w-full border-gray-900 text-gray-300">Design Tokens</div>
          <div className="py-6 px-6 border w-full border-gray-900 border-r-0 text-gray-300">Prototyping</div>
        </div>
      </div>
    </div>
  );
}
