import React from "react";
export default function Cta() {
  return (
    <div className="text-center px-4 py-2 bg-gray-900 dark:bg-gray-200 w-full text-gray-200 dark:text-gray-800 gap-2">
      Explore o progresso deste projeto no GitHub.{" "}
      <a
        href="https://github.com/Ramon-Sousa/portfolio"
        className="underline font-bold"
        target="blank"
      >
        Ver Github
      </a>
    </div>
  );
}
