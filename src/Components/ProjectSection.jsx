import React, { useState } from "react";
import EpicFrame from "../assets/project/project1.png";
import obysImg from "../assets/project/obys agency.png";
import background from "../assets/project/detail-background.png";
import epicframe from "../assets/videos/epicframe.mp4";
import { div } from "framer-motion/client";

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
      github:"https://github.com/aloksingh06/EpicFrame",
      keyPoint:{
        feature1: "Movie, Web series and TV show details Trailer",
        feature2: "Actors detials",
        feature3: "Trailer",
      },
      languages:{
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
    },
    {
      name: "Obys Agency",
      description: "2 shows review and finding the best movie for you",
      image: obysImg,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and tv show details, actors detials",
      web: "https://aloksingh06.github.io/Obys-Agency-clone/",
      github:"https://github.com/aloksingh06/EpicFrame",
      languages:{
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
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
      github:"https://github.com/aloksingh06/EpicFrame",
      languages:{
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
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
      github:"https://github.com/aloksingh06/EpicFrame",
      languages:{
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
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
      github:"https://github.com/aloksingh06/EpicFrame",
      languages:{
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
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
            className={` relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer  border-gray-300 bg-gradient-to-r to-[#654ea3] from-[#eaafc8] ${
              hoveredIndex === idx
                ? "w-[24rem] h-[20rem]"
                : "w-[21rem] h-[14rem] mx-8 my-12"
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
                  className="w-full h-full object-fot"
                />
                {/* <h2 className=" absolute bottom-2 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-1">
                  {val.name}
                </h2> */}
              </>
            )}
          </div>
        ))}

        {/* detail page */}
        {clickanim > 0 &&  (
          <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
            width: "99%",
            borderRadius:"20px",
            boxShadow:"5px"
          }} 

            className="fixed inset-0 bg-blue-500 bg-opacity-90 flex flex-col itmes-center p-7 w-screen h-screen z-50"
          > 
            <a href={clickData.web} className="text-4xl text-center font-semibold hover:text-blue-200">{clickData.name}</a>
         
           <div className="flex gap-5">
            {/* right data */}
           <div className=" w-50% mt-9">
                <video  src={clickData.video} autoPlay loop muted></video>
            </div>
            {/* left data */}
            <div className=" w-[50%] pl-5"> 
              <div onClick={() => setclickanim(0)} className=" w-fit ml-[90%]" ><i class="ri-close-line text-3xl hover:text-red-400"></i></div>
            <h1 className="w-[95%] border-l-2 px-3">{clickData.details}</h1>
            {clickData.keyPoint && (
              <div className="mt-4">
                <h1 className="text-2xl font-semibold text-blue-300 mb-2">Key Feature of Website</h1>
                {Object.values(clickData.keyPoint).map((v,i)=>(
                  <div key={i}>
                    <li className="text-lg">{v}</li>
                  </div>
                ))}
              </div>
            )}
            <h1 className="text-2xl font-semibold text-blue-300 mb-2 mt-4 border-t-2 p-2 border-blue-400" >Technologies used</h1>
            {Object.values(clickData.languages).map((v,i)=>(
              <div key={i}>
                 <li>{v}</li>
              </div>
            ))}
             <div className="p-5 mt-10">
               <a target="_blank" className="bg-blue-400 p-2 text-lg font-semibold rounded-lg hover:bg-blue-600 " href={clickData.web}><i class="ri-external-link-fill"></i> Website Link</a>
               <a target="_blank" className="bg-blue-400 text-lg p-2 font-semibold rounded-lg ml-4 hover:bg-blue-600" href={clickData.github}><i class="ri-github-fill text-2xl mr-1"></i>github</a>
           </div>
            </div>
            
           </div>
           {/* bottom data */}
          
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
