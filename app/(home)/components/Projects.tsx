import React from "react";
import { MoveDownLeft } from "lucide-react";
import CaseList from "./ui/CaseList";
import { ProjectsTitle } from "./ProjectsTitle";

export default async function Projects() {
  return (
    <section className=" py-8 sm:px-8 lg:py-32">
      <div className="container">
        <div className="flex justify-between pb-6 sm:pb-14">
          <ProjectsTitle />
          <MoveDownLeft size={64} color="#1f2937" strokeWidth={1} />
        </div>
        <CaseList/>
      </div>
    </section>
  );
}
