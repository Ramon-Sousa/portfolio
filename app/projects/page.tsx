import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import CaseList from "@/app/(home)/components/ui/CaseList";
import { ProjectsPageContent } from "./ProjectsPageContent";

export default async function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <ProjectsPageContent />
        <div className="container mb-8 sm:mb-28">
          <CaseList />
        </div>
        <Footer />
      </div>
    </div>
  );
}
