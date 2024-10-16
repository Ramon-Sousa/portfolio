import { GitMerge } from "lucide-react";
import React from "react";

export default function Cta() {
  return (
    <div className="text-center px-4 py-2 bg-gray-900 dark:bg-gray-200 w-full text-gray-200 dark:text-gray-800 gap-2">
      {/* <span className="flex gap-2 bg-slate-950 rounded-full px-2 text-xs text-white uppercase items-center justify-center leading-loose">
      BUILDING
      </span>{" "} */}
      Explore o progresso deste portfólio no repositório do GitHub.{" "}
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
