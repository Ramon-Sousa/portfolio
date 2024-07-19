import React from "react";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import { getProject } from "../../_services/notion";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export default async function page({params}: {params: {slug:string}}) {
  const project = await getProject(params.slug);
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <div className="container py-8">
          <div className="">
            <h1 className="text-slate-200 text-justify text-3xl font-black">
              {project.title}
            </h1>
          </div>
     <ReactMarkdown>
    {project.content}
     </ReactMarkdown>
         
        </div>
        <Footer />
      </div>
    </div>
  );
}
