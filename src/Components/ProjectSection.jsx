import React, { useState } from "react";
import EpicFrame from "../assets/project/project1.png";
import obysImg from "../assets/project/obys agency.png";
import background from "../assets/project/detail-background.png";
import cineImg from "../assets/project/cineverse.png";
import epicframe from "../assets/videos/epicframe.mp4";

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
        language3: "REDUX",
      },
      row: "1 / span 3", // Grid row
      column: "1 / span 4", // Grid column
    },
    {
      name: "Obys Agency",
      description: "2 shows review and finding the best movie for you",
      image: obysImg,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and TV show details, actors details",
      web: "https://aloksingh06.github.io/Obys-Agency-clone/",
      github: "https://github.com/aloksingh06/EpicFrame",
      languages: {
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
      row: "4 / span 3",
      column: "4 / span 3",
    },
    {
      name: "Refokus",
      description:
        "This is a site for movie and TV show reviews and finding the best movie for you",
      image: EpicFrame,
      video: epicframe,
      details:
        "Epic Frame is a comprehensive platform designed to provide users with detailed information about movies and TV shows. It includes insights into individual actors, their filmographies, and web series. The project aims to offer an intuitive and visually appealing user interface for exploring entertainment content.",
      feature: "Movie and TV show details, actors details",
      web: "https://aloksingh06.github.io/refokus/",
      github: "https://github.com/aloksingh06/EpicFrame",
      languages: {
        language1: "REACT JS",
        language2: "TAILWIND CSS",
        language3: "REDUX",
      },
      row: "7 / span 3",
      column: "1 / span 3",
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
      row: "7 / span 3",
      column: "4 / span 3",
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
      row: "10 / span 3",
      column: "2 / span 3",
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

  return (
    <div
      id="projects"
      className="w-full h-[250vh] relative bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]"
    >
      <h1 className="text-center text-5xl font-semibold py-10">Projects</h1>
      <div
        style={{
          gridTemplateColumns: "repeat(6, 1fr)", // 3 equal columns
          gridTemplateRows: "repeat(15, 100px)", // 3 equal rows
        }}
        className="grid w-[80%] h-screen m-auto gap-6"
      >
        {data.map((val, idx) => (
          <div
            style={{
              gridRow: val.row,
              gridColumn: val.column,
            }}
            key={idx}
            className={`relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer border-gray-300 bg-gradient-to-r to-[#654ea3] from-[#eaafc8] ${
              hoveredIndex === idx ? "scale-105" : "scale-100"
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
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
                  <h2 className="text-center text-lg font-bold">{val.name}</h2>
                  <p className="mt-1 text-sm">{val.description}</p>
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
        ))}

        {/* Detail page */}
        {clickanim > 0 && (
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
            className="fixed inset-0 flex flex-col items-center p-7 z-50 bg-opacity-90"
          >
            <a
              href={clickData.web}
              className="text-4xl text-center font-semibold hover:text-blue-200"
            >
              {clickData.name}
            </a>
            <div className="flex gap-5 mt-5">
              {/* Right data */}
              <div className="w-[50%]">
                <video src={clickData.video} autoPlay loop muted className="rounded-lg" />
              </div>
              {/* Left data */}
              <div className="w-[50%] pl-5">
                <div
                  onClick={() => setclickanim(0)}
                  className="w-fit ml-auto cursor-pointer text-3xl hover:text-red-400"
                >
                  <i className="ri-close-line"></i>
                </div>
                <h1 className="border-l-2 border-blue-400 px-3">{clickData.details}</h1>
                {clickData.keyPoint && (
                  <div className="mt-4">
                    <h1 className="text-2xl font-semibold text-blue-300 mb-2">
                      Key Features of Website
                    </h1>
                    {Object.values(clickData.keyPoint).map((v, i) => (
                      <li key={i} className="text-lg">{v}</li>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
