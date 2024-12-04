import React, { useEffect, useState } from "react";
import bg from "../assets/bg1.jpg";
import aboutImage from "../assets/aboutImage.png";
import "remixicon/fonts/remixicon.css";
import { div, h1 } from "framer-motion/client";
import { easeInOut, motion } from "framer-motion";
import myimg from "../assets/my-img.jpeg"
import Button from "./Button";

function AboutPage() {
  const data = [
    { image: "ri-phone-line", detail: "+918839120205" },
    { image: "ri-map-pin-line", detail: "Raipur, Chhattisgarh" },
    { image: "ri-mail-line", detail: "aloksingh6768@gmail.com" },
  ];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to track mouse position
  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width - 0.5) * 20; // Adjust intensity (20)
    const y = ((event.clientY - top) / height - 0.5) * -20; // Adjust intensity (-20)
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 }); // Reset on mouse leave
  };



  return (
    <div
      id="about"
      className="bg1 w-full  h-screen bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)] relative pt-0  flex justify-center"
    
    >
     <div 
    //  style={{
    //   backgroundImage: `url(${bg})`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   height: "100%",
    //   width: "99%",
    //   borderRadius:"20px",
    //   boxShadow:"5px"
      
    //  }}
      className="z-10">

     {/* <div className="w-[35vw] rotate-45 h-40 bg-gradient-to-tl to-[#60a5fa] from-[#d1495b] rounded-full absolute -z-99 bottom-1 right-5 blur-[120px] "></div> */}

{/* heading */}

<motion.div initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: easeInOut }}
    viewport={{once:true}} className=" text-6xl font-semibold text-center font-semibol overflow-hidden">
  
    <h1>About Me</h1>


  {/* <div className="flex overflow-hidden ">
    <motion.h1
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      viewport={{once:true}}
    >
      Me
    </motion.h1>
    <motion.i
      initial={{ y: -100, x: -50, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      viewport={{once:true}}
      class="ri-arrow-right-down-line p-4 text-[#00b4d8]"
    ></motion.i>
  </div> */}
</motion.div>

<div className="w-full flex mt-20 ">
  {/* left side content */}
  <div
      id="about"
      className="bg1 w-[50%]   h-[70vh] relative flex justify-center"
      
    >
      <div className="relative w-[100%]  flex justify-center items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px", // Adds 3D perspective
        }}
      >
        <motion.img
          initial={{ opacity: 0, scale:0.5 }}
          whileInView={{ opacity: 1, scale:1 }}
          animate={{
            rotateX: mousePosition.y, // Rotate along X-axis based on Y
            rotateY: mousePosition.x, // Rotate along Y-axis based on X
          }}
          transition={{
            duration: 1, // Fast response for hover effect
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="w-[50%] ml-10 rounded-lg"
          src={myimg}
          alt="Profile"
        />
      </div>
    </div>
  {/* right side content */}
  <div className="w-[40%] h-[70vh]  px-16   ">
   <div className="overflow-hidden pt-16">
   <motion.h1 
     initial={{opacity:0, x:-200}}
     whileInView={{opacity:1, x:0}}
     transition={{duration:1,delay:0}}
     viewport={{once:true}}
   className="text-lg border-l-2 border-[#00b4d8] pl-5  ">
      Hello! I’m Alok Singh, a passionate learner and aspiring web
      developer currently pursuing a B.Tech in Computer Science
      Engineering from Government Engineering College, Raipur.
    </motion.h1>
   </div>
    <div className="overflow-hidden">
    <motion.h1  initial={{opacity:0, x:-200}}
     whileInView={{opacity:1, x:0}}
     transition={{duration:1,delay:0}}
     viewport={{once:true}}
      className="mt-3 text-sm text-white ">
      I’m dedicated to honing my skills in web development and building
      user-friendly, interactive web applications. With a strong interest
      in technology and problem-solving, I aim to contribute innovative
      solutions to the digital world.
    </motion.h1>
    </div>

    <div className="mt-7  flex flex-col gap-5 overflow-hidden">
      {data.map((val, idx) => (
        <motion.div
        initial={{opacity:0, x:100}}
     whileInView={{opacity:1, x:0}}
     transition={{duration:1,delay:0}} 
     viewport={{once:true}}
        className=" flex relative rounded-full flex">
          <i
            className={`${val.image}  text-xl px-2 py-1 inline-block bg-[#00b4d8] rounded-full`}
          ></i>
          <div className="ml-3 my-auto">{val.detail}</div>

          {/* <motion.div className="bg-[#00b4d8] flex justify-center p-3 -left-14 top-9 items-center px-3 pl-5 rounded-md absolute">
                {val.detail}
          </motion.div> */}
        </motion.div>
      ))}
    </div>
  </div>
</div>
     </div>
      
    </div>
  );
}

export default AboutPage;
