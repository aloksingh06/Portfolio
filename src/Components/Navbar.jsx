import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = ({ opacity }) => {
  const [sequential, setSequential] = useState(false);
  const [clickVisible, setClickVisible] = useState(false);
  const [text, settext] = useState("Home")

  const handleClick = (newtext) => {

    settext(newtext)
    setClickVisible(true);

    // Clear any existing timeout to prevent overlapping timers
    setTimeout(() => {
      setClickVisible(false);
    }, 1500);
  };

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
      style={{ opacity }}
      className="relative w-full h-[9vh] bg-[rgb(8,8,24)] mx-auto flex justify-between items-center rounded-full drop-shadow-2xl shadow-blue-200 border-sky-700 border-[0.1px] px-8"
    >
      {sequential && (
        <div className="w-full h-[65%] flex justify-between items-center overflow-hidden origin-left">
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="w-[60%] h-10 flex items-center justify-between"
          >
            <h1 className="logo_font text-3xl w-40">Alok Singh</h1>
            {["Home","About","Skills","Projects"].map((val,idx)=>(
              <Link
              to={val.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={()=>handleClick(val.toUpperCase())}
              delay={1700}
              className="cursor-pointer group hover:text-blue-200 relative "
            >
              <h1>{val}</h1>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            ))}
            
          </motion.div>

          {/* Contact Me Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="button inline-block text-lg px-5 py-1 mr-5 shadow-blue-200 border-sky-700 border-[1px] rounded-full">
        <Link 
              smooth={true}
              duration={500}
              onClick={()=>handleClick("CONTACT")}

              delay={1500}
               to="contact" className="button-text">Contact Me</Link>
      </div>
          </motion.div>
        </div>
      )}

      {/* Overlay Animation */}
      <AnimatePresence>
        {clickVisible && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: -11 }}
            exit={{ y: "-110%" }}
            transition={{ duration:0.5, ease: "easeInOut" }}
            className="w-screen h-screen bg-[#183153] absolute top-0 -left-28 flex justify-center items-center"
          >
            <div className="w-fit px-5 h-40 flex justify-center items-center overflow-hidden">
              <motion.h1
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                exit={{ y: -200 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="hello text-8xl font-semibold text-white"
              >
                {text}
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
