import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import img from "../assets/front_image.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import Gsap from "../assets/Gsap.png";
import redux from "../assets/redux.png";
import framer from "../assets/framer.webp";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

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
  const [anim, setanim] = useState(null);
  //gsap animation
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(); // Ref for the Navbar
  const homeRef = useRef(); // Ref for the entire page
  
  useEffect(() => {
    // GSAP Animation for Navbar Opacity
   const animation = gsap.to(navbarRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: homeRef.current, // Trigger element
        start: "top -30%", 
        end: "top 30%", 
        scrub: true, 
        
      },
    });
    return () => {
      animation.scrollTrigger?.kill(); // Remove the ScrollTrigger instance
      animation.kill(); // Stop GSAP animation
    };
  }, []);
  return (
    <motion.div
    data-scroll 
     data-scroll-speed="2"
    ref={homeRef}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
      onAnimationComplete={() => setsequetial(true)}
      id="home"
      className="page1 w-full h-screen relative bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)] overflow-x-hidden "
    >
      {/* <motion.div initial={{scale:0,opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:2, delay:3.5}} className=" w-40 h-10 fixed top-[62%] left-[40%] z-50 top-0 bg-[#60a5fa] rounded-full absolute top-[55vh] left-[35%] blur-[50px] "></motion.div> */}
      <motion.div
      ref={navbarRef}
        
        className="w-full fixed  top-3  z-40"
      >
        <Navbar />
      </motion.div>

      {sequetial && (
        <div className=" flex">
          <div className="pt-[32vh] ml-40 w-[45%]">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={() => setanim(2)}
                className="text-3xl font-semibold text-zinc-400 origin-left"
              >
                Hello I'm{" "}
              </motion.h1>
            </div>

           
           <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: 100, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="name text-7xl font-semibold mt-1 origin-left"
        

              >
                Alok Singh
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                className=" text-6xl font-semibold mt-3 pb-3 text-blue-400 origin-left "
                initial={{ y: 100, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {" "}
                Frontend <span>{text}</span>|
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="p-3 mt-5 border-l-2 border-blue-500 text-zinc-400"
              >
                <motion.h1
                  initial={{ x: -600 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  {" "}
                  I love transforming designs into interactive and responsive
                  web experiences. I specialize in building user-friendly
                  interfaces using modern technologies
                </motion.h1>
              </motion.div>
            </div>
            <div className="overflow-hidden mt-8">
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className=" "
              >
                <Button data={"Download Resume"} />
              </motion.div>
            </div>
          </div>
          <div className="w-[40%] h-screen flex justify-center items-center ml-40  ">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
              className="front_image w-[65%] "
              src={img}
              alt=""
            />
          </div>
        </div>
      )}

      <motion.img
        initial={{ y: 450, x: -1100, scale: 2, opacity: 0 }}
        animate={{ y: [450, 300, 0], x: [-1100, 300, 0], scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[33%] right-[22%]"
        src={html}
        alt=""
      />
      <motion.img
        initial={{ y: -100, x: -1500, scale: 2, opacity: 0 }}
        animate={{
          y: [-100, -200, 0],
          x: [-1500, 400, 0],
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[65%] right-[15%]"
        src={css}
        alt=""
      />
      <motion.img
        initial={{ y: -300, x: -800, scale: 2, opacity: 0 }}
        animate={{ y: [-300, 300, 0], x: [-800, 400, 0], scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[52%] right-[20%]"
        src={js}
        alt=""
      />
      <motion.img
        initial={{ y: -300, x: 400, scale: 3, opacity: 0 }}
        animate={{
          y: [-300, -100, 0],
          x: [400, -400, 0],
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[44%] right-[23%]"
        src={redux}
        alt=""
      />

      <motion.img
        initial={{ y: 400, x: 400, scale: 2.5, opacity: 0 }}
        animate={{
          y: [400, -100, 0],
          x: [400, -300, 0],
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-12 absolute top-[55%] right-[10%]"
        src={Gsap}
        alt=""
      />
      <motion.img
        initial={{ y: -300, x: -600, scale: 3, opacity: 0 }}
        animate={{
          y: [-300, 350, 0],
          x: [-600, -200, 0],
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[65%] right-[25%]"
        src={framer}
        alt=""
      />
      <motion.img
        initial={{ y: -300, x: 400, scale: 3, opacity: 0 }}
        animate={{
          y: [-300, -100, 0],
          x: [400, -400, 0],
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[55%] right-[30%]"
        src={tailwind}
        alt=""
      />
      <motion.img
        initial={{ y: 200, x: -900, opacity: 0 }}
        animate={{ y: [200, -50, 0], x: [-900, 400, 0], opacity: 1 }}
        transition={{ duration: 2, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-14 absolute top-[40%] right-[28%]"
        src={react}
        alt=""
      />
    </motion.div>
  );
}

export default Home;
