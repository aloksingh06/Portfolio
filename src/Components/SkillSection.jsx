import React, { useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion";
import Hover from "./Hover";

function SkillSection() {
  const skillData = [
    { icon: html, name: "HTML", progress: 88 },
    { icon: css, name: "CSS", progress: 86 },
    { icon: js, name: "JAVASCRIPT", progress: 68 },
    { icon: react, name: "REACT", progress: 78 },
    { icon: tailwind, name: "TAILWIND", progress: 78 },
    { icon: tailwind, name: "TAILWIND", progress: 78 },
    { icon: tailwind, name: "TAILWIND", progress: 78 },
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
    }, 15);
  };

  return (
    <div id="skills" className="w-full h-screen  p-20 bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]">
      <h1 className="text-center text-5xl font-semibold text-white">My Skill</h1>

      <div className="flex gap-10 w-[80%] m-auto justify-center pt-20 shrink-0 flex-wrap">
        {/* Skills */}
        {skillData.map((val, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-center"
          >
            {/* Parent */}
            <motion.div className="w-48 h-48 flex flex-col justify-center items-center rounded-full group-hover:shadow-[1px_6px_20px_-1px_rgba(0,180,216,0.4)]">
              <motion.div
                onHoverStart={() => count(idx, val.progress)} // Trigger count on hover
                className="inner w-36 h-36 bg-[rgba(255,255,255,0.2)] shadow-inner flex justify-center items-center rounded-full relative"
              >
                <motion.img
                  src={val.icon}
                  alt={val.name}
                  className="w-[70%] opacity-100 group-hover:blur-[3px]"
                />
                <div className="text-black font-semibold text-xl w-10 inline-block opacity-0 group-hover:opacity-100 absolute">
                  {progressCounts[idx]}%
                  <div className="absolute -top-[83px] -left-[80px] transform ">
                    <Hover value={val.progress} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;


