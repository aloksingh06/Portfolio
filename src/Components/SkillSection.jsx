import React, { useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import Gsap from "../assets/Gsap.png";
import redux from "../assets/redux.png";
import background from "../assets/project/detail-background.png";

import framer from "../assets/framer.webp";
import { motion } from "framer-motion";
import Hover from "./Hover";
import round from "../assets/Xcqp.gif";
import { div } from "framer-motion/client";

function SkillSection() {
  const skillData = [
    { icon: html, name: "HTML", progress: 80 },
    { icon: css, name: "CSS", progress: 77 },
    { icon: js, name: "JAVASCRIPT", progress: 58 },
    { icon: react, name: "REACT", progress: 72 },
    { icon: tailwind, name: "TAILWIND", progress: 76 },
    { icon: framer, name: "FRAMER", progress: 68 },
    { icon: Gsap, name: "GSAP", progress: 58 },
  ];

  // Initialize state for progress values
  const [progressCounts, setProgressCounts] = useState(
    skillData.map(() => 0) // Initialize all counts to 0
  );

  const count = (index, targetValue) => {
    let count = 0;

    const interval = setInterval(() => {
      count++;
      setProgressCounts((prev) => {
        const updatedCounts = [...prev];
        updatedCounts[index] = count; // Update specific skill's count
        return updatedCounts;
      });

      if (count === targetValue) {
        clearInterval(interval); // Stop when target is reached
      }
    }, 12);
  };

  return (
    <div
    
      id="skills"
      className="w-full h-full z-10 p-20 bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]"
    >

   {/* element */}
   
   <div style={{
              // backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "20px",
              
            }}
            className=" flex flex-col  items-center p-7 z-50 bg-opacity-90">

   <h1 className="text-center text-7xl font-semibold text-white">Skills</h1>
      <p className="text-center w-[70%] mt-8 text-blue-200 m-auto">
        The skills section highlights my technical expertise and the tools,
        technologies, and frameworks I am proficient in. It reflects my ability
        to create innovative solutions and impactful applications, showcasing my
        core competencies and professional capabilities.
      </p>
      <div className="flex gap-10 w-[80%] m-auto justify-center pt-20 pb-10 shrink-0 flex-wrap">
        {/* Skills */}
        {skillData.map((val, idx) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            key={idx}
            className="group relative z-10 flex flex-col items-center justify-center relative"
          >
            {/* Parent */}
            <motion.div
              className="w-48 h-48 flex flex-col justify-center items-center rounded-full 
    transition-transform duration-500 ease-in-out  
    group-hover:shadow-[0px_0px_10px_3px_rgba(0,180,216,0.0)]"
            >
              <motion.div
                onHoverStart={() => count(idx, val.progress)} // Trigger count on hover
                className="inner w-36 h-36 bg-[rgba(255,255,255,0.2)] shadow-inner flex justify-center items-center rounded-full relative group-hover:bg-[rgba(255,255,255,0.2)]"
              >
                <motion.img
                  src={val.icon}
                  alt={val.name}
                  className="w-[70%] opacity-100 transition-all duration-1000 ease-in-out group-hover:opacity-0 "
                />
                <div className="skillText  text-white   font-semibold text-3xl w-10 inline-block opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out absolute">
                  {progressCounts[idx]}%
                  <div className="absolute -top-[83px] -left-[80px] z-30 transform ">
                    <Hover value={val.progress} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="text-center  mt-3 absolute z-50 top-[105%] font-semibold opacity-0 translate-y-[-50px] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <h1>{val.name}</h1>
            </div>
          </motion.div>
        ))}
      </div>
   </div>
   


     
    </div>
  );
}

export default SkillSection;
