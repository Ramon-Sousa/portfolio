import React from "react";
import Navbar from "../_components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import Hobbies from "./components/Hobbies";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Roles from "./components/Roles";
import Brands from "./components/Brands";
import Footer from "../_components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Cursor from "./components/Cursor";

export default function page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
      <SpeedInsights/>
      <Cursor/>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Description/>
        <Hobbies/>
        <Projects/>
        <Brands/>
        <Footer/>
      </div>
    </div>
  );
}
