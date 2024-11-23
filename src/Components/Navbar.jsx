import React, { useState } from "react";
import Button from "./Button";
import { div } from "framer-motion/client";
import { Link } from "react-scroll";
import { easeIn, easeInOut, motion } from "framer-motion";
import { Power4 } from "gsap";

const Navbar = () => {
  
  const [sequetial, setsequetial] = useState(false)

  return (
    <motion.div
      initial={{
        width: "0%",
        opacity:0
      }}
      whileInView={{
        width: "87%",
        opacity:1
      }}
      transition={{duration:.5,delay:.7}}
      viewport={{once:true}}
      onAnimationComplete={()=>setsequetial(true)}
      className="reletive w-[87%] h-[9vh] bg-[rgb(8,8,24)] mx-auto flex justify-between items-center  rounded-full drop-shadow-2xl shadow-blue-200 border-sky-700 border-[0.1px]  px-8"
    >
      {sequetial && (
        <div className="w-full h-[65%]  flex justify-between items-center overflow-hidden origin-left">
          <motion.div
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:.9, ease:"easeInOut"}}
          viewport={{once:true}}
          className="w-[60%] h-10 flex items-center justify-between">
        <h1 className="logo_font text-3xl  w-40">Alok Singh</h1>
        <Link to="home" smooth={true} duration={500} className="">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className="">
          Projects
        </Link>
      </motion.div>
      <motion.div
       initial={{opacity:0, scale:0.3, y:100}}
       animate={{opacity:1, scale:1, y:0}}
       transition={{duration:.8, ease:easeInOut}}
       viewport={{once:true}}
      >
        <Button data={"Contact me"} />
      </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
