import React from "react";
import logo from "../assets/aloklogo.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function NavbarMin() {
  return (
    <div className="w-full h-[9vh] flex justify-between items-center px-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="w-20"
      >
        <img src={logo} alt="" />
      </motion.div>
      <motion.div className="hover:rotate-90">
        <i class="ri-menu-line text-2xl"></i>
      </motion.div>

      <div className="w-[90%] h-screen absolute z-40 -top-3 right-0 bg-red-500 flex justify-center ">
        <div className="w-[50%]"></div>
        <div className="w-[50%] ">
            <div>
                
            </div>
          <div className="flex flex-col">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            Projects
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMin;
