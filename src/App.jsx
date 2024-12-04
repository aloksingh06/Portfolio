import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import AboutPage from "./Components/AboutPage";
import SkillSection from "./Components/SkillSection";
import ProjectSection from "./Components/ProjectSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "./Components/AllProjects";
import LocomotiveScroll from 'locomotive-scroll';

function App() {


const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="main text-white w-full h-full relative bg-[rgb(17,62,132)] overflow-x-hidden">
      {loading ? (
        <div className="bg-[rgb(17,62,132)] w-full h-screen">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 2 }}
            className="w-full h-screen bg-[rgb(24,49,83)] fixed top-0 left-0 z-50 flex flex-col justify-center items-center"
          >
            <div className="w-fit h-48 flex justify-center items-center overflow-hidden">
              <motion.h1
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hello text-8xl font-semibold"
              >
                Discover my work.
              </motion.h1>
            </div>
          </motion.div>
        </div>
      ) : (
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutPage />
              <SkillSection />
              <ProjectSection />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/allprojects" element={<AllProjects />} />
        </Routes>
      
      )}
    </div>
  );
}

export default App;
