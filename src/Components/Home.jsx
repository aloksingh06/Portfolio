import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import img from "../assets/front_image.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion } from "framer-motion";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["Programmer", "Developer"];
  const [text, settext] = useState("");
  const [delta, setdelta] = useState(200);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    settext(updateText);

    if (isDeleting) {
      setdelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setisDeleting(true);
      setdelta(period);
    } else if (isDeleting && updateText === "") {
      setisDeleting(false);
      setLoopNum(loopNum + 1);
      setdelta(100);
    }
  };

  const [sequetial, setsequetial] = useState(false);
  const [anim, setanim] = useState(1)

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
      onAnimationComplete={() => setsequetial(true)}
      id="home"
      className="page1 w-full h-screen relative bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]  "
    >
      <div className="w-full absolute top-3 z-40">
        <div className=" absolute top-0 w-40 h-10 bg-[#60a5fa] rounded-full absolute top-[55vh] left-[35%] blur-[50px] "></div>
        <Navbar />  
      </div>

      {sequetial && (
        <div className=" flex">
        <div className="pt-[32vh] ml-40 w-[45%]">
          <div className="overflow-hidden">
            <motion.h1 
            initial={{y:100, opacity:0, rotate:90}}
            animate={{y:0, opacity:1, rotate:0}}
            transition={{duration:1,delay:1, ease:[0.22,1,0.36,1]}}
          
            className="text-3xl font-semibold text-zinc-400 origin-left">Hello I'm </motion.h1>
          </div>
        
            <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{y:100, opacity:0, rotate:90}}
              animate={{y:0, opacity:1, rotate:0}}
              transition={{duration:1,delay:1.3, ease:[0.22,1,0.36,1]}}
            
              className="name text-7xl font-semibold mt-1 origin-left"
            >
              Alok Singh
            </motion.h1>
          </div>
    
      
            <div className="overflow-hidden">
            <motion.h1 
            className=" text-6xl font-semibold mt-3 text-blue-400 origin-left "
            initial={{y:100, opacity:0, rotate:90}}
            animate={{y:0, opacity:1, rotate:0}}
            transition={{duration:1,delay:1.6, ease:[0.22,1,0.36,1]}}
            onAnimationComplete={()=>setanim(4)}
            >
              {" "}
              Frontend <span>{text}</span>|
            </motion.h1>
          </div>
          
          <div className="p-3 mt-5 border-l-2 border-blue-500 text-zinc-400">
            <h1>
              {" "}
              I love transforming designs into interactive and responsive web
              experiences. I specialize in building user-friendly interfaces
              using modern technologies
            </h1>
          </div>
          <div className="mt-8">
            <Button data={"Download Resume"} />
          </div>
        </div>
        <div className="w-[40%] h-screen flex justify-center items-center ml-40  ">
          <img className="front_image w-[65%] " src={img} alt="" />
        </div>
      </div>
      )}
      <img
        className="icon w-14 absolute top-[33%] right-[22%]"
        src={html}
        alt=""
      />
      <img
        className="icon w-14 absolute top-[65%] right-[15%]"
        src={css}
        alt=""
      />
      <img
        className="icon w-14 absolute top-[52%] right-[20%]"
        src={js}
        alt=""
      />
      <img
        className="icon w-14 absolute top-[60%] right-[30%]"
        src={tailwind}
        alt=""
      />
      <img
        className="icon w-14 absolute top-[40%] right-[28%]"
        src={react}
        alt=""
      />
    </motion.div>
  );
}

export default Home;
