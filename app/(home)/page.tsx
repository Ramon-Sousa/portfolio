import React from "react";
import Navbar from "../_components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import Projects from "./components/Projects";
import Brands from "./components/Brands";
import Footer from "../_components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Cursor from "./components/Cursor";
import Cta from "./components/Cta";
import Experience from "./components/Experience";

export default function page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <SpeedInsights />
        <Cursor />
        <Cta />
        <Navbar />
        <HeroSection />
        <Services />
        <Projects />
        <Brands />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
