import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CaseList from "@/app/(home)/components/ui/CaseList";

export default async function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <Link
          href="/"
          className="container flex gap-2 pt-8 text-gray-800 dark:text-gray-200"
        >
          <ArrowLeft /> Voltar
        </Link>
        <div className="container py-8">
          <div className="text-4xl sm:text-4xl lg:text-6xl font-light pb-12text-gray-800 dark:text-gray-200">
            Cases{" "}
            <span className="text-4xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-gray-600 to-gray-950  dark:from-gray-50 from-10% dark:to-gray-400 to-90% text-transparent bg-clip-text font-serif font-normal italic text-nowrap">
              selecionados
            </span>
          </div>
        </div>

        <div className="container mb-8 sm:mb-28">
          <CaseList />
        </div>
        <Footer />
      </div>
    </div>
  );
}
