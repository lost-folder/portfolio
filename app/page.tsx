"use client";
import Image from "next/image";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsPage from "./components/projects/Projects";

export default function Home() {
  return (

    <main >
      {/* <Navbar /> */}
      <div className="py-10"> 
        <Hero />
      </div>
      <div>
        <ProjectsPage />
      </div>
      
    </main>
  );
}
