import React, { useState } from "react";
import EpicFrame from "../assets/project/project1.png";
import epicframe from "../assets/videos/epicframe.mp4";

function ProjectSection() {
  const data = [
    {
      name: "EpicFrame",
      description:
        "Epic Frame is a platform showcasing movie, TV show, and actor details, including their filmographies, web series, and roles.",
      image: EpicFrame,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and tv show details, actors detials",
      web: "https://aloksingh06.github.io/EpicFrame/",
    },
    {
      name: "Obys Agency",
      description: "2 shows review and finding the best movie for you",
      image: EpicFrame,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and tv show details, actors detials",
      web: "https://aloksingh06.github.io/Obys-Agency-clone/",
    },
    {
      name: "Refokus",
      description:
        "3this is site for movie and tv shows review and finding the best movie for you",
      image: EpicFrame,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and tv show details, actors detials",
      web: "https://aloksingh06.github.io/refokus/",
    },
    {
      name: "exoape",
      description:
        "4this is site for movie and tv shows review and finding the best movie for you",
      image: EpicFrame,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and tv show details, actors detials",
      web: "https://aloksingh06.github.io/EpicFrame/",
    },
    {
      name: "Dribble",
      description:
        "5this is site for movie and tv shows review and finding the best movie for you",
      image: EpicFrame,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and tv show details, actors detials",
      web: "https://aloksingh06.github.io/EpicFrame/",
    },
  ];

  // State to track which div is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickanim, setclickanim] = useState(null);
  const [clickData, setclickData] = useState(null);
  console.log(clickanim);
  const handleclick = (data, idx) => {
    setclickData(data);
    setclickanim(idx+1);
    console.log(data);
  };

  return (
    <div
      id="projects"
      className="w-full relative  bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]"
    >
      <h1 className="text-center text-5xl font-semibold py-10">Projects</h1>
      <div className="flex justify-center items-center w-[80%] h-screen m-auto  flex-wrap">
        {data.map((val, idx) => (
          <div
            key={idx}
            className={` relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer border-2 border-gray-300 bg-gradient-to-r to-[#654ea3] from-[#eaafc8] ${
              hoveredIndex === idx
                ? "w-[24rem] h-[20rem]"
                : "w-[21rem] h-[14rem] mx-8 my-12 p-5"
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleclick(val, idx)}
          >
            {hoveredIndex === idx ? (
              <>
                <video
                  src={val.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-2/3 object-fit"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
                  <h2 className="text-center text-lg font-bold">{val.name}</h2>
                  <p className="mt-1 text-sm">
                    {val.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={val.image}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
                <h2 className=" absolute bottom-2 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-1">
                  {val.name}
                </h2>
              </>
            )}
          </div>
        ))}
        {clickanim > 0 &&  (
          <div
            
            className="fixed inset-0 bg-black bg-opacity-70 flex flex-col itmes-center p-7 w-screen h-screen z-50"
          > 
         
           <div className="flex gap-5">
            {/* right data */}
           <div className=" w-50%">
                <video  src={clickData.video} autoPlay loop muted></video>
            </div>
            {/* left data */}
            <div className="mt-5 w-[50%]"> 
              <h1 onClick={() => setclickanim(0)} className="bg-red-300 w-fit ml-[90%]" >close</h1>
            <h1 className="text-4xl text-center font-semibold">{clickData.name}</h1>
            <h1 className="mt-4">{clickData.details}</h1>
            </div>
           </div>
           {/* bottom data */}
           <div className="p-20">
               <a target="_blank" className="bg-blue-400 p-3 text-lg font-semibold rounded-lg " href={clickData.web}>Website Link</a>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
