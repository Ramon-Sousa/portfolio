import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import { About } from "./components/About";
import Hobbies from "./components/Hobbies";

export default function page() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <HeroSection />
        <Services />
        <About />
        <Hobbies/>
      </div>
    </div>
  );
}
