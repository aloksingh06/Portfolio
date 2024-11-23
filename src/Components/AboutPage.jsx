import React from "react";
import bg from "../assets/bg1.jpg";
import aboutImage from "../assets/aboutImage.png";
import "remixicon/fonts/remixicon.css";
import { div, h1 } from "framer-motion/client";
import { motion } from "framer-motion";

function AboutPage() {
  
  const data = [
    { image:"ri-phone-line", detail:"+918839120205" },
    { image:"ri-map-pin-line", detail:"Raipur, Chhattisgarh" },
    { image:"ri-mail-line", detail:"aloksingh6768@gmail.com" },

  ]


  return (
    <div id="about" className="bg1 w-full  h-screen bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)] relative px-10 pt-10 overflow-hidden.">
      <div className="w-[35vw] rotate-45 h-40 bg-gradient-to-tl to-[#60a5fa] from-[#d1495b] rounded-full absolute -z-99 bottom-1 right-5 blur-[120px] "></div>

      {/* heading */}

      <div className=" text-8xl font-semibold pt-10 absolute top-7 left-[36vw]">
        <h1>About</h1>
        <div className="flex">
          <h1>Me</h1>
          <i class="ri-arrow-right-down-line p-4 text-[#00b4d8]"></i>
        </div>
      </div>

      <div className="w-full flex h-full ">
        {/* left side content */}
        <div className="abourImage w-[50%]  flex justify-center items-center ">
          <img className="w-[75%]" src={aboutImage} alt="" />
        </div>
        {/* right side content */}
        <div className="w-[40%]  px-10  pt-64  ">
          <h1 className="text-lg border-l-2 border-[#00b4d8] pl-5">
            Hello! I’m Alok Singh, a passionate learner and aspiring web
            developer currently pursuing a B.Tech in Computer Science
            Engineering from Government Engineering College, Raipur.
          </h1>
          <h1 className="mt-3 text-sm text-white ">
            I’m dedicated to honing my skills in web development and building
            user-friendly, interactive web applications. With a strong interest
            in technology and problem-solving, I aim to contribute innovative
            solutions to the digital world.
          </h1>

          <div className="mt-7  flex flex-col gap-5">
            {data.map((val,idx)=>(
              <motion.div className=" flex relative rounded-full flex">
          <i className={`${val.image}  text-xl px-2 py-1 inline-block bg-[#00b4d8] rounded-full`}>
            
          </i>
          <div className="ml-3 my-auto">
                 {val.detail}
            </div>

                {/* <motion.div className="bg-[#00b4d8] flex justify-center p-3 -left-14 top-9 items-center px-3 pl-5 rounded-md absolute">
                      {val.detail}
                </motion.div> */}
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
