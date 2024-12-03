import React, { useState } from "react";
import logo from "../assets/aloklogo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

function NavbarMin() {
  const [visible, setVisible] = useState(false);
  const [clickVisible, setClickVisible] = useState(false);
  const [text, setText] = useState("Home");

  const handleClick = (newText) => {
    setText(newText);
    setClickVisible(true);

    // Hide menu and overlay after 1.5 seconds
    setTimeout(() => {
      setClickVisible(false);
      setVisible(false);
    }, 1500);
  };

  return (
    <div className="w-full h-[9vh] flex justify-between items-center px-10 relative">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="w-20"
      >
        <img src={logo} alt="Logo" />
      </motion.div>

      {/* Menu Button */}
      <motion.div
        onClick={() => setVisible(true)}
        className="cursor-pointer hover:rotate-90 transition-transform"
      >
        <i className="ri-menu-line text-2xl"></i>
      </motion.div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0.7, scale: 0, x: 700, y: -300 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0.7, scale: 0, x: 700, y: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-screen p-10 absolute z-40 -top-7 right-0 bg-zinc-800 flex justify-center"
          >
            <div className="w-[50%]"></div>
            <div className="w-[50%]">
              {/* Close Button */}
              <div onClick={() => setVisible(false)} className="mt-10 ml-[40vw] w-fit hover:rotate-90 transition-transform">
                <i className="ri-close-line text-5xl hover:text-red-400  cursor-pointer "></i>
              </div>

              {/* Navigation Links */}
              <motion.div className="flex flex-col mt-10 gap-5">
                {["HOME", "ABOUT", "SKILLS", "PROJECTS"].map((item, index) => (
                  <Link
                    key={index}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    onClick={() => handleClick(item.toUpperCase())}
                    className="cursor-pointer hover:text-blue-300 text-6xl font-semibold hover:border-b-2 w-fit h-16 pb-2 overflow-hidden"
                  >
                    <AnimatePresence>
                    <motion.div
                    initial={{opacity:0, y:100}}
                    exit={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    
              
            transition={{ duration: 0.5, ease: "easeInOut", delay:0.5 }}

                    >{item}</motion.div>
                    </AnimatePresence>
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click Overlay */}
      <AnimatePresence>
        {clickVisible && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: -11 }}
            exit={{ y: "-110%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-screen h-screen bg-[#183153] absolute z-50 top-0 left-0 flex justify-center items-center"
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
    </div>
  );
}

export default NavbarMin;
