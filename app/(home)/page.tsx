import React from "react";
import Navbar from "../_components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import Projects from "./components/Projects";
import Footer from "../_components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Cta from "./components/Cta";
import Experience from "./components/Experience";
import Carrousel from "./components/ui/Carrousel";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-screen-7xl mx-auto">
        <SpeedInsights />
        <Cta />
        <Navbar />
        <HeroSection />
        <Services />
        <Projects />
        <Carrousel />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
