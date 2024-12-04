import React, { useEffect, useState } from "react";
import EpicFrame from "../assets/project/project1.png";
import obysImg from "../assets/project/obys agency.png";
import background from "../assets/project/detail-background.png";
import cineImg from "../assets/project/cineverse.png";
import refokusImg from "../assets/project/REFUKUS.png";
import refokusvid from "../assets/project/REFOCUSVID.webm";
import obysvid from "../assets/project/Showreel.mp4";
import exovid from "../assets/project/exovid.mp4";
import exoImg from "../assets/project/exoImg.png";

import dribbleImg from "../assets/project/dribbleImg.png";
import studysyncImg from "../assets/project/studysync.png";
import epicframe from "../assets/videos/epicframe.mp4";
import { AnimatePresence, motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";

function ProjectSection() {
  const data = [
    {
      name: "CINE VERSE",
      description:
        "Epic Frame is a platform showcasing movie, TV show, and actor details, including their filmographies, web series, and roles.",
      image: cineImg,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and TV show details, actors details",
      web: "https://aloksingh06.github.io/EpicFrame/",
      github: "https://github.com/aloksingh06/EpicFrame",
      keyPoint: {
        feature1: "Movie, Web series and TV show details Trailer",
        feature2: "Actors details",
        feature3: "Trailer",
      },
      languages: {
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "AXIOS",
        language4: "INFINITE SCROLL",
        language5: "REDUX",
      },
      row: "1 / span 3", // Grid row
      column: "1 / span 3", // Grid column
      Textrow: "1 / span 3", // Grid row
      Textcolumn: "4 / span 6", // Grid column
    },
    {
      name: "Obys Agency",
      description: "This project is a creative and visually appealing website inspired by the Obys Agency",
      image: obysImg,
      video: obysvid,
      details:
        "This project is a creative and visually appealing website inspired by the Obys Agency, emphasizing advanced animations and seamless user interactions. It showcases my proficiency in frontend development, modern web design principles, and attention to detail.",
      
      web: "https://aloksingh06.github.io/Obys-Agency-clone/",
      github: "https://github.com/aloksingh06/Obys-Agency-clone",
      languages: {
        language1: "HTML",
        language2: "CSS",
        language3: "JAVASCRIPT",
        language4: "GSAP",
        language5: "LOCOMOTIVE",
        language6: "SHERYJS",
      },
      keyPoint: {
        feature1: "Smooth scrolling",
        feature2: "Animations",
        feature2: "Hover animation",
       
      },
      row: "4 / span 3",
      column: "4 / span 3",
      Textrow: "4 / span 3",
      Textcolumn: "1 / span 3",

    },
    {
      name: "Refokus",
      description:
        "This project is a clone of Refokus, a sleek and animation-centric website showcasing smooth transitions and advanced visual effects.",
      image: refokusImg,
      video: refokusvid,
      details:
        "This project is a clone of Refokus, a sleek and animation-centric website showcasing smooth transitions and advanced visual effects. The project highlights my ability to replicate complex designs and implement modern frontend technologies.",
      feature: "Movie and TV show details, actors details",
      web: "https://aloksingh06.github.io/refokus/",
      github: "https://github.com/aloksingh06/refokus",
      languages: {
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "FRAMER MOTION",
        language4: "GSAP",
      },
      keyPoint: {
        feature1: "Smooth scrolling",
        feature2: "Scroll Animation",
        feature2: "Animation",
      },
      row: "7 / span 3",
      column: "1 / span 3",
      Textrow: "7 / span 3",
      Textcolumn: "4 / span 3",
    },

    {
      name: "ExoApe",
      description:
        "This project is a visually dynamic and interactive website inspired by Exoape, emphasizing advanced animations and fluid transitions.",
      image: exoImg,
      video: exovid,
      details:
        "This project is a visually dynamic and interactive website inspired by Exoape, emphasizing advanced animations and fluid transitions. Built with modern web development tools, it showcases my expertise in creating engaging user interfaces, leveraging animation libraries, and implementing seamless navigation. This clone demonstrates my ability to replicate high-quality designs while focusing on performance and user experience.",
  
      web: "https://aloksingh06.github.io/exoape-clone/",
      github: "https://github.com/aloksingh06/exoape-clone",
      languages: {
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "Framer Motion",
        language3: "GSAP",
      },
      keyPoint: {
        feature1: "Smooth scrolling",
        feature2: "Scroll Animation",
        feature2: "Animation",
      },
      row: "10 / span 3",
      column: "3 / span 3",
      Textrow: "10 / span 3",
      Textcolumn: "1 / span 2",
    },
    {
      name: "StudySync",
      description:
        "This project is a comprehensive showcase of my frontend development skills, featuring a visually appealing and user-friendly design. ",
      image: studysyncImg,
      video: epicframe,
      details:
        "This project is a comprehensive showcase of my frontend development skills, featuring a visually appealing and user-friendly design. It highlights my ability to create responsive layouts, implement modern design principles, and ensure seamless user interactions. This website serves as a testament to my proficiency in HTML, CSS, JavaScript, and advanced frontend frameworks, demonstrating a strong focus on both aesthetics and functionality.",
      
      web: "https://aloksingh06.github.io/StudySync-simpleProject/",
      github: "https://github.com/aloksingh06/StudySync-simpleProject",
      languages: {
        language1: "HTML",
        language2: "CSS",
      },
      row: "13 / span 3",
      column: "2 / span 3",
      Textrow: "13 / span 3",
      Textcolumn: "6 / span 2",
    },
  ];

  // State to track which div is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickanim, setclickanim] = useState(null);
  const [clickData, setclickData] = useState(null);

  const handleclick = (data, idx) => {
    setclickData(data);
    setclickanim(idx + 1);
  };




  // useEffect(()=>{
    
  //   return () => {
  //     scroll.destroy();
  //   }
  // })
  return (
    <div 
      id="projects"
      className="w-full h-[255vh] relative bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]"
    >
      
      <h1 className="text-center text-7xl font-semibold pt-10">Projects</h1>
      <h1 className="w-[70%] m-auto text-center text-sm font-semibold pt-10 pb-16 text-blue-200">
        Here are some of the exciting projects I've worked on, showcasing my
        skills in frontend development and web technologies. From crafting
        visually appealing user interfaces to implementing dynamic
        functionality.
      </h1>
    
      <div
        style={{
          gridTemplateColumns: "repeat(6, 1fr)", 
          gridTemplateRows: "repeat(15, 100px)", 
        }}
        className="grid w-[80%] h-screen m-auto gap-6 "
      >
        {data.slice(0,4).map((val, idx) => (
          <>
          <div
            style={{
              gridRow: val.row,
              gridColumn: val.column,
            }}
            key={idx}
            className={`z-10 relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer border-gray-300 bg-[#001131] ${
              hoveredIndex === idx ? "scale-105" : "scale-100"
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleclick(val, idx)}
          >
           <div>
           {hoveredIndex === idx ? (
             <>
                <video
                  src={val.video}
                  autoPlay
                  loop
                  muted
                  className="w-full object-cover"
                  />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
                  <h2 className="text-center text-lg font-bold">{val.name}</h2>
                  <p className="mt-1 text-sm text-center text-blue-200">{val.description}</p>
                </div>
              </>
            ) : (
              <img
              src={val.image}
              alt="Placeholder"
              className="w-full h-full object-cover"
              />
            )}
           </div>
          </div>
          <div style={{
              gridRow: val.Textrow,
              gridColumn: val.Textcolumn,
            }}
            data-scroll
            data-scroll-speed="0.5"

            className="flex justify-center items-center z-10">
            <h1 className="text-7xl font-semibold">{val.name}</h1>
          </div>
            </>
          
        ))}
        {/* Detail page */}
        <AnimatePresence>

        {clickanim > 0 && (
          <motion.div
          initial={{ opacity: 0, scale: 0.3}}
          whileInView={{ opacity: 1, scale: 1}}
          exit={{opacity:0, scale:0.5}}
          transition={{ duration: 0.5, ease: [0.6, 0.0, 0.2, 1] }}
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
          className="fixed inset-0 flex flex-col items-center p-7 z-50 bg-opacity-90 w-[100%] m-auto"
        >
          <div className="flex w-full pb-10">
          <div className="w-[90%] ">
          <a
          target="_blank"
            href={clickData.web}
            className="text-5xl ml-[50%] border-b-2 pb-2 mb-3 text-center font-semibold hover:text-blue-200"
          >
            {clickData.name}
          </a>
          </div>
          <div
                onClick={() => setclickanim(0)}
                className="w-fit ml-64 cursor-pointer text-3xl hover:text-red-400 "
              >
                <i className="ri-close-line"></i>
              </div>
          </div>
          <div className="flex gap-5 mt-5">
            {/* Right data */}
            <div className="w-[50%]">
              <video
                src={clickData.video}
                autoPlay
                loop
                muted
                className="rounded-lg"
              />
            </div>
            {/* Left data */}
            <div className="w-[50%] pl-5">
              
              <h1 className="border-l-2 border-blue-400 px-3">
                {clickData.details}
              </h1>
              {clickData.keyPoint && (
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold text-blue-300 mb-2">
                    Key Features of Website
                  </h1>
                  {Object.values(clickData.keyPoint).map((v, i) => (
                    <li key={i} className="text-lg">
                      {v}
                    </li>
                  ))}
                </div>
              )}
              <h1 className="text-2xl font-semibold text-blue-300 mt-4 border-t-2 p-2">
                Technologies Used
              </h1>
              {Object.values(clickData.languages).map((v, i) => (
                <li key={i}>{v}</li>
              ))}
              <div className="flex gap-4 mt-6">
                <a
                  target="_blank"
                  className="bg-blue-400 px-4 py-2 text-lg font-semibold rounded-lg hover:bg-blue-600"
                  href={clickData.web}
                  rel="noreferrer"
                >
                  <i className="ri-external-link-fill"></i> Website Link
                </a>
                <a
                  target="_blank"
                  className="bg-blue-400 px-4 py-2 text-lg font-semibold rounded-lg hover:bg-blue-600"
                  href={clickData.github}
                  rel="noreferrer"
                >
                  <i className="ri-github-fill mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        )}
        </AnimatePresence>
      </div>
      <div className="mt-[105vh] ">
      <Link to='/allprojects' state={data} className="ml-[50%] bg-gradient-to-tl to-[#b83ac9] from-[#9c61ff] z-30 absolute px-3 py-2 rounded-xl ">See All</Link>
      </div>
      <div className="w-full h-32 bg-black blur-[50px] absolute z-20 top-[91%] opacity-80"></div>
      
    </div>
  );
}

export default ProjectSection;
