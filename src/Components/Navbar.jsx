import React, { useState } from "react";
import Button from "./Button";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = ({ opacity }) => {
  const [sequential, setSequential] = useState(false);

  return (
    <motion.div
    
      initial={{
        width: "0%",
        opacity: 0,
      }}
      animate={{
        width: "100%",
        opacity: 1,
      }}
      transition={{ duration: 0.5, delay: 0.7 }}
      viewport={{ once: true }}
      onAnimationComplete={() => setSequential(true)}
       // Use inline styles for dynamic opacity
      className="relative w-[100%] h-[9vh] bg-[rgb(8,8,24)] mx-auto flex justify-between items-center rounded-full drop-shadow-2xl shadow-blue-200 border-sky-700 border-[0.1px] px-8"
    >
      {sequential && (
        <div className="w-full h-[65%] flex justify-between items-center overflow-hidden origin-left">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="w-[60%] h-10 flex items-center justify-between"
          >
            <h1 className="logo_font text-3xl w-40">Alok Singh</h1>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">
              Projects
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button data={"Contact me"} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
