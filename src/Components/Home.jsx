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
import { AnimatePresence, easeInOut, motion, useScroll, useTransform } from "framer-motion";
import NavbarMin from "./NavbarMin";
import { div } from "framer-motion/client";

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
  //framer animation
  const homeref = useRef(null)
  const { scrollYProgress,scrollY } = useScroll({
    target: homeref, // Ref of the element to track
    offset: ["start end", "end start"], // Offset defines when scroll starts/ends
  });
  //navbar
  const opacity1 = useTransform(scrollY,[0,200],[1,0])

  //navbarmin
  const opacity2 = useTransform(scrollY,[0,200],[0,1])

  return (
    // main div
    <motion.div
    ref={homeref}
      // data-scroll
      // data-scroll-speed="0"
    
      initial={{ y: "100%", scale:0.6 , x:0 }}
      animate={{ y: 0, scale:1, x:0 }}
      transition={{ duration: 0.9, ease: easeInOut }}
      onAnimationComplete={() => setsequetial(true)}
      id="home"
      className="page1 w-full h-screen relative bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)] overflow-x-hidden "
    >
      {/* <motion.div initial={{scale:0,opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:2, delay:3.5}} className=" w-40 h-10 fixed top-[62%] left-[40%] z-50 top-0 bg-[#60a5fa] rounded-full absolute top-[55vh] left-[35%] blur-[50px] "></motion.div> */}

      <AnimatePresence>

      <motion.div
       exit={{opacity:0}}
       transition={{duration:2, delay:3.5}}
      style={{opacity:opacity1}}
        className="xl:w-[87%] lg:w-[87%] sm:w-full w-full xl:ml-28 lg:ml-20 sm:ml-0 fixed  top-3  z-50"
      >
        <div className="sm:hidden lg:inline xl:inline hidden">

        <Navbar />
        </div>
        <div className="sm:inline lg:hidden xl:hidden inline">
        <NavbarMin />
        </div>
      </motion.div>
      </AnimatePresence>
      

      {/* navbarmin */}
      <AnimatePresence>
      <motion.div
      exit={{opacity:0}}
      transition={{duration:2, delay:3.5}}
      style={{opacity:opacity2}}
        className="w-full fixed  top-3  z-40"
      >
        <NavbarMin />
      </motion.div>

      </AnimatePresence>
      

      {sequetial && (
        <div className=" xl:flex lg:flex sm:flex-row flex-row  ">
          
          <div className="img order-2 animate-logo w-full xl:w-[40%] lg:w-[40%] sm:w-full xl:h-screen lg:h-screen sm:h-64 h-64 flex justify-center items-center xl:ml-40 lg:ml-7  ">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.7, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
              className="front_image xl:w-[65%] lg:w-[65%] sm:w-48 w-32 mt-28 sm:mt-40 lg:mt-10 "
              src={img}
              alt=""
            />
          </div>
          <div className="text order-1 xl:pt-[32vh] lg:pt-[32vh] sm:pt-20 pt-10 xl:ml-40 lg:ml-32 xl:w-[45%] lg:w-[50%] flex-col lg:items-start sm:items-center justify-items-center xl:flex lg:flex sm:flex ">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={() => setanim(2)}
                className="xl:text-[2vw] lg:text-[2vw] sm:text-2xl text-xl font-semibold text-zinc-400 origin-left"
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
                  delay: .8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="name xl:text-7xl lg:text-6xl sm:text-6xl text-5xl font-semibold mt-1 origin-left"
        

              >
                Alok Singh
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                className=" xl:text-6xl lg:text-[4vw] sm:text-5xl text-4xl font-semibold xl:mt-3 lg:mt-0 xl:pb-3 lg:pb-0 sm:pb-4 pb-2 text-blue-400 origin-left "
                initial={{ y: 100, opacity: 0, rotate: 90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
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
                transition={{ duration: 1, delay: 1.2 }}
                className="p-3 mt-5 border-l-2 xl:border-blue-500 lg:border-blue-500 sm:border-blue-500 border-none text-zinc-400 xl:w-full lg:w-full sm:w-[50%] w-[50%] m-auto"
              >
                <motion.h1
                  initial={{ x: -600 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="xl:text-[1vw] lg:text-[1vw] sm:text-[2vw] text-center xl:text-left lg:text-left sm:text-center"
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
                className=" px-3 py-2  "
              >
                <div className="button inline-block text-lg px-5 py-1 xl:mr-5 lg:mr-5 sm:mr-5 mr-0 shadow-blue-200 border-sky-700 border-[1px] rounded-full">
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1Gp3sRaZAMmmWKfkOyXPrD1j_SW55aRIb&export=download" className="button-text">Download Resume</a>
      </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden sm:hidden lg:inline xl:inline 2xl:inline">
      <motion.img
        initial={{ y: 450, x: -1100, scale: 2, opacity: 0 }}
        animate={{ y: [450, 300, 0], x: [-1100, 300, 0], scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[33%] right-[22%]"
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
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[65%] right-[15%]"
        src={css}
        alt=""
      />
      <motion.img
        initial={{ y: -300, x: -800, scale: 2, opacity: 0 }}
        animate={{ y: [-300, 300, 0], x: [-800, 400, 0], scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[52%] right-[20%]"
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
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[5%] absolute top-[44%] right-[23%]"
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
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[55%] right-[10%]"
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
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[65%] right-[25%]"
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
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[55%] right-[30%]"
        src={tailwind}
        alt=""
      />
      <motion.img
        initial={{ y: 200, x: -900, opacity: 0 }}
        animate={{ y: [200, -50, 0], x: [-900, 400, 0], opacity: 1 }}
        transition={{ duration: 2, delay: 1.9, ease: [0.65, 0, 0.35, 1] }}
        className="icon w-[4%] absolute top-[40%] right-[28%]"
        src={react}
        alt=""
      />
      </div>
    </motion.div>
  );
}

export default Home;
